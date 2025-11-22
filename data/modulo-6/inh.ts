
export const m6Inh = `
# Herança em Python

Para entender a herança, é fundamental entender a programação orientada a objetos (POO), por isso recomendamos começar por aí antes.

A herança é um processo mediante o qual se pode criar uma classe filha que herda de uma classe pai (ou mãe), compartilhando seus métodos e atributos. Além disso, uma classe filha pode sobrescrever os métodos ou atributos, ou até mesmo definir novos.

Pode-se criar uma classe filha passando apenas como parâmetro a classe da qual queremos herdar. No exemplo a seguir, vemos como se pode usar a herança em Python, com a classe \`Cachorro\` que herda de \`Animal\`. Assim de fácil.

\`\`\`python
# Definimos uma classe pai
class Animal:
    pass

# Criamos uma classe filha que herda da pai
class Cachorro(Animal):
    pass
\`\`\`

De fato, podemos ver como efetivamente a classe \`Cachorro\` é filha de \`Animal\` usando o atributo \`__bases__\`.

\`\`\`python
print(Cachorro.__bases__)
# (<class '__main__.Animal'>,)
\`\`\`

De maneira similar, podemos ver quais classes descendem de uma em concreto com \`__subclasses__()\`.

\`\`\`python
print(Animal.__subclasses__())
# [<class '__main__.Cachorro'>]
\`\`\`

E para que queremos a herança? Dado que uma classe filha herda os atributos e métodos da pai, pode ser muito útil quando tenhamos classes que se parecem entre si, mas têm certas particularidades. Neste caso, em vez de definir um monte de classes para cada animal, podemos tomar os elementos comuns e criar uma classe \`Animal\` da qual herdem o resto, respeitando portanto a filosofia **DRY**. Realizar estas abstrações e buscar o denominador comum para definir uma classe da qual herdem as demais é uma tarefa das mais complexas no mundo da programação.

> **Para saber mais:** O princípio DRY (*Don't Repeat Yourself* - Não se Repita) é muito aplicado no mundo da programação e consiste em não repetir código de maneira desnecessária. Quanto mais código duplicado existir, mais difícil será de modificar e mais fácil será criar inconsistências. As classes e a herança ajudam a não repetir código.

## Estendendo e modificando métodos

Continuemos com nosso exemplo de cachorros e animais. Vamos definir uma classe pai \`Animal\` que terá todos os atributos e métodos genéricos que os animais podem ter. Esta tarefa de buscar o denominador comum é muito importante em programação.

**Atributos:**
*   A espécie, já que todos os animais pertencem a uma.
*   A idade, já que todo ser vivo nasce, cresce, se reproduz e morre.

**Métodos ou funcionalidades:**
*   Teremos o método \`falar\`, que cada animal implementará de uma forma. Os cachorros latem, as abelhas zumbem e os cavalos relincham.
*   Um método \`moverse\`. Uns animais o farão caminhando, outros voando.
*   E por último um método \`descreveme\` que será comum.

Definimos a classe pai, com uma série de atributos comuns para todos os animais como indicamos.

\`\`\`python
class Animal:
    def __init__(self, especie, idade):
        self.especie = especie
        self.idade = idade

    # Método genérico mas com implementação particular
    def falar(self):
        # Método vazio
        pass

    # Método genérico mas com implementação particular
    def moverse(self):
        # Método vazio
        pass

    # Método genérico com a mesma implementação
    def descreveme(self):
        print("Sou um Animal do tipo", type(self).__name__)
\`\`\`

Temos já portanto uma classe genérica \`Animal\`, que generaliza as características e funcionalidades que todo animal pode ter. Agora criamos uma classe \`Cachorro\` que herda de \`Animal\`. Como primeiro exemplo vamos criar uma classe vazia, para ver como os métodos e atributos são herdados por padrão.

\`\`\`python
# Cachorro herda de Animal
class Cachorro(Animal):
    pass

meu_cachorro = Cachorro('mamífero', 10)
meu_cachorro.descreveme()
# Sou um Animal do tipo Cachorro
\`\`\`

Com apenas um par de linhas de código, criamos uma classe nova que tem todo o conteúdo que a classe pai tem. Mas aqui vem o que é de verdade interessante. Vamos criar vários animais concretos e **sobrescrever** alguns dos métodos que haviam sido definidos na classe \`Animal\`, como o \`falar\` ou o \`moverse\`, já que cada animal se comporta de uma maneira distinta.

Podemos inclusive criar novos métodos que se adicionarão aos já herdados, como no caso da \`Abelha\` com \`picar()\`.

\`\`\`python
class Cachorro(Animal):
    def falar(self):
        print("Au Au!")
    def moverse(self):
        print("Caminhando com 4 patas")

class Vaca(Animal):
    def falar(self):
        print("Muuu!")
    def moverse(self):
        print("Caminhando com 4 patas")

class Abelha(Animal):
    def falar(self):
        print("Bzzzz!")
    def moverse(self):
        print("Voando")

    # Novo método
    def picar(self):
        print("Picar!")
\`\`\`

Portanto, já podemos criar nossos objetos desses animais e fazer uso de seus métodos, que poderiam classificar-se em três tipos:

1.  **Herdados diretamente** da classe pai: \`descreveme()\`.
2.  **Herdados da classe pai mas modificados (Sobrescritos):** \`falar()\` e \`moverse()\`.
3.  **Criados na classe filha** (portanto não existentes na classe pai): \`picar()\`.

\`\`\`python
meu_cachorro = Cachorro('mamífero', 10)
minha_vaca = Vaca('mamífero', 23)
minha_abelha = Abelha('inseto', 1)

meu_cachorro.falar()
minha_vaca.falar()
# Au Au!
# Muuu!

minha_vaca.descreveme()
minha_abelha.descreveme()
# Sou um Animal do tipo Vaca
# Sou um Animal do tipo Abelha

minha_abelha.picar()
# Picar!
\`\`\`

## Uso de super()

Em poucas palavras, a função **\`super()\`** nos permite acessar os métodos da classe pai a partir de uma de suas filhas. Voltemos ao exemplo de \`Animal\` e \`Cachorro\`.

\`\`\`python
class Animal:
    def __init__(self, especie, idade):
        self.especie = especie
        self.idade = idade        
    def falar(self):
        pass
    def moverse(self):
        pass
    def descreveme(self):
        print("Sou um Animal do tipo", type(self).__name__)
\`\`\`

Talvez queiramos que nosso \`Cachorro\` tenha um parâmetro extra no construtor, como poderia ser o \`dono\`. Para realizar isto temos duas alternativas:

1.  Podemos criar um novo \`__init__\` e guardar todas as variáveis uma a uma (repetindo código).
2.  Ou podemos usar \`super()\` para chamar o \`__init__\` da classe pai que já aceitava a espécie e idade, e apenas atribuir a variável nova manualmente.

\`\`\`python
class Cachorro(Animal):
    def __init__(self, especie, idade, dono):
        # Alternativa 1 (Ruim - Repete lógica)
        # self.especie = especie
        # self.idade = idade
        # self.dono = dono

        # Alternativa 2 (Boa - Reusa lógica)
        super().__init__(especie, idade)
        self.dono = dono

meu_cachorro = Cachorro('mamífero', 7, 'Luis')
print(meu_cachorro.especie) # mamífero
print(meu_cachorro.idade)   # 7
print(meu_cachorro.dono)    # Luis
\`\`\`

## Herança Múltipla

Em Python é possível realizar herança múltipla. Em outros posts vimos como se podia criar uma classe pai que herdava de uma classe filha. A herança múltipla é similar, mas uma classe herda de **várias** classes pai em vez de uma só.

Vejamos um exemplo. Por um lado temos duas classes \`Classe1\` e \`Classe2\`, e por outro temos a \`Classe3\` que herda das duas anteriores. Portanto, herdará todos os métodos e atributos de ambas.

\`\`\`python
class Classe1:
    pass
class Classe2:
    pass
class Classe3(Classe1, Classe2):
    pass
\`\`\`

É possível também que uma classe herde de outra classe e por sua vez outra classe herde da anterior (Herança Multinível).

\`\`\`python
class Classe1:
    pass
class Classe2(Classe1):
    pass
class Classe3(Classe2):
    pass
\`\`\`

Chegados a este ponto podemos nos perguntar o seguinte: "Ok, as classes filhas herdam os métodos das classes pai, mas também podem reimplementá-los de maneira diferente. Então, se chamo um método que todas as classes têm em comum, qual é chamado?". Pois bem, existe uma forma de saber.

### Method Resolution Order (MRO)

A forma de saber qual método é chamado é consultar o **MRO** ou *Method Resolution Order*. Esta função nos devolve uma tupla com a ordem de busca dos métodos. Como era de esperar, começa-se na própria classe e vai-se subindo até a classe pai, da esquerda para a direita.

\`\`\`python
class Classe1:
    pass
class Classe2:
    pass
class Classe3(Classe1, Classe2):
    pass

print(Classe3.__mro__)
# (<class '__main__.Classe3'>, <class '__main__.Classe1'>, <class '__main__.Classe2'>, <class 'object'>)
\`\`\`

Uma curiosidade é que no final de tudo vemos a classe \`object\`. Embora possa parecer estranho, é correto, já que na realidade **todas** as classes em Python herdam de uma classe genérica \`object\`, embora não o especifiquemos explicitamente (em Python 3).

E como último exemplo... o céu é o limite. Podemos ter uma classe herdando de outras três. Repare que o MRO depende da ordem em que as classes são passadas: 1, 3, 2.

\`\`\`python
class Classe1:
    pass
class Classe2:
    pass
class Classe3:
    pass
class Classe4(Classe1, Classe3, Classe2):
    pass

print(Classe4.__mro__)
# (<class '__main__.Classe4'>, <class '__main__.Classe1'>, <class '__main__.Classe3'>, <class '__main__.Classe2'>, <class 'object'>)
\`\`\`

Junto com a herança, a coesão, abstração, polimorfismo, acoplamento e encapsulamento são outros dos conceitos chaves para entender a programação orientada a objetos.
`;
