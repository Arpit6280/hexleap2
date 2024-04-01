"use client";
import { useTheme } from "next-themes";
import React from "react";
import { FiSun, FiMoon } from "react-icons/fi";

function ThemeSwitch() {
  const { setTheme, resolvedTheme } = useTheme();

  if (resolvedTheme === "dark")
    return <FiSun onClick={() => setTheme("light")} />;

  if (resolvedTheme === "light") {
    return <FiMoon onClick={() => setTheme("dark")} />;
  }
}

export default ThemeSwitch;
