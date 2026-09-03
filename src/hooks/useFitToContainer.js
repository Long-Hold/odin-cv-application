import { useEffect } from "react";

const viewportObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    const { width, height } = entry.contentRect;

    const scale = Math.min(1, width / 816, height / 1056);
    document.documentElement.style.setProperty("--fit-scale", scale.toFixed(2));
  }
});

export function useFitToContainer(ref) {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    viewportObserver.observe(element);
    return () => viewportObserver.unobserve(element);
  }, [ref]);
}
