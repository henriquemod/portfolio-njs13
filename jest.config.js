module.exports = {
  roots: ["<rootDir>/"],
  collectCoverageFrom: [
    "<rootDir>/presentation/**/*.{ts,tsx}",
    "!<rootDir>/app/**/*.{ts,tsx}",
    "!**/*.d.ts",
  ],
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  transform: {
    ".+\\.(ts|tsx)$": "ts-jest",
  },
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/$1",
  },
};
