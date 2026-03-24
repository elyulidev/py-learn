export const m3Mutability = `# Identidade, Tipo e Valor

Python é uma linguagem de programação orientada a objetos e, como tal, trata todos os tipos de dados como objetos. Até um simples número inteiro é um objeto.

\`\`\`python
# x é um objeto
x = 5

# Uma função também é um objeto
def y():
    pass
\`\`\`

Cada objeto no Python é definido por três características fundamentais: **identidade**, **tipo** e **valor**.

1.  **Identidade**: Nunca muda e identifica o objeto de forma única. O operador \`is\` permite saber se dois objetos são, na verdade, o mesmo (se as variáveis apontam para o mesmo local na memória). A função \`id()\` nos mostra esse identificador.
2.  **Tipo**: Indica a classe à qual o objeto pertence (como \`int\`, \`float\` ou \`list\`). A função \`type()\` revela essa informação.
3.  **Valor**: São os dados contidos no objeto. Se esses dados puderem ser alterados, o tipo é **mutável**; caso contrário, é **imutável**.

\`\`\`python
x = 10
print("Identidade:", id(x))
print("Tipo:", type(x))
print("Valor:", x)

# Saída exemplo:
# Identidade: 4474035136
# Tipo: <class 'int'>
# Valor: 10
\`\`\`

## Mutabilidade

Os objetos em Python podem ser classificados de acordo com sua capacidade de serem alterados após a criação:

-   **Mutáveis**: Permitem modificações no seu conteúdo original sem mudar sua identidade.
-   **Imutáveis**: Não permitem modificações. Qualquer "alteração" resulta na criação de um novo objeto com uma nova identidade.

### Tipos Mutáveis:
- Listas (\`list\`)
- Dicionários (\`dict\`)
- Conjuntos (\`set\`)
- \`bytearray\`, \`memoryview\`
- Classes definidas pelo usuário

### Tipos Imutáveis:
- Boleanos (\`bool\`)
- Inteiros (\`int\`), Floats (\`float\`), Complexos (\`complex\`)
- Strings (\`str\`)
- Tuplas (\`tuple\`)
- \`frozenset\`, \`bytes\`, \`range\`

---

## Por que isso é importante?

O Python trata tipos mutáveis e imutáveis de forma diferente, e não entender isso pode levar a comportamentos inesperados.

### Exemplo: Listas vs. Tuplas
Uma **lista** é mutável, então podemos alterar um elemento diretamente. Repare que o \`id()\` permanece o mesmo:

\`\`\`python
l = [1, 2, 3]
print(id(l)) # 4383854144
l[0] = 0
print(id(l)) # 4383854144 (Mesma identidade)
\`\`\`

Já uma **tupla** é imutável. Tentar alterar um elemento resultará em erro:

\`\`\`python
t = (1, 2, 3)
# t[0] = 0 # Erro! TypeError
\`\`\`

Se você "alterar" uma variável imutável (como um inteiro ou string), o Python na verdade cria um objeto novo:

\`\`\`python
x = 5
print(id(x)) # 4525173536
x = x + 1
print(id(x)) # 4525173568 (Mudou! É um novo objeto)
\`\`\`

---

## Diferenças Principais

1.  **Velocidade**: Tipos imutáveis geralmente são mais rápidos para acessar e processar. Se não for modificar uma lista, use uma tupla.
2.  **Eficiência de Memória**: Tipos mutáveis são ótimos para mudar conteúdo repetidamente.
3.  **Custo de Alteração**: Alterar um tipo imutável é "caro" porque exige criar uma cópia completa com a modificação.

### Exceções Visuais
Às vezes parece que mudamos um tipo imutável. Imagine uma tupla que contém uma lista:

\`\`\`python
l = [4, 5, 6]
t = (1, 2, 3, l)
print(t) # (1, 2, 3, [4, 5, 6])

l[0] = 0
print(t) # (1, 2, 3, [0, 5, 6])
\`\`\`
Aqui, a tupla ainda aponta para o mesmo objeto lista (identidade mantida), mas como a lista interna é mutável, o valor "dentro" da tupla parece ter mudado.

---

## Mutabilidade e Funções (Valor vs. Referência)

Este conceito é vital ao passar argumentos para funções:

-   **Tipos Imutáveis**: São passados por "valor" (na prática, o Python passa a referência, mas como não pode mudar, ele se comporta como se fosse uma cópia).
-   **Tipos Mutáveis**: São passados por referência. Alterações dentro da função afetam a variável original.

\`\`\`python
def modificar(a, b):
    a = 10    # Local, não afeta o 'x' original
    b[0] = 10 # Afeta a lista 'y' original

x = 5
y = [5]
modificar(x, y)

print(x) # 5
print(y) # [10]
\`\`\`

---

## Exercício: "Modificar" uma Tupla
Como não podemos mudar uma tupla diretamente, usamos **Slicing** para criar uma nova:

\`\`\`python
T = (1, 2, 3, 4, 5)
# Queremos mudar o índice 2 (valor 3) para 0
T = T[:2] + (0,) + T[3:]
print(T) # (1, 2, 0, 4, 5)
\`\`\`
`;