import babel from 'rollup-plugin-babel';
import svg from 'rollup-plugin-svg';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify-es';
import postcss from 'rollup-plugin-postcss';

export default {
	input: 'src/index.jsx',
	output: {
		file: 'build/package/anfanger.js',
		format: 'iife',
	},
	plugins: [
		postcss({
			modules: true,
			extract: 'anfanger.css',
			sourceMap: true
		}),
		babel({
			exclude: ['node_modules/**'],
			presets: ['@babel/env', '@babel/preset-react']
		}),
		svg({ base64: true }),
		nodeResolve({
			browser: true,
			extensions: ['.mjs', '.js', '.jsx', '.json'],
		}),
		commonjs(),
		uglify(),
	],
};
