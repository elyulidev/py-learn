
export const m6Prop = `
# Decorador Property (@property)

Em outros tutoriais vimos como se criam e usam os decoradores em Python. A seguir veremos o decorador **@property**, que vem por padrão com o Python, e pode ser usado para modificar um método para que seja acessado como um atributo ou propriedade.

É importante que você já conheça os conceitos básicos de programação orientada a objetos.

## Uso Básico

O decorador pode ser usado sobre um método, que fará com que atue como se fosse um atributo.

\`\`\`python
class Classe:
    def __init__(self, meu_atributo):
        self.__meu_atributo = meu_atributo

    @property
    def meu_atributo(self):
        return self.__meu_atributo
\`\`\`

Como se de um atributo normal se tratasse, podemos acessá-lo com o objeto, ponto e nome.

\`\`\`python
minha_classe = Classe("valor_atributo")
print(minha_classe.meu_atributo)
# 'valor_atributo'
\`\`\`

É muito importante notar que embora \`meu_atributo\` possa parecer um método, na realidade não é acessado como tal, pelo que **não pode ser chamado com ()**.

\`\`\`python
# minha_classe.meu_atributo() # Erro! É um atributo, não um método
\`\`\`

## Por que usá-lo? (Encapsulamento)

Talvez você se pergunte para que serve isto, já que o seguinte código faz exatamente o mesmo sem fazer uso de decoradores.

\`\`\`python
class Classe:
    def __init__(self, meu_atributo):
        self.meu_atributo = meu_atributo

minha_classe = Classe("valor_atributo")
print(minha_classe.meu_atributo)
# 'valor_atributo'
\`\`\`

A explicação não é simples, mas está relacionada com o conceito de **encapsulamento** da programação orientada a objetos. Este conceito nos indica que em determinadas ocasiões é importante ocultar o estado interno dos objetos do exterior, para evitar que sejam modificados de maneira incorreta. Para quem vem do mundo de Java, isto não será nada novo, e está muito relacionado com os métodos \`set()\` e \`get()\`.

A primeira diferença que vemos entre os códigos anteriores é o uso de \`__\` antes de \`meu_atributo\`. Quando nomeamos uma variável desta maneira, é uma forma de dizer ao Python que queremos que se "oculte" (atributo privado) e que não possa ser acessada como o resto dos atributos.

\`\`\`python
class Classe:
    def __init__(self, meu_atributo):
        self.__meu_atributo = meu_atributo

minha_classe = Classe("valor_atributo")

# minha_classe.__meu_atributo # Erro!
\`\`\`

Isto pode ser importante com certas variáveis que não queremos que sejam acessíveis desde o exterior de uma maneira não controlada. Ao definir a propriedade com \`@property\`, o acesso a esse atributo realiza-se através de uma função (o Getter), sendo portanto um acesso controlado.

\`\`\`python
class Classe:
    def __init__(self, meu_atributo):
        self.__meu_atributo = meu_atributo

    @property
    def meu_atributo(self):
        # O acesso realiza-se através deste "método" e
        # poderia conter código extra e não um simples retorno
        return self.__meu_atributo
\`\`\`

Outra utilidade poderia ser a consulta de um parâmetro que requeira muitos cálculos (**Lazy Evaluation**). Poder-se-ia ter um atributo que não estivesse diretamente armazenado na classe, mas que precisasse realizar certos cálculos. Para otimizar isto, poderiam-se fazer os cálculos apenas quando o atributo é consultado.

## Setter com @property

Por último, existem vários adendos ao decorador \`@property\`, como pode ser o **setter**. Trata-se de outro decorador que permite definir um "método" que modifica o conteúdo do atributo quando usamos o operador de atribuição \`=\`.

\`\`\`python
class Classe:
    def __init__(self, meu_atributo):
        self.__meu_atributo = meu_atributo

    @property
    def meu_atributo(self):
        return self.__meu_atributo

    @meu_atributo.setter
    def meu_atributo(self, valor):
        if valor != "":
            print("Modificando o valor")
            self.__meu_atributo = valor
        else:
            print("Erro: está vazio")
\`\`\`

Desta forma podemos adicionar código ao setter, fazendo com que por exemplo realize verificações antes de modificar o valor. Isto é uma coisa que, usando um atributo normal público, não poderíamos fazer, e é muito útil para o encapsulamento.

\`\`\`python
minha_classe = Classe("valor_atributo")
print(minha_classe.meu_atributo)
# 'valor_atributo'

minha_classe.meu_atributo = "novo_valor"
# Saída: Modificando o valor
print(minha_classe.meu_atributo)
# 'novo_valor'

minha_classe.meu_atributo = ""
# Saída: Erro: está vazio
\`\`\`

Resulta lógico pensar que se um determinado atributo pertence a uma classe, se queremos modificá-lo, deveria ter a "aprovação" da classe, para assegurar-se de que nenhuma entidade externa está "fazendo coisas estranhas" com os dados internos.
`;
