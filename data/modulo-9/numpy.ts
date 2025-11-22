
export const m9Numpy = `
# NumPy: Computação Científica e Arrays

O **NumPy** (Numerical Python) é a biblioteca fundamental para a computação científica em Python. Enquanto as listas nativas do Python são versáteis, elas não são otimizadas para cálculos matemáticos pesados. O NumPy introduz o objeto **ndarray** (N-dimensional array), que é eficiente em memória e extremamente rápido.

Para um matemático, o NumPy é a ferramenta que traduz a álgebra linear teórica para a prática computacional.

## Instalação e Importação

O NumPy é uma biblioteca de terceiros, o que significa que não vem instalada por padrão no Python (ao contrário de \`math\` ou \`random\`). Para usá-lo, você deve instalá-lo via terminal:

\`\`\`bash
pip install numpy
\`\`\`

Uma vez instalado, a convenção universal de importação é:

\`\`\`python
import numpy as np
\`\`\`

## Por que NumPy e não Listas?

Listas em Python são vetores de ponteiros para objetos. Para somar duas listas, o Python deve iterar sobre cada elemento, resolver o tipo do objeto (dynamic typing) e então somar.

O NumPy armazena dados de forma contígua na memória com tipos estáticos (como C ou Fortran). Isso permite:
1.  **Vetorização:** Processamento em lote sem loops explícitos no Python.
2.  **Localidade de Referência:** A CPU pode buscar dados na cache de forma eficiente.
3.  **Integração:** É a base para Pandas, Scikit-Learn, TensorFlow e PyTorch.

## Criando Arrays (Vetores e Matrizes)

Podemos criar arrays a partir de listas Python:

\`\`\`python
# Vetor (1D)
v = np.array([1, 2, 3])

# Matriz (2D)
M = np.array([[1, 2, 3], 
              [4, 5, 6]])

print(f"Shape de v: {v.shape}") # (3,)
print(f"Shape de M: {M.shape}") # (2, 3) -> 2 linhas, 3 colunas
print(f"Dimensão (Rank): {M.ndim}") # 2
print(f"Tipo de dado: {M.dtype}")   # int64 (ou int32)
\`\`\`

### Funções de Inicialização Matemáticas

Matemáticos raramente digitam matrizes manualmente. Usamos geradores:

\`\`\`python
# Intervalos: arange(inicio, fim, passo) - Similar ao range(), mas aceita floats
x = np.arange(0, 10, 0.5) 

# Discretização de Domínio: linspace(inicio, fim, numero_pontos)
# Essencial para plotar funções. Ex: 100 pontos entre 0 e 2π
dom = np.linspace(0, 2*np.pi, 100)

# Matriz Nula e Matriz de Uns
zeros = np.zeros((3, 3))
uns = np.ones((2, 4))

# Matriz Identidade (I)
I = np.eye(4) # Matriz identidade 4x4
\`\`\`

## Operações Vetorizadas (Element-wise)

Esta é a característica mais importante. As operações aritméticas padrão (\`+\`, \`-\`, \`*\`, \`/\`, \`**\`) são aplicadas **elemento a elemento**.

Sejam $A$ e $B$ matrizes:

\`\`\`python
A = np.array([1, 2, 3, 4])
B = np.array([10, 20, 30, 40])

# Soma vetorial
print(A + B) # [11, 22, 33, 44]

# Produto de Hadamard (Elemento a elemento, NÃO é produto matricial)
print(A * B) # [10, 40, 90, 160]

# Aplicação de funções (ufuncs)
print(np.sin(A))      # Aplica seno a cada elemento
print(np.exp(A))      # Exponencial e^x
print(np.log(A))      # Logaritmo natural
\`\`\`

## Álgebra Linear

Para operações de álgebra linear propriamente ditas (produto interno, multiplicação de matrizes), usamos operadores específicos.

### Produto Interno (Dot Product) e Matricial

Sejam $A$ uma matriz $2 \\times 3$ e $B$ uma matriz $3 \\times 2$.

\`\`\`python
A = np.array([[1, 2, 3], [4, 5, 6]])
B = np.array([[7, 8], [9, 1], [2, 3]])

# Multiplicação Matricial (Padrão moderno: operador @)
C = A @ B 
# Resultado é 2x2. 
# C[0,0] = 1*7 + 2*9 + 3*2 = 7 + 18 + 6 = 31

print(C)
# [[31, 19],
#  [85, 55]]

# Forma antiga/alternativa:
# C = np.dot(A, B)
\`\`\`

### Transposta, Determinante e Inversa

O submódulo **\`np.linalg\`** contém decomposições e funções avançadas.

\`\`\`python
M = np.array([[1, 2], [3, 4]])

# Transposta
print(M.T) 
# [[1, 3],
#  [2, 4]]

# Determinante
det = np.linalg.det(M) 
print(det) # -2.0000... (1*4 - 2*3)

# Inversa (M^-1)
inv = np.linalg.inv(M)
print(M @ inv) # Deve resultar na Identidade (com erro de ponto flutuante)

# Autovalores e Autovetores (Eigenvalues/Eigenvectors)
vals, vecs = np.linalg.eig(M)
print(f"Autovalores: {vals}")
\`\`\`

## Indexação, Slicing e Máscaras

O acesso aos dados no NumPy é muito rico.

\`\`\`python
M = np.array([[10, 20, 30], 
              [40, 50, 60], 
              [70, 80, 90]])

# Acesso [linha, coluna]
print(M[1, 2]) # 60 (Linha índice 1, Coluna índice 2)

# Slicing: Pegar as duas primeiras linhas e as duas primeiras colunas
sub_M = M[0:2, 0:2]
# [[10, 20],
#  [40, 50]]

# Pegar toda a coluna 1
col = M[:, 1] # [20, 50, 80]
\`\`\`

### Indexação Booleana (Máscaras)

Podemos filtrar dados baseados em condições lógicas. Isso é fundamental para análise de dados e processamento de sinais.

\`\`\`python
arr = np.array([1, 10, 3, 25, 0, 100])

# Cria uma máscara de True/False
mascara = arr > 10
print(mascara) # [False, False, False, True, False, True]

# Filtra o array usando a máscara
filtrado = arr[mascara] # Ou diretamente arr[arr > 10]
print(filtrado) # [25, 100]
\`\`\`

## Broadcasting (Difusão)

Broadcasting é um conjunto de regras que permite ao NumPy operar arrays de formas diferentes. O exemplo mais simples é somar um escalar a um vetor. Matematicamente $v + 5$ não faz sentido (vetor + escalar), mas computacionalmente é entendido como somar 5 a cada componente.

\`\`\`python
A = np.array([[1, 2, 3], [4, 5, 6]])
# Somamos 10 a todos os elementos
print(A + 10) 

# Somamos um vetor linha a todas as linhas da matriz
v = np.array([10, 20, 30])
print(A + v)
# [[11, 22, 33],  (1+10, 2+20, 3+30)
#  [14, 25, 36]]  (4+10, 5+20, 6+30)
\`\`\`

## Eixos (Axis) e Agregações

Ao realizar somas ou médias em matrizes, muitas vezes queremos reduzir uma dimensão específica (somar colunas ou somar linhas).

*   **\`axis=0\`**: Opera ao longo do primeiro eixo (vertical/linhas). "Colapsa" as linhas, resultando em uma média por coluna.
*   **\`axis=1\`**: Opera ao longo do segundo eixo (horizontal/colunas). "Colapsa" as colunas, resultando em uma média por linha.

\`\`\`python
M = np.array([[1, 2, 3], 
              [4, 5, 6]])

print(np.sum(M))         # 21 (Soma tudo)
print(np.sum(M, axis=0)) # [5, 7, 9] (Soma das colunas)
print(np.sum(M, axis=1)) # [6, 15] (Soma das linhas)

print(np.mean(M))        # 3.5 (Média global)
print(np.std(M))         # Desvio padrão
\`\`\`

## Resumo para Matemáticos

| Conceito Matemático | NumPy |
| :--- | :--- |
| Vetor $\\mathbf{v} \\in \\mathbb{R}^n$ | \`v = np.array([...])\` (Shape \`(n,)\`) |
| Matriz $A \\in \\mathbb{R}^{m \\times n}$ | \`A = np.array([[...], ...])\` (Shape \`(m, n)\`) |
| Soma $A + B$ | \`A + B\` |
| Produto Elemento a Elemento $A \\circ B$ | \`A * B\` |
| Produto Matricial $AB$ | \`A @ B\` |
| Transposta $A^T$ | \`A.T\` |
| Inversa $A^{-1}$ | \`np.linalg.inv(A)\` |
| Produto Interno $\\langle u, v \\rangle$ | \`u @ v\` ou \`np.inner(u, v)\` |
| Identidade $I$ | \`np.eye(n)\` |

O NumPy é a base. No próximo módulo, veremos como o **Matplotlib** usa esses arrays para gerar gráficos.
`;
