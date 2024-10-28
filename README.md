# Clone de Tela de Login do Instagram

Veja o projeto em funcionamento: [Clone de Tela de Login do Instagram na Vercel](https://clone-login-instagram-fabricio-santuchis-projects.vercel.app/)

Este projeto é uma recriação da tela de login do Instagram, desenvolvido com React e estilizado com Tailwind CSS. O objetivo foi reproduzir a interface e a experiência de login, aplicando boas práticas de desenvolvimento e estrutura de componentes reutilizáveis.

## 🛠 Tecnologias Utilizadas

- **React** (versão 18.3.1)
- **Tailwind CSS** (versão 3.4.14)
- **Vite** (versão 5.4.9)
- **React Icons** para ícones de interface
- **ESLint** para análise estática de código

## 🌟 Funcionalidades Principais

- **Interface Autêntica**: Recriação fiel da tela de login do Instagram.
- **Animação no Placeholder**: O placeholder do campo diminui e move-se para o topo ao começar a digitar.
- **Botão de Visualização de Senha**: Ícone de olho que permite alternar entre visualizar ou ocultar a senha.
- **Layout Responsivo**: Design que se adapta para dispositivos móveis e desktops.

## 📸 Imagens e Demonstração

Para melhor ilustrar o funcionamento do projeto, aqui estão algumas imagens prévias da interface principal:

![Login Screen](./public/login-preview.png)
![Password Visibility](./public/password-preview.png)
![Password Visibility 2](./public/password2-preview.png)
![Login Screen - tablet](./public/login-tablet-preview.png)
![Login Screen - mobile](./public/login-mobile-preview.png)

## 🚀 Como Rodar o Projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/Fabricio-santuchi/Clone-Login-Instagram.git
   ```

2. Acesse o diretório do projeto:

   ```bash
   cd Clone-Login-Instagram
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Acesse o projeto no navegador:

   O projeto será aberto no endereço `http://localhost:5173`.

## 📜 Scripts Disponíveis

- **`npm run dev`**: Inicia o servidor de desenvolvimento.
- **`npm run build`**: Cria uma versão otimizada para produção.
- **`npm run lint`**: Executa o ESLint para verificar erros de código.
- **`npm run preview`**: Visualiza a versão de produção da aplicação.

## 📂 Estrutura de Pastas

Abaixo está a estrutura de diretórios e arquivos deste projeto:

```bash
clone-login-instagram/
│
├── node_modules/          # Dependências do Node.js
├── public/                # Arquivos públicos
│   ├── login-preview.png  # Imagem de preview do login
│
├── src/                   # Diretório principal de código-fonte
│   ├── components/        # Componentes React do projeto
│   │   ├── AvailableApps/ # Componentes de download de aplicativos
│   │   ├── Footer/        # Rodapé da aplicação
│   │   ├── LoginForm/     # Formulário de login principal
│   │   └── InputField/    # Campo de entrada personalizado
│   ├── App.jsx            # Componente principal do App
│   ├── index.css          # Arquivo de estilos globais
│   └── main.jsx           # Ponto de entrada da aplicação React
│
├── .gitignore             # Arquivo Gitignore
├── eslint.config.js       # Configurações do ESLint
├── index.html             # Ponto de entrada HTML
├── package.json           # Configurações do projeto e dependências
├── postcss.config.js      # Configurações do PostCSS
├── tailwind.config.js     # Configurações do Tailwind CSS
└── vite.config.js         # Configurações do Vite (build tool)
```

## 📦 Dependências

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **React DOM**: Pacote para renderizar componentes React no DOM.
- **Vite**: Ferramenta de build ultrarrápida para projetos front-end.
- **React Icons**: Biblioteca para ícones em projetos React.
- **Tailwind CSS**: Framework CSS para estilização rápida e responsiva.

### 🛠 Dependências de Desenvolvimento

- **@types/react** e **@types/react-dom**: Tipos TypeScript para React.
- **ESLint**: Ferramenta para identificar e corrigir problemas no código.
- **Vite Plugin React**: Suporte para React dentro do Vite.

## ✍️ Autor

**Fabrício Santuchi**  
Estudante de **Sistemas de Informação** e desenvolvedor front-end. Apaixonado por criar soluções práticas e funcionais usando as mais recentes tecnologias.
