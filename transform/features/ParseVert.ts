import ts from "typescript";
import { IProject } from "../IProject";

import {
    parse_attribute_declarations,
    parse_uniform_declarations,
    parse_varying_declarations,
    get_type_structs, 
    type_to_struct,
    parse_vert_main 
} from "./utils";

export namespace ParseVert {
    export function parse(
        project: IProject,
        vert: ts.FunctionDeclaration,
        attribute: ts.TypeNode,
        varying: ts.TypeNode,
        uniform: ts.TypeNode,
    ): string {
        const source: string[] = [];

        const header =
            "#version 300 es\n" +
            "precision highp float;";
        source.push(header);

        const structs = get_type_structs(project, uniform).map((type) => type_to_struct(project, type, uniform));
        const struct_declarations = structs.map((struct) => struct.decl).join("\n");
        if (struct_declarations.length) source.push(struct_declarations);

        const struct_implements = structs.map((struct) => struct.impl).join("\n");
        if (struct_implements.length) source.push(struct_implements);

        const attribute_declarations = parse_attribute_declarations(project, attribute);
        if (attribute_declarations.length) source.push(attribute_declarations);

        const varying_declarations = parse_varying_declarations(project, varying);
        if (varying_declarations.length) source.push(varying_declarations);

        const uniform_declarations = parse_uniform_declarations(project, uniform);
        if (uniform_declarations.length) source.push(uniform_declarations);

        const main = parse_vert_main(project, vert);
        source.push(main);

        return source.join("\n\n");
    }
}

