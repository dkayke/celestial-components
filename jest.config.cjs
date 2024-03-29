module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  preset: 'ts-jest',
  testMatch: ['**/__tests__/**/*.test.[jt]s?(x)', '**/?(*.)+(spec|test|!stories).[jt]s?(x)'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts?(x)', '!src/index.tsx', '!src/(components|types)/index.ts', '!src/**/*.stories.tsx', '!src/**/*.d.ts'],
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov', 'text', 'text-summary'],
  testPathIgnorePatterns: ['/node_modules/'],
}
