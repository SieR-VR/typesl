import { HirContext } from "./context";

export interface HirType {
    context: HirContext;
    typeKind: TypeKind;
}

export interface IntType extends HirType {
    typeKind: TypeKind.Int;
}

export interface FloatType extends HirType {
    typeKind: TypeKind.Float;
}

export interface BoolType extends HirType {
    typeKind: TypeKind.Bool;
}

export interface Vec2Type extends HirType {
    typeKind: TypeKind.Vec2;
    dataType: TypeKind.Bool | TypeKind.Int | TypeKind.Float;
}

export interface Vec3Type extends HirType {
    typeKind: TypeKind.Vec3;
    dataType: TypeKind.Bool | TypeKind.Int | TypeKind.Float;
}

export interface Vec4Type extends HirType {
    typeKind: TypeKind.Vec4;
    dataType: TypeKind.Bool | TypeKind.Int | TypeKind.Float;
}

export interface Mat2Type extends HirType {
    typeKind: TypeKind.Mat2;
}

export interface Mat3Type extends HirType {
    typeKind: TypeKind.Mat3;
}

export interface Mat4Type extends HirType {
    typeKind: TypeKind.Mat4;
}

export interface Sampler2DType extends HirType {
    typeKind: TypeKind.Sampler2D;
}

export interface SamplerCubeType extends HirType {
    typeKind: TypeKind.SamplerCube;
}

export interface VoidType extends HirType {
    typeKind: TypeKind.Void;
}

export interface StructType extends HirType {
    typeKind: TypeKind.Struct;
    members: Record<string, HirType>;
}

export interface ArrayType extends HirType {
    typeKind: TypeKind.Array;
    elementType: HirType;
    length: number;
}

export enum TypeKind {
    Int = "int",
    Float = "float",
    Bool = "bool",
    Vec2 = "vec2",
    Vec3 = "vec3",
    Vec4 = "vec4",
    Mat2 = "mat2",
    Mat3 = "mat3",
    Mat4 = "mat4",
    Sampler2D = "sampler2D",
    SamplerCube = "samplerCube",
    Void = "void",
    Struct = "struct",
    Array = "array",
}

export function isType(type: HirType, kind: TypeKind): type is HirType {
    return type.typeKind === kind;
}

export declare function isIntType(type: HirType): type is IntType
export declare function isFloatType(type: HirType): type is FloatType
export declare function isBoolType(type: HirType): type is BoolType
export declare function isVec2Type(type: HirType): type is Vec2Type
export declare function isVec3Type(type: HirType): type is Vec3Type
export declare function isVec4Type(type: HirType): type is Vec4Type
export declare function isMat2Type(type: HirType): type is Mat2Type
export declare function isMat3Type(type: HirType): type is Mat3Type
export declare function isMat4Type(type: HirType): type is Mat4Type
export declare function isSampler2DType(type: HirType): type is Sampler2DType
export declare function isSamplerCubeType(type: HirType): type is SamplerCubeType

const typeKinds = Object.values(TypeKind)

export default new Proxy({}, {
    get(target, p: string, receiver) {
        const [_is, kind] = p.split('is');
        if (!typeKinds.includes(kind as TypeKind))
            return undefined;

        return (type: HirType) => type.typeKind === kind as TypeKind;
    },
})
