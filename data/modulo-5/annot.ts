
export const m5Annot = `
# Anotações em Funções (Type Hints)

As **anotações de função** (*function annotations*) em Python permitem adicionar metadados indicando o tipo esperado dos argumentos de entrada e do valor de retorno de uma função.

Abaixo podemos ver um exemplo com a função \`soma()\`, que recebe dois argumentos \`a\` e \`b\`, cujo tipo se espera que seja \`int\`.

\`\`\`python
def soma(a: int, b: int) -> int:
    return a + b

print(soma(7, 3))
# Saída: 10
\`\`\`

No entanto, é muito importante notar que o **Python ignora as anotações em tempo de execução**. Ou seja, são uma mera nota no código que indica o tipo esperado, mas o seguinte código não daria nenhum erro ao ser executado, embora os tipos não correspondam.

\`\`\`python
soma(7.0, 3.0) # Funciona, apesar de serem floats
\`\`\`

As anotações em funções foram introduzidas na **PEP 3107** para Python 3, e mais tarde introduziu-se a **PEP 484** especificando a semântica padrão que se deve usar (o que conhecemos hoje como *Type Hinting*).

## Motivação e Necessidade

Python é uma linguagem de programação com **tipagem dinâmica** e *duck typing*, o que significa que não se importa com os tipos (\`int\`, \`string\`, etc.) desde que o objeto suporte as operações realizadas. Precisamente isso é o que faz que o seguinte código funcione com qualquer tipo:

\`\`\`python
def imprime(var):
    print(var)

imprime(1.0)      # 1.0
imprime(3)        # 3
imprime("Python") # Python
\`\`\`

No entanto, em certas ocasiões isso nos pode trazer problemas. E se quisermos que a função \`imprime\` só aceite que \`var\` seja de um tipo concreto? As anotações nos permitem especificar os tipos que se esperam receber, servindo como documentação viva e base para ferramentas de verificação.

## Exemplos de Function Annotations

Antes de tudo, é importante notar que as anotações em funções não definem *per se* uma semântica própria. Ou seja, tecnicamente podemos escrever o que quisermos depois de cada argumento. As anotações podem ser acessadas em tempo de execução usando o atributo \`__annotations__\`.

\`\`\`python
def soma(a: 'parametro 1', b: 'parametro 2') -> 'retorno':
    return a + b

print(soma.__annotations__)
# Saída:
# {'a': 'parametro 1',
#  'b': 'parametro 2',
#  'return': 'retorno'}
\`\`\`

Embora, como dissemos, se possam realizar anotações arbitrárias (strings), o padrão da indústria é usar tipos do Python como \`int\`, \`str\` ou \`float\`.

No exemplo seguinte podemos ver como se combina uma anotação com um **valor padrão** (\`=[]\`).

\`\`\`python
def filtrar_pares(saida: list = []) -> list:
    return [i for i in saida if i % 2 == 0]

print(filtrar_pares([1, 2, 3, 4, 5, 6]))
# Saída: [2, 4, 6]
\`\`\`

Também é possível usar como anotações **classes** definidas por nós, como \`ClasseA\`.

\`\`\`python
class ClasseA:
    pass

def funcao(a: ClasseA) -> ClasseA:
    return a

obj = ClasseA()
funcao(obj)
\`\`\`

### Anotações em Variáveis

Por último, as anotações não estão limitadas aos argumentos das funções, mas também podem ser atribuídas a variáveis que declaremos.

\`\`\`python
pi: float = 3.14

print(pi)
# Saída: 3.14
\`\`\`

No entanto, lembre-se: o Python não gera erro se os tipos não corresponderem.

\`\`\`python
# Aviso: Não seria correto semanticamente, mas Python não dá erro
pi: int = 3.14

print(pi)
# Saída: 3.14
\`\`\`

Então você pode se perguntar: para que servem as *function annotations* se o Python as ignora? A resposta está na **análise estática**.

## Uso de mypy e Static Type Checking

Uma primeira forma de verificar se as funções são chamadas com os parâmetros corretos seria fazer verificações manuais dentro da função (usando \`isinstance\`), mas isso é ineficiente e ocorre em tempo de execução (quando o código já está rodando).

A maneira correta e profissional é usar ferramentas como o **mypy**, que nos permitem fazer uma **análise estática** dos tipos. Isso significa que ele detecta o erro **antes** de o código ser executado.

Podemos instalá-lo via pip:

\`\`\`bash
pip install mypy
\`\`\`

Voltando ao exemplo anterior da soma, podemos ver como o seguinte código passaria nas verificações do \`mypy\`.

\`\`\`python
# arquivo: soma_correta.py
def soma(a: int, b: int) -> int:
    return a + b

print(soma(7, 3))
\`\`\`

Ao executar o comando no terminal:
\`\`\`bash
$ mypy soma_correta.py 
Success: no issues found in 1 source file
\`\`\`

No entanto, se mudarmos os tipos dos parâmetros de entrada para algo incorreto:

\`\`\`python
# arquivo: soma_incorreta.py
def soma(a: int, b: int) -> int:
    return a + b

print(soma(7.0, "3"))
\`\`\`

O \`mypy\` detectará o erro e nos avisará:

\`\`\`bash
$ mypy soma_incorreta.py
suma_incorrecta.py:5: error: Argument 1 to "suma" has incompatible type "float"; expected "int"
suma_incorrecta.py:5: error: Argument 2 to "suma" has incompatible type "str"; expected "int"
Found 2 errors in 1 file (checked 1 source file)
\`\`\`

Como indicamos, a vantagem do \`mypy\` é que realiza uma análise estática. Isso é crucial para grandes projetos de software, pois garante a integridade dos dados e funciona como uma "cola" que mantém o sistema consistente sem o custo de performance de verificar tipos enquanto o programa roda.
`;
