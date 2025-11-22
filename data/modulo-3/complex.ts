
export const m3Complex = `
# Números Complexos

Em poucas palavras, os números complexos são aqueles que possuem duas partes:

1.  Uma **parte real**, como por exemplo 3 ou 7.5.
2.  E uma **parte imaginária**, como 5j ou -7j.

Como você pode ver, a parte imaginária vem acompanhada de \`j\`, embora na notação matemática padrão seja comum usar o $i$ (de imaginário). Um número complexo tem a seguinte forma:

$$ z = a + b j $$

Vejamos alguns exemplos em Python:

\`\`\`python
a = 5 + 5j
b = 1.3 - 7j
\`\`\`

Também podemos ter um número complexo com parte real igual a zero (imaginário puro).

\`\`\`python
c = 10.3j
\`\`\`

## Contexto Matemático

Vamos colocar isso em contexto com os conjuntos numéricos que você já conhece:

*   **Números inteiros ($\mathbb{Z}$):** Números sem parte decimal: 3, -1, 10.
*   **Números racionais ($\mathbb{Q}$):** O quociente de dois inteiros: 3/10, 7/9.
*   **Números irracionais ($\mathbb{I}$):** Aqueles que não podem ser expressos como fração (ex: $\pi$).
*   **Números reais ($\mathbb{R}$):** O conjunto de todos os anteriores.
*   **Números imaginários:** Números reais acompanhados da constante imaginária, como $4i$ ou $3.7i$.
*   **Números complexos ($\mathbb{C}$):** A soma de um número real e um imaginário.

> **Nota Histórica:** Talvez você se pergunte: o que é $i$ (ou $j$ em Python)? Trata-se simplesmente da raiz quadrada de -1 ($i = \sqrt{-1}$). Como sabemos, nos reais não existem raízes quadradas de números negativos. Esta notação deve-se a Leonhard Euler.

## Para que servem?

Os números complexos são fundamentais em telecomunicações e eletrônica para descrever ondas eletromagnéticas e corrente elétrica (fásores). Também são onipresentes na Mecânica Quântica e processamento de sinais.

Geometricamente, um número complexo pode ser representado no **Plano Complexo (ou Plano de Argand-Gauss)**, onde o eixo X representa a parte real e o eixo Y a imaginária. Todo número complexo tem também um **módulo**, que é a distância euclidiana do ponto à origem (0,0).

## Números complexos em Python

Os números complexos em Python são "cidadãos de primeira classe" e podem ser criados sem importar nenhuma biblioteca.

\`\`\`python
c = 3 + 5j
print(c)       # (3+5j)
print(type(c)) # <class 'complex'>
\`\`\`

Podemos ver que a classe se chama \`complex\`. Uma vez criado o objeto, é possível acessar a parte real e imaginária através dos atributos \`.real\` e \`.imag\`. Note que o Python armazena ambas as partes como \`float\`.

\`\`\`python
c = 3 + 5j
print(c.real) # 3.0
print(c.imag) # 5.0
\`\`\`

Também se pode criar um número complexo fazendo uso do construtor \`complex(real, imag)\`, sem usar a notação \`j\`.

\`\`\`python
c = complex(3, 5)
print(c) # (3+5j)
\`\`\`

## Operações com números complexos

O Python suporta nativamente as operações aritméticas básicas para este tipo de dado.

### Soma e Subtração
Somam-se (ou subtraem-se) as partes reais entre si e as imaginárias entre si.

\`\`\`python
a = 1 + 3j
b = 4 + 1j
print(a + b) # (5+4j)
print(a - b) # (-3+2j)
\`\`\`

### Multiplicação
Se multiplicamos $(a+bj)$ por $(c+dj)$, o resultado segue a propriedade distributiva: $(ac - bd) + (ad + bc)j$. O Python cuida dessa álgebra para nós.

\`\`\`python
a = 1 + 3j
b = 4 + 1j
print(a * b) # (1+13j)
\`\`\`

### Divisão
A divisão também é suportada nativamente.

\`\`\`python
a = 1 + 3j
b = 4 + 1j
print(a / b) # (0.4117647058823529+0.6470588235294118j)
\`\`\`

### Conjugado
O conjugado de um número complexo $z = a + bj$ é $\overline{z} = a - bj$. Em Python, usamos o método \`.conjugate()\`. Calcular o conjugado consiste em negar o sinal da parte imaginária.

\`\`\`python
a = 1 + 1j
print(a.conjugate()) # (1-1j)
\`\`\`

## Biblioteca cmath

Se você precisar realizar operações mais avançadas (como funções trigonométricas em domínio complexo, logaritmos, exponenciais, etc.), deve usar a biblioteca **cmath** (Complex Math), análoga à biblioteca \`math\` mas para números complexos.

Algumas das coisas que você pode fazer:
*   **Fase:** Calcular o argumento (ângulo $\theta$) que o vetor forma com o eixo real, em radianos.
*   **Polar:** Converter de coordenadas retangulares para polares $(r, \theta)$.

\`\`\`python
import cmath

# Fase de um número real positivo é 0
print(cmath.phase(complex(5, 0))) # 0.0

# Representação polar (módulo e ângulo em radianos)
# Para o vetor (5, 5), esperamos ângulo de 45 graus (pi/4 = 0.785...)
print(cmath.polar(complex(5, 5))) 
# (7.0710678118654755, 0.7853981633974483)
\`\`\`
`;
