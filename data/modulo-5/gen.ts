
export const m5Gen = `
# Geradores em Python

Se você já encontrou uma função em Python que não apenas tem uma instrução \`return\`, mas também retorna um valor usando **\`yield\`**, você já viu o que é um **gerador** (*generator*). A seguir, explicamos como são criados, para que servem e suas vantagens. Também é muito importante não confundir geradores com corrotinas, que também usam \`yield\`, mas de outra maneira.

Vamos começar pelo básico. Certamente você já sabe o que é uma função e como ela pode retornar um valor com \`return\`.

\`\`\`python
def funcao():
    return 5
\`\`\`

Como explicamos, os geradores usam \`yield\` em vez de \`return\`. Vamos ver o que aconteceria se trocássemos o return pelo yield.

\`\`\`python
def gerador():
    yield 5
\`\`\`

E agora vamos tentar chamar as duas "funções".

\`\`\`python
print(funcao())
print(gerador())
# Saída: 5
# Saída: <generator object gerador at 0x103e7f0a0>
\`\`\`

Podemos ver já a primeira diferença ao usar o \`yield\`. No primeiro caso, retorna-se um 5, mas no segundo o que se retorna é, na realidade, um objeto da classe \`generator\`. Na verdade, o número 5 também pode ser acessado no caso do gerador, mas veremos isso mais adiante.

Então, se uma função contém pelo menos uma instrução \`yield\`, ela se tornará uma função geradora. Uma função geradora difere de uma função normal porque, após executar o \`yield\`, a função devolve o controle a quem a chamou, mas **a função é pausada e o estado (valor das variáveis) é salvo**. Isso permite que sua execução possa ser retomada mais tarde.

## Iterando os Geradores

A seguir, vamos ver como acessar os valores do gerador. Para entender melhor, recomendamos que leia antes sobre iteráveis e iteradores.

Outra característica que torna os *generators* diferentes é que podem ser iterados, já que implementam os métodos \`__iter__()\` e \`__next__()\`, pelo que podemos usar \`next()\` sobre eles. Dado que são iteráveis, lançam também um \`StopIteration\` quando chegam ao final.

Voltando ao exemplo anterior, vamos ver como podemos usar o \`next()\`.

\`\`\`python
a = gerador()
print(next(a))
# Saída: 5
\`\`\`

Como prometemos antes, o 5 também podia ser acessado, viu? Mas vamos ver o que acontece agora se tentarmos chamar outra vez o \`next()\`. Se você se lembra, só temos uma chamada a \`yield\`.

\`\`\`python
a = gerador()
print(next(a))
# print(next(a))
# Saída: Error! StopIteration:
\`\`\`

Como era de se esperar, temos uma exceção do tipo \`StopIteration\`, já que o gerador não retorna mais valores. Isso deve-se ao fato de que cada vez que usamos \`next()\` sobre o gerador, ele é chamado e continua sua execução depois do último \`yield\`. E neste caso, como não há mais código, não são gerados mais valores.

## Criando Geradores

Vamos ver outro exemplo mais completo onde tenhamos um gerador que gere vários valores. Na função seguinte podemos ver como temos uma variável \`n\` que é incrementada em 1, e depois retornada com \`yield\`. O que acontecerá aqui é que o gerador gerará um total de três valores.

\`\`\`python
def gerador():
    n = 1
    yield n

    n += 1
    yield n

    n += 1
    yield n
\`\`\`

E fazendo uso de \`next()\` assim como fazíamos antes, podemos ver os valores que foram gerados. O que acontece "por baixo dos panos" seria o seguinte:

1.  Entra-se na função geradora, \`n=1\` e retorna-se esse valor. Como já vimos, o estado da função é salvo (o valor de \`n\` é guardado para a próxima chamada).
2.  A segunda vez que usamos \`next()\`, entra-se outra vez na função, mas continua-se sua execução onde parou anteriormente. Soma-se 1 ao \`n\` e retorna-se o novo valor.
3.  A terceira chamada realiza o mesmo.
4.  Uma quarta chamada daria um erro, já que não há mais código para executar.

\`\`\`python
g = gerador()
print(next(g))
print(next(g))
print(next(g))
# Saída: 1, 2, 3
\`\`\`

Outra forma mais cômoda de realizar o mesmo seria usando um simples loop \`for\`, já que o gerador é iterável.

\`\`\`python
for i in gerador():
    print(i)
# Saída: 1, 2, 3
\`\`\`

## Forma alternativa (Generator Expressions)

Os geradores também podem ser criados de uma forma muito mais simples e em uma única linha de código. Sua sintaxe é similar às *list comprehension*, mas trocando os colchetes \`[]\` por parênteses \`()\`.

O exemplo com *list comprehensions* seria o seguinte. Simplesmente geram-se os valores de uma lista elevados ao quadrado.

\`\`\`python
lista = [2, 4, 6, 8, 10]
ao_quadrado = [x**2 for x in lista]
print(ao_quadrado)
# [4, 16, 36, 64, 100]
\`\`\`

E seu equivalente com geradores seria o seguinte:

\`\`\`python
ao_quadrado_gerador = (x**2 for x in lista)
print(ao_quadrado_gerador)
# Saída: <generator object <genexpr> at 0x103e803b8>
\`\`\`

E como vimos, os valores podem ser gerados da seguinte forma:

\`\`\`python
for i in ao_quadrado_gerador:
    print(i)
# Saída: 4, 16, 36, 64, 100
\`\`\`

A diferença entre o exemplo usando *list comprehensions* e *generators* é que, no caso dos geradores, os valores não estão armazenados na memória, mas são gerados "ao vivo" (on-the-fly). Esta é uma das principais vantagens dos geradores, já que os elementos só são gerados quando são solicitados, o que os torna muito mais eficientes no que diz respeito à memória.

## Vantagens e exemplos

Chegados a este ponto, talvez você se pergunte para que servem os geradores. A verdade é que, mesmo se não existissem, poderia realizar-se o mesmo criando uma classe que implemente os métodos \`__iter__()\` e \`__next__()\`. Vejamos um exemplo de uma classe que gera os primeiros 10 números (0 a 9) ao quadrado.

\`\`\`python
class AoCuadrado:
    def __init__(self):
        self.i = 0

    def __iter__(self):
        return self

    def __next__(self):
        if self.i > 9:
            raise StopIteration

        result = self.i ** 2
        self.i += 1
        return result
\`\`\`

E da mesma forma que usávamos os geradores, podemos usar nossa classe \`AoCuadrado\`. Criamos um objeto dela e o iteramos. Em cada iteração gerará um novo valor até que se chegue ao final.

\`\`\`python
eleva_ao_quadrado = AoCuadrado()
for i in eleva_ao_quadrado:
    print(i)
# 0, 1, 4, 9, 16, 25, 36, 49, 64, 81
\`\`\`

No entanto, esta forma é um tanto longa e talvez confusa. Como vimos antes, podemos chegar a fazer o mesmo em uma única linha de código. Para que complicar a vida?

Por outro lado, já mencionamos que o uso dos geradores faz com que nem todos os valores estejam armazenados na memória, mas que sejam gerados ao vivo. Vamos ver um exemplo onde isso pode ser visto melhor. Suponhamos que queremos somar os primeiros 100 números naturais. Uma opção poderia ser criar uma lista de todos eles e depois somá-la. Neste caso, todos os valores são armazenados na memória, algo que poderia ser um problema se, por exemplo, tentássemos somar os primeiros $10^{10}$ números.

\`\`\`python
def primeiros_n(n):
    nums = []
    for i in range(n):
        nums.append(i)
    return nums
    
print(sum(primeiros_n(100)))
# Saída: 4950
\`\`\`

No entanto, podemos realizar o mesmo com um gerador. Neste caso, os valores serão gerados um por um à medida que forem necessários.

\`\`\`python
def primeiros_n(n):
    num = 0
    for i in range(n):
        yield num
        num += 1
print(sum(primeiros_n(100)))
# Saída: 4950
\`\`\`

Note que este é um exemplo com fins didáticos, portanto, se você quiser fazer isso, a melhor maneira seria usando um simples \`range()\` assumindo que você usa Python 3.

\`\`\`python
print(sum(range(100)))
# Saída: 4950
\`\`\`
`;
