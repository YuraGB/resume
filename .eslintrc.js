module.exports = {
    "parserOptions": {"ecmaVersion": 6, "sourceType": "module", "ecmaFeatures": {"jsx": true, modules: true},
            "fix": true,
            "arrow-body-style": 0,
            "block-spacing": [2, "always"],
            "comma-dangle": [2, "never"],
            "constructor-super": 2,
            "eqeqeq": [2, "smart"],
            "func-names": 0,
            "key-spacing": [2, { beforeColon: false, afterColon: true, mode: "minimum" }],
            "max-len": [2, 120, 4, { ignoreComments: true }],
            "no-array-constructor": 2,
            "no-catch-shadow": 2,
            "no-class-assign": 2,
            "no-dupe-class-members": 2,
            "no-empty-pattern": 2,
            "no-extra-boolean-cast": 2,
            "no-multi-spaces": 0,
            "no-multiple-empty-lines": [2, { max: 1, maxEOF: 1 }],
            "no-nested-ternary": 0,
            "no-param-reassign": [2, { props: false }],
            "no-self-compare": 0,
            "no-this-before-super": 2,
            "no-unexpected-multiline": 2,
            "no-unused-expressions": 0,
            "no-unused-vars": [2, { vars: "local", args: "none" }],
            "no-useless-call": 2,
            "no-void": 2,
            "object-shorthand": [2, "methods"],
            "prefer-arrow-callback": 0,
            "prefer-template": 0,
            "space-unary-ops": 2,
            "wrap-iife": [2, "inside"]
	},
	parser: "babel-eslint",

	"rules": {
		"semi": 2,
		"async-await/space-after-async": 2,
		"async-await/space-after-await": 2
	},
	"plugins": ["async-await"]
	
};