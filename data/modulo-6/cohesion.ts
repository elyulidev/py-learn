
export const m6Cohesion = `
# Coesão em Programação

A coesão faz referência ao grau de relação entre os elementos de um módulo. No design de uma função, é importante pensar bem na tarefa que ela vai realizar, tentando que seja única e bem definida. Quanto mais coisas diferentes uma função fizer sem relação entre si, mais complicado será entender o código.

Existem, portanto, dois tipos de coesão:

1.  **Coesão fraca (ou baixa):** Indica que a relação entre os elementos é baixa. Ou seja, não pertencem a uma única funcionalidade.
2.  **Coesão forte (ou alta):** Indica que existe uma alta relação entre os elementos existentes dentro do módulo. Este deve ser nosso objetivo ao projetar programas.

Existe também outro conceito chamado **acoplamento**, que explicamos em outro capítulo. Normalmente, acoplamento fraco relaciona-se com coesão forte.

## Exemplo Prático

Vejamos com um exemplo. Temos uma função \`soma()\` que soma dois números. O problema é que, além de somar dois números, ela os converte para \`float()\` e, além disso, pede ao usuário que introduza o número na tela.

Poderia parecer que essas outras duas funcionalidades não são grande coisa, mas se, por exemplo, uma pessoa quiser usar nossa função \`soma()\` mas já tiver os números e não quiser pedi-los na tela (talvez venham de um banco de dados ou de outro cálculo), nossa função não lhe serviria.

\`\`\`python
# Mal. Coesão fraca
def soma():
    num1 = float(input("Dê o primeiro número: "))
    num2 = float(input("Dê o segundo número: "))
    resultado = num1 + num2
    print(resultado)

soma()
\`\`\`

A função acima faz três coisas: Entrada de Dados (I/O), Processamento (Cálculo) e Saída de Dados (I/O).

Para que a função tivesse uma **coesão forte**, seria conveniente que realizasse uma única tarefa bem definida, que é somar. A entrada e saída de dados deveriam ser tratadas fora dela.

\`\`\`python
# Bem. Coesão forte
def soma(numeros):
    total = 0
    for i in numeros:
        total = total + i
    return total

# O uso da função é separado da lógica de negócio
meus_numeros = [10, 20]
print(soma(meus_numeros)) # 30
\`\`\`

Evidentemente, um exemplo tão simples como o explicado não tem implicações demasiado graves, mas em sistemas grandes é vital buscar que as funções ou classes realizem uma única tarefa (Princípio da Responsabilidade Única).

Projetar código com coesão forte nos permite:

1.  **Reduzir a complexidade** do módulo, já que terá um menor número de operações focadas.
2.  **Reutilizar** os módulos mais facilmente (como vimos, a segunda função \`soma\` pode ser usada em qualquer contexto).
3.  O sistema será mais **facilmente mantido**.
`;
