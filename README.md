This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## 媒体资料页

`/press/pomoveggie/` 是「专注菜菜 PomoVeggie」面向 App Store 编辑与媒体的公开资料页，不包含主站导航。旧地址 `/editorial/focus/` 由 nginx 301 跳转到新路径，页面本身也保留了 meta refresh 兜底，不要删除。

路径规则：`/press/<App Store 英文名小写无连字符>/`，与 `data/site.ts` 中的 App 一一对应，便于以后为其他 App 复用。一旦对外发出就不要改路径。

应用名、宣传语、介绍、邮箱及媒体地址集中在 `data/press.ts`；`introduction` 为空字符串时会隐藏该段。
视频、封面、图标与分层素材都放在 `public/press/pomoveggie/`，构建后会随静态页面导出到 `out/`。
页面设置了 `noindex, nofollow` 与 canonical，但仍是无需登录即可访问的公开链接。

页面使用应用原有的江城圆体 600W，位于 `public/press/pomoveggie/fonts/`，附 OFL 授权说明。网页字体仅包含当前信息卡所需字形；修改页面上出现的文字时需更新字体子集，其余文字会使用后备字体。

页面按用户提供的 3840×2160 JPG 排版，素材从配套的《网站布局.psd》分层导出到 `public/press/pomoveggie/`。桌面保留原稿的场景、视频位置及信息卡比例；窄屏将信息卡重排，并单独组合底部树、雪人与地面。文字和邮箱为真实 HTML，视频仍使用原生播放器。

重新导出素材（不会改写源 PSD）：

```bash
uv run --with psd-tools --with scipy python scripts/export_press_psd.py /path/to/网站布局.psd
```

导出脚本按参考 JPG 排除 PSD 多出的顶部彩灯，并保留背景、底部家具、面板、应用图标及虚线分隔素材。

视频参数：H.264 High、1080×1440、30fps、CRF 26、`preset slow`、`yuv420p`，音频从源文件直接复制（AAC 200 kbps，不再二次压缩），`-movflags +faststart` 保证 moov 前置、可以边下边播。源素材是 HEVC 的 `.mov`（1080 与 720 两版），**必须转码**：HEVC 在 Chrome/Firefox 上播不了，且 `.mov` 不适合网页分发。当前文件 10.2MB，原为 CRF 21 的 17.5MB，与源片 SSIM 0.992，肉眼看不出差别。封面取自源视频第 2 秒。公开地址为 `/press/pomoveggie/promo.mp4` 与 `poster.jpg`。

常规页面通过 `(site)` 路由组共用 `SiteShell`；媒体资料页仅使用根布局。

## 部署

站点使用 Next.js 静态导出，生产部署使用 nginx。服务器登录信息、个人网络信息和内部运维日志保存在本地，不提交到公开仓库。

在项目根目录创建 `.env.deploy.local`（已被 Git 忽略，内容按 Bash 语法填写）：

```bash
REMOTE=deploy-user@your-server
```

也可以通过环境变量提供 `REMOTE`，环境变量优先。认证使用本机 SSH 配置；不要把密码或私钥写入仓库。现有脚本和 nginx 配置使用约定的服务器目录，更换部署目录时需要同步修改两者。

执行：

```bash
scripts/deploy.sh
```

脚本依次构建、上传静态文件和 nginx 配置、安装配置并执行线上冒烟检查。任何一步失败都会停止；上传直接更新目标目录，因此停止不代表已经自动恢复上一版文件。

nginx 配置来源为 `deploy/nginx/`，应在仓库中修改后部署。证书由宿主机单独管理。配置检查通过后才执行 reload；检查失败时尝试恢复此前有效的配置。生产环境的访问限制、其他服务和恢复操作请参考本地运维文档。

`next/font/google` 构建时需要联网获取字体，如有需要可通过本机的 `HTTPS_PROXY` 环境变量配置代理。

部署后可运行 `scripts/verify_deploy.sh` 检查公开站点，也可以通过 `BASE` 指定检查地址。检查涵盖常规页面、旧媒体页跳转、视频类型与 Range 请求，以及媒体页的 noindex 和 canonical。

不要把本地源 MOV 文件复制到公开目录。

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
