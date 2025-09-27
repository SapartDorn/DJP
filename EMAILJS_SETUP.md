# Configuração do EmailJS para Formulário de Contato

## Passo a Passo para Configurar o EmailJS

### 1. Criar Conta no EmailJS
1. Acesse [https://www.emailjs.com/](https://www.emailjs.com/)
2. Crie uma conta gratuita
3. Faça login no painel

### 2. Configurar Serviço de Email
1. No painel do EmailJS, vá para "Email Services"
2. Clique em "Add New Service"
3. Escolha seu provedor de email (Gmail, Outlook, etc.)
4. Siga as instruções para conectar sua conta de email
5. Anote o **Service ID** gerado

### 3. Criar Template de Email
1. Vá para "Email Templates"
2. Clique em "Create New Template"
3. Use este template:

```
Assunto: Novo contato via site - {{from_name}}

De: {{from_name}} ({{from_email}})
Para: {{to_email}}

Mensagem:
{{message}}

---
Este email foi enviado através do formulário de contato do site da DJP Logística.
```

4. Anote o **Template ID** gerado

### 4. Obter Chave Pública
1. Vá para "Account" > "General"
2. Copie sua **Public Key**

### 5. Atualizar Configurações no Código
Abra o arquivo `src/app/services/contact.service.ts` e substitua:

```typescript
private readonly PUBLIC_KEY = 'YOUR_EMAILJS_PUBLIC_KEY'; // Substitua pela sua chave pública
private readonly SERVICE_ID = 'YOUR_EMAILJS_SERVICE_ID'; // Substitua pelo ID do seu serviço
private readonly TEMPLATE_ID = 'YOUR_EMAILJS_TEMPLATE_ID'; // Substitua pelo ID do seu template
```

### 6. Testar o Formulário
1. Execute o projeto: `npm start`
2. Acesse a página de contato
3. Preencha e envie o formulário
4. Verifique se o email foi recebido

## Funcionalidades Implementadas

✅ **Validação de Formulário**
- Campos obrigatórios
- Validação de email
- Mensagens de erro em português

✅ **Feedback Visual**
- Loading durante envio
- Mensagens de sucesso/erro
- Estados visuais dos campos

✅ **Integração com EmailJS**
- Envio direto do frontend
- Fallback com mailto
- Tratamento de erros

## Limites da Conta Gratuita
- 200 emails por mês
- 2 serviços de email
- 2 templates

## Solução de Problemas

### Email não está sendo enviado
1. Verifique se as chaves estão corretas
2. Confirme se o serviço de email está ativo
3. Verifique o console do navegador para erros

### Erro de CORS
- O EmailJS resolve automaticamente problemas de CORS
- Não é necessário configuração adicional

### Template não encontrado
- Verifique se o Template ID está correto
- Confirme se o template está publicado
