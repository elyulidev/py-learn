
export const m1Unpacking = `
# Unpacking em Python

O **unpacking** (desempacotamento) em Python permite atribuir os elementos de uma lista (ou qualquer iterável) a múltiplas variáveis em uma única linha de código.

\`\`\`python
a, b, c = [1, 2, 3]
print(a) # 1
print(b) # 2
print(c) # 3
\`\`\`

Também é possível fazer isso com outros iteráveis, como as tuplas.

\`\`\`python
a, b, c = (1, 2, 3)
print(a) # 1
print(b) # 2
print(c) # 3
\`\`\`

Como é de se esperar, o número de variáveis deve coincidir com o comprimento da sequência.
Obtemos \`ValueError: not enough values to unpack\` se fornecermos menos valores do que variáveis.

\`\`\`python
# a, b, c = (1, 2)
# ValueError: not enough values to unpack (expected 3, got 2)
\`\`\`

E \`ValueError: too many values to unpack\` se fornecermos valores demais.

\`\`\`python
# a, b = (1, 2, 3, 4)
# ValueError: too many values to unpack (expected 2)
\`\`\`

## Unpacking com outros iteráveis

Podem ocorrer casos curiosos, já que o unpacking funciona com **qualquer** iterável, inclusive strings.

\`\`\`python
a, b, c = "123"
print(a) # "1"
print(b) # "2"
print(c) # "3"
\`\`\`

Funciona também com dicionários, sendo que, por padrão, o unpacking é feito sobre as **chaves** (keys).

\`\`\`python
dicionario = {'um': 1, 'dois': 2, 'tres': 3}
a, b, c = dicionario
print(a) # um
print(b) # dois
print(c) # tres
\`\`\`

Se quisermos os valores, devemos usar o método \`.values()\`.

\`\`\`python
a, b, c = {'uno': 1, 'dos': 2, 'tres': 3}.values()
print(a) # 1
print(b) # 2
print(c) # 3
\`\`\`

Dado que \`range()\` retorna um iterador, também podemos usá-lo.

\`\`\`python
a, b, c = range(3)
print(a) # 0
print(b) # 1
print(c) # 2
\`\`\`

## Operador de Unpacking (*)

Relacionado ao unpacking, existe o operador \`*\` (asterisco), que nos permite realizar atribuições quando o número de elementos é diferente, capturando o "resto" da lista.

Capturando o resto no início:
\`\`\`python
*a, b = (1, 2, 3)
print(a) # [1, 2] -> Lista com o restante
print(b) # 3
\`\`\`

Capturando o resto no final:
\`\`\`python
a, *b = (1, 2, 3)
print(a) # 1
print(b) # [2, 3]
\`\`\`

### Unindo Listas e Dicionários

Podemos usar o operador para unir listas. Embora seja importante notar que isso pode ser feito de outras formas (como usando \`+\` ou \`.extend()\`).

\`\`\`python
lista_a = [1, 2]
lista_b = [3, 4]
combinada = [*lista_a, *lista_b]

print(combinada)
# [1, 2, 3, 4]
\`\`\`

Também temos o operador definido para dicionários, usando dois asteriscos \`**\`.

\`\`\`python
dict_a = {"um": 1, "dois": 2}
dict_b = {"tres": 3, "quatro": 4}

dict_c = {**dict_a, **dict_b}

print(dict_c)
# {'um': 1, 'dois': 2, 'tres': 3, 'quatro': 4}
\`\`\`

> **Atenção:** Se houver chaves duplicadas, o valor do segundo dicionário sobrescreverá o primeiro.

\`\`\`python
a = {"um": 1, "dois": 2}
b = {"um": 0, "dois": 0}

c = {**a, **b}
print(c)
# {'um': 0, 'dois': 0}
\`\`\`

Por último, também podemos fazer coisas interessantes com loops \`for\`.

\`\`\`python
for primeiro, *resto in [(1, 2, 3), (4, 5, 6, 7)]:
    print("Primeiro:", primeiro)
    print("Resto:", resto)
    
# Saída:
# Primeiro: 1
# Resto: [2, 3]
# Primeiro: 4
# Resto: [5, 6, 7]
\`\`\`

## Unpacking para Troca de Variáveis (Swapping)

A principal aplicação prática e elegante do unpacking em algoritmos matemáticos é para intercambiar (fazer o *swap*) de variáveis em uma única linha de código. Embora pareça simples, nem todas as linguagens permitem isso sem uma variável temporária auxiliar.

\`\`\`python
a, b = 1, 2
print(a, b) # 1 2

# A mágica acontece aqui:
a, b = b, a

print(a, b) # 2 1
\`\`\`

## Unpacking em Funções

Embora veremos isso com mais detalhes no módulo de Funções (args e kwargs), o unpacking nos permite passar um número variável de argumentos para uma função.

\`\`\`python
def funcao(a, *args, **kwargs):
    print(f"a={a}, args={args}, kwargs={kwargs}")

funcao(1)
# a=1 args=() kwargs={}

funcao(1, 2)
# a=1 args=(2,) kwargs={}

funcao(1, 2, 3, quatro=4, cinco=5)
# a=1 args=(2, 3) kwargs={'quatro': 4, 'cinco': 5}
\`\`\`
`;
