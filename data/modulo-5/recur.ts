
export const m5Recur = `
# Recursividade

> *"No que você trabalha? Estou tentando consertar os problemas que criei quando tentava consertar os problemas que criei quando tentava consertar os problemas que criei... E assim nasceu a recursividade."*

A recursividade ou recursão é um conceito que provém da matemática e que, aplicado ao mundo da programação, nos permite resolver problemas ou tarefas onde as mesmas podem ser divididas em subtarefas cuja funcionalidade é a mesma.

Dado que os subproblemas a resolver são da mesma natureza, pode-se usar a mesma função para resolvê-los. Dito de outra maneira, uma função recursiva é aquela que está definida em função de si mesma, pelo que **chama a si mesma repetidamente** até chegar a um ponto de saída.

Qualquer função recursiva tem duas seções de código claramente divididas:

1.  **Caso Base:** Tem que existir sempre uma condição na qual a função retorna um valor sem voltar a chamar a si mesma. É muito importante porque, caso contrário, a função chamar-se-ia de maneira indefinida (loop infinito).
2.  **Caso Recursivo:** A seção em que a função se chama a si mesma, geralmente com um argumento modificado para se aproximar do caso base.

Vejamos alguns exemplos clássicos com o fatorial e a série de Fibonacci.

## Calcular Fatorial

Um dos exemplos mais usados para entender a recursividade é o cálculo do fatorial de um número $n!$. O fatorial de um número $n$ define-se como a multiplicação de todos os seus números antecessores até chegar a um. Portanto $5!$, lido como cinco fatorial, seria $5 \\times 4 \\times 3 \\times 2 \\times 1$.

Utilizando uma abordagem tradicional **não recursiva** (iterativa), poderíamos calcular o fatorial da seguinte maneira:

\`\`\`python
def factorial_normal(n):
    r = 1
    i = 2
    while i <= n:
        r *= i
        i += 1
    return r

print(factorial_normal(5)) # 120
\`\`\`

Dado que o fatorial é uma tarefa que pode ser dividida em subtarefas do mesmo tipo (multiplicações), podemos dar-lhe uma abordagem recursiva.
Matematicamente: $n! = n \\times (n-1)!$

\`\`\`python
def factorial_recursivo(n):
    if n == 1:
        return 1
    else:
        return n * factorial_recursivo(n-1)

print(factorial_recursivo(5)) # 120
\`\`\`

O que realmente fazemos com o código anterior é chamar a função \`factorial_recursivo()\` múltiplas vezes. Ou seja, $5!$ é igual a $5 \\times 4!$ e $4!$ é igual a $4 \\times 3!$ e assim sucessivamente até chegar a 1.

### RecursionError e Stack Overflow

Algo muito importante a ter em conta é que se realizarmos demasiadas chamadas à função, poderíamos chegar a ter um erro do tipo \`RecursionError\`.

Isso deve-se ao fato de que todas as chamadas vão se empilhando na memória (Call Stack) criando um contexto de execução. Se a pilha encher, ocorre o famoso **stack overflow**. É por isso que o Python lança esse erro, para proteger o sistema de chegar a esse ponto crítico.

## Série de Fibonacci

Outro exemplo muito usado para ilustrar as possibilidades da recursividade é calcular a série de Fibonacci. Dita série calcula o elemento $n$ somando os dois anteriores: $n = (n-1) + (n-2)$.

Assume-se que os dois primeiros elementos (casos base) são 0 e 1.

\`\`\`python
def fibonacci_recursivo(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fibonacci_recursivo(n-1) + fibonacci_recursivo(n-2)

# A sequência seria: 0, 1, 1, 2, 3, 5, 8, 13...
# O elemento no índice 7 é o 13.
print(fibonacci_recursivo(7))
# Saída: 13
\`\`\`

Podemos ver que sempre que o $n$ seja diferente de zero ou um, chamar-se-á recursivamente a função, buscando os dois elementos anteriores. Quando o $n$ valer zero ou um, deixar-se-á de chamar a função e devolver-se-á um valor concreto.
`;
