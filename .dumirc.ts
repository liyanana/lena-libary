import { defineConfig } from 'dumi';

let base: string | undefined = '/lena-libary';
let publicPath: string | undefined = '/lena-libary/';
if (process.env.SITE_BUILD_ENV === 'PREVIEW') {
  base = undefined;
  publicPath = undefined;
}
export default defineConfig({
  outputPath: 'doc-site',
  themeConfig: {
    name: 'lena',
  },
  title: 'lena libaray',
  exportStatic: {}, // 后续会部署到 github pages 直接全部生成静态页面 不走前端路由
  base, // 此处更换为自己的仓库名
  publicPath
});
