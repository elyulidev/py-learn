
export const m6Oop = `
# Programação Orientada a Objetos

Antes de mais nada, comecemos com uma introdução básica à Programação Orientada a Objetos (**POO** ou **OOP** em inglês). Trata-se de um paradigma de programação introduzido nos anos 1970, mas que não se tornou popular até anos mais tarde.

Este modo ou paradigma de programação nos permite organizar o código de uma maneira que se assemelha bastante a como pensamos na vida real, utilizando as famosas **classes**. Estas nos permitem agrupar um conjunto de variáveis e funções que veremos a seguir.

Coisas do cotidiano como um cachorro ou um carro podem ser representadas com classes. Estas classes têm diferentes características, que no caso do cachorro poderiam ser a idade, o nome ou a raça. Chamaremos estas características de **atributos**.

Por outro lado, as classes têm um conjunto de funcionalidades ou coisas que podem fazer. No caso do cachorro poderia ser andar ou latir. Chamaremos estas funcionalidades de **métodos**.

Por último, podem existir diferentes tipos de cachorro. Podemos ter um que se chama Toby ou o do vizinho que se chama Laika. Chamaremos estes diferentes tipos de cachorro de **objetos**. Ou seja, o conceito abstrato de cachorro é a classe, mas Toby ou qualquer outro cachorro particular será o objeto.

A programação orientada a objetos está baseada em 6 princípios ou pilares básicos:

1.  Herança
2.  Coesão
3.  Abstração
4.  Polimorfismo
5.  Acoplamento
6.  Encapsulamento

## Motivação

Uma vez explicada a programação orientada a objetos pode parecer bastante lógica, mas não é algo que tenha existido sempre, e de fato há muitas linguagens de programação que não a suportam.

Em parte surgiu devido à crescente complexidade a que os programadores iam se enfrentando conforme passavam os anos. No mundo da programação há grande quantidade de aplicações que realizam tarefas muito similares e é importante identificar os padrões que nos permitem não reinventar a roda. A programação orientada a objetos tentava resolver isso.

Um dos primeiros mecanismos que se criaram foram as **funções**, que permitem agrupar blocos de código que fazem uma tarefa específica sob um nome. Algo muito útil já que permite também reusar esses módulos ou funções sem ter que copiar todo o código, apenas a chamada.

As funções resultaram muito úteis, mas não eram capazes de satisfazer todas as necessidades dos programadores. Um dos problemas das funções é que só realizam umas operações com uns dados de entrada para entregar uma saída, mas não lhes importa muito conservar esses dados ou manter algum tipo de **estado**. Salvo que se devolva um valor na chamada à função ou se usem variáveis globais, tudo o que passa dentro da função fica esquecido, e isto em muitos casos é um problema.

Imaginemos que temos um jogo com naves espaciais movendo-se pela tela. Cada nave terá uma posição $(x,y)$ e outros parâmetros como o tipo de nave, sua cor ou tamanho. Sem fazer uso de classes e POO, teremos que ter uma variável para cada dado que queremos armazenar: coordenadas, cor, tamanho, tipo. O problema vem se temos 10 naves, já que poderíamos juntar um número muito elevado de variáveis. Todo um desastre.

Em resposta a isso surgiu a programação orientada a objetos. Uma ferramenta perfeita que permite resolver certo tipo de problemas de uma forma muito mais simples, com menos código e mais organizado. Agrupa sob uma classe um conjunto de variáveis e funções, que podem ser reutilizadas com características particulares criando objetos.

## Definindo classes

Vista já a parte teórica, vamos ver como podemos fazer uso da programação orientada a objetos em Python. O primeiro é criar uma classe, para isso usaremos o exemplo de cachorro.

\`\`\`python
# Criando uma classe vazia
class Cachorro:
    pass
\`\`\`

Trata-se de uma classe vazia e sem muita utilidade prática, mas é a mínima classe que podemos criar. Note o uso do \`pass\` que não faz realmente nada, mas daria um erro se depois dos \`:\` não tivéssemos conteúdo.

Agora que temos a classe, podemos criar um objeto da mesma. Podemos fazê-lo como se de uma variável normal se tratasse. Nome da variável igual à classe com \`()\`. Dentro dos parênteses iriam os parâmetros de entrada se os houvesse.

\`\`\`python
# Criamos um objeto da classe Cachorro
meu_cachorro = Cachorro()
\`\`\`

## Definindo atributos

A seguir vamos adicionar alguns atributos à nossa classe. Antes de nada é importante distinguir que existem dois tipos de atributos:

1.  **Atributos de instância:** Pertencem à instância da classe ou ao objeto. São atributos particulares de cada instância, no nosso caso de cada cachorro.
2.  **Atributos de classe:** Trata-se de atributos que pertencem à classe, portanto serão comuns para todos os objetos.

Comecemos criando um par de atributos de instância para nosso cachorro, o nome e a raça. Para isso criamos um método \`__init__\` que será chamado automaticamente quando criarmos um objeto. Se trata do **construtor**.

\`\`\`python
class Cachorro:
    # O método __init__ é chamado ao criar o objeto
    def __init__(self, nome, raca):
        print(f"Criando cachorro {nome}, {raca}")

        # Atributos de instância
        self.nome = nome
        self.raca = raca
\`\`\`

Agora que definimos o método init com dois parâmetros de entrada, podemos criar o objeto passando o valor dos atributos. Usando \`type()\` podemos ver como efetivamente o objeto é da classe \`Cachorro\`.

\`\`\`python
meu_cachorro = Cachorro("Toby", "Bulldog")
print(type(meu_cachorro))

# Saída:
# Criando cachorro Toby, Bulldog
# <class '__main__.Cachorro'>
\`\`\`

Seguramente você tenha notado o **\`self\`** que se passa como parâmetro de entrada do método. É uma variável que representa a instância da classe, e deverá estar sempre aí.

O uso de \`__init__\` e o duplo \`__\` não é uma coincidência. Quando você vir um método com essa forma, significa que está reservado para um uso especial da linguagem. Neste caso seria o que se conhece como construtor. Há gente que chama a estes métodos de **métodos mágicos** ou *dunder methods*.

Por último, podemos acessar os atributos usando o objeto e o ponto \`.\`.

\`\`\`python
print(meu_cachorro.nome) # Toby
print(meu_cachorro.raca)   # Bulldog
\`\`\`

Até agora definimos atributos de instância. Agora vamos definir um **atributo de classe**, que será comum para todos os cachorros. Por exemplo, a espécie dos cachorros é algo comum para todos os objetos Cachorro.

\`\`\`python
class Cachorro:
    # Atributo de classe
    especie = 'mamífero'

    def __init__(self, nome, raca):
        print(f"Criando cachorro {nome}, {raca}")
        self.nome = nome
        self.raca = raca
\`\`\`

Dado que é um atributo de classe, não é necessário criar um objeto para acessar o atributo. Podemos fazer o seguinte:

\`\`\`python
print(Cachorro.especie)
# mamífero
\`\`\`

Pode-se acessar também o atributo de classe desde o objeto.

\`\`\`python
meu_cachorro = Cachorro("Toby", "Bulldog")
print(meu_cachorro.especie)
# 'mamífero'
\`\`\`

Desta maneira, todos os objetos que se criem da classe cachorro compartilharão esse atributo de classe.

## Definindo métodos

Na realidade quando usamos \`__init__\` anteriormente já estávamos definindo um método, só que um especial. A seguir vamos ver como definir métodos que deem alguma funcionalidade interessante à nossa classe, seguindo com o exemplo de cachorro.

Vamos codificar dois métodos, \`latir\` e \`caminhar\`. O primeiro não receberá nenhum parâmetro e o segundo receberá o número de passos que queremos andar. Como indicamos anteriormente \`self\` faz referência à instância da classe. Pode-se definir um método com \`def\` e o nome, e entre \`()\` os parâmetros de entrada que recebe, onde sempre terá que estar \`self\` o primeiro.

\`\`\`python
class Cachorro:
    especie = 'mamífero'

    def __init__(self, nome, raca):
        print(f"Criando cachorro {nome}, {raca}")
        self.nome = nome
        self.raca = raca

    def latir(self):
        print("Au Au")

    def caminhar(self, passos):
        print(f"Caminhando {passos} passos")
\`\`\`

Portanto, se criamos um objeto \`meu_cachorro\`, poderemos fazer uso de seus métodos chamando-os com \`.\` e o nome do método. Como se de uma função se tratasse, podem receber e devolver argumentos.

\`\`\`python
meu_cachorro = Cachorro("Toby", "Bulldog")
meu_cachorro.latir()
meu_cachorro.caminhar(10)

# Saída:
# Criando cachorro Toby, Bulldog
# Au Au
# Caminhando 10 passos
\`\`\`
`;
