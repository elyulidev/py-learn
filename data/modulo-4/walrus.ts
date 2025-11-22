
export const m4Walrus = `
# Operador Walrus (:=)

## Introdução

O operador **walrus** (morsa) ou *walrus operator* foi introduzido com a PEP 572 no **Python 3.8**. Trata-se de um operador de atribuição com uma funcionalidade extra que veremos a seguir.

O operador é representado por dois pontos seguidos de um igual \`:=\`. Visualmente, tem certa semelhança com uma morsa, sendo \`:\` os olhos e \`=\` as presas, daí o seu nome.

O problema que este operador tenta resolver é a simplificação de código. Podemos simplificar as seguintes três linhas:

\`\`\`python
x = "Python"
print(x)
print(type(x))

# Saída:
# Python
# <class 'str'>
\`\`\`

Em apenas duas linhas. Como podemos ver, o uso de \`:=\` atribui e **retorna** o conteúdo da variável ao mesmo tempo.

\`\`\`python
print(x := "Python")
print(type(x))
# Python
# <class 'str'>
\`\`\`

Para quem vem de outras linguagens como C, talvez este operador pareça estranho, já que C permite nativamente fazer atribuições dentro de expressões (ex: \`if ((x = 5) == 5)\`). No entanto, essa sintaxe não era válida em Python usando apenas \`=\`, e o operador walrus veio precisamente para preencher essa lacuna de forma explícita.

## Exemplos do Operador Walrus

### 1. Loops While Interativos

No seguinte programa pedimos ao usuário que introduza um texto e vamos adicionando-o a uma lista até que o texto introduzido seja "terminar". Sem o operador walrus, escreveríamos assim:

\`\`\`python
lista = []
entrada = input("Escreva algo: ")
while entrada != "terminar":
    lista.append(entrada)
    entrada = input("Escreva algo: ")
    
print(lista)
\`\`\`

Temos que repetir a linha do \`input\`. No entanto, aproveitando que o operador walrus \`:=\` devolve o conteúdo que é atribuído, podemos usar \`entrada\` para comparar com \`!= "terminar"\`. Ou seja, unimos a atribuição e a comparação na mesma linha.

\`\`\`python
lista = []
while (entrada := input("Escreva algo: ")) != "terminar":
    lista.append(entrada)

print(lista)
\`\`\`

### 2. Condicionais e Listas

Também podemos economizar linhas de código se quisermos primeiro atribuir a uma variável e logo empregar dita variável em, por exemplo, um \`if\`.

\`\`\`python
a = 20*[1] # Lista com 20 elementos
if (n := len(a)) > 10:
    print(f"A lista tem {n} elementos (>10)")
\`\`\`

### 3. List Comprehensions

Pode ser muito útil quando usamos *list comprehensions* onde o valor que usamos para filtrar é modificado (cálculo pesado) e precisamos dele também no corpo do loop. Evitamos calcular \`f(x)\` duas vezes.

\`\`\`python
# Imaginemos que f(x) é uma função custosa
resultado = [(x, y, x/y) for x in dados if (y := f(x)) > 0]
\`\`\`

De maneira similar, podemos reutilizar o resultado de uma expressão evitando ter que voltar a computá-la.

\`\`\`python
lista = [[y := f(x), x/y] for x in range(5)]
\`\`\`

## Críticas ao Operador Walrus

O operador walrus recebeu muitas críticas entre os desenvolvedores de Python (foi inclusive o motivo pelo qual Guido van Rossum renunciou ao posto de "Ditador Benevolente Vitalício"). A crítica principal é que, embora seu uso possa economizar algumas linhas, às vezes **piora a legibilidade**.

Não sempre menos código implica uma melhoria, sobretudo se o torna mais complicado de ler para iniciantes.

Por outro lado, embora o operador walrus seja muito similar ao operador de atribuição \`=\`, seu uso não é consistente em todos os lugares. Por exemplo, o seguinte código não é correto usando \`:=\`:

\`\`\`python
# Incorreto
class Example:
    [(j := i) for i in range(5)]
# SyntaxError: assignment expression within a comprehension cannot be used in a class body
\`\`\`
`;
