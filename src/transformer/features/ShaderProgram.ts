import ts from "typescript";
import * as fs from "fs";
import * as path from "path";
import { IProject } from "../IProject";

import { ParseVert } from "./ParseVert";
import { ParseFrag } from "./ParseFrag";

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
        
        const file_name = expression.name?.getText();        
        const vert_vs = ParseVert.parse(project, vert, attribute!, varying!, uniform!);
        const frag_fs = ParseFrag.parse(project, frag, varying!, uniform!);
        
        if (project.config.glslOutDir) {
            fs.mkdir(project.config.glslOutDir, { recursive: true }, () => {});
            fs.writeFileSync(path.join(project.config.glslOutDir, `${file_name}.vs`), vert_vs);
            fs.writeFileSync(path.join(project.config.glslOutDir, `${file_name}.fs`), frag_fs);
        }
        else {
            const directory = path.dirname(expression.getSourceFile().fileName);

            fs.writeFileSync(path.join(directory, `./${file_name}.vs`), vert_vs);
            fs.writeFileSync(path.join(directory, `./${file_name}.fs`), frag_fs);
        }
        
    }
}