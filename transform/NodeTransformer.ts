import ts from "typescript";

import { IProject } from "./IProject";
import { ShaderProgramTransformer } from "./features/ShaderProgram";

function extendsShaderProgram(expression: ts.ClassDeclaration) {
    return expression.heritageClauses?.some((clause) => {
        return clause.types.some((type) => {
            return type.expression.getText().includes("ShaderProgram");
        });
    }) ?? false;
}

export namespace NodeTransformer {
    export function transform(project: IProject, expression: ts.Node): ts.Node {
        if (ts.isClassDeclaration(expression) && extendsShaderProgram(expression)) {
            ShaderProgramTransformer.transform(project, expression);
        }

        return expression;
    }
}