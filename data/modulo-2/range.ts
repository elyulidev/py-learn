
export const m2Range = `
# Range em Python

## Uso do range

Uma das iterações mais comuns que se realizam na programação é a de iterar um número entre, por exemplo, 0 e $n$. Se você já programa em outras linguagens (como C ou Java), com certeza já escreveu muitas vezes estruturas como \`for(int i=0; i<n; i++)\`.

Suponhamos que queremos iterar uma variável \`i\` de 0 a 5. Fazendo uso do que vimos anteriormente com tuplas, poderíamos fazer o seguinte:

\`\`\`python
for i in (0, 1, 2, 3, 4, 5):
    print(i) 
# Saída: 0, 1, 2, 3, 4, 5
\`\`\`

Trata-se de uma solução que cumpre com nosso requisito. O conteúdo depois do \`in\` é uma tupla, que é iterável. No entanto, escrever todos os números manualmente não é prático para intervalos grandes. Há uma forma muito mais eficiente de fazer isso em Python: fazendo uso da função **\`range()\`**.

\`\`\`python
for i in range(6):
    print(i) 
# Saída: 0, 1, 2, 3, 4, 5
\`\`\`

O \`range()\` gera uma sequência de números que vão desde 0 (por padrão) até o número que se passa como parâmetro **menos 1**.

## Parâmetros do range

Na realidade, a função \`range\` é muito flexível e aceita até três parâmetros, separados por vírgula:

\`\`\`python
# range(inicio, fim, salto)
\`\`\`

1.  **Início (start):** Onde a sequência começa (inclusivo). Padrão é 0.
2.  **Fim (stop):** Onde a sequência termina (**exclusivo**, ou seja, não inclui este número).
3.  **Salto (step):** O incremento entre cada número. Padrão é 1.

Por exemplo, se chamarmos \`range(5, 20, 2)\`, serão gerados números de 5 até 19, pulando de dois em dois.

Um truque útil para visualizar o que o range está gerando (já que o range é um gerador preguiçoso e não uma lista por si só) é convertê-lo em uma lista usando \`list()\`:

\`\`\`python
print(list(range(5, 20, 2)))
# Saída: [5, 7, 9, 11, 13, 15, 17, 19]
\`\`\`

Misturando isso com o loop \`for\`, temos:

\`\`\`python
for i in range(5, 20, 2):
    print(i) 
# Saída: 5, 7, 9, 11, 13, 15, 17, 19
\`\`\`

## Sequências Inversas

Podem-se gerar também sequências inversas (decrescentes), começando por um número maior e terminando em um menor. Para isso, o **salto (step) deverá ser negativo**.

\`\`\`python
for i in range(5, 0, -1):
    print(i) 
# Saída: 5, 4, 3, 2, 1
\`\`\`

Note que, como o limite final é exclusivo, a sequência para em 1 (um passo antes de 0).
`;
