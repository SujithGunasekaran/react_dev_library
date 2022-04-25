import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import babel from "@rollup/plugin-babel";

const packageJson = require("./package.json")

export default [
    {
        input: "src/index.ts",
        external: ['react', 'react-dom'],
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
                name: "react_dev_library",
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            external(),
            resolve(),
            commonjs({ include: 'node_modules/**' }),
            babel({ exclude: 'node_modules/**' }),
            typescript({ tsconfig: "./tsconfig.json" }),
            postcss(),
            terser()
        ]
    },
    {
        input: "dist/esm/types/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        external: [/\.css$/],
        plugins: [dts()]
    }
]
