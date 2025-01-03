import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import {fileURLToPath} from "node:url";
import js from "@eslint/js";
import {FlatCompat} from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends(
    "eslint:recommended",
    "plugin:@angular-eslint/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:@angular-eslint/template/process-inline-templates",
),
    {
        languageOptions: {
            parser: tsParser,
            ecmaVersion: 5,
            sourceType: "module",

            parserOptions: {
                project: ["./tsconfig.json"],
            },
        },

        rules: {
            "arrow-body-style": ["error", "as-needed"],
            "@typescript-eslint/consistent-type-definitions": ["error", "interface"],

            camelcase: ["error", {
                properties: "always",
            }],

            "spaced-comment": ["error", "always"],
            curly: "error",
            "eol-last": ["error", "always"],
            "guard-for-in": "error",

            "no-restricted-imports": ["error", {
                paths: ["rxjs/Rx"],
            }],

            "key-spacing": ["error", {
                beforeColon: false,
                afterColon: true,
            }],

            "@typescript-eslint/member-ordering": ["error", {
                default: ["static-field", "instance-field", "static-method", "instance-method"],
            }],

            "no-eval": "error",

            "no-debugger": "error",
            "no-unused-expressions": "error",
            "prefer-const": "error",
            quotes: ["error", "single"],
            radix: "error",
            semi: ["error", "always"],
            eqeqeq: ["error", "smart"],
            "@typescript-eslint/no-inferrable-types": "off",
            "@angular-eslint/no-empty-lifecycle-method": "error",
            "@angular-eslint/use-lifecycle-interface": "error",
            "@angular-eslint/use-pipe-transform-interface": "error",
            "@angular-eslint/component-class-suffix": "error",
            "@angular-eslint/directive-class-suffix": "error",

            "max-len": ["error", {
                code: 140,
            }],

            "no-trailing-spaces": "error",
            "@typescript-eslint/no-non-null-assertion": "error",
            "@angular-eslint/no-output-on-prefix": "error",
            "@angular-eslint/no-inputs-metadata-property": "error",
            "@angular-eslint/no-outputs-metadata-property": "error",
            "@angular-eslint/no-input-rename": "error",
            "@angular-eslint/no-output-rename": "error",
        }
    }];
