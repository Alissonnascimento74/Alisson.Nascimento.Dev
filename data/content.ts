export const content = {
  profile: {
    name: "Alisson Nascimento",
    role: "iOS Developer",
    location: "São Paulo, Brasil",
    headline: "Aprendendo, construindo e compartilhando — em Swift.",
    bio: "Sou desenvolvedor iOS focado em criar aplicativos performáticos e com design impecável. Trabalho com Swift, SwiftUI, UIKit e tenho paixão por arquiteturas limpas, animações fluidas e experiências que parecem inevitáveis.",
    email: "nascimento.dev.swift@gmail.com",
    avatar: "",
    siteUrl: "https://alisson-nascimento-dev.vercel.app",
  },

  socials: [
    { label: "GitHub",   href: "https://github.com/Alissonnascimento74" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/alisson-nascimento-811a42272" },
    { label: "Email",    href: "mailto:nascimento.dev.swift@gmail.com" },
  ],

  projects: [
    {
      slug: "focus",
      name: "Focus",
      tagline: "Timer pomodoro minimalista pra iPhone.",
      description: "App de produtividade focado em uma experiência limpa e silenciosa, sem ruído visual.",
      tags: ["SwiftUI", "Combine", "Animation"],
      year: "2026",
      appStore: "",
      github:   "",
      website:  "",
      cover: "",
      content: `
## O problema

Aplicativos de produtividade modernos costumam ser barulhentos — notificações, gamificação, gráficos. Um timer pomodoro deveria fazer o oposto: sumir e deixar você focar.

## A solução

Uma tela. Um número. Um botão. Foi essa a regra que segui pra construir o Focus.

## Decisões técnicas

- **UI**: SwiftUI puro
- **Estado**: @State e @Observable
- **Animações**: SwiftUI Animation com curvas customizadas

## O que aprendi

Em construção — esse foi meu primeiro app SwiftUI. Estou documentando tudo nesse processo.
      `.trim(),
    },
  ],

  posts: [
    {
      slug: "comecando-jornada-ios",
      title: "Começando minha jornada como Dev iOS",
      excerpt: "Por que escolhi Swift, o que estou estudando e onde quero chegar.",
      date: "2026-05-15",
      readingTime: "3 min",
      content: `
## Por que iOS

Sempre fui apaixonado pelo ecossistema da Apple e pela atenção aos detalhes que o iOS proporciona. Decidi mergulhar no Swift e SwiftUI pra construir experiências que reflitam essa qualidade.

## O que estou estudando

Atualmente estou na faculdade de Engenharia de Software na UniFamma, e em paralelo estudo SwiftUI, Combine e arquiteturas modernas iOS.

## Próximos passos

Construir projetos reais, contribuir com a comunidade e buscar minha primeira oportunidade profissional.
      `.trim(),
    },
  ],

  experience: [
    {
      company: "Disponível para oportunidades",
      role: "iOS Developer",
      period: "2026 — Presente",
      description: "Em busca da minha primeira oportunidade como desenvolvedor iOS. Construindo projetos pessoais com Swift e SwiftUI, estudando arquiteturas e boas práticas de desenvolvimento mobile.",
    },
    {
      company: "UniFamma",
      role: "Engenharia de Software",
      period: "2024 — 2028 (em andamento)",
      description: "Graduação com foco em desenvolvimento de software, programação orientada a objetos, estruturas de dados e arquitetura de sistemas. Aplicando os conceitos em projetos práticos mobile com Swift.",
    },
  ],

  skills: [
    "Swift", "SwiftUI", "UIKit", "Combine", "Async/Await",
    "Core Data", "SwiftData", "CloudKit", "WidgetKit",
    "MVVM", "XCTest", "Git",
  ],
};

export type Project = (typeof content.projects)[number];
export type Post = (typeof content.posts)[number];
