import { HirContext } from "./context";

export interface HirExpression {
    context: HirContext;
    expressionKind: ExpressionKind;
}

export enum ExpressionKind {
    Identifier,
    Literal,
    Binary,
    Unary,
    Call,
    Member,
    Array,
}

export interface IdentifierExpression extends HirExpression {
    expressionKind: ExpressionKind.Identifier;
    name: string;
}

export interface LiteralExpression extends HirExpression {
    expressionKind: ExpressionKind.Literal;
    value: string;
}

export interface BinaryExpression extends HirExpression {
    expressionKind: ExpressionKind.Binary;
    operator: BinaryOperator;
    left: HirExpression;
    right: HirExpression;
}

export enum BinaryOperator {
    Add,
    Subtract,
    Multiply,
    Divide,
    Modulus,
    Equal,
    NotEqual,
    LessThan,
    LessThanEqual,
    GreaterThan,
    GreaterThanEqual,
    And,
    Or,
}

export interface UnaryExpression extends HirExpression {
    expressionKind: ExpressionKind.Unary;
    operator: UnaryOperator;
    operand: HirExpression;
}

export enum UnaryOperator {
    Negate,
    Not,
}

export interface CallExpression extends HirExpression {
    expressionKind: ExpressionKind.Call;
    function: HirExpression;
    arguments: HirExpression[];
}

export interface MemberExpression extends HirExpression {
    expressionKind: ExpressionKind.Member;
    object: HirExpression;
    member: string;
}

export interface ArrayExpression extends HirExpression {
    expressionKind: ExpressionKind.Array;
    elements: HirExpression[];
}
