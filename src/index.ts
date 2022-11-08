import * as GLTypes from "./GLTypes";

export interface Struct {
    [key: string]: GLTypes.UnionAll | Struct;
}

export interface Attribute {
    [key: string]: GLTypes.AttributeUnion;
}

export interface Varying {
    [key: string]: GLTypes.VaryingUnion;
}

export type Uniform = Record<string, GLTypes.UnionAll | Struct>;

export default abstract class ShaderProgram<A extends Attribute, V extends Varying, U extends Uniform>
{
    // Vertex Shader Special Variables 
    readonly gl_VertexID: GLTypes.Int = {} as GLTypes.Int;
    readonly gl_InstanceID: GLTypes.Int = {} as GLTypes.Int;
    gl_Position: GLTypes.Vec4 = {} as GLTypes.Vec4;

    // Vertex Shader
    abstract vert(attribute: A, uniform: U): V;

    // Fragment Shader Special Variables
    readonly gl_FragCoord: GLTypes.Vec4 = {} as GLTypes.Vec4;
    readonly gl_FrontFacing: GLTypes.Bool = {} as GLTypes.Bool;
    readonly gl_PointCoord: GLTypes.Vec2 = {} as GLTypes.Vec2;
    gl_FragDepth: GLTypes.Float = {} as GLTypes.Float;

    // Fragment Shader
    abstract frag(varying: V, uniform: U): GLTypes.Vec4;
}