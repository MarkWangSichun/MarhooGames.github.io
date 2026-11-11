This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## 编辑预览页

`/editorial/focus/` 用于分享「专注菜菜」宣传视频，不包含主站导航。
应用名、介绍、邮箱及媒体地址集中在 `data/editorial.ts`；填写 `introduction` 即可显示一句介绍，空字符串会完全隐藏该段。
视频和封面位于 `public/editorial/focus/`，构建后会随静态页面导出到 `out/`。
页面设置了 `noindex, nofollow`，但仍是无需登录即可访问的公开链接。

编辑页标题使用应用原有的江城圆体 600W，位于 `public/editorial/focus/fonts/`，附 OFL 授权说明。网页字体仅包含“专注菜菜”所需字形；修改应用名时需重新生成子集，其余文字会使用后备字体。

圣诞装饰位于 `public/editorial/focus/christmas/furniture/`，来自应用 `Assets/_Packs/Demo/Furnitures` 各家具类别中的 `Home_261109_Xmas_*_12x_canvasModified.png` 原始资源，圣诞树采用 `XmasTree#2` 灯光版本。展示时保留各图片原始宽高比。

视频转换参数：H.264、CRF 21、medium preset、yuv420p、AAC 128 kbps、`-movflags +faststart`，保持原分辨率及帧率。封面取自源视频第 2 秒。

常规页面通过 `(site)` 路由组共用 `SiteShell`；编辑预览页仅使用根布局。部署时沿用现有静态发布流程，并验证该路径可直接打开、MP4 响应为 `video/mp4`，以及 Range 请求返回 `206 Partial Content`。不要把本地源 MOV 文件复制到公开目录。

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
