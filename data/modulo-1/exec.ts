
export const m1Exec = `
# Executando Scripts Python

Até agora vimos pequenos trechos de código, mas como fazemos para executar programas maiores e reais? Existem fundamentalmente duas formas de executar código Python: através do **intérprete interativo** ou mediante **scripts (arquivos)**.

## 1. O Intérprete Interativo

Python é uma linguagem interpretada, o que significa que podemos interagir diretamente com ela. Se você abrir seu terminal (ou Prompt de Comando) e digitar \`python\`, entrará no modo interativo (REPL - Read Eval Print Loop).

\`\`\`bash
$ python
Python 3.10.4 (main, Mar 23 2022, 23:05:40)
Type "help", "copyright", "credits" or "license" for more information.
>>>
\`\`\`

O símbolo \`>>>\` indica que o Python está esperando suas instruções. Você pode digitar operações matemáticas ou código Python e ver o resultado imediatamente.

\`\`\`python
>>> 1 + 1
2
>>> print("Olá Python")
Olá Python
\`\`\`

Para sair deste modo, você pode digitar \`exit()\` ou pressionar \`Ctrl+D\` (Linux/Mac) ou \`Ctrl+Z\` (Windows).

Este modo é excelente para **testes rápidos** e aprendizado, mas todo o código que você escreve é perdido ao fechar a janela.

## 2. Executando Scripts (.py)

Para criar programas persistentes, escrevemos o código em arquivos de texto com a extensão \`.py\`.

Por exemplo, crie um arquivo chamado \`main.py\` com o seguinte conteúdo usando seu editor de texto ou IDE favorito:

\`\`\`python
import sys

print("Este é um script Python!")
print(f"Versão do Python: {sys.version}")
\`\`\`

Para executá-lo, abra o terminal, navegue até a pasta onde salvou o arquivo e digite:

\`\`\`bash
python main.py
\`\`\`

O interpretador lerá o arquivo linha por linha e executará as instruções sequencialmente.

## 3. Shebang (#!)

Em sistemas baseados em Unix (Linux e macOS), é comum ver uma linha especial no início dos scripts chamada **shebang**. Ela indica ao sistema operacional qual interpretador deve ser usado para executar o arquivo.

\`\`\`python
#!/usr/bin/env python3

print("Executando como um executável do sistema!")
\`\`\`

Se você der permissão de execução ao arquivo (\`chmod +x arquivo.py\`), poderá rodá-lo diretamente sem digitar \`python\` antes:

\`\`\`bash
./arquivo.py
\`\`\`

## 4. O bloco \`if __name__ == "__main__":\`

À medida que você avança em Python, encontrará frequentemente este bloco de código ao final dos scripts. É uma prática recomendada muito importante.

\`\`\`python
def minha_funcao():
    print("Função executada")

if __name__ == "__main__":
    print("Script executado diretamente")
    minha_funcao()
else:
    print("Script importado como módulo")
\`\`\`

### Para que serve isso?

Em Python, **qualquer arquivo pode ser importado como um módulo** em outro arquivo.

1.  **Execução Direta:** Se executamos o arquivo diretamente (\`python arquivo.py\`), a variável especial interna \`__name__\` recebe o valor \`"__main__"\`. O bloco \`if\` é verdadeiro e o código roda.
2.  **Importação:** Se importamos o arquivo em outro lugar (\`import arquivo\`), a variável \`__name__\` será o nome do arquivo (ex: \`"arquivo"\`). O bloco \`if\` será falso.

Usando esse padrão, garantimos que partes do código (como testes ou chamadas principais) só sejam executadas quando rodamos o script intencionalmente, e não quando apenas queremos reutilizar suas funções em outro projeto.
`;
