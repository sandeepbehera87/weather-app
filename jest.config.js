module.exports = {
    preset: 'jest-preset-angular',
    testMatch: ['**/*.spec.ts'],
    setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
    collectCoverage: true,
    coverageReporters: ['lcov', 'text'],
    coverageDirectory: '<rootDir>/coverage',
    reporters: [
      'default',
      ['jest-html-reporter', { outputPath: '<rootDir>/coverage/test-report.html' }],
      ['jest-junit', { outputDirectory: '<rootDir>/coverage', outputName: 'junit.xml' }]
    ],
  };
  