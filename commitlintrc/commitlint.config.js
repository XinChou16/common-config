// https://commitlint.js.org/#/reference-configuration

module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPresets: {

  },
  rules: {
    'subject-empty': [2, 'never'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [2, 'always', [
      'build',
      'feat',
      'fix',
      'docs',
      'style',
      'perf',
      'refactor',
      'test',
      'chore'
    ]]
  }
}