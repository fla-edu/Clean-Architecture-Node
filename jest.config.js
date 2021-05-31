module.exports = {
  collectCoverage: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  transform: {
    '.+\\.ts$$': 'ts-jest'
  }
}
