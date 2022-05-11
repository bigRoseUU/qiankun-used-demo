/** @format */

module.exports = {
  printWidth: 120,
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: 'avoid',
  insertPragma: true,
  tabWidth: 2,
  useTabs: false,
  overrides: [
    {
      files: ['*.json', '.eslintrc', '.tslintrc', '.prettierrc', '.tern-project'],
      options: {
        parser: 'json',
        tabWidth: 2,
      },
    },
    {
      files: '*.{css,sass,scss,less}',
      options: {
        parser: 'css',
        tabWidth: 2,
      },
    },
    {
      files: '*.ts',
      options: {
        parser: 'typescript',
      },
    },
    {
      files: '*.vue',
      options: {
        parser: 'vue',
      },
    },
    {
      files: '*.md',
      options: {
        parser: 'markdown',
      },
    },
  ],
}
