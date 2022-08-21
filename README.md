# TypeSL

**TypeSL** (**Type**script **S**hader **L**anguage) enables Typescript -> GLSL Transpile.

<hr>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#typesl">TypeSL</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<br>

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

# Getting Started

## Prerequisites

1. [NodeJS](https://nodejs.org)

> NodeJS is a javascript runtime. This will enables run tslc.

2. [npm](https://www.npmjs.com/)

> npm (Node Package Manager) is package manager for nodejs, you need this for install TypeSL transpiler.

## Installation

```
npm install (-g) typesl
```

or

```
yarn (global) add typesl
```

# Usage

```
tslc {target file}
```

# Roadmap

- CLI support (sorry)
- Fragment shader (sorry)
- Geometry shader
- Operator methods
- Core profile

# Contributing

Pull request and issues always open!

# License

MIT License
