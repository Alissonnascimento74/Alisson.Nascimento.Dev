/**
 * Idiomas do portfólio: português em "/" e inglês em "/en".
 * Textos fixos da interface (menu, títulos, botões) ficam aqui; o conteúdo (bio, projetos,
 * experiência) fica em data/content.ts.
 */

export type Lang = "pt" | "en";

// Endereços de cada idioma
export const paths = {
  pt: { home: "/", project: (slug: string) => `/projetos/${slug}` },
  en: { home: "/en", project: (slug: string) => `/en/projects/${slug}` },
} as const;

export const ui = {
  pt: {
    nav: { work: "Trabalho", blog: "Blog", about: "Sobre", contact: "Contato" },
    switchTo: "EN",
    switchLabel: "Read in English",
    themeLabel: "Alternar tema claro/escuro",
    workTitle: "Trabalho selecionado",
    workSub: "Apps que construí do zero, em Swift e SwiftUI.",
    seeProject: "Ver projeto",
    about: "Sobre",
    now: "Agora",
    experience: "Experiência",
    stack: "Stack",
    contactKicker: "Contato",
    contactTitle: "Vamos construir algo incrível juntos.",
    back: "← Voltar",
    backBlog: "← Voltar pro blog",
    projectKicker: "Projeto",
    inAction: "Em ação",
    screenshot: "Tela",
    running: "em execução",
    blogNote: "",
    notFoundTitle: "Página não encontrada.",
    notFoundBack: "Voltar pro início",
  },
  en: {
    nav: { work: "Work", blog: "Blog (PT)", about: "About", contact: "Contact" },
    switchTo: "PT",
    switchLabel: "Ler em português",
    themeLabel: "Toggle light/dark theme",
    workTitle: "Selected work",
    workSub: "Apps I built from scratch with Swift and SwiftUI.",
    seeProject: "View project",
    about: "About",
    now: "Now",
    experience: "Experience",
    stack: "Stack",
    contactKicker: "Contact",
    contactTitle: "Let’s build something great together.",
    back: "← Back",
    backBlog: "← Back to blog",
    projectKicker: "Project",
    inAction: "In action",
    screenshot: "Screenshot",
    running: "running",
    blogNote: "My blog posts are in Portuguese.",
    notFoundTitle: "Page not found.",
    notFoundBack: "Back to home",
  },
} as const;
