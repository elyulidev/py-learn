
export const m5FuncProg = `
# Programação Funcional em Python

Em poucas palavras, a programação funcional é um paradigma de programação distinto do tradicional estruturado ou orientado a objetos ao qual costumamos estar acostumados. Baseia-se principalmente no uso de funções, sendo as mesmas praticamente a única ferramenta que a linguagem nos oferece. Por isso, em linguagens puramente funcionais como Haskell, não existem loops \`for\` ou \`while\`.

Uma linguagem de programação sem loops? Embora possa parecer loucura, também tem suas vantagens e oferece certas características muito importantes que veremos a seguir.

Apesar de o Python não ser uma linguagem puramente funcional, ele nos oferece algumas primitivas próprias de linguagens funcionais, como \`map\`, \`filter\` e \`reduce\`. Todas elas oferecem uma alternativa ao uso de loops para resolver certos problemas. Vejamos alguns exemplos.

## map em Python

A função \`map\` recebe duas entradas:

1.  Uma lista ou iterável que será modificado em uma nova.
2.  Uma função, que será aplicada a cada um dos elementos da lista ou iterável anterior.

Ela nos devolve um iterador onde todos e cada um dos elementos da lista original foram passados pela função.

\`\`\`python
# map(funcao_a_aplicar, entrada_iteravel)
\`\`\`

Imaginemos que queremos multiplicar por dois todos os elementos de uma lista. A primeira forma que nos poderia ocorrer seria a seguinte. Note que também poderia ser usada *list comprehension*, mas deixaremos isso para outro momento.

\`\`\`python
lista = [1, 2, 3, 4, 5]
lista_pordois = []
for l in lista:
    lista_pordois.append(l*2)

print(lista_pordois)
# [2, 4, 6, 8, 10]
\`\`\`

Mas vejamos como dar um enfoque funcional. Como dissemos, \`map\` recebe uma função e um iterável como entrada, aplicando a função a cada elemento. Então podemos definir uma função \`por_dois\`, que passaremos a \`map\` junto com nossa lista inicial.

\`\`\`python
lista = [1, 2, 3, 4, 5]

def por_dois(x):
    return x * 2

lista_pordois = map(por_dois, lista)

print(list(lista_pordois))
# [2, 4, 6, 8, 10]
\`\`\`

Como podemos observar, já não usamos loops. Simplesmente passamos a \`map\` a função e a lista, e ele faz o trabalho por nós. Dado que \`por_dois\` se trata de uma função muito simples, é possível usar funções lambda para compactar um pouco o código, resultando no seguinte:

\`\`\`python
lista = [1, 2, 3, 4, 5]
lista_pordois = map(lambda x: 2*x, lista)

print(list(lista_pordois))
# [2, 4, 6, 8, 10]
\`\`\`

## filter em Python

A função \`filter\` também recebe uma função e uma lista, mas o resultado é a lista inicial filtrada. Ou seja, passa-se cada elemento da lista pela função, e apenas se seu resultado for \`True\`, ele é incluído na nova lista.

\`\`\`python
# filter(funcao_filtrar, entrada_iteravel)
\`\`\`

Assim como fazíamos antes, usamos as funções lambda que nos permitem declarar e atribuir uma função na mesma linha de código. No exemplo seguinte filtramos os números pares.

\`\`\`python
lista = [7, 4, 16, 3, 8]
pares = filter(lambda x: x % 2 == 0, lista)

print(list(pares))
# [4, 16, 8] 
\`\`\`

Note que o seguinte código seria equivalente:

\`\`\`python
lista = [7, 4, 16, 3, 8]

def eh_par(x):
    return x % 2 == 0

pares = filter(eh_par, lista)

print(list(pares))
# [4, 16, 8]
\`\`\`

Mais uma vez, ressaltamos que não estamos usando loops. Simplesmente damos a entrada e a função a aplicar a cada elemento, e \`filter\` encarrega-se do resto. Esta é uma das características chave da programação funcional. Se centra mais no **o que** fazer do que no **como** fazer. Para isso usam-se funções predefinidas como as que estamos vendo, às quais só temos que passar as entradas e elas fazem o trabalho por nós.

## reduce em Python

Por último, podemos usar \`reduce\` para reduzir todos os elementos da entrada a um único valor aplicando um determinado critério. Por exemplo, podemos somar todos os elementos de uma lista da seguinte maneira.

\`\`\`python
from functools import reduce
lista = [1, 2, 3, 4, 5]
soma = reduce(lambda acc, val: acc + val, lista)
print(soma) # 15
\`\`\`

O que poderia ser reescrito usando a função \`add\`:

\`\`\`python
from operator import add
from functools import reduce
lista = [1, 2, 3, 4, 5]
soma = reduce(add, lista)
print(soma) # 15
\`\`\`

Ou também os podemos multiplicar, modificando a função lambda.

\`\`\`python
from functools import reduce
lista = [1, 2, 3, 4, 5]
multiplicacao = reduce(lambda acc, val: acc * val, lista)
print(multiplicacao) # 120
\`\`\`

É importante notar que a função recebe dois argumentos: o acumulador e cada um dos valores da lista.

1.  O **acumulador** é o valor devolvido na iteração anterior, que vai acumulando um resultado até que chegamos ao final.
2.  O **valor** é cada um dos elementos de nossa lista, que no nosso caso vamos adicionando ao acumulador.

O uso de \`reduce\` é especialmente útil quando temos, por exemplo, uma lista de dicionários e queremos somar todos os valores de um campo em concreto. Vejamos um exemplo onde calculamos a idade média de várias pessoas.

\`\`\`python
from functools import reduce
pessoas = [
    {'Nome': 'Alicia', 'Idade': 22},
    {'Nome': 'Bob', 'Idade': 29},
    {'Nome': 'Charlie', 'Idade': 33}
]
soma_idade = reduce(lambda total, p: total + p['Idade'], pessoas, 0)
print(soma_idade/len(pessoas)) # 28.0
\`\`\`

Note que chamamos \`reduce\` com um valor adicional \`0\`, que é o valor inicial do acumulador. Mais uma vez, resolvemos um problema no qual tradicionalmente usaríamos loops com as primitivas da programação funcional.

## Características da Programação Funcional

Uma vez entendido o funcionamento de \`map\`, \`filter\` e \`reduce\`, já temos umas noções básicas da programação funcional. Suas características mais importantes são as seguintes:

1.  Os linguagens de programação puramente funcionais carecem de loops \`for\` e \`while\`.
2.  Diz-se que na programação funcional, as funções são “cidadãs de primeira classe”, o que nos quer dizer que praticamente tudo se faz com funções, e não com loops.
3.  A programação funcional prefere também as **funções puras**, ou seja, funções sem efeitos colaterais (*side effects*). As funções puras não dependem de variáveis externas ou globais. Isso significa que para as mesmas entradas, sempre se produzem as mesmas saídas.
4.  Por outro lado, na programação funcional preferem-se variáveis **imutáveis**, o que significa que uma vez criadas não podem ser modificadas. Isto é algo que verdadeiramente poupa problemas, embora a eficiência possa ser discutível.
5.  Em geral, considera-se que as linguagens de programação funcionais são mais seguras e oferecem verificação formal.

Por último, ressaltar mais uma vez que, embora Python não seja uma linguagem puramente funcional, oferece algumas funções próprias de linguagens funcionais como \`map\`, \`filter\` e \`reduce\`. Se estás interessado em mais, podes dar uma olhada no pacote \`itertools\`.

## Exemplos Programação Funcional

Dada uma lista de pessoas armazenadas em dicionários:

1.  Filtrar de acordo com o sexo
2.  E calcular a média

\`\`\`python
from functools import reduce
pessoas = [
    {'Nome': 'Alicia', 'Idade': 22, 'Sexo': 'F'},
    {'Nome': 'Bob', 'Idade': 25, 'Sexo': 'M'},
    {'Nome': 'Charlie', 'Idade': 33, 'Sexo': 'M'},
    {'Nome': 'Diana', 'Idade': 15, 'Sexo': 'F'},
    {'Nome': 'Esteban', 'Idade': 30, 'Sexo': 'M'},
    {'Nome': 'Federico', 'Idade': 44, 'Sexo': 'M'},
]

homens = list(filter(lambda x: x['Sexo'] == 'M', pessoas))
soma_idades = reduce(lambda soma, p: soma + p['Idade'], homens, 0)
media_idade = soma_idades/(len(homens))
print(media_idade) # 33.0
\`\`\`

Talvez não muito legível, mas todo o anterior poderá se expressar em uma única linha de código.

\`\`\`python
media_idades = reduce(lambda soma, p: soma + p['Idade'], filter(lambda x: x['Sexo'] == 'M', pessoas), 0) / len(list(filter(lambda x: x['Sexo'] == 'M', pessoas)))
print(media_idades) # 33.0
\`\`\`
`;
