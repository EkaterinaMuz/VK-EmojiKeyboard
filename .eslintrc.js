module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "react-app",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:import/recommended",
        "airbnb",
        "prettier",
    ],
    overrides: [],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint"],
    rules: {
        "react/react-in-jsx-scope": 0,
        "react/jsx-uses-react": 0,
        'import/no-unresolved': 0,
        "react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx"] }],
        "import/extensions": ["error", {
            "ts": "never",
            "tsx": "never",
            "js": "never",
            "jsx": "never",
            "mjs": "never"
          }],
        "jsx-a11y/no-autofocus": [ 0, {
        "ignoreNonDOM": true
        }],
        'jsx-a11y/click-events-have-key-events': 0,
        "@typescript-eslint/no-unused-vars": ["error"],
        "allowExpressions": 0,
        'no-param-reassign': ['error', {
            props: true,
            ignorePropertyModificationsFor: [
              'state',
            ]
          }],
          
    },
    
};
