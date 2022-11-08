import ts from "typescript";
import { makeTransform, q, Identifier, Source } from "transformer-query";

import ShaderProgram from ".";
import { 
    parse_attribute_declarations,
    parse_varying_declarations,
    parse_uniform_declarations,
    parse_vert_main,
    parse_frag_main,
    get_type_structs,
    type_to_struct,
    ShaderHeader,
} from "./utils";

export default makeTransform([
    (node, checker) => {
        node.query(q`class ${Identifier} extends ${ShaderProgram}<${Identifier}, ${Identifier}, ${Identifier}> {}`)
            .then((shaderPrograms) => {
                shaderPrograms.forEach((program) => processShaderProgram(program, checker));
            });
    }
]);

function processShaderProgram(program: Source<ts.Node>, checker: ts.TypeChecker) {
    if (!ts.isClassDeclaration(program.node)) {
        console.info("Not a class declaration");
        return;
    }

    if (!program.node.name) {
        console.info("No name");
        return;
    }

    const fileName = program.node.name.getText();

    if (!program.node.heritageClauses) {
        console.info("No heritage clauses");
        return;
    }

    if (program.node.heritageClauses.length !== 1) {
        console.info("Too many heritage clauses for ShaderProgram");
        return;
    }

    const [attribute, varying, uniform] = program.node.heritageClauses[0].types;

    if (!ts.isTypeReferenceNode(attribute) || !ts.isTypeReferenceNode(varying) || !ts.isTypeReferenceNode(uniform)) {
        console.info("Not a type reference node");
        return;
    }

    const attributes = parse_attribute_declarations(checker, attribute);
    const varyings = parse_varying_declarations(checker, varying);
    const uniforms = parse_uniform_declarations(checker, uniform);

    const [structDecls, structImpls] = get_type_structs(checker, uniform)
        .map((type) => type_to_struct(checker, type, uniform))
        .reduce(([decls, impls], { decl, impl }) => [decls.concat("\n", decl), impls.concat("\n", impl)], ["", ""]);

    const vert = program
        .query(q`vert(${Identifier}: ${Identifier}, ${Identifier}: ${Identifier}) {}`)
        .then((list) => {
            if (list.length !== 1) {
                console.info("Too many vert functions");
                return "";
            }

            const [vert] = list;

            if (!ts.isFunctionDeclaration(vert.node)) {
                console.info("Not a function declaration");
                return "";
            }

            return parse_vert_main(checker, vert.node);
        });

    const frag = program
        .query(q`frag(${Identifier}: ${Identifier}, ${Identifier}: ${Identifier}) {}`)
        .then((list) => {
            if (list.length !== 1) {
                console.info("Too many frag functions");
                return "";
            }

            const [frag] = list;

            if (!ts.isFunctionDeclaration(frag.node)) {
                console.info("Not a function declaration");
                return "";
            }

            return parse_frag_main(checker, frag.node);
        });

    const vertex = [
        ShaderHeader,
        structDecls,
        structImpls,
        attributes,
        varyings,
        uniforms,
        vert,
    ].filter((s) => s.length).join("\n\n");

    const fragment = [
        ShaderHeader,
        structDecls,
        structImpls,
        varyings,
        uniforms,
        frag,
    ].filter((s) => s.length).join("\n\n");

    console.log(vertex);
    console.log(fragment);
}