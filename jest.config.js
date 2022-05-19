module.exports = {
  rootDir: __dirname,
  moduleFileExtensions: ['js', 'json', 'vue'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': '@vue/vue2-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/scripts/$1'
  },
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  testMatch: ['<rootDir>/test/**/?(*.)+(spec|test).[jt]s?(x)'],
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/scripts/**/*.{js,vue}',
    '!**/node_modules/**'
  ],
  coverageDirectory: '<rootDir>/coverage'
  // verbose: true
};
