
export const m5Args = `
# Args e Kwargs em Python

Se você já teve que definir uma função com um número variável de argumentos e não sabia como fazê-lo, a seguir explicamos como, graças aos **args** e **kwargs** em Python.

Vamos supor que queremos uma função que some um conjunto de números, mas não sabemos *a priori* a quantidade de números que se quer somar. Se por exemplo tivéssemos três, a função seria tão simples como a seguinte:

\`\`\`python
def soma(a, b, c):
    return a + b + c

print(soma(2, 4, 6))
# Saída: 12
\`\`\`

O problema surge se, por exemplo, quisermos somar quatro números. Como é evidente, a seguinte chamada à função anterior daria um erro, já que estamos usando quatro argumentos enquanto a função só suporta três.

\`\`\`python
# soma(2, 4, 6, 1)
# TypeError: soma() takes 3 positional arguments but 4 were given
\`\`\`

Introduzida a problemática, vejamos como podemos resolver este problema com \`*args\` e \`**kwargs\` em Python.

## Uso de *args

Graças aos \`*args\` em Python, podemos definir funções cujo número de argumentos é variável. Ou seja, podemos definir funções genéricas que não aceitam um número determinado de parâmetros, mas que se "adaptam" ao número de argumentos com que são chamados.

De fato, o *args* vem de *arguments* em inglês (argumentos). Fazendo uso de \`*args\` na declaração da função, podemos fazer com que o número de parâmetros que aceite seja variável.

\`\`\`python
def soma(*args):
    s = 0
    for arg in args:
        s += arg
    return s

print(soma(1, 3, 4, 2)) # 10
print(soma(1, 1))       # 2
\`\`\`

Antes de mais nada, o uso do nome \`args\` é totalmente arbitrário, pelo que você poderia tê-lo chamado como quisesse (ex: \`*numeros\`). O que é um requisito é usar o asterisco \`*\` junto ao nome. No entanto, por convenção, usa-se \`args\`.

No exemplo anterior, vimos como \`*args\` pode ser iterado, já que na realidade é uma **tupla**. Portanto, iterando a tupla podemos acessar todos os argumentos de entrada e, no nosso caso, somá-los e devolvê-los.

Note-se que é um mero exemplo didático. Na realidade poderíamos fazer algo como o seguinte, o que seria muito mais simples usando a função *built-in* \`sum()\`:

\`\`\`python
def soma(*args):
    return sum(args)

print(soma(5, 5, 3)) # 13
\`\`\`

Com isto resolvemos nosso problema inicial. No entanto, há outra forma que nos proporciona também um nome associado ao argumento, com o uso de \`**kwargs\`. Explicamos a seguir.

## Uso de **kwargs

Assim como em \`*args\`, em \`**kwargs\` o nome é uma mera convenção. Você pode usar qualquer outro nome desde que respeite os dois asteriscos \`**\`.

Neste caso, em vez de termos uma tupla, temos um **dicionário**. Você pode verificar da seguinte forma com \`type()\`.

\`\`\`python
def soma(**kwargs):
    print(type(kwargs))
    
soma(x=3)
# <class 'dict'>
\`\`\`

Mas vejamos um exemplo mais completo. Diferente de \`*args\`, os \`**kwargs\` (Keyword Arguments) nos permitem dar um nome a cada argumento de entrada, podendo acessar a eles dentro da função através de um dicionário.

\`\`\`python
def soma(**kwargs):
    s = 0
    for key, value in kwargs.items():
        print(f"{key} = {value}")
        s += value
    return s
    
print(soma(a=3, b=10, c=3))
# Saída:
# a = 3
# b = 10
# c = 3
# 16
\`\`\`

Como podemos ver, é possível iterar os argumentos de entrada com \`.items()\`, e podemos acessar a chave (*key*) e o valor (*value*) de cada argumento.

O uso dos \`**kwargs\` é muito útil se, além de querer acessar o valor das variáveis dentro da função, você quiser dar-lhes um nome que forneça uma informação extra.

## Misturando *args e **kwargs

Uma vez entendido o uso de \`*args\` e \`**kwargs\`, podemos complicar as coisas um pouco mais. É possível misturar argumentos normais (posicionais) com \`*args\` e \`**kwargs\` dentro da mesma função.

A única coisa que você precisa saber é que deve definir a função na seguinte ordem:

1.  Argumentos normais (posicionais).
2.  Depois os \`*args\`.
3.  E por último os \`**kwargs\`.

Vejamos um exemplo:

\`\`\`python
def funcao(a, b, *args, **kwargs):
    print("a =", a)
    print("b =", b)
    
    for arg in args:
        print("args =", arg)
        
    for key, value in kwargs.items():
        print(key, "=", value)

funcao(10, 20, 1, 2, 3, 4, x="Olá", y="Que", z="Tal")

# Saída:
# a = 10
# b = 20
# args = 1
# args = 2
# args = 3
# args = 4
# x = Olá
# y = Que
# z = Tal
\`\`\`

## Unpacking (Desempacotamento)

Por último, um truque que não podemos deixar de mencionar é o que se conhece como *Tuple Unpacking* ou desempacotamento. Fazendo uso de \`*\`, podemos extrair os valores de uma lista ou tupla e passá-los como argumentos para a função, sem precisar passá-los um a um.

\`\`\`python
def funcao(a, b, *args, **kwargs):
    print(f"a={a}, b={b}, args={args}, kwargs={kwargs}")

meus_args = [1, 2, 3, 4]
meus_kwargs = {'x': "Olá", 'y': "Que", 'z': "Tal"}

# O Python "desempacota" a lista em args individuais e o dicionário em kwargs
funcao(10, 20, *meus_args, **meus_kwargs)

# Saída:
# a=10, b=20, args=(1, 2, 3, 4), kwargs={'x': 'Olá', 'y': 'Que', 'z': 'Tal'}
\`\`\`
`;
