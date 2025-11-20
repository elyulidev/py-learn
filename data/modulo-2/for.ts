
export const m2For = `
# Loop for

A seguir explicaremos o **loop for** e suas particularidades em Python que, comparado com outras linguagens de programação, possui certas diferenças.

O \`for\` é um tipo de laço, parecido com o \`while\`, mas com diferenças cruciais. A principal é que o número de iterações de um \`for\` está definido de antemão, enquanto num \`while\` não.

A diferença principal em relação ao \`while\` está na condição. Enquanto no \`while\` a condição é avaliada em cada iteração para decidir se executa ou não o código, no \`for\` não existe tal condição explícita, mas sim um **iterável** que define quantas vezes o código será executado.

No exemplo seguinte vemos um loop \`for\` que é executado 5 vezes, onde o \`i\` incrementa seu valor "automaticamente" em 1 a cada iteração.

\`\`\`python
for i in range(0, 5):
    print(i)

# Saída:
# 0
# 1
# 2
# 3
# 4
\`\`\`

Se você leu o capítulo do \`while\`, talvez já comece a ver vantagens no uso do \`for\`. Se, por exemplo, queremos ter um número que cresce de 0 a $n$, fazê-lo com \`for\` economiza linhas de código, pois não precisamos escrever código para incrementar o número manualmente.

Em Python pode-se iterar praticamente tudo, como por exemplo uma cadeia de texto (string). No exemplo seguinte vemos como o \`i\` assume os valores de cada letra. Mais adiante explicaremos o que são iteráveis e iteradores.

\`\`\`python
for i in "Python":
    print(i)

# Saída:
# P
# y
# t
# h
# o
# n
\`\`\`

## Iteráveis e Iteradores

Para entender 100% os loops \`for\` e como o Python foi projetado como linguagem de programação, é muito importante entender os conceitos de **iteráveis** e **iteradores**. Comecemos com definições:

1.  **Iteráveis:** São objetos que, como o nome indica, podem ser iterados. Dito de outra forma: podem ser indexados. Se você pensar em um vetor (ou uma \`list\` em Python), podemos indexá-lo com \`lista[1]\`, logo seria um iterável.
2.  **Iteradores:** São objetos que fazem referência a um elemento e que possuem um método \`next\` que permite fazer referência ao seguinte.

Ambos são conceitos um tanto abstratos e podem ser complicados de entender. Vejamos exemplos. Como comentamos, iteráveis são objetos que podem ser percorridos. Alguns exemplos de iteráveis em Python são as **listas, tuplas, strings ou dicionários**. Sabendo disso, o primeiro que temos que ter claro é que num \`for\`, o que vem depois do \`in\` deve ser sempre um iterável.

\`\`\`python
# for <variavel> in <iteravel>:
#    <Código>
\`\`\`

Tem bastante lógica, pois se queremos iterar uma variável, esta variável deve ser iterável. Mas chegados a este ponto, talvez você pergunte: como sei se algo é iterável ou não? Bem fácil, com a função \`isinstance()\` podemos saber.

> **Nota:** Nas versões modernas do Python (3.10+), deve-se importar \`Iterable\` de \`collections.abc\`.

\`\`\`python
from collections.abc import Iterable

lista = [1, 2, 3, 4]
cadena = "Python"
numero = 10

print(isinstance(lista, Iterable))  # True
print(isinstance(cadena, Iterable)) # True
print(isinstance(numero, Iterable)) # False
\`\`\`

Portanto, as listas e as strings são iteráveis, mas \`numero\`, que é um inteiro, não é. É por isso que não podemos fazer o seguinte, pois daria erro (\`TypeError: 'int' object is not iterable\`):

\`\`\`python
numero = 10
# for i in numero:
#    print(i)
\`\`\`

Uma vez entendidos os iteráveis, vejamos os iteradores. Para entender os iteradores, é importante conhecer a função \`iter()\` em Python. Dita função pode ser chamada sobre um objeto que seja iterável, e nos devolverá um **iterador**, como vemos no exemplo:

\`\`\`python
lista = [5, 6, 3, 2]
it = iter(lista)
print(it)       # <list_iterator object at 0x...>
print(type(it)) # <class 'list_iterator'>
\`\`\`

Vemos que ao imprimir \`it\` é um iterador, da classe \`list_iterator\`. Esta variável iteradora faz referência à lista original e nos permite acessar seus elementos com a função \`next()\`. Cada vez que chamamos \`next()\` sobre \`it\`, ele nos devolve o elemento seguinte da lista original. Portanto, se quisermos acessar o elemento 4, teremos que chamar 4 vezes o \`next()\`. Note que o iterador começa "apontando fora" da lista, e não faz referência ao primeiro elemento até que se chame \`next()\` pela primeira vez.

\`\`\`python
lista = [5, 6, 3, 2]
it = iter(lista)

print(next(it))
#     [5, 6, 3, 2]
#      ^
#      |
#     it

print(next(it))
#     [5, 6, 3, 2]
#         ^
#         |
#        it

print(next(it))
#     [5, 6, 3, 2]
#            ^
#            |
#           it
\`\`\`

Dado que o iterador faz referência à nossa lista, se chamarmos mais vezes o \`next()\` do que o tamanho da lista, nos devolverá um erro \`StopIteration\`. Lamentavelmente não existe nenhuma opção de voltar ao elemento anterior.

\`\`\`python
lista = [5, 6]
it = iter(lista)
print(next(it)) # 5
print(next(it)) # 6
# print(next(it)) # Erro! StopIteration
\`\`\`

É perfeitamente possível ter diferentes iteradores para a mesma lista, e serão totalmente independentes. Apenas dependerão da lista, como é evidente, mas não entre eles.

\`\`\`python
lista = [5, 6, 7]
it1 = iter(lista)
it2 = iter(lista)

print(next(it1)) # 5
print(next(it1)) # 6
print(next(it1)) # 7
print(next(it2)) # 5 (Começa do início para o it2)
\`\`\`

## For Aninhados (Nested Loops)

É possível aninhar os \`for\`, ou seja, colocar um dentro de outro. Isto pode ser muito útil se queremos iterar algum objeto que, em cada elemento, tem por sua vez outra classe iterável. Podemos ter, por exemplo, uma lista de listas, uma espécie de matriz.

\`\`\`python
lista = [[56, 34, 1],
         [12, 4, 5],
         [9, 4, 3]]
\`\`\`

Se iterarmos usando apenas um \`for\`, estaremos realmente acessando a segunda lista (as linhas), mas não os elementos individuais.

\`\`\`python
for i in lista:
    print(i)
# [56, 34, 1]
# [12, 4, 5]
# [9, 4, 3]
\`\`\`

Se queremos acessar cada elemento individualmente, podemos aninhar dois \`for\`. Um deles se encarregará de iterar as linhas e o outro as colunas (elementos).

\`\`\`python
for i in lista:
    for j in i:
        print(j)
# Saída: 56, 34, 1, 12, 4, 5, 9, 4, 3
\`\`\`

## Exemplos de for

### Iterando cadeia ao contrário
Fazendo uso de slicing \`[::-1]\` pode-se iterar a lista do último ao primeiro elemento.

\`\`\`python
texto = "Python"
for i in texto[::-1]:
    print(i) 
# Saída: n, o, h, t, y, P
\`\`\`

### Iterando saltando elementos
Com \`[::2]\` vamos tomando um elemento sim e outro não.

\`\`\`python
texto = "Python"
for i in texto[::2]:
    print(i) 
# Saída: P, t, o
\`\`\`

### List Comprehensions
Um exemplo de \`for\` usado com list comprehensions (compreensão de listas).

\`\`\`python
print(sum(i for i in range(10)))
# Saída: 45
\`\`\`
`;
