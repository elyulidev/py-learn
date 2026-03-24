export const m4Arith = `# Operadores Aritméticos

Os **operadores aritméticos** são os mais comuns na programação e permitem realizar operações matemáticas simples, como soma, subtração ou potência. Abaixo, apresentamos uma tabela com todos eles, considerando **x = 10** e **y = 3**.

| Operador | Nome | Exemplo | Resultado |
| :--- | :--- | :--- | :--- |
| \`+\` | Soma | \`x + y\` | 13 |
| \`-\` | Subtração | \`x - y\` | 7 |
| \`*\` | Multiplicação | \`x * y\` | 30 |
| \`/\` | Divisão | \`x / y\` | 3.333 |
| \`%\` | Módulo (Resto) | \`x % y\` | 1 |
| \`**\` | Exponenciação | \`x ** y\` | 1000 |
| \`//\` | Divisão Inteira | \`x // y\` | 3 |

\`\`\`python
x = 10; y = 3
print("x + y =", x + y)   # 13
print("x / y =", x / y)   # 3.3333333333333335
print("x // y =", x // y) # 3
\`\`\`

---

## Operador \`+\`
Soma os valores à esquerda e à direita. Em Python, este operador também pode ser usado para **concatenar** strings ou unir listas:

\`\`\`python
print(10 + 3)          # 13
print("2" + "2")       # 22 (String concatenation)
print([1, 3] + [6, 7]) # [1, 3, 6, 7]
\`\`\`

## Operador \`-\`
Subtrai o valor da direita do valor da esquerda. Diferente da soma, não pode ser usado com strings ou listas.

\`\`\`python
print(10 - 3) # 7
\`\`\`

## Operador \`*\`
Multiplica os valores. Uma curiosidade em Python é que você pode multiplicar uma string por um inteiro para repeti-la:

\`\`\`python
print(10 * 3)       # 30
print("Olá" * 3)    # OláOláOlá
\`\`\`

## Operador \`/\`
Realiza a divisão. No Python 3, a divisão sempre retorna um número decimal (\`float\`), mesmo que o resultado seja exato:

\`\`\`python
print(10 / 3) # 3.3333333333333335
print(1 / 2)  # 0.5
\`\`\`

## Operador \`%\` (Módulo)
Calcula o **resto** da divisão inteira. Se dividirmos 10 por 3, o quociente é 3 e sobra 1. Esse 1 é o resultado do módulo.

\`\`\`python
print(10 % 3) # 1
print(10 % 2) # 0 (Útil para verificar se um número é par)
\`\`\`

## Operador \`**\` (Potência)
Eleva o número da esquerda à potência do número da direita. Equivale à função \`pow()\` da biblioteca \`math\`.

\`\`\`python
print(10 ** 3) # 1000
import math
print(math.pow(10, 3)) # 1000.0
\`\`\`

## Operador \`//\` (Divisão Inteira)
Calcula apenas o quociente da divisão, descartando a parte decimal. Existe uma relação matemática famosa: \`Dividendo = (divisor * quociente) + resto\`.

\`\`\`python
D = 10 # Dividendo
d = 3  # Divisor
print(d * (D // d) + D % d) # 10 (Verificação da fórmula)
\`\`\`

---

## Ordem de Precedência (Prioridade)

Ao misturar vários operadores, o Python segue uma ordem específica de execução. Na dúvida, use **parênteses** para garantir o resultado desejado.

A ordem de prioridade (do maior para o menor) é:
1.  **\`()\`** Parênteses
2.  **\`**\`** Exponenciação
3.  **\`-x\`** Negação (Sinal negativo)
4.  **\`* / // %\`** Multiplicação, Divisão, Quociente e Módulo
5.  **\`+ -\`** Soma e Subtração

\`\`\`python
print(10 * (5 + 3)) # Primeiro a soma: 10 * 8 = 80
print(10 * 5 + 3)   # Primeiro a multiplicação: 50 + 3 = 53
print(-2 ** 4)       # Primeiro a potência: -(16) = -16
\`\`\`
`;