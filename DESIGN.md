---
name: 孟祥博 · 个人校样
description: A personal site set as an author's proof, corrected in the margin.
colors:
  proof-paper: "#f0ebdf"
  ink: "#17140f"
  ink-soft: "#5b5346"
  muted-annotation: "#6b6254"
  correction-red: "#b02a1e"
  pencil-blue: "#2b4d7a"
  print-black: "#000000"
  print-white: "#ffffff"
  print-rule: "#999999"
typography:
  display:
    fontFamily: "Noto Serif SC, Songti SC, SimSun, serif"
    fontSize: "clamp(84px, 11vw, 176px)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "0.02em"
  statement:
    fontFamily: "Noto Serif SC, Songti SC, SimSun, serif"
    fontSize: "clamp(56px, 8.6vw, 128px)"
    fontWeight: 900
    lineHeight: 1.03
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Noto Serif SC, Songti SC, SimSun, serif"
    fontSize: "clamp(34px, 3.6vw, 48px)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "0.03em"
  subhead:
    fontFamily: "Noto Serif SC, Songti SC, SimSun, serif"
    fontSize: "clamp(24px, 2.5vw, 32px)"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.02em"
  lede:
    fontFamily: "Noto Serif SC, Songti SC, SimSun, serif"
    fontSize: "clamp(20px, 2.1vw, 24px)"
    fontWeight: 400
    lineHeight: 1.72
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Noto Serif SC, Songti SC, SimSun, serif"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.9
    letterSpacing: "0"
  annotation:
    fontFamily: "WenKai, Noto Serif SC, Kaiti SC, KaiTi, cursive"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.68
    letterSpacing: "0"
  ui:
    fontFamily: "Noto Serif SC, Songti SC, SimSun, serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.04em"
  label:
    fontFamily: "IBM Plex Mono, Noto Serif SC, SFMono-Regular, monospace"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.16em"
  contact:
    fontFamily: "Noto Serif SC, Songti SC, SimSun, serif"
    fontSize: "clamp(34px, 5vw, 64px)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "0.02em"
  stamp:
    fontFamily: "Noto Serif SC, Songti SC, SimSun, serif"
    fontSize: "19px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.3em"
  seal:
    fontFamily: "Noto Serif SC, Songti SC, SimSun, serif"
    fontSize: "64px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0"
rounded:
  none: "0px"
  seal: "2px"
spacing:
  xxs: "8px"
  xs: "14px"
  sm: "20px"
  md: "32px"
  lg: "48px"
  xl: "64px"
  section: "108px"
components:
  proof-toggle:
    backgroundColor: "{colors.proof-paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 11px"
    height: "30px"
  tab-link:
    backgroundColor: "{colors.proof-paper}"
    textColor: "{colors.muted-annotation}"
    typography: "{typography.ui}"
    rounded: "{rounded.none}"
    padding: "4px 6px"
    height: "52px"
  note-tag:
    backgroundColor: "{colors.proof-paper}"
    textColor: "{colors.correction-red}"
    typography: "{typography.ui}"
    rounded: "{rounded.seal}"
    width: "22px"
    height: "22px"
  stamp:
    backgroundColor: "{colors.proof-paper}"
    textColor: "{colors.correction-red}"
    typography: "{typography.stamp}"
    rounded: "{rounded.none}"
    padding: "9px 12px"
  draft-row:
    backgroundColor: "{colors.proof-paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "24px 0"
  contact-link:
    backgroundColor: "{colors.proof-paper}"
    textColor: "{colors.correction-red}"
    typography: "{typography.contact}"
    rounded: "{rounded.none}"
    padding: "0 0 6px"
  proof-key:
    backgroundColor: "{colors.proof-paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "12px 0 0"
    width: "232px"
  type-specimen:
    backgroundColor: "{colors.proof-paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "20px 0 0"
  plate:
    backgroundColor: "{colors.proof-paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "10px"
---

# Design System: 孟祥博 · 个人校样

## Overview

**Creative North Star: "The Author's Proof"**

This is a single warm sheet of paper, set in Song, corrected in red. The page presents its owner as a text still being edited: a printed statement, a handwritten margin that admits the honest version, and a rubber stamp that refuses to call the draft finished. The visitor is not looking at a portfolio grid; they are looking at one person's working proof, with the proofreader's marks still on it.

The system is built from print-shop material rather than app chrome. A binding rail carries folios and proof metadata; a fore-edge index carries the section tabs; the annotation leaf floats above the set text; crop marks frame the sheet. The two modes are the argument: 校样 shows the corrections, 清样 removes them, and the same page has to work both ways.

**Key Characteristics:**
- Warm proof paper, near-black ink, correction red, and pencil blue as the only chroma.
- Three voices and no more: printed Song, handwritten Kai, and a mono slug line.
- One continuous sheet with a binding rail, folios, crop marks, and a fore-edge tab index.
- A 校样/清样 toggle that removes the annotations without changing the page's identity.
- Flat, square, rule-led: no cards, no shadows, no gradients.
- Motion in two-frame steps: one stamp lands, one reading line grows.

## Colors

A paper-and-ink palette with two working inks: red for corrections and the active state, blue for the second pass and paused work.

### Primary
- **Correction Red** (#b02a1e): The proofreader's ink. Used for deletions, insertions, margin notes, the reading line, the active tab, the contact link, the 未定稿 stamp, and the 阅 seal. Never a filled panel.
- **Proof Paper** (#f0ebdf): The sheet. The only page ground; no alternate surface color.
- **Plain Ink** (#17140f): Body copy, display type, rules at full strength.

### Secondary
- **Pencil Blue** (#2b4d7a): The second pass. Used only for the 清样 stamp and paused work. It never competes with the red on the same element.

### Neutral
- **Soft Ink** (#5b5346): Secondary prose, descriptions, and the 继续 status. 6.37:1 on paper.
- **Muted Annotation** (#6b6254): 11px metadata and quiet labels. 5.04:1 on paper.

### Print
- **Print Black** (#000000): Text and the horizontal name in the print stylesheet.
- **Print White** (#ffffff): The printed page ground.
- **Print Rule** (#999999): Section rules and note separators in print. Screen chrome and stamps are removed; the proof is printed clean.

### Named Rules
**The Red Pen Rule.** Red is correction ink, not decoration. It lives in hairline rules, marks, stamps, and the one contact link; it never fills a panel, a button, or a background.

**The Blue Second-Pass Rule.** Blue belongs to the clean copy and paused work. If red and blue meet, red is the active correction; blue is the state that has been set aside.

## Typography

**Display Font:** Noto Serif SC (with Songti SC, SimSun, serif)
**Body Font:** Noto Serif SC (same stack)
**Annotation Font:** LXGW WenKai (with Kaiti SC, KaiTi, cursive)
**Label / Mono Font:** IBM Plex Mono (with Noto Serif SC as the CJK fallback, so Chinese metadata never disappears)

**Character:** Song is the printed, public voice; Kai is the handwritten private one; mono is the slug line that measures the page. The pairing is deliberately unbalanced: the printed voice is huge and confident, the handwritten voice is small and honest.

### Hierarchy
- **Display** (900, `clamp(84px, 11vw, 176px)`, 0.9, +0.02em): the vertical 孟祥博 name. The only element allowed this scale.
- **Statement** (900, `clamp(56px, 8.6vw, 128px)`, 1.03, −0.03em): 我还在改。 in the first viewport.
- **Headline** (600, `clamp(34px, 3.6vw, 48px)`, 1.12, +0.03em): section titles from 摘要 to 来信.
- **Subhead** (600, `clamp(24px, 2.5vw, 32px)`, 1.3): draft row titles and note titles.
- **Lede** (400, `clamp(20px, 2.1vw, 24px)`, 1.72): one-sentence section introductions.
- **Body** (400, 19px, 1.9; 17px on phones; max 38em / about 65–75ch): all long-form prose.
- **Annotation** (400, 16px, 1.68, WenKai): margin notes, insertions, signatures. Never body copy.
- **UI** (400, 12px, 1): tabs and note tags.
- **Label** (400, 11px, 1, 0.16em, uppercase where Latin): folios, dates, proof slugs, colophon. The 11px floor is absolute for functional text.
- **Contact** (600, `clamp(34px, 5vw, 64px)`, 1.15): the one large GitHub link.
- **Status words** (WenKai, 14px): 进行中 / 继续 / 搁置 / 待定, 校样中 / 已刊 / 待写.
- **Stamp** (600, 19px, 1, 0.3em): 未定稿 / 清样; **Seal** (600, 64px, 1) for 阅.

**Responsive and component sizes.** The role tokens above are the desktop spine. The build also uses these documented steps: 13px keywords and hero count; 14px status words; 15px descriptions, mobile annotation, colophon note, mobile contact secondary, short-height note/sub and stamp; 17px mobile body and note body; 19px mobile now-row titles; 21–28px note titles; 23–32px draft titles; 26–42px contact line; 30–34px signature; 30–44px mobile contact link; 50px mobile seal; 54–86px tablet statement; 62–96px mobile display; 80–150px tablet display; 32px mobile headline; 48–72px short-height name; 40–64px short-height statement. These are sizes, not new voices.

### Named Rules
**The Two Voices Rule.** Song sets the printed statement; Kai is only for the margin, inserts, and the signature. Body copy is never set in Kai.

**The Slug Rule.** Mono is measurement, not atmosphere: folios, dates, proof numbers, and machine labels. Do not set prose in it.

## Layout

The page is one sheet, not a stack of sections. Its width is `min(100% − 2 × pad − 34px, 1300px)`, with `pad: clamp(20px, 4.2vw, 64px)`, and it is centered in the viewport. The 34px reservation keeps the sheet off the viewport edge; the running head is inset to the sheet's left, and the fixed tab rail sits 10px outside its right edge. JS publishes both positions from the sheet's rect so the header, sheet and rail share one frame at 16:9, 4:3 and 9:16. Inside the sheet, the binding rail sits at `clamp(64px, 7vw, 104px)`; the proof-sheet asymmetry lives inside the sheet, not in the page margins.

The chapter grid is three columns: **binding rail** (`clamp(64px, 7vw, 104px)`) for folios and vertical labels, **title column** (`clamp(120px, 15vw, 188px)`) for the section title, and **body** (`1fr`). Column gap is `clamp(20px, 3vw, 40px)`. Inside the body, an annotated passage is a two-column proof block: prose `1fr`, margin notes `minmax(180px, 220px)`, gap 32px. Below 1180px the notes stack under the prose and the chapter note becomes static; below 900px the title column collapses and the whole page becomes a single column.

The hero is a three-column grid: binding metadata, the statement, and the vertical name. It is `min-height: calc(100svh − 60px)`, with the name set vertically at the right and the statement centered on the left. The stamp is attached to the name's lower-left, not floated in the middle. The first viewport ends on a proof foot: a scroll cue, the annotation count, and the folio.

The 图版 section is a vertical sequence of plates, not a grid of cards: the first plate is 640px wide, the second 480px and offset right, the third a dashed 640px placeholder. A plate is a 1px frame with 10px of paper around the image; its caption sets the 图版 number in mono, the title in Song, the status in Kai, and the seed/model line in mono beneath. The margin note sits in the 220px column beside the image above 1180px and stacks under it below. The section is 56px between plates. The hero test print is a 172px plate at the lower right of the first viewport; it appears only above 900px width and 861px height, and disappears in 清样 because it is an annotation.

The vertical rhythm is one scale: section padding `clamp(64px, 9vh, 108px)`, heading margin 12px, lede margin 40px, prose paragraphs 1.4em, note gaps 20px. More space sits above a heading than below it. Headings are sticky on desktop, static on mobile. The prose measure is capped at 38em; at 1440 it lands at about 620px, which is roughly 65–75ch in the Latin sense and 32–34 Chinese characters per line.

Responsive changes:
- **>1180px:** margin notes live in the right column; the tab index is a fixed vertical rail 10px outside the sheet's right edge, with the running head inset to the sheet's left.
- **≤1180px:** notes stack under the prose; chapter notes become static; the meta line hides in the running head.
- **≤980px:** the title column narrows to 110–150px; the sheet keeps its binding rail.
- **≤900px:** the hero stacks, the name becomes horizontal, the tab index becomes a sticky horizontal strip, the reading line becomes a 2px bar at the very top of the viewport, and the sheet is centered with 20px margins.
- **≤900px and ≤680px height:** the hero compresses to close its first viewport: name 48–72px, statement 40–64px, note/sub 14px, stamp 15px, and the top/bottom margins tighten. This is the 4:3 800×600 and 9:16 360×640 case; the foot stays visible.
- **≤560px:** the running-head subtitle hides and the proof toggle tightens; the annotation count stays visible.

There is no dark mode: the use scene is a paper proof under a desk lamp, and inverting it would break the material. Print is supported: chrome, tabs, crop marks, the reading line, and stamps hide; the name goes horizontal; the page prints in the documented print black on print white at 16mm margins, with 1px print-rule section lines; correction marks keep their red ink.

## Elevation & Depth

There are no box shadows. The system is flat. Depth comes from paper and ink layers: the fixed red reading line at the binding edge, the annotation leaf above the set text, the hairline rules between sections, the crop marks at the viewport corners, and the multiply-blended stamps that look pressed into the sheet. A 140px paper-grain tile at 22% opacity sits over the entire page, including the chrome.

### Named Rules
**The Flat Sheet Rule.** No box shadows, no lifted cards, no glass. If a thing needs separation, use a rule, a margin, or a change of ink — not a shadow.

**The One Layer Rule.** Only three things may float above the sheet: the annotation leaf, the fixed reading line, and the stamps. Everything else is printed on the paper.

## Shapes

Square is the default. Borders are 1px; rules are 1px; the sheet has no radius. The only deliberate exceptions are the 2px radius on the 阅 seal, the 2px double frame of the rubber stamps (with a 1px outline offset 3px), and the hand-drawn proof circle around a corrected character, which is a 2px pseudo-element border with an organic radius and a slight rotation. There are no pills, no rounded cards, and no geometric masks. The fore-edge tabs are rectangles; the crop marks are right angles; the stamp is rotated, not rounded.

## Components

### Proof Toggle
- **Shape:** a 30px-high square button (28px on phones), 1px ink border, 0 radius, padding `0 11px`, with a 10px square checkbox.
- **Default (marked):** ink text on paper, red square filled, label 看清样.
- **Clean state:** empty checkbox, label 看校样, `aria-pressed="false"`.
- **Hover / Focus:** border and text move to correction red; focus is a 2px dashed red outline at 4px offset.
- **Mobile:** sits at the right of the running head; the visible label is the action, with a screen-reader "校对标记" suffix so the accessible name always contains the visible text.

### Fore-edge Tabs
- **Style:** a fixed vertical rail in the right fore-edge, each tab set in vertical writing mode with an 11px mono number over a 12px serif label, 1px right rule, padding `4px 6px`.
- **State:** muted by default; the active tab turns correction red and gains a 2px right rule. Tab heights are proportional to section extent (28–70px) so the rail reads like a book's fore-edge index.
- **Mobile:** the same five links become a sticky horizontal strip under the running head, 38px high, with a 2px red bottom border on the active tab.

### Margin Notes
- **Shape:** a 220px column, 16px WenKai in correction red, 1px red-soft left rule, 18px left padding.
- **Note tag:** a 22px square, 1px currentColor border, serif 12px, rotated −2deg; the margin notes use 改 and 问; the proof key also uses 删 and 补.
- **Behavior:** a hairline leader connects the hero note to the circled character. Notes sit beside the prose above 1180px and stack under it below; they are hidden in 清样 mode.

### Rubber Stamps
- **Style:** 2px correction-red border, 1px outline offset 3px, 19px serif 600 (17px on phones) with 0.3em tracking, rotated −7deg (未定稿) or −5deg (清样, blue), `mix-blend-mode: multiply`, opacity 0.84.
- **Placement:** the 未定稿/清样 stamp is pinned to the lower-left of the vertical name at every desktop width; on mobile it sits under the name at the top right.
- **Seal:** the 阅 seal in contact is 118px square (92px on phones), 3px double border, 64px character, rotated 8deg, right-aligned.
- **One per view.** The stamp is a mark, not a section ornament.

### Draft Rows
- **Style:** a 2×2 grid: title and status on row one; mono meta and right-aligned description on row two. 1px top rule per row, 24px vertical padding, no card, no background at rest.
- **Hover / Focus:** a 3.5% red wash, title turns red with a 1px underline at 7px offset, the arrow steps 3px up-right.
- **Empty state:** the 下一件 row is dashed on top, muted, and deliberately not a link; it reserves the place without pretending to be work.

### Contact Link
- **Style:** 34–64px serif 600 in correction red (30–44px on phones), 1px red bottom rule, a small ↗ set at 0.55em.
- **Hover:** text and rule go to plain ink; the arrow steps 4px up-right. This is the only large action on the page.

### Proof Key
- **Shape:** a 232px margin slip under the section note, 1px red-soft top rule, 14px serif title "校对符号" with a 22px 校 tag, four rows (改 / 问 / 删 / 补) with 14px WenKai meanings, and a 14px WenKai foot "红笔是校对，蓝笔是搁置。"
- **Placement:** absolute at the right margin on desktop; static after the chapter note below 1180px; hidden in 清样.
- **Purpose:** names the marks the page uses, so the atmosphere is legible instead of decorative.

### Type Specimen
- **Shape:** in the colophon, a 1px-ruled three-row specimen: 宋体 / 正经 ("我还在改。" at 28px Song), 楷体 / 心虚 (same at 28px Kai in red), 等宽 / 记账 ("PROOF 001 · 2026.11" at 13px mono). Labels are 11px mono, rows 1px dotted.
- **Placement:** after the colophon grid, before the footer; always visible, including in 清样; rows stack below 560px.
- **Purpose:** closes the page by showing its three voices in the same sentence.

### Image Plates
- **Frame:** a 1px ink rule with 10px of paper around the image; no shadow, no radius, no card. The image is 4:5 and object-fit cover (the generated files are already 4:5).
- **Caption:** a three-column line above the seed/model line: 图版 number in 11px mono red, title in 24–32px Song 600, status in 14px Kai red (blue for 待生成); the meta line is 11px mono, "生成图像 · 2026 · seed 214 · Qwen-Image".
- **Note:** the 16px Kai note sits in the right 220px margin above 1180px, with a 22px 问/改 tag; it stacks beneath the image below that.
- **Sequence:** plate 01 at max 640px, plate 02 at max 480px and offset right, plate 03 as a dashed empty 640px placeholder with the next-copy. Never equal thumbnails.
- **Hero test print:** a 172px version of plate 01 pinned at the lower right of the first viewport, rotated 1.2deg, with the caption 试印 / 潮汐标本 / 214. It is an annotation, shown only above 900px width and 861px height.

### Reading Line
- **Desktop:** a 1px fixed red line at the binding edge, beginning under the 60px running head and growing with scroll progress. A faint 1px structural rule marks the same x-position in the sheet. It is a reading instrument, not a border.
- **Mobile:** a 2px red bar pinned to the very top of the viewport; the progress fill is the only red there.
- **Reduced motion:** the line still updates but without a transition; the stamp appears at full opacity.

### Colophon
- **Style:** 11px mono, two columns, muted annotation; labels 字体 / 排版 / 版次 in plain ink; the final line 本页是一份校样，不是定稿。 set in 15px WenKai red.
- **Footer:** © 2026 孟祥博, GitHub, 回到页首 ↑; 11px mono; the same 1px rule above.

## Do's and Don'ts

### Do
- **Do** keep the proof-sheet asymmetry inside the sheet: binding rail left, tab index at the sheet's right; the sheet itself stays centered and the running head shares its left edge.
- **Do** keep functional text at 11px or larger and body at 17–19px with 1.88–1.95 line height.
- **Do** keep the prose at 30–34 Chinese characters per line (about 65–75ch) and cap it at 38em.
- **Do** use red for corrections and the active state; use blue only for the clean/paused state.
- **Do** preserve the 校样/清样 toggle, its `localStorage` memory, and the no-JavaScript marked fallback.
- **Do** use steps(2, end) for state changes and one timed landing for the stamp.
- **Do** keep the stamp to one per view and the crop marks to the four corners.
- **Do** keep the plates on the sheet: 1px frame, 10px paper margin, caption with 图版 number, title, status, seed and model; different widths for plate 01 and 02; plate 03 left empty.
- **Do** keep the hero test print only above 900px width and 861px height, and hide it in 清样.

### Don't
- **Don't** wrap sections, rows, or notes in cards, rounded rectangles, or soft-shadow panels.
- **Don't** use gradients, glass, blur, or colored background fills; the paper is the only ground.
- **Don't** set body copy in Kai or use mono as a costume for prose.
- **Don't** add a centered avatar hero, a kicker above a heading, a row of equal project cards, or skill chips.
- **Don't** add scroll-reveal animations, hover lifts, or more than one accent on a single element.
- **Don't** hide the annotations behind JavaScript; the marked proof is the default and must survive without JS.
- **Don't** turn the fore-edge index into a generic sidebar or move it into the content column.
- **Don't** turn the plates into equal cards, rounded thumbnails or circle-cropped avatars; don't remove the seed/model line.
- **Don't** let the hero test print appear on phones or short viewports; it would collide with the foot.
