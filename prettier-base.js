module.exports = {
    arrowParens: 'always',
    bracketSpacing: true,
    embeddedLanguageFormatting: 'off',
    endOfLine: 'auto',
    filepath: 'None',
    htmlWhitespaceSensitivity: 'css',
    insertPragma: false,
    jsxBracketSameLine: true,
    jsxSingleQuote: false,
    overrides: [
        {
            files: ['*.json', '.prettierrc', '.eslintrc'],
            options: { parser: 'json' },
        },
    ],
    printWidth: 145,
    proseWrap: 'preserve',
    quoteProps: 'as-needed',
    rangeEnd: Infinity,
    rangeStart: 0,
    requirePragma: false,
    semi: true,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'all',
    useTabs: false,
    vueIndentScriptAndStyle: false,
};
