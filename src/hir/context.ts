export interface HirContext {
    glslVersion: string;
    intPrecision: PrecisionKind;
    floatPrecision: PrecisionKind;
}

export enum PrecisionKind {
    Lowp = "lowp",
    Mediump = "mediump",
    Highp = "highp",
}
