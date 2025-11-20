
export const m2Enumerate = `
# Enumerate em Python

O uso do \`for\` em Python nos permite iterar coleções, percorrendo todos os seus elementos.

\`\`\`python
lista = ["A", "B", "C"]

for l in lista:
    print(l)

# Saída:
# A
# B
# C
\`\`\`

No entanto, existem situações em que não queremos apenas acessar o elemento $i$-ésimo da coleção, mas também queremos saber qual é o seu **índice**. Uma forma manual de fazer isso seria a seguinte:

\`\`\`python
lista = ["A", "B", "C"]

indice = 0
for l in lista:
    print(indice, l)
    indice += 1

# Saída:
# 0 A
# 1 B
# 2 C
\`\`\`

Embora seja uma forma perfeitamente válida, não é muito "pythônica", e é exatamente onde entra em jogo o **\`enumerate()\`**. Seu uso nos permite economizar algumas linhas de código, obtendo um resultado muito mais limpo e claro.

\`\`\`python
lista = ["A", "B", "C"]

for indice, l in enumerate(lista):
    print(indice, l)

# Saída:
# 0 A
# 1 B
# 2 C
\`\`\`

## Como funciona?

A função \`enumerate\` retorna, em cada iteração, uma tupla contendo \`(índice, valor)\`. Graças ao *unpacking* do Python, podemos separar esses valores diretamente nas variáveis do loop (\`indice, l\`).

## Convertendo para Lista

Por último, é importante notar que seu uso não se limita apenas a loops \`for\`. Podemos converter o objeto \`enumerate\` diretamente em uma lista de tuplas, onde cada uma contém um índice e o elemento associado da coleção inicial.

\`\`\`python
lista = ["A", "B", "C"]

en = list(enumerate(lista))
print(en)

# Saída:
# [(0, 'A'), (1, 'B'), (2, 'C')]
\`\`\`

## Parâmetro \`start\`

Uma funcionalidade extra útil é que o \`enumerate\` aceita um segundo parâmetro opcional chamado \`start\`, que indica por qual número a contagem deve começar (o padrão é 0).

\`\`\`python
lista = ["A", "B", "C"]

for i, l in enumerate(lista, start=1):
    print(f"Item {i}: {l}")

# Saída:
# Item 1: A
# Item 2: B
# Item 3: C
\`\`\`

Portanto lembre-se: da próxima vez que quiser acessar os índices de uma coleção, verifique se o \`enumerate\` pode resolver seu problema de maneira mais clara e com menos código.
`;