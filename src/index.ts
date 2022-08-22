import ts from "typescript";
import { FileTransformer } from "./transformer/FileTransformer";
import { PluginConfig } from "./transformer/IPluginConfig";
import { IProject } from "./transformer/IProject";

export default function transform(
    program: ts.Program,
    config: PluginConfig
): ts.TransformerFactory<ts.SourceFile> {
    const project: IProject = {
        program,
        compilerOptions: program.getCompilerOptions(),
        checker: program.getTypeChecker(),
        printer: ts.createPrinter(),
        config,
    };

    return (context) => (file) => {
        const source = FileTransformer.transform(project, context, file);
        return source;
    }
}

export * from "./ShaderProgram";
export * as GLTypes from "./glTypes";
export * as GLFunctions from "./glFunctions";