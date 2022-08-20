import * as GLTypes from "./glTypes";

export interface Struct {
    [key: string]: GLTypes.UnionAll;
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
    uniform: U = {} as U;

    // Vertex Shader Special Variables 

    readonly gl_VertexID: GLTypes.Int = {} as GLTypes.Int;
    readonly gl_InstanceID: GLTypes.Int = {} as GLTypes.Int;
    gl_Position: GLTypes.Vec4 = {} as GLTypes.Vec4;

    abstract vert(attribute: A): V;

    // Fragment Shader Special Variables

    readonly gl_FragCoord: GLTypes.Vec4 = {} as GLTypes.Vec4;
    readonly gl_FrontFacing: GLTypes.Bool = {} as GLTypes.Bool;
    readonly gl_PointCoord: GLTypes.Vec2 = {} as GLTypes.Vec2;
    gl_FragDepth: GLTypes.Float = {} as GLTypes.Float;

    abstract frag(varying: V): GLTypes.Vec4;
}