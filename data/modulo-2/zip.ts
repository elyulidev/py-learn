
export const m2Zip = `
# Iterar com zip em Python

A função \`zip()\` do Python vem incluída por padrão no namespace, o que significa que pode ser usada sem necessidade de importá-la.

De acordo com a documentação oficial:

> Retorna um iterador de tuplas, onde a i-ésima tupla contém o i-ésimo elemento de cada uma das sequências ou iteráveis dos argumentos. O iterador para quando a entrada iterável mais curta se esgota.

Dito de outra forma, se passarmos duas listas para \`zip\` como entrada, o resultado será uma tupla onde cada elemento terá os respectivos elementos i-ésimos das listas passadas.

Vejamos um exemplo. Como podemos ver, o resultado após aplicar \`zip\` é uma lista com \`(a[0], b[0])\` no primeiro elemento e \`(a[1], b[1])\` no segundo.

\`\`\`python
a = [1, 2]
b = ["Um", "Dois"]
c = zip(a, b)

print(list(c))
# [(1, 'Um'), (2, 'Dois')]
\`\`\`

A priori pode parecer uma função não muito relevante, mas é realmente útil combinada com um \`for\` para iterar duas listas em paralelo.

\`\`\`python
a = [1, 2]
b = ["Um", "Dois"]

for numero, texto in zip(a, b):
    print("Número", numero, "Letra", texto)
    
# Número 1 Letra Um
# Número 2 Letra Dois
\`\`\`

## zip() com n argumentos

Já vimos o uso de \`zip\` com duas listas, mas dado que está definida como \`zip(*iterables)\`, é possível passar um número arbitrário de iteráveis como entrada.

Vejamos um exemplo com várias listas. É importante notar que todas têm o mesmo comprimento (dois).

\`\`\`python
numeros = [1, 2]
espanhol = ["Um", "Dois"]
ingles = ["One", "Two"]
frances = ["Un", "Deux"]

# Iterando as 4 listas simultaneamente
for n, e, i, f in zip(numeros, espanhol, ingles, frances):
    print(n, e, i, f)
    
# 1 Um One Un
# 2 Dois Two Deux
\`\`\`

## zip() com diferentes comprimentos

Também podemos usar \`zip\` usando iteráveis de diferentes comprimentos. Neste caso, o que acontecerá é que o iterador para quando a lista menor acabar.

\`\`\`python
numeros = [1, 2, 3, 4, 5]
espanhol = ["Um", "Dois"]

for n, e in zip(numeros, espanhol):
    print(n, e)

# 1 Um
# 2 Dois
\`\`\`

É lógico que este seja o comportamento, porque se continuasse, não teríamos valores para preencher as outras variáveis.

## zip() com um argumento

Como seria de esperar, dado que \`zip\` está definido para um número arbitrário de parâmetros de entrada, é também possível usar um único valor. O resultado são tuplas de um elemento.

\`\`\`python
numeros = [1, 2, 3, 4, 5]
zz = zip(numeros)
print(list(zz))

# [(1,), (2,), (3,), (4,), (5,)]
\`\`\`

## zip() com dicionários

Até agora nos limitamos a usar \`zip\` com listas, mas a função está definida para qualquer classe iterável. Portanto, podemos usá-la também com dicionários.

Se realizarmos o seguinte, \`a\` e \`b\` tomam os valores das **chaves** (keys) do dicionário.

\`\`\`python
esp = {'1': 'Um', '2': 'Dois', '3': 'Três'}
eng = {'1': 'One', '2': 'Two', '3': 'Three'}

for a, b in zip(esp, eng):
    print(a, b)

# 1 1
# 2 2
# 3 3
\`\`\`

No entanto, se fizermos uso do método \`.items()\`, podemos acessar a chave e o valor de cada elemento.

\`\`\`python
esp = {'1': 'Um', '2': 'Dois', '3': 'Três'}
eng = {'1': 'One', '2': 'Two', '3': 'Three'}

for (k1, v1), (k2, v2) in zip(esp.items(), eng.items()):
    print(k1, v1, v2)

# 1 Um One
# 2 Dois Two
# 3 Três Three
\`\`\`

Note que neste caso ambas chaves \`k1\` e \`k2\` são iguais.

## Desfazer o zip()

Com um pequeno truque, é possível desfazer o zip (unzip) em uma única linha de código. Suponhamos que usamos \`zip\` para obter \`c\`.

\`\`\`python
a = [1, 2, 3]
b = ["One", "Two", "Three"]
c = zip(a, b)

print(list(c))
# [(1, 'One'), (2, 'Two'), (3, 'Three')]
\`\`\`

É possível obter \`a\` e \`b\` a partir de \`c\`? Sim, tão simples como:

\`\`\`python
c = [(1, 'One'), (2, 'Two'), (3, 'Three')]
a, b = zip(*c)

print(a)  # (1, 2, 3)
print(b)  # ('One', 'Two', 'Three')
\`\`\`

Note o uso de \`*c\`, o que é conhecido como **unpacking** em Python.
`;
