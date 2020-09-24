module.exports = {

  collectCoverageFrom: [
    '<rootDir>/projects/app/src/**/*.ts',
    '!<rootDir>/projects/app/src**/index.ts',
    '!<rootDir>/projects/app/src/**/*.module.ts'
  ],

  coverageDirectory: 'coverage',

  coverageReporters: [
    'lcov',
    'text-summary'
  ],

  testPathIgnorePatterns: [
    '<rootDir>/coverage/',
    '<rootDir>/dist/',
    '<rootDir>/node_modules/',
    '<rootDir>/projects/**/*.(js|scss)'
  ],

  testMatch: [
    '<rootDir>/projects/app/*.spec.ts',
    '<rootDir>/projects/app/**/*.spec.ts'
  ]
};
