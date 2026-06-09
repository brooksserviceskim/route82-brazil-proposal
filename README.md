# ROUTE82 × Brazil-side Partner — K-Beauty Distribution Proposal
**Interactive trilingual web proposal (KO / EN / pt-BR)**
Prepared for the meeting on **2026-06-10, 10:00–12:00, ROUTE82 office.**

---

## 1. How to open / 실행 방법
Just double-click **`index.html`** — it opens in any modern browser (Chrome, Edge, Safari).
No internet connection and **no external libraries (no CDN)** are required. Everything (charts, animations, infographics) is built with pure HTML/CSS/JavaScript, so it works offline on the meeting-room screen.

> 인터넷이 끊겨도 작동합니다. 모든 차트/애니메이션은 외부 라이브러리 없이 순수 코드로 제작되어 현장 대형 화면에서 안정적으로 동작합니다.

## 2. Files / 파일 구성
| File | Purpose |
|---|---|
| `index.html` | Page structure + top bar, modal, footer |
| `style.css` | Design system (palette, gradients, responsive, dark/light, print) |
| `script.js` | Renders every section from data + all interactions |
| `data.js` | **All content** in KO/EN/pt-BR (edit here to change copy) |
| `sources.md` | Numbered source list with confidence tags |
| `assets/` | ROUTE82 logo (black + white) |
| `interpreter_brief.md` | Pre-share summary for the Portuguese interpreter |
| `presentation_script.md` | Meeting-day speaking script |

## 3. Controls on the page / 페이지 조작
- **한국어 / EN / PT-BR / ALL** — language display toggle (top-right). `ALL` shows all three at once.
- **◐** — dark / light mode.
- **⤢** — presentation mode (full-screen, one section per screen).
- **⎙** — print / save as PDF (forces all three languages and expands all panels).
- Curation **risk filter**, business-model **role toggle**, agenda **accordion**, glossary **search**, and the **Next Step checklist** are all interactive.
- Source markers like `S01` and the **"View full source list"** button open the sources modal.

## 4. Editing content / 내용 수정
All text lives in **`data.js`** as `{ ko, en, pt }` objects. Change the strings there and reload — no other file needs editing. Confidence tags inside the copy (`[Confirmed]`, `[Estimate]`, `[Confirm/확인 필요]`) and source markers (`S01`…) map to `sources.md`.

## 5. Accuracy & confidence rules / 정확성 원칙
This is a **partnership discussion / pilot proposal**, not a contract. Per the project rules:
- Market numbers are **publicly available estimates** (ranges vary by research house) — used directionally.
- All **ANVISA / regulatory** specifics, **tax rates**, **timelines** and **costs** are marked **"to be confirmed"** with official sources and a Brazil-side regulatory/customs partner. Nothing is stated as final.
- **No brand exclusivity or distribution right** is asserted; named brands appear only as *benchmark / potential sourcing target*.
- ROUTE82 supports **ANVISA registration preparation in cooperation with a Brazil-side regulatory partner** — it does not perform the registration itself.

## 6. Palette / 디자인
Green · Yellow · Deep Navy · White · Soft Beige — premium global-consulting feel with gradient, dimensional infographics. Fully responsive (mobile / tablet / laptop / large screen). UTF-8 throughout to keep Portuguese accents (ç, ã, õ…) intact.

---
ROUTE82 Corp. · www.route82.co.kr · route82_business@route82.co.kr
