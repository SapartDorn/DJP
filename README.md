# DJP Logística

Site institucional da DJP Logística desenvolvido em Angular.

## Deploy no Netlify

### Configurações de Build:
- **Build Command:** `npm run build`
- **Publish Directory:** `dist/djp/browser`
- **Node Version:** 18.18.0

### Arquivos de Configuração:
- `netlify.toml` - Configuração principal do Netlify
- `.nvmrc` - Versão do Node.js
- `public/_redirects` - Redirecionamentos para SPA

### Comandos Disponíveis:
- `npm start` - Servidor de desenvolvimento
- `npm run build` - Build de produção (com SSR)
- `npm run build:static` - Build estático (recomendado para Netlify)
- `npm run build:ssr` - Build com SSR
- `npm test` - Executar testes

### Tecnologias:
- Angular 20
- Tailwind CSS
- TypeScript
- Express (SSR)