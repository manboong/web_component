
import autoprefixer from "autoprefixer";
import babel from "@rollup/plugin-babel";
import cssimport from "postcss-import";
import { dts } from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-commonjs"
import commonjs from "@rollup/plugin-commonjs";


export default [
  {
    input: './src/components/index.ts',
    external: ['react', 'react-dom', '@radix-ui/themes'],
    output: [{
      file: 'dist/esm/index.js',
      format: 'esm',
    }],
    plugins: [
      peerDepsExternal(),
      babel({
        exclude: "node_modules/**",
        babelHelpers: 'bundled',
        presets: [
          '@babel/preset-env',
          '@babel/preset-react',
          '@babel/preset-typescript',
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }),
      resolve({
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      })
    ],
  },
  {
    input: './src/components/index.ts',
    output: [{ file: 'dist/esm/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: ['react', 'react-dom', '@radix-ui/themes']
  },
  {
    input: './src/components/index.ts',
    output: {
      file: 'dist/cjs/index.js',
      format: 'cjs',
    },
    plugins: [
      peerDepsExternal(),
      babel({
        exclude: "node_modules/**",
        babelHelpers: 'bundled',
        presets: [
          '@babel/preset-env',
          '@babel/preset-react',
          '@babel/preset-typescript',
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }),
      resolve({
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      })
    ],
    external: ['react', 'react-dom', '@radix-ui/themes']
  },
  {
    input: './src/components/index.ts',
    output: [{ file: 'dist/cjs/index.d.ts', format: 'cjs' }],
    plugins: [dts()],
    external: ['react', 'react-dom', '@radix-ui/themes']
  }
];