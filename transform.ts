import ts from "typescript";
import { FileTransformer } from "./transform/FileTransformer";
import { PluginConfig } from "./transform/IPluginConfig";
import { IProject } from "./transform/IProject";

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