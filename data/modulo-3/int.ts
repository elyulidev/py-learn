
export const m3Int = `
# Inteiro ou int

Os inteiros em Python, também conhecidos como **int**, são um tipo de dados que permite representar números inteiros, ou seja, positivos e negativos não decimais. Se você vem de outras linguagens de programação, esqueça os \`int8\`, \`uint16\` e demais. Python nos dá um único tipo que podemos usar sem nos preocupar com o tamanho do número armazenado "por baixo dos panos".

## Introdução ao int

Os tipos inteiros ou \`int\` em Python permitem armazenar um valor numérico não decimal, seja positivo ou negativo, de qualquer valor. A função \`type()\` nos devolve o tipo da variável, e podemos ver como efetivamente é da classe \`int\`.

\`\`\`python
i = 12
print(i)          # 12
print(type(i))    # <class 'int'>
\`\`\`

Em outras linguagens de programação, os \`int\` tinham um valor máximo que podiam representar. Dependendo do tamanho da palavra (*wordsize*) da arquitetura do computador, existem números mínimos e máximos possíveis de representar. Se por exemplo são usados inteiros de 32 bits, o intervalo a representar é de $-2^{31}$ a $2^{31}-1$.

Uma grande vantagem do Python é que já não precisamos nos preocupar com isso, já que internamente ele se encarrega de alocar mais ou menos memória ao número, e podemos representar praticamente qualquer número (**Precisão Arbitrária**).

\`\`\`python
x = 250**250
print(x)
print(type(x))

# Saída:
# 305493636349960468205197939321361769978940274057232666389361390928129162652472045770185723510801522825687515269359046715531785342780428396973513311420091788963072442053377285222203558881953188370081650866793017948791366338993705251636497892270212003524508209121908744820211960149463721109340307985507678283651836204093399373959982767701148986816406250000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
# <class 'int'>
\`\`\`

> **Para saber mais:** Se você vem de versões antigas do Python (2.x), talvez sinta falta do tipo \`long\`. Na PEP 237 foi explicado por que se unificaram os \`long\` e os \`int\` no Python 3.

## Diferentes Bases (Binário, Hex, Octal)

No primeiro exemplo atribuímos um número decimal a uma variável, mas também é possível atribuir valores em binário, hexadecimal e octal.

*   O prefixo \`0b\` indica binário.
*   O prefixo \`0x\` indica hexadecimal.
*   O prefixo \`0o\` indica octal.

Ao imprimir, o número se converte em decimal para todos os casos.

\`\`\`python
a = 0b100  # Binário (4 em decimal)
b = 0x17   # Hexadecimal (23 em decimal)
c = 0o720  # Octal (464 em decimal)

print(a, type(a)) # 4 <class 'int'>
print(b, type(b)) # 23 <class 'int'>
print(c, type(c)) # 464 <class 'int'>
\`\`\`

## Tamanho na Memória

Com o seguinte exemplo podemos ver como o Python atribui diferente número de bytes às variáveis em função do tamanho do número que querem representar. A função \`getsizeof()\` do módulo \`sys\` devolve o tamanho de uma variável em bytes.

\`\`\`python
import sys

x = 5**10000
y = 10

print(sys.getsizeof(x), type(x)) # Ocupa muitos bytes
print(sys.getsizeof(y), type(y)) # Ocupa poucos bytes (geralmente 28 bytes)
\`\`\`

Embora como tenhamos dito, Python pode representar quase qualquer número, há casos limite nos quais podemos nos encontrar com uma exceção se excedermos os limites da máquina ou tentarmos operações excessivas com floats antes de converter.

\`\`\`python
# print(5e200**2)
# OverflowError (porque a base é float e estoura antes de virar int)
\`\`\`

Um caso curioso é que se tentarmos representar um número float ainda maior, nos encontraremos com \`inf\` (infinito) em vez de uma exceção.

\`\`\`python
print(2e2000**2)
# inf
\`\`\`

## Converter para int

É possível converter para \`int\` outro tipo de dado (casting). Como explicamos, o tipo \`int\` não pode conter decimais, por isso se tentamos converter um número decimal (\`float\`), **truncar-se-á** tudo o que tenhamos à direita da vírgula (não arredonda, apenas corta).

\`\`\`python
b = int(1.6)
print(b) # 1
\`\`\`

Também podemos converter strings que contenham números:

\`\`\`python
c = int("100")
print(c) # 100
\`\`\`
`;