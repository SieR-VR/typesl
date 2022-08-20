import ts from "typescript";
import { PluginConfig } from "./IPluginConfig";

export interface IProject {
    program: ts.Program;
    compilerOptions: ts.CompilerOptions;
    checker: ts.TypeChecker;
    printer: ts.Printer;
    config: PluginConfig;
}