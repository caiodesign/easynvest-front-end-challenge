module.exports = {
  clearMocks: true,
  setupFilesAfterEnv: ['regenerator-runtime/runtime'],
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
  moduleDirectories: ['node_modules', 'src'],
};
