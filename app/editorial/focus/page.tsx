import type { Metadata } from "next";
import Image from "next/image";
import localFont from "next/font/local";
import { EditorialVideo } from "@/components/editorial-video";
import { focusEditorial } from "@/data/editorial";
import styles from "./editorial.module.css";

const roundedFont = localFont({
  src: "../../../public/editorial/focus/fonts/focus-rounded.woff2",
  weight: "600",
  display: "swap",
  fallback: ["sans-serif"],
});

export const metadata: Metadata = {
  title: { absolute: "专注菜菜 · 宣传视频" },
  description: "专注菜菜宣传视频，Marhoo Studio 出品。",
  robots: { index: false, follow: false },
};

const artwork = "/editorial/focus/christmas/layout";

export default function FocusEditorialPage() {
  const content = focusEditorial;

  return (
    <main lang="zh-CN" className={`${styles.page} ${roundedFont.className}`}>
      <div className={styles.composition}>
        <div aria-hidden="true" className={styles.mobileScenery}>
          <div className={styles.floor} />
          <Image src={`${artwork}/tree.webp`} alt="" width={1193} height={1688} className={styles.tree} />
          <Image src={`${artwork}/snowman.webp`} alt="" width={482} height={746} className={styles.snowman} />
        </div>

        <div className={styles.content}>
          <EditorialVideo
            src={content.video}
            poster={content.poster}
            name={content.name}
            email={content.email}
          />

          <section aria-labelledby="focus-editorial-title" className={styles.details}>
            <Image src={`${artwork}/panel.webp`} alt="" aria-hidden="true" width={1216} height={283} className={styles.panelSurface} />
            <Image src={content.icon} alt="专注菜菜应用图标" width={237} height={239} priority className={styles.icon} />
            <Image src={`${artwork}/dot.webp`} alt="" aria-hidden="true" width={89} height={91} className={styles.dot} />
            <h1 id="focus-editorial-title" className={styles.name}>{content.name}</h1>
            <Image src={`${artwork}/divider.webp`} alt="" aria-hidden="true" width={8} height={210} className={styles.divider} />
            <div className={styles.copy}>
              <p className={styles.tagline}>{content.tagline}</p>
              {content.introduction.trim() && <p className={styles.introduction}>{content.introduction}</p>}
              <a href={`mailto:${content.email}`} className={styles.email}>{content.displayEmail}</a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
