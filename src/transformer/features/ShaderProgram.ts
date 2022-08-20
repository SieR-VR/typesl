import ts from "typescript";
import * as fs from "fs";
import { IProject } from "../IProject";

import { ParseVert } from "./ParseVert";

export namespace ShaderProgramTransformer {
    export function transform(
        project: IProject,
        expression: ts.ClassDeclaration,
    ) {
        //@ts-expect-error
        const vert = expression.members.find((member) => {
            return member.name?.getText() === "vert";
        }) as ts.FunctionDeclaration;

        //@ts-expect-error
        const frag = expression.members.find((member) => {
            return member.name?.getText() === "frag";
        }) as ts.FunctionDeclaration;

        const parent_type_args = expression.heritageClauses?.find((clause) => {
            return clause.getText().includes("ShaderProgram")
        })?.types[0]?.typeArguments;

        const attribute = parent_type_args?.[0];
        const varying = parent_type_args?.[1];
        const uniform = parent_type_args?.[2];

        const vert_vs = ParseVert.parse(project, vert, attribute!, varying!, uniform!);
        fs.writeFileSync("vert.vs", vert_vs);
    }
}