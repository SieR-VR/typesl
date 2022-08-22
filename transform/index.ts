import ts from "typescript";
import { FileTransformer } from "./FileTransformer";
import { PluginConfig } from "./IPluginConfig";
import { IProject } from "./IProject";

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