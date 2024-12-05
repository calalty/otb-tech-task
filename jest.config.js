module.exports = {
  rootDir: "./",
  testMatch: ["**/*.test.{ts,tsx}", "*.test.{ts,tsx}"],
  transform: {
    "^.+\\.(js|jsx|mjs|ts|tsx)$": ["@swc/jest"],
    "\\.css$": "jest-transform-stub",
  },
  collectCoverageFrom: ["**/*.{ts,tsx}", "*.{ts,tsx}"],
  coverageDirectory: "reports",
  moduleDirectories: ["node_modules", "<rootDir>/"],
  passWithNoTests: true,
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./jest.setup.js"],
  moduleNameMapper: {
    "^@/app/(.*)$": "<rootDir>/app/$1",
    "\\.css$": "jest-transform-stub",
  },
  collectCoverage: false,
};
