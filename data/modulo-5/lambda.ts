
export const m5Lambda = `
# Funções Lambda

As funções lambda ou anônimas são um tipo de função em Python que tipicamente se definem em uma linha e cujo código a executar costuma ser pequeno e conciso. Resulta um pouco complicado explicar as diferenças teóricas de imediato, mas para que você tenha uma ideia, deixamos a seguinte citação tirada da documentação oficial:

> “Python lambdas are only a shorthand notation if you’re too lazy to define a function.”

O que significa algo como: *"as funções lambda são simplesmente uma notação abreviada, que você pode usar se tiver preguiça de escrever uma função formal"*.

O que seria uma função tradicional que soma dois números, como a seguinte:

\`\`\`python
def soma(a, b):
    return a + b
\`\`\`

Poderia ser expressa em forma de uma função lambda da seguinte maneira:

\`\`\`python
lambda a, b: a + b
\`\`\`

A primeira diferença é que uma função lambda não tem um nome (daí "anônima") e, portanto, salvo que seja atribuída a uma variável, é totalmente inútil ou de uso único. Para reutilizá-la, devemos atribuí-la a uma variável:

\`\`\`python
soma = lambda a, b: a + b
\`\`\`

Uma vez que temos a função armazenada na variável \`soma\`, é possível chamá-la como se fosse uma função normal.

\`\`\`python
print(soma(2, 4))
# Saída: 6
\`\`\`

Se é uma função que só queremos usar uma vez (por exemplo, dentro de um \`map\` ou \`filter\`), talvez não faça sentido armazená-la em uma variável. É possível declarar a função e chamá-la na mesma linha (IIFE).

\`\`\`python
print((lambda a, b: a + b)(2, 4))
# Saída: 6
\`\`\`

## Exemplos Práticos

Uma função lambda pode ser passada como argumento de entrada para uma função normal. Isso é extremamente comum em programação funcional ou ao definir chaves de ordenação.

\`\`\`python
def minha_funcao(lambda_func):
    return lambda_func(2, 4)

resultado = minha_funcao(lambda a, b: a + b)
print(resultado)
# Saída: 6
\`\`\`

E uma função normal também pode ser a entrada de uma função lambda. Note que estes são exemplos didáticos para entender a sintaxe; na prática, lambdas são usadas para lógica simples.

\`\`\`python
def mi_otra_funcion(a, b):
    return a + b

print((lambda a, b: mi_otra_funcion(a, b))(2, 4))
# Saída: 6
\`\`\`

Apesar de as funções lambda terem muitas limitações frente às funções normais (elas contêm apenas uma expressão, não um bloco de código), elas compartilham grande quantidade de funcionalidades das funções padrão.

É possível ter **argumentos com valor padrão** (default):

\`\`\`python
print((lambda a, b, c=3: a + b + c)(1, 2)) 
# Saída: 6 (1 + 2 + 3)
\`\`\`

Também se podem passar os parâmetros indicando seu nome (**Keyword arguments**):

\`\`\`python
print((lambda a, b, c: a + b + c)(a=1, b=2, c=3)) 
# Saída: 6
\`\`\`

Assim como nas funções normais, pode-se ter um número variável de argumentos posicional fazendo uso de \`*\`, o conhecido como **tuple unpacking** (*args):

\`\`\`python
print((lambda *args: sum(args))(1, 2, 3)) 
# Saída: 6
\`\`\`

E se temos os parâmetros de entrada armazenados em forma de chave e valor como se fosse um dicionário, também é possível chamar a função usando \`**kwargs\`:

\`\`\`python
print((lambda **kwargs: sum(kwargs.values()))(a=1, b=2, c=3)) 
# Saída: 6
\`\`\`

Por último, é possível devolver mais de um valor. Na realidade, o que se devolve é uma **tupla** contendo os valores.

\`\`\`python
x = lambda a, b: (b, a)
print(x(3, 9))
# Saída: (9, 3)
\`\`\`
`;
