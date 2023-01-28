import { defineConfig } from 'father';

const headPkgs: string[] = ['button']; // 添加button和tag

export default defineConfig({
  // more father config: https://github.com/umijs/father/blob/master/docs/config.md
  esm: { output: 'dist' },
});
