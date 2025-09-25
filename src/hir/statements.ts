import { HirContext } from "./context";
import { HirExpression } from "./expression";
import { HirType } from "./type";

export interface HirStatement {
    context: HirContext;
    statementKind: StatementKind;
}

export enum StatementKind {
    Declaration,
    Assignment,
    Return,
    If,
    IfElse,
    For,
    While,
    DoWhile,
    Break,
    Continue,
    Discard,
}

export interface DeclarationStatement extends HirStatement {
    statementKind: StatementKind.Declaration;
    name: string;
    type: HirType;
}

export interface AssignmentStatement extends HirStatement {
    statementKind: StatementKind.Assignment;
    name: string;
    value: HirExpression;
}

export interface ReturnStatement extends HirStatement {
    statementKind: StatementKind.Return;
    value: HirExpression;
}

export interface IfStatement extends HirStatement {
    statementKind: StatementKind.If;
    condition: HirExpression;
    body: HirStatement[];
}

export interface IfElseStatement extends HirStatement {
    statementKind: StatementKind.IfElse;
    condition: HirExpression;
    ifBody: HirStatement[];
    elseBody: HirStatement[];
}

export interface ForStatement extends HirStatement {
    statementKind: StatementKind.For;
    initializer: HirStatement;
    condition: HirExpression;
    increment: HirStatement;
    body: HirStatement[];
}

export interface WhileStatement extends HirStatement {
    statementKind: StatementKind.While;
    condition: HirExpression;
    body: HirStatement[];
}

export interface DoWhileStatement extends HirStatement {
    statementKind: StatementKind.DoWhile;
    condition: HirExpression;
    body: HirStatement[];
}

export interface BreakStatement extends HirStatement {
    statementKind: StatementKind.Break;
}

export interface ContinueStatement extends HirStatement {
    statementKind: StatementKind.Continue;
}

export interface DiscardStatement extends HirStatement {
    statementKind: StatementKind.Discard;
}
