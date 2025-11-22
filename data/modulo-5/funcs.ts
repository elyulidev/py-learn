
export const m5Funcs = `
# Funções em Python

Anteriormente, usamos funções nativas que vêm com o Python, como \`len()\` para calcular o comprimento de uma lista, mas, assim como em outras linguagens de programação, também podemos definir nossas próprias funções. Para isso, fazemos uso da palavra-chave **\`def\`**.

\`\`\`python
def nome_funcao(argumentos):
    codigo
    return retorno
\`\`\`

Qualquer função terá um nome, argumentos de entrada, um código a executar e parâmetros de saída. Assim como as **funções matemáticas**, na programação elas nos permitem realizar diferentes operações com a entrada para entregar uma determinada saída que dependerá do código que escrevermos dentro.

Portanto, é totalmente análogo ao clássico $y=f(x)$ da matemática.

\`\`\`python
def f(x):
    return 2 * x

y = f(3)
print(y) # 6
\`\`\`

Algo que diferencia, de certo modo, as funções no mundo da programação, é que não apenas realizam uma operação com suas entradas, mas também partem dos seguintes princípios:

1.  **Princípio da Reusabilidade:** Se tivermos um fragmento de código usado em muitos lugares, a melhor solução seria passá-lo para uma função. Isso evita código repetido e facilita a modificação (basta mudar em um único lugar).
2.  **Princípio da Modularidade:** Em vez de escrever longos trechos de código, é melhor criar módulos ou funções que agrupem certos fragmentos em funcionalidades específicas, tornando o código resultante mais fácil de ler e manter.

## Passando argumentos de entrada

Comecemos pela função mais simples de todas. Uma função sem parâmetros de entrada nem de saída.

\`\`\`python
def diga_ola():
    print("Olá")
\`\`\`

Uma vez declarada (definida) a função, o próximo passo é chamá-la.

\`\`\`python
diga_ola() # Olá
\`\`\`

Vamos complicar um pouco as coisas passando um argumento de entrada. Agora, se passarmos um nome como entrada, imprimirá "Olá" seguido do nome.

\`\`\`python
def diga_ola(nome):
    print("Olá", nome)

diga_ola("João")
# Olá João
\`\`\`

O Python permite passar argumentos de várias formas. A seguir, explicamos todas elas.

### Argumentos por posição

Os **argumentos posicionais** são a forma mais básica e intuitiva de passar parâmetros. Se tivermos uma função \`subtrai()\` que aceita dois parâmetros, ela pode ser chamada como mostrado abaixo.

\`\`\`python
def subtrai(a, b):
    return a - b

subtrai(5, 3) # 2
\`\`\`

Ao tratar-se de parâmetros posicionais, interpretar-se-á que o primeiro número é o \`a\` e o segundo o \`b\`. O número de parâmetros é fixo, portanto, se tentarmos chamar a função com apenas um, ocorrerá um erro.

\`\`\`python
# subtrai(1) # Erro! TypeError
\`\`\`

Também não é possível usar mais argumentos do que a função tem definidos.

\`\`\`python
# TypeError: subtrai() takes 2 positional arguments but 3 were given
# subtrai(5, 4, 3) # Erro
\`\`\`

### Argumentos por nome (Keyword Arguments)

Outra forma de chamar uma função é usando o nome do argumento com \`=\` e seu valor. O código seguinte faz o mesmo que o anterior, com a diferença de que a ordem não importa mais.

\`\`\`python
subtrai(a=3, b=5) # -2
\`\`\`

Ao indicar na chamada o nome da variável e o valor, podemos alterar a ordem:

\`\`\`python
subtrai(b=5, a=3) # -2
\`\`\`

Como é de se esperar, se indicarmos um argumento que não foi definido na função, teremos um erro.

\`\`\`python
# subtrai() got an unexpected keyword argument 'c'
# subtrai(b=5, c=3) # Erro!
\`\`\`

### Argumentos por padrão (Default)

Talvez queiramos ter uma função com algum parâmetro opcional, que possa ser usado ou não dependendo das circunstâncias. Para isso, podemos atribuir um **valor padrão** (default) na definição da função.

No caso seguinte, \`c\` valerá zero, a menos que se indique o contrário.

\`\`\`python
def soma(a, b, c=0):
    return a + b + c

print(soma(5, 5, 3)) # 13
\`\`\`

Como o parâmetro \`c\` tem um valor padrão, a função pode ser chamada sem ele.

\`\`\`python
print(soma(4, 3)) # 7
\`\`\`

Podemos até atribuir um valor padrão a todos os parâmetros:

\`\`\`python
def soma(a=3, b=5, c=0):
    return a + b + c

print(soma()) # 8
\`\`\`

As seguintes chamadas também são válidas:

\`\`\`python
soma(1)       # 6 (a=1, b=5, c=0)
soma(4, 5)    # 9 (a=4, b=5, c=0)
soma(5, 3, 2) # 10
soma(a=5, b=3) # 8
\`\`\`

### Argumentos de comprimento variável (*args)

Imagine que queremos uma função \`soma()\` que some **todos** os números passados, sem importar se são 3 ou 100.

O Python tem uma ferramenta muito poderosa para isso. Se declararmos um argumento com um asterisco \`*\`, isso fará com que os argumentos passados sejam "empacotados" em uma **tupla** automaticamente.

> **Nota:** Não confunda o \`*\` com ponteiros em C/C++. Aqui ele serve para *packing/unpacking*.

\`\`\`python
def soma(*numeros):
    print(type(numeros))
    # <class 'tuple'>
    
    total = 0
    for n in numeros:
        total += n
    return total

print(soma(1, 3, 5, 4)) # 13
\`\`\`

O resultado é a soma de todos, e \`numeros\` é tratado internamente como uma tupla. Podemos fazer chamadas com qualquer quantidade de argumentos:

\`\`\`python
print(soma(6)) # 6
print(soma(6, 4, 10)) # 20
\`\`\`

### Argumentos de comprimento variável com chave (**kwargs)

Usando dois asteriscos \`**\`, é possível ter como parâmetro de entrada um número variável de argumentos nomeados, que serão armazenados em um **dicionário**.

\`\`\`python
def soma(**kwargs):
    soma = 0
    for key, value in kwargs.items():
        print(key, value)
        soma += value
    return soma

print(soma(a=5, b=20, c=23)) # 48
\`\`\`

Também podemos passar um dicionário já existente usando o operador de *unpacking* \`**\`:

\`\`\`python
di = {'a': 10, 'b': 20}
print(soma(**di)) # 30
\`\`\`

## Sentença return

O uso da sentença **return** permite realizar duas coisas:
1.  Sair da função e transferir a execução de volta para onde a chamada foi feita.
2.  Devolver um ou vários valores resultantes da execução.

Quanto ao primeiro ponto, o código que vem depois do return **não é executado** (código morto).

\`\`\`python
def minha_funcao():
    print("Entra na função")
    return
    print("Não chega aqui")

minha_funcao() # Entra na função
\`\`\`

Por outro lado, podemos devolver valores. Geralmente, funções são chamadas para realizar cálculos baseados em uma entrada, então é interessante devolver esse resultado.

\`\`\`python
def diga_ola():
    return "Olá"

print(diga_ola()) # 'Olá'
\`\`\`

### Retornando múltiplos valores

Em Python, é possível devolver mais de uma variável, separadas por vírgulas. Na verdade, o Python está devolvendo uma **tupla**, que podemos desempacotar na chamada.

\`\`\`python
def soma_e_media(a, b, c):
    soma = a + b + c
    media = soma / 3
    return soma, media

s, m = soma_e_media(9, 6, 3)
print(s)  # 18
print(m)  # 6.0
\`\`\`

## Documentação (Docstrings)

Agora que já temos nossas funções, é importante documentá-las para que outros (ou nós mesmos no futuro) saibam como usá-las.

Para isso, usamos aspas triplas \`"""\` logo no início da função. Isso é conhecido como **docstring**.

\`\`\`python
def minha_funcao_soma(a, b):
    """
    Descrição da função. Como deve ser usada,
    que parâmetros aceita e o que devolve.
    """
    return a + b
\`\`\`

Agora, qualquer pessoa pode chamar a função \`help()\` e ver essa documentação.

\`\`\`python
help(minha_funcao_soma)
\`\`\`

Ou acessar o atributo \`__doc__\`:

\`\`\`python
print(minha_funcao_soma.__doc__)
\`\`\`

> **Para saber mais:** A PEP 257 define convenções sobre como escrever boas docstrings.

## Anotações em Funções (Type Hints)

Uma funcionalidade moderna (Python 3.5+) são as **Function Annotations**. Elas permitem adicionar metadados indicando os tipos esperados de entrada e saída.

\`\`\`python
def multiplica_por_3(numero: int) -> int:
    return numero * 3

print(multiplica_por_3(6)) # 18
\`\`\`

As anotações são úteis para documentação e ferramentas de análise estática (como *mypy*), mas **não impõem restrições em tempo de execução**. O Python continua sendo dinâmico.

\`\`\`python
# Isso NÃO gera erro em tempo de execução, embora a anotação diga int
print(multiplica_por_3("Cadeia")) 
# 'CadeiaCadeiaCadeia'
\`\`\`
`;
