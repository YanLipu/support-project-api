const { resolve } = require('path');
const root = resolve(__dirname)
module.exports = {
    rootDir: root,
    displayName: 'root-tests',
    testMatch: ['<rootDir>/test/unit/**/*.test.ts'],
    testEnvironment: 'node',
    clearMocks: true,
    preset: 'ts-jest'
}