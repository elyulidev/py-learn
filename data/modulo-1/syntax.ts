export const m1Syntax = `
# Sintaxe

A seguir veremos a sintaxe do Python, vendo como podemos começar a usar a linguagem criando nossas primeiras variáveis e estruturas de controle.

O termo **sintaxe** faz referência ao conjunto de regras que definen como o código tem que ser escrito em uma determinada linguagem de programação. É a forma como devemos escrever as instruções para que o computador nos entenda.

Na maioria das linguagens existe uma sintaxe comum, como por exemplo o uso de \`=\` para atribuir um dado a uma variável, mas Python tem certas particularidades.

A sintaxe é para a programação o que a gramática é para os idiomas. Da mesma forma que a frase "Nós estamos aqui" é correta e "Eu estamos aqui" não é, o seguinte código não seria correto em Python, pois não respeita as normas da linguagem:

\`\`\`javascript
// Exemplo incorreto (parece PHP ou C)
if ($variable){
    x=9;
}
\`\`\`

Python não usa \`$\` para variáveis, não exige ponto e vírgula \`;\` no final das linhas e não utiliza chaves \`{}\` para definir blocos de código.

Para perder o medo da sintaxe, vamos ver um exemplo onde usamos cadeias (strings), operadores aritméticos e o uso do condicional \`if\`.

\`\`\`python
# Definimos uma variável x com uma string
x = "O valor de (a+b)*c é"

# Podemos realizar múltiplas atribuições na mesma linha
a, b, c = 4, 3, 2

# Realizamos operações com a, b, c
d = (a + b) * c

# Definimos uma variável booleana
imprimir = True

# Se imprimir for verdadeiro, executa o print
if imprimir:
    print(x, d)

# Saída: O valor de (a+b)*c é 14
\`\`\`

Como você pode observar, a sintaxe do Python é muito parecida com a linguagem natural ou pseudocódigo, o que a torna relativamente fácil de ler.

## Comentários

Os comentários são blocos de texto usados para documentar o código. Para o Python, é como se eles não existissem, pois são ignorados na execução.

Os comentários de uma linha iniciam-se com \`#\`.

\`\`\`python
# Isto é um comentário
x = 1 # Isto é um comentário ao final da linha
\`\`\`

Para comentários de múltiplas linhas, utiliza-se aspas triplas (sejam simples \`'''\` ou duplas \`"""\`):

\`\`\`python
'''
Isto é um comentário
de várias linhas
de código
'''
\`\`\`

## Indentação e Blocos de Código

Em Python, os blocos de código são definidos pela **indentação** (espaços em branco no início da linha). A norma geral (PEP 8) é usar **4 espaços**.

No código abaixo, o \`print\` está indentado com 4 espaços, indicando que pertence ao bloco do \`if\`.

\`\`\`python
if True:
    print("Verdadeiro")
\`\`\`

Isso é crucial. O código a seguir daria um erro (\`IndentationError\`), pois o Python espera um bloco de código após o \`: \` do \`if\`:

\`\`\`python
if True:
print("Isto gera erro")
\`\`\`

### Ponto e vírgula

Diferente de C ou Java, não é necessário usar \`;\` para terminar cada linha. Basta uma quebra de linha.

\`\`\`python
x = 5
y = 10
\`\`\`

No entanto, pode-se usar o ponto e vírgula para colocar duas instruções na mesma linha (embora não seja uma prática comum por questões de legibilidade):

\`\`\`python
x = 5; y = 10
\`\`\`

## Múltiplas Linhas

Se quisermos escrever uma única instrução em várias linhas (por ser muito longa, por exemplo), podemos usar a barra invertida \`\\\`:

\`\`\`python
x = 1 + 2 + 3 + 4 + \\
    5 + 6 + 7 + 8
\`\`\`

Se estivermos dentro de um bloco rodeado por parênteses \`()\`, colchetes \`[]\` ou chaves \`{}\`, a quebra de linha é automática, sem precisar da barra:

\`\`\`python
x = (1 + 2 + 3 + 4 +
     5 + 6 + 7 + 8)

def funcao(a, b, c):
    return a + b + c

d = funcao(10,
           23,
           3)
\`\`\`

## Criando Variáveis

Podemos atribuir valores de formas sofisticadas. Por exemplo, atribuir o mesmo valor a várias variáveis:

\`\`\`python
x = y = z = 10
\`\`\`

Ou atribuir vários valores separados por vírgula (Conceito de Unpacking):

\`\`\`python
x, y = 4, 2
x, y, z = 1, 2, 3
\`\`\`

## Nomeando Variáveis

Você pode nomear suas variáveis como quiser, mas lembre-se que Python é **case-sensitive** (sensível a maiúsculas/minúsculas). \`x\` e \`X\` são variáveis diferentes.

Regras para nomes de variáveis:
1.  Não pode começar por número.
2.  Não permite uso de hífens \`-\`.
3.  Não permite espaços em branco.
4.  Não pode usar palavras reservadas.

\`\`\`python
# Válido
_variavel = 10
variavel_teste = 20
var10 = 30
variavel = 60
Variavel = 10

# Não Válido
2variable = 10  # Começa com número
var-iable = 10  # Hífen é interpretado como subtração
var iable = 10  # Espaço não permitido
\`\`\`

### Palavras Reservadas

Existem palavras que o Python usa internamente e não podem ser usadas como nomes de variáveis. Você pode ver a lista com:

\`\`\`python
import keyword
print(keyword.kwlist)

# Exemplos: 'False', 'None', 'True', 'and', 'class', 'def',
# 'if', 'import', 'return', 'while', 'with'...
\`\`\`

## Uso de Parênteses

O Python segue a ordem de precedência matemática padrão. O uso de parênteses altera essa prioridade.

\`\`\`python
x = 10
# Multiplicação acontece antes da subtração
y = x * 3 - 3 ** 10 - 2 + 3

# Parênteses forçam a ordem
y = (x * 3 - 3) ** (10 - 2) + 3
\`\`\`

## Variáveis e Escopo (Scope)

Um conceito importante é o alcance da variável. No exemplo abaixo, o \`x = 10\` é **Global**, enquanto o \`x = 5\` dentro da função é **Local**.

\`\`\`python
x = 10

def funcao():
    x = 5 # Esta x só existe aqui dentro

funcion()
print(x) # Imprimirá 10 (a global)
\`\`\`

*Veremos mais sobre funções e escopo no Módulo 5.*

## Uso da função print()

É interessante fazer uso de \`print()\` para depurar o código e ver o que está acontecendo.

Podemos imprimir texto:
\`\`\`python
print("Isto é o conteúdo a imprimir")
\`\`\`

Podemos imprimir variáveis:
\`\`\`python
x = 10
print(x)
\`\`\`

E podemos imprimir combinações separando por vírgula:
\`\`\`python
x = 10
y = 20
print("Os valores x, y são:", x, y)
# Saída: Os valores x, y são: 10 20
\`\`\`
`;
