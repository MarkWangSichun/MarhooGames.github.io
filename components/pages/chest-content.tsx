"use client";

import Image from "next/image";
import { useTranslate } from "@/lib/i18n";

export function ChestContent() {
  const t = useTranslate();

  return (
    <article className="mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-white/70 bg-white/85 shadow-[0_24px_80px_rgba(24,34,52,0.12)] backdrop-blur">
      <Image
        src="/chest/treehole-chest.jpg"
        alt={t({
          en: "The castle exterior from TreeHole Adventure",
          zh: "《树洞-奇妙之旅》中的城堡外景",
        })}
        width={1200}
        height={757}
        className="h-auto w-full"
        priority
      />

      <div className="p-7 text-center sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
          {t({ en: "TreeHole Adventure", zh: "树洞-奇妙之旅" })}
        </p>
        <h1 className="mt-4 font-heading text-4xl tracking-tight text-stone-950 sm:text-5xl">
          {t({ en: "You found the chest!", zh: "恭喜你找到宝箱！" })}
        </h1>

        <div className="mx-auto mt-7 max-w-2xl space-y-5 text-left text-base leading-8 text-stone-600 sm:text-lg">
          <p>
            {t({
              en: "Wow—you found us! We are Lanxz and Mark, the indie developers of TreeHole Adventure. Congratulations on finding our chest! Here is a little gift for you.",
              zh: "哈哈～被你找到啦！我们是 LANXZ 和 MARK，这款游戏的开发者。恭喜你找到了宝箱！这是送你的小礼物～",
            })}
          </p>

          <Image
            src="/chest/treehole-cake.png"
            alt={t({ en: "A TreeHole cake", zh: "树洞蛋糕" })}
            width={197}
            height={192}
            className="mx-auto h-32 w-32 object-contain sm:h-36 sm:w-36"
          />

          <p>
            {t({
              en: "Haha, just kidding! Although there is no real gift, we want to express our heartfelt thanks. Thank you for downloading our game! Your support gives us more motivation to develop more and better games.",
              zh: "哈哈～开玩笑啦！虽然没有真正的礼物送给你，但我们想对你表示衷心的感谢！感谢你下载我们的游戏！你的支持给了我们更多动力，去开发更多、更好玩的游戏！",
            })}
          </p>
          <p>
            {t({
              en: "We hope you have fun! Making games as indie developers is not easy. If you like our game, please remember to leave us a five-star review in the App Store and share the game with your friends. (>▽<) Thank you again!",
              zh: "希望你在游戏中玩得开心！身为独立游戏开发者，开发游戏很不容易。如果喜欢我们的游戏，请别忘了在 App Store 里给我们一个五星好评，并把游戏分享给你的朋友～(>▽<) 再次谢谢你！",
            })}
          </p>
        </div>
      </div>
    </article>
  );
}
