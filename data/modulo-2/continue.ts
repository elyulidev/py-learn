
export const m2Continue = `
# Comando continue

## Introdução ao continue

O uso de **continue**, assim como o já visto \`break\`, nos permite modificar o comportamento dos loops \`while\` e \`for\`.

Concretamente, o \`continue\` salta todo o código restante na iteração atual e volta ao princípio do loop, caso ainda restem iterações a serem completadas.

A diferença fundamental entre o \`break\` e o \`continue\` é que o \`continue\` **não rompe (encerra) o loop**, mas sim passa imediatamente para a próxima iteração, ignorando o código pendente apenas da iteração atual.

No exemplo seguinte, vemos como ao encontrar a letra 'P', o comando \`continue\` é chamado. Isso faz com que o \`print(letra)\` seja pulado nessa iteração específica. É por isso que não vemos a letra 'P' impressa na tela.

\`\`\`python
cadeia = 'Python'
for letra in cadeia:
    if letra == 'P':
        continue
    print(letra)

# Saída:
# y
# t
# h
# o
# n
\`\`\`

Ao contrário do \`break\`, o loop continua vivo. No exemplo abaixo com \`while\`, podemos ver como quando \`x\` vale 3, chama-se o \`continue\`, o que faz com que se pule o resto do código da iteração (o \`print()\`). Por isso, vemos que o número 3 não é impresso na tela, mas o loop continua para 2, 1 e 0.

\`\`\`python
x = 5
while x > 0:
    x -= 1
    if x == 3:
        continue
    print(x)

# Saída: 4, 2, 1, 0
\`\`\`
`;
