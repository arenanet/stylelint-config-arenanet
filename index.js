"use strict";

module.exports = {
    "extends": "stylelint-config-standard",
    "rules": {
        "at-rule-empty-line-before": [ "always", {
            "except": "first-nested",
            "ignore": "blockless-after-blockless"
        } ],
        "color-hex-case": "upper",
        "comment-empty-line-before": null,
        "declaration-empty-line-before": null,
        "indentation": 4,
        "no-eol-whitespace": [ true, {
            "ignore": "empty-lines"
        }],
        "number-no-trailing-zeros": null,
        "property-no-unknown": [ true, {
            "ignoreProperties": [
                "composes"
            ]
        } ],
        "rule-empty-line-before": [ "always-multi-line", {
            "ignore": [
                "after-comment"
            ],
            "except": [
                "first-nested"
            ]
        } ],
        "selector-pseudo-class-no-unknown": [ true, {
            "ignorePseudoClasses": [
                "global"
            ]
        } ]
    }
};
