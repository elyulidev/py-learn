
export const m2ListComp = `
# List Comprehensions

Uma das principais vantagens do Python é que uma mesma funcionalidade pode ser escrita de maneiras muito diferentes, já que sua sintaxe é muito rica no que se conhece como expressões idiomáticas (*idiomatic expressions*). As **list comprehensions** (ou compreensão de listas) são uma delas.

Indo direto ao ponto: as list comprehensions nos permitem criar listas de elementos em uma única linha de código.

Por exemplo, podemos criar uma lista com os quadrados dos primeiros 5 números da seguinte forma:

\`\`\`python
quadrados = [i**2 for i in range(5)]
print(quadrados)
# [0, 1, 4, 9, 16]
\`\`\`

Se essa funcionalidade não existisse, poderíamos fazer o mesmo da seguinte forma, mas precisaríamos de mais linhas de código:

\`\`\`python
quadrados = []
for i in range(5):
    quadrados.append(i**2)
# [0, 1, 4, 9, 16]
\`\`\`

O resultado é o mesmo, mas resulta menos claro. Antes de continuar, vejamos a sintaxe geral das compreensões de listas.

\`\`\`python
# lista = [expressão for elemento in iterável]
\`\`\`

Ou seja, por um lado temos o \`for elemento in iteravel\`, que itera um determinado iterável e "armazena" cada um dos elementos na variável \`elemento\`. Por outro lado, temos a \`expressão\`, que é o que será adicionado à lista em cada iteração.

A expressão pode ser uma operação como vimos anteriormente \`i**2\`, mas também pode ser um valor constante. O seguinte exemplo gera uma lista de cinco números um.

\`\`\`python
uns = [1 for i in range(5)]
# [1, 1, 1, 1, 1]
\`\`\`

A expressão também pode ser uma chamada a uma função. Poderíamos escrever o exemplo anterior do cálculo de quadrados da seguinte maneira:

\`\`\`python
def eleva_ao_quadrado(i):
    return i**2

quadrados = [eleva_ao_quadrado(i) for i in range(5)]
# [0, 1, 4, 9, 16]
\`\`\`

Como você pode observar, as possibilidades são bastante amplas. Qualquer elemento que seja iterável pode ser usado com as list comprehensions. Anteriormente iteramos um \`range()\`, mas podemos fazer o mesmo para uma lista existente. No exemplo seguinte, vemos como dividir todos os números de uma lista por 10.

\`\`\`python
lista = [10, 20, 30, 40 , 50]
nova_lista = [i/10 for i in lista]
# [1.0, 2.0, 3.0, 4.0, 5.0]
\`\`\`

## Adicionando condicionais

No tópico anterior vimos como modificar todos os elementos de um iterável. Mas, e se quiséssemos realizar a operação sobre o elemento **apenas se uma determinada condição for cumprida**?

Temos boas notícias: é possível adicionar um condicional \`if\`. A expressão genérica seria a seguinte:

\`\`\`python
# lista = [expressão for elemento in iterável if condição]
\`\`\`

Portanto, a expressão só será aplicada (e o elemento adicionado) se cumprir a condição. Vejamos um exemplo com uma frase, da qual queremos extrair apenas as letras 'r'.

\`\`\`python
frase = "O rato roeu a roupa do rei de Roma"
erres = [i for i in frase if i == 'r']
# ['r', 'r', 'r', 'r', 'r']
\`\`\`

O que o código anterior faz é iterar cada letra da frase e, se for um 'r', adiciona-se à lista. Dessa maneira o resultado é uma lista com tantos 'r' quanto a frase original possui. Podemos calcular quantas vezes se repete usando \`len()\`.

\`\`\`python
print(len(erres))
# 5
\`\`\`

## Set Comprehension (Conjuntos)

As *set comprehensions* são muito similares às listas que vimos anteriormente. A única diferença é que devemos mudar os colchetes \`[]\` por chaves \`{}\`.

Como resulta evidente, dado que os Sets (Conjuntos) não permitem duplicatas, se tentarmos adicionar um elemento que já existe no set, ele simplesmente não será duplicado.

\`\`\`python
frase = "O rato roeu a roupa do rei de Roma"
meu_set = {i for i in frase if i == "r"}
print(meu_set)
# {'r'}
\`\`\`

## Dictionary Comprehension (Dicionários)

Por último, também temos as compreensões de dicionários. São muito similares às anteriores, com a única diferença que devemos especificar a **chave** (key) e o **valor** (value).

Vejamos um exemplo convertendo duas listas em um dicionário:

\`\`\`python
lista1 = ['nome', 'idade', 'região']
lista2 = ['Pelayo', 30, 'Astúrias']

meu_dict = {chave:valor for chave, valor in zip(lista1, lista2)}

print(meu_dict)
# {'nome': 'Pelayo', 'idade': 30, 'região': 'Astúrias'}
\`\`\`

Como se pode ver, usando \`:\` atribuímos um valor a uma chave. Fizemos uso também de \`zip()\`, que nos permite iterar duas listas paralelamente.

## Conclusões

As compreensões de listas, sets ou dicionários são ferramentas muito úteis para tornar nosso código mais compacto e fácil de ler. Sempre que tivermos uma coleção iterável que queiramos modificar ou filtrar, são uma boa opção para evitar ter que escrever loops \`for\` explícitos de várias linhas.

As compreensões estão também muito relacionadas com o conceito de **Programação Funcional** e outras funções que o Python nos oferece como \`filter\` ou \`map\`, conceitos que veremos mais adiante no curso.

Em certas ocasiões, as compreensões não resultam apenas úteis por poderem ser escritas em uma única linha de código, mas também podem chegar a ser **mais rápidas** computacionalmente que outros métodos tradicionais de loops.

Por último, embora seu uso resulte muito elegante, é preciso ter cuidado para não abusar delas. É fácil cair na tentação de escrever compreensões tão longas e complexas que se tornam impossíveis de ler por outros humanos, o que é uma má prática. **Legibilidade conta.**
`;
