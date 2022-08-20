import ShaderProgram, { Attribute, Varying, Uniform, Struct } from "../src/ShaderProgram";
import { Vec4, Vec2, Float, Int, Bool } from "../src/glTypes";

interface TestAttribute extends Attribute {
    readonly inPos: Vec4;
    readonly inTex: Vec2;
}

interface TestVarying extends Varying {
    readonly tex: Vec2;
}

interface TestUniform extends Uniform {
    readonly uColor: Vec4;
    readonly uTexture: Int;

    readonly uTest: TestStruct;
}

interface TestStruct extends Struct {
    readonly test: Float;
    readonly test2: TestStruct2;
}

interface TestStruct2 extends Struct {
    readonly test: Float;
    readonly test2: Float;
}

class TestShader extends ShaderProgram<TestAttribute, TestVarying, TestUniform> {
    vert(attribute: TestAttribute): TestVarying {
        this.gl_Position = attribute.inPos;
        return {
            tex: attribute.inTex,
        }
    }
    frag(varying: TestVarying): Vec4 {
        return {};
    }
}