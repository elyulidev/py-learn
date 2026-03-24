export const m3Tuple = `# Tupla (tuple)

As **tuplas** em Python são um tipo ou estrutura de dados que permite armazenar dados de forma muito parecida com as listas, mas com a ressalva de que são **imutáveis**.

## Criar tupla no Python

As tuplas em Python ou *tuples* são muito similares às listas, mas com duas diferenças fundamentais: são imutáveis (não podem ser modificadas após a declaração) e, em vez de colchetes, são inicializadas com parênteses \`()\`. Dependendo do caso de uso, as tuplas podem ser mais rápidas que as listas.

\`\`\`python
tupla = (1, 2, 3)
print(tupla) # (1, 2, 3)
\`\`\`

Também podem ser declaradas sem parênteses, separando os elementos apenas por vírgulas:

\`\`\`python
tupla = 1, 2, 3
print(type(tupla)) # <class 'tuple'>
print(tupla)       # (1, 2, 3)
\`\`\`

---

## Operações com tuplas

Como as tuplas são tipos imutáveis, uma vez atribuído o seu valor, ele não pode ser alterado. Tentar fazer isso resultará em um \`TypeError\`.

\`\`\`python
tupla = (1, 2, 3)
# tupla[0] = 5 # Erro! TypeError
\`\`\`

Assim como as listas, as tuplas também podem ser **aninhadas**:

\`\`\`python
tupla = 1, 2, ('a', 'b'), 3
print(tupla)       # (1, 2, ('a', 'b'), 3)
print(tupla[2][0]) # 'a'
\`\`\`

É possível converter uma lista em tupla usando a função \`tuple()\`:

\`\`\`python
lista = [1, 2, 3]
tupla = tuple(lista)
print(type(tupla)) # <class 'tuple'>
\`\`\`

### Funcionalidades Básicas
-   **Iteração**: Pode percorrer uma tupla com um loop \`for\` da mesma forma que uma lista.
-   **Unpacking**: Pode atribuir os elementos de uma tupla diretamente a variáveis.

\`\`\`python
# Exemplo de Unpacking
t = (1, 2, 3)
x, y, z = t
print(x, y, z) # 1 2 3
\`\`\`

### Tupla de um Único Elemento
Para criar uma tupla com apenas um elemento, você deve incluir uma vírgula antes de fechar o parêntese. Caso contrário, o Python interpretará como um tipo básico (como um \`int\`).

\`\`\`python
tupla_correta = (2,)
print(type(tupla_correta)) # <class 'tuple'>

tupla_errada = (2)
print(type(tupla_errada))  # <class 'int'>
\`\`\`

---

## Métodos de tuplas

Como as tuplas são imutáveis, elas possuem menos métodos que as listas. Os principais são:

### \`count(obj)\`
Conta o número de vezes que o objeto passado aparece na tupla.

\`\`\`python
t = (1, 1, 1, 3, 5)
print(t.count(1)) # 3
\`\`\`

### \`index(obj[, index])\`
Busca o objeto e retorna o índice da sua primeira aparição. Se não for encontrado, lança um \`ValueError\`.

\`\`\`python
t = (7, 8, 9, 3, 5)
print(t.index(5)) # 4

# Busca a partir de um índice específico (ignora o que vem antes)
t = (7, 7, 7, 3, 5)
print(t.index(7, 2)) # 2
\`\`\`
`;