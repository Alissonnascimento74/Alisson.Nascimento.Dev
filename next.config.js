/**
 * Configuração do Next.js.
 *
 * Endereço do site: usa NEXT_PUBLIC_SITE_URL se você definir; senão, na Vercel, o domínio de
 * produção mais curto do projeto (ex.: quando ligar alisson.is-a.dev, ele vira o endereço
 * sozinho — só publicar de novo). Esse endereço vai pro Google, sitemap e prévia de link.
 */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://alisson-nascimento-dev.vercel.app");

// Regras de segurança (CSP): tudo vem do próprio site. Scripts inline são necessários pro
// Next.js e pro script que evita o "piscar" do tema escuro.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "connect-src 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Tem outro package-lock.json numa pasta acima (~/Projetos): fixa a raiz neste projeto.
  outputFileTracingRoot: __dirname,
  env: { NEXT_PUBLIC_SITE_URL: siteUrl },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Em dev o Next precisa de eval() pro hot reload — CSP só em produção.
          ...(process.env.NODE_ENV === "production" ? [{ key: "Content-Security-Policy", value: csp }] : []),
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
