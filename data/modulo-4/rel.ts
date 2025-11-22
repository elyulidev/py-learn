
export const m4Rel = `
# Operadores Relacionais

Os **operadores relacionais**, ou também chamados de *comparison operators* (operadores de comparação), nos permitem saber a relação existente entre duas variáveis. São usados para saber, por exemplo, se um número é maior ou menor que outro.

Dado que estes operadores indicam se uma operação é cumprida ou não, o valor que devolvem é sempre um Booleano: \`True\` ou \`False\`.

Vejamos uma tabela de resumo, assumindo $x=2$ e $y=3$:

| Operador | Nome | Exemplo | Resultado |
| :---: | :--- | :--- | :--- |
| \`==\` | Igual | \`x == y\` | \`False\` |
| \`!=\` | Diferente | \`x != y\` | \`True\` |
| \`>\` | Maior | \`x > y\` | \`False\` |
| \`<\` | Menor | \`x < y\` | \`True\` |
| \`>=\` | Maior ou igual | \`x >= y\` | \`False\` |
| \`<=\` | Menor ou igual | \`x <= y\` | \`True\` |

Vamos ver isso em código:

\`\`\`python
x = 2
y = 3
print("Operadores Relacionais")
print("x==y =", x==y) # False
print("x!=y =", x!=y) # True
print("x>y  =", x>y)  # False
print("x<y  =", x<y)  # True
print("x>=y =", x>=y) # False
print("x<=y =", x<=y) # True
\`\`\`

## Operador \`==\` (Igual)

O operador \`==\` permite comparar se as variáveis introduzidas à sua esquerda e direita são iguais. **Muito importante:** não confundir com \`=\`, que é o operador de atribuição.

\`\`\`python
print(4 == 4)          # True
print(4 == 5)          # False
print(4 == 4.0)        # True (int e float de mesmo valor são iguais)
print(0 == False)      # True (False comporta-se como 0)
print("asd" == "asd")  # True
print("asd" == "asdf") # False
print(2 == "2")        # False (Tipos diferentes)
print([1, 2, 3] == [1, 2, 3]) # True (Conteúdo igual)
\`\`\`

## Operador \`!=\` (Diferente)

O operador \`!=\` devolve \`True\` se os elementos a comparar são diferentes e \`False\` se estes forem iguais. É o inverso exato do \`==\`.

\`\`\`python
print(4 != 4)          # False
print(4 != 5)          # True
print(4 != 4.0)        # False
print(0 != False)      # False
print("asd" != "asd")  # False
print("asd" != "asdf") # True
print(2 != "2")        # True
\`\`\`

## Operador \`>\` (Maior que)

O operador \`>\` devolve \`True\` se o primeiro valor é estritamente maior que o segundo e \`False\` caso contrário.

\`\`\`python
print(5 > 3) # True
print(5 > 5) # False
\`\`\`

Algo bastante curioso é como o Python trata o tipo booleano. Por exemplo, podemos ver como \`True\` é avaliado como 1 em contextos numéricos, por isso podemos comparar o tipo \`True\` como se fosse um número.

\`\`\`python
print(True == 1)    # True
print(True > 0.999) # True
\`\`\`

> **Para saber mais:** O tipo \`bool\` em Python herda da classe \`int\`. Isso foi definido na PEP 285.

Também se podem comparar listas. A comparação é feita lexicograficamente (elemento a elemento).

\`\`\`python
# O 1 é igual, mas 2 não é maior que 10, então é False
print([1, 2] > [1, 10]) # False
\`\`\`

## Operador \`<\` (Menor que)

O operador \`<\` devolve \`True\` se o primeiro elemento é estritamente menor que o segundo.

É totalmente válido aplicar operadores relacionais como \`<\` sobre cadeias de texto (Strings), mas o comportamento baseia-se na ordem ASCII/Unicode. Por exemplo, "abc" é menor que "abd" e "A" é menor que "a".

\`\`\`python
print("abc" < "abd") # True (c vem antes de d)
print("A" < "a")     # True
\`\`\`

Para o caso de "A" e "a" a explicação é simples: Python compara o valor inteiro Unicode que representa tal caractere. A função \`ord()\` nos dá esse valor.

\`\`\`python
print(ord('A')) # 65
print(ord('a')) # 97
# 65 < 97 é True
\`\`\`

## Operador \`>=\` (Maior ou igual)

Similar aos anteriores, \`>=\` permite comparar se o primeiro elemento é maior **ou** igual ao segundo.

\`\`\`python
print(3 >= 3)           # True
print([3, 4] >= [3, 5]) # False
\`\`\`

## Operador \`<=\` (Menor ou igual)

Da mesma maneira, \`<=\` devolve \`True\` se o primeiro elemento é menor ou igual ao segundo.

Podemos nos deparar com casos interessantes devido à precisão numérica do ponto flutuante (\`float\`). No exemplo abaixo, o número decimal tem tantos 9s que o computador o arredonda para 3.0, tornando a expressão verdadeira.

\`\`\`python
print(3 <= 2.99999999999999999) # True (Arredondamento IEEE 754)
\`\`\`
`;
