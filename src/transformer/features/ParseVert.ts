import ts from "typescript";
import { IProject } from "../IProject";

export namespace ParseVert {
    function parse_attribute_declarations(
        project: IProject,
        attribute: ts.TypeNode,
    ): string {
        const type = project.checker.getTypeAtLocation(attribute);
        const properties = project.checker.getPropertiesOfType(type);

        return properties.map((property) => {
            const name = property.getName();
            const type = project.checker.getTypeOfSymbolAtLocation(property, attribute);
            const type_string = project.checker.typeToString(type).toLowerCase();

            return `attribute ${type_string} ${name};`;
        }).join("\n");
    }

    function parse_varying_declarations(
        project: IProject,
        varying: ts.TypeNode,
    ): string {
        const type = project.checker.getTypeAtLocation(varying);
        const properties = project.checker.getPropertiesOfType(type);

        return properties.map((property) => {
            const name = property.getName();
            const type = project.checker.getTypeOfSymbolAtLocation(property, varying);
            const type_string = project.checker.typeToString(type).toLowerCase();

            return `varying ${type_string} ${name};`;
        }).join("\n");
    }

    function parse_uniform_declarations(
        project: IProject,
        uniform: ts.TypeNode,
    ): string {
        const type = project.checker.getTypeAtLocation(uniform);
        const properties = project.checker.getPropertiesOfType(type);

        return properties.map((property) => {
            const name = property.getName();
            const type = project.checker.getTypeOfSymbolAtLocation(property, uniform);
            const type_string = project.checker.typeToString(type);

            if (basic_types.includes(type_string))
                return `uniform ${type_string.toLowerCase()} ${name};`;
            else
                return `uniform ${type_string} ${name};`;
        }).join("\n");
    }

    function get_type_structs(
        project: IProject,
        type: ts.TypeNode,
    ): ts.Type[] {
        const type_ = project.checker.getTypeAtLocation(type);

        const types: ts.Type[] = [];
        const find = (target_type: ts.Type) => {
            const properties = project.checker.getPropertiesOfType(target_type);

            properties.forEach((property) => {
                const prop_type = project.checker.getTypeOfSymbolAtLocation(property, type);
                const prop_type_string = project.checker.typeToString(prop_type);

                if (!basic_types.includes(prop_type_string)) {
                    types.push(prop_type);
                    find(prop_type);
                }
            });
        }

        find(type_);
        return types;
    }

    function type_to_struct(project: IProject, type: ts.Type, node: ts.TypeNode) {
        const properties = type.getProperties();
        const decl = `struct ${project.checker.typeToString(type)};`;

        const header = `struct ${project.checker.typeToString(type)} {`;
        const body = properties.map((property) => {
            const name = property.getName();
            const prop_type = project.checker.getTypeOfSymbolAtLocation(property, node);
            const type_string = project.checker.typeToString(prop_type);

            if (basic_types.includes(type_string))
                return `${" ".repeat(4)}${type_string.toLowerCase()} ${name};`;
            else
                return `${" ".repeat(4)}${type_string} ${name};`;
        }).join("\n");
        const footer = `};`;

        return {
            decl,
            impl: [header, body, footer].join("\n"),
        }
    }

    function process_variable_access(target: string) {
        if (target.startsWith("attribute."))
            return target.replace("attribute.", "");
        else if (target.startsWith("varying."))
            return target.replace("varying.", "");
        else if (target.startsWith("uniform."))
            return target.replace("uniform.", "");
        else if (target.startsWith("this."))
            return target.replace("this.", "");
        else
            return target;
    }

    function parse_main(project: IProject, main: ts.FunctionDeclaration) {
        const parse_stmt = (stmt: ts.Statement) => {
            if (ts.isReturnStatement(stmt)) {
                const expr = stmt.expression;
                if (!expr || expr.kind !== ts.SyntaxKind.ObjectLiteralExpression)
                    throw new Error("Return statement must return an object literal.");

                const properties = (expr as ts.ObjectLiteralExpression).properties;
                const properties_text = properties.map((property) => {
                    const name = property.name?.getText();
                    const value = property.getChildren()[property.getChildren().length - 1].getText();

                    return `    ${name} = ${process_variable_access(value)};`;
                }).join("\n");

                return properties_text;
            }
            if (ts.isExpressionStatement(stmt)) {
                const expr = stmt.expression;
                if (!ts.isBinaryExpression(expr))
                    throw new Error("Expression statement must be a binary expression.");

                const left = expr.left.getText();
                const right = expr.right.getText();

                return `    ${process_variable_access(left)} = ${process_variable_access(right)};`;
            }
        }

        const header = `void main() {`;
        const body = main.body?.statements.map((statement) => {
            return parse_stmt(statement);
        }).join("\n");
        const footer = `}`;

        return [header, body, footer].join("\n");
    }

    export function parse(
        project: IProject,
        vert: ts.FunctionDeclaration,
        attribute: ts.TypeNode,
        varying: ts.TypeNode,
        uniform: ts.TypeNode,
    ): string {
        const header = "#version 300 es";

        const structs = get_type_structs(project, uniform).map((type) => type_to_struct(project, type, uniform));
        const struct_declarations = structs.map((struct) => struct.decl).join("\n");
        const struct_implements = structs.map((struct) => struct.impl).join("\n");

        const attribute_declarations = parse_attribute_declarations(project, attribute);
        const varying_declarations = parse_varying_declarations(project, varying);
        const uniform_declarations = parse_uniform_declarations(project, uniform);

        const main = parse_main(project, vert);

        return [
            header, 
            attribute_declarations, 
            varying_declarations,
            struct_declarations, 
            struct_implements,
            uniform_declarations,
            main,
        ].join("\n\n");
    }
}

const basic_types = [
    "Bool", "Int", "Uint", "Float",
    "Vec2", "Vec3", "Vec4",
    "Bvec2", "Bvec3", "Bvec4",
    "Ivec2", "Ivec3", "Ivec4",
    "Uvec2", "Uvec3", "Uvec4",
    "Mat2", "Mat3", "Mat4",
    "Mat2x2", "Mat2x3", "Mat2x4",
    "Mat3x2", "Mat3x3", "Mat3x4",
    "Mat4x2", "Mat4x3", "Mat4x4",
    "Sampler2D", "Sampler3D", "SamplerCube", "SamplerCubeShadow", "Sampler2DShadow", "Sampler2DArray", "Sampler2DArrayShadow",
    "Isampler2D", "Isampler3D", "IsamplerCube", "Isampler2DArray",
    "Usampler2D", "Usampler3D", "UsamplerCube", "Usampler2DArray",

    // Why this required?
    "error", "any"
];