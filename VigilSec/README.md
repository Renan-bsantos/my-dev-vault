# VigilSec - Site Institucional

Site institucional da VigilSec, empresa especializada em soluções profissionais de cibersegurança. Site moderno, responsivo e acessível, desenvolvido com HTML, CSS e JavaScript puro.

## 📋 Sobre o Projeto

O VigilSec é uma página web institucional que apresenta os serviços de cibersegurança oferecidos pela empresa, incluindo:
- Teste de Intrusão (Pentest)
- SOC Gerenciado 24/7
- Consultoria e Governança
- Resposta a Incidentes & Forensics
- Threat Intelligence
- Gestão de Vulnerabilidades
- Treinamento e Conscientização
- Segurança em Cloud
- DevSecOps e Segurança de Aplicações

## 🚀 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica e acessível
- **CSS3** - Design moderno com variáveis CSS, gradientes e animações
- **JavaScript** - Interatividade e manipulação do DOM
- **JSON** - Dados dinâmicos dos serviços

## ✨ Funcionalidades

- ✅ Design responsivo (mobile-first)
- ✅ Navegação suave entre seções
- ✅ Menu mobile interativo
- ✅ Carregamento dinâmico de serviços via JSON
- ✅ Formulário de contato com validação
- ✅ Animações e transições suaves
- ✅ Tema escuro moderno
- ✅ Acessibilidade (ARIA labels, navegação por teclado)
- ✅ SEO otimizado

## 📁 Estrutura de Arquivos

```
VigilSec/
│
├── index.html          # Página principal
├── style.css           # Estilos globais e responsivos
├── script.js           # Funcionalidades JavaScript
├── data.json           # Dados dos serviços
└── README.md           # Documentação do projeto
```

## 🎨 Seções do Site

1. **Hero** - Apresentação principal com call-to-action
2. **Serviços** - Grid dinâmico com cards dos serviços
3. **Sobre** - Informações sobre a empresa e diferenciais
4. **Contato** - Formulário de contato validado

## 🛠️ Como Usar

### Pré-requisitos

Nenhum! O projeto utiliza apenas tecnologias web nativas, sem dependências externas.

### Instalação e Execução

1. Clone ou baixe este repositório
2. Abra o arquivo `index.html` em um navegador moderno
3. Ou use um servidor local:

```bash
# Com Python 3
python -m http.server 8000

# Com Node.js (http-server)
npx http-server

# Com PHP
php -S localhost:8000
```

Acesse `http://localhost:8000` no navegador.

## 📝 Personalização

### Modificar Serviços

Edite o arquivo `data.json` para adicionar, remover ou modificar os serviços:

```json
{
  "services": [
    {
      "id": "novo-servico",
      "title": "Título do Serviço",
      "summary": "Descrição do serviço...",
      "range": "Escopo ou alcance do serviço"
    }
  ]
}
```

### Ajustar Estilos

As variáveis CSS em `style.css` permitem personalização fácil:

```css
:root {
    --accent: #00d4ff;        /* Cor de destaque */
    --bg: #0a0e1a;            /* Cor de fundo */
    --text: #e2e8f0;          /* Cor do texto */
    --maxw: 1200px;           /* Largura máxima */
    /* ... */
}
```

## 📱 Responsividade

O site é totalmente responsivo com breakpoints em:
- **Desktop**: > 968px
- **Tablet**: 768px - 968px
- **Mobile**: < 768px
- **Mobile Small**: < 480px

## 🔧 Melhorias Futuras

- [ ] Integração com backend para envio real do formulário
- [ ] Adição de mais animações e micro-interações
- [ ] Modo claro/escuro alternável
- [ ] Internacionalização (i18n)
- [ ] Blog ou seção de notícias
- [ ] Dashboard de métricas
- [ ] Testes automatizados

## 📄 Licença

© 2024 VigilSec — Todos os direitos reservados.

## 👥 Contato

Para mais informações sobre os serviços, utilize o formulário de contato no site ou entre em contato através dos canais oficiais.

---

**Desenvolvido com foco em segurança, performance e experiência do usuário.** 🛡️


