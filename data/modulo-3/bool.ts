
export const m3Bool = `
# Booleanos em Python

Assim como em outras linguagens de programação, em Python existe o tipo **bool** ou booleano. É um tipo de dado que permite armazenar dois valores: \`True\` (Verdadeiro) ou \`False\` (Falso).

## Declarar variável bool

Podemos declarar uma variável booleana da seguinte maneira:

\`\`\`python
x = True
y = False
\`\`\`

## Avaliar expressões

Um valor booleano também pode ser o resultado da avaliação de uma expressão. Certos operadores como maior que, menor que ou igual a retornam um valor \`bool\`.

\`\`\`python
print(1 > 0)  # True
print(1 <= 0) # False
print(9 == 9) # True
\`\`\`

## Função bool

Também é possível converter um determinado valor para \`bool\` usando a função \`bool()\`.

Em Python, a maioria dos valores é considerada \`True\`. Os que são considerados \`False\` são geralmente valores que denotam "vazio" ou zero (como \`0\`, \`[]\`, \`""\`, \`None\`).

\`\`\`python
print(bool(10))     # True
print(bool(-10))    # True
print(bool("Olá"))  # True
print(bool(0.1))    # True
print(bool([]))     # False (Lista vazia é Falso)
\`\`\`

## Uso com if

Os condicionais \`if\` avaliam uma condição que é um valor \`bool\`.

\`\`\`python
a = 1
b = 2
if b > a:
    print("b é maior que a")
\`\`\`

A expressão que vem depois do \`if\` é sempre avaliada internamente como um booleano.

\`\`\`python
if True:
    print("É True")
\`\`\`

## Bool como subclasse de int

É importante notar que, embora listemos o tipo \`bool\` como se fosse um tipo distinto, ele é na realidade uma **subclasse** do \`int\` (inteiro).

De fato, você pode verificar isso da seguinte maneira:

\`\`\`python
print(isinstance(True, int))
# True

print(issubclass(bool, int))
# True
\`\`\`

Para matemáticos, isso é interessante pois significa que \`True\` se comporta como 1 e \`False\` como 0 em operações aritméticas:

\`\`\`python
print(True + True) 
# 2
\`\`\`
`;
