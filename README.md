# 孟祥博 · 生成校样

一个单页个人网站。它把身份写成一位 **AI 图像创作者**：纸面校样、红笔批注、模型与提示词的痕迹，以及两张用 ComfyUI 生成的图版。宋体负责正经，楷体负责心虚，红笔负责说真话。

- 线上形态：一页，中文优先，手机和桌面都能读。
- 交互：右上角「看清样 / 看校样」切换批注；批注会记住你的选择。
- 技术：纯 HTML、CSS、JavaScript，无构建步骤、无第三方服务、无数据收集。

## 本地预览

在仓库根目录运行：

```bash
python3 -m http.server 8000
```

然后打开 <http://localhost:8000>。直接双击 `index.html` 也能看，但用本地服务器可以保证字体和图片加载一致。

## 文件

```
index.html                      页面结构、全部文案
assets/css/site.css             版式、颜色、校样标记、图版、响应式
assets/js/site.js               清样/校样切换、阅读进度、目录高亮
assets/fonts/                   子集化后的字体（WOFF2）
assets/img/plates/              两张 ComfyUI 生成图版 + 生成记录
assets/img/                     纸张颗粒、favicon
```

## 关于内容

页面里的自我介绍、近况、图版说明和批注是**按你的要求写的虚构内容**，把主人公安置成一位 AI 图像创作者；它们不是已核实的事实陈述。姓名「孟祥博」和 GitHub `Jeffy-lun` 是真实账号；两张图版是这次用你的 ComfyUI 生成的。想把虚构身份换成真实经历，直接改 `index.html` 和 `assets/img/plates/README.md` 即可。

## 图像来源

- `assets/img/plates/tidal-specimen.webp` — Qwen-Image 2.1 via ComfyUI，1024×1280，seed 214；提示词与负向提示词在 `assets/img/plates/README.md`。
- `assets/img/plates/invisible-portrait.webp` — 同模型，seed 908；提示词在同一个文件。
- 两张图在生成后转为 WebP；源 PNG 不随仓库分发，按记录里的提示词和 seed 可以复现。
- 工作流：`/root/comfy/workflows/qwen-image-t2i.json`（Qwen-Image 2.1，20 steps，cfg 2.5）。

## 字体

思源宋体（Noto Serif SC）、霞鹜文楷（LXGW WenKai）、IBM Plex Mono，均为 SIL Open Font License。字体按当前页面文案子集化；新增汉字时重新子集化：

```bash
pyftsubset /path/to/NotoSerifSC-VF.ttf \
  --text-file=<(sed 's/<[^>]*>//g' index.html; cat assets/js/site.js) \
  --flavor=woff2 --output-file=assets/fonts/noto-serif-sc.woff2 \
  --layout-features='kern,liga,clig,calt,locl,palt' --no-hinting --desubroutinize
```

楷体与等宽字体同理。

## 发布

这是一个静态站点，任何静态托管都能用。用 GitHub Pages 的话：

1. 把改动合并到 `main`。
2. 仓库 **Settings → Pages**，Source 选 **Deploy from a branch**，分支 `main`、目录 `/ (root)`，保存。
3. 等一分钟，访问 `https://jeffy-lun.github.io/Personal-Website-Creator/`。

`.nojekyll` 已放好，GitHub Pages 不会再把 `assets/` 当 Jekyll 资源处理。

## 可访问性

- 语义化标题层级与 `main` / `footer` 地标；跳到正文的链接。
- 图版有描述性 alt text；切换按钮支持键盘，状态通过 `aria-pressed` 和读屏提示播报。
- 关闭 JavaScript 时显示完整校样，切换按钮自动隐藏；`prefers-reduced-motion` 已处理。
- 颜色对比度按 WCAG AA 检查；功能文字不小于 11px。

## 设计记录

- `PRODUCT.md`：产品事实、虚构内容的边界与素材来源。
- `DESIGN.md`：颜色、字体、网格、图版、校样标记与动效的长期规则。
- `.impeccable/`：本次方向选择与页面 brief（开发记录，不参与页面运行）。

页面是一份生成校样，不是定稿。欢迎在 [Issues](https://github.com/Jeffy-lun/Personal-Website-Creator/issues) 里批注。
