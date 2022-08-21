import ShaderProgram, { Attribute, Varying, Uniform, Struct } from "../src/ShaderProgram";
import { Vec4, Vec2, Vec3, Mat4 } from "../src/glTypes";

interface RectangleAttribute extends Attribute {
    readonly aPosition: Vec3;
    readonly aTexCoord: Vec2;
}

interface RectangleVarying extends Varying {
    readonly vTexCoord: Vec2;
}

interface RectangleUniform extends Uniform {
    readonly uProjectionMatrix: Mat4;
    readonly uModelViewMatrix: Mat4;
}

class RectangleShader extends ShaderProgram<RectangleAttribute, RectangleVarying, RectangleUniform> {
    vert(attribute: RectangleAttribute, uniform: RectangleUniform): RectangleVarying {
        const positionVec4 = new Vec4(attribute.aPosition, 1.0);
        this.gl_Position = uniform.uProjectionMatrix.multiply(uniform.uModelViewMatrix).multiply(positionVec4);

        return {
            vTexCoord: attribute.aTexCoord
        };
    }

    frag(varying: RectangleVarying, uniform: RectangleUniform): Vec4 {
        throw new Error("Method not implemented.");
    }
}