export const m3List = `# Listas

As **listas** em Python são um tipo de dado que permite armazenar dados de qualquer tipo. São **mutáveis** e **dinâmicas**, o que as diferencia principalmente dos sets e das tuplas.

## Criar listas no Python

As listas em Python são uma das estruturas de dados mais versáteis da linguagem, pois permitem armazenar um conjunto arbitrário de dados. Ou seja, podemos guardar nelas praticamente qualquer coisa. Se você vem de outras linguagens de programação, elas são semelhantes aos *arrays*.

\`\`\`python
lista = [1, 2, 3, 4]
\`\`\`

Também podem ser criadas usando a função \`list()\` passando um objeto iterável:

\`\`\`python
lista = list("1234") # ['1', '2', '3', '4']
\`\`\`

Uma lista é definida com colchetes \`[]\`, separando seus elementos com vírgulas. Uma grande vantagem é que podem armazenar tipos de dados distintos simultaneamente:

\`\`\`python
lista = [1, "Olá", 3.67, [1, 2, 3]]
\`\`\`

### Propriedades das listas:
- **Ordenadas**: mantêm a ordem em que foram definidas.
- **Tipos arbitrários**: podem conter qualquer tipo de dado.
- **Indexadas**: elementos acessíveis através de \`[i]\`.
- **Aninhadas**: uma lista pode conter outra lista dentro dela.
- **Mutáveis**: seus elementos podem ser modificados após a criação.
- **Dinâmicas**: podem crescer ou diminuir conforme necessário.

## Aceder e modificar listas

Se tivermos uma lista \`a\` com 3 elementos, podemos aceder a eles usando colchetes e um índice, que vai de **0** a **n-1** (sendo n o tamanho da lista).

\`\`\`python
a = [90, "Python", 3.87]
print(a[0]) # 90
print(a[1]) # Python
print(a[2]) # 3.87
\`\`\`

Também é possível aceder ao último elemento usando o índice \`[-1]\`, ao penúltimo com \`[-2]\`, e assim por diante:

\`\`\`python
print(a[-1]) # 3.87
print(a[-2]) # Python
\`\`\`

Para modificar um elemento, basta atribuir o novo valor usando o operador \`=\`:

\`\`\`python
a[2] = 1
print(a) # [90, 'Python', 1]
\`\`\`

Para remover elementos, podemos usar o comando \`del\`:

\`\`\`python
l = [1, 2, 3, 4, 5]
del l[1]
print(l) # [1, 3, 4, 5]
\`\`\`

### Listas Aninhadas
Para aceder a elementos em listas dentro de listas, usamos múltiplos colchetes:

\`\`\`python
x = [1, 2, 3, ['p', 'q', [5, 6, 7]]]
print(x[3][0])    # 'p'
print(x[3][2][0]) # 5
print(x[3][2][2]) # 7
\`\`\`

### Slicing (Fatiamento)
Podemos criar sublistas usando \`:\` entre os colchetes \`[inicio:fim]\` (o índice de fim não é incluído):

\`\`\`python
l = [1, 2, 3, 4, 5, 6]
print(l[0:2]) # [1, 2]
print(l[2:6]) # [3, 4, 5, 6]

# Modificação múltipla com slicing
l[0:3] = [0, 0, 0]
print(l) # [0, 0, 0, 4, 5, 6]
\`\`\`

## Iterar listas

Em Python, é muito fácil percorrer uma lista:

\`\`\`python
lista = [5, 9, 10]
for l in lista:
    print(l)
# 5, 9, 10
\`\`\`

Se precisar do índice durante a iteração, use o \`enumerate()\`:

\`\`\`python
for index, l in enumerate(lista):
    print(index, l)
# 0 5, 1 9, 2 10
\`\`\`

Para iterar duas listas simultaneamente, use o \`zip()\`:

\`\`\`python
lista1 = [5, 9, 10]
lista2 = ["Jazz", "Rock", "Djent"]
for l1, l2 in zip(lista1, lista2):
    print(l1, l2)
\`\`\`

## Métodos de listas

- **\`append(obj)\`**: Adiciona um elemento ao final da lista.
- **\`extend(iterable)\`**: Adiciona todos os elementos de um iterável ao final.
- **\`insert(index, obj)\`**: Insere um elemento em uma posição específica.
- **\`remove(obj)\`**: Remove a primeira ocorrência do objeto.
- **\`pop(index=-1)\`**: Remove e retorna o elemento na posição (por padrão o último).
- **\`reverse()\`**: Inverte a ordem dos elementos.
- **\`sort()\`**: Ordena os elementos (use \`reverse=True\` para ordem decrescente).
- **\`index(obj)\`**: Retorna o índice da primeira aparição do objeto.

\`\`\`python
l = [3, 1, 2]
l.sort()
print(l) # [1, 2, 3]

l.append(4)
print(l) # [1, 2, 3, 4]
\`\`\`
`;