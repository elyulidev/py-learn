
export const m2Enumerate = `
# Enumerate em Python

O uso do \`for\` em Python nos permite iterar sobre coleções, percorrendo todos os seus elementos.

\`\`\`python
lista = ["A", "B", "C"]

for l in lista:
    print(l)

# Saída:
# A
# B
# C
\`\`\`

No entanto, existem situações em que não queremos apenas acessar o elemento da coleção, mas também queremos o seu índice (a posição). Uma forma manual de fazer isso seria a seguinte:

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

Embora seja uma forma perfeitamente válida, não é muito "pythônica", e é exatamente onde entra em jogo o \`enumerate()\`. Seu uso nos permite economizar linhas de código, obtendo um resultado muito mais limpo e claro.

\`\`\`python
lista = ["A", "B", "C"]

for indice, l in enumerate(lista):
    print(indice, l)

# Saída:
# 0 A
# 1 B
# 2 C
\`\`\`

Por último, é importante notar que seu uso não se limita apenas a loops \`for\`. Podemos converter o objeto \`enumerate\` em uma lista de tuplas, onde cada tupla contém o índice e o elemento associado da coleção inicial.

\`\`\`python
lista = ["A", "B", "C"]

en = list(enumerate(lista))
print(en)

# Saída:
# [(0, 'A'), (1, 'B'), (2, 'C')]
\`\`\`

Portanto lembre-se: da próxima vez que quiser acessar os índices de uma coleção, verifique se o \`enumerate\` pode resolver seu problema de maneira mais clara e com menos código.
`;
