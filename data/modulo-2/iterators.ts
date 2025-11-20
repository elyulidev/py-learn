
export const m2Iterators = `
# Iteradores e Iteráveis

Se você já entende o uso do \`while\` e do \`for\`, então sem dúvida está pronto para continuar com os iteráveis. São ferramentas muito potentes do Python que nos permitem, como o nome indica, iterar coleções.

Antes de mais nada, vamos colocar o problema que queremos resolver. Temos uma coleção de dados (uma lista) e queremos mostrar seus valores um a um na tela.

## A evolução do loop

Se você vem de outras linguagens ou está começando, talvez resolvesse assim:

\`\`\`python
# Mau uso (Não recomendado)
lista = [5, 4, 9, 2]
i = 0
while i < len(lista):
    elemento = lista[i]
    print(elemento)
    i += 1
# Saída: 5, 4, 9, 2
\`\`\`

Embora seja uma solução válida, podemos melhorar usando um \`for\` com \`range\`:

\`\`\`python
# Mau uso (Ainda não é o ideal)
lista = [5, 4, 9, 2]
for i in range(len(lista)):
    elemento = lista[i]
    print(elemento)
# Saída: 5, 4, 9, 2
\`\`\`

Mas em Python existe uma forma muito mais fácil, elegante e "pythônica" de iterar uma lista:

\`\`\`python
# Forma Pythônica
lista = [5, 4, 9, 2]
for elemento in lista:
    print(elemento)
# Saída: 5, 4, 9, 2
\`\`\`

Sem saber, você já fez uso dos iteradores, usando a classe lista que é uma classe iterável. Vamos entender o que isso significa.

## Iteráveis (Iterables)

Uma classe **iterável** é uma classe que pode ser iterada. Dentro do Python há grande quantidade de classes iteráveis como as listas, strings, dicionários ou arquivos. Se temos uma classe iterável, podemos usá-la à direita do \`for\` da seguinte maneira:

\`\`\`python
# for elemento in [classe_iteravel]:
#   ...
\`\`\`

A variável \`elemento\` irá assumindo os valores de cada item presente na classe iterável.

### Exemplo com Strings
Anteriormente vimos um exemplo iterando uma lista, mas também podemos iterar uma string. Ao fazer isso, obtemos cada letra presente nela.

\`\`\`python
cadeia = "Ola"
for c in cadeia:
    print(c)
# Saída: O l a
\`\`\`

### Como saber se é iterável?

Talvez você se pergunte: como sei se uma classe é iterável ou não?
1.  Consultando a documentação oficial.
2.  Verificando se a classe herda de \`Iterable\` (usando \`isinstance\`).

\`\`\`python
from collections.abc import Iterable

cadena = "Ola"
numero = 3
print("cadena:", isinstance(cadena, Iterable)) # True
print("numero:", isinstance(numero, Iterable)) # False
\`\`\`

Podemos ver que a string é iterável e o número não. É por isso que o código \`for x in numero:\` daria um erro \`TypeError\`.

### Métodos úteis para iteráveis

Python nos oferece métodos que funcionam sobre classes iteráveis:
*   \`list()\`: Converte um iterável em lista.
*   \`sum()\`: Soma os elementos.
*   \`join()\`: Une elementos de um iterável com uma string separadora.

\`\`\`python
print(list("Ola"))      # ['O', 'l', 'a']
print(sum([1, 2, 3]))   # 6
print("-".join("Ola"))  # O-l-a
\`\`\`

### Iterando Dicionários
O iterador padrão de um dicionário devolve as suas **chaves** (keys).

\`\`\`python
mi_dict = {'a':1, 'b':2, 'c':3}
for i in mi_dict:
    print(i)
# Saída: a, b, c
\`\`\`

## Iteradores (Iterators)

Podemos explicar a diferença entre iteradores e iteráveis usando um **livro** como analogia:
1.  **O Livro (Iterável):** Tem diferentes páginas (dados) às quais podemos acessar, mas o livro em si não sabe qual página você está lendo agora.
2.  **O Marcador de Página (Iterador):** É uma referência que nos indica em que posição estamos do livro e que pode ser usado para "navegar" por ele (ir para a próxima página).

É possível obter um iterador a partir de uma classe iterável com a função \`iter()\`.

\`\`\`python
livro = ['página1', 'página2', 'página3', 'página4']
marcador = iter(livro)
\`\`\`

Agora, nosso \`marcador\` armazena um iterador. Usando a função \`next()\` sobre o iterador, podemos ir acessando sequencialmente cada elemento.

\`\`\`python
print(next(marcador)) # página1
print(next(marcador)) # página2
print(next(marcador)) # página3
print(next(marcador)) # página4
\`\`\`

### StopIteration

O que acontece se tentarmos ler mais uma página quando o livro acabou? Uma exceção \`StopIteration\` é lançada.

\`\`\`python
# print(next(marcador)) 
# Saída: StopIteration
\`\`\`

É exatamente isso que o loop \`for\` faz "por baixo dos panos": ele cria um iterador e chama \`next()\` repetidamente até que o erro \`StopIteration\` ocorra, momento em que ele para o loop silenciosamente.

> **Nota:** O iterador só pode ir para frente. Não é possível retroceder.

## Criando sua própria classe iterável

Se você quiser dar um passo além e definir sua própria classe que possa ser usada em um \`for\`, você precisa implementar o método mágico \`__iter__()\`.

Vamos criar uma classe que simplesmente encapsula uma lista:

\`\`\`python
class MinhaClasse:
    def __init__(self, items):
        self.lista = items
        
    def __iter__(self):
        # Deve retornar um iterador. 
        # Aqui retornamos o iterador da própria lista interna.
        return iter(self.lista)
\`\`\`

Agora podemos usar nossa classe em um loop:

\`\`\`python
meu_objeto = MinhaClasse([5, 4, 3])
for item in meu_objeto:
    print(item)

# Saída: 5, 4, 3
\`\`\`

Embora este exemplo seja simples, ele ilustra o fundamento de como construir estruturas de dados complexas que se comportam nativamente dentro da sintaxe do Python.
`;
