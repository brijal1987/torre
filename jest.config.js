module.exports = {
  // Flag to indicate if Code Coverage to be collected and reported
  collectCoverage: true,

  // An array of glob patterns indicating a set of files for which coverage
  // information should be collected
  collectCoverageFrom: ['src/**/*.js'],

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['./jest.setup.js'],

  coveragePathIgnorePatterns: [
    'app.js',
    '/node_modules/',
    '/__tests__/',
    '/config/',
    '/routes/'
  ],

  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90
    }
  }
}
