
export const m10Modules = `
# Módulos, Pip e Ambientes Virtuais

À medida que seus programas crescem, escrever todo o código em um único arquivo torna-se impraticável. Para manter o código organizado, reutilizável e profissional, o Python utiliza o conceito de **Módulos**.

Um módulo é simplesmente um arquivo contendo definições e instruções Python. O nome do arquivo é o nome do módulo acrescido do sufixo \`.py\`.

## 1. Importando Módulos

Existem várias formas de importar módulos em Python. Vamos usar o módulo nativo \`math\` como exemplo.

### Importação simples (\`import\`)
Importa o módulo inteiro. Para usar suas funções, devemos usar o prefixo do nome do módulo (Namespace). É a forma mais segura para evitar conflitos de nomes.

\`\`\`python
import math

# Devemos usar math.sqrt
print(math.sqrt(16)) # 4.0
\`\`\`

### Importação com Alias (\`as\`)
Se o nome do módulo for muito longo ou se quisermos evitar conflitos, podemos dar-lhe um apelido. É muito comum ver \`import numpy as np\` ou \`import pandas as pd\`.

\`\`\`python
import math as m

print(m.pi) # 3.14159...
\`\`\`

### Importação específica (\`from ... import ...\`)
Importa apenas funções ou classes específicas diretamente para o seu namespace atual. Não é necessário usar o prefixo.

\`\`\`python
from math import sqrt, pi

print(sqrt(25)) # 5.0 (Sem math.)
print(pi)       # 3.14...
\`\`\`

### Importação total (\`from ... import *\`)
Importa **tudo** do módulo. **Não é recomendado** em códigos profissionais, pois pode sobrescrever variáveis que você já definiu sem você perceber (poluição de namespace).

\`\`\`python
from math import *
# Se você tivesse uma variável chamada 'tan' ou 'log', ela seria sobrescrita aqui.
\`\`\`

---

## 2. Módulos Próprios (Seus Arquivos)

Você pode importar seus próprios códigos. Imagine que você tem dois arquivos na mesma pasta: \`funcoes.py\` e \`main.py\`.

**Arquivo \`funcoes.py\`**:
\`\`\`python
def saudacao(nome):
    return f"Olá, {nome}!"
\`\`\`

**Arquivo \`main.py\`**:
\`\`\`python
import funcoes

print(funcoes.saudacao("Maria"))
\`\`\`

O Python busca módulos no diretório atual e nos caminhos definidos na variável de ambiente \`PYTHONPATH\`.

---

## 3. Gerenciador de Dependências (PIP)

O Python vem com uma biblioteca padrão rica ("batteries included"), mas a força do ecossistema está nos pacotes de terceiros (como NumPy, Pandas, Matplotlib, Django).

O **PyPI** (Python Package Index) é o repositório oficial desses softwares. Para instalá-los, usamos o **pip** (*Pip Installs Packages*) no terminal (não dentro do script Python).

### Comandos Básicos

*   **Instalar um pacote:**
    \`\`\`bash
    pip install nome_do_pacote
    \`\`\`
    Exemplo: \`pip install matplotlib\`

*   **Listar pacotes instalados:**
    \`\`\`bash
    pip list
    \`\`\`

*   **Atualizar um pacote:**
    \`\`\`bash
    pip install --upgrade nome_do_pacote
    \`\`\`

*   **Desinstalar:**
    \`\`\`bash
    pip uninstall nome_do_pacote
    \`\`\`

---

## 4. Ambientes Virtuais (Virtual Environments)

Este é um dos conceitos mais importantes para um desenvolvedor Python profissional.

Imagine que você tem dois projetos:
1.  **Projeto A:** Precisa do \`django==2.0\` (versão antiga).
2.  **Projeto B:** Precisa do \`django==4.0\` (versão nova).

Se você instalar o Django globalmente no seu computador (\`pip install django\`), você só pode ter uma versão. Instalar a 4.0 removerá a 2.0, quebrando o Projeto A.

Para resolver isso, usamos **Ambientes Virtuais**. Um ambiente virtual é uma pasta isolada que contém uma instalação do Python e bibliotecas exclusivas para aquele projeto.

### Como criar e usar (módulo \`venv\`)

1.  **Criar o ambiente:**
    Navegue até a pasta do seu projeto no terminal e execute:
    \`\`\`bash
    # Cria uma pasta chamada ".venv" com o ambiente
    python -m venv .venv
    \`\`\`

2.  **Ativar o ambiente:**
    Antes de instalar qualquer coisa, você deve ativar o ambiente.
    *   **Windows:**
        \`\`\`bash
        .venv\\Scripts\\activate
        \`\`\`
    *   **Linux / macOS:**
        \`\`\`bash
        source .venv/bin/activate
        \`\`\`
    
    Ao ativar, seu terminal mostrará algo como \`(.venv) user@path:~\`.

3.  **Instalar no ambiente:**
    Agora, quando você fizer \`pip install numpy\`, a biblioteca será instalada **apenas** dentro da pasta \`.venv\`, sem afetar o resto do sistema.

### requirements.txt

Para compartilhar seu projeto, você deve listar as dependências.
1.  Gerar lista: \`pip freeze > requirements.txt\`
2.  Instalar lista (em outro PC): \`pip install -r requirements.txt\`

---

## 5. O bloco \`if __name__ == "__main__":\`

Quando um arquivo Python é importado, **todo** o código dentro dele é executado imediatamente. Isso pode ser um problema se o arquivo contiver testes ou prints soltos.

A variável especial \`__name__\` define o contexto de execução:
*   Se o arquivo é executado diretamente (\`python arquivo.py\`), \`__name__\` vale \`"__main__"\`.
*   Se o arquivo é importado (\`import arquivo\`), \`__name__\` vale \`"arquivo"\` (o nome do módulo).

**Exemplo Prático:**

Arquivo \`calculadora.py\`:
\`\`\`python
def somar(a, b):
    return a + b

# Código que previne execução indesejada ao importar
if __name__ == "__main__":
    print("Testando a soma...")
    print(somar(2, 2))
\`\`\`

Se você fizer \`import calculadora\` em outro script, a função \`somar\` estará disponível, mas os \`print\` de teste não serão executados. Se você rodar \`python calculadora.py\`, os testes aparecerão.

**Resumo:** Use sempre este bloco para códigos que só devem rodar quando o script for o programa principal.
`;
