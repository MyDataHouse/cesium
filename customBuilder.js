import { copy } from "fs-extra";

// const path = "./dist";
// const path = "D:\\3map_office\\SDK3.0_DEMO\\_3umap\\assets\\_3umap_basemap";
const path =
  "/Users/ironbull/Documents/project/sdk3.0_-demo/_3umap/assets/_3umap_basemap";

/**
 *@description
 *@type {{from: string, to: string}[]}
 *@return void
 *@MethodAuthor ironbull
 *@Date 2025-08-11 09:15:27
 */
const template = [
  {
    from: "./Build/CesiumUnminified/Workers",
    to: `${path}/Workers`,
  },
  {
    from: "./Build/CesiumUnminified/ThirdParty",
    to: `${path}/ThirdParty`,
  },
  {
    from: "./Build/CesiumUnminified/Assets",
    to: `${path}/Assets`,
  },
  {
    from: "./Build/CesiumUnminified/Cesium.js",
    to: `${path}/index.js`,
  },
  {
    from: "./Build/CesiumUnminified/Cesium.js.map",
    to: `${path}/Cesium.js.map`,
  },
];

template.forEach(({ from, to }) => {
  copy(from, to);
});
