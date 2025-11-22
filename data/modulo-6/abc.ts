
export const m6Abc = `
# Interfaces e Abstract Base Classes (ABC)

Na programação orientada a objetos, uma interface define o conjunto de métodos que um objeto deve ter para que possa cumprir uma determinada função em nosso sistema. Dito de outra maneira, uma interface define como um objeto se comporta e o que se pode fazer com ele.

Pense no controle remoto da televisão. Todos os controles nos oferecem a mesma interface com as mesmas funcionalidades ou métodos. Em pseudocódigo, poderíamos escrever sua interface como:

\`\`\`python
# Pseudocódigo
interface Controle{
    def proximo_canal():
    def canal_anterior():
    def aumentar_volume():
    def diminuir_volume():
}
\`\`\`

É importante notar que as interfaces não possuem uma implementação *per se*, ou seja, não levam código associado. A interface foca no **o quê** e não no **como**.

Diz-se então que uma determinada classe **implementa** uma interface quando adiciona código aos métodos que não o tinham (denominados abstratos). Ou seja, implementar uma interface consiste em passar do "o que se faz" para o "como se faz".

Poderíamos dizer então que os controles da Samsung e LG implementam nossa interface \`Controle\`, já que ambos têm os métodos definidos, mas com implementações diferentes. Isso ocorre porque cada empresa resolve o mesmo problema com uma abordagem diferente, mas o que se oferece visto do exterior é o mesmo.

Embora veremos mais adiante, já podemos adiantar que o Python não possui a palavra-chave \`interface\` como outras linguagens de programação (como Java). Apesar disso, existem duas formas de definir interfaces em Python:

1.  **Interfaces informais**
2.  **Interfaces formais**

Dependendo da magnitude e tipo do projeto em que trabalhamos, é possível que as interfaces informais sejam suficientes. No entanto, às vezes não bastam, e é onde entram as interfaces formais e as metaclasses, ambos conceitos bastante avançados.

## Interfaces informais

As interfaces informais podem ser definidas com uma simples classe que não implementa os métodos. Voltando ao exemplo do nosso controle remoto, poderíamos escrevê-lo em Python como:

\`\`\`python
class Controle:
    def proximo_canal(self):
        pass
    def canal_anterior(self):
        pass
    def aumentar_volume(self):
        pass
    def diminuir_volume(self):
        pass
\`\`\`

Uma vez definida nossa interface informal, podemos usá-la mediante herança. As classes \`ControleSamsung\` e \`ControleLG\` implementam a interface \`Controle\` com código particular nos métodos. Lembre-se, passamos do "o que faz" para o "como se faz".

\`\`\`python
class ControleSamsung(Controle):
    def proximo_canal(self):
        print("Samsung->Próximo")
    def canal_anterior(self):
        print("Samsung->Anterior")
    def aumentar_volume(self):
        print("Samsung->Aumentar")
    def diminuir_volume(self):
        print("Samsung->Diminuir")
\`\`\`

Analogamente criamos \`ControleLG\`.

\`\`\`python
class ControleLG(Controle):
    def proximo_canal(self):
        print("LG->Próximo")
    def canal_anterior(self):
        print("LG->Anterior")
    def aumentar_volume(self):
        print("LG->Aumentar")
    def diminuir_volume(self):
        print("LG->Diminuir")
\`\`\`

Como dissemos, isso é uma solução perfeitamente válida na maioria dos casos, mas existe um problema com o qual você entenderá perfeitamente por que chamamos isso de interface informal.

Ao herdar da classe \`Controle\`, não se obriga \`ControleSamsung\` ou \`ControleLG\` a implementar todos os métodos. Ou seja, ambas as classes poderiam não ter código para todos os métodos, e isso é algo que pode causar problemas.

O raciocínio é o seguinte: Se \`Controle\` é uma interface que, como tal, não implementa nenhum método (apenas define os métodos), não seria importante assegurar que as classes que usam essa interface implementem os métodos?

Se um método fica sem implementar, poderíamos ter problemas no futuro, já que ao chamar tal método não teríamos código para executar. É certo que se poderia resolver trocando \`pass\` por \`raise NotImplementedError()\`, mas o erro só seria obtido em tempo de execução.

Até aqui as interfaces informais. Note que este tipo de interface é possível em Python devido a uma de suas características estrela, o **Duck Typing**.

## Interfaces formais

Uma vez que temos o contexto do que são as interfaces informais, já estamos em condições de entender as interfaces formais.

As interfaces formais podem ser definidas em Python utilizando o módulo padrão chamado **ABC** (*Abstract Base Classes*). As ABCs foram adicionadas ao Python na **PEP 3119**.

Simplesmente definem uma forma de criar interfaces (através de metaclasses) nos quais se definem métodos (mas não se implementam) e onde **se força** as classes que usam essa interface a implementar os métodos. Vejamos alguns exemplos.

A interface mais simples que podemos criar é herdando de \`abc.ABC\`.

\`\`\`python
from abc import ABC

class Controle(ABC):
    pass
\`\`\`

A seguinte sintaxe também é válida, e embora saia do conteúdo deste capítulo, é importante que você associe o módulo \`abc\` com as metaclasses.

\`\`\`python
from abc import ABCMeta

class Controle(metaclass=ABCMeta):
    pass
\`\`\`

Mas vejamos um exemplo concreto continuando com nosso exemplo do controle remoto. Podemos observar como se usa o decorador **\`@abstractmethod\`**.

Um **método abstrato** é um método que não tem uma implementação, ou seja, que não leva código. Um método definido com este decorador forçará as classes que implementem dita interface a codificá-lo.

Vejamos como fica nossa interface formal \`Controle\`.

\`\`\`python
from abc import ABCMeta, abstractmethod

class Controle(metaclass=ABCMeta):
    @abstractmethod
    def proximo_canal(self):
        pass

    @abstractmethod
    def canal_anterior(self):
        pass

    @abstractmethod
    def aumentar_volume(self):
        pass

    @abstractmethod
    def diminuir_volume(self):
        pass
\`\`\`

A primeira coisa a ter em conta é que **não se pode criar um objeto de uma classe abstrata**, já que seus métodos não estão implementados.

\`\`\`python
# controle = Controle()
# TypeError: Can't instantiate abstract class Controle with abstract methods ...
\`\`\`

No entanto, podemos herdar de \`Controle\` para criar uma classe \`ControleSamsung\`. É muito importante que implementemos **todos** os métodos, caso contrário teremos um erro. Esta é uma das diferenças em relação às interfaces informais.

\`\`\`python
class ControleSamsung(Controle):
    def proximo_canal(self):
        print("Samsung->Próximo")
    def canal_anterior(self):
        print("Samsung->Anterior")
    def aumentar_volume(self):
        print("Samsung->Aumentar")
    def diminuir_volume(self):
        print("Samsung->Diminuir")
\`\`\`

E como de costume, podemos criar um objeto e chamar seus métodos.

\`\`\`python
controle_samsung = ControleSamsung()
controle_samsung.diminuir_volume()
# Samsung->Diminuir
\`\`\`

Chegados a este ponto temos, portanto, dois conceitos diferentes claramente identificados:

1.  Por um lado temos nossa interface \`Controle\`. Trata-se de uma classe que define o comportamento de um controle genérico, mas sem focar nos detalhes de como funciona. Foca no **o quê**.
2.  Por outro lado temos duas classes filhas que implementam/herdam a interface anterior, adicionando um código concreto. Representam o **como**.

## Classes Virtuais

Como já sabemos, considera-se que uma classe é subclasse ou \`issubclass\` de outra se herda da mesma.

\`\`\`python
class ClasseA:
    pass
class ClasseB(ClaseA):
    pass

print(issubclass(ClasseB, ClasseA)) # True
\`\`\`

Mas, e se quisermos que se considere uma classe a pai quando não existe herança explícita entre elas?

É aqui onde entram as **classes virtuais**. Usando \`register()\` podemos registrar uma ABC como classe pai de outra. No exemplo seguinte \`FloatABC\` registra-se como classe virtual pai de \`float\`.

\`\`\`python
from abc import ABCMeta

class FloatABC(metaclass=ABCMeta):
    pass

FloatABC.register(float)
\`\`\`

E isso implica que o comportamento de \`issubclass\` se vê modificado.

\`\`\`python
print(issubclass(float, FloatABC)) # True
\`\`\`

Analogamente podemos realizar o mesmo com uma classe definida por nós.

\`\`\`python
@FloatABC.register
class MeuFloat():
    pass

x = MeuFloat()
print(issubclass(MeuFloat, FloatABC)) # True
\`\`\`

## Métodos Abstratos e Decoradores

Como já vimos, os métodos abstratos são aqueles que são declarados mas não têm uma implementação. Também vimos como o Python nos obriga a implementá-los nas classes que herdam de nossa interface.

No entanto, também é possível combinar o decorador \`@abstractmethod\` com os decoradores \`@classmethod\`, \`@staticmethod\` e \`@property\` que já vimos anteriormente.

> **Nota:** \`@abstractmethod\` deve ser usado sempre logo antes da definição do método (o mais interno).

### Abstract Class Method
Um método de classe abstrato:

\`\`\`python
from abc import ABC, abstractmethod

class Classe(ABC):
    @classmethod
    @abstractmethod
    def metodo_abstrato_de_classe(cls):
        pass
\`\`\`

### Abstract Static Method
Um método estático abstrato:

\`\`\`python
class Classe(ABC):
    @staticmethod
    @abstractmethod
    def metodo_abstrato_estatico():
        pass
\`\`\`

### Abstract Property
E por último, também podemos combiná-lo com o decorador property.

\`\`\`python
class Classe(ABC):
    @property
    @abstractmethod
    def metodo_abstrato_propriedade(self):
        pass
\`\`\`

## Abstract Base Classes e Coleções

O Python nos oferece um conjunto de Abstract Base Classes que podemos usar para criar nossas próprias classes de coleção, denominado \`collections.abc\`. É importante dar uma olhada nelas, já que talvez já exista a que precisamos.

Podemos, por exemplo, criar uma classe \`MeuSet\` que use \`abc.Set\`, mas que tenha um comportamento ligeiramente distinto. Neste caso, deveremos implementar os métodos mágicos \`__iter__\`, \`__contains__\` e \`__len__\`, já que são definidos como abstratos na ABC.

\`\`\`python
from collections import abc

class MeuSet(abc.Set):
    def __init__(self, iterable):
        self.elements = []
        for value in iterable:
            if value not in self.elements:
                self.elements.append(value)

    def __iter__(self):
        return iter(self.elements)

    def __contains__(self, value):
        return value in self.elements

    def __len__(self):
        return len(self.elements)

    def __str__(self):
        return "".join(str(i) for i in self.elements)
\`\`\`

Como podemos ver, herdamos certas funcionalidades como os operadores \`&\` e \`|\` que podem ser usados sobre nossa nova classe automaticamente, sem termos que implementá-los do zero.

\`\`\`python
s1 = MeuSet("abcdefg")
s2 = MeuSet("efghij")

print(s1 & s2) # efg
print(s1 | s2) # abcdefghij
\`\`\`
`;
