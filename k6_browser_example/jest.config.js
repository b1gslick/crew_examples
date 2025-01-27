/** @type {import('ts-jest').JestConfigWithTsJest} **/

module.exports = {
  preset: "ts-jest/presets/default-esm",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testEnvironment: "jsdom",
  transformIgnorePatterns: ["/node_modules/(?!@xyflow/react).+\\.js$"],
  transform: {
    "^.+\\.[jt]sx?$": [
      "ts-jest",
      {
        tsconfig: {
          jsx: "react-jsx",
          esModuleInterop: true,
        },
        useESM: true,
        isolatedModules: true,
      },
    ],
  },
  setupFiles: ["<rootDir>/setup.jest.js"],
};
