# Márcio Xavier — Portfólio Profissional

Currículo online desenvolvido com HTML5, Tailwind CSS e JavaScript modular (ES Modules).

## 📁 Estrutura do projeto

```
/
├── index.html               # Estrutura base — sem conteúdo hardcoded
├── data/
│   └── cv.json              # Todos os dados do currículo (simula uma API)
├── assets/
│   ├── css/
│   │   └── style.css        # Animações, skeleton loader e transições
│   ├── js/
│   │   ├── main.js          # Entry point — fetch, orquestração e observers
│   │   ├── render.js        # Funções puras de renderização (HTML a partir de dados)
│   │   └── icons.js         # Strings SVG reutilizáveis
│   └── images/              # Foto de perfil e outros assets visuais
└── README.md
```

## 🚀 Como executar localmente

Por usar ES Modules e `fetch`, o projeto precisa de um servidor HTTP local (não funciona via `file://`).

```bash
# Com Python
python -m http.server 8080

# Com Node.js (npx)
npx serve .

# Com VS Code
# Instale a extensão Live Server e clique em "Go Live"
```

Acesse: `http://localhost:8080`

## ✏️ Como atualizar o currículo

Todo o conteúdo está centralizado em **`data/cv.json`**.  
Para atualizar experiências, formação, certificações ou competências, edite apenas esse arquivo — sem mexer em HTML ou JavaScript.

## 🛠️ Tecnologias utilizadas

- **HTML5** — estrutura semântica
- **Tailwind CSS** (CDN) — estilização utilitária e responsividade
- **JavaScript ES Modules** — organização modular sem build step
- **Fetch API** — carregamento assíncrono dos dados
- **IntersectionObserver** — animações de entrada ao fazer scroll
- **GitHub Pages** — hospedagem

## 📄 Licença

Desenvolvido por **Márcio Xavier** para fins de portfólio profissional.  
© 2025 — Todos os direitos reservados.
