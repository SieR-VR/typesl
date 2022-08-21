# typesl

TypeSL (Typescript Shader Language) enables Typescript -> GLSL Transpile.

# How it works?

It uses typescript transform api. Through transform api, we can access AST of typescript source code.

# Example

```typescript

vert(attribute: RectangleAttribute, uniform: RectangleUniform): RectangleVarying {
    const positionVec4 = new Vec4(attribute.aPosition, 1.0);
    this.gl_Position = uniform.uProjectionMatrix * uniform.uModelViewMatrix * positionVec4;

    return {
        vTexCoord: attribute.aTexCoord
    };
}

```

transpiles to

```glsl

#version 300 es
precision highp float;

attribute vec3 aPosition;
attribute vec2 aTexCoord;

varying vec2 vTexCoord;

uniform mat4 uProjectionMatrix;
uniform mat4 uModelViewMatrix;

void main() {
    vec4 positionVec4 = vec4(aPosition, 1.0);
    gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;
    vTexCoord = aTexCoord;
}

```