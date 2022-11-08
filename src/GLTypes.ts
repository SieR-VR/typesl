export class Bool {
    private typename: "bool" = "bool";

    equals(other: Bool | boolean): Bool { return new Bool(); }
    notEquals(other: Bool | boolean): Bool { return new Bool(); }
    and(other: Bool | boolean): Bool { return new Bool(); }
    or(other: Bool | boolean): Bool { return new Bool(); }
    not(): Bool { return new Bool(); }
}
export class Int {
    private typename: "int" = "int";

    add(other: Int | number): Int { return new Int(); }
    subtract(other: Int | number): Int { return new Int(); }
    multiply(other: Int | number): Int { return new Int(); }
    divide(other: Int | number): Int { return new Int(); }
    modulo(other: Int | number): Int { return new Int(); }
    negative(): Int { return new Int(); }

    equals(other: Int | number): Bool { return new Bool(); }
    notEquals(other: Int | number): Bool { return new Bool(); }
    lessThan(other: Int | number): Bool { return new Bool(); }
    lessThanOrEqual(other: Int | number): Bool { return new Bool(); }
    greaterThan(other: Int | number): Bool { return new Bool(); }
    greaterThanOrEqual(other: Int | number): Bool { return new Bool(); }

    bitWiseAnd(other: Int | number): Int { return new Int(); }
    bitWiseOr(other: Int | number): Int { return new Int(); }
    bitWiseXor(other: Int | number): Int { return new Int(); }
    bitWiseNot(): Int { return new Int(); }

    leftShift(other: Uint | number): Int { return new Int(); }
    rightShift(other: Uint | number): Int { return new Int(); }
}
export class Uint {
    private typename: "uint" = "uint";

    add(other: Uint | number): Uint { return new Uint(); }
    subtract(other: Uint | number): Uint { return new Uint(); }
    multiply(other: Uint | number): Uint { return new Uint(); }
    divide(other: Uint | number): Uint { return new Uint(); }
    modulo(other: Uint | number): Uint { return new Uint(); }

    equals(other: Uint | number): Bool { return new Bool(); }
    notEquals(other: Uint | number): Bool { return new Bool(); }
    lessThan(other: Uint | number): Bool { return new Bool(); }
    lessThanOrEqual(other: Uint | number): Bool { return new Bool(); }
    greaterThan(other: Uint | number): Bool { return new Bool(); }
    greaterThanOrEqual(other: Uint | number): Bool { return new Bool(); }

    bitWiseAnd(other: Uint | number): Uint { return new Uint(); }
    bitWiseOr(other: Uint | number): Uint { return new Uint(); }
    bitWiseXor(other: Uint | number): Uint { return new Uint(); }
    bitWiseNot(): Uint { return new Uint(); }

    leftShift(other: Uint | number): Uint { return new Uint(); }
    rightShift(other: Uint | number): Uint { return new Uint(); }
}
export class Float {
    private typename: "float" = "float";

    add(rhs: Float | number): Float { return new Float(); }
    subtract(rhs: Float | number): Float { return new Float(); }
    multiply(rhs: Float | number): Float { return new Float(); }
    divide(rhs: Float | number): Float { return new Float(); }
    negative(): Float { return new Float(); }

    equals(rhs: Float | number): Bool { return new Bool(); }
    notEquals(rhs: Float | number): Bool { return new Bool(); }
    lessThan(rhs: Float | number): Bool { return new Bool(); }
    lessThanOrEqual(rhs: Float | number): Bool { return new Bool(); }
    greaterThan(rhs: Float | number): Bool { return new Bool(); }
    greaterThanOrEqual(rhs: Float | number): Bool { return new Bool(); }
}

export class Vec2 {
    private typename: "vec2" = "vec2";
    constructor(x: Float | Vec2 | number, y?: Float | number) { }

    get x(): Float { return new Float(); }
    get y(): Float { return new Float(); }
    get r(): Float { return new Float(); }
    get g(): Float { return new Float(); }
    get s(): Float { return new Float(); }
    get t(): Float { return new Float(); }
    get 0(): Float { return new Float(); }
    get 1(): Float { return new Float(); }

    add(rhs: Vec2): Vec2 { return new Vec2(0); }
    subtract(rhs: Vec2): Vec2 { return new Vec2(0); }
    multiply(rhs: Vec2): Vec2 { return new Vec2(0); }
    divide(rhs: Vec2): Vec2 { return new Vec2(0); }
    negative(): Vec2 { return new Vec2(0); }
}
export class Vec3 {
    private typename: "vec3" = "vec3";
    constructor(x: Float | Vec2 | Vec3 | number, y?: Float | Vec2 | number, z?: Float | number) { }

    get x(): Float { return new Float(); }
    get y(): Float { return new Float(); }
    get z(): Float { return new Float(); }
    get r(): Float { return new Float(); }
    get g(): Float { return new Float(); }
    get b(): Float { return new Float(); }
    get s(): Float { return new Float(); }
    get t(): Float { return new Float(); }
    get p(): Float { return new Float(); }
    get 0(): Float { return new Float(); }
    get 1(): Float { return new Float(); }
    get 2(): Float { return new Float(); }

    add(rhs: Vec3): Vec3 { return new Vec3(0); }
    subtract(rhs: Vec3): Vec3 { return new Vec3(0); }
    multiply(rhs: Vec3): Vec3 { return new Vec3(0); }
    divide(rhs: Vec3): Vec3 { return new Vec3(0); }
    negative(): Vec3 { return new Vec3(0); }
}
export class Vec4 {
    private typename: "vec4" = "vec4";
    constructor(x: Float | Vec2 | Vec3 | Vec4 | number, y?: Float | Vec2 | Vec3 | number, z?: Float | Vec2 | number, w?: Float | number) { }

    get x(): Float { return new Float(); }
    get y(): Float { return new Float(); }
    get z(): Float { return new Float(); }
    get w(): Float { return new Float(); }
    get r(): Float { return new Float(); }
    get g(): Float { return new Float(); }
    get b(): Float { return new Float(); }
    get a(): Float { return new Float(); }
    get s(): Float { return new Float(); }
    get t(): Float { return new Float(); }
    get p(): Float { return new Float(); }
    get q(): Float { return new Float(); }
    get 0(): Float { return new Float(); }
    get 1(): Float { return new Float(); }
    get 2(): Float { return new Float(); }
    get 3(): Float { return new Float(); }

    add(rhs: Vec4): Vec4 { return new Vec4(0); }
    subtract(rhs: Vec4): Vec4 { return new Vec4(0); }
    multiply(rhs: Vec4): Vec4 { return new Vec4(0); }
    divide(rhs: Vec4): Vec4 { return new Vec4(0); }
    negative(): Vec4 { return new Vec4(0); }
}

export class Bvec2 {
    private typename: "bvec2" = "bvec2";
    constructor(x: Bool | Bvec2 | boolean, y?: Bool | boolean) { }

    get x(): Bool { return new Bool(); }
    get y(): Bool { return new Bool(); }
    get r(): Bool { return new Bool(); }
    get g(): Bool { return new Bool(); }
    get s(): Bool { return new Bool(); }
    get t(): Bool { return new Bool(); }
    get 0(): Bool { return new Bool(); }
    get 1(): Bool { return new Bool(); }
}
export class Bvec3 {
    private typename: "bvec3" = "bvec3";
    constructor(x: Bool | Bvec2 | Bvec3 | boolean, y?: Bool | Bvec2 | boolean, z?: Bool | boolean) { }

    get x(): Bool { return new Bool(); }
    get y(): Bool { return new Bool(); }
    get z(): Bool { return new Bool(); }
    get r(): Bool { return new Bool(); }
    get g(): Bool { return new Bool(); }
    get b(): Bool { return new Bool(); }
    get s(): Bool { return new Bool(); }
    get t(): Bool { return new Bool(); }
    get p(): Bool { return new Bool(); }
    get 0(): Bool { return new Bool(); }
    get 1(): Bool { return new Bool(); }
    get 2(): Bool { return new Bool(); }
}
export class Bvec4 {
    private typename: "bvec4" = "bvec4";
    constructor(x: Bool | Bvec2 | Bvec3 | Bvec4 | boolean, y?: Bool | Bvec2 | Bvec3 | boolean, z?: Bool | Bvec2 | boolean, w?: Bool | boolean) { }

    get x(): Bool { return new Bool(); }
    get y(): Bool { return new Bool(); }
    get z(): Bool { return new Bool(); }
    get w(): Bool { return new Bool(); }
    get r(): Bool { return new Bool(); }
    get g(): Bool { return new Bool(); }
    get b(): Bool { return new Bool(); }
    get a(): Bool { return new Bool(); }
    get s(): Bool { return new Bool(); }
    get t(): Bool { return new Bool(); }
    get p(): Bool { return new Bool(); }
    get q(): Bool { return new Bool(); }
    get 0(): Bool { return new Bool(); }
    get 1(): Bool { return new Bool(); }
    get 2(): Bool { return new Bool(); }
    get 3(): Bool { return new Bool(); }
}

export class Ivec2 {
    private typename: "ivec2" = "ivec2";
    constructor(x: Int | Ivec2 | number, y?: Int | number) { }

    get x(): Int { return new Int(); }
    get y(): Int { return new Int(); }
    get r(): Int { return new Int(); }
    get g(): Int { return new Int(); }
    get s(): Int { return new Int(); }
    get t(): Int { return new Int(); }
    get 0(): Int { return new Int(); }
    get 1(): Int { return new Int(); }

    add(rhs: Ivec2): Ivec2 { return new Ivec2(0); }
    subtract(rhs: Ivec2): Ivec2 { return new Ivec2(0); }
    multiply(rhs: Ivec2): Ivec2 { return new Ivec2(0); }
    divide(rhs: Ivec2): Ivec2 { return new Ivec2(0); }
    negative(): Ivec2 { return new Ivec2(0); }
}
export class Ivec3 {
    private typename: "ivec3" = "ivec3";
    constructor(x: Int | Ivec2 | Ivec3 | number, y?: Int | Ivec2 | number, z?: Int | number) { }

    get x(): Int { return new Int(); }
    get y(): Int { return new Int(); }
    get z(): Int { return new Int(); }
    get r(): Int { return new Int(); }
    get g(): Int { return new Int(); }
    get b(): Int { return new Int(); }
    get s(): Int { return new Int(); }
    get t(): Int { return new Int(); }
    get p(): Int { return new Int(); }
    get 0(): Int { return new Int(); }
    get 1(): Int { return new Int(); }
    get 2(): Int { return new Int(); }

    add(rhs: Ivec3): Ivec3 { return new Ivec3(0); }
    subtract(rhs: Ivec3): Ivec3 { return new Ivec3(0); }
    multiply(rhs: Ivec3): Ivec3 { return new Ivec3(0); }
    divide(rhs: Ivec3): Ivec3 { return new Ivec3(0); }
    negative(): Ivec3 { return new Ivec3(0); }
}
export class Ivec4 {
    private typename: "ivec4" = "ivec4";
    constructor(x: Int | Ivec2 | Ivec3 | Ivec4 | number, y?: Int | Ivec2 | Ivec3 | number, z?: Int | Ivec2 | number, w?: Int | number) { }

    get x(): Int { return new Int(); }
    get y(): Int { return new Int(); }
    get z(): Int { return new Int(); }
    get w(): Int { return new Int(); }
    get r(): Int { return new Int(); }
    get g(): Int { return new Int(); }
    get b(): Int { return new Int(); }
    get a(): Int { return new Int(); }
    get s(): Int { return new Int(); }
    get t(): Int { return new Int(); }
    get p(): Int { return new Int(); }
    get q(): Int { return new Int(); }
    get 0(): Int { return new Int(); }
    get 1(): Int { return new Int(); }
    get 2(): Int { return new Int(); }
    get 3(): Int { return new Int(); }

    add(rhs: Ivec4): Ivec4 { return new Ivec4(0); }
    subtract(rhs: Ivec4): Ivec4 { return new Ivec4(0); }
    multiply(rhs: Ivec4): Ivec4 { return new Ivec4(0); }
    divide(rhs: Ivec4): Ivec4 { return new Ivec4(0); }
    negative(): Ivec4 { return new Ivec4(0); }
}

export class Uvec2 {
    private typename: "uvec2" = "uvec2";
    constructor(x: Uint | Uvec2 | number, y?: Uint | number) { }

    get x(): Uint { return new Uint(); }
    get y(): Uint { return new Uint(); }
    get r(): Uint { return new Uint(); }
    get g(): Uint { return new Uint(); }
    get s(): Uint { return new Uint(); }
    get t(): Uint { return new Uint(); }
    get 0(): Uint { return new Uint(); }
    get 1(): Uint { return new Uint(); }

    add(rhs: Uvec2): Uvec2 { return new Uvec2(0); }
    subtract(rhs: Uvec2): Uvec2 { return new Uvec2(0); }
    multiply(rhs: Uvec2): Uvec2 { return new Uvec2(0); }
    divide(rhs: Uvec2): Uvec2 { return new Uvec2(0); }
}
export class Uvec3 {
    private typename: "uvec3" = "uvec3";
    constructor(x: Uint | Uvec2 | Uvec3 | number, y?: Uint | Uvec2 | number, z?: Uint | number) { }

    get x(): Uint { return new Uint(); }
    get y(): Uint { return new Uint(); }
    get z(): Uint { return new Uint(); }
    get r(): Uint { return new Uint(); }
    get g(): Uint { return new Uint(); }
    get b(): Uint { return new Uint(); }
    get s(): Uint { return new Uint(); }
    get t(): Uint { return new Uint(); }
    get p(): Uint { return new Uint(); }
    get 0(): Uint { return new Uint(); }
    get 1(): Uint { return new Uint(); }
    get 2(): Uint { return new Uint(); }

    add(rhs: Uvec3): Uvec3 { return new Uvec3(0); }
    subtract(rhs: Uvec3): Uvec3 { return new Uvec3(0); }
    multiply(rhs: Uvec3): Uvec3 { return new Uvec3(0); }
    divide(rhs: Uvec3): Uvec3 { return new Uvec3(0); }
}
export class Uvec4 {
    private typename: "uvec4" = "uvec4";
    constructor(x: Uint | Uvec2 | Uvec3 | Uvec4 | number, y?: Uint | Uvec2 | Uvec3 | number, z?: Uint | Uvec2 | number, w?: Uint | number) { }

    get x(): Uint { return new Uint(); }
    get y(): Uint { return new Uint(); }
    get z(): Uint { return new Uint(); }
    get w(): Uint { return new Uint(); }
    get r(): Uint { return new Uint(); }
    get g(): Uint { return new Uint(); }
    get b(): Uint { return new Uint(); }
    get a(): Uint { return new Uint(); }
    get s(): Uint { return new Uint(); }
    get t(): Uint { return new Uint(); }
    get p(): Uint { return new Uint(); }
    get q(): Uint { return new Uint(); }
    get 0(): Uint { return new Uint(); }
    get 1(): Uint { return new Uint(); }
    get 2(): Uint { return new Uint(); }

    add(rhs: Uvec4): Uvec4 { return new Uvec4(0); }
    subtract(rhs: Uvec4): Uvec4 { return new Uvec4(0); }
    multiply(rhs: Uvec4): Uvec4 { return new Uvec4(0); }
    divide(rhs: Uvec4): Uvec4 { return new Uvec4(0); }
}

type Mat2Mul = Float | Vec2 | Mat2;
type Mat2MulResult<T> =
    T extends Float ? Mat2 :
    T extends Vec2 ? Vec2 :
    T extends Mat2 ? Mat2 :
    never;

export class Mat2 {
    private typename: "mat2" = "mat2";
    constructor(...args: (Float | Vec2 | Vec3 | Vec4 | Mat2)[]) { }

    get 0(): Vec2 { return new Vec2(0); }
    get 1(): Vec2 { return new Vec2(0); }

    add(rhs: Mat2): Mat2 { return new Mat2(); }
    subtract(rhs: Mat2): Mat2 { return new Mat2(); }
    multiply<T extends Mat2Mul>(rhs: T): Mat2MulResult<T> { return {} as Mat2MulResult<T>; }
    divide(rhs: Mat2): Mat2 { return new Mat2(); }
}

type Mat3Mul = Float | Vec3 | Mat3;
type Mat3MulResult<T> =
    T extends Float ? Mat3 :
    T extends Vec3 ? Vec3 :
    T extends Mat3 ? Mat3 :
    never;

export class Mat3 {
    private typename: "mat3" = "mat3";
    constructor(...args: (Float | Vec2 | Vec3 | Vec4 | Mat2 | Mat3)[]) { }

    get 0(): Vec3 { return new Vec3(0); }
    get 1(): Vec3 { return new Vec3(0); }
    get 2(): Vec3 { return new Vec3(0); }

    add(rhs: Mat3): Mat3 { return new Mat3(); }
    subtract(rhs: Mat3): Mat3 { return new Mat3(); }
    multiply<T extends Mat3Mul>(rhs: T): Mat3MulResult<T> { return {} as Mat3MulResult<T>; }
    divide(rhs: Mat3): Mat3 { return new Mat3(); }
}

type Mat4Mul = Float | Vec4 | Mat4;
type Mat4MulResult<T> = 
    T extends Float ? Mat4 :
    T extends Vec4 ? Vec4 :
    T extends Mat4 ? Mat4 :
    never;

export class Mat4 {
    private typename: "mat4" = "mat4";
    constructor(...args: (Float | Vec2 | Vec3 | Vec4 | Mat2 | Mat3 | Mat4)[]) { }

    get 0(): Vec4 { return new Vec4(0); }
    get 1(): Vec4 { return new Vec4(0); }
    get 2(): Vec4 { return new Vec4(0); }
    get 3(): Vec4 { return new Vec4(0); }

    add(rhs: Mat4): Mat4 { return new Mat4(); }
    subtract(rhs: Mat4): Mat4 { return new Mat4(); }
    multiply<T extends Mat4Mul>(rhs: T): Mat4MulResult<T> { return {} as Mat4MulResult<T>; }
    divide(rhs: Mat4): Mat4 { return new Mat4(); }
}

export class Sampler2D { private typename: "sampler2D" = "sampler2D"; }
export class Sampler3D { private typename: "sampler3D" = "sampler3D"; }
export class SamplerCube { private typename: "samplerCube" = "samplerCube"; }
export class SamplerCubeShadow { private typename: "samplerCubeShadow" = "samplerCubeShadow"; }
export class Sampler2DShadow { private typename: "sampler2DShadow" = "sampler2DShadow"; }
export class Sampler2DArray { private typename: "sampler2DArray" = "sampler2DArray"; }
export class Sampler2DArrayShadow { private typename: "sampler2DArrayShadow" = "sampler2DArrayShadow"; }

export class Isampler2D { private typename: "isampler2D" = "isampler2D"; }
export class Isampler3D { private typename: "isampler3D" = "isampler3D"; }
export class IsamplerCube { private typename: "isamplerCube" = "isamplerCube"; }
export class Isampler2DArray { private typename: "isampler2DArray" = "isampler2DArray"; }

export class Usampler2D { private typename: "usampler2D" = "usampler2D"; }
export class Usampler3D { private typename: "usampler3D" = "usampler3D"; }
export class UsamplerCube { private typename: "usamplerCube" = "usamplerCube"; }
export class Usampler2DArray { private typename: "usampler2DArray" = "usampler2DArray"; }

export type UnionScalar = Bool | Int | Uint | Float;
export type UnionVector = Vec2 | Vec3 | Vec4;
export type UnionBVector = Bvec2 | Bvec3 | Bvec4;
export type UnionIVector = Ivec2 | Ivec3 | Ivec4;
export type UnionUVector = Uvec2 | Uvec3 | Uvec4;

export type UnionMatrix = Mat2 | Mat3 | Mat4;

export type UnionSampler = Sampler2D | Sampler3D | SamplerCube | SamplerCubeShadow | Sampler2DShadow | Sampler2DArray | Sampler2DArrayShadow;
export type UnionISampler = Isampler2D | Isampler3D | IsamplerCube | Isampler2DArray;
export type UnionUSampler = Usampler2D | Usampler3D | UsamplerCube | Usampler2DArray;

export type UnionAll = UnionScalar | UnionVector | UnionBVector | UnionIVector | UnionUVector | UnionMatrix | UnionSampler | UnionISampler | UnionUSampler;

export type AttributeUnion =
    Float | Vec2 | Vec3 | Vec4 | Mat2 | Mat3 | Mat4;
export type VaryingUnion =
    Float | Vec2 | Vec3 | Vec4 | Mat2 | Mat3 | Mat4;