
export const m6Methods = `
# Métodos em Python: Instância, Classe e Estáticos

Em outros capítulos vimos como se podem criar métodos com \`def\` dentro de uma classe, podendo receber parâmetros como entrada e modificar o estado (como os atributos) da instância.

Pois bem, fazendo uso dos **decoradores**, é possível criar diferentes tipos de métodos:

1.  Os métodos de **instância** "normais" que já vimos, como \`metodo()\`.
2.  Métodos de **classe** usando o decorador \`@classmethod\`.
3.  E métodos **estáticos** usando o decorador \`@staticmethod\`.

Na seguinte classe temos um exemplo onde definimos os três tipos de métodos.

\`\`\`python
class Classe:
    def metodo(self):
        return 'Método normal', self

    @classmethod
    def metododeclasse(cls):
        return 'Método de classe', cls

    @staticmethod
    def metodoestatico():
        return "Método estático"
\`\`\`

Vejamos seu comportamento em detalhe um por um.

## Métodos de Instância

Os métodos de instância são os métodos normais, de toda a vida, que vimos anteriormente. Recebem como primeiro parâmetro de entrada **\`self\`**, que faz referência à instância que chama o método. Também podem receber outros argumentos como entrada.

> **Para saber mais:** O uso de "self" é totalmente arbitrário. Trata-se de uma convenção acordada pelos usuários de Python, usada para se referir à instância que chama o método, mas poderia ser qualquer outro nome. O mesmo ocorre com "cls", que veremos a seguir.

\`\`\`python
class Classe:
    def metodo(self, arg1, arg2):
        return 'Método normal', self
\`\`\`

E como já sabemos, uma vez criado um objeto podem ser chamados.

\`\`\`python
minha_classe = Classe()
minha_classe.metodo("a", "b")
# ('Método normal', <__main__.Classe at 0x...>)
\`\`\`

Em vista disso, os métodos de instância:

*   Podem acessar e modificar os atributos do objeto.
*   Podem acessar outros métodos.
*   Dado que a partir do objeto \`self\` se pode acessar a classe (com \`type(self)\` ou \`self.__class__\`), também podem modificar o estado da classe.

## Métodos de Classe (@classmethod)

Diferente dos métodos de instância, os métodos de classe recebem como primeiro argumento **\`cls\`**, que faz referência à **classe** e não ao objeto. Portanto, podem acessar a classe mas não a instância individual.

\`\`\`python
class Classe:
    @classmethod
    def metododeclasse(cls):
        return 'Método de classe', cls
\`\`\`

Podem ser chamados diretamente sobre a classe (sem criar um objeto):

\`\`\`python
Classe.metododeclasse()
# ('Método de classe', __main__.Classe)
\`\`\`

Mas também podem ser chamados sobre o objeto (a instância):

\`\`\`python
minha_classe = Classe()
minha_classe.metododeclasse()
# ('Método de classe', __main__.Classe)
\`\`\`

Portanto, os métodos de classe:

*   **Não** podem acessar os atributos da instância (já que não recebem \`self\`).
*   Mas **sim** podem acessar e modificar os atributos da classe.

Um uso muito comum dos \`@classmethod\` é para criar **Factory Methods** (métodos de fábrica), que permitem criar instâncias da classe de formas alternativas.

## Métodos Estáticos (@staticmethod)

Por último, os métodos estáticos podem ser definidos com o decorador \`@staticmethod\` e **não aceitam como parâmetro nem a instância nem a classe** de forma implícita. É por isso que não podem modificar o estado nem da classe nem da instância. Mas é claro que podem aceitar parâmetros de entrada normais.

\`\`\`python
class Classe:
    @staticmethod
    def metodoestatico():
        return "Método estático"

minha_classe = Classe()

Classe.metodoestatico()
# 'Método estático'

minha_classe.metodoestatico()
# 'Método estático'
\`\`\`

Portanto, o uso dos métodos estáticos pode resultar útil para indicar que um método não modificará o estado da instância nem da classe. É certo que se poderia fazer o mesmo com um método de instância, por exemplo, mas às vezes resulta importante indicar de alguma maneira estas peculiaridades, evitando assim futuros problemas e mal-entendidos.

Em outras palavras, os métodos estáticos poderiam ser vistos como **funções normais**, com a ressalva de que vão ligadas a uma classe concreta por organização (namespace).

## Resumo

| Tipo | Decorador | Primeiro Argumento | Acessa/Modifica Instância? | Acessa/Modifica Classe? |
| :--- | :--- | :--- | :---: | :---: |
| **Instância** | (nenhum) | \`self\` | ✅ Sim | ✅ Sim |
| **Classe** | \`@classmethod\` | \`cls\` | ❌ Não | ✅ Sim |
| **Estático** | \`@staticmethod\` | (nenhum) | ❌ Não | ❌ Não |
`;
