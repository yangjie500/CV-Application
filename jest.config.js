/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom', // Not testing on node environment but jsdom
  moduleFileExtensions: ['ts','tsx','js','jsx'],
  testPathIgnorePatterns: ["/node_modules/"] //Default
};