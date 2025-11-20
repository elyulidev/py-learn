
export const m2Switch = `
# Switch em Python (Simulação)

O **switch** é uma ferramenta comum em várias linguagens que nos permite executar diferentes seções de código dependendo de uma condição. Sua funcionalidade é similar a usar vários \`if\`, mas infelizmente o Python (antes da versão 3.10) não possuía um \`switch\` nativo.

No entanto, existem formas elegantes de simular seu comportamento, principalmente usando **dicionários**.

> **Nota:** No Python 3.10 foi introduzido o \`match\`, que veremos na próxima aula e é a solução oficial moderna. Mas entender a simulação com dicionários é crucial para ler códigos legados e entender otimização via *hash maps*.

## O problema do If/Elif

Normalmente usamos \`if\`, \`elif\` e \`else\`:

\`\`\`python
if condicao == 1:
    print("Faça a")
elif condicao == 2:
    print("Faça b")
elif condicao == 3:
    print("Faça c")
else:
    print("Faça d")
\`\`\`

Em linguagens como C ou Java, usaríamos um \`switch\`. Mas por que se preocupar se o \`if\` funciona? A resposta está na performance.

### Diferença de Complexidade
1.  **If/Elif:** As condições são avaliadas sequencialmente. Se tivermos 100 condições e a verdadeira for a última, o Python fará 100 comparações. Complexidade $O(n)$.
2.  **Switch/Dicionário:** Utiliza tabelas de dispersão (Lookup Tables). O tempo para acessar a primeira opção ou a milésima é teoricamente o mesmo. Complexidade $O(1)$.

## Emulando Switch com Dicionários

Podemos usar um dicionário onde a **chave** é o caso e o **valor** é uma função a ser executada.

### Exemplo: Calculadora

Vamos converter um código de calculadora simples.

**Versão com If/Elif:**
\`\`\`python
def opera_if(operador, a, b):
    if operador == 'soma':
        return a + b
    elif operador == 'subtrai':
        return a - b
    elif operador == 'multiplica':
        return a * b
    elif operador == 'divide':
        return a / b
    else:
        return None
\`\`\`

**Versão com Dicionário (Switch Simulado):**
\`\`\`python
def opera_dict(operador, a, b):
    return {
        'soma': lambda: a + b,
        'subtrai': lambda: a - b,
        'multiplica': lambda: a * b,
        'divide': lambda: a / b
    }.get(operador, lambda: None)()
\`\`\`

**Detalhes técnicos:**
1.  Usamos **funções lambda** para definir o código. Se não usássemos lambda, o Python executaria *todas* as operações matemáticas antes de escolher qual retornar, o que seria ineficiente.
2.  Usamos o método \`.get()\` do dicionário para lidar com o caso padrão (\`default\`), retornando \`None\` se a operação não existir.
3.  Usamos \`()\` no final para executar a função lambda escolhida.

\`\`\`python
print(opera_dict('soma', 5, 9)) # 14
\`\`\`

## Experimento de Tempo de Execução

Para provar que dicionários são mais rápidos em grandes volumes de comparações, vamos analisar o seguinte cenário: converter números de 0 a 7 para binário (string).

**1. Usando If:**
\`\`\`python
def usa_if(decimal):
    if decimal == '0': return "000"
    elif decimal == '1': return "001"
    # ... (até 7) ...
    elif decimal == '7': return "111"
    else: return "NA"
\`\`\`

**2. Usando Dicionário:**
\`\`\`python
tabela_switch = {
    '0': '000', '1': '001', '2': '010', '3': '011',
    '4': '100', '5': '101', '6': '110', '7': '111'
}
def usa_switch(decimal):
    return tabela_switch.get(decimal, "NA")
\`\`\`

### Resultados
Ao medir o tempo de execução:
*   **Usando If:** O tempo cresce linearmente. A entrada '0' é rápida (1 comparação). A entrada '7' é mais lenta (8 comparações).
*   **Usando Switch:** O tempo é constante. A entrada '0' demora o mesmo que a entrada '7'.

**Conclusão:** Para poucas opções, use \`if\`. Para muitas opções ou sistemas críticos de performance, use Dicionários (ou \`match\` no Python 3.10+).
`;
