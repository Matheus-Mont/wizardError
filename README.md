<h1 align="center">
  <!-- <img alt="Logo" src="public/img/FluirLogoCompleto.svg" width="400px"> -->
  LOGO
</h1>

# *NOME* app


<p align="center">
  <a href="#git">Git</a>&nbsp;|&nbsp;
  <a href="#workflow">Workflow</a>&nbsp;|&nbsp;
  <a href="#código">Código</a>&nbsp;|&nbsp;
  <a href="#tratativa-de-erros">Tratativa de erros</a>&nbsp;|&nbsp;
  <a href="#analytics">Analytics</a>&nbsp;|&nbsp;
  <a href="#logflare">Logflare</a>&nbsp;|&nbsp;
  <a href="#eslint-e-prettier">ESlint e Prettier</a>&nbsp;|&nbsp;
  <a href="#remote-dev">Remote Dev</a>
</p>

---

[Staging](https://fluir-staging.vercel.app/) | [Production](https://app.fluir.io/)

![Staging](/coverage/badge-branches.svg)
![Staging](/coverage/badge-functions.svg)
![Staging](/coverage/badge-lines.svg)
![Staging](/coverage/badge-statements.svg)

---

## Manual para os devs

### Git

- Sempre criar um branch novo a partir do `develop`, com o nome sufixo `feat` se for feature ou `fix` se for bugfix
Exemplo: `feat/[nome_programador]/feature123`
- O branch `main` é a produção, `staging` é o branch onde consultores podem realizar testes e `develop` a branch de desenvolvimento

#### Workflow

1. Criar branch para a nova feature, a partir do `develop`
2. Quando as alterações estiverem completas, fazer um pull request para o branch `develop`
3. No final da sprint `develop` fará pull request para `staging`

### Código 

- Sempre tentar usar os componentes `reusables`, e sempre tentar criar componentes reutilizáveis
- Caso os componentes sejam apenas para uma tela/componente, deixar organizado em pastas
- Em GETs cachear usando o React-Query
- Sempre utilizar a API layer utils/api.ts

## Tratativa de erros
- Sempre importar o nosso toast de `/utils/hooks/useToast` para mostrar erros ou outras mensagens na tela

## Algumas observações do repo

### **Analytics**

Google Analytics e Hotjar gravam os eventos necessários automaticamente.

### **Logflare**

Logs adicionais são feitos através do pino_logflare.ts, que envia eventos para o Logflare. OFFLINE

### **ESlint e Prettier**
  Hoje, o projeto está configurado utilizando o lint do próprio Next e algumas regras personalizadas. Para que ele funcione adequadamente será necessário ter em sua IDE as seguintes extensões instaladas:

  * [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  * [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

  Após isso, é necessário acrescentar às configurações do VS Code (settings.json) algumas instruções para que haja formatação e correção automátizados.

  Para tal, aperte Ctrl-Shift-P (Windows e Linux) ou Cmd-Shift-P (Mac), e digite `Preferences: Open Settings (JSON)` e acrescente as seguintes linhas no arquivo:

  ```json
  "editor.formatOnSave": false,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.formatDocument": true,
    "source.fixAll": true
  },
  ```
  E por último, deve-se alterar a quebra de linha para **LF**. Essa opção encontra-se no canto inferior direito, próximo a ***Spaces*** e ***UTF-8*** caso ela esteja em **CRLF** basta clicar e alterá-la para a opção **LF**.


### ⚠ **Problemas conhecidos**
- Fique atento para não deixar instruções duplicadas no `settings.json` do VS Code, pois o salvamento automático pode deixar de funcionar;

- Outro ponto importante é com relação ao plugin do ***ESlint***. Quando o diretório do projeto está em um terceiro nível em relação ao diretório `~/home`, o ***ESlint*** não consegue encontrar o ***path*** para o ***Prettier*** o que o impede de reconhecer erros e diferenças de padrão. Eis os exemplos de estruturas de pastas correto e incorreto, respectivamente:

  - ✔️ `~/home/dir1/*NOME*`
  - ❌ `~/home/dir1/dir2/*NOME*`

## Remote Dev
* install [git](https://github.com/git-guides/install-git) or [github](https://desktop.github.com/)
* install [Visual Studio Code (VSCode)](https://code.visualstudio.com/download)
* install [Docker](https://docs.docker.com/get-docker/)
* install [VSCode Remote Containers Extension](https://code.visualstudio.com/docs/remote/containers-tutorial)
* clone this repository, e.g. using the command line (cli)
    ```bash
    git clone git@github.com:silsistemas/*NOME*.git
    ```
* open this repository in VSCode, e.g. using the cli
    ```bash
    code *NOME*
    ```
* when prompted 
    ```
    Folder contains a Dev Container configuration file...
    ````
    chose 
    ```
    Reopen in Container
    ```
* if not prompted, press `Ctrl+Shift+P` and type
    ```
    Remote-Containers: Reopen in Container
    ```
    `IMPORTANT` if VSCode prompts you to close/save existing terminal/files, that is ok</br>
    `IMPORTANT` if VSCode prompts you to choose a folder/configuration/etc, means you're in the wrong folder, i.e. the file `.devcontainer.json` is missing</br>
    `IMPORTANT` the Remote-Container default branch is 'staging', but you can switch from inside the Remote-Container once open</br>
