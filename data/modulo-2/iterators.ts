
export const m2Iterators = `
# Iteradores e Iteráveis

Se você já entende o uso do \`while\` e do \`for\`, então sem dúvida está pronto para continuar com os iteráveis. São ferramentas muito potentes do Python que nos permitem, como o nome indica, iterar coleções. A seguir veremos estes dois conceitos em detalhe.

Antes de mais nada, vamos colocar o problema que queremos resolver. Temos uma determinada coleção de dados, neste caso uma lista com vários valores, e queremos mostrar seus valores um a um na tela. Se você é novo em Python ou vem de outras linguagens de programação, talvez resolvesse da seguinte maneira com um \`while\`.

\`\`\`python
# Mau uso
lista = [5, 4, 9, 2]
i = 0
while i < len(lista):
    elemento = lista[i]
    print(elemento)
    i += 1
# Saída: 5, 4, 9, 2
\`\`\`

Embora seja uma solução válida e que funciona perfeitamente, talvez seja melhor usar um bucle \`for\`, já que nos podemos poupar alguma linha de código.

\`\`\`python
# Mau uso
lista = [5, 4, 9, 2]
for i in range(len(lista)):
    elemento = lista[i]
    print(elemento)
# Saída: 5, 4, 9, 2
\`\`\`

Embora esta segunda forma seja também válida, em Python existe uma forma muito mais fácil de iterar uma lista. Dita forma é a seguinte.

\`\`\`python
lista = [5, 4, 9, 2]
for elemento in lista:
    print(elemento)
# Saída 5, 4, 9, 2
\`\`\`

Se saber, você já fez uso dos iteradores, usando a classe lista que é uma classe iterável. Como você pode ver, trata-se de uma solução muito mais simples. A seguir veremos o que é um iterável e como pode ser usado.

## Iteráveis (Iterables)

Uma classe **iterável** é uma classe que pode ser iterada. Dentro do Python há grande quantidade de classes iteráveis como as listas, strings, dicionários ou arquivos. Se temos uma classe iterável, podemos usá-la à direita do \`for\` da seguinte maneira.

\`\`\`python
# for elemento in [classe_iteravel]:
#   ...
\`\`\`

Se usamos o \`for\` como acabamos de mostrar, a variável \`elemento\` irá assumindo os valores de cada elemento presente na classe iterável. De desta maneira, já não temos que ir acessando manualmente com \`[]\` a cada elemento.

Anteriormente vimos um exemplo iterando uma lista, mas também podemos iterar uma cadeia, já que é uma classe iterável. Ao iterar uma cadeia se nos devolve cada letra presente na mesma. Como você pode ver, a sintaxe se assemelha bastante à linguagem natural, seria algo assim como dizer “põe em c cada elemento presente na cadeia”.

\`\`\`python
cadena = "Ola"
for c in cadena:
    print(c)
# Saída: O l a
\`\`\`

Chegados a este ponto, talvez você se pergunte: e como sei se uma classe é iterável ou não? Pois bem, você tem duas opções. A primeira seria consultar a documentação oficial de Python. A segunda é ver se a classe ou objeto em questão herda de \`Iterable\` (aqui te explicamos a herança se ainda não a tens clara). Com \`isinstance()\` podemos comprovar se uma classe herda de outra.

\`\`\`python
from collections.abc import Iterable

cadena = "Ola"
numero = 3
print("cadena", isinstance(cadena, Iterable))
print("numero", isinstance(numero, Iterable))

# Saída
# cadena True
# numero False
\`\`\`

Podemos ver como efetivamente a cadeia é iterável e o número não. É por isso que podemos iterar a cadeia, mas o seguinte código daria um erro.

\`\`\`python
numero = 3
# for x in numero:
#    print(x)
# Erro TypeError: 'int' object is not iterable
\`\`\`

Python nos oferece também diferentes métodos que podem ser usados sobre classes iteráveis como os que se mostram a seguir:

*   \`list()\`: converte para lista uma classe iterável.
*   \`sum()\`: para somar.
*   \`join()\`: permite unir cada elemento de uma classe iterável com o primeiro argumento usado.

\`\`\`python
print(list("Ola"))
print(sum([1, 2, 3]))
print("-".join("Ola"))

# Saída:
# ['O', 'l', 'a']
# 6
# O-l-a
\`\`\`

Da mesma forma que iteramos uma cadeia ou uma lista, também podemos iterar um dicionário. O iterador do dicionário devolve as chaves ou *keys* do mesmo.

\`\`\`python
mi_dict = {'a':1, 'b':2, 'c':3}
for i in mi_dict:
    print(i)
# Saída: a, b, c
\`\`\`

Uma vez que entendemos o que é uma classe iterável, vejamos o que é um iterador.

## Iteradores (Iterators)

Poder-se-ia explicar a diferença entre iteradores e iteráveis usando um **livro como analogia**. O livro seria nossa classe iterável, já que tem diferentes páginas às quais podemos acessar. O livro poderia ser uma lista, e cada página um elemento da lista. Por outro lado, o iterador seria um **marcador de página**, ou seja, uma referência que nos indica em que posição estamos do livro, e que pode ser usado para “navegar” por ele.

É possível obter um iterador a partir de uma classe iterável com a função \`iter()\`. No seguinte exemplo podemos ver como obtemos o iterador do livro.

\`\`\`python
livro = ['página1', 'página2', 'página3', 'página4']
marcapaginas = iter(livro)
\`\`\`

Chegados a este ponto, nosso marcapáginas armazena um iterador. Trata-se de um objeto que podemos usar para navegar através do livro. Usando a função \`next()\` sobre o iterador, podemos ir acessando sequencialmente a cada elemento de nossa lista (as páginas de livro).

\`\`\`python
print(next(marcapaginas))
print(next(marcapaginas))
print(next(marcapaginas))
print(next(marcapaginas))

# página1
# página2
# página3
# página4
\`\`\`

Algo parecido a isto é o que sucede por baixo quando usamos o \`for\` sobre uma classe iterável. Vai-se acessando sequencialmente aos elementos até que a exceção \`StopIteration\` é lançada. Dita exceção lança-se quando chegamos ao final, e não existem mais elementos para iterar.

\`\`\`python
# print(next(marcapaginas))
# Saída: StopIteration
\`\`\`

Uma nota muito importante é que quando o iterador é obtido com \`iter()\` como vimos, aponta por defeito fora da lista. Ou seja, se queremos acessar ao primeiro elemento da lista, deveremos chamar uma vez a \`next()\`.

Por outro lado, a diferença de um marcador de página de um livro, o iterador só pode ir para a frente. Não é possível retroceder.

## Criando sua classe iterável

Chegados a este ponto já entendemos perfeitamente os iteráveis e iteradores e vimos como podem ser usados com diferentes classes de Python como as cadeias ou listas. No entanto, talvez queiras dar um passo mais e definir a tua própria classe.

Comecemos do zero. Vamos definir uma classe \`MinhaClasse\` e criar um objeto com ela. Se tentamos usar a função \`iter()\` para obter seu iterador, teremos um erro já que nossa classe por defeito não é iterável.

\`\`\`python
class MinhaClasse:
    pass

miobjeto = MinhaClasse()
# iterador = iter(miobjeto)

# Saída
# TypeError: 'MiClase' object is not iterable
\`\`\`

Para poder chamar a função \`iter()\` sobre a classe, devemos implementar o método dunder \`__iter__()\`. Dito método deve devolver um iterável, que será usado quando a classe tente ser iterada.

\`\`\`python
class MinhaClasse:
    def __init__(self, items):
        self.lista = items
    def __iter__(self):
        return iter(self.lista)
\`\`\`

Podemos ver como temos o método \`__init__()\` que é chamado quando se cria uma nova instância da classe. Simplesmente passamos uma lista como parâmetro de entrada e a armazenamos como atributo em \`.lista\`.

Por outro lado, o método \`__iter__()\` devolve um iterador, que simplesmente é o iterador da própria lista. Agora que a nossa classe já é iterável, podemos fazer o seguinte.

\`\`\`python
miobjeto = MinhaClasse([5, 4, 3])
for item in miobjeto:
    print(item)

# Saída: 5, 4, 3
\`\`\`

Cabe destacar que o exemplo mostrado tem fins didáticos e pouca aplicação prática, já que simplesmente se está encapsulando uma lista dentro de uma classe. No entanto serve para exemplificar como uma classe se pode converter em iterável, e seguramente com esta base encontres aplicações práticas nos teus projetos.
`;