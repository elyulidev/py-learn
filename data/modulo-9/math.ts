
export const m9Math = `
# Módulo Math

O módulo **\`math\`** é um dos módulos mais importantes da biblioteca padrão do Python para matemáticos e cientistas. Ele fornece acesso às funções matemáticas subjacentes definidas pelo padrão C, permitindo realizar cálculos com números reais (ponto flutuante) com alta precisão e eficiência.

Diferente das operações aritméticas básicas que vimos anteriormente (\`+\`, \`-\`, \`*\`, \`/\`, \`**\`), o módulo \`math\` oferece funções transcendentes (trigonometria, logaritmos), constantes fundamentais e ferramentas de teoria dos números.

Para usá-lo, a primeira coisa a fazer é importá-lo:

\`\`\`python
import math
\`\`\`

## Constantes Matemáticas

O módulo \`math\` define várias constantes fundamentais com a maior precisão disponível no sistema (geralmente números de ponto flutuante de 64 bits).

### Pi ($\pi$) e Tau ($\tau$)
A constante mais famosa, a razão entre a circunferência de um círculo e seu diâmetro.

\`\`\`python
print(math.pi)
# 3.141592653589793
\`\`\`

Também está disponível o Tau ($\tau = 2\pi$), que é a razão entre a circunferência e o raio, preferido por muitos matemáticos modernos para simplificar fórmulas trigonométricas.

\`\`\`python
print(math.tau)
# 6.283185307179586
\`\`\`

### Número de Euler ($e$)
A base dos logaritmos naturais.

\`\`\`python
print(math.e)
# 2.718281828459045
\`\`\`

### Infinito e NaN
Podemos representar o infinito positivo, negativo e "Not a Number" (não é um número).

\`\`\`python
infinito = math.inf
menos_infinito = -math.inf
indeterminado = math.nan # Not a Number

print(infinito > 10**100) # True
\`\`\`

---

## Funções Numéricas e Arredondamento

Estas funções são essenciais para manipular números e realizar arredondamentos precisos.

### \`ceil(x)\` (Teto)
Retorna o menor inteiro maior ou igual a $x$.

\`\`\`python
print(math.ceil(3.1))  # 4
print(math.ceil(-3.1)) # -3
\`\`\`

### \`floor(x)\` (Piso)
Retorna o maior inteiro menor ou igual a $x$.

\`\`\`python
print(math.floor(3.9))  # 3
print(math.floor(-3.1)) # -4
\`\`\`

### \`trunc(x)\` (Truncamento)
Elimina a parte decimal, retornando a parte inteira. Difere do \`floor\` para números negativos.

\`\`\`python
print(math.trunc(3.9))  # 3
print(math.trunc(-3.9)) # -3
\`\`\`

### \`fabs(x)\` (Valor Absoluto Float)
Retorna o valor absoluto como um \`float\`. Para inteiros, a função *built-in* \`abs()\` é preferível, mas \`math.fabs()\` deixa claro que estamos trabalhando com reais.

\`\`\`python
print(math.fabs(-10)) # 10.0
\`\`\`

### \`isclose(a, b, rel_tol=..., abs_tol=...)\`
**Fundamental para matemáticos.** Devido à imprecisão do ponto flutuante (IEEE 754), nunca devemos comparar dois floats com \`==\`. A função \`isclose\` verifica se dois valores são "suficientemente próximos".

\`\`\`python
a = 0.1 + 0.1 + 0.1
b = 0.3
print(a == b)           # False (Erro de precisão!)
print(math.isclose(a, b)) # True
\`\`\`

---

## Potências e Logaritmos

### \`exp(x)\`
Calcula $e^x$. É mais preciso que \`math.e ** x\`.

\`\`\`python
print(math.exp(2)) # 7.389056...
\`\`\`

### \`log(x, [base])\`
Com um argumento, retorna o logaritmo natural ($\ln x$ ou $\log_e x$).
Com dois argumentos, retorna o logaritmo na base especificada ($\log_{base} x$).

\`\`\`python
print(math.log(math.e))    # 1.0 (Log natural)
print(math.log(100, 10))   # 2.0 (Log base 10)
print(math.log(32, 2))     # 5.0 (Log base 2)
\`\`\`

Existem também variantes otimizadas para bases comuns: \`math.log2(x)\` e \`math.log10(x)\`.

### \`sqrt(x)\` e \`isqrt(n)\`
\`math.sqrt(x)\` retorna a raiz quadrada como float.
\`math.isqrt(n)\` (Python 3.8+) retorna a raiz quadrada inteira (piso da raiz) de um número inteiro não negativo.

\`\`\`python
print(math.sqrt(2)) # 1.4142...
print(math.isqrt(10)) # 3 (pois 3^2 <= 10 < 4^2)
\`\`\`

---

## Trigonometria

O módulo \`math\` trabalha exclusivamente com **radianos**.

### \`sin(x)\`, \`cos(x)\`, \`tan(x)\`
Funções trigonométricas padrão.

\`\`\`python
# Seno de PI/2 (90 graus) deve ser 1.0
print(math.sin(math.pi / 2)) # 1.0
\`\`\`

### Conversão de Ângulos
Para converter entre graus e radianos.

\`\`\`python
ang_graus = 180
ang_rads = math.radians(ang_graus)
print(ang_rads) # 3.14159... (PI)

print(math.degrees(math.pi)) # 180.0
\`\`\`

### Funções Inversas (Arcos)
\`asin(x)\`, \`acos(x)\`, \`atan(x)\`.

### \`atan2(y, x)\`
**Muito importante:** Calcula o arco tangente de $y/x$, mas leva em conta os sinais de ambos os argumentos para determinar o quadrante correto do resultado (retorna entre $-\pi$ e $\pi$).

\`\`\`python
# Ponto (-1, -1) está no 3º quadrante (-135 graus ou -3pi/4)
print(math.atan(-1 / -1))      # 0.785 (pi/4, 1º quadrante - Errado para o ponto)
print(math.atan2(-1, -1))      # -2.356 (-3pi/4, 3º quadrante - Correto)
\`\`\`

---

## Teoria dos Números e Combinatória

O Python é excelente para teoria dos números e o módulo \`math\` inclui funções otimizadas para isso.

### \`gcd(a, b)\` (Máximo Divisor Comum)
Calcula o *Greatest Common Divisor*.

\`\`\`python
print(math.gcd(48, 18)) # 6
\`\`\`

### \`lcm(a, b)\` (Mínimo Múltiplo Comum)
Calcula o *Least Common Multiple* (Python 3.9+).

\`\`\`python
print(math.lcm(4, 6)) # 12
\`\`\`

### \`comb(n, k)\` e \`perm(n, k)\`
Calculam o número de combinações e permutações sem repetição.

*   **Combinações (Binômio de Newton):** $\binom{n}{k} = \frac{n!}{k!(n-k)!}$
*   **Permutações:** $P(n, k) = \frac{n!}{(n-k)!}$

\`\`\`python
# Quantas formas de escolher 2 cartas de um baralho de 52?
print(math.comb(52, 2)) # 1326

# Quantas formas de organizar o pódio (3 lugares) numa corrida de 10 pessoas?
print(math.perm(10, 3)) # 720
\`\`\`

### \`factorial(x)\`
Retorna $x!$. Lança erro se $x$ não for inteiro ou for negativo.

\`\`\`python
print(math.factorial(5)) # 120
\`\`\`

---

## Funções Especiais

Para matemática avançada e estatística.

### \`gamma(x)\`
A função Gama $\Gamma(x)$, que é uma extensão contínua do fatorial. Para inteiros, $\Gamma(n) = (n-1)!$.

\`\`\`python
print(math.gamma(5)) # 24.0 (4!)
print(math.gamma(0.5)) # 1.772... (raiz de pi)
\`\`\`

### \`erf(x)\` e \`erfc(x)\`
A função de erro (Error Function) de Gauss, fundamental em probabilidade, estatística e equações diferenciais parciais (difusão).

\`\`\`python
# erf(0) é 0, erf(inf) é 1
print(math.erf(1.0)) # 0.8427...
\`\`\`

## Math vs NumPy

É importante notar que o módulo \`math\` foi projetado para trabalhar com **escalares** (números individuais). Se você precisar aplicar a função seno a uma lista de 1 milhão de números, usar um loop com \`math.sin\` será lento.

Para operações vetorizadas (arrays), usamos a biblioteca **NumPy**, que veremos no próximo tópico.

\`\`\`python
import math
# Bom para um número:
x = math.sin(0.5)

# Ruim para listas (requer loop):
lista = [0.1, 0.2, 0.3]
res = [math.sin(i) for i in lista]
\`\`\`
`;
