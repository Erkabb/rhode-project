/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: 'ts-jest',
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest",{ tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ["js", "ts", "json"],
};