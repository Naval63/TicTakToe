const presets = [
    [
        "@babel/env",
        {
            corejs: "3.0.0",
            targets: {
                "esmodules": true,
                "ie": "11"
            },
            useBuiltIns: "usage",
        },
    ],
];

module.exports = {presets};