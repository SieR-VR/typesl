import * as GLTypes from "./GLTypes";

type TF = GLTypes.Float | GLTypes.Vec2 | GLTypes.Vec3 | GLTypes.Vec4 | number;
type TI = GLTypes.Int | GLTypes.Ivec2 | GLTypes.Ivec3 | GLTypes.Ivec4 | number;
type TU = GLTypes.Uint | GLTypes.Uvec2 | GLTypes.Uvec3 | GLTypes.Uvec4 | number;
type TB = GLTypes.Bool | GLTypes.Bvec2 | GLTypes.Bvec3 | GLTypes.Bvec4 | boolean;

type TTexture = 
    GLTypes.Sampler2D | 
    GLTypes.Sampler3D | 
    GLTypes.SamplerCube | 
    GLTypes.Sampler2DShadow | 
    GLTypes.SamplerCubeShadow |
    GLTypes.Sampler2DArray |
    GLTypes.Sampler2DArrayShadow |
    GLTypes.Isampler2D |
    GLTypes.Isampler3D |
    GLTypes.IsamplerCube |
    GLTypes.Isampler2DArray |
    GLTypes.Usampler2D |
    GLTypes.Usampler3D |
    GLTypes.UsamplerCube |
    GLTypes.Usampler2DArray;

type TTextureProj = 
    GLTypes.Sampler2D | 
    GLTypes.Isampler2D |
    GLTypes.Usampler2D |
    GLTypes.Sampler3D |
    GLTypes.Isampler3D |
    GLTypes.Usampler3D |
    GLTypes.Sampler2DShadow;

type TTextureLod = 
    GLTypes.Sampler2D | GLTypes.Isampler2D | GLTypes.Usampler2D |
    GLTypes.Sampler3D | GLTypes.Isampler3D | GLTypes.Usampler3D |
    GLTypes.SamplerCube | GLTypes.IsamplerCube | GLTypes.UsamplerCube |
    GLTypes.Sampler2DShadow |
    GLTypes.Sampler2DArray | GLTypes.Isampler2DArray | GLTypes.Usampler2DArray;

type TM =
    GLTypes.Mat2 |
    GLTypes.Mat3 |
    GLTypes.Mat4;

type TOuterProduct<T extends TF> =
    T extends GLTypes.Vec2 ?
    GLTypes.Mat2 :
    T extends GLTypes.Vec3 ?
    GLTypes.Mat3 :
    T extends GLTypes.Vec4 ?
    GLTypes.Mat4 : never;

type TTranspose<T extends TM> =
    T extends GLTypes.Mat2 ?
    GLTypes.Mat2 :
    T extends GLTypes.Mat3 ?
    GLTypes.Mat3 :
    T extends GLTypes.Mat4 ?
    GLTypes.Mat4 : never;

type TTextureSize<T extends TTexture> =
    T extends GLTypes.Sampler2D | GLTypes.Sampler2DShadow | GLTypes.Isampler2D | GLTypes.Usampler2D ?
    GLTypes.Vec2 :
    T extends GLTypes.Sampler3D | GLTypes.Isampler3D | GLTypes.Usampler3D ?
    GLTypes.Vec3 :
    T extends GLTypes.SamplerCube | GLTypes.SamplerCubeShadow | GLTypes.IsamplerCube | GLTypes.UsamplerCube ?
    GLTypes.Vec3 :
    T extends GLTypes.Sampler2DArray | GLTypes.Sampler2DArrayShadow | GLTypes.Isampler2DArray | GLTypes.Usampler2DArray ?
    GLTypes.Vec3 : never;

type TTextureP<T extends TTexture> =
    T extends GLTypes.Sampler2D | GLTypes.Isampler2D | GLTypes.Usampler2D ?
    GLTypes.Vec2 :
    T extends GLTypes.Sampler3D | GLTypes.Isampler3D | GLTypes.Usampler3D | GLTypes.SamplerCube | GLTypes.IsamplerCube | GLTypes.UsamplerCube | GLTypes.Sampler2DArray | GLTypes.Isampler2DArray | GLTypes.Usampler2DArray | GLTypes.Sampler2DShadow ?
    GLTypes.Vec3 :
    T extends GLTypes.SamplerCubeShadow | GLTypes.Sampler2DArrayShadow ?
    GLTypes.Vec4 : never;

type TTextureType<T extends TTexture> =
    T extends GLTypes.Sampler2DShadow | GLTypes.SamplerCubeShadow | GLTypes.Sampler2DArrayShadow ?
    GLTypes.Float :
    T extends GLTypes.Sampler2D | GLTypes.Sampler3D | GLTypes.SamplerCube | GLTypes.Sampler2DArray ?
    GLTypes.Vec4 :
    T extends GLTypes.Isampler2D | GLTypes.Isampler3D | GLTypes.IsamplerCube | GLTypes.Isampler2DArray ?
    GLTypes.Ivec4 :
    T extends GLTypes.Usampler2D | GLTypes.Usampler3D | GLTypes.UsamplerCube | GLTypes.Usampler2DArray ?
    GLTypes.Uvec4 : never;

type TTextureProjP<T extends TTextureProj> =
    T extends GLTypes.Sampler2D | GLTypes.Isampler2D | GLTypes.Usampler2D ?
    GLTypes.Vec3 | GLTypes.Vec4 :
    T extends GLTypes.Sampler3D | GLTypes.Isampler3D | GLTypes.Usampler3D | GLTypes.Sampler2DShadow ?
    GLTypes.Vec4 : never; 

type TTextureLodP<T extends TTextureLod> =
    T extends GLTypes.Sampler2D | GLTypes.Sampler3D | GLTypes.SamplerCube | GLTypes.Sampler2DArray ?
    GLTypes.Vec4 :
    T extends GLTypes.Isampler2D | GLTypes.Isampler3D | GLTypes.IsamplerCube | GLTypes.Isampler2DArray ?
    GLTypes.Ivec4 :
    T extends GLTypes.Usampler2D | GLTypes.Usampler3D | GLTypes.UsamplerCube | GLTypes.Usampler2DArray ?
    GLTypes.Uvec4 : 
    T extends GLTypes.Sampler2DShadow ?
    GLTypes.Float : never;

export function radians<T extends TF>(degrees: T): T { return degrees; }
export function degrees<T extends TF>(radians: T): T { return radians; }

export function sin<T extends TF>(angle: T): T { return angle; }
export function cos<T extends TF>(angle: T): T { return angle; }
export function tan<T extends TF>(angle: T): T { return angle; }

export function asin<T extends TF>(x: T): T { return x; }
export function acos<T extends TF>(x: T): T { return x; }
export function atan<T extends TF>(x: T, y?: T): T { return x; }

export function sinh<T extends TF>(x: T): T { return x; }
export function cosh<T extends TF>(x: T): T { return x; }
export function tanh<T extends TF>(x: T): T { return x; }

export function asinh<T extends TF>(x: T): T { return x; }
export function acosh<T extends TF>(x: T): T { return x; }
export function atanh<T extends TF>(x: T): T { return x; }

export function pow<T extends TF>(x: T, y: T): T { return x; }
export function exp<T extends TF>(x: T): T { return x; }
export function log<T extends TF>(x: T): T { return x; }
export function exp2<T extends TF>(x: T): T { return x; }
export function log2<T extends TF>(x: T): T { return x; }
export function sqrt<T extends TF>(x: T): T { return x; }
export function inversesqrt<T extends TF>(x: T): T { return x; }

export function abs<T extends TF | TI>(x: T): T { return x; }
export function sign<T extends TF | TI>(x: T): T { return x; }
export function floor<T extends TF>(x: T): T { return x; }
export function trunc<T extends TF>(x: T): T { return x; }
export function round<T extends TF>(x: T): T { return x; }
export function roundEven<T extends TF>(x: T): T { return x; }
export function ceil<T extends TF>(x: T): T { return x; }
export function fract<T extends TF>(x: T): T { return x; }

export function mod<T extends TF>(x: T, y: T): T { return x; }
export function min<T extends TF | TI | TU>(x: T, y: T): T { return x; }
export function max<T extends TF | TI | TU>(x: T, y: T): T { return x; }
export function clamp<T extends TF | TI | TU>(x: T, minVal: T, maxVal: T): T { return x; }
export function mix<T extends TF | TI | TU>(x: T, y: T, a: T | TB): T { return x; }
export function step<T extends TF | TI | TU>(edge: T, x: T): T { return x; }

export function smoothstep<T extends TF>(edge0: T, edge1: T, x: T): T { return x; }
export function isnan<T extends TF>(x: T): TB { return {} as TB }
export function isinf<T extends TF>(x: T): TB { return {} as TB }
export function floatBitsToInt<T extends TF>(x: T): TI { return {} as TI }
export function floatBitsToUint<T extends TF>(x: T): TU { return {} as TU }
export function intBitsToFloat<T extends TI>(x: T): TF { return {} as TF }
export function uintBitsToFloat<T extends TU>(x: T): TF { return {} as TF }

export function packSnorm2x16(v: GLTypes.Vec2): GLTypes.Uint { return {} as GLTypes.Uint }
export function packUnorm2x16(v: GLTypes.Vec2): GLTypes.Uint { return {} as GLTypes.Uint }
export function unpackSnorm2x16(p: GLTypes.Uint): GLTypes.Vec2 { return {} as GLTypes.Vec2 }
export function unpackUnorm2x16(p: GLTypes.Uint): GLTypes.Vec2 { return {} as GLTypes.Vec2 }
export function packHalf2x16(v: GLTypes.Vec2): GLTypes.Uint { return {} as GLTypes.Uint }
export function unpackHalf2x16(p: GLTypes.Uint): GLTypes.Vec2 { return {} as GLTypes.Vec2 }

export function length<T extends TF>(x: T): GLTypes.Float { return {} as GLTypes.Float }
export function distance<T extends TF>(p0: T, p1: T): GLTypes.Float { return {} as GLTypes.Float }
export function dot<T extends TF>(x: T, y: T): GLTypes.Float { return {} as GLTypes.Float }
export function cross(x: GLTypes.Vec3, y: GLTypes.Vec3): GLTypes.Vec3 { return {} as GLTypes.Vec3 }
export function normalize<T extends TF>(x: T): T { return x; }
export function faceforward<T extends TF>(N: T, I: T, Nref: T): T { return N; }
export function reflect<T extends TF>(I: T, N: T): T { return I; }
export function refract<T extends TF>(I: T, N: T, eta: GLTypes.Float | number): T { return I; }

export function matrixCompMult<T extends TM>(x: T, y: T): T { return x; }
export function outerProduct<T extends TF>(x: T, y: T): TOuterProduct<T> { return {} as TOuterProduct<T> }
export function transpose<T extends TM>(m: T): TTranspose<T> { return {} as TTranspose<T> }
export function determinant<T extends TM>(m: T): GLTypes.Float { return {} as GLTypes.Float }
export function inverse<T extends TM>(m: T): T { return {} as T }

export function lessThan<T extends TF | TI | TU>(x: T, y: T): TB { return {} as TB }
export function lessThanEqual<T extends TF | TI | TU>(x: T, y: T): TB { return {} as TB }
export function greaterThan<T extends TF | TI | TU>(x: T, y: T): TB { return {} as TB }
export function greaterThanEqual<T extends TF | TI | TU>(x: T, y: T): TB { return {} as TB }
export function equal<T extends TF | TI | TU | TB>(x: T, y: T): TB { return {} as TB }
export function notEqual<T extends TF | TI | TU | TB>(x: T, y: T): TB { return {} as TB }
export function any<T extends TF | TI | TU | TB>(b: T): GLTypes.Bool { return {} as GLTypes.Bool }
export function all<T extends TF | TI | TU | TB>(b: T): GLTypes.Bool { return {} as GLTypes.Bool }
export function not<T extends TB>(b: T): T { return b; }

export function textureSize<T extends TTexture>(t: T, lod: GLTypes.Int | number): TTextureSize<T> { return {} as TTextureSize<T> }
export function texture<T extends TTexture>(sampler: T, P: TTextureP<T>, bias?: GLTypes.Float | number): TTextureType<T> { return {} as TTextureType<T> }
export function textureProj<T extends TTextureProj>(sampler: T, P: TTextureProjP<T>, bias?: GLTypes.Float | number): TTextureType<T> { return {} as TTextureType<T> }
export function textureLod<T extends TTextureLod>(sampler: T, P: TTextureLodP<T>, lod: GLTypes.Float | number): TTextureType<T> { return {} as TTextureType<T> }