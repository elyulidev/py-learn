export const m3Frozenset = `# Frozenset

Os **frozensets** em Python são uma estrutura de dados muito semelhante aos \`set\`, com a ressalva de que são **imutáveis**, ou seja, não podem ser modificados uma vez declarados.

## Criar frozenset no Python

Os frozensets em Python funcionam de maneira idêntica aos sets, mas estão "congelados" e não permitem alterações após a inicialização.

\`\`\`python
fs = frozenset([1, 2, 3])
print(fs)       # frozenset({1, 2, 3})
print(type(fs)) # <class 'frozenset'>
\`\`\`

## Exemplos de frozenset

Dado que são imutáveis, qualquer tentativa de modificação usando métodos como \`add()\` ou \`clear()\` resultará em um erro, pois os frozensets não possuem esses métodos.

\`\`\`python
fs = frozenset([1, 2, 3])
# fs.add(4)  # Erro! AttributeError
# fs.clear() # Erro! AttributeError
\`\`\`

### Casos de uso: Set de Sets
Os frozensets podem ser úteis quando precisamos de um conjunto imutável. Por exemplo, se quisermos criar um **set de sets** (um conjunto cujos elementos são outros conjuntos). O código a seguir geraria um \`TypeError\` porque os elementos de um set devem ser imutáveis por definição.

\`\`\`python
s1 = {1, 2}
s2 = {3, 4}
# s3 = {s1, s2} # Erro! TypeError: unhashable type: 'set'
\`\`\`

Para resolver esse problema, podemos criar um set de frozensets. Isso é permitido porque o frozenset é um tipo imutável:

\`\`\`python
s1 = frozenset([1, 2])
s2 = frozenset([3, 4])
s3 = {s1, s2}
print(s3) # {frozenset({3, 4}), frozenset({1, 2})}
\`\`\`

### Casos de uso: Chaves de Dicionários
O mesmo princípio se aplica aos dicionários. Como a chave de um dicionário deve ser um tipo imutável, não podemos usar um \`set\` comum como chave:

\`\`\`python
s1 = set([1, 2])
s2 = set([3, 4])
# d = {s1: "Texto1", s2: "Texto2"} # Erro! TypeError: unhashable type: 'set'
\`\`\`

No entanto, podemos criar um dicionário onde as chaves são frozensets sem problemas:

\`\`\`python
s1 = frozenset([1, 2])
s2 = frozenset([3, 4])
d = {s1: "Texto1", s2: "Texto2"}
print(d) # {frozenset({1, 2}): 'Texto1', frozenset({3, 4}): 'Texto2'}
\`\`\`
`;