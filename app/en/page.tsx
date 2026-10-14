"use client";

import { useEffect } from "react";
import HomePage from "../page";
import { useLanguage } from "@/components/language-provider";

export default function EnPage() {
  const { setLang } = useLanguage();

  useEffect(() => {
    setLang("en");
  }, [setLang]);

  return <HomePage />;
}
