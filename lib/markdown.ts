/**
 * Conversor de markdown bem simples pros textos de projetos e posts (data/content.ts).
 * Entende: títulos (#, ##, ###), listas (- ), **negrito**, *itálico*, `código`, [links](url)
 * e blocos de código entre ``` (com a linguagem opcional, ex.: ```swift).
 * Tudo é escapado antes, então nenhum HTML do texto vira HTML de verdade.
 */

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function inline(s: string) {
  return s
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/`(.+?)`/g, "<code>$1</code>")
    // Link só vira clicável se for http(s), e-mail ou endereço interno (nada de javascript:)
    .replace(/\[(.+?)\]\((.+?)\)/g, (_m, text: string, url: string) =>
      /^(https?:\/\/|mailto:|\/|#)/i.test(url)
        ? `<a href="${url}" class="link-underline" target="_blank" rel="noopener noreferrer">${text}</a>`
        : text
    );
}

export function markdownToHtml(md: string): string {
  const lines = escapeHtml(md).split("\n");
  const out: string[] = [];
  let inList = false;
  let para: string[] = [];
  // Bloco de código: guarda as linhas como estão (com a indentação), sem formatação
  let code: string[] | null = null;
  let codeLang = "";

  const flushPara = () => {
    if (para.length) {
      out.push(`<p>${inline(para.join(" "))}</p>`);
      para = [];
    }
  };
  const flushList = () => {
    if (inList) {
      out.push("</ul>");
      inList = false;
    }
  };

  for (const raw of lines) {
    const line = raw.trim();

    if (line.startsWith("```")) {
      if (code === null) {
        flushPara(); flushList();
        code = [];
        codeLang = line.slice(3).replace(/[^a-z0-9]/gi, "");
      } else {
        const cls = codeLang ? ` class="language-${codeLang}"` : "";
        out.push(`<pre><code${cls}>${dedent(code).join("\n")}</code></pre>`);
        code = null;
      }
      continue;
    }
    if (code !== null) {
      code.push(raw);
      continue;
    }

    if (!line) {
      flushPara();
      flushList();
      continue;
    }
    if (line.startsWith("### ")) {
      flushPara(); flushList();
      out.push(`<h3>${inline(line.slice(4))}</h3>`);
    } else if (line.startsWith("## ")) {
      flushPara(); flushList();
      out.push(`<h2>${inline(line.slice(3))}</h2>`);
    } else if (line.startsWith("# ")) {
      flushPara(); flushList();
      out.push(`<h1>${inline(line.slice(2))}</h1>`);
    } else if (line.startsWith("- ")) {
      flushPara();
      if (!inList) { out.push("<ul>"); inList = true; }
      out.push(`<li>${inline(line.slice(2))}</li>`);
    } else {
      flushList();
      para.push(line);
    }
  }
  flushPara();
  flushList();
  return out.join("\n");
}

// Tira a indentação em comum das linhas do bloco (o texto vem indentado dentro do content.ts)
function dedent(lines: string[]) {
  const indents = lines.filter((l) => l.trim()).map((l) => l.match(/^ */)![0].length);
  const min = indents.length ? Math.min(...indents) : 0;
  return lines.map((l) => l.slice(min));
}
