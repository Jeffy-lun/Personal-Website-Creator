# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: static HTML/CSS/JS with no build step. The site is one public page; a static site is the shortest path from review to any host. The owner did not state a stack; this is an explicit assumption.

## Users

- **Visitors** who meet 孟祥博 (GitHub: `Jeffy-lun`) through a link: peers, collaborators, people curious about AI image-making. They give the page seconds to answer *who is this person, what do they make, is the work worth staying for, and how do I reach them*.
- **The owner**, who edits the page and its plates; the copy is a fictional AI-artist persona the owner explicitly asked for, not a factual biography.

## Product Purpose

A personal website that presents an AI art practice as a working proof rather than a gallery of finished products. Success means the visitor remembers an image and a voice, scrolls from the statement into the plates, and leaves with a way to make contact.

## Positioning

A one-person AI art publication set as an editorial proof: generated plates are pinned onto the same warm sheet as the prompts,廢稿 and corrections that produced them. The model supplies accidents; the artist supplies the decisions. It is not a generic AI portfolio with a grid of equal thumbnails.

## Operating Context

- One static page, Chinese-first, read on phone and desktop; no login, no data collection, no third-party runtime.
- Two artwork plates generated with the owner's ComfyUI (Qwen-Image 2.1), stored as WebP under `assets/img/plates/`.
- The owner can edit the HTML/CSS directly; the copy is explicitly fictional and replaceable.

## Capabilities and Constraints

- One page: identity, an abstract, current work, a plates section with two generated artworks and one reserved next plate, three notes, and contact.
- **The text is fictional by the owner's instruction**; it portrays the owner as an AI image-maker. It is not a verified biography and must not be read as factual claims about employers, clients, awards, or metrics.
- Real assets: the name 孟祥博, GitHub `Jeffy-lun`, and the two generated plates with their prompts and seeds.
- No build step, no external services, no tracking; fonts and images ship with the page.
- Must stay legible and complete with JavaScript disabled; motion respects `prefers-reduced-motion`.

## Brand Commitments

- The owner asked for an AI art creation story, fictional text, and permission to use ComfyUI images; the visual style may change if appropriate.
- The build keeps the established proof-sheet world: warm paper, printed Song, handwritten Kai, correction red and pencil blue, a 校样/清样 toggle.
- Chinese-first, first person, plain and self-aware; no corporate or influencer register.

## Evidence on Hand

- Name 孟祥博 and GitHub login `Jeffy-lun`.
- Two generated plates with recorded prompts, workflow, size and seeds (see `assets/img/plates/README.md`).
- No verified biography, employer, client, testimonial, or email; the copy is the requested fictional persona.

## Product Principles

1. Art before portfolio: the plates and the working process are the evidence, not credential badges.
2. Keep the model visible: prompts, seeds,廢稿 and corrections belong on the same sheet as the image.
3. One idea carried all the way; no generic AI gallery furniture.
4. The design must be worth remembering after one viewport, without blocking the reading.
5. Every sentence and image the owner may want to change is easy to find and replace.

## Accessibility & Inclusion

Standard web practice: semantic landmarks, keyboard-reachable controls, visible focus, readable contrast, `prefers-reduced-motion`, descriptive alt text on every plate, and content that survives without JavaScript. No product-specific certification was established.
