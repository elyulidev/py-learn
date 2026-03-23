export const m3Float = `# Float

O tipo numérico float permite representar um número positivo ou negativo com decimais, ou seja, números reais. Se você vem de outras linguagens, talvez conheça o tipo double, o que significa que tem o dobro de precisão de um float. Em Python as coisas são um pouco diferentes, e os floats são na verdade doubles.

> **Para saber mais:** Os valores float são armazenados de uma forma muito particular, denominada representação em ponto flutuante. O padrão IEEE 754 explica isso em detalhes.

Portanto, se declararmos uma variável e atribuirmos um valor decimal, por padrão a variável será do tipo float.

\`\`\`python
f = 0.10093
print(f)       #0.10093
print(type(f)) #<class 'float'>
\`\`\`

## Conversão para float

Também pode ser declarado usando a notação científica com \`e\` e o expoente. O exemplo a seguir seria o mesmo que dizer 1.93 multiplicado por dez elevado a -3.

\`\`\`python
f = 1.93e-3
\`\`\`

Também podemos converter outro tipo para float usando \`float()\`. Podemos ver como \`True\` é na verdade tratado como 1, e ao convertê-lo para float, como 1.0.

\`\`\`python
a = float(True)
b = float(1)
print(a, type(a)) #1.0 <class 'float'>
print(b, type(b)) #1.0 <class 'float'>
\`\`\`

## Intervalo representável

Uma curiosidade é que os floats não têm precisão infinita. Podemos ver no exemplo a seguir como na verdade \`f\` é armazenado como se fosse 1, já que não é possível representar tanta precisão decimal.

\`\`\`python
f = 0.99999999999999999
print(f)      #1.0
print(1 == f) #True
\`\`\`

Os floats, diferentemente dos ints, possuem valores mínimos e máximos que podem representar. A precisão mínima é \`2.2250738585072014e-308\` e a máxima \`1.7976931348623157e+308\`, mas se não acredita, você mesmo pode verificar.

\`\`\`python
import sys
print(sys.float_info.min) #2.2250738585072014e-308
print(sys.float_info.max) #1.7976931348623157e+308
\`\`\`

De fato, se você tentar atribuir a uma variável um valor maior que o \`max\`, o que acontece é que essa variável assume o valor \`inf\` ou infinito.

\`\`\`python
f = 1.7976931348623157e+310
print(f) #inf
\`\`\`

Se quiser representar uma variável que tenha um valor muito alto, você também pode criar diretamente uma variável que contenha esse valor \`inf\`.

\`\`\`python
f = float('inf')
print(f) #inf
\`\`\`

## Precisão do float

Infelizmente, os computadores não podem representar qualquer número, e menos ainda se ele for irracional. Devido a isso, acontecem coisas curiosas como as seguintes.

Dividir \`1/3\` deveria resultar em 0,3 periódico, mas para o Python é impossível representar tal número.

\`\`\`python
print("{:.20f}".format(1.0/3.0))
# 0.33333333333333331483
\`\`\`

Por outro lado, a seguinte operação deveria ter como resultado zero, mas como você pode ver, não é assim.

\`\`\`python
print(0.1 + 0.1 + 0.1 - 0.3)
# 5.551115123125783e-17
\`\`\`

Felizmente, exceto para aplicações muito específicas, isso não é um problema. Afinal, quem se importa com o que há na 15ª casa decimal?`;