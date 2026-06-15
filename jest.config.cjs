// const { createDefaultPreset } = require("ts-jest");

// const tsJestTransformCfg = createDefaultPreset().transform;

// /** @type {import("jest").Config} **/
// module.exports = {
//   testEnvironment: "jsdom",
//   transform: {
//     ...tsJestTransformCfg,
//   },
// };
module.exports = {
  preset: 'ts-jest',             // ts-jest برای تبدیل TS
  testEnvironment: 'jsdom',      // برای React
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest' // تبدیل TSX/TS
  },
  moduleNameMapper: {
    '\\.(css|scss|sass)$': 'identity-obj-proxy' 
  },
};