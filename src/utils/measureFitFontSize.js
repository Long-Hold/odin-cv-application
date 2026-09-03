const MIN_FONT_SIZE = 8;
const FONT_STEP = 0.5;

let ctx = null;
function getContext() {
  if (!ctx) ctx = document.createElement("canvas").getContext("2d");
  return ctx;
}

/**
 * Steps fontSize down until `text` fits within maxWidth, measured via
 * Canvas instead of live DOM layout — works identically whether or not
 * a real element exists to measure against.
 */
export function measureFitFontSize(
  text,
  maxWidth,
  baseFontSize,
  fontFamily = "fira_sansbold",
) {
  const context = getContext();
  let size = baseFontSize;

  context.font = `${size}pt ${fontFamily}`;
  while (context.measureText(text).width > maxWidth && size > MIN_FONT_SIZE) {
    size -= FONT_STEP;
    context.font = `${size}pt ${fontFamily}`;
  }

  return size;
}
