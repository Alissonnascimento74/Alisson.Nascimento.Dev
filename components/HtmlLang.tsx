"use client";

import { useEffect } from "react";

// Ajusta o <html lang> nas páginas em inglês (leitor de tela pronuncia em inglês)
// e devolve o idioma anterior ao sair delas.
export function HtmlLang({ lang }: { lang: string }) {
  useEffect(() => {
    const el = document.documentElement;
    const prev = el.lang;
    el.lang = lang;
    return () => {
      el.lang = prev;
    };
  }, [lang]);
  return null;
}
