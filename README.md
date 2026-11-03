# 孟祥博 · 个人校样

一个单页个人网站。它把自己当作一份还在修改中的稿子：宋体负责正经，楷体负责心虚，红笔负责说真话。

- 线上形态：一页，中文优先，手机和桌面都能读。
- 交互：右上角「看清样 / 看校样」切换批注；批注会记住你的选择。
- 技术：纯 HTML、CSS、JavaScript，无构建步骤、无第三方服务、无数据收集。

## 本地预览

在仓库根目录运行：

```bash
python3 -m http.server 8000
```

然后打开 <http://localhost:8000>。直接双击 `index.html` 也能看，但用本地服务器可以保证字体加载一致。

## 文件

```
index.html              页面结构、全部文案
assets/css/site.css     版式、颜色、校样标记、响应式
assets/js/site.js       清样/校样切换、阅读进度、目录高亮
assets/fonts/           子集化后的字体（WOFF2）
assets/img/             纸张颗粒、favicon
```

## 上线前请替换

页面里的自我介绍、近况、稿件和批注是**示例文案**，用来把设计撑起来；它们不是已核实的事实。发布前请把下列内容改成你自己的：

1. `index.html` 中 `## 摘要` 一段的姓名、身份与句子。
2. `## 近况` 的四条内容与日期。
3. `## 稿件` 的三行；「本页」目前指向本仓库，可以换成你的作品链接。
4. `## 批注` 的三则短文；如果不想公开，整节可以删掉，同时删掉目录里的 04。
5. 联系区只放了 GitHub；需要邮箱的话，在 `## 来信` 里加一个 `mailto:` 链接。
6. 页脚的「版次」「写于」「更新于」日期。

改文案时尽量保持一行 30–38 个汉字；如果新增了字体子集里没有的汉字，浏览器会回退到系统字体。想让新字也使用站内字体，重新子集化即可：

```bash
pyftsubset /path/to/NotoSerifSC-VF.ttf \
  --text-file=<(sed 's/<[^>]*>//g' index.html; cat assets/js/site.js) \
  --flavor=woff2 --output-file=assets/fonts/noto-serif-sc.woff2 \
  --layout-features='kern,liga,clig,calt,locl,palt' --no-hinting --desubroutinize
```

楷体与等宽字体同理。字体均为 SIL Open Font License：思源宋体（Noto Serif SC）、霞鹜文楷（LXGW WenKai）、IBM Plex Mono。

## 发布

这是一个静态站点，任何静态托管都能用。用 GitHub Pages 的话：

1. 把改动合并到 `main`。
2. 仓库 **Settings → Pages**，Source 选 **Deploy from a branch**，分支 `main`、目录 `/ (root)`，保存。
3. 等一分钟，访问 `https://jeffy-lun.github.io/Personal-Website-Creator/`。

`.nojekyll` 已放好，GitHub Pages 不会再把 `assets/` 当 Jekyll 资源处理。

## 可访问性

- 语义化标题层级与 `main` / `footer` 地标；跳到正文的链接。
- 切换按钮支持键盘，状态通过 `aria-pressed` 和读屏提示播报。
- 关闭 JavaScript 时显示完整校样，切换按钮自动隐藏。
- 页面支持 `prefers-reduced-motion`；所有批注与正文在无动画时也可见。
- 颜色对比度按 WCAG AA 检查；功能文字不小于 11px。

## 设计记录

- `PRODUCT.md`：产品事实、假设与不能编造的内容边界。
- `DESIGN.md`：颜色、字体、网格、校样标记与动效的长期规则。
- `.impeccable/`：本次方向选择与页面 brief（开发记录，不参与页面运行）。

页面是一份校样，不是定稿。欢迎在 [Issues](https://github.com/Jeffy-lun/Personal-Website-Creator/issues) 里批注。
