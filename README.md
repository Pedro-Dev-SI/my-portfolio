# 🚀 Portfólio - Pedro Selvate

Este é o repositório do meu portfólio profissional, desenvolvido com **Vue 3**, **Vuetify 3** e **Vite**. O objetivo é apresentar minhas experiências, formação, habilidades técnicas e formas de contato de maneira moderna, responsiva e multilíngue.

---

## ✨ Visão Geral

- **Framework:** [Vue 3](https://vuejs.org/) + [Vuetify 3](https://vuetifyjs.com/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Gerenciamento de Estado:** [Pinia](https://pinia.vuejs.org/) (pronto para uso)
- **Roteamento:** [Vue Router](https://router.vuejs.org/)
- **Internacionalização:** [vue-i18n](https://kazupon.github.io/vue-i18n/) (Português e Inglês)
- **Estilo:** SCSS customizado e tema escuro personalizado
- **Componentização:** Seções separadas para fácil manutenção e expansão
- **Contato:** Formulário funcional integrado ao [EmailJS](https://www.emailjs.com/)

---

## 📁 Estrutura das Seções

- **AppHeader:** Apresentação, foto e título animados
- **AboutSection:** Sobre mim, foto, descrição e download de currículo
- **ExperienceSection:** Tecnologias principais e linha do tempo de experiências profissionais
- **AcademicSection:** Formação acadêmica
- **ContactSection:** Links sociais e formulário de contato por e-mail

---

## 🌐 Internacionalização

O portfólio suporta **Português** e **Inglês**. O idioma pode ser alternado facilmente pelo seletor no topo direito da página.

Arquivos de tradução:
- `src/locales/pt.json`
- `src/locales/en.json`

---

## 🚀 Instalação e Uso

### Pré-requisitos

- Node.js 18+
- npm, yarn ou pnpm

### Instalação das dependências

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

### Ambiente de desenvolvimento

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

### Build para produção

```bash
npm run build
# ou
yarn build
# ou
pnpm build
```

Os arquivos otimizados estarão na pasta `dist/`.

### Preview do build

```bash
npm run preview
# ou
yarn preview
# ou
pnpm preview
```

---

## ⚙️ Configurações e Plugins

- **Tema escuro customizado** no Vuetify (`src/plugins/vuetify.js`)
- **Importação automática de componentes** com [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
- **Fontes**: Roboto (Google Fonts), Material Design Icons e FontAwesome
- **Roteamento automático** baseado em arquivos da pasta `src/pages`

---

## 📦 Principais Dependências

- `vue`, `vue-i18n`, `vue-router`, `vuetify`
- `emailjs-com` (envio de e-mails pelo formulário de contato)
- `@mdi/font`, `@fortawesome/fontawesome-free`
- `sass`, `vite`, `unplugin-vue-components`, `unplugin-vue-router`

---

## 🛠️ Estrutura de Pastas

```
src/
  assets/         # Imagens, ícones e documentos
  components/     # Componentes Vue reutilizáveis (seções do portfólio)
  locales/        # Arquivos de tradução (pt/en)
  pages/          # Páginas principais (SPA)
  plugins/        # Configurações de plugins (Vuetify, Router)
  router/         # Configuração do Vue Router
  styles/         # SCSS global e variáveis de tema
  main.js         # Bootstrap da aplicação
  App.vue         # Componente raiz
```

---

## 📧 Contato

O formulário de contato envia mensagens diretamente para o e-mail cadastrado via **EmailJS**. Os campos obrigatórios são validados antes do envio.

- [LinkedIn](https://www.linkedin.com/in/pedro-selvate/)
- [GitHub](https://github.com/Pedro-Dev-SI)

---

## 📄 Licença

MIT

---

> Sinta-se à vontade para clonar, customizar e usar este portfólio como base para o seu próprio!
