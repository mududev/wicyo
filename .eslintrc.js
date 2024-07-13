require("@rushstack/eslint-patch/modern-module-resolution")
module.exports = {
    root: true,
    extends: ["./.eslintrc-auto-import.json", "plugin:vue/vue3-recommended", "prettier", "@vue/eslint-config-prettier"], //"eslint:recommended",
    rules: {
        "vue/require-default-prop": "off",
        "vue/multi-word-component-names": "off",
        "vue/attributes-order": "off",
        "vue/component-definition-name-casing": "off",
        "vue/no-unused-components": "off",
        "vue/valid-v-for": "off",
        "vue/require-v-for-key": "off",
        "vue/require-explicit-emits": "off",
        "vue/no-unused-vars": "off",
        "vue/no-template-shadow": "off",
        "vue/valid-template-root": "off",
        "vue/require-prop-types": "off",
        "vue/no-v-html": "off",
        "vue/no-use-v-if-with-v-for": "off",
        "vue/no-mutating-props": "off",
        "vue/no-useless-template-attributes": "off",
        "vue/attribute-hyphenation": "off",
        "vue/prop-name-casing": "off"
    },
    settings: {
        "import/core-modules": ["vue-router/auto", "vue-router/auto-routes"]
    },
    parserOptions: {
        ecmaVersion: "latest"
    }
}
