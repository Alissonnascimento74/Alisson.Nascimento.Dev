export const content = {
  profile: {
    name: "Alisson Nascimento",
    role: "iOS Developer (em formação)",
    location: "São Paulo, Brasil",
    headline: "Transformando ideias em apps.",
    bio: "Sou desenvolvedor iOS em formação, focado em criar aplicativos com design cuidadoso e código limpo. Trabalho com Swift e SwiftUI, e tenho paixão por transformar ideias em experiências reais que cabem no bolso das pessoas.",
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
      description: "App de produtividade com ciclos Focus/Break, anel de progresso animado e design preto, roxo e dourado.",
      tags: ["SwiftUI", "Timer", "Animation"],
      year: "2026",
      appStore: "",
      github:   "https://github.com/Alissonnascimento74/pomodoro-ios",
      website:  "",
      cover: "/pomodoro-icon.png",
      screenshots: ["/pomodoro-cover.png", "/pomodoro-break.png", "/pomodoro-iphone.png"],
      content: `
## O problema

Aplicativos de produtividade modernos costumam ser barulhentos — notificações, gamificação, gráficos. Um timer pomodoro deveria fazer o oposto: sumir e deixar você focar.

## A solução

Uma tela. Um número. Um botão. Design em preto, roxo e dourado — elegante e direto ao ponto.

## Funcionalidades

- Ciclos automáticos Focus (25min) → Break (5min)
- Anel de progresso circular animado (dourado no Focus, roxo no Break)
- Botões com SF Symbols: Play/Pause, Reset e Skip
- Contador de sessões completadas com meta de 4 pomodoros
- Ícone personalizado gerado em Swift

## Decisões técnicas

- **UI**: SwiftUI puro
- **Estado**: @State para tempo, sessão e status do timer
- **Timer**: Timer.scheduledTimer com invalidação controlada
- **Animações**: SwiftUI Animation linear sincronizada ao progresso

## O que aprendi

Esse foi meu primeiro app SwiftUI completo. Aprendi na prática como @State redesenha a interface, como controlar um Timer sem vazamento de memória e como construir layouts com ZStack, VStack e HStack.

Aprendi também a tomar decisões de design — escolha de cores, tipografia e hierarquia visual — pensando na experiência do usuário final.
      `.trim(),
    },
  ],

  posts: [
    {
      slug: "meu-primeiro-app-erros-e-aprendizados",
      title: "Meu primeiro app: os erros que me ensinaram mais do que qualquer tutorial",
      excerpt: "Letra maiúscula no lugar errado, timer que acelerava, função fora do lugar. E o que aprendi com cada tropeço.",
      date: "2026-05-19",
      readingTime: "4 min",
      content: `
Quando decidi construir meu primeiro app em SwiftUI, achei que o maior desafio seria entender a linguagem. Estava errado. O maior desafio foi aprender a **ler o que o Xcode estava tentando me dizer**.

## O erro que parecia idiota (mas não era)

Logo no começo, o compilador acusava erro numa linha que eu jurava estar correta. Depois de muito tempo olhando, descobri o problema: uma letra minúscula onde deveria ser maiúscula.

Em Swift, isso importa. \`isRunning\` e \`IsRunning\` são coisas completamente diferentes. A linguagem é **case-sensitive**, e o Xcode não é sempre gentil ao explicar isso pra quem está começando.

Aprendi que nomear variáveis com clareza não é frescura. É necessidade.

## A função que não funcionava, e eu não sabia por quê

Num dos momentos mais frustrantes, criei uma função mas ela simplesmente não era reconhecida. O erro era estranho e eu não conseguia entender.

A causa? Tinha fechado a chave da \`struct ContentView\` sem perceber. A função estava **fora do escopo** onde deveria estar.

\`\`\`swift
struct ContentView: View {
    var body: some View {
        // ...
    }
// ← fechei aqui sem querer

    func startTimer() { } // ← ficou do lado de fora, sem pertencer a ninguém
}
\`\`\`

Esse erro me ensinou a prestar atenção nas chaves \`{ }\` com o mesmo cuidado que presto no código em si. Estrutura importa tanto quanto lógica.

## O timer que virava uma bagunça

Implementei o timer e funcionou. Fiquei feliz. Cliquei em Start de novo, e o tempo começou a cair duas vezes mais rápido.

O problema: cada clique criava um **novo** Timer sem cancelar o anterior. Dois timers rodando ao mesmo tempo, cada um subtraindo 1 segundo.

A solução foi guardar a referência do Timer numa variável e chamar \`.invalidate()\` antes de criar um novo:

\`\`\`swift
func stopTimer() {
    timer?.invalidate()
    timer = nil
    isRunning = false
}
\`\`\`

Simples assim. Mas só cheguei nessa simplicidade depois de entender o problema de verdade.

## O bug fantasma do Preview

Por último, e mais misterioso, o preview do Xcode simplesmente não funcionava. Nenhum erro claro, nenhuma mensagem útil.

Depois de investigar, descobri que o problema era uma divergência de maiúsculas e minúsculas no caminho da minha conta de usuário no Mac: \`/Users/devsys\` vs \`/Users/DEVSYS\`. O Xcode validava o caminho de forma case-sensitive e travava silenciosamente.

Fix: alinhar o registro da conta no sistema com o nome real da pasta. Problema resolvido permanentemente.

## O que esses erros me ensinaram

Cada bug que resolvi sozinho ficou gravado em minha mente de uma forma que somente leitura não faz. Aprendi Swift e SwiftUI lendo, mas fixei de verdade **consertando o que eu quebrei**.

Se você está começando: não tenha medo de errar. Tenha medo de não entender o erro.
      `.trim(),
    },
    {
      slug: "aprenda-swift-diego-rodrigues",
      title: "O livro que está moldando minha base em Swift",
      excerpt: "Uma análise honesta do 'Aprenda Swift' de Diego Rodrigues, por quem está usando ele agora.",
      date: "2026-05-18",
      readingTime: "3 min",
      content: `
Quando decidi aprender Swift, a primeira dúvida foi: por onde começar? A internet tem tutoriais demais, cursos demais, opiniões demais. Precisava de algo com começo, meio e fim, e encontrei no **"Aprenda Swift"** de Diego Rodrigues.

## O que diferencia esse livro

A maioria dos materiais de programação peca no mesmo lugar: jogam conceitos abstratos em você esperando que a conexão aconteça naturalmente. Diego faz o oposto.

Cada conceito vem acompanhado de **exemplos reais de código**, não aquele "soma dois números" que não serve pra nada. Os exemplos fazem sentido. Você lê, entende e já consegue imaginar onde usaria aquilo.

O capítulo de operadores e estruturas de controle (\`if\`, \`switch\`, \`for\`, \`while\`) foi onde isso ficou mais claro pra mim. São conceitos que parecem simples mas têm muitas nuances, e o livro passa por cada uma sem pressa e sem enrolação.

## O que mais gostei

A didática é honesta. O autor não tenta impressionar com terminologia complexa. Ele escreve como alguém que quer que você **realmente entenda**, não que você apenas copie o código e siga em frente.

Isso faz diferença quando você está travado num erro às 23h e precisa voltar ao livro pra entender o conceito de novo.

## Para quem recomendo

Se você está começando do zero em Swift e quer uma base sólida antes de mergulhar no SwiftUI, esse livro é o ponto de partida certo. Ele não vai te transformar em sênior, mas vai te dar o vocabulário e a lógica necessários pra aprender qualquer coisa depois.

Estou no meio do livro ainda. Quando terminar, volto aqui com uma análise completa.
      `.trim(),
    },
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

Atualmente estou na faculdade de Engenharia de Software na UniFamma, e em paralelo estudo Swift e SwiftUI construindo projetos reais.

## Próximos passos

Construir projetos reais, evoluir cada dia mais como desenvolvedor e buscar minha primeira oportunidade na área de iOS.
      `.trim(),
    },
  ],

  experience: [
    {
      company: "Disponível para oportunidades",
      role: "iOS Developer",
      period: "2026 — Presente",
      description: "Em busca da minha primeira oportunidade como desenvolvedor iOS. Construindo projetos pessoais com Swift e SwiftUI, aprofundando os fundamentos da linguagem e do framework a cada novo desafio.",
    },
    {
      company: "UniFamma",
      role: "Engenharia de Software",
      period: "2024 — 2028 (em andamento)",
      description: "Graduação com foco em fundamentos de engenharia de software. Aplicando os conceitos estudados em projetos práticos com Swift e SwiftUI.",
    },
  ],

  skills: [
    "Swift", "SwiftUI", "Timer API", "SF Symbols", "Git",
  ],
};

export type Project = (typeof content.projects)[number];
export type Post = (typeof content.posts)[number];
