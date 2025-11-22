
export const m5Coro = `
# Corrotinas (Async/Await)

As **corrotinas** (ou *coroutines*) são componentes fundamentais da programação assíncrona em Python. Enquanto as funções normais (subrotinas) seguem um fluxo linear — começam, executam e retornam —, as corrotinas são funções que podem ser **pausadas** e **retomadas** em pontos específicos da execução.

Historicamente, as corrotinas em Python eram implementadas usando geradores (com \`yield\`), mas a partir do Python 3.5, a linguagem introduziu uma sintaxe nativa e explícita para programação assíncrona: **\`async\`** e **\`await\`**.

## Subrotinas vs Corrotinas

Para entender a diferença, vamos olhar para uma função normal (subrotina):

\`\`\`python
def funcao_normal():
    print("Inicio")
    # ... faz algo ...
    print("Fim")
\`\`\`

Quando chamamos \`funcao_normal()\`, ela roda do início ao fim sem interrupção. O chamador fica bloqueado esperando ela terminar.

Uma corrotina, por outro lado, é definida com **\`async def\`**:

\`\`\`python
async def minha_corrotina():
    print("Inicio")
    await alguma_coisa() # Pausa aqui até 'alguma_coisa' terminar
    print("Fim")
\`\`\`

Ao chamar \`minha_corrotina()\`, o código dentro dela **não é executado imediatamente**. Em vez disso, ela retorna um objeto *coroutine*. Para que o código rode, esse objeto precisa ser "agendado" em um **Event Loop** (Laço de Eventos).

## O Event Loop e \`asyncio\`

O módulo padrão **\`asyncio\`** fornece a infraestrutura para escrever código concorrente usando a sintaxe async/await.

Para executar uma corrotina, geralmente usamos \`asyncio.run()\`:

\`\`\`python
import asyncio

async def diga_ola():
    print("Olá!")
    # Simula uma operação demorada (ex: request de rede) sem bloquear a CPU
    await asyncio.sleep(1) 
    print("Mundo!")

# Executa a corrotina principal
asyncio.run(diga_ola())

# Saída:
# Olá!
# (espera 1 segundo)
# Mundo!
\`\`\`

O \`await\` é o ponto chave. Ele diz: *"Pause a execução desta função aqui, devolva o controle para o Event Loop e só volte quando a tarefa aguardada terminar"*. Enquanto isso, o Event Loop pode executar outras tarefas.

## Executando tarefas em paralelo (Concorrência)

A grande vantagem das corrotinas não é fazer uma única coisa esperar, mas fazer **várias coisas esperarem ao mesmo tempo**.

Imagine que você precisa baixar dados de 3 sites diferentes. Se cada download demora 2 segundos:
*   **Síncrono (Sequencial):** 2 + 2 + 2 = 6 segundos.
*   **Assíncrono (Concorrente):** Inicia os 3 quase ao mesmo tempo. Total ≈ 2 segundos.

Podemos usar **\`asyncio.gather\`** para rodar corrotinas concorrentemente:

\`\`\`python
import asyncio
import time

async def tarefa(nome, segundos):
    print(f"Tarefa {nome} iniciada. Vai levar {segundos}s.")
    await asyncio.sleep(segundos)
    print(f"Tarefa {nome} finalizada.")
    return f"Resultado {nome}"

async def main():
    inicio = time.time()
    
    # Agenda as 3 tarefas para rodarem "juntas"
    resultados = await asyncio.gather(
        tarefa("A", 2),
        tarefa("B", 1),
        tarefa("C", 3)
    )
    
    fim = time.time()
    print(f"Resultados: {resultados}")
    print(f"Tempo total: {fim - inicio:.2f} segundos")

asyncio.run(main())

# Saída Estimada:
# Tarefa A iniciada...
# Tarefa B iniciada...
# Tarefa C iniciada...
# Tarefa B finalizada. (após 1s)
# Tarefa A finalizada. (após 2s)
# Tarefa C finalizada. (após 3s)
# Resultados: ['Resultado A', 'Resultado B', 'Resultado C']
# Tempo total: 3.01 segundos
\`\`\`

Note que o tempo total foi determinado pela tarefa mais longa (3s), e não pela soma delas.

## Regras Importantes

1.  **Contágio do Async:** Você só pode usar \`await\` dentro de uma função definida com \`async def\`. Isso tende a fazer com que o "async" se espalhe por toda a sua base de código.
2.  **Não bloqueie o Loop:** Dentro de uma função \`async\`, evite chamadas que travam a CPU (como cálculos matemáticos pesados ou \`time.sleep\`). Se você travar o loop, nenhuma outra corrotina roda. Use \`asyncio.sleep\` em vez de \`time.sleep\`.
3.  **I/O Bound vs CPU Bound:** Corrotinas são excelentes para tarefas limitadas por Entrada/Saída (Rede, Disco, Banco de Dados). Para tarefas limitadas por CPU (cálculos pesados), o \`asyncio\` não ajuda muito (já que o Python usa um único núcleo); nesses casos, prefira o módulo \`multiprocessing\`.

## Exemplo Matemático: Simulação Assíncrona

Suponha que você queira simular vários processos estocásticos independentes que avançam no tempo.

\`\`\`python
import asyncio
import random

async def caminhada_aleatoria(id_processo):
    posicao = 0
    passos = 0
    while abs(posicao) < 5: # Continua até afastar-se 5 unidades da origem
        await asyncio.sleep(0.1) # Simula tempo de computação/espera
        passo = random.choice([-1, 1])
        posicao += passo
        passos += 1
    return f"Processo {id_processo}: terminou em {passos} passos na posição {posicao}"

async def simulacao():
    # Roda 10 simulações em paralelo
    tarefas = [caminhada_aleatoria(i) for i in range(10)]
    resultados = await asyncio.gather(*tarefas)
    
    for r in resultados:
        print(r)

asyncio.run(simulacao())
\`\`\`

## Resumo

*   **\`async def\`**: Define uma corrotina.
*   **\`await\`**: Pausa a corrotina até que o resultado esteja pronto.
*   **\`asyncio.run()\`**: Ponto de entrada para executar código assíncrono.
*   **\`asyncio.gather()\`**: Executa múltiplas corrotinas concorrentemente.

As corrotinas permitem escrever código concorrente que parece sequencial, facilitando o raciocínio sobre fluxos complexos sem a dor de cabeça de gerenciar Threads e Locks manualmente.
`;
