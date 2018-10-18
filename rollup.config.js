import typescript from "rollup-plugin-typescript3";
import resolve from  'rollup-plugin-node-resolve';

export default {
    input: 'src/index.ts',
    plugins: [
        resolve( ),
        typescript( )
    ],
    output: [
        { file: 'dist/index.js', format: 'umd', name: 'import-indexts-test' }
    ]
}
