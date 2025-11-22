
export const m6Poly = `
# Polimorfismo em Python

O termo **polimorfismo** visto do ponto de vista do Python é complicado de explicar sem falar do *duck typing*, por isso recomendamos a leitura desse capítulo se você ainda não o fez.

Ao ser uma linguagem com tipagem dinâmica e permitir *duck typing*, em Python não é necessário que os objetos compartilhem uma interface estrita (como acontece em Java ou C#); basta simplesmente que tenham os métodos que se querem chamar.

Podemos recriar o exemplo clássico de orientação a objetos da seguinte maneira. Suponhamos que temos uma classe \`Animal\` com um método \`falar()\`.

\`\`\`python
class Animal:
    def falar(self):
        pass
\`\`\`

Por outro lado temos outras duas classes, \`Cachorro\` e \`Gato\`, que herdam da anterior. Além disso, implementam o método \`falar()\` de uma forma distinta.

\`\`\`python
class Cachorro(Animal):
    def falar(self):
        print("Au au!")

class Gato(Animal):
    def falar(self):
        print("Miau!")
\`\`\`

A seguir criamos um objeto de cada classe e chamamos o método \`falar()\`. Podemos observar que cada animal se comporta de maneira distinta ao usar \`falar()\`.

\`\`\`python
# Iteramos sobre uma lista contendo instâncias de Cachorro e Gato
for animal in [Cachorro(), Gato()]:
    animal.falar()

# Saída:
# Au au!
# Miau!
\`\`\`

Isto é o **polimorfismo**: a capacidade de objetos de diferentes classes responderem à mesma chamada de método (mensagem) de formas específicas. Em Python, isso é natural e não requer configurações complexas de interfaces.
`;