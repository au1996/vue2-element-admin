module.exports = {
  moduleFileExtensions: ['vue', 'js', 'jsx'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest'
  },
  testMatch: ['<rootDir>/tests/**/*.(spec|test).(js|jsx)|**/__tests__/*.(js|jsx)']
}
