
export const m1Typing = `
# Tipagem Dinâmica e Duck Typing

O **Duck Typing** (Tipagem de Pato) é um conceito relacionado a linguagens de programação dinâmicas como Python. Tem sua origem na seguinte frase:

> *"If it walks like a duck and it quacks like a duck, then it must be a duck"*
>
> (Se caminha como um pato e grasna como um pato, então deve ser um pato).

Trata-se de um símile onde os patos são objetos e falar/andar são métodos. Se um determinado objeto tem os métodos que nos interessam, isso é o suficiente, sendo o seu tipo irrelevante.

Dito de outra forma: não verifique se *é* um pato; verifique se ele *grasna* como um pato.

O conceito fundamenta-se no raciocínio indutivo. Em Python, isso significa que **o Python não se importa com os tipos dos objetos, importa-se apenas com os métodos que eles possuem**.

Vamos definir uma classe \`Pato\` com um método \`falar()\`.

\`\`\`python
class Pato:
    def falar(self):
        print("Quack! Quack!")

p = Pato()
p.falar()
# Saída: Quack! Quack!
\`\`\`

Agora, vamos definir uma função que aceita um argumento \`x\` e chama o método \`falar()\` dele.

\`\`\`python
def chama_falar(x):
    x.falar()
\`\`\`

Como você pode observar, em Python não é necessário especificar os tipos. Simplesmente dizemos que o parâmetro se chama \`x\`. Quando o Python entra na função e avalia \`x.falar()\`, não importa o tipo de \`x\`, contanto que ele tenha o método \`falar()\`. Isso é Duck Typing.

\`\`\`python
p = Pato()
chama_falar(p)
# Saída: Quack! Quack!
\`\`\`

## Múltiplos "Animais"

E o que acontece se usarmos objetos que não são da classe \`Pato\`? Como dissemos, à função \`chama_falar\` não importa o tipo. Vamos definir três classes distintas. Note que **não existe herança** entre elas.

\`\`\`python
class Cachorro:
    def falar(self):
        print("Au, Au!")

class Gato:
    def falar(self):
        print("Miau, Miau!")

class Vaca:
    def falar(self):
        print("Muuu, Muuu!")
\`\`\`

A função funcionará corretamente com todos os objetos:

\`\`\`python
chama_falar(Cachorro())
chama_falar(Gato())
chama_falar(Vaca())

# Saída:
# Au, Au!
# Miau, Miau!
# Muuu, Muuu!
\`\`\`

Outra forma de ver isso é iterando uma lista com diferentes animais:

\`\`\`python
lista = [Cachorro(), Gato(), Vaca()]
for animal in lista:
    animal.falar()
\`\`\`

## Exemplos Reais no Python

### Exemplo: \`len()\`

Podemos ver o duck typing em todo seu esplendor com a função \`len()\`. Essa função apenas chama o método mágico \`__len__()\` do objeto.

\`\`\`python
class Foo():
    def __len__(self):
        return 99
    
class Bar():
    pass

print(len(Foo())) # 99
# print(len(Bar())) # Erro: TypeError, pois Bar não tem __len__
\`\`\`

À função \`len()\` não importa se é uma lista, uma string ou um objeto customizado \`Foo\`. Se tiver \`__len__\`, funciona.

### Exemplo: Multiplicação

Quando fazemos uma multiplicação usando \`*\`, o resultado depende dos tipos que estamos usando. O Python busca se os objetos têm os métodos \`__mul__\` ou \`__rmul__\`.

\`\`\`python
print(3 * 3)   # 9 (Inteiros)
print(3 * "3") # "333" (Inteiro * String)
\`\`\`

## Conclusão

*   Python suporta Duck Typing: o tipo do objeto é menos relevante que o que ele pode fazer (seus métodos).
*   Linguagens como Java usam Polimorfismo baseado em herança/interfaces para algo similar. Em Python, a herança não é estritamente necessária para tratar objetos de forma polimórfica.
`;
