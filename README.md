# Projeto-kanban

Um simples quadro Kanban (To Do, In Progress, Done) construído com HTML, CSS e JavaScript puro, utilizando o Firebase (Firestore) como banco de dados para persistência de dados em tempo real.

## Funcionalidades

- Adicionar novas tarefas.
- Mover tarefas entre as colunas com a funcionalidade de arrastar e soltar (drag and drop).
- Sincronização em tempo real com o banco de dados Firestore.

## Como Executar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado.
- Uma conta no [Firebase](https://firebase.google.com/) para configurar o banco de dados.

### Passos

1.  **Clone o repositório:**
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    cd Projeto-kanban
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure o Firebase:**
    - Crie um projeto no [console do Firebase](https://console.firebase.google.com/).
    - Crie um banco de dados Firestore.
    - Vá para as configurações do seu projeto (`Project Settings`) e, na aba `General`, encontre a seção `Your apps`.
    - Crie um novo aplicativo da Web (`</>`).
    - Copie o objeto de configuração `firebaseConfig`.
    - Cole essa configuração no arquivo `/firebase-config.js`.

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm start
    ```

5.  Abra seu navegador e acesse `http://localhost:8080`.
