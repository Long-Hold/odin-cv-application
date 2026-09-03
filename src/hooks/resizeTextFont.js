import { useLayoutEffect } from "react";

const MIN_FONT_SIZE = 8;
const FONT_STEP = 0.5;

export function useFitText(ref, text, baseFontSize) {
  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.style.setProperty("--name-font-size", `${baseFontSize}pt`);

    let currentSize = baseFontSize;
    while (
      element.scrollWidth > element.clientWidth &&
      currentSize > MIN_FONT_SIZE
    ) {
      currentSize -= FONT_STEP;
      element.style.setProperty("--name-font-size", `${currentSize}pt`);
    }
  }, [ref, text, baseFontSize]);
}
