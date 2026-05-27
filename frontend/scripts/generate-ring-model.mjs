import fs from "node:fs";
import path from "node:path";
import * as THREE from "three";

const outputPath = path.resolve("d:/10_Github/01_Important/28_Assignment/frontend/public/models/ring.gltf");
fs.mkdirSync(path.dirname(outputPath), { recursive: true });

const geometry = new THREE.TorusGeometry(1, 0.12, 48, 128);
geometry.rotateX(Math.PI / 2);
geometry.computeBoundingBox();

const positionArray = geometry.getAttribute("position").array;
const normalArray = geometry.getAttribute("normal").array;
const uvArray = geometry.getAttribute("uv").array;
const indexArray = geometry.index.array;

const chunks = [];
const bufferViews = [];
let byteOffset = 0;

function appendChunk(typedArray, target) {
  const padding = (4 - (byteOffset % 4)) % 4;
  if (padding) {
    chunks.push(Buffer.alloc(padding));
    byteOffset += padding;
  }

  const chunk = Buffer.from(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
  bufferViews.push({
    buffer: 0,
    byteOffset,
    byteLength: chunk.byteLength,
    target,
  });
  chunks.push(chunk);
  byteOffset += chunk.byteLength;
}

appendChunk(positionArray, 34962);
appendChunk(normalArray, 34962);
appendChunk(uvArray, 34962);
appendChunk(indexArray, 34963);

const combined = Buffer.concat(chunks);
const positionAttribute = geometry.getAttribute("position");

const gltf = {
  asset: {
    version: "2.0",
    generator: "Copilot ring model generator",
  },
  scene: 0,
  scenes: [{ nodes: [0] }],
  nodes: [
    {
      mesh: 0,
      name: "Ring",
    },
  ],
  meshes: [
    {
      name: "RingMesh",
      primitives: [
        {
          attributes: {
            POSITION: 0,
            NORMAL: 1,
            TEXCOORD_0: 2,
          },
          indices: 3,
          material: 0,
        },
      ],
    },
  ],
  materials: [
    {
      name: "Gold",
      doubleSided: true,
      pbrMetallicRoughness: {
        baseColorFactor: [0.83, 0.66, 0.34, 1],
        metallicFactor: 1,
        roughnessFactor: 0.12,
      },
    },
  ],
  buffers: [
    {
      byteLength: combined.byteLength,
      uri: `data:application/octet-stream;base64,${combined.toString("base64")}`,
    },
  ],
  bufferViews,
  accessors: [
    {
      bufferView: 0,
      componentType: 5126,
      count: positionAttribute.count,
      type: "VEC3",
      min: geometry.boundingBox.min.toArray(),
      max: geometry.boundingBox.max.toArray(),
    },
    {
      bufferView: 1,
      componentType: 5126,
      count: geometry.getAttribute("normal").count,
      type: "VEC3",
    },
    {
      bufferView: 2,
      componentType: 5126,
      count: geometry.getAttribute("uv").count,
      type: "VEC2",
    },
    {
      bufferView: 3,
      componentType: 5123,
      count: indexArray.length,
      type: "SCALAR",
    },
  ],
};

fs.writeFileSync(outputPath, JSON.stringify(gltf, null, 2));
console.log(`Wrote ${outputPath}`);
