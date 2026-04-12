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

O slicing é uma das funcionalidades mais poderosas do Python. Permite extrair porções de uma lista usando a sintaxe \`[inicio:fim:passo]\`. O índice **fim nunca é incluído** no resultado.

#### Sintaxe básica \`[inicio:fim]\`

\`\`\`python
l = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

print(l[2:5])  # [2, 3, 4]  → do índice 2 até o 4 (5 não incluído)
print(l[0:3])  # [0, 1, 2]  → os três primeiros elementos
print(l[7:10]) # [7, 8, 9]  → dos índice 7 até o fim
\`\`\`

#### Omitir início ou fim

Quando omitimos o início, Python usa o índice \`0\`. Quando omitimos o fim, vai até o último elemento:

\`\`\`python
l = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

print(l[:4])  # [0, 1, 2, 3]     → do início até o índice 3
print(l[6:])  # [6, 7, 8, 9]     → do índice 6 até o fim
print(l[:])   # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] → a lista inteira
\`\`\`

#### Índices negativos no slicing

Os índices negativos contam a partir do final da lista. \`-1\` é o último elemento, \`-2\` o penúltimo, etc.:

\`\`\`python
l = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

print(l[-3:])   # [7, 8, 9]     → os últimos 3 elementos
print(l[:-2])   # [0, 1, 2, 3, 4, 5, 6, 7] → tudo menos os últimos 2
print(l[-5:-2]) # [5, 6, 7]     → do 5º ao 3º elemento a partir do fim
\`\`\`

#### O parâmetro de passo \`[inicio:fim:passo]\`

O terceiro parâmetro define de quantos em quantos elementos saltamos:

\`\`\`python
l = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

print(l[::2])    # [0, 2, 4, 6, 8]  → de 2 em 2 (elementos pares)
print(l[::3])    # [0, 3, 6, 9]     → de 3 em 3
print(l[1::2])   # [1, 3, 5, 7, 9]  → de 2 em 2 começando do índice 1
print(l[0:8:2])  # [0, 2, 4, 6]     → do índice 0 ao 7, de 2 em 2
\`\`\`

#### Passo negativo — inverter listas

Um passo negativo percorre a lista de trás para frente, o que é muito útil para inverter:

\`\`\`python
l = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

print(l[::-1])   # [9, 8, 7, 6, 5, 4, 3, 2, 1, 0] → lista invertida
print(l[::-2])   # [9, 7, 5, 3, 1]  → invertida de 2 em 2
print(l[7:2:-1]) # [7, 6, 5, 4, 3]  → do índice 7 até o 3, de trás para frente
\`\`\`

> **Dica:** \`l[::-1]\` é a forma pythônica e mais eficiente de inverter uma lista.

#### Copiar uma lista com slicing

\`l[:]\` cria uma **cópia rasa** (shallow copy) da lista, evitando que modificações afetem a original:

\`\`\`python
original = [1, 2, 3, 4, 5]
copia = original[:]

copia.append(99)
print(original) # [1, 2, 3, 4, 5]  → não foi modificada
print(copia)    # [1, 2, 3, 4, 5, 99]
\`\`\`

#### Modificar elementos com slicing (slice assignment)

O slicing também pode ser usado no lado esquerdo de uma atribuição para substituir, inserir ou remover múltiplos elementos de uma vez:

\`\`\`python
l = [1, 2, 3, 4, 5, 6]

# Substituir um trecho
l[1:4] = [20, 30, 40]
print(l)  # [1, 20, 30, 40, 5, 6]

# Inserir elementos sem apagar nenhum (fatia vazia)
l[2:2] = [99, 100]
print(l)  # [1, 20, 99, 100, 30, 40, 5, 6]

# Remover elementos substituindo por uma lista vazia
l[2:4] = []
print(l)  # [1, 20, 30, 40, 5, 6]

# Substituir com um número diferente de elementos
l[0:3] = [0, 0]
print(l)  # [0, 0, 40, 5, 6]  → 3 elementos foram trocados por 2
\`\`\`

#### Resumo visual da sintaxe

| Expressão      | O que faz                                             |
|----------------|-------------------------------------------------------|
| \`l[a:b]\`     | Elementos do índice \`a\` até \`b-1\`               |
| \`l[:b]\`      | Do início até \`b-1\`                                 |
| \`l[a:]\`      | De \`a\` até o final                                  |
| \`l[:]\`       | Cópia completa da lista                               |
| \`l[a:b:s]\`   | Elementos de \`a\` até \`b-1\` com passo \`s\`    |
| \`l[::-1]\`    | Lista inteira invertida                               |
| \`l[-n:]\`     | Últimos \`n\` elementos                               |
| \`l[:-n]\`     | Tudo exceto os últimos \`n\` elementos                |

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