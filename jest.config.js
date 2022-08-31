module.exports = {
  cacheDirectory: ".jest-cache",
  moduleNameMapper: {
    "@core/(.*)": "<rootDir>/src/app/core/$1",
  },
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
};
