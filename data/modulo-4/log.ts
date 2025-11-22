
export const m4Log = `
# Operadores Lógicos

Os **operadores lógicos** (*logical operators*) nos permitem trabalhar com valores do tipo booleano. Um valor booleano ou \`bool\` é um tipo que só pode tomar valores \`True\` ou \`False\`.

Portanto, estes operadores nos permitem realizar diferentes operações com estes tipos, e seu resultado será outro booleano. Por exemplo, \`True and True\` usa o operador \`and\`, e seu resultado será \`True\`.

A seguir explicaremos mais em detalhe, mas aqui está uma tabela resumo:

| Operador | Nome | Exemplo | Resultado |
| :---: | :--- | :--- | :--- |
| \`and\` | **E** (Conjunção) | \`True and True\` | \`True\` |
| \`or\` | **OU** (Disjunção) | \`True or False\` | \`True\` |
| \`not\` | **NÃO** (Negação) | \`not True\` | \`False\` |

## Operador \`and\`

O operador \`and\` avalia se o valor à esquerda **E** o da direita são \`True\`. No caso de ambos serem verdadeiros, devolve \`True\`. Se apenas um dos dois valores for \`False\`, o resultado será \`False\`.

É realmente um operador muito lógico e intuitivo que usamos inclusive na vida real. Imagine a frase: *"Se fizer sol **E** for fim de semana, irei à praia"*.
Se ambas as condições forem cumpridas (variável \`fazSol=True\` e variável \`fimDeSemana=True\`), irei à praia.

\`\`\`python
ir_a_praia = fazSol and fimDeSemana
\`\`\`

Vejamos a tabela da verdade em Python:

\`\`\`python
print(True and True)   # True
print(True and False)  # False
print(False and True)  # False
print(False and False) # False
\`\`\`

## Operador \`or\`

O operador \`or\` devolve \`True\` quando **pelo menos um** dos elementos é igual a \`True\`. Ou seja, avalia se o valor à esquerda **OU** o da direita são verdadeiros.

\`\`\`python
print(True or True)   # True
print(True or False)  # True
print(False or True)  # True
print(False or False) # False
\`\`\`

### Avaliação em Cadeia

É importante notar que vários operadores podem ser usados conjuntamente. Salvo que existam parênteses que indiquem uma certa prioridade, o Python avalia da esquerda para a direita seguindo a precedência.

No exemplo abaixo, temos dois operadores \`and\`. Para calcular o resultado final, começamos pelo primeiro par:

1.  \`True and True\` resulta em \`True\`.
2.  Guardamos esse \`True\` e avaliamos com o último elemento: \`True and False\`.
3.  O resultado final é \`False\`.

\`\`\`python
print(True and True and False)
#     |-----------|
#           True  and  False
#         |------------------|
#                False
\`\`\`

Também podemos misturar os operadores. No exemplo seguinte:
1.  \`False and True\` é \`False\`.
2.  \`False or True\` é \`True\`.
3.  \`True or False\` é \`True\`.

\`\`\`python
print(False and True or True or False)
#     False and True = False
#               False or True = True
#                       True or False = True
# Resultado Final: True
\`\`\`

## Operador \`not\`

Por último temos o operador \`not\`, que simplesmente inverte o valor: de \`True\` para \`False\` e vice-versa.

Também você pode usar vários \`not\` juntos. Se o número de \`not\` for par, o valor fica igual. Se for ímpar, o valor inverte.

\`\`\`python
print(not True)  # False
print(not False) # True
print(not not not not True) # True (4 vezes, volta ao original)
\`\`\`

Dado que o \`bool\` é uma subclasse de \`int\`, é totalmente válido empregar 1 e 0 para representar \`True\` e \`False\` respectivamente.

\`\`\`python
print(not 0) # True
print(not 1) # False
\`\`\`

## Prioridade e Ordem de Avaliação

A ordem de aplicação dos operadores pode influenciar drasticamente o resultado. De maior a menor prioridade, a ordem é:

1.  **\`not\`** (maior prioridade)
2.  **\`and\`**
3.  **\`or\`** (menor prioridade)

> **Para saber mais:** Você pode ler a documentação oficial do Python sobre precedência de operadores.

Vamos tentar descobrir isso com engenharia reversa em alguns exemplos.

### Exemplo 1: \`and\` vs \`or\`

\`\`\`python
print(False and False or True)
# True
\`\`\`

Haveria duas possibilidades de agrupamento:
1.  \`(False and False) or True\` -> \`False or True\` -> **\`True\`**.
2.  \`False and (False or True)\` -> \`False and True\` -> **\`False\`**.

Como o Python devolve \`True\`, concluímos que o \`and\` tem prioridade sobre o \`or\` e foi executado primeiro.

### Exemplo 2

Como já sabemos que \`and\` é avaliado primeiro, a seguinte expressão seria equivalente a \`True or (False and False)\`.

\`\`\`python
print(True or False and False)
# True
\`\`\`

### Exemplo Complexo com 0 e 1

Podemos simplificar a expressão a seguir. Lembre-se que \`not\` tem a maior prioridade.

\`\`\`python
print(0 and not 1 or 1 and not 0 or 1 and 0)
\`\`\`

**Passo a passo:**

1.  **Aplicar \`not\`**:
    *   \`not 1\` vira \`0\` (False).
    *   \`not 0\` vira \`1\` (True).
    *   Expressão: \`0 and 0 or 1 and 1 or 1 and 0\`

2.  **Aplicar \`and\`**:
    *   \`0 and 0\` -> \`0\`
    *   \`1 and 1\` -> \`1\`
    *   \`1 and 0\` -> \`0\`
    *   Expressão: \`0 or 1 or 0\`

3.  **Aplicar \`or\`**:
    *   \`0 or 1\` -> \`1\`
    *   \`1 or 0\` -> \`1\`

**Resultado final:** \`1\` (ou \`True\`).

> **Short-circuit Evaluation (Avaliação de Curto-Circuito):** O Python é preguiçoso.
> *   Numa expressão \`A and B\`, se A for False, ele nem avalia B, pois já sabe que o resultado será False.
> *   Numa expressão \`A or B\`, se A for True, ele nem avalia B, pois já sabe que o resultado será True.
`;
