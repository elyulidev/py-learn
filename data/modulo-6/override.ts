
export const m6Override = `
# Sobrescrevendo Métodos Mágicos (Sobrecarga de Operadores)

Nos capítulos anteriores, introduzimos o conceito de métodos mágicos (*dunder methods*). Agora, vamos nos aprofundar na **Sobrecarga de Operadores**.

A sobrecarga de operadores permite que objetos de classes definidas pelo usuário respondam a operadores padrão da linguagem (como \`+\`, \`-\`, \`*\`, \`==\`, \`<\`) de maneira intuitiva e semanticamente correta para o domínio do problema.

Para um matemático, isso é essencial. Imagine ter que escrever \`fracao1.somar(fracao2).multiplicar(fracao3)\` em vez de simplesmente \`fracao1 + fracao2 * fracao3\`. A sobrecarga permite a segunda sintaxe, tornando o código muito mais próximo da notação matemática.

Vamos construir uma classe **\`Fracao\`** completa para ilustrar esses conceitos.

## 1. O Problema sem Sobrescrita

Se criarmos uma classe sem definir métodos mágicos, o Python usa comportamentos padrão que geralmente não são úteis para matemática.

\`\`\`python
class Fracao:
    def __init__(self, num, den):
        self.num = num
        self.den = den

f1 = Fracao(1, 2)
f2 = Fracao(1, 2)

# Problema 1: Representação ruim
print(f1) 
# Saída: <__main__.Fracao object at 0x7f...>

# Problema 2: Comparação por identidade, não valor
print(f1 == f2) 
# Saída: False (são objetos diferentes na memória, embora matematicamente iguais)

# Problema 3: Falta de aritmética
# print(f1 + f2) 
# Erro: TypeError: unsupported operand type(s) for +
\`\`\`

Vamos resolver isso passo a passo.

## 2. Representação (\`__str__\` e \`__repr__\`)

Primeiro, vamos garantir que a fração seja impressa como $a/b$.

\`\`\`python
class Fracao:
    def __init__(self, num, den):
        if den == 0:
            raise ValueError("Denominador não pode ser zero")
        self.num = num
        self.den = den
    
    def __str__(self):
        return f"{self.num}/{self.den}"
        
    def __repr__(self):
        return f"Fracao({self.num}, {self.den})"

f1 = Fracao(3, 4)
print(f1) # Saída: 3/4
\`\`\`

## 3. Igualdade e Comparação (\`__eq__\`, \`__lt__\`)

Para que \`f1 == f2\` funcione, precisamos implementar \`__eq__\`. Para matemática, $\frac{1}{2} = \frac{2}{4}$. Portanto, não podemos comparar apenas numerador com numerador; devemos comparar o valor cruzado ou simplificado.

\`\`\`python
    def __eq__(self, other):
        if isinstance(other, Fracao):
            # a/b == c/d  <==>  a*d == b*c
            return self.num * other.den == self.den * other.num
        if isinstance(other, int):
            # Permite comparar Fracao(4, 2) == 2
            return self.num == self.den * other
        return False
\`\`\`

Para ordenar frações (saber qual é menor ou maior), implementamos \`__lt__\` (less than - menor que).

> **Dica:** Se implementarmos \`__eq__\` e \`__lt__\`, podemos usar o decorador \`@functools.total_ordering\` para que o Python gere automaticamente \`__le__\`, \`__gt__\` e \`__ge__\`.

\`\`\`python
    def __lt__(self, other):
        if isinstance(other, Fracao):
            return self.num * other.den < self.den * other.num
        return NotImplemented
\`\`\`

## 4. Operadores Aritméticos (\`__add__\`, \`__mul__\`, etc.)

Aqui implementamos a lógica da álgebra. Vamos focar na soma e multiplicação.

Lembre-se:
*   Soma: $\frac{a}{b} + \frac{c}{d} = \frac{ad + bc}{bd}$
*   Multiplicação: $\frac{a}{b} \times \frac{c}{d} = \frac{ac}{bd}$

\`\`\`python
    def __add__(self, other):
        if isinstance(other, Fracao):
            novo_num = self.num * other.den + self.den * other.num
            novo_den = self.den * other.den
            return Fracao(novo_num, novo_den)
        elif isinstance(other, int):
            # Soma com inteiro: a/b + n = (a + n*b) / b
            novo_num = self.num + other * self.den
            return Fracao(novo_num, self.den)
        return NotImplemented

    def __mul__(self, other):
        if isinstance(other, Fracao):
            return Fracao(self.num * other.num, self.den * other.den)
        elif isinstance(other, int):
            return Fracao(self.num * other, self.den)
        return NotImplemented
\`\`\`

Agora podemos fazer:

\`\`\`python
f1 = Fracao(1, 2)
f2 = Fracao(1, 3)
f3 = f1 + f2 
print(f3) # 5/6
\`\`\`

## 5. Operadores Refletidos (Reverse Operators)

O código acima funciona para \`f1 + 1\`, mas falha para \`1 + f1\`.

Por que?
1.  O Python tenta \`1.__add__(f1)\`.
2.  O inteiro \`1\` não sabe somar com \`Fracao\`. Retorna \`NotImplemented\`.
3.  O Python então tenta o operando da direita: \`f1.__radd__(1)\`.

Se não implementarmos \`__radd__\` (right add), a operação falha. Geralmente, para operações comutativas, basta delegar para o método normal.

\`\`\`python
    def __radd__(self, other):
        # Chamado quando temos: int + Fracao
        return self.__add__(other)

    def __rmul__(self, other):
        return self.__mul__(other)
\`\`\`

Agora funciona:
\`\`\`python
print(1 + Fracao(1, 2)) # 3/2
\`\`\`

## 6. Operadores "In-Place" (\`__iadd__\`, etc.)

Estes métodos lidam com operações como \`x += y\`.
Para objetos **imutáveis** (como nossa fração deveria ser idealmente), geralmente não precisamos implementá-los, pois o Python faz \`x = x + y\` automaticamente.
Para objetos **mutáveis** (como listas), \`__iadd__\` permite modificar o objeto sem criar um novo, economizando memória.

## Código Completo da Classe Fracao

Aqui está a implementação consolidada, incluindo uma simplificação automática usando o Máximo Divisor Comum (\`math.gcd\`).

\`\`\`python
import math

class Fracao:
    def __init__(self, num, den):
        if den == 0:
            raise ValueError("Denominador zero")
        
        # Simplificação automática
        divisor_comum = math.gcd(num, den)
        self.num = num // divisor_comum
        self.den = den // divisor_comum
        
        # Manter sinal no numerador
        if self.den < 0:
            self.num = -self.num
            self.den = -self.den

    def __str__(self):
        if self.den == 1:
            return str(self.num)
        return f"{self.num}/{self.den}"
    
    def __repr__(self):
        return f"Fracao({self.num}, {self.den})"

    # Operações Matemáticas
    def __add__(self, other):
        if isinstance(other, int):
            other = Fracao(other, 1)
        if isinstance(other, Fracao):
            return Fracao(self.num * other.den + self.den * other.num,
                          self.den * other.den)
        return NotImplemented

    def __radd__(self, other):
        return self.__add__(other)

    def __mul__(self, other):
        if isinstance(other, int):
            other = Fracao(other, 1)
        if isinstance(other, Fracao):
            return Fracao(self.num * other.num, self.den * other.den)
        return NotImplemented

    def __rmul__(self, other):
        return self.__mul__(other)

    # Comparação
    def __eq__(self, other):
        if isinstance(other, int):
            other = Fracao(other, 1)
        if isinstance(other, Fracao):
            return self.num == other.num and self.den == other.den
        return False
    
    def __lt__(self, other):
        if isinstance(other, int):
            other = Fracao(other, 1)
        return self.num * other.den < self.den * other.num

# Testando
f1 = Fracao(1, 2)
f2 = Fracao(3, 4)
f3 = f1 + f2      # 1/2 + 3/4 = 2/4 + 3/4 = 5/4
print(f"Soma: {f3}")

f4 = 1 + f1       # 1/1 + 1/2 = 3/2
print(f"Soma com int: {f4}")

print(f"Igualdade: {Fracao(2, 4) == Fracao(1, 2)}") # True
\`\`\`

## Resumo dos Operadores Sobrescritíveis

| Operador | Método Normal | Método Reverso (Direita) | Método In-Place |
| :--- | :--- | :--- | :--- |
| \`+\` | \`__add__\` | \`__radd__\` | \`__iadd__\` |
| \`-\` | \`__sub__\` | \`__rsub__\` | \`__isub__\` |
| \`*\` | \`__mul__\` | \`__rmul__\` | \`__imul__\` |
| \`/\` | \`__truediv__\` | \`__rtruediv__\` | \`__itruediv__\` |
| \`//\` | \`__floordiv__\` | \`__rfloordiv__\` | \`__ifloordiv__\` |
| \`%\` | \`__mod__\` | \`__rmod__\` | \`__imod__\` |
| \`**\` | \`__pow__\` | \`__rpow__\` | \`__ipow__\` |

### Outros Métodos Úteis

*   **\`__neg__(self)\`**: Define o comportamento de \`-obj\`.
*   **\`__abs__(self)\`**: Define o comportamento de \`abs(obj)\`.
*   **\`__int__(self)\`**, **\`__float__(self)\`**: Define conversões de tipo.

Sobrescrever métodos mágicos é o que dá ao Python sua expressividade e permite a criação de DSLs (Domain Specific Languages) internas poderosas, especialmente em contextos científicos com bibliotecas como **NumPy** e **Pandas**, que utilizam esses conceitos extensivamente.
`;
