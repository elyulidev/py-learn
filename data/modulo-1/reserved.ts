
export const m1Reserved = `
# Palavras Reservadas em Python

Python possui um conjunto de palavras reservadas que não podemos utilizar para nomear variáveis nem funções, já que a linguagem as reserva internamente para seu funcionamento.

Por exemplo, não podemos chamar uma função de \`True\`, e se tentarmos fazê-lo, teremos um \`SyntaxError\`. Isso é lógico, já que Python usa internamente \`True\` para representar o tipo booleano verdadeiro.

\`\`\`python
def True():
    pass
# SyntaxError: invalid syntax
\`\`\`

Analogamente, não podemos chamar uma variável de \`is\`, já que se trata do operador de identidade.

\`\`\`python
is = 4
# SyntaxError: invalid syntax
\`\`\`

É lógico que não nos permitam fazer isso, pois poderíamos quebrar a linguagem. Algo muito importante a ter em conta é que palavras como \`list\` **não** estão reservadas, e isso é algo que pode gerar problemas. O código a seguir cria uma lista usando a função padrão do Python \`list()\`.

\`\`\`python
a = list("letras")
print(a)
# ['l', 'e', 't', 'r', 'a', 's']
\`\`\`

No entanto, e embora possa parecer estranho, podemos criar uma função com esse nome. Ao fazer isso, estamos sobrescrevendo ("shadowing") a função \`list()\` nativa do Python. Se tentarmos fazer a chamada anterior, ela falhará, pois nossa nova função não aceita argumentos. **Muito cuidado com isso.**

\`\`\`python
def list():
    print("Função list")

# a = list("letras")
# TypeError: list() takes 0 positional arguments but 1 was given
\`\`\`

Voltando às palavras reservadas, Python nos oferece uma forma de acessar essas palavras programaticamente. Aqui temos uma listagem com todas elas:

\`\`\`python
import keyword
print(keyword.kwlist)

# ['False', 'None', 'True', 'and', 'as', 'assert',
# 'async', 'await', 'break', 'class', 'continue',
# 'def', 'del', 'elif', 'else', 'except', 'finally',
# 'for', 'from', 'global', 'if', 'import', 'in', 'is',
# 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise',
# 'return', 'try', 'while', 'with', 'yield']
\`\`\`

Vejamos para que serve cada grupo de palavras reservadas.

## Condicionais: \`if\`, \`elif\`, \`else\`

O uso do \`if\` e condicionais são a base de qualquer linguagem. São usados para alterar o fluxo de execução em função de determinadas condições.

\`\`\`python
linguagem = "Python"

if linguagem == "Python":
    print("Python é o melhor")
elif linguagem == "Java":
    print("Java não é tão legal")
else:
    print("Nenhum supera Python")
\`\`\`

## Loops: \`while\`, \`for\`, \`break\`, \`continue\`

\`while\` e \`for\` permitem criar laços de repetição. \`continue\` e \`break\` permitem alterar o fluxo dentro do loop.

*   **while:** Executa enquanto a condição for verdadeira.
*   **for:** Itera sobre uma sequência.
*   **continue:** Pula para a próxima iteração.
*   **break:** Sai do loop imediatamente.

\`\`\`python
# Exemplo de break
x = 0
while True:
    print(x)
    if x == 2:
        break
    x += 1
# Saída: 0, 1, 2
\`\`\`

## Valores: \`False\`, \`True\`, \`None\`

\`False\`, \`True\` são booleanos. \`None\` é o equivalente a null ou "nada".

\`\`\`python
x = (5 == 1) # False
def funcao(): pass
print(funcao()) # None (retorno padrão)
\`\`\`

## Operadores Lógicos: \`and\`, \`or\`, \`not\`

Operadores da lógica booleana.

\`\`\`python
print(True and False) # False
print(True or False)  # True
print(not True)       # False
\`\`\`

## Funções: \`def\`, \`return\`, \`lambda\`, \`pass\`, \`yield\`

*   **def:** Define uma função.
*   **return:** Retorna um valor.
*   **lambda:** Funções anônimas curtas.
*   **pass:** Placeholder para código vazio.
*   **yield:** Usado em geradores para produzir valores sob demanda (lazy evaluation).

\`\`\`python
# Exemplo de yield (Gerador)
def gerador():
    yield 1
    yield 2
    yield 3

for i in gerador():
    print(i)
\`\`\`

## Classes: \`class\`

O núcleo da Orientação a Objetos. Define um novo tipo de dado com atributos e métodos.

\`\`\`python
class MinhaClasse:
    def __init__(self):
        print("Objeto criado")
\`\`\`

## Exceções: \`assert\`, \`try\`, \`except\`, \`finally\`, \`raise\`

Permitem tratar erros (exceções) para que o programa não pare abruptamente.

\`\`\`python
try:
    valor = int("texto") # Isso falha
except ValueError as e:
    print("Erro de valor:", e)
finally:
    print("Sempre executa")
\`\`\`

## Variáveis: \`global\`, \`nonlocal\`

*   **global:** Permite modificar uma variável definida no escopo global dentro de uma função.
*   **nonlocal:** Permite modificar uma variável de uma função pai (escopo aninhado), mas não global.

\`\`\`python
a = 0
def soma_um():
    global a
    a = a + 1
\`\`\`

## Módulos: \`from\`, \`import\`

Usados para importar bibliotecas.

\`\`\`python
from collections import namedtuple
import math
\`\`\`

## Pertinência e Identidade: \`in\`, \`is\`

*   **in:** Verifica se um elemento está contido em uma sequência.
*   **is:** Verifica se duas variáveis apontam para o **mesmo objeto** na memória.

\`\`\`python
lista = ["a", "b"]
print("a" in lista) # True

a = [1, 2]
b = [1, 2]
print(a is b) # False (são listas diferentes com mesmo conteúdo)
\`\`\`

## Deletar: \`del\`

Remove uma referência a um objeto.

\`\`\`python
a = 10
del a
# print(a) # NameError
\`\`\`

## Context Managers: \`with\`, \`as\`

Gerenciadores de contexto, muito usados para arquivos ou conexões de rede, garantindo que recursos sejam fechados.

\`\`\`python
with open('arquivo.txt', 'r') as f:
    conteudo = f.read()
# Arquivo é fechado automaticamente aqui
\`\`\`

## Concorrência: \`async\`, \`await\`

Permite programação assíncrona, executando tarefas enquanto outras aguardam (ex: I/O).

\`\`\`python
import asyncio

async def processo():
    await asyncio.sleep(1)
    print("Processo finalizado")

# asyncio.run(processo())
\`\`\`
`;
