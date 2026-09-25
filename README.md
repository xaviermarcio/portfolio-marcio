# Márcio Xavier — Portfólio Profissional

Currículo online em HTML estático, publicado no GitHub Pages. Sem build, sem módulos e sem `fetch`: todo o conteúdo está no próprio `index.html`, então o site abre até com duplo clique no arquivo.

## 📁 Estrutura

```
/
├── index.html          # Todo o conteúdo do currículo
├── assets/
│   ├── css/style.css   # Componentes, animações e estilos de impressão
│   ├── docs/           # Currículo em PDF (botão "Baixar currículo")
│   └── images/         # og-image.png para pré-visualização no LinkedIn/WhatsApp
└── README.md
```

## ✏️ Como atualizar

Edite o texto direto no `index.html`. Para adicionar uma experiência ou projeto, copie um bloco `<article class="card">` existente e troque o conteúdo.

## 🚀 Publicação

Settings → Pages → Deploy from a branch → `main` / `(root)`. Cada push na `main` atualiza o site em cerca de um minuto.

## 🛠️ Tecnologias

- HTML5 semântico com dados estruturados schema.org
- Tailwind CSS (CDN) e CSS próprio
- JavaScript mínimo (ano do rodapé e animação ao rolar)
- GitHub Pages

## 📄 Licença

Desenvolvido por **Márcio Xavier** para fins de portfólio profissional. © 2026 — Todos os direitos reservados.
