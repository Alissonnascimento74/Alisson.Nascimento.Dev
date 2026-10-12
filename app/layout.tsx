import type { Metadata, Viewport } from "next";
import { Fraunces, Inter_Tight } from "next/font/google";
import { content } from "@/data/content";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const { profile } = content.pt;
const title = `${profile.name} — ${profile.role}`;
const description = profile.seoDescription;

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: { default: title, template: `%s · ${profile.name}` },
  description,
  authors: [{ name: profile.name }],
  alternates: { canonical: "/", languages: { "pt-BR": "/", en: "/en", "x-default": "/" } },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: profile.name,
    locale: "pt_BR",
    alternateLocale: ["en_US"],
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description },
  icons: { icon: "/favicon.svg" },
};

// Cor das barras do navegador (faixa do relógio no iPhone). Vem no HTML seguindo o tema do
// aparelho; se a pessoa trocar no botão, components/ThemeProvider.tsx atualiza a cor.
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfbfd" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0c" },
  ],
};

const noFlashScript = `
  (function() {
    try {
      var t = localStorage.getItem('theme') ||
              (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      if (t === 'dark') document.documentElement.classList.add('dark');
    } catch(e) {}
  })();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlashScript }} />
      </head>
      <body className="font-sans bg-paper text-ink dark:bg-[#0a0a0c] dark:text-[#f5f5f7] transition-colors">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
