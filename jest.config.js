module.exports = {
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  setupFilesAfterEnv: [
    "<rootDir>/src/setupTests.ts"
  ],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
  },
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    "\\.(scss|css|sass)$": "identity-obj-proxy",
    "@root/(.*)": "<rootDir>/$1",
    "@src/(.*)": "<rootDir>/src/$1",
    "@actions/(.*)": "<rootDir>/src/actions/$1",
  },
  testEnvironment: "jsdom",
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.tsx",
    "src/**/*.ts",
    "!src/**/*.spec.tsx",
    "!src/**/_app.tsx",
    "!src/**/_document.tsx",
  ],
  coverageReporters: ["lcov", "json-summary"]
}