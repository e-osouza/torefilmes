"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export default function TopLoadingBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const startedRef = useRef(false);
  const timerRef = useRef<number | null>(null);
  const lastUrlRef = useRef("");

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startLoading = useCallback(() => {
    if (startedRef.current) return;

    startedRef.current = true;
    setIsVisible(true);
    setProgress(8);

    clearTimer();
    timerRef.current = window.setInterval(() => {
      setProgress((current) => {
        if (current >= 85) return current;
        const step = Math.random() * 8 + 2;
        return Math.min(current + step, 85);
      });
    }, 120);
  }, [clearTimer]);

  const finishLoading = useCallback(() => {
    if (!startedRef.current) return;

    clearTimer();
    setProgress(100);

    window.setTimeout(() => {
      setIsVisible(false);
      setProgress(0);
      startedRef.current = false;
    }, 220);
  }, [clearTimer]);

  useEffect(() => {
    lastUrlRef.current = `${window.location.pathname}${window.location.search}`;

    const maybeFinishOnUrlChange = () => {
      const currentUrl = `${window.location.pathname}${window.location.search}`;

      if (currentUrl !== lastUrlRef.current) {
        lastUrlRef.current = currentUrl;
        window.setTimeout(() => {
          finishLoading();
        }, 80);
      }
    };

    const handleClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const target = event.target as HTMLElement | null;
      const link = target?.closest("a");

      if (!link) return;
      if (link.target === "_blank" || link.hasAttribute("download")) return;

      const href = link.getAttribute("href");
      if (!href) return;
      if (href.startsWith("mailto:") || href.startsWith("tel:")) return;

      const nextUrl = new URL(href, window.location.href);
      if (nextUrl.origin !== window.location.origin) return;

      const currentPathWithQuery = `${window.location.pathname}${window.location.search}`;
      const nextPathWithQuery = `${nextUrl.pathname}${nextUrl.search}`;

      if (currentPathWithQuery === nextPathWithQuery) return;

      startLoading();
    };

    const originalPushState = window.history.pushState.bind(window.history);
    const originalReplaceState = window.history.replaceState.bind(window.history);

    window.history.pushState = (...args: Parameters<History["pushState"]>) => {
      originalPushState(...args);
      maybeFinishOnUrlChange();
    };

    window.history.replaceState = (...args: Parameters<History["replaceState"]>) => {
      originalReplaceState(...args);
      maybeFinishOnUrlChange();
    };

    const handlePopState = () => {
      startLoading();
      maybeFinishOnUrlChange();
    };

    document.addEventListener("click", handleClick, { capture: true });
    window.addEventListener("popstate", handlePopState);

    return () => {
      clearTimer();
      document.removeEventListener("click", handleClick, { capture: true });
      window.removeEventListener("popstate", handlePopState);
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
    };
  }, [clearTimer, finishLoading, startLoading]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] h-[7px] w-full"
      style={{ opacity: isVisible ? 1 : 0, transition: "opacity 180ms ease" }}
    >
      <div
        className="h-full bg-[var(--verde)] shadow-[0_0_10px_rgba(138,188,78,0.8)]"
        style={{
          width: `${progress}%`,
          transition: "width 180ms ease-out",
        }}
      />
    </div>
  );
}