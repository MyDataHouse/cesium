import { copy } from "fs-extra";
import { writeFileSync } from "node:fs";

const path = "./dist";

/**
 *@description
 *@type {{from: string, to: string}[]}
 *@return void
 *@MethodAuthor ironbull
 *@Date 2025-08-11 09:15:27
 */
const template = [
  {
    from: "./Build/Cesium/Workers",
    to: `${path}/Workers`,
  },
  {
    from: "./Build/Cesium/ThirdParty",
    to: `${path}/ThirdParty`,
  },
  {
    from: "./Build/Cesium/Assets",
    to: `${path}/Assets`,
  },
  {
    from: "./Build/Cesium/Cesium.js",
    to: `${path}/Cesium.js`,
  },
  {
    from: "./Source/Cesium.js",
    to: `${path}/Cesium.esm.js`,
  },
  {
    from: "./Source/Cesium.d.ts",
    to: `${path}/Cesium.d.ts`,
  },
  {
    from: "./packages/engine/Source/Custom/package.json",
    to: `${path}/package.json`,
  },
  {
    from: "./packages/engine/Source",
    to: `${path}/packages/engine/Source`,
  },
  {
    from: "./packages/engine/index.d.ts",
    to: `${path}/packages/engine/index.d.ts`,
  },
  {
    from: "./packages/engine/index.js",
    to: `${path}/packages/engine/index.js`,
  },
  {
    from: "./packages/engine/package.json",
    to: `${path}/packages/engine/package.json`,
  },
  {
    from: "./packages/widgets/Source",
    to: `${path}/packages/widgets/Source`,
  },
  {
    from: "./packages/widgets/index.d.ts",
    to: `${path}/packages/widgets/index.d.ts`,
  },
  {
    from: "./packages/widgets/index.js",
    to: `${path}/packages/widgets/index.js`,
  },
  {
    from: "./packages/widgets/package.json",
    to: `${path}/packages/widgets/package.json`,
  },
  {
    from: "./pnpm-workspace.yaml",
    to: `${path}/pnpm-workspace.yaml`,
  },
  {
    from: "./CesiumUnminified/Cesium.js",
    to: `${path}/CesiumUnminified.js`,
  },
  {
    from: "./CesiumUnminified/Cesium.js.map",
    to: `${path}/Cesium.js.map`,
  },
];

template.forEach(({ from, to }) => {
  copy(from, to);
});

writeFileSync(
  `${path}/.npmrc`,
  "link-workspace-packages=true\nnode-linker=hoisted",
  "utf8",
);
