export const m3Set = `# Set (Conjuntos)

Os **sets** (conjuntos) em Python são uma estrutura de dados usada para armazenar elementos de forma similar às listas, mas com características únicas que os tornam muito poderosos para certas tarefas.

## Criar set no Python

Os conjuntos permitem armazenar vários elementos, mas diferem das listas em pontos essenciais:
1.  **Elementos Únicos**: Um set não pode conter elementos duplicados.
2.  **Desordenados**: Os elementos não mantêm a ordem em que foram declarados.
3.  **Elementos Imutáveis**: Os elementos inseridos em um set precisam ser de tipos imutáveis (como \`int\`, \`str\`, \`tuple\`).

Para criar um set, podemos usar a função \`set()\` passando um objeto iterável (como uma lista) ou usar chaves \`{}\`.

\`\`\`python
# Criando a partir de uma lista com duplicados
s = set([5, 4, 6, 8, 8, 1])
print(s)       # {1, 4, 5, 6, 8} (Duplicado removido e ordem ignorada)
print(type(s)) # <class 'set'>

# Criando diretamente com chaves
s = {5, 4, 6, 8, 8, 1}
print(s)       # {1, 4, 5, 6, 8}
\`\`\`

---

## Operações com sets

Diferente das listas, nos conjuntos **não podemos aceder ou modificar um elemento através do seu índice**. Tentar fazer isso resultará em um \`TypeError\`.

\`\`\`python
s = {5, 6, 7, 8}
# s[0] = 3 # Erro! TypeError
\`\`\`

Os elementos de um set devem ser imutáveis. Portanto, você **não pode colocar uma lista ou um dicionário dentro de um set**.

\`\`\`python
lista = ["Angola", "Brasil"]
# s = set(["Portugal", "Cabo Verde", lista]) # Erro! TypeError
\`\`\`

### Funcionalidades Básicas
-   **Iteração**: Pode percorrer um set com um loop \`for\` da mesma forma que uma lista.
-   **Tamanho**: Use \`len()\` para saber quantos elementos únicos existem.
-   **Pertencimento**: Use o operador \`in\` para verificar se um valor existe no conjunto.

\`\`\`python
s = {"Guitarra", "Baixo"}
print("Guitarra" in s) # True
\`\`\`

### Teoria dos Conjuntos
Os sets brilham ao realizar operações matemáticas de conjuntos. Por exemplo, o operador \`|\` realiza a **União** (juntar dois conjuntos).

\`\`\`python
s1 = {1, 2, 3}
s2 = {3, 4, 5}
print(s1 | s2) # {1, 2, 3, 4, 5}
\`\`\`

---

## Métodos de sets

-   **\`add(elem)\`**: Adiciona um elemento ao conjunto.
-   **\`remove(elem)\`**: Remove o elemento. Lança erro (\`KeyError\`) se o elemento não existir.
-   **\`discard(elem)\`**: Remove o elemento, mas **não faz nada** se ele não for encontrado.
-   **\`pop()\`**: Remove e retorna um elemento **aleatório** (já que não há ordem).
-   **\`clear()\`**: Esvazia o conjunto completamente.

\`\`\`python
s = {1, 2}
s.add(3)
s.discard(4) # Não gera erro
print(s) # {1, 2, 3}
\`\`\`

---

## Operações Avançadas

Além dos operadores, os sets possuem métodos para comparar múltiplos conjuntos:

### União (\`union\`)
Junta todos os elementos de dois ou mais conjuntos.
\`\`\`python
s1 = {1, 2, 3}
s2 = {3, 4, 5}
print(s1.union(s2)) # {1, 2, 3, 4, 5}
\`\`\`

### Interseção (\`intersection\`)
Retorna apenas os elementos que estão presentes em **ambos** os conjuntos.
\`\`\`python
s1 = {1, 2, 3}
s2 = {3, 4, 5}
print(s1.intersection(s2)) # {3}
\`\`\`

### Outros métodos úteis:
-   \`difference()\`: Elementos que estão no primeiro set, mas não no segundo.
-   \`symmetric_difference()\`: Elementos que estão em um dos sets, mas não em ambos.
-   \`issubset()\`: Verifica se um set está contido em outro.
-   \`issuperset()\`: Verifica se um set contém outro.
-   \`isdisjoint()\`: Verifica se dois sets não possuem elementos em comum.
`;