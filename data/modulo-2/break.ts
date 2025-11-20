
export const m2Break = `
# Comando break

O comando **break** nos permite alterar o comportamento dos loops \`while\` e \`for\`. Concretamente, permite terminar a execução do loop de forma imediata.

Isso significa que uma vez que o comando \`break\` é encontrado, o loop é interrompido e o fluxo do programa continua logo após o loop.

## Break com loops for

Vejamos como podemos usar o \`break\` com loops \`for\`. O \`range(5)\` geraria 5 iterações, onde \`i\` valeria de 0 a 4. No entanto, na primeira iteração, terminamos o loop prematuramente.

O \`break\` faz com que, logo ao começar o loop, ele seja interrompido e saia sem ter feito praticamente nada.

\`\`\`python
for i in range(5):
    print(i)
    break
    print("Não chega aqui")

# Saída: 0
\`\`\`

Um exemplo um pouco mais útil seria buscar uma letra em uma palavra. Itera-se toda a palavra e, no momento em que se encontra a letra que buscávamos, quebra-se o loop e sai.

Isso é muito útil porque, se já encontramos o que estávamos procurando, não faria sentido continuar iterando o restante da lista ou string, pois desperdiçaríamos recursos computacionais.

\`\`\`python
cadeia = 'Python'
for letra in cadeia:
    if letra == 'h':
        print("Encontrou-se o h")
        break
    print(letra)

# Saída:
# P
# y
# t
# Encontrou-se o h
\`\`\`

## Break com loops while

O \`break\` também nos permite alterar o comportamento do \`while\`. Vejamos um exemplo.

A condição \`while True\` faria com que a seção de código fosse executada indefinidamente (loop infinito), mas ao fazer uso do \`break\`, o loop será interrompido quando \`x\` valer zero.

\`\`\`python
x = 5
while True:
    x -= 1
    print(x)
    if x == 0:
        break
    print("Fim da iteração")

# Saída:
# 4
# Fim da iteração
# 3
# Fim da iteração
# 2
# Fim da iteração
# 1
# Fim da iteração
# 0
\`\`\`

Por regra geral, e salvo casos muito concretos, se você vir um \`while True\`, é muito provável que exista um \`break\` dentro do loop para garantir que ele termine em algum momento.

## Break e loops aninhados

Como dissemos, o uso de \`break\` interrompe o loop, mas **apenas aquele em que está inserido**.

Ou seja, se temos dois loops aninhados (um dentro do outro), o \`break\` romperá o loop interno (aninhado), mas não o exterior.

\`\`\`python
for i in range(0, 4):
    for j in range(0, 4):
        break
        # Nunca se realiza mais de uma iteração do loop interno
    
    # O break não afeta este for externo
    print(i, j)

# Saída:
# 0 0
# 1 0
# 2 0
# 3 0
\`\`\`

Como vemos, para cada iteração de \`i\`, entramos no loop de \`j\`, mas o \`break\` faz sair imediatamente dele. No entanto, o loop de \`i\` continua executando normalmente.
`;