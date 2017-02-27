"use strict";

module.exports = {
    "extends": "stylelint-config-standard",
    "rules": {
        "color-hex-case": "upper",
        "indentation": 4,
        "declaration-empty-line-before": null,
        "at-rule-empty-line-before": [
            "always",
            {
                "except": "first-nested",
                "ignore": "blockless-after-blockless"
            }
        ],
        "property-no-unknown": [
            true,
            {
                "ignoreProperties": [
                    "composes"
                ]
            }
        ],
        "comment-empty-line-before": null,
        "no-eol-whitespace": [
            true,
            {
                "ignore": "empty-lines"
            }
        ],
        "rule-empty-line-before": [
            "always",
            {
                "ignore": [
                    "after-comment",
                    "inside-block"
                ],
                "except": [
                    "first-nested"
                ]
            }
        ],
        "selector-pseudo-class-no-unknown": [
            true,
            {
                "ignorePseudoClasses": [
                    "global"
                ]
            }
        ]
    }
};
