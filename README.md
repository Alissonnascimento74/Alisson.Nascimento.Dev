# Alisson Nascimento — portfólio

Meu portfólio pessoal de desenvolvedor iOS (Swift & SwiftUI), em português e inglês. Design minimalista, tema claro/escuro e foco em performance.

🔗 **No ar:** https://alisson-nascimento-dev.vercel.app (inglês em `/en`)

## Stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS 3**
- Hospedado na **Vercel** (cada push no `main` publica sozinho)

## Estrutura

```
app/                      páginas em português: / , /projetos/[slug], /blog, /blog/[slug]
app/en/                   páginas em inglês: /en , /en/projects/[slug]
app/opengraph-image.tsx   imagem que aparece ao compartilhar o link
app/sitemap.ts, robots.ts SEO
components/               componentes da tela (todos recebem `lang`)
data/content.ts           TODO o conteúdo: perfil, projetos e experiência (pt e en) + posts do blog
lib/i18n.ts               textos fixos da interface (menu, botões) nos dois idiomas
lib/markdown.ts           conversor de markdown leve (títulos, listas, links, ```código```)
```

## Como editar

- **Bio, cargo, "Agora", experiência, stack:** `data/content.ts` → objetos `pt` e `en` (mude os dois).
- **Projeto novo:** adicione em `projects` dos dois idiomas (mesmo `slug`). Prints e vídeo em `public/`.
- **Post novo:** `content.posts` (só português — a versão em inglês avisa que o blog é em PT).
- **Menu e botões:** `lib/i18n.ts`.

## Domínio

O endereço é detectado sozinho na Vercel (domínio de produção mais curto). Pra trocar por um
domínio próprio (ex.: `alisson.is-a.dev`), é só adicioná-lo em *Vercel → Settings → Domains*
e publicar de novo — Google, sitemap e imagem de compartilhamento passam a usar o novo.

## Rodando localmente

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck  # confere os tipos
npm run build      # gera a versão de produção
```

## Contato

- **Email:** nascimento.dev.swift@gmail.com
- **LinkedIn:** [alisson-nascimento](https://www.linkedin.com/in/alisson-nascimento-811a42272)
