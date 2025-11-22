
export const m3Collections = `
# Módulo Collections

Embora o Python nos forneça tipos de contêineres nativos muito poderosos como listas, tuplas e dicionários, a biblioteca padrão inclui um módulo chamado **collections** que oferece estruturas de dados especializadas.

Para matemáticos e cientistas, essas estruturas são essenciais pois muitas vezes oferecem melhor desempenho ou uma sintaxe mais limpa para problemas comuns, como contagem de frequência, manipulação de grafos ou operações com vetores.

Vamos ver as quatro ferramentas mais importantes deste módulo: \`Counter\`, \`defaultdict\`, \`namedtuple\` e \`deque\`.

## 1. Counter (Contador)

O \`Counter\` é uma subclasse de dicionário projetada especificamente para contar objetos "hashable". É uma ferramenta incrivelmente útil para **estatística**, cálculo de probabilidades ou análise de texto.

Imagine que você tem uma lista de resultados de um experimento e quer saber a frequência de cada um.

**Sem Collections:**
\`\`\`python
resultados = [1, 2, 1, 3, 4, 1, 3]
frequencia = {}
for r in resultados:
    if r in frequencia:
        frequencia[r] += 1
    else:
        frequencia[r] = 1
# {'1': 3, '2': 1, '3': 2, '4': 1}
\`\`\`

**Com Counter:**
\`\`\`python
from collections import Counter

resultados = [1, 2, 1, 3, 4, 1, 3]
c = Counter(resultados)

print(c)
# Counter({1: 3, 3: 2, 2: 1, 4: 1})
\`\`\`

### Métodos Úteis do Counter

Como o \`Counter\` herda de dicionário, você pode acessar \`c[1]\` para ver quantas vezes o número 1 apareceu. Além disso, ele possui métodos extras:

**most_common(n):** Retorna os *n* elementos mais comuns.
\`\`\`python
print(c.most_common(2)) 
# [(1, 3), (3, 2)] -> O 1 apareceu 3 vezes, o 3 apareceu 2 vezes
\`\`\`

**Operações Matemáticas:**
Você pode somar, subtrair, fazer interseção e união de contadores, o que é muito útil para "multiconjuntos".

\`\`\`python
c1 = Counter(a=3, b=1)
c2 = Counter(a=1, b=2)

print(c1 + c2) # Counter({'a': 4, 'b': 3})
print(c1 - c2) # Counter({'a': 2}) -> Mantém apenas contagens positivas
\`\`\`

---

## 2. defaultdict

O \`defaultdict\` resolve um problema muito comum: o \`KeyError\` ao tentar acessar uma chave que não existe em um dicionário.

Ao criar um \`defaultdict\`, passamos uma "função fábrica" (factory function) que define o valor padrão caso a chave não exista.

**Exemplo: Lista de Adjacência (Grafos)**
Suponha que queremos representar um grafo onde as chaves são os nós de origem e os valores são listas de nós de destino.

**Sem defaultdict:**
\`\`\`python
arestas = [('A', 'B'), ('A', 'C'), ('B', 'D')]
grafo = {}

for origem, destino in arestas:
    if origem not in grafo:
        grafo[origem] = []
    grafo[origem].append(destino)
\`\`\`

**Com defaultdict:**
Passamos \`list\` como fábrica. Se a chave não existir, ele cria uma lista vazia automaticamente.

\`\`\`python
from collections import defaultdict

arestas = [('A', 'B'), ('A', 'C'), ('B', 'D')]
grafo = defaultdict(list)

for origem, destino in arestas:
    grafo[origem].append(destino)

print(grafo)
# defaultdict(<class 'list'>, {'A': ['B', 'C'], 'B': ['D']})
\`\`\`

Podemos usar também com \`int\` para contadores simples (similar ao Counter, mas mais manual):

\`\`\`python
d = defaultdict(int) # Valor padrão é 0
d['chave_nova'] += 1 
print(d['chave_nova']) # 1
\`\`\`

---

## 3. namedtuple (Tupla Nomeada)

As tuplas normais são acessadas por índice (\`t[0]\`, \`t[1]\`). Isso pode ser confuso se a tupla representar, por exemplo, um ponto no espaço ou um registro de dados, pois temos que lembrar o que cada posição significa.

A \`namedtuple\` permite criar tuplas onde os elementos podem ser acessados tanto por índice quanto por **nome**, como se fossem objetos de uma classe, mas mantendo a imutabilidade e a leveza das tuplas.

\`\`\`python
from collections import namedtuple

# Definimos a estrutura (Nome da "Classe", [Campos])
Ponto = namedtuple('Ponto', ['x', 'y', 'z'])

# Criamos uma instância
p = Ponto(10, 20, 30)

# Acesso por nome (Muito mais legível para matemática)
print(p.x)      # 10
print(p.y)      # 20

# Acesso por índice (ainda funciona)
print(p[0])     # 10

# Imutável
# p.x = 5       # Erro! AttributeError
\`\`\`

É uma excelente alternativa para definir classes simples que servem apenas para armazenar dados, sem a necessidade de escrever \`class Ponto: ... def __init__ ...\`.

---

## 4. deque (Fila de Duas Pontas)

O nome vem de *Double Ended Queue*. As listas em Python são ótimas, mas inserir ou remover elementos no **início** da lista (\`list.insert(0, item)\` ou \`list.pop(0)\`) é custoso computacionalmente ($O(n)$), pois todos os outros elementos precisam ser deslocados na memória.

O \`deque\` é otimizado para inserções e remoções rápidas ($O(1)$) em **ambas as extremidades**.

\`\`\`python
from collections import deque

# Iniciar um deque
d = deque(['a', 'b', 'c'])

# Adicionar na direita (padrão)
d.append('d')

# Adicionar na esquerda (muito rápido)
d.appendleft('z')

print(d)
# deque(['z', 'a', 'b', 'c', 'd'])

# Remover das extremidades
ultimo = d.pop()      # 'd'
primeiro = d.popleft() # 'z'
\`\`\`

### Rotação
Para matemáticos trabalhando com **aritmética modular** ou algoritmos de **janela deslizante**, o método \`rotate\` é muito útil.

\`\`\`python
d = deque([1, 2, 3, 4, 5])
d.rotate(1)  # Rotaciona 1 passo para a direita
print(d)     # deque([5, 1, 2, 3, 4])

d.rotate(-1) # Rotaciona 1 passo para a esquerda
print(d)     # deque([1, 2, 3, 4, 5])
\`\`\`

## Resumo das Estruturas

A tabela a seguir resume as principais características e aplicações (Nota: para visualizar a tabela corretamente em alguns dispositivos, pode ser necessário rolar horizontalmente):

| Estrutura | Tipo Base | Principal Vantagem | Aplicação em Matemática/Ciência |
| :--- | :--- | :--- | :--- |
| **\`Counter\`** | \`dict\` | Contagem automática de elementos | Histogramas, distribuições de probabilidade, multiconjuntos |
| **\`defaultdict\`** | \`dict\` | Gerencia valores padrão automaticamente | Listas de adjacência (grafos), agrupamento de dados |
| **\`namedtuple\`** | \`tuple\` | Acesso a campos por nome (legibilidade) | Vetores, coordenadas espaciais, registros de dados imutáveis |
| **\`deque\`** | \`list\` | Inserção/Remoção $O(1)$ nas pontas | Filas (Queues), algoritmos BFS, janelas deslizantes |

`;
