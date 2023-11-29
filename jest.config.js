import { TextEncoder, TextDecoder } from 'text-encoding-utf-8';
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

module.exports = {
    // root of application code
    roots: [''],

    // list of file extensions that modules use
    moduleFileExtensions: ['js', 'json'],

    // test environment that will be used for testing
    testEnvironment: 'node',

    // list of paths to directories that Jest should use to search for files
    testMatch: ['**/__tests__**/*.test.js'],

};