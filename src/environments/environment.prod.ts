/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
export const environment = {
  production: true,
  apiUrl: 'http://171.244.32.245:88',
  appId: {
    root: 'D84927C4-E682-EA11-80CF-97CC0449692F',
    appId: 'CDE35D5A-0CDE-EA11-80D1-FD504F717D68',
  },
  map: {
    doAnUrl:
      'http://171.244.32.245/arcgis/rest/services/BatDongSan/DoAn/MapServer/0',

    center: [],
    scale: 0,
    arcgisUrl: 'http://171.244.32.245/arcgis/rest/services',
    locatorService:
      'https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer',
    geometryService:
      'http://ditagis.com/arcgis/rest/services/Utilities/Geometry/GeometryServer',
  },
};
