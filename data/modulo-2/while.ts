
export const m2While = `
# Loop while

Anteriormente vimos o uso do \`if\` e do \`for\` para modificar o fluxo de execução do código. A seguir veremos outra forma de repetição: o **while**.

## Uso básico do while

O uso do \`while\` nos permite executar uma seção de código repetidas vezes, daí seu nome ("enquanto"). O código será executado **enquanto uma condição determinada for verdadeira**. Quando deixar de ser, o programa sai do loop e continua a execução normal.

Vale destacar que existem dois tipos de loops conceituais: 
1.  **Iterações definidas:** Sabemos quantas vezes vai rodar (ex: \`for\`).
2.  **Iterações indefinidas:** Não sabemos quando vai parar, depende de uma condição lógica (ex: \`while\`).

\`\`\`python
x = 5
while x > 0:
    x -= 1
    print(x)

# Saída: 4, 3, 2, 1, 0
\`\`\`

No exemplo anterior, temos uma condição \`x > 0\` e um bloco de código.
1.  Avalia-se se \`x > 0\`.
2.  Se \`True\`, executa o corpo (\`x -= 1\` e \`print\`).
3.  Volta ao passo 1.
4.  Se \`False\`, encerra.

### Cuidado com Loops Infinitos

Um mau uso do \`while\` pode dar lugar a loops infinitos, travando seu programa. Se colocamos \`True\` na condição, o bloco será executado para sempre (ou até que o processo seja morto ou encontre um \`break\`).

\`\`\`python
# Cuidado!
# while True:
#    print("Bucle infinito")
\`\`\`

### While em uma linha

É possível ter um \`while\` em uma única linha se o bloco for curto. Separam-se as sentenças com \`;\`.

\`\`\`python
x = 5
while x > 0: x -= 1; print(x)
\`\`\`

### While com Listas

Podemos usar uma lista como condição. Em Python, uma lista vazia \`[]\` é avaliada como \`False\`, e uma com elementos como \`True\`.

\`\`\`python
x = ["Um", "Dois", "Três"]
while x:
    x.pop(0) # Remove o primeiro elemento
    print(x)

# ['Dois', 'Três']
# ['Três']
# []
\`\`\`

## Else e While

Algo peculiar do Python é o uso da cláusula \`else\` no final do \`while\`. O código dentro do \`else\` será executado **quando o loop terminar "naturalmente"** (quando a condição se tornar falsa).

Se o loop for interrompido por um \`break\`, o \`else\` **não** é executado.

\`\`\`python
x = 5
while x > 0:
    x -= 1
    print(x) # 4, 3, 2, 1, 0
else:
    print("O loop finalizou normalmente")
\`\`\`

Vejamos o caso com interrupção forçada:

\`\`\`python
x = 5
while True:
    x -= 1
    print(x)
    if x == 0:
        break
else:
    # O print NÃO é executado pois saímos com break
    print("Fim do loop")
\`\`\`

## Loops Aninhados

Podemos colocar um loop dentro de outro. Isso é útil, por exemplo, para gerar permutações ou trabalhar com matrizes.

Para gerar todas as combinações de dois números (i, j) de 0 até 2:

\`\`\`python
i = 0
j = 0
while i < 3:
    while j < 3:
        print(i, j)
        j += 1
    i += 1
    j = 0 # Importante resetar o contador interno
\`\`\`

Podemos complicar e ter três níveis (i, j, k):

\`\`\`python
i, j, k = 0, 0, 0
while i < 3:
    while j < 3:
        while k < 3:
            print(i, j, k)
            k += 1
        j += 1
        k = 0
    i += 1
    j = 0
\`\`\`

## Exemplos Práticos

### Árvore de Natal
Imprimindo uma árvore usando aritmética de strings (multiplicar string repete o texto).

\`\`\`python
z = 7
x = 1
while z > 0:
    print(' ' * z + '*' * x + ' ' * z)
    x += 2
    z -= 1
    
# Saída visual:
#        *     
#       ***    
#      *****   
#     *******  
#    *********
#   ***********
#  *************
\`\`\`

### Sequência de Fibonacci
A famosa sequência matemática onde o próximo número é a soma dos dois anteriores.

\`\`\`python
a, b = 0, 1
while b < 25:
    print(b)
    a, b = b, a + b

# 1, 1, 2, 3, 5, 8, 13, 21
\`\`\`
`;
