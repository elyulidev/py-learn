
export const m9Plt = `
# Visualização com Matplotlib

O **Matplotlib** é a biblioteca de visualização de dados mais popular e madura do ecossistema Python. Embora existam bibliotecas mais modernas (como Seaborn ou Plotly), o Matplotlib continua sendo a base sobre a qual muitas outras são construídas e é a ferramenta padrão para gerar gráficos estáticos com **qualidade de publicação** científica.

Para um matemático, o Matplotlib é o equivalente computacional a desenhar funções no quadro, mas com precisão absoluta e capacidades de personalização infinitas.

## Instalação e Importação

Para utilizar o Matplotlib, é necessário instalá-lo previamente. Execute no seu terminal:

\`\`\`bash
pip install matplotlib
\`\`\`

A convenção padrão para importação é a seguinte:

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np
\`\`\`

O submódulo \`pyplot\` fornece uma interface de estado (state-machine) muito parecida com a do MATLAB, o que facilita o aprendizado inicial.

## 1. O Gráfico Básico: Plotando Funções $y = f(x)$

A tarefa mais comum é visualizar uma função contínua. Como computadores não lidam com o contínuo, usamos o **NumPy** para discretizar o domínio ($x$) e calcular a imagem ($y$).

Vamos plotar a função seno: $y = \sin(x)$.

\`\`\`python
# 1. Definir o domínio (0 a 2*pi) com 100 pontos
x = np.linspace(0, 2 * np.pi, 100)

# 2. Calcular a imagem
y = np.sin(x)

# 3. Criar o gráfico
plt.plot(x, y)

# 4. Mostrar o gráfico
plt.show()
\`\`\`

A função \`plt.plot(x, y)\` liga os pontos $(x_i, y_i)$ com linhas retas. Se usarmos poucos pontos no \`linspace\`, o gráfico ficará "quadrado". Com 100 pontos, a ilusão de uma curva suave é perfeita.

## 2. Personalização (A Estética Acadêmica)

Um gráfico sem rótulos é inútil em ciência. O Matplotlib permite adicionar títulos, legendas e rótulos aos eixos. Uma característica que matemáticos adoram é o suporte a **LaTeX** dentro dos textos.

\`\`\`python
x = np.linspace(-np.pi, np.pi, 200)
y_sin = np.sin(x)
y_cos = np.cos(x)

# Plotando duas curvas no mesmo gráfico
# 'label' é usado para a legenda
# 'color' e 'linestyle' definem o estilo
plt.plot(x, y_sin, label=r'$y = \sin(x)$', color='blue', linestyle='-')
plt.plot(x, y_cos, label=r'$y = \cos(x)$', color='red', linestyle='--')

# Adicionando metadados
plt.title("Funções Trigonométricas")
plt.xlabel("Ângulo (radianos)")
plt.ylabel("Amplitude")

# Adicionando uma grade (grid)
plt.grid(True, alpha=0.3) # alpha define a transparência

# Mostra a legenda (usa os 'labels' definidos acima)
plt.legend()

plt.show()
\`\`\`

> **Dica:** O prefixo \`r\` antes das strings (ex: \`r'$y=\sin(x)$'\`) indica uma *raw string*. Isso é crucial ao escrever LaTeX para que o Python não interprete as barras invertidas \`\\\` como caracteres de escape.

## 3. Subplots (Múltiplos Gráficos)

Frequentemente queremos comparar gráficos lado a lado, e não um em cima do outro. A função \`plt.subplot\` permite dividir a janela de figura em uma grade.

A sintaxe é \`plt.subplot(linhas, colunas, índice)\`.

\`\`\`python
x = np.linspace(0, 10, 100)

plt.figure(figsize=(10, 4)) # Define o tamanho da figura (largura, altura)

# Gráfico 1 (Esquerda)
plt.subplot(1, 2, 1) # 1 linha, 2 colunas, posição 1
plt.plot(x, np.exp(x))
plt.title("Exponencial $e^x$")
plt.grid(True)

# Gráfico 2 (Direita)
plt.subplot(1, 2, 2) # 1 linha, 2 colunas, posição 2
plt.plot(x, np.log(x + 1)) # log(x+1) para evitar log(0)
plt.title("Logaritmo $\ln(x+1)$")
plt.grid(True)

plt.show()
\`\`\`

## 4. Tipos de Gráficos Comuns

Além de linhas (\`plot\`), existem outros tipos fundamentais.

### Scatter Plots (Dispersão)
Usado para dados discretos, experimentais ou quando a ordem dos pontos não importa.

\`\`\`python
# Gerando dados aleatórios
x = np.random.rand(50)
y = np.random.rand(50)
cores = np.random.rand(50)
tamanhos = 100 * np.random.rand(50)

plt.scatter(x, y, c=cores, s=tamanhos, alpha=0.5)
plt.title("Dispersão Aleatória")
plt.show()
\`\`\`

### Histogramas
Essencial para **Estatística** e Probabilidade. Visualiza a distribuição de frequência de uma amostra.

\`\`\`python
# Gerar 10000 pontos de uma Distribuição Normal (Gaussiana)
dados = np.random.randn(10000)

# 'bins' define o número de barras
plt.hist(dados, bins=50, color='green', edgecolor='black', alpha=0.7)
plt.title("Histograma: Distribuição Normal $\mu=0, \sigma=1$")
plt.show()
\`\`\`

### Mapas de Calor (Imshow)
Útil para visualizar matrizes ou funções de duas variáveis $z = f(x, y)$.

\`\`\`python
# Criando uma matriz 10x10 com valores aleatórios
matriz = np.random.random((10, 10))

plt.imshow(matriz, cmap='viridis', interpolation='nearest')
plt.colorbar() # Adiciona a barra de escala de cor
plt.title("Mapa de Calor (Matriz)")
plt.show()
\`\`\`

## 5. A Interface Orientada a Objetos (O Jeito "Pro")

Até agora usamos a interface funcional (\`plt.plot\`). Porém, para ter controle total sobre figuras complexas, os cientistas usam a interface orientada a objetos.

A ideia é criar explicitamente os objetos **Figure** (o quadro branco) e **Axes** (os eixos onde desenhamos).

\`\`\`python
# Cria uma figura e um conjunto de eixos
fig, ax = plt.subplots() 

# Agora usamos métodos do objeto 'ax', não 'plt'
x = np.linspace(0, 10, 100)
ax.plot(x, x**2, label='Quadrática')
ax.plot(x, x**3, label='Cúbica')

# A nomenclatura muda ligeiramente (set_...)
ax.set_title("Comparação de Polinômios")
ax.set_xlabel("Eixo X")
ax.set_ylabel("Eixo Y")
ax.legend()
ax.grid(True)

plt.show()
\`\`\`

Esta abordagem é muito mais robusta quando temos múltiplos eixos ou queremos personalizar detalhes finos de renderização.

### Exemplo Avançado: Dois Eixos Y (Escalas diferentes)

Frequentemente em física ou matemática aplicada, queremos plotar duas grandezas com escalas muito diferentes no mesmo gráfico (ex: Pressão e Temperatura).

\`\`\`python
x = np.linspace(0, 10, 100)
y1 = np.exp(x)      # Cresce muito rápido
y2 = np.sin(x)      # Oscila entre -1 e 1

fig, ax1 = plt.subplots()

color = 'tab:red'
ax1.set_xlabel('Tempo (s)')
ax1.set_ylabel('Exponencial', color=color)
ax1.plot(x, y1, color=color)
ax1.tick_params(axis='y', labelcolor=color)

# Instanciamos um segundo eixo que compartilha o mesmo eixo x
ax2 = ax1.twinx()  

color = 'tab:blue'
ax2.set_ylabel('Seno', color=color)  
ax2.plot(x, y2, color=color)
ax2.tick_params(axis='y', labelcolor=color)

plt.title("Gráfico com dois eixos Y")
fig.tight_layout()  # Ajusta o layout para não cortar textos
plt.show()
\`\`\`

## 6. Salvando Figuras

Para incluir seus gráficos em um artigo (LaTeX/Word) ou apresentação, você precisa exportá-los. O Matplotlib suporta muitos formatos vetoriais (PDF, SVG, EPS) e matriciais (PNG, JPG).

\`\`\`python
x = np.linspace(0, 2*np.pi, 100)
plt.plot(x, np.sin(x))

# dpi = Dots Per Inch (Resolução)
# bbox_inches='tight' remove bordas brancas extras
plt.savefig('meu_grafico.png', dpi=300, bbox_inches='tight')

# Para LaTeX, prefira PDF
plt.savefig('meu_grafico.pdf')
\`\`\`

## Resumo

1.  Use **NumPy** para gerar os dados do domínio e imagem.
2.  Use **\`plt.plot()\`** para visualizações rápidas.
3.  Use **\`fig, ax = plt.subplots()\`** (OO) para gráficos complexos e profissionais.
4.  Use **LaTeX** nos títulos e legendas para notação matemática correta.
5.  Explore \`scatter\`, \`hist\` e \`imshow\` para diferentes tipos de dados.
`;
