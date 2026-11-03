# 图版生成记录

两张图都由仓库主人的 ComfyUI（Qwen-Image 2.1）生成，工作流 `/root/comfy/workflows/qwen-image-t2i.json`，尺寸 1024×1280（4:5），20 steps，cfg 2.5。生成后转成 WebP；源 PNG 不随仓库分发。

## 图版 01 · 潮汐标本

- 文件：`tidal-specimen.webp`
- seed：214
- 正向提示词：

```
risograph art print, an impossible tidal specimen made of layered mineral strata, salt crystals and a wave fossil, vermilion red and indigo blue inks on warm cream paper, coarse print grain, flat graphic shapes, generous margins, contemporary art print, no text, no border, 4:5
```

- 负向提示词：

```
text, letters, words, watermark, signature, frame, border, photorealistic, glossy, 3d render, neon, oversaturated, extra limbs, deformed, low quality, blurry
```

## 图版 02 · 看不见的肖像

- 文件：`invisible-portrait.webp`
- seed：908
- 正向提示词：

```
cyanotype art print, a quiet anonymous portrait dissolving into fine contour lines, half-erased face made of indigo ink and paper fibers, warm cream paper, risograph grain, contemporary art print, no text, no border, 4:5
```

- 负向提示词：

```
text, letters, words, watermark, signature, frame, border, photorealistic, glossy, 3d render, neon, oversaturated, deformed face, extra limbs, low quality, blurry, celebrity
```
