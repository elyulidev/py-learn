
export const m4Assign = `
# Operadores de Atribuição

Anteriormente vimos os operadores aritméticos, que usavam dois números para calcular uma operação aritmética (como soma ou subtração) e devolver seu resultado.

Neste caso, os **operadores de atribuição** (*assignment operators*) nos permitem realizar uma operação e armazenar seu resultado na variável inicial. Podemos ver como realmente o único operador novo é o \`=\`. O resto são abreviações de outros operadores que vimos anteriormente.

Vejamos uma tabela de resumo, assumindo \`x = 7\` inicialmente:

| Operador | Exemplo | Equivalente | Resultado (para x=7) |
| :---: | :--- | :--- | :--- |
| \`=\` | \`x = 7\` | \`x = 7\` | 7 |
| \`+=\` | \`x += 2\` | \`x = x + 2\` | 9 |
| \`-=\` | \`x -= 2\` | \`x = x - 2\` | 5 |
| \`*=\` | \`x *= 2\` | \`x = x * 2\` | 14 |
| \`/=\` | \`x /= 2\` | \`x = x / 2\` | 3.5 |
| \`%=\` | \`x %= 2\` | \`x = x % 2\` | 1 |
| \`//=\` | \`x //= 2\` | \`x = x // 2\` | 3 |
| \`**=\` | \`x **= 2\` | \`x = x ** 2\` | 49 |
| \`&=\` | \`x &= 2\` | \`x = x & 2\` | 2 |
| \`|=\` | \`x |= 2\` | \`x = x | 2\` | 7 |
| \`^=\` | \`x ^= 2\` | \`x = x ^ 2\` | 5 |
| \`>>=\` | \`x >>= 2\` | \`x = x >> 2\` | 1 |
| \`<<=\` | \`x <<= 2\` | \`x = x << 2\` | 28 |

Vamos ver isso em código:

\`\`\`python
a = 7
b = 2
print("Operadores de atribuição")

x=a; x+=b;  print("x+=", x)  # 9
x=a; x-=b;  print("x-=", x)  # 5
x=a; x*=b;  print("x*=", x)  # 14
x=a; x/=b;  print("x/=", x)  # 3.5
x=a; x%=b;  print("x%=", x)  # 1
x=a; x//=b; print("x//=", x) # 3
x=a; x**=b; print("x**=", x) # 49

# Bitwise
x=a; x&=b;  print("x&=", x)  # 2
x=a; x|=b;  print("x|=", x)  # 7
x=a; x^=b;  print("x^=", x)  # 5
x=a; x>>=b; print("x>>=", x) # 1
x=a; x<<=b; print("x<<=", x) # 28
\`\`\`

## Operador \`=\`

O operador \`=\` praticamente não precisa de explicação, simplesmente atribui à variável da esquerda o conteúdo que colocamos à direita. Destacamos **variável** porque se fizermos algo do tipo \`3=5\`, teremos um erro. Como sempre, nunca confie em nada e experimente.

\`\`\`python
x = 2       # Uso correto do operador =
print(x)    # 2
# 3 = 5     # Daria erro, 3 não é uma variável
\`\`\`

Talvez você pense que o operador \`=\` é trivial e mal mereça explicação, mas é importante explorar os limites da linguagem. Se você sabe o que é um ponteiro ou uma referência, talvez o exemplo seguinte faça sentido para você.

Vamos ver: se tudo o que vimos anteriormente é certo, \`a=[1, 2, 3]\` atribui \`[1, 2, 3]\` a \`a\`, então se não tocamos em \`a\`, o valor de \`a\` deveria ser sempre \`[1, 2, 3]\`. Bem, no exemplo seguinte vemos como isso não é assim; o valor de \`a\` mudou. Poder-se-ia dizer que não é o mesmo \`x=3\` com um número que \`x=[1, 2, 3]\` com uma lista.

\`\`\`python
a = [1, 2, 3]
b = a        # b aponta para o mesmo objeto que a
b += [4]     # Modifica o objeto in-place

print(a)
# [1, 2, 3, 4] -> 'a' também mudou!
\`\`\`

## Operador \`+=\`

Como podemos ver, os operadores de atribuição não são mais que atalhos para escrever outros operadores de maneira mais curta e atribuir seu resultado à variável inicial. O operador \`+=\` em \`x+=1\` é equivalente a \`x=x+1\`.

Sabendo disso, seria justo perguntar: realmente vale a pena criar um operador novo que faz algo que já podemos fazer mas de maneira mais curta? Bem, a pergunta não é fácil de responder e, de certo modo, vem herdada de linguagens como C que introduziram isso nos anos 1970.

\`\`\`python
x = 5      # Exemplo de como incrementar
x += 1     # x em uma unidade
print(x)
# 6
\`\`\`

> **Para saber mais:** Embora se possa dizer que o operador \`x+=1\` é igual a \`x=x+1\`, não é totalmente verdade. De fato, o operador que Python invoca por baixo é \`__iadd__\` no primeiro caso frente a \`__add__\` para o segundo. Para efeitos práticos, pode-se considerar o mesmo, mas há sutilezas na mutabilidade.

Pode-se brincar um pouco com o operador \`+=\` e aplicá-lo sobre variáveis que não necessariamente são números. Como vimos em outros capítulos, poderia ser empregado sobre uma lista.

\`\`\`python
x = [1, 2, 3] # Neste caso x é uma lista
x += [4, 5]   # Aplica-se o operador sobre outra lista
print(x)      # E o resultado da união de ambas
# [1, 2, 3, 5, 6]
\`\`\`

É muito importante que, se \`x\` é uma lista, não podemos aplicar o operador \`+=\` com um elemento que não seja uma lista, como por exemplo, um número.

\`\`\`python
x = [1, 2, 3]
# x += 3     # ERRO! TypeError
\`\`\`

## Operador \`-=\`

O operador \`-=\` é equivalente a subtrair e atribuir o resultado à variável inicial. Ou seja, \`x-=1\` é equivalente a \`x=x-1\`.

Se você vem de outras linguagens de programação (como C++ ou Java), talvez conheça a forma \`x--\`, mas **em Python não existe**. O operador \`-=\` é muito usado para decrementar o valor de uma variável.

\`\`\`python
i = 5
i -= 1
print(i) # 4
\`\`\`

E algo que nunca se faria na realidade, mas nos permite explorar os limites da linguagem, seria subtrair -1, o que equivale a somar um. Mas de verdade, não faça isso, é sério.

\`\`\`python
i = 0
i -= -1    # Aumenta o contador (menos com menos dá mais)
print(i)   # 1
\`\`\`

## Operador \`*=\`

O operador \`*=\` equivale a multiplicar uma variável por outra e armazenar o resultado na primeira, ou seja, \`x*=2\` equivale a \`x=x*2\`.

Até agora usamos todos os operadores de atribuição com uma variável e um número, mas é totalmente correto fazê-lo com duas variáveis.

\`\`\`python
a = 10
b = 2
a *= b      # Usando duas variáveis
print(a)    # 20
\`\`\`

## Operador \`/=\`

O operador \`/=\` equivale a dividir uma variável por outra e armazenar o resultado na primeira. Ou seja, \`x/=2\` equivale a \`x=x/2\`.

Lembre-se que em outros capítulos vimos como \`5/3\` em versões antigas de Python podia causar problemas, já que o resultado não era um número inteiro. No exemplo seguinte podemos ver como Python faz o trabalho por nós e muda o tipo da variável \`x\` do que inicialmente era \`int\` para um \`float\` com o objetivo de que o novo valor possa ser armazenado.

\`\`\`python
x = 10
print(type(x)) # <class 'int'>
x /= 3
print(type(x)) # <class 'float'>
\`\`\`

## Operador \`%=\`

O operador \`%=\` equivale a fazer o módulo da divisão de duas variáveis e armazenar seu resultado na primeira.

\`\`\`python
x = 3
x %= 2
print(x) # 1
\`\`\`

Uma curiosidade a ter em conta é que o operador módulo tem diferentes comportamentos em Python do que tem em outras linguagens como C quando se usam números negativos, tanto no dividendo como no divisor.

\`\`\`python
print(-5 % -3) # -2
print(5 % -3)  # -1
print(-5 % 3)  #  1
print(5 % 3)   #  2
\`\`\`

## Operador \`//=\`

O operador \`//=\` realiza a operação quociente (divisão inteira) entre duas variáveis e armazena o resultado na primeira. O equivalente de \`x//=2\` seria \`x=x//2\`.

\`\`\`python
x = 5       # O resultado é o quociente
x //= 3     # da divisão
print(x)    # 1
\`\`\`

## Operador \`**=\`

O operador \`**=\` realiza a operação expoente do primeiro número elevado ao segundo, e armazena o resultado na primeira variável. O equivalente de \`x**=2\` seria \`x=x**2\`.

\`\`\`python
x = 5       # Eleva o número ao quadrado
x **= 2     # e guarda o resultado na mesma
print(x)    # 25
\`\`\`

Outro exemplo similar seria empregando um expoente negativo, algo que é totalmente válido e equivale matemáticamente ao inverso do número elevado ao expoente em positivo. Dito de outra forma, $x^{-2}$ equivale a $1/x^2$.

\`\`\`python
x = 5       # Elevar 5 a -2 equivale a dividir
x **= -2    # um por 25.
print(x)    # 0.04
\`\`\`

## Operadores Bitwise (\`&=\`, \`|=\`, \`^=\`, \`>>=\`, \`<<=\`)

Estes operadores realizam as operações bit a bit e armazenam o resultado.

**Operador \`&=\` (AND):**
\`\`\`python
a = 0b101010
a &= 0b111111
print(bin(a)) # 0b101010
\`\`\`

**Operador \`|=\` (OR):**
\`\`\`python
a = 0b101010
a |= 0b111111
print(bin(a)) # 0b111111
\`\`\`

**Operador \`^=\` (XOR):**
\`\`\`python
a = 0b101010
a ^= 0b111111
print(bin(a)) # 0b10101
\`\`\`

**Operador \`>>=\` (Shift Right):**
Desloca bits para a direita. Equivalente a dividir por 2 inteiramente.
\`\`\`python
x = 10
x >>= 1
print(x) # 5
\`\`\`

É importante ter cuidado e saber o tipo da variável \`x\` antes de aplicar este operador, já que poderia dar o caso de que \`x\` fosse uma variável tipo \`float\`. Nesse caso, teríamos um erro porque o operador \`>>\` não está definido para float.

\`\`\`python
x = 10.0       # Se x é float
# x >>= 1      # ERRO! TypeError
\`\`\`

**Operador \`<<=\` (Shift Left):**
Desloca bits para a esquerda. Equivalente a multiplicar por 2.
\`\`\`python
x = 10
x <<= 1
print(x) # 20
\`\`\`

Seria justo pensar que se \`<<\` realiza um deslocamento de bits para a esquerda e \`>>\` o realiza para a direita, talvez um deslocamento \`<<\` negativo poderia equivaler a um deslocamento à direita. Mas não:

\`\`\`python
# x <<= -1 # ERRO! Python não define deslocamento negativo
# x >>= -1 # ERRO!
\`\`\`
`;
