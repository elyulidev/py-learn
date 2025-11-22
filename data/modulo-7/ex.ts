
export const m7Ex = `
# Exceções em Python

As exceções em Python são uma ferramenta muito potente que a grande maioria das linguagens de programação modernas possui. Trata-se de uma forma de controlar o comportamento de um programa quando ocorre um erro.

Isto é muito importante já que, salvo se tratarmos este erro, o programa irá parar, e isto é algo que em determinadas aplicações não é uma opção válida.

Imaginemos que temos o seguinte código com duas variáveis \`a\` e \`b\` e realizamos a divisão \`a/b\`.

\`\`\`python
a = 4
b = 2
c = a/b
\`\`\`

Mas imaginemos agora que, por qualquer motivo, as variáveis têm outro valor, e que por exemplo \`b\` tem o valor 0. Se tentarmos fazer a divisão por zero, este programa dará um erro e sua execução terminará de maneira abrupta.

\`\`\`python
a = 4
b = 0
print(a/b)
# ZeroDivisionError: division by zero
\`\`\`

Esse "erro" que dizemos que ocorreu é lançado pelo Python (*raise* em Inglês), já que a divisão por zero é uma operação que matematicamente não está definida.

Trata-se da exceção **ZeroDivisionError**. O Python possui uma lista extensa de exceções nativas.

Vejamos um exemplo com outra exceção. O que aconteceria se tentássemos somar um número com um texto? Evidentemente isto não tem nenhum sentido matemático, e o Python define uma exceção para isto chamada **TypeError**.

\`\`\`python
print(2 + "2")
# TypeError: unsupported operand type(s) for +: 'int' and 'str'
\`\`\`

Com base nisto, é muito importante controlar as exceções, porque por muitas verificações que realizemos, é possível que em algum momento ocorra uma, e se não fizermos nada, o programa irá parar.

Você imagina se um software de um avião, um trem ou um caixa eletrônico tivesse um erro que lançasse uma exceção e parasse por completo?

Uma primeira aproximação ao controle de exceções poderia ser o seguinte exemplo. Podemos realizar uma verificação manual de que não estamos dividindo por zero, para assim evitar ter um erro tipo \`ZeroDivisionError\`.

No entanto, é complicado escrever código que contemple e previna todo tipo de exceções. Para isso, veremos mais adiante o uso de \`except\`.

\`\`\`python
a = 5
b = 0
# Através desta verificação prevenimos que se divida por zero.
if b != 0:
    print(a/b)
else:
    print("Não se pode dividir!")
\`\`\`

## Uso de raise

Também podemos ser nós mesmos a levantar ou lançar uma exceção. Voltando aos exemplos usados anteriormente, podemos ser nós a levantar \`ZeroDivisionError\` ou \`NameError\` usando **raise**. A sintaxe é muito fácil.

\`\`\`python
raise ZeroDivisionError("Informação da exceção")
\`\`\`

Ou podemos lançar outra do tipo \`NameError\`.

\`\`\`python
raise NameError("Informação da exceção")
\`\`\`

Pode-se ver como a string que passamos é impressa ao lado da exceção. Pode-se chamar também sem nenhum parâmetro:

\`\`\`python
raise ZeroDivisionError
\`\`\`

Visto isto, já sabemos como uma exceção pode ser lançada. Existem duas maneiras principalmente:

1.  Fazemos uma operação que não pode ser realizada (como dividir por zero). Neste caso o Python encarrega-se de lançar automaticamente a exceção.
2.  Ou também podemos lançar nós mesmos uma exceção manualmente, usando \`raise\`.

Haveria um terceiro caso que seria lançar uma exceção customizada que não pertence às definidas por padrão no Python, mas veremos isso em outro capítulo.

A seguir, veremos o que podemos fazer para controlar estas exceções e o que fazer quando uma é lançada para que não se interrompa a execução do programa.

## Uso de try e except

A boa notícia é que as exceções que vimos antes podem ser capturadas e tratadas adequadamente, sem que o programa pare. Vejamos um exemplo com a divisão por zero.

\`\`\`python
a = 5
b = 0
try:
    c = a/b
except ZeroDivisionError:
    print("Não foi possível realizar a divisão")
\`\`\`

Neste caso não verificamos que \`b != 0\`. Diretamente tentamos realizar a divisão e, no caso de ser lançada a exceção \`ZeroDivisionError\`, nós a capturamos e tratamos adequadamente.

A diferença com o exemplo anterior é que agora o programa não para e pode continuar executando. O que há dentro do **try** é a seção do código que poderia lançar a exceção que está sendo capturada no **except**. Portanto, quando ocorrer uma exceção, entra-se no \`except\`, mas o programa não trava.

Também se pode capturar diferentes exceções como se vê no exemplo seguinte.

\`\`\`python
try:
    # c = 5/0      # Se descomentar isto entra em ZeroDivisionError
    d = 2 + "Olá"  # Se deixar assim entra em TypeError
except ZeroDivisionError:
    print("Não se pode dividir por zero!")
except TypeError:
    print("Problema de tipos!")
\`\`\`

Você pode também fazer com que um determinado número de exceções sejam tratadas da mesma maneira com o mesmo bloco de código, agrupando-as em uma tupla.

\`\`\`python
try:
    # c = 5/0
    d = 2 + "Olá"
except (ZeroDivisionError, TypeError):
    print("Exceção ZeroDivisionError ou TypeError")
\`\`\`

Outra forma, se você não sabe que exceção pode ocorrer, é usar a classe genérica **Exception**. Neste caso controla-se qualquer tipo de exceção. De fato, todas as exceções herdam de \`Exception\`.

\`\`\`python
try:
    d = 2 + "Olá"
except Exception:
    print("Houve uma exceção")
\`\`\`

No entanto, há uma forma de saber qual exceção ocorreu capturando a instância do erro com \`as\`.

\`\`\`python
try:
    d = 2 + "Olá"
except Exception as ex:
    print("Houve uma exceção de tipo", type(ex))
    # Imprime a mensagem de erro original
    print("Mensagem:", ex)

# Houve uma exceção de tipo <class 'TypeError'>
\`\`\`

## Uso de else

Ao já explicado \`try\` e \`except\`, podemos adicionar um bloco a mais: o **else**. Dito bloco será executado **se não ocorreu nenhuma exceção**. Observe a diferença entre os seguintes códigos.

\`\`\`python
try:
    # Forçamos uma exceção ao dividir por 0
    x = 2/0
except:
    print("Entra no except, ocorreu uma exceção")
else:
    print("Entra no else, não ocorreu nenhuma exceção")

# Saída: Entra no except, ocorreu uma exceção
\`\`\`

No entanto, no código seguinte a divisão pode ser realizada sem problema, pelo que o bloco \`except\` não se executa, mas o \`else\` sim.

\`\`\`python
try:
    # A divisão pode realizar-se sem problema
    x = 2/2
except:
    print("Entra no except, ocorreu uma exceção")
else:
    print("Entra no else, não ocorreu nenhuma exceção")

# Saída: Entra no else, não ocorreu nenhuma exceção
\`\`\`

## Uso de finally

Aos já vistos blocos \`try\`, \`except\` e \`else\`, podemos adicionar um último bloco: o **finally**. Dito bloco **executa-se sempre**, tenha havido ou não exceção.

Este bloco costuma ser usado se quisermos executar algum tipo de ação de limpeza ou liberação de recursos. Se por exemplo estamos escrevendo dados em um arquivo mas ocorre uma exceção, talvez queiramos fechar o arquivo corretamente para não deixar dados inconsistentes ou corrompidos.

No código seguinte vemos um exemplo. Haja ou não exceção, o código dentro de \`finally\` será executado.

\`\`\`python
try:
    # Forçamos exceção
    x = 2/0
except:
    # Entra-se já que houve uma exceção
    print("Entra no except, ocorreu uma exceção")
finally:
    # Também entra porque finally é executado sempre
    print("Entra no finally, executa-se o bloco finally")

# Saída:
# Entra no except, ocorreu uma exceção
# Entra no finally, executa-se o bloco finally
\`\`\`

## Exemplos Práticos

Um exemplo muito típico de exceções é no manejo de arquivos (ficheros). Tenta-se abrir, mas captura-se uma possível exceção. Se você consultar a documentação de \`open()\`, verá que \`OSError\` (ou \`FileNotFoundError\`) é lançada se o arquivo não puder ser aberto.

\`\`\`python
# Tenta-se abrir um arquivo e captura-se uma possível exceção
try:
    with open('arquivo_inexistente.txt') as file:
        read_data = file.read()
except:
    # Entra aqui se não pôde ser aberto
    print('Não foi possível abrir o arquivo')
\`\`\`

Como já comentamos, é uma boa prática especificar que tipo de exceção estamos tratando.

\`\`\`python
try:
    with open('arquivo.txt') as file:
        read_data = file.read()
# Capturamos uma exceção concreta
except OSError:
    print('OSError. Não foi possível abrir')
\`\`\`

Neste outro exemplo vemos o uso dos blocos \`try\`, \`except\`, \`else\` e \`finally\` todos juntos.

\`\`\`python
try:
    # Força exceção
    x = 2/0
except:
    print("Entra no except")
else:
    print("Entra no else")
finally:
    print("Entra no finally")
\`\`\`

Também se pode capturar uma exceção de tipo \`SyntaxError\`, que faz referência a erros de sintaxe no código. No entanto, o código deveria estar livre deste tipo de falhas antes de ser executado em produção, pelo que talvez você nunca devesse usar isso para controlar lógica de negócio.

\`\`\`python
try:
    # print("Olá")) # Erro de sintaxe intencional
    eval("print('Olá'))") # Forçando erro de sintaxe via eval
except SyntaxError:
    print("Há um erro de sintaxe")
\`\`\`
`;
