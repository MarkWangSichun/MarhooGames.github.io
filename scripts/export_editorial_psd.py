"""Export the editorial artwork without changing the source Photoshop document.

Run with: uv run --with psd-tools --with scipy python scripts/export_editorial_psd.py SOURCE.psd
"""

import sys
from pathlib import Path

from psd_tools import PSDImage


def named(group, name):
    return next(layer for layer in group if layer.name == name)


psd = PSDImage.open(sys.argv[1])
output = Path(__file__).resolve().parents[1] / "public/editorial/focus/christmas/layout"
output.mkdir(parents=True, exist_ok=True)

# The supplied JPG omits the top garland that is visible in the PSD.
wallpaper = named(psd, "壁纸 副本")
decorations = named(psd, "装饰物")
named(decorations, "组 3").visible = False
for layer in psd:
    layer.visible = layer in (wallpaper, decorations)

# Export Photoshop's document values as untagged web RGB, matching the reference
# when rendered in the browser. Avoid converting the Display P3 document twice.
scene = psd.composite(ignore_preview=True, apply_icc=True).convert("RGB")
scene.save(output / "scene.webp", quality=96, method=6)
wallpaper.composite(apply_icc=True).convert("RGB").crop((0, 0, 1033, 1426)).save(
    output / "wallpaper.webp", quality=96, method=6
)
decor = decorations.composite(viewport=(0, 0, 3840, 2160), apply_icc=True)
decor.crop((0, 1422, 3840, 2160)).save(output / "floor.webp", lossless=True, method=6)
named(decorations, "图层 3").composite(apply_icc=True).save(
    output / "tree.webp", lossless=True, method=6
)
named(decorations, "图层 14").composite(apply_icc=True).save(
    output / "snowman.webp", lossless=True, method=6
)

card = named(psd, "1 副本")
card.visible = True
named(card, "panel").composite(apply_icc=True).save(
    output / "panel.webp", lossless=True, method=6
)
named(card, "icon 副本").composite(apply_icc=True).save(
    output / "app-icon.webp", lossless=True, method=6
)
named(named(card, "专注菜菜"), "dot").composite(apply_icc=True).save(
    output / "dot.webp", lossless=True, method=6
)
named(named(card, "组 5"), "组 6").composite(apply_icc=True).save(
    output / "divider.webp", lossless=True, method=6
)
for asset in sorted(output.glob("*.webp")):
    print(f"{asset.name}: {asset.stat().st_size:,} bytes")
