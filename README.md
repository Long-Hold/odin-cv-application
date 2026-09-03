# CVGen - Resume / CV Builder

Visit Website: [Free Resume | PDF Template Generator](https://odin-cv-application.mattharview.workers.dev/)

A resume builder built with React and Vite. It provides a live, editable resume preview alongside a PDF export, and was built as a project for The Odin Project's full stack JavaScript curriculum.

Lesson reference: [The Odin Project - New CV Application](https://www.theodinproject.com/lessons/node-path-react-new-cv-application)

## Overview

CVGen lets a user fill out a form for personal details, work experience, education, and skills. As the form is filled out, a resume template updates in real time in the browser. The same data can also be exported as a print-ready PDF, generated through a separate rendering path built with `@react-pdf/renderer`.

## Features

- Live, DOM-rendered resume preview that updates as the form is filled out
- PDF export with its own layout implementation, previewed in a modal before download
- Two-column resume layout built with Flexbox
- Custom web fonts (Fira Sans family) shared between the DOM preview and the PDF output
- A design token system using CSS custom properties for spacing, sizing, and color
- Editable, addable, and removable entries for work experience, education, and skills
- Collapsible entry sections using native `<details>`/`<summary>` elements
- Responsive layout: the form overlays the resume on small screens and sits side by side with it on larger screens
- Print styles for browser-based printing in addition to the PDF export
- Accessibility considerations throughout, including WCAG contrast checks, screen-reader-only legends, and accessible names on interactive elements

## How It Works

All resume data lives in a single state object, owned by the `useResumeState` hook and lifted into `App.jsx`. That one `resume` object, along with its update handlers, is passed down to three separate consumers:

1. **ResumeForm** - a controlled form. Every input reads its value from the `resume` object and calls a handler (`handleContactChange`, `handleEntryFieldChange`, `addNewResumeData`, or `removeResumeEntry`) on change, which updates state in the hook.
2. **ResumeTemplate** - a plain DOM-rendered preview. It receives the same `resume` object as props and re-renders automatically whenever the state changes, giving the live preview.
3. **ResumePdfDocument** - rendered through `@react-pdf/renderer`'s `PDFViewer`, inside a `<dialog>` opened from the form. It receives the same `resume` object, but builds the output using `react-pdf` primitives (`View`, `Text`, `Document`, `Page`) instead of HTML and CSS, since `react-pdf` has no browser rendering engine to draw from.

Because the DOM preview and the PDF preview both read from the same state but render through two different engines, they are implemented as two independent component trees under `src/components/display/` and `src/components/pdf/`, rather than one shared template. Behaviors that depend on layout measurement, such as auto-shrinking the name to fit its column, also have two separate implementations for this reason: one using `element.scrollWidth` in the DOM (`useFitText`), and one using Canvas text measurement for the PDF path (`measureFitFontSize`).

## Tech Stack

- React 19
- Vite 8
- `@react-pdf/renderer` for PDF generation
- `@mdi/js` / `@mdi/react` for icons
- pnpm as the package manager
- oxlint for linting

## Project Structure

```
src/
  components/
    display/    DOM-rendered resume preview components
    form/       Form fields and form-related controls
    footers/    Site footer
    pdf/        react-pdf components used for PDF export
  constants/    Field key constants and sample resume data
  hooks/        Custom hooks (resume state, font fitting, container fitting)
  utils/        Helper functions (entry creation, PDF font measurement)
  assets/       Fonts and other static assets
```

## Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+
- pnpm

### Installation

```bash
git clone https://github.com/Long-Hold/odin-cv-application.git
cd odin-cv-application
pnpm install
```

### Development

```bash
pnpm dev
```

### Build

```bash
pnpm build
```

### Preview a production build

```bash
pnpm preview
```

### Lint

```bash
pnpm lint
```

## Accessibility

- Contrast ratios have been checked against WCAG standards throughout the color palette.
- Delete buttons for education, work experience, and skill entries are placed outside the `<summary>` element they are visually paired with, avoiding nested interactive elements.
- Collapsible sections use hidden `<legend>` text so screen readers can identify each entry, without adding visual clutter.
- Focus states are visible on all interactive elements.

## Known Limitations

- The first PDF column width (`NAME_COLUMN_WIDTH_PT` in `PersonalDetailsPdf`) is currently a hardcoded value derived by hand from the page layout. It should eventually be calculated from the actual PDF page dimensions instead.
- The Invoker Commands API was considered for the PDF preview modal but was not used due to incomplete browser support at the time of writing.
