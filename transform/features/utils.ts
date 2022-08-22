import ts from "typescript";
import { IProject } from "../IProject";

export function parse_attribute_declarations(
    project: IProject,
    attribute: ts.TypeNode,
): string {
    const type = project.checker.getTypeAtLocation(attribute);
    const properties = project.checker.getPropertiesOfType(type);

    return properties.map((property, i) => {
        const name = property.getName();
        const type = project.checker.getTypeOfSymbolAtLocation(property, attribute);
        const type_string = project.checker.typeToString(type).toLowerCase();

        return `layout(location = ${i}) in ${type_string} ${name};`;
    }).join("\n");
}

export function parse_varying_declarations(
    project: IProject,
    varying: ts.TypeNode,
): string {
    const type = project.checker.getTypeAtLocation(varying);
    const properties = project.checker.getPropertiesOfType(type);

    return properties.map((property, i) => {
        const name = property.getName();
        const type = project.checker.getTypeOfSymbolAtLocation(property, varying);
        const type_string = project.checker.typeToString(type).toLowerCase();

        return `layout(location = ${i}) out ${type_string} ${name};`;
    }).join("\n");
}

export function parse_uniform_declarations(
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

export function get_type_structs(
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

export function type_to_struct(project: IProject, type: ts.Type, node: ts.TypeNode) {
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
    if (target.startsWith("this."))
        target = target.replace("this.", "");

    if (target.startsWith("attribute."))
        target = target.replace("attribute.", "");

    if (target.startsWith("varying."))
        target = target.replace("varying.", "");

    if (target.startsWith("uniform."))
        target = target.replace("uniform.", "");

    return target;
}

export function parse_vert_main(project: IProject, main: ts.FunctionDeclaration) {
    const parse_expr = (expr: ts.Expression): string => {
        if (ts.isBinaryExpression(expr)) {
            const left = parse_expr(expr.left);
            const right = parse_expr(expr.right);
            return `${left} ${expr.operatorToken.getText()} ${right}`;
        }

        if (ts.isIdentifier(expr) || ts.isPropertyAccessExpression(expr) || ts.isElementAccessExpression(expr)) {
            return process_variable_access(expr.getText());
        } 
        
        if (ts.isNumericLiteral(expr)) {
            return expr.getText();
        } 
        
        if (ts.isNewExpression(expr)) {
            const constructor = expr.expression.getText();
            if (!basic_types.includes(constructor))
                throw new Error(`Cannot create new instance of ${constructor}`);

            const args = expr.arguments?.map(parse_expr).join(", ");
            return `${constructor.toLowerCase()}(${args})`;
        }

        if (ts.isCallExpression(expr)) {
            const func = expr.expression;
            const args = expr.arguments?.map(parse_expr).join(", ");
            
            if (ts.isPropertyAccessExpression(func)) {
                const func_name = func.name.getText();
                const target = parse_expr(func.expression);

                if (operator_methods[func_name]) {
                    if (operator_methods[func_name][1] === 1) {
                        return `(${operator_methods[func_name][0]}(${process_variable_access(target)}))`;
                    }

                    if (operator_methods[func_name][1] === 2) {
                        return `(${process_variable_access(target)} ${operator_methods[func_name][0]} ${args})`;
                    }
                }
            }
            
            console.log(expr);
            return `${process_variable_access(func.getText())}(${args})`;
        }

        console.log(expr);
        return expr.getText();
    };

    const parse_stmt = (stmt: ts.Statement) => {
        if (ts.isReturnStatement(stmt)) {
            const expr = stmt.expression;
            if (!expr || expr.kind !== ts.SyntaxKind.ObjectLiteralExpression)
                throw new Error("Return statement must return an object literal.");

            const properties = (expr as ts.ObjectLiteralExpression).properties;
            const properties_text = properties.map((property) => {
                const name = property.name?.getText();
                const value = property.getChildren()[property.getChildren().length - 1];

                return `    ${name} = ${parse_expr(value as ts.Expression)};`;
            }).join("\n");

            return properties_text;
        }

        if (ts.isExpressionStatement(stmt)) {
            const expr = stmt.expression;
            if (!ts.isBinaryExpression(expr))
                throw new Error("Expression statement must be a binary expression.");

            const left = expr.left.getText();
            const right = expr.right;

            return `    ${process_variable_access(left)} = ${parse_expr(right)};`;
        }

        if (ts.isVariableStatement(stmt)) {
            const decl = stmt.declarationList.declarations[0];
            const expr = decl.initializer;
            const type = project.checker.typeToString(project.checker.getTypeAtLocation(decl));

            if (!basic_types.includes(type))
                throw new Error("Cannot declare non-basic type.");

            if (!expr)
                throw new Error("Variable declaration must have an initializer.");

            return `    ${type.toLowerCase()} ${decl.name.getText()} = ${parse_expr(expr)};`;
        }
    }

    const header = `void main() {`;
    const body = main.body?.statements.map(parse_stmt).join("\n");
    const footer = `}`;

    return [header, body, footer].join("\n");
}

export function parse_frag_main(project: IProject, main: ts.FunctionDeclaration) {
    const parse_expr = (expr: ts.Expression): string => {
        if (ts.isBinaryExpression(expr)) {
            const left = parse_expr(expr.left);
            const right = parse_expr(expr.right);
            return `${left} ${expr.operatorToken.getText()} ${right}`;
        }

        if (ts.isIdentifier(expr) || ts.isPropertyAccessExpression(expr) || ts.isElementAccessExpression(expr)) {
            return process_variable_access(expr.getText());
        } 
        
        if (ts.isNumericLiteral(expr)) {
            return expr.getText();
        } 
        
        if (ts.isNewExpression(expr)) {
            const constructor = expr.expression.getText();
            if (!basic_types.includes(constructor))
                throw new Error(`Cannot create new instance of ${constructor}`);

            const args = expr.arguments?.map(parse_expr).join(", ");
            return `${constructor.toLowerCase()}(${args})`;
        }

        if (ts.isCallExpression(expr)) {
            const func = expr.expression;
            const args = expr.arguments?.map(parse_expr).join(", ");
            
            if (ts.isPropertyAccessExpression(func)) {
                const func_name = func.name.getText();
                const target = parse_expr(func.expression);

                if (operator_methods[func_name]) {
                    if (operator_methods[func_name][1] === 1) {
                        return `(${operator_methods[func_name][0]}(${process_variable_access(target)}))`;
                    }

                    if (operator_methods[func_name][1] === 2) {
                        return `(${process_variable_access(target)} ${operator_methods[func_name][0]} ${args})`;
                    }
                }
            }
            
            console.log(expr);
            return `${process_variable_access(func.getText())}(${args})`;
        }

        console.log(expr);
        return expr.getText();
    };

    const parse_stmt = (stmt: ts.Statement) => {
        if (ts.isReturnStatement(stmt)) {
            const expr = stmt.expression!;
            return `    gl_fragColor = ${parse_expr(expr)}`
        }

        if (ts.isExpressionStatement(stmt)) {
            const expr = stmt.expression;
            if (!ts.isBinaryExpression(expr))
                throw new Error("Expression statement must be a binary expression.");

            const left = expr.left.getText();
            const right = expr.right;

            return `    ${process_variable_access(left)} = ${parse_expr(right)};`;
        }

        if (ts.isVariableStatement(stmt)) {
            const decl = stmt.declarationList.declarations[0];
            const expr = decl.initializer;
            const type = project.checker.typeToString(project.checker.getTypeAtLocation(decl));

            if (!basic_types.includes(type))
                throw new Error("Cannot declare non-basic type.");

            if (!expr)
                throw new Error("Variable declaration must have an initializer.");

            return `    ${type.toLowerCase()} ${decl.name.getText()} = ${parse_expr(expr)};`;
        }
    }

    const header = `void main() {`;
    const body = main.body?.statements.map(parse_stmt).join("\n");
    const footer = `}`;

    return [header, body, footer].join("\n");
}

const basic_types = [
    "Bool", "Int", "Uint", "Float",
    "Vec2", "Vec3", "Vec4",
    "Bvec2", "Bvec3", "Bvec4",
    "Ivec2", "Ivec3", "Ivec4",
    "Uvec2", "Uvec3", "Uvec4",
    "Mat2", "Mat3", "Mat4",
    "Sampler2D", "Sampler3D", "SamplerCube", "SamplerCubeShadow", "Sampler2DShadow", "Sampler2DArray", "Sampler2DArrayShadow",
    "Isampler2D", "Isampler3D", "IsamplerCube", "Isampler2DArray",
    "Usampler2D", "Usampler3D", "UsamplerCube", "Usampler2DArray",
];

const operator_methods: { [key: string]: [string, number] } = {
    add: ["+", 2],
    subtract: ["-", 2],
    multiply: ["*", 2],
    divide: ["/", 2],
    modulo: ["%", 2],
    negative: ["-", 1],

    equals: ["==", 2],
    notEquals: ["!=", 2],
    and: ["&&", 2],
    or: ["||", 2],
    not: ["!", 1],

    lessThan: ["<", 2],
    lessThanOrEqual: ["<=", 2],
    greaterThan: [">", 2],
    greaterThanOrEqual: [">=", 2],

    leftShift: ["<<", 2],
    rightShift: [">>", 2],

    bitWiseAnd: ["&", 2],
    bitWiseOr: ["|", 2],
    bitWiseXor: ["^", 2],
    bitWiseNot: ["~", 1],
}