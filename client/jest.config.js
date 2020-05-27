module.exports = {
  moduleFileExtensions: ["js", "json", "vue"],
  modulePaths: ["<rootDir>/src", "<rootDir>/node_modules"],
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    ".*\\.(vue)$": "vue-jest"
  },
  snapshotSerializers: ["<rootDir>/node_modules/jest-serializer-vue"],
  "collectCoverage": true,
  "collectCoverageFrom": ["**/*.{js,vue}", "!**/node_modules/**"],
  "coverageReporters": ["html", "text-summary"]
};
