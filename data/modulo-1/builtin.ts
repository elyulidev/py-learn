
export const m1Builtin = `
# Funções Built-in (Embutidas)

O interpretador Python possui uma série de funções e tipos incluídos nele que estão **sempre disponíveis**. Elas estão pré-carregadas no namespace global, o que significa que, diferentemente de módulos como \`math\` ou \`random\`, você não precisa importar nada para usá-las.

Atualmente, existem cerca de 70 funções built-in. Vamos categorizar as mais importantes para o nosso contexto.

## 1. Funções Matemáticas

Como matemáticos, estas funções são fundamentais para operações aritméticas básicas e conversão de números.

### \`abs(x)\`
Retorna o valor absoluto de um número. Se o argumento for um número complexo, retorna o seu módulo (magnitude).

\`\`\`python
print(abs(-10))      # 10
print(abs(-3.14))    # 3.14
print(abs(3 + 4j))   # 5.0 (Módulo do vetor)
\`\`\`

### \`divmod(a, b)\`
Recebe dois números e retorna um par (tupla) consistindo no quociente e no resto da divisão inteira. É muito útil para aritmética modular e algoritmos como o de Euclides.

\`\`\`python
q, r = divmod(20, 3)
print(f"Quociente: {q}, Resto: {r}") 
# Quociente: 6, Resto: 2
# Equivalente a: (20 // 3, 20 % 3)
\`\`\`

### \`pow(base, exp, mod=None)\`
Retorna a base elevada ao expoente. Se o terceiro argumento \`mod\` estiver presente, retorna a base elevada ao expoente, módulo \`mod\`.
A forma com 3 argumentos \`pow(base, exp, mod)\` é muito mais eficiente computacionalmente do que \`(base ** exp) % mod\`.

\`\`\`python
print(pow(2, 3))    # 8
print(pow(2, 3, 5)) # 3 (pois 8 % 5 = 3)
\`\`\`

### \`round(number, ndigits=None)\`
Arredonda um número para uma determinada precisão em dígitos decimais.

\`\`\`python
print(round(3.14159, 2)) # 3.14
print(round(2.675, 2))   # 2.67 (Nota: Cuidado com arredondamento de ponto flutuante!)
\`\`\`

### \`sum(iterable, start=0)\`
Soma os itens de um iterável (como uma lista) e retorna o total.

\`\`\`python
numeros = [1, 2, 3, 4, 5]
print(sum(numeros))      # 15
print(sum(numeros, 10))  # 25 (inicia a soma em 10)
\`\`\`

---

## 2. Iteráveis e Sequências

Ferramentas essenciais para manipular listas, tuplas e loops.

### \`len(s)\`
Retorna o comprimento (o número de itens) de um objeto. O argumento pode ser uma sequência (string, lista, tupla) ou uma coleção (dicionário, set).

\`\`\`python
print(len("Python"))      # 6
print(len([10, 20, 30]))  # 3
\`\`\`

### \`range(start, stop, step)\`
Gera uma sequência imutável de números. É a base dos loops \`for\`.

\`\`\`python
print(list(range(5)))        # [0, 1, 2, 3, 4]
print(list(range(1, 10, 2))) # [1, 3, 5, 7, 9]
\`\`\`

### \`enumerate(iterable, start=0)\`
Retorna um objeto enumerado. Útil para obter o índice e o valor ao mesmo tempo em um loop.

\`\`\`python
letras = ['a', 'b', 'c']
for indice, valor in enumerate(letras):
    print(f"Índice {indice}: {valor}")
\`\`\`

### \`zip(*iterables)\`
Cria um iterador que agrega elementos de cada um dos iteráveis. Para matemáticos: pense nisso como criar pares ordenados $(x_i, y_i)$ a partir de dois vetores $X$ e $Y$.

\`\`\`python
x = [1, 2, 3]
y = [4, 5, 6]
coordenadas = list(zip(x, y)) 
print(coordenadas) # [(1, 4), (2, 5), (3, 6)]
\`\`\`

### \`sorted(iterable, key=None, reverse=False)\`
Retorna uma **nova** lista ordenada a partir dos itens de qualquer iterável.

\`\`\`python
dados = [3, 1, 4, 1, 5]
print(sorted(dados)) # [1, 1, 3, 4, 5]
\`\`\`

---

## 3. Lógica e Quantificadores

Estas funções mapeiam diretamente para quantificadores lógicos matemáticos.

### \`all(iterable)\`
Retorna \`True\` se **todos** os elementos do iterável forem verdadeiros (ou se o iterável estiver vazio). Equivalente ao **Quantificador Universal** ($\forall$).

\`\`\`python
print(all([True, True, True]))  # True
print(all([True, False, True])) # False (nem todos são True)
\`\`\`

### \`any(iterable)\`
Retorna \`True\` se **pelo menos um** elemento do iterável for verdadeiro. Equivalente ao **Quantificador Existencial** ($\exists$).

\`\`\`python
print(any([False, False, True])) # True
print(any([False, False]))       # False
\`\`\`

---

## 4. Programação Funcional

### \`map(function, iterable)\`
Aplica a função a cada item do iterável e retorna um iterador com os resultados.

\`\`\`python
def quadrado(x):
    return x ** 2

# Aplica a função quadrado a cada item da lista
resultado = map(quadrado, [1, 2, 3, 4])
print(list(resultado)) # [1, 4, 9, 16]
\`\`\`

### \`filter(function, iterable)\`
Constrói um iterador a partir dos elementos do iterável para os quais a função retorna verdadeiro.

\`\`\`python
# Filtra apenas números maiores que 0
numeros = [-1, 2, -3, 4]
positivos = filter(lambda x: x > 0, numeros)
print(list(positivos)) # [2, 4]
\`\`\`

---

## 5. Inspeção e Conversão de Tipos

### Funções Construtoras (Casting)
Usadas para converter tipos de dados.
*   \`int()\`: Converte para inteiro.
*   \`float()\`: Converte para ponto flutuante.
*   \`str()\`: Converte para string.
*   \`list()\`, \`tuple()\`, \`set()\`, \`dict()\`: Criam coleções.

### \`type(object)\`
Retorna o tipo do objeto.

\`\`\`python
print(type(10)) # <class 'int'>
\`\`\`

### \`isinstance(object, classinfo)\`
Verifica se um objeto é uma instância de uma classe (ou de uma subclasse dela). Recomendado sobre o uso de \`type()\`.

\`\`\`python
print(isinstance(10, int)) # True
\`\`\`

### \`id(object)\`
Retorna a "identidade" do objeto (geralmente o endereço de memória em CPython).

---

## 6. Outras Úteis

### \`input(prompt)\`
Lê uma linha da entrada (teclado), converte-a para uma string e a retorna.

\`\`\`python
nome = input("Digite seu nome: ")
\`\`\`

### \`print(*objects, sep=' ', end='\\n')\`
Imprime objetos no fluxo de saída de texto.

\`\`\`python
print("A", "B", "C", sep="-") # A-B-C
\`\`\`

### \`help(object)\`
Invoca o sistema de ajuda integrado. Tente executar \`help(len)\` no seu console interativo!

### \`dir(object)\`
Sem argumentos, retorna a lista de nomes no escopo local atual. Com um argumento, tenta retornar uma lista de atributos válidos para esse objeto. Muito útil para descobrir métodos de um objeto desconhecido.
`;
