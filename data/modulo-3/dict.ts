export const m3Dict = `# Dicionários

Os dicionários em Python são uma estrutura de dados que permite armazenar seu conteúdo em forma de chave e valor (key-value).

## Criar dicionário Python
Um dicionário em Python é uma coleção de elementos, onde cada um possui uma chave (\`key\`) e um valor (\`value\`). Os dicionários podem ser criados com chaves \`{}\` separando com uma vírgula cada par \`key: value\`. No exemplo a seguir, temos três chaves que são o nome, a idade e o documento.

\`\`\`python
d1 = {
  "Nome": "Sara",
  "Idade": 27,
  "Documento": 1003882
}
print(d1)
#{'Nome': 'Sara', 'Idade': 27, 'Documento': 1003882}
\`\`\`

Outra forma equivalente de criar um dicionário em Python é usando \`dict()\` e passando os pares \`key: value\` entre parênteses como uma lista de tuplas.

\`\`\`python
d2 = dict([
      ('Nome', 'Sara'),
      ('Idade', 27),
      ('Documento', 1003882),
])
print(d2)
#{'Nome': 'Sara', 'Idade': 27, 'Documento': 1003882}
\`\`\`

Também é possível usar o construtor \`dict()\` com argumentos nomeados para criar um dicionário.

\`\`\`python
d3 = dict(Nome='Sara',
          Idade=27,
          Documento=1003882)
print(d3)
#{'Nome': 'Sara', 'Idade': 27, 'Documento': 1003882}
\`\`\`

Algumas propriedades dos dicionários em Python são as seguintes:
- São **dinâmicos**: podem crescer ou diminuir, novos elementos podem ser adicionados ou removidos.
- São **indexados**: os elementos do dicionário são acessíveis através da chave (key).
- São **aninhados**: um dicionário pode conter outro dicionário em seu valor.

## Acessar e modificar elementos
É possível acessar seus elementos usando \`[]\` ou também com o método \`get()\`.

\`\`\`python
print(d1['Nome'])     #Sara
print(d1.get('Nome')) #Sara
\`\`\`

Para modificar um elemento basta usar \`[]\` com o nome da chave e atribuir o valor que desejamos.

\`\`\`python
d1['Nome'] = "Laura"
print(d1)
#{'Nome': 'Laura', 'Idade': 27, 'Documento': 1003882}
\`\`\`

Se a chave que acessarmos não existir, ela é adicionada automaticamente.

\`\`\`python
d1['Direcao'] = "Rua 123"
print(d1)
#{'Nome': 'Laura', 'Idade': 27, 'Documento': 1003882, 'Direcao': 'Rua 123'}
\`\`\`

## Iterar sobre um dicionário
Os dicionários podem ser iterados de forma muito semelhante às listas ou outras estruturas de dados. Para imprimir as chaves (\`keys\`):

\`\`\`python
# Imprime as chaves do dicionário
for x in d1:
    print(x)
#Nome
#Idade
#Documento
#Direcao
\`\`\`

É possível imprimir também apenas o valor (\`value\`).

\`\`\`python
# Imprime os valores do dicionário
for x in d1:
    print(d1[x])
#Laura
#27
#1003882
#Rua 123
\`\`\`

Ou, se quisermos imprimir a chave e o valor ao mesmo tempo.

\`\`\`python
# Imprime a chave e o valor do dicionário
for x, y in d1.items():
    print(x, y)
#Nome Laura
#Idade 27
#Documento 1003882
#Direcao Rua 123
\`\`\`

## Dicionários aninhados
Os dicionários em Python podem conter uns aos outros internamente. Podemos ver como os valores aninhados um e dois do dicionário \`d\` contêm por sua vez outro dicionário.

\`\`\`python
anidado1 = {"a": 1, "b": 2}
anidado2 = {"a": 1, "b": 2}
d = {
  "anidado1" : anidado1,
  "anidado2" : anidado2
}
print(d)
#{'anidado1': {'a': 1, 'b': 2}, 'anidado2': {'a': 1, 'b': 2}}
\`\`\`

## Métodos dos dicionários em Python

### \`clear()\`
O método \`clear()\` remove todo o conteúdo do dicionário.

\`\`\`python
d = {'a': 1, 'b': 2}
d.clear()
print(d) #{}
\`\`\`

### \`get(<key>[,<default>])\`
O método \`get()\` nos permite consultar o valor para uma dada chave. O segundo parâmetro é opcional e, caso seja fornecido, é o valor retornado se a chave não for encontrada.

\`\`\`python
d = {'a': 1, 'b': 2}
print(d.get('a')) #1
print(d.get('z', 'Não encontrado')) #Não encontrado
\`\`\`

### \`items()\`
O método \`items()\` retorna os pares de chaves e valores do dicionário. Se for convertido em uma lista, pode indexado como se fosse uma lista normal, onde os primeiros elementos das tuplas são as chaves e os segundos são os valores.

\`\`\`python
d = {'a': 1, 'b': 2}
it = d.items()
print(it)             #dict_items([('a', 1), ('b', 2)])
print(list(it))       #[('a', 1), ('b', 2)]
print(list(it)[0][0]) #a
\`\`\`

### \`keys()\`
O método \`keys()\` retorna uma visão atualizada com todas as chaves do dicionário.

\`\`\`python
d = {'a': 1, 'b': 2}
k = d.keys()
print(k)       #dict_keys(['a', 'b'])
print(list(k)) #['a', 'b']
\`\`\`

### \`values()\`
O método \`values()\` retorna uma visão de todos os valores contidos no dicionário.

\`\`\`python
d = {'a': 1, 'b': 2}
print(list(d.values())) #[1, 2]
\`\`\`

### \`pop(<key>[,<default>])\`
O método \`pop()\` busca e apaga a chave passada como parâmetro e retorna o seu valor correspondente. Daria um erro se você tentasse deletar uma chave que não existe.

\`\`\`python
d = {'a': 1, 'b': 2}
d.pop('a')
print(d) #{'b': 2}
\`\`\`

Também é possível passar um segundo parâmetro que será o valor a retornar caso a chave não seja encontrada. Neste caso, se a chave não for encontrada não haveria erro.

\`\`\`python
d = {'a': 1, 'b': 2}
d.pop('c', -1)
print(d) #{'a': 1, 'b': 2}
\`\`\`

### \`popitem()\`
O método \`popitem()\` elimina o último elemento inserido do dicionário (no Python 3.7+).

\`\`\`python
d = {'a': 1, 'b': 2}
d.popitem()
print(d)
#{'a': 1}
\`\`\`

### \`update(<obj>)\`
O método \`update()\` é chamado sobre um dicionário e recebe outro dicionário como entrada. Os valores das chaves existentes são sobrepostos e, se houver chaves no novo dicionário que não estavam no original, elas são inseridas.

\`\`\`python
d1 = {'a': 1, 'b': 2}
d2 = {'a': 0, 'd': 400}
d1.update(d2)
print(d1)
#{'a': 0, 'b': 2, 'd': 400}
\`\`\`
`;