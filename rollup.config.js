import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";

export default [
  {
    input: "src/index.js",
    output: {
      file: "dist/index.js",
      format: "cjs",
      sourcemap: true,
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
      },
    },
    plugins: [
      peerDepsExternal({
        includeDependencies: true,
      }),
      resolve(),
      babel({
        presets: ["@babel/preset-react"],
      }),
      commonjs(),
    ],
    external: ["react", "react-dom"],
  },
];
