
export const m1Hello = `
# Olá Mundo em Python

Em qualquer introdução a uma nova linguagem de programação, não pode faltar o famoso **Olá Mundo**. Trata-se do primeiro programa por onde se começa, que consiste em programar uma aplicação que mostra esse texto na tela. Se você executar o código a seguir, terá cumprido o primeiro marco da programação em Python.

\`\`\`python
print("Olá Mundo")
\`\`\`

Portanto, você já pode imaginar que a função \`print()\` serve para imprimir valores na tela. Ela imprimirá tudo o que estiver dentro dos parênteses. Fácil, verdade? Diferente de outras linguagens de programação, em Python isso pode ser feito em apenas 1 linha.

## Definindo variáveis em Python

Vamos complicar um pouco mais as coisas. Vamos criar uma variável que armazene um número. Ao contrário de outras linguagens, não é necessário dizer ao Python o tipo de dado que queremos armazenar em \`x\`.

Em outras linguagens (como C ou Java), é necessário especificar que \`x\` armazenará um valor inteiro, mas não é o caso aqui. Python é muito esperto e, ao ver o número 5, saberá de que tipo o \`x\` deve ser.

\`\`\`python
x = 5
\`\`\`

Agora podemos juntar o \`print()\` que vimos com o \`x\` que definimos, para em vez de imprimir o "Olá Mundo", imprimir o valor de \`x\`.

\`\`\`python
print(x)
# Saída: 5
\`\`\`

No fragmento anterior você deve ter visto o uso de \`#\`. Trata-se da forma que o Python tem de criar os denominados **comentários**. Um comentário é um texto que acompanha o código, mas que não é código propriamente dito (o interpretador o ignora).

Ele é usado para realizar anotações sobre o código que possam ser úteis para outras pessoas (ou para você mesmo no futuro). No nosso caso, simplesmente o usamos para indicar que a saída desse comando será 5.

## Somando variáveis em Python

Vamos somar duas variáveis e imprimir seu valor. Primeiro vamos declará-las, com nomes \`a\` e \`b\`. Declarar uma variável significa "criá-la".

\`\`\`python
# Declaramos as variáveis a, b
# e atribuímos dois valores
a = 3
b = 7
\`\`\`

Agora o Python já conhece \`a\` e \`b\` e seus respectivos valores. Podemos fazer uso do \`+\` para somá-los e, mais uma vez, do \`print()\` para mostrar o resultado na tela.

\`\`\`python
print(a + b)
# Saída: 10
\`\`\`

É importante usarmos apenas variáveis que tenham sido definidas anteriormente, caso contrário teremos um erro. Se fizermos:

\`\`\`python
print(z)
# NameError: name 'z' is not defined
\`\`\`

Teremos um erro (\`NameError\`) porque o Python não sabe o que é \`z\`, já que não foi declarada anteriormente.

## Exemplo condicional

Podemos começar a complicar um pouco mais as coisas com o uso de uma sentença condicional. Explicaremos isso mais a fundo no post sobre \`if\`.

O código a seguir faz uso do \`if\` para verificar se o \`a\` é igual (\`==\`) a 10. Se for, imprimirá "É 10", caso contrário (\`else\`), imprimirá "Não é 10". É importante o uso de \`==\`, que é o operador relacional de comparação.

\`\`\`python
a = 10
if a == 10:
    print("É 10")
else:
    print("Não é 10")
\`\`\`

## Decimais e Strings

Da mesma forma que vimos que uma variável pode armazenar um valor inteiro como 10, é possível também armazenar outros tipos, como decimais ou até mesmo cadeias de texto.

Se quisermos armazenar um valor decimal (**float**), basta indicá-lo usando a separação com ponto \`.\`.

\`\`\`python
valor_decimal = 10.3234
\`\`\`

E se quisermos armazenar uma cadeia (**string**), é necessário indicar seu conteúdo entre aspas simples \`'\` ou duplas \`"\`.

\`\`\`python
minha_string = "Olá Mundo"
\`\`\`

Esperamos que esta introdução tenha sido útil. Com ela, você já está pronto(a) para continuar para o próximo tutorial, onde veremos mais sobre a sintaxe do Python.
`;
