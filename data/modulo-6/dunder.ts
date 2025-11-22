
export const m6Dunder = `
# Métodos Dunder (Mágicos)

Em Python, os **métodos mágicos**, também conhecidos como **dunder methods** (abreviação de *Double UNDERscore*), são métodos especiais que começam e terminam com dois sublinhados, como \`__init__\` ou \`__str__\`.

Estes métodos não são chamados diretamente pelo seu nome (raramente você escreverá \`objeto.__str__()\`), mas sim invocados internamente pelo Python quando você utiliza sintaxes nativas da linguagem, como operadores matemáticos (\`+\`, \`-\`, \`*\`), funções *built-in* (\`len()\`, \`str()\`) ou acesso a índices (\`obj[0]\`).

Para um matemático, os métodos dunder são a ferramenta mais poderosa do Python, pois permitem a **Sobrecarga de Operadores**. Isso significa que você pode definir como seus objetos se comportam quando somados, multiplicados ou comparados, permitindo criar estruturas matemáticas elegantes como matrizes, polinômios ou vetores que se comportam como números nativos.

## 1. Construção e Inicialização

O método mais famoso é o \`__init__\`, mas existem outros relacionados ao ciclo de vida do objeto.

### \`__init__(self, ...)\`
É o inicializador da classe. É chamado automaticamente quando uma nova instância é criada.

\`\`\`python
class Vetor:
    def __init__(self, x, y):
        self.x = x
        self.y = y

v = Vetor(3, 5)
\`\`\`

## 2. Representação do Objeto

Quando imprimimos um objeto ou o inspecionamos no console, o Python busca dois métodos mágicos para saber "como" mostrar esse objeto.

### \`__str__(self)\`
Define a representação em string "legível" para o usuário final. É o que o Python mostra quando chamamos \`print(objeto)\` ou \`str(objeto)\`.

### \`__repr__(self)\`
Define a representação "oficial" ou não ambígua do objeto, útil para desenvolvedores (debugging). É o que aparece quando digitamos o nome da variável no console interativo.

> **Regra de Ouro:** Se você tiver que implementar apenas um, implemente o \`__repr__\`, pois o Python o usará como *fallback* se o \`__str__\` não existir.

\`\`\`python
class Vetor:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __str__(self):
        return f"Vetor({self.x}, {self.y})"
    
    def __repr__(self):
        # Idealmente, repr deve ser uma string que, se executada, recria o objeto
        return f"Vetor(x={self.x}, y={self.y})"

v = Vetor(3, 5)
print(v)       # Usa __str__: Vetor(3, 5)
print([v])     # Listas usam __repr__ de seus itens: [Vetor(x=3, y=5)]
\`\`\`

## 3. Sobrecarga de Operadores Aritméticos

Aqui é onde a mágica acontece para a computação científica. Podemos ensinar ao Python como somar dois vetores usando o símbolo \`+\`.

### \`__add__(self, other)\`
Implementa o operador de soma \`+\`.

\`\`\`python
class Vetor:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __str__(self):
        return f"({self.x}, {self.y})"

    def __add__(self, other):
        # Verifica se 'other' é um Vetor para somar componente a componente
        if isinstance(other, Vetor):
            return Vetor(self.x + other.x, self.y + other.y)
        # Poderíamos adicionar lógica para somar com escalares também
        raise TypeError("Operando inválido para soma")

v1 = Vetor(2, 4)
v2 = Vetor(1, -1)

v3 = v1 + v2  # O Python chama v1.__add__(v2)
print(v3)     # (3, 3)
\`\`\`

### Outros operadores aritméticos

| Operador | Método Dunder | Descrição |
| :---: | :--- | :--- |
| \`+\` | \`__add__\` | Soma |
| \`-\` | \`__sub__\` | Subtração |
| \`*\` | \`__mul__\` | Multiplicação |
| \`/\` | \`__truediv__\` | Divisão real |
| \`//\` | \`__floordiv__\` | Divisão inteira |
| \`%\` | \`__mod__\` | Módulo |
| \`**\` | \`__pow__\` | Potenciação |

### Aritmética Reversa (\`__radd__\`, \`__rmul__\`, etc.)

Imagine que queremos multiplicar um escalar por um vetor: \`3 * v1\`.
O Python tentará fazer \`3.__mul__(v1)\`. Como o inteiro \`3\` não sabe multiplicar vetores, isso falharia.
No entanto, o Python tenta em seguida chamar o método **reverso** no segundo operando: \`v1.__rmul__(3)\`.

\`\`\`python
class Vetor:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __repr__(self):
        return f"V({self.x}, {self.y})"

    def __mul__(self, other):
        # Vetor * Escalar
        if isinstance(other, (int, float)):
            return Vetor(self.x * other, self.y * other)
        raise TypeError("Multiplicação não suportada")

    def __rmul__(self, other):
        # Escalar * Vetor (Comutativo)
        return self.__mul__(other)

v1 = Vetor(2, 3)
print(v1 * 5) # V(10, 15) -> Chama __mul__
print(5 * v1) # V(10, 15) -> Chama __rmul__
\`\`\`

## 4. Operadores de Comparação

Permitem usar \`==\`, \`<\`, \`>\`, etc., com seus objetos.

### \`__eq__(self, other)\`
Define a igualdade (\`==\`). Por padrão, o Python compara a identidade (se são o mesmo objeto na memória). Para matemática, queremos comparar os **valores**.

\`\`\`python
def __eq__(self, other):
    if isinstance(other, Vetor):
        return self.x == other.x and self.y == other.y
    return False
\`\`\`

### \`__lt__(self, other)\`
Define "menor que" (\`<\`). Útil para ordenar listas de objetos. Em vetores, poderíamos comparar a magnitude (norma).

\`\`\`python
import math

def __abs__(self):
    # Permite usar a função abs(vetor) para pegar a magnitude
    return math.sqrt(self.x**2 + self.y**2)

def __lt__(self, other):
    return abs(self) < abs(other)
\`\`\`

## 5. Container e Indexação

Se você está criando uma classe que representa uma coleção (como uma Matriz ou um Polinômio), você quer poder acessar os elementos com \`[]\` e saber o tamanho com \`len()\`.

### \`__len__(self)\`
Chamado por \`len(objeto)\`.

### \`__getitem__(self, key)\`
Chamado quando usamos \`objeto[key]\`.

### \`__setitem__(self, key, value)\`
Chamado quando fazemos \`objeto[key] = value\`.

**Exemplo: Uma classe ListaPersonalizada**

\`\`\`python
class MinhaLista:
    def __init__(self, *dados):
        self._dados = list(dados)

    def __len__(self):
        return len(self._dados)

    def __getitem__(self, posicao):
        return self._dados[posicao]

    def __setitem__(self, posicao, valor):
        self._dados[posicao] = valor

lista = MinhaLista(10, 20, 30)
print(len(lista)) # 3
print(lista[1])   # 20 (Graças ao __getitem__)
lista[1] = 99     # (Graças ao __setitem__)
\`\`\`

## 6. Objetos Chamáveis (Callables)

### \`__call__(self, ...)\`
Este método permite que uma instância da classe seja chamada como se fosse uma função. Isso é extremamente útil em matemática para representar **funções parametrizadas** ou **polinômios**.

Imagine que queremos representar o polinômio $P(x) = ax^2 + bx + c$.

\`\`\`python
class PolinomioQuad:
    def __init__(self, a, b, c):
        self.a = a
        self.b = b
        self.c = c

    def __call__(self, x):
        # Avalia o polinômio em x
        return self.a * (x**2) + self.b * x + self.c

# Criamos P(x) = 2x^2 + 3x + 1
P = PolinomioQuad(2, 3, 1)

# Agora usamos o objeto P como se fosse uma função!
y = P(5) 
# 2*(5^2) + 3*5 + 1 = 50 + 15 + 1 = 66

print(y) # 66
\`\`\`

## Resumo dos Dunders Mais Comuns

| Categoria | Método | Uso Exemplo |
| :--- | :--- | :--- |
| **Inicialização** | \`__init__\` | \`obj = Classe()\` |
| **Representação** | \`__str__\`, \`__repr__\` | \`print(obj)\`, \`str(obj)\` |
| **Aritmética** | \`__add__\`, \`__sub__\`, \`__mul__\` | \`obj + obj\`, \`obj * 3\` |
| **Comparação** | \`__eq__\`, \`__lt__\`, \`__gt__\` | \`obj1 == obj2\`, \`obj1 < obj2\` |
| **Acesso** | \`__len__\`, \`__getitem__\` | \`len(obj)\`, \`obj[0]\` |
| **Chamada** | \`__call__\` | \`obj(x)\` |
| **Atributos** | \`__getattr__\` | \`obj.atributo_inexistente\` |

Dominar os métodos mágicos é o que diferencia um programador Python iniciante de um avançado, especialmente no campo da computação científica, onde a expressividade do código matemático é fundamental.
`;
