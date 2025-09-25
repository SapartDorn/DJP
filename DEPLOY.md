# Instruções de Deploy - DJP Logística

## Configuração para Netlify

### 1. Configurações de Build no Netlify:
- **Build Command:** `npm ci && npm run build:static`
- **Publish Directory:** `dist/djp/browser`
- **Node Version:** 18.18.0
- **SSR:** Desabilitado (build estático)

### 2. Variáveis de Ambiente:
- `NODE_VERSION=18.18.0`
- `NPM_FLAGS=--production=false`

### 3. Arquivos de Configuração Criados:
- ✅ `netlify.toml` - Configuração principal
- ✅ `.nvmrc` - Versão do Node.js
- ✅ `.node-version` - Versão alternativa do Node.js
- ✅ `public/_redirects` - Redirecionamentos SPA
- ✅ `package.json` - Scripts de build atualizados
- ✅ `README.md` - Documentação do projeto

### 4. Verificações Realizadas:
- ✅ Build local funcionando
- ✅ Warnings de componentes não utilizados corrigidos
- ✅ Pasta `dist/djp/browser` criada corretamente
- ✅ Assets copiados para a pasta de build
- ✅ Redirecionamentos configurados

### 5. Próximos Passos:
1. Fazer commit e push das alterações para o repositório
2. Conectar o repositório ao Netlify
3. Configurar as variáveis de ambiente no Netlify
4. Fazer o deploy

### 6. Comandos para Teste Local:
```bash
npm run build
npm run start
```

### 7. Estrutura de Build:
```
dist/djp/browser/
├── index.html
├── assets/
│   ├── DJP.png
│   ├── DJP-fundo-transparente.png
│   └── effa-2024.png
├── styles-*.css
├── main-*.js
└── polyfills-*.js
```

**Status:** ✅ Pronto para Deploy
