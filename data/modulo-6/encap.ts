
export const m6Encap = `
# Encapsulamento em Programação

O **encapsulamento** (ou encapsulação) em programação é um conceito relacionado à programação orientada a objetos, e faz referência à ocultação dos estados internos de uma classe para o exterior. Dito de outra maneira, encapsular consiste em fazer com que os atributos ou métodos internos a uma classe não possam ser acessados nem modificados de fora, mas que apenas o próprio objeto possa acessá-los.

Para quem conhece Java, este será um termo muito familiar (public, private, protected), mas em Python é algo diferente. Digamos que o Python, por padrão, não oculta os atributos e métodos de uma classe do exterior. Vejamos um exemplo.

\`\`\`python
class Classe:
    atributo_classe = "Olá"
    
    def __init__(self, atributo_instancia):
        self.atributo_instancia = atributo_instancia

minha_classe = Classe("Que tal")
print(minha_classe.atributo_classe)
print(minha_classe.atributo_instancia)

# Saída:
# 'Olá'
# 'Que tal'
\`\`\`

Ambos os atributos são perfeitamente acessíveis do exterior. No entanto, isso é algo que talvez não queiramos. Há certos métodos ou atributos que queremos que pertençam apenas à classe ou ao objeto, e que só possam ser acessados por eles mesmos (lógica interna).

Para isso, podemos usar o **duplo sublinhado** \`__\` para nomear um atributo ou método. Isso fará com que o Python os interprete como "privados", de maneira que não poderão ser acessados diretamente do exterior.

\`\`\`python
class Classe:
    atributo_classe = "Olá"   # Acessível do exterior
    __atributo_classe = "Olá" # Não acessível (Privado)

    # Não acessível do exterior
    def __meu_metodo(self):
        print("Faça algo")
        self.__variavel = 0

    # Acessível do exterior
    def metodo_normal(self):
        # O método é acessível do interior da classe
        self.__meu_metodo()

minha_classe = Classe()
# minha_classe.__atributo_classe  # Erro! O atributo não é acessível (AttributeError)
# minha_classe.__meu_metodo()     # Erro! O método não é acessível (AttributeError)

print(minha_classe.atributo_classe) # Ok!
minha_classe.metodo_normal()        # Ok!
\`\`\`

E como curiosidade, podemos fazer uso de \`dir()\` para ver a listagem de métodos e atributos de nossa classe. Podemos ver claramente como temos o \`metodo_normal\` e o \`atributo_classe\`, mas não podemos encontrar \`__meu_metodo\` nem \`__atributo_classe\` com esses nomes exatos.

\`\`\`python
print(dir(minha_classe))

# Saída resumida:
# ['_Classe__atributo_classe', '_Classe__mi_metodo', '_Classe__variable', ..., 'atributo_classe', 'metodo_normal']
\`\`\`

Pois bem, na realidade **sim** poderíamos acessar o \`__atributo_classe\` e o \`__meu_metodo\` fazendo um pouco de trapaça. Embora não se veja à primeira vista, eles estão lá, mas com um nome diferente para de alguma maneira ocultá-los e evitar seu uso acidental. Isso é conhecido como **Name Mangling**.

O Python adiciona \`_NomeDaClasse\` antes do nome do atributo. Podemos chamá-los da seguinte maneira, mas, em geral, **não é uma boa ideia** fazer isso em código de produção.

\`\`\`python
print(minha_classe._Classe__atributo_classe)
# 'Olá'

minha_classe._Classe__meu_metodo()
# 'Faça algo'
\`\`\`

> **Nota:** Em Python, existe também a convenção de usar um único sublinhado \`_atributo\` para indicar que um atributo é "protegido" ou de uso interno, embora isso não impeça o acesso técnico, serve como um aviso para outros programadores. O duplo sublinhado \`__\` ativa o mecanismo de *name mangling* que vimos acima.
`;
