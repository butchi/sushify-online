import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/index.js',
  dest: 'public/js/bundle.js',
  format: 'umd',
  plugins: [ babel() ]
};
