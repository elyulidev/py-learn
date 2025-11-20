
export const m1Install = `
# Como programar em Python?

Se você quer começar a programar em Python, neste módulo apresentamos duas alternativas de como você pode começar a fazê-lo:

1.  **Sem instalação:** Usando a versão online do JupyterLab. É a forma mais simples e rápida.
2.  **Com instalação:** Usando Python com PyCharm. Para isso teremos que instalar a própria linguagem Python e o ambiente de desenvolvimento PyCharm.

Vamos começar!

## Sem instalação: JupyterLab

Se você quer começar a programar em Python de maneira rápida sem ter que instalar nada, existe uma alternativa muito útil chamada **JupyterLab**. Trata-se de uma ferramenta desenvolvida pelo Jupyter, um projeto open-source sem fins lucrativos que nasceu em 2014 do projeto IPython.

O JupyterLab é um ambiente de desenvolvimento web (acessa-se através do Firefox, Chrome ou outro navegador) e, além de poder instalá-lo no seu computador, oferecem um serviço online gratuito. Com apenas um acesso a um endereço web você pode começar a programar.

> Acesse [jupyter.org/try](https://jupyter.org/try) e procure por “Try JupyterLab”.

Uma vez carregada a página, você encontrará o ambiente de desenvolvimento. À esquerda você tem a navegação, onde estão todos os seus arquivos e pastas. À direita podem ser visualizados os arquivos **.ipynb**, que é o formato dos *Jupyter Notebook* por excelência.

Nestes arquivos .ipynb você pode escrever código Python e executá-lo, além de poder misturá-lo com texto, imagens, animações e outras ferramentas.

Se criarmos um novo Notebook em *File -> New -> Notebook* e selecionarmos o Kernel Python 3, podemos começar a criar nosso primeiro código, o famoso "Olá Mundo". Clicando na seta (play), o código selecionado é executado.

### Vantagens dos Notebooks
*   Permitem executar código fragmento a fragmento, vendo o resultado logo na linha seguinte.
*   Pode-se misturar código com outros recursos como imagens ou texto com formatação Markdown.
*   É possível visualizar gráficos, como os gerados com matplotlib, diretamente no documento.

### Desvantagens
*   Não se trata de um ambiente de desenvolvimento completo, carecendo de muitas funcionalidades avançadas.
*   Se usarmos a versão web, estaremos limitados pelos recursos do servidor. A rapidez será maior no nosso computador local.
*   Para projetos grandes de Python não é a melhor alternativa.

Portanto, é uma ferramenta perfeita para aprender e testar, mas se você acredita que precisa de mais, explicamos como instalar Python e o PyCharm a seguir.

---

## Com instalação: Python + PyCharm

Se, pelo contrário, você busca algo mais completo, deverá instalar o Python e um ambiente de desenvolvimento (IDE) no seu computador. Você precisará de duas coisas:

1.  **Python:** A própria linguagem de programação (o interpretador).
2.  **IDE:** Um ambiente de desenvolvimento, pois torna a programação uma tarefa muito mais fácil. Existem muitos como Atom, Sublime Text ou VS Code, mas aqui usaremos o **PyCharm**.

### 1. Instalando Python no Windows

Para instalar o Python no Windows, vá para a seção de downloads do [site oficial](https://www.python.org) e selecione a última versão (recomendamos a 3.x, pois as versões anteriores 2.x não têm mais suporte).

Uma vez baixado o executável, abra-o e realize a instalação.

> **IMPORTANTE:** Verifique se a opção **“Add Python 3.x to PATH”** está marcada antes de clicar em Install.

Após finalizar, abra o terminal de comandos do Windows (procure por \`cmd\` ou Prompt de Comando) e verifique se foi instalado corretamente executando:

\`\`\`bash
python -V
\`\`\`

Você verá na saída algo como \`Python 3.10.x\`.

### 2. Instalando o PyCharm

Agora vamos instalar o PyCharm. Ele é um IDE da empresa JetBrains, disponível para Windows, Linux e macOS.

Para instalar, acesse a seção de downloads da JetBrains e selecione a versão **Community**, que é a versão gratuita para desenvolvimento puro em Python.

### 3. Configurando o PyCharm

Uma vez aberto o PyCharm, realize os seguintes passos:

1.  Crie um **Novo Projeto**.
2.  Atribua um nome e diga onde quer salvá-lo.
3.  Recomendamos usar **Virtualenv** para os ambientes virtuais.
4.  Em *Base Interpreter*, selecione a versão do Python que você baixou anteriormente.

O projeto será criado. Crie um novo arquivo Python (File -> New -> Python File) com um nome qualquer (ex: \`main.py\`).

Agora você pode escrever código. Comecemos com o clássico:

\`\`\`python
print("Olá, Mundo!")
\`\`\`

Para rodar, vá em *Run -> Run* ou clique com o botão direito e selecione *Run*.

> **Dica:** Uma das características mais úteis no PyCharm é que se podem instalar pacotes de maneira muito simples através de sua interface gráfica. Por exemplo, se quiser instalar a biblioteca \`numpy\`, vá em *Preferences -> Project -> Project Interpreter* e adicione bibliotecas clicando no \`+\`.
`;
