module.exports = {
  testEnvironment: 'node',
  coveragePathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: [
    '**/**/*.js',
    '!**/coverage/**/*.js',
    '!**/**/jest.config.js',
    '!**/**/server.js',
    '!**/**/prettier.config.js',
  ],
  coverageReporters: ['html', 'text-summary'],
};
