module.exports = {
  extends: ['@open-wc/eslint-config'].map(require.resolve),
  rules: {
    'comma-dangle': ['error', 'never'],
    semi: ['error', 'never'],
    'arrow-parens': ['off']
  }
}
