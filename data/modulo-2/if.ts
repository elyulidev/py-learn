
export const m2If = `
# Condicional if

Se não fosse pelas estruturas de controle, o código em qualquer linguagem de programação seria executado sequencialmente do início ao fim. Um código não deixa de ser um conjunto de instruções que são executadas uma após a outra. Graças às estruturas de controle, podemos mudar o fluxo de execução de um programa, fazendo com que certos blocos de código sejam executados se, e somente se, condições particulares forem atendidas.

## Uso do if

Um exemplo prático seria dividir dois valores $a$ e $b$. Antes de entrar no bloco de código que divide $a/b$, seria importante verificar se $b$ é diferente de zero, já que a divisão por zero não está definida. É aqui que entram os condicionais \`if\`.

\`\`\`python
a = 4
b = 2
if b != 0:
    print(a/b)
\`\`\`

Neste exemplo podemos ver como se usa um \`if\` em Python. Com o operador \`!=\` comprova-se que o número \`b\` seja diferente de zero e, se for, executa-se o código que está **indentado**. Portanto, um \`if\` tem duas partes:

1.  A **condição** que deve ser cumprida para que o bloco seja executado (no nosso caso \`b != 0\`).
2.  O **bloco de código** que será executado se a condição anterior for verdadeira.

É muito importante ter em conta que a sentença \`if\` deve terminar com dois pontos \`:\` e o bloco de código a executar deve estar indentado (geralmente 4 espaços). Se você usa um editor de código, a indentação provavelmente será automática ao pressionar Enter.

Note que o bloco de código pode conter mais de uma linha:

\`\`\`python
if b != 0:
    c = a/b
    d = c + 1
    print(d)
\`\`\`

Tudo o que vier depois do \`if\` e estiver indentado fará parte do bloco de código que será executado se a condição for cumprida. Portanto, o \`print("Fora if")\` abaixo será executado sempre, pois está fora do bloco \`if\`.

\`\`\`python
if b != 0:
    c = a/b
    print("Dentro if")
print("Fora if")
\`\`\`

Também se podem combinar várias condições. Por exemplo, podemos requerer que um número seja maior que 5 **e** menor que 15. Temos, na realidade, três operadores usados conjuntamente, que serão avaliados separadamente até devolver o resultado final, que será \`True\` se a condição for cumprida ou \`False\` caso contrário.

\`\`\`python
a = 10
if a > 5 and a < 15:
    print("Maior que 5 e menor que 15")
\`\`\`

### O comando \`pass\`

É muito importante ter em conta que, diferentemente de outras linguagens, em Python **não pode haver um bloco if vazio**. O código a seguir geraria um \`SyntaxError\`.

\`\`\`python
# if a > 5:
# Erro de sintaxe (esperava um bloco indentado)
\`\`\`

Portanto, se temos um \`if\` sem conteúdo (talvez porque seja uma tarefa pendente para implementar no futuro), é necessário fazer uso de \`pass\` para evitar o erro. Realmente o \`pass\` não faz nada, serve apenas para satisfazer o interpretador.

\`\`\`python
if a > 5:
    pass
\`\`\`

Também é possível (embora nem sempre recomendável por legibilidade) colocar todo o bloco na mesma linha se for curto:

\`\`\`python
if a > 5: print("É > 5")
\`\`\`

## Uso de else e elif

É possível que não queiramos apenas fazer algo se uma condição for cumprida, mas também fazer algo caso contrário. É aqui que entra a cláusula \`else\`. Note que ambos os blocos de código são excludentes: entra-se em um ou no outro, nunca nos dois.

\`\`\`python
x = 5
if x == 5:
    print("É 5")
else:
    print("Não é 5")
\`\`\`

Muitas vezes, podemos ter várias condições diferentes e para cada uma queremos um código distinto. É aqui que entra o \`elif\` (abreviação de *else if*).

\`\`\`python
x = 5
if x == 5:
    print("É 5")
elif x == 6:
    print("É 6")
elif x == 7:
    print("É 7")
\`\`\`

Traduzido para linguagem natural, seria: "Se é igual a 5 faça isto, senão se é igual a 6 faça aquilo, senão se é igual a 7 faça aquilo outro".

Pode-se usar tudo em conjunto: \`if\`, \`elif\` e \`else\`. Importante notar que \`if\` e \`else\` só podem aparecer uma vez no bloco, enquanto \`elif\` pode aparecer várias vezes.

\`\`\`python
x = 5
if x == 5:
    print("É 5")
elif x == 6:
    print("É 6")
elif x == 7:
    print("É 7")
else:
    print("É outro número")
\`\`\`

> **Nota:** Python não possui a estrutura \`switch\` clássica de linguagens como C ou Java (embora o Python 3.10 tenha introduzido o \`match\`, que veremos em outra aula). O uso de \`if/elif/else\` é a maneira padrão de lidar com múltiplos casos.

## Operador Ternário

O operador ternário é uma ferramenta potente que permite definir uma estrutura \`if-else\` em uma única linha. Em Python, a sintaxe é um pouco diferente de C (\`condition ? true : false\`), mas o conceito é o mesmo.

\`\`\`python
x = 5
print("É 5" if x == 5 else "Não é 5")
# Saída: É 5
\`\`\`

A estrutura é:
\`[código se cumpre] if [condição] else [código se não cumpre]\`

É muito útil para atribuições condicionais de variáveis. No exemplo abaixo, tentamos dividir \`a\` por \`b\`. Se \`b\` for diferente de zero, realiza-se a divisão; caso contrário, armazena-se -1 (indicando erro).

\`\`\`python
a = 10
b = 5
c = a/b if b != 0 else -1
print(c)
# Saída: 2.0
\`\`\`

## Exemplos Práticos

### Par ou Ímpar
Verifica se um número é par ou ímpar usando o operador módulo (\`%\`).

\`\`\`python
x = 6
if x % 2 == 0:
    print("É par")
else:
    print("É ímpar")
\`\`\`

### Decremento Condicional
Decrementa \`x\` em 1 unidade apenas se for maior que zero.

\`\`\`python
x = 5
x -= 1 if x > 0 else x
print(x)
\`\`\`
`;
