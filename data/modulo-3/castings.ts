
export const m3Castings = `
# Cast em Python

Fazer um *cast* ou *casting* significa converter um tipo de dado para outro. Anteriormente vimos tipos como \`int\`, \`string\` ou \`float\`. Pois bem, é possível converter de um tipo para outro.

Mas antes de nada, vejamos os diferentes tipos de cast ou conversão de tipos que se podem fazer. Existem dois:

1.  **Conversão implícita:** É realizada automaticamente pelo Python. Acontece quando realizamos certas operações com dois tipos distintos.
2.  **Conversão explícita:** É realizada expressamente por nós, como por exemplo converter de \`str\` para \`int\` com \`int()\`.

## Conversão implícita
Esta conversão de tipos é realizada automaticamente pelo Python, praticamente sem que nos demos conta. Ainda assim, é importante saber o que acontece por baixo para evitar problemas futuros.

O exemplo mais simples onde podemos ver este comportamento é o seguinte:

\`\`\`python
a = 1   # <class 'int'>
b = 2.3 # <class 'float'>

a = a + b
print(a)       # 3.3
print(type(a)) # <class 'float'>
\`\`\`

*   \`a\` é um int
*   \`b\` é um float

Mas se somamos \`a\` e \`b\` e armazenamos o resultado em \`a\`, podemos ver como internamente o Python converteu o int em float para poder realizar a operação, e a variável resultante é float.

No entanto, há outros casos onde o Python não é tão esperto e não é capaz de realizar a conversão. Se tentamos somar um int a uma string, teremos um erro \`TypeError\`.

\`\`\`python
a = 1
b = "2.3"

# c = a + b
# TypeError: unsupported operand type(s) for +: 'int' and 'str'
\`\`\`

Se você perceber, é lógico que isso seja assim, já que neste caso \`b\` era "2.3", mas e se fosse "Olá"? Como se poderia somar isso? Não faz sentido.

## Conversão explícita
Por outro lado, podemos fazer conversões entre tipos ou *cast* de maneira explícita fazendo uso de diferentes funções que o Python nos proporciona. As mais usadas são as seguintes:

*   \`float()\`, \`str()\`, \`int()\`, \`list()\`, \`set()\`
*   E algumas outras como \`hex()\`, \`oct()\` e \`bin()\`

### Converter float para int
Para converter de float para int devemos usar \`float()\`. Mas muito cuidado, já que o tipo inteiro não pode armazenar decimais, pelo que **perderemos o que houver depois da vírgula**.

\`\`\`python
a = 3.5
a = int(a)
print(a)
# Saída: 3
\`\`\`

### Converter float para string
Podemos converter um float para string com \`str()\`. Podemos ver no seguinte código como muda o tipo de \`a\` depois de fazer o cast.

\`\`\`python
a = 3.5
print(type(a)) # <class 'float'>
a = str(a)
print(type(a)) # <class 'str'>
\`\`\`

### Converter string para float
Podemos converter uma string para float usando \`float()\`. É importante notar que se usa o \`.\` como separador.

\`\`\`python
a = "35.5"
print(float(a))
# Saída: 35.5
\`\`\`

O seguinte código daria um erro, dado que \`,\` não se reconhece por padrão como separador decimal.

\`\`\`python
a = "35,5"
# print(float(a))
# Saída: ValueError: could not convert string to float: '35,5'
\`\`\`

E por último, resulta óbvio pensar que o seguinte código dará um erro também.

\`\`\`python
a = "Python"
# print(float(a))
# Saída: ValueError: could not convert string to float: 'Python'
\`\`\`

### Converter string para int
Ao igual que a conversão para float do caso anterior, podemos converter de string para int usando \`int()\`.

\`\`\`python
a = "3"
print(type(a)) # <class 'str'>
a = int(a)
print(type(a)) # <class 'int'>
\`\`\`

Cuidado já que não é possível converter para int qualquer valor.

\`\`\`python
a = "Python"
# a = int(a)
# ValueError: invalid literal for int() with base 10: 'Python'
\`\`\`

### Converter int para string
A conversão de int para string pode-se realizar com \`str()\`.

A diferença de outras conversões, esta pode-se fazer sempre, já que qualquer valor inteiro que se nos ocorra pôr em \`a\`, poderá ser convertido a string.

\`\`\`python
a = 10
print(type(a)) # <class 'int'>
a = str(a)
print(type(a)) # <class 'str'>
\`\`\`

### Converter para list
É também possível fazer um cast a lista, desde por exemplo um set. Para isso podemos usar \`list()\`.

\`\`\`python
a = {1, 2, 3}
b = list(a)

print(type(a)) # <class 'set'>
print(type(b)) # <class 'list'>
\`\`\`

### Converter para set
E de maneira completamente análoga, podemos converter de lista a set fazendo uso de \`set()\`.

\`\`\`python
a = ["Python", "Mola"]
b = set(a)

print(type(a)) # <class 'list'>
print(type(b)) # <class 'set'>
\`\`\`

Esperamos que isto tenha servido para esclarecer o conceito de casts ou conversões de tipos em Python. É muito importante ter bem claro o tipo de dados com o que estamos trabalhando em cada momento, já que Python é uma linguagem com tipagem dinâmica, algo que pode ser uma grande vantagem, mas também causa de muitas dores de cabeça.

E lembre-se, a função \`type()\` é tua amiga.
`;
