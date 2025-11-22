
export const m4Bitwise = `
# Operadores bitwise

Os operadores a nível de bit ou **bitwise operators** são operadores que atuam sobre números inteiros mas usando sua representação binária. Se você ainda não sabe como se representa um número em forma binaria, a seguir explicamos.

| Operador | Nome |
| :---: | :--- |
| \`|\` | Or bit a bit |
| \`&\` | And bit a bit |
| \`~\` | Not bit a bit |
| \`^\` | Xor bit a bit |
| \`>>\` | Deslocamento à direita |
| \`<<\` | Deslocamento à esquerda |

Para entender os operadores de bit, é importante antes entender como se representa um número de maneira binária. Todos estamos acostumados ao que se denomina representação decimal. Chama-se assim porque se usam dez números, do 0 ao 9 para representar todos os valores. O nosso decimal é também posicional, já que não é o mesmo um 9 em 19 que em 98. No primeiro caso, o valor é de simplesmente 9, mas no segundo, na realidade esse 9 vale 90.

O mesmo acontece com a representação binária, mas com algumas diferenças. A primeira diferença é que só existem dois possíveis números, o 0 e o 1. A segunda diferença é que, apesar de ser um sistema que também é posicional, os valores não são como no caso decimal, onde o valor se multiplica por 1 na primeira posição, 10 na segunda, 100 na terceira, e assim sucessivamente. No caso binário, os valores são potências de 2, ou seja 1, 2, 4, 8, 16 ou o que é o mesmo $2^0, 2^1, 2^2, 2^3, 2^4$.

\`\`\`python
# Sistema decimal
# 7264
# 7-> Na realidade vale 7*1000 = 7000
#  2-> Na realidade vale 2*100  = 200
#   6-> Na realidade vale 6*10  = 60
#     4 Na realidade vale 4*1  = 4
#                           +---------
#           Somando tudo:       7264
\`\`\`

Então, por exemplo, o número em binário 11011 é na realidade o número 27 em decimal. É possível converter entre binário e decimal e vice-versa. Para números pequenos pode-se fazer mentalmente muito rápido, mas para números maiores, recomendamos fazer uso de alguma função em Python, como a função \`bin()\`.

\`\`\`python
# Sistema binário
# 11011
# 1->  Na realidade vale 1*16   = 16
#  1->  Na realidade vale 1*8    = 8
#    0->  Na realidade vale 1*4  = 0
#     1->  Na realidade vale 1*2 = 2
#      1->  Na realidade vale 1*1 = 1
#                           +---------
#          Somando tudo          27
\`\`\`

Usando a função \`bin()\` podemos converter um número decimal em binário. Podemos comprovar como o número anterior 11011 é efetivamente 27 em decimal. Repare que ao imprimi-lo com Python, adiciona-se o prefixo \`0b\` antes do número. Isto é muito importante, e nos permite identificar que estamos diante de um número binário.

\`\`\`python
print(bin(27))
# 0b11011
\`\`\`

Agora que já sabemos como é a representação binária, estamos já em condições de continuar com os operadores a nível de bit, que realizam operações sobre os bits destes números binários que acabamos de introduzir.

## Operador &

O operador \`&\` realiza a operação que vimos em outros capítulos \`and\`, mas por cada bit existente na representação binária dos dois números que lhe introduzimos. Ou seja, percorre ambos os números na sua representação binária elemento a elemento, e faz uma operação \`and\` com cada um deles. No seguinte exemplo estaria-se fazendo o seguinte. Primeiro elemento de \`a\` com primeiro elemento de \`b\`, seria 1 \`and\` 1 pelo que o resultado é 1. Esse valor armazena-se na saída. Continuamos com o segundo 1 \`and\` 0 que é 0, terceiro 0 \`and\` 1 que é 0 e por último 1 \`and\` 1 que é 1. Portanto o número resultante é \`0b1001\`, o que representa o 9 em decimal.

\`\`\`python
a = 0b1101
b = 0b1011
print(bin(a & b))
# 0b1001
\`\`\`

## Operador |

O operador \`|\` realiza a operação \`or\` elemento a elemento com cada um dos bits dos números que introduzimos. No seguinte exemplo podemos ver como o resultado é 1111 já que sempre um dos dois elementos é 1. Fariam-se as seguintes comparações: 1 or 1, 1 or 0, 0 or 1 e 1 or 1.

\`\`\`python
a = 0b1101
b = 0b1011
print(bin(a | b))
# 0b1111
\`\`\`

## Operador ~

O operador \`~\` realiza a operação \`not\` sobre cada bit do número que lhe introduzimos, ou seja, inverte o valor de cada bit, pondo os 0 a 1 e os 1 a 0. O comportamento em Python pode ser um pouco diferente do esperado. No seguinte exemplo, temos o número 40 que em binário é 101000. Se fazemos \`~101000\` seria de esperar que como dissemos, se invertam todos os bits e o resultado seja 010111, mas na realidade o resultado é 101001. Para entender porque acontece isto, convidamos-te a ler mais informação sobre o complemento a um e o complemento a dois.

\`\`\`python
a = 40
print(bin(a))
print(bin(~a))
# 0b101000
# -0b101001
\`\`\`

> **Para saber mais:** Para entender este operador melhor, é necessário saber o que é o complemento a um e a dois.

Se vemos o resultado com números decimais, é equivalente a fazer \`~a\` seria \`-a-1\` como se pode ver no seguinte exemplo. Neste caso, em vez de mostrar o valor binário mostramos o decimal, e pode-se ver como efetivamente se \`a=40\`, após aplicar o operador \`~\` o resultado é \`-40-1\`.

\`\`\`python
a = 40
print(a)
print(~a)
# 40
# -41
\`\`\`

## Operador ^

O operador \`^\` realiza a função \`xor\` com cada bit das duas variáveis que se lhe proporciona. Anteriormente em outros capítulos falamos do \`and\` ou \`or\`, que são operadores bastante usados e comuns. Talvez \`xor\` seja menos comum, e o que faz é devolver \`True\` ou 1 quando há pelo menos um valor \`True\` mas não os dois. Ou seja, só devolve 1 para as combinações 1,0 e 0,1 e 0 para as demais.

\`\`\`python
x = 0b0110 ^ 0b1010
print(bin(x))
# 0 xor 1 = 1
# 1 xor 0 = 1
# 1 xor 1 = 0
# 0 xor 0 = 0
# 0b1100
\`\`\`

## Operador >>

O operador \`>>\` desloca todos os bits \`n\` unidades à direita. Portanto é necessário proporcionar dois parâmetros, onde o primeiro é o número que se deslocará ou *shift* e o segundo é o número de posições. No seguinte exemplo temos 1000 em binário, pelo que se aplicamos um \`>>2\`, deveremos mover cada bit 2 unidades à direita. O que fica pela esquerda preenche-se com zeros, e o que sai pela direita descarta-se. Portanto \`1000>>2\` será \`0010\`. É importante notar que Python por defeito elimina os zeros à esquerda, já que igual que no sistema decimal, são irrelevantes.

\`\`\`python
a = 0b1000
print(bin(a >> 2))
# 0b10
\`\`\`

## Operador <<

O operador \`<<\` é análogo ao \`>>\` com a diferença que neste caso o deslocamento é realizado à esquerda. Portanto se temos 0001 e deslocamos \`<<3\`, o resultado será 1000.

\`\`\`python
a = 0b0001
print(bin(a << 3))
# 0b1000
\`\`\`

É importante que não nos deixemos enganar pelo número de bits que pomos na entrada. Se por exemplo deslocamos em 4 ou em mais unidades a nossa variável \`a\` o número de bits que se nos mostrará também se incrementará. Com isto queremos destacar que embora a entrada sejam 4 bits, Python internamente preenche tudo o que está à esquerda com zeros.

\`\`\`python
a = 0b0001
print(bin(a << 10))
# 0b10000000000
\`\`\`
`;
