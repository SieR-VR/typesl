export interface Void {}
export interface Bool {}
export interface Int {}
export interface Uint {}
export interface Float {}

export interface Vec2 {}
export interface Vec3 {}
export interface Vec4 {}

export interface Bvec2 {}
export interface Bvec3 {}
export interface Bvec4 {}

export interface Ivec2 {}
export interface Ivec3 {}
export interface Ivec4 {}

export interface Uvec2 {}
export interface Uvec3 {}
export interface Uvec4 {}

export interface Mat2 {}
export interface Mat3 {}
export interface Mat4 {}

export interface Mat2x2 {}
export interface Mat2x3 {}
export interface Mat2x4 {}

export interface Mat3x2 {}
export interface Mat3x3 {}
export interface Mat3x4 {}

export interface Mat4x2 {}
export interface Mat4x3 {}
export interface Mat4x4 {}

export interface Sampler2D {}
export interface Sampler3D {}
export interface SamplerCube {}
export interface SamplerCubeShadow {}
export interface Sampler2DShadow {}
export interface Sampler2DArray {}
export interface Sampler2DArrayShadow {}

export interface Isampler2D {}  
export interface Isampler3D {}
export interface IsamplerCube {}
export interface Isampler2DArray {}

export interface Usampler2D {}
export interface Usampler3D {}
export interface UsamplerCube {}
export interface Usampler2DArray {}

export type UnionScalar = Bool | Int | Uint | Float;
export type UnionVector = Vec2 | Vec3 | Vec4;
export type UnionBVector = Bvec2 | Bvec3 | Bvec4;
export type UnionIVector = Ivec2 | Ivec3 | Ivec4;
export type UnionUVector = Uvec2 | Uvec3 | Uvec4;

export type UnionMatrix = Mat2 | Mat3 | Mat4;
export type UnionMatrix2 = Mat2x2 | Mat2x3 | Mat2x4;
export type UnionMatrix3 = Mat3x2 | Mat3x3 | Mat3x4;
export type UnionMatrix4 = Mat4x2 | Mat4x3 | Mat4x4;

export type UnionSampler = Sampler2D | Sampler3D | SamplerCube | SamplerCubeShadow | Sampler2DShadow | Sampler2DArray | Sampler2DArrayShadow;
export type UnionISampler = Isampler2D | Isampler3D | IsamplerCube | Isampler2DArray;
export type UnionUSampler = Usampler2D | Usampler3D | UsamplerCube | Usampler2DArray;

export type UnionAll = UnionScalar | UnionVector | UnionBVector | UnionIVector | UnionUVector | UnionMatrix | UnionMatrix2 | UnionMatrix3 | UnionMatrix4 | UnionSampler | UnionISampler | UnionUSampler; 

export type AttributeUnion = 
    Float | Vec2 | Vec3 | Vec4 | Mat2 | Mat3 | Mat4; 
export type VaryingUnion =
    Float | Vec2 | Vec3 | Vec4 | Mat2 | Mat3 | Mat4;