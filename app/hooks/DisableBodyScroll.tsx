"use client";
import { useEffect } from "react";
const useDisableBodyScroll = (isLocked: boolean) => {
  useEffect(() => {
    if (!isLocked) return;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isLocked]);

  return null;
};

export default useDisableBodyScroll;
