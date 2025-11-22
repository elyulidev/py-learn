
export const m7Ctx = `
# Gerenciadores de Contexto (Context Managers)

Talvez você nunca tenha ouvido falar dos **gestores de contexto** ou *context managers*, mas se já trabalhou com arquivos em Python, já os usou sem perceber. Se alguma vez viu a cláusula **\`with\`**, saiba que tudo o que acontece "por baixo dos panos" faz uso dessa ferramenta.

Realmente não oferecem nenhuma funcionalidade "nova" que não pudesse ser feita de outra forma, mas permitem economizar código eliminando repetições (*boilerplate*). Em poucas palavras, permitem executar lógica de configuração e limpeza de maneira automática ao entrar e sair de um bloco de código.

O exemplo mais típico é o seguinte: abrimos um arquivo, escrevemos conteúdo nele e o fechamos.

\`\`\`python
# Fazendo uso dos context managers
with open('arquivo.txt', 'w') as arquivo:
    arquivo.write('Olá!')
\`\`\`

Como assim o fechamos? Pois é, embora não se especifique expressamente, o Python executará a função \`close()\` automaticamente quando o programa sair do bloco \`with\`. É importante notar também que a variável \`arquivo\` só deve ser usada dentro desse contexto.

O código seguinte é totalmente equivalente ao anterior, mas sem fazer uso dos context managers, utilizando tratamento de exceções.

\`\`\`python
# Sem usar context managers
arquivo = open('arquivo.txt', 'w')
try:
    arquivo.write('Olá!')
finally:
    arquivo.close()
\`\`\`

Como você pode ver, economizamos algumas linhas de código e garantimos a segurança (o arquivo fecha mesmo se houver erro na escrita). O uso de \`with\` torna o código mais expressivo e legível, uma das grandes vantagens do Python.

Seu uso estende-se também a outras classes como \`Lock\` (em *threading*) e conexões de banco de dados. Sempre que tivermos recursos que precisam ser "adquiridos" e depois "liberados" aconteça o que acontecer, os gestores de contexto são a solução ideal.

Agora que já sabemos usar os que vêm com o Python, como definimos o nosso próprio?

## Implementação com Classes

Se você quer definir seu próprio gestor de contexto, existem duas formas de fazê-lo:

1.  **Com uma classe:** Implementando os métodos mágicos (dunder) \`__enter__\` e \`__exit__\`.
2.  **Com decoradores:** Usando o decorador \`@contextmanager\` da biblioteca \`contextlib\`.

Vejamos a primeira forma. Primeiro definimos nossa classe e implementamos os métodos:

*   **\`__init__\`**: Inicialização normal do objeto.
*   **\`__enter__\`**: Este método é chamado automaticamente ao entrar no bloco \`with\`. O que ele retornar será atribuído à variável especificada após o \`as\`.
*   **\`__exit__\`**: Este método será chamado ao sair do \`with\` e contém as tarefas de limpeza. O mais importante é que ele é chamado **sempre**, mesmo que ocorra uma exceção dentro do bloco. Seria equivalente ao bloco \`finally\`.

Vejamos um exemplo simples para rastrear a execução.

\`\`\`python
class MeuGestor:
    def __enter__(self):
        print("Entra em __enter__")
        return self
        
    def __exit__(self, exc_type, exc_value, traceback):
        print("Entra em __exit__")

with MeuGestor() as f:
    print("Dentro do with")
    
# Saída:
# Entra em __enter__
# Dentro do with
# Entra em __exit__
\`\`\`

Vamos complicar um pouco mais. Como indicamos, o método \`__exit__\` é executado mesmo que ocorra uma exceção.

\`\`\`python
with MeuGestor() as f:
    raise Exception("Erro forçado")
    
# Saída:
# Entra em __enter__
# Entra em __exit__
# (E depois o erro é propagado)
\`\`\`

Os argumentos do método \`__exit__\` são usados para obter informações sobre a exceção que ocorreu (se houve alguma):

*   **\`exc_type\`**: Tipo de exceção (ex: \`<class 'ValueError'>\`).
*   **\`exc_value\`**: Valor da exceção (a mensagem de erro).
*   **\`traceback\`**: Objeto de rastreamento da pilha de execução.

### Exemplo Realista: Arquivos

Vamos criar nossa própria classe que envolve a abertura de arquivos.

\`\`\`python
class MeuArquivo:
    def __init__(self, nome_arquivo):
        self.nome_arquivo = nome_arquivo

    def __enter__(self):
        # Abre o arquivo e retorna o objeto arquivo
        self.arquivo = open(self.nome_arquivo, 'w')
        return self.arquivo

    def __exit__(self, exc_type, exc_val, exc_tb):
        # Fecha o arquivo se estiver aberto
        if self.arquivo:
            self.arquivo.close()
\`\`\`

1.  No \`__init__\` guardamos o nome.
2.  No \`__enter__\` abrimos o arquivo e retornamos a referência.
3.  No \`__exit__\` fechamos.

Agora podemos usá-la:

\`\`\`python
with MeuArquivo("teste.txt") as f:
    f.write("Olá Mundo!")
\`\`\`

## Implementação com Decoradores

Talvez você se encontre em uma situação onde criar uma classe inteira seja exagero. Por sorte, podemos usar a biblioteca **\`contextlib\`**.

Esta abordagem usa **geradores** (\`yield\`).

\`\`\`python
from contextlib import contextmanager

@contextmanager
def gestor_arquivo(nome_arquivo):
    try:
        # Equivalente ao __enter__
        f = open(nome_arquivo, 'w')
        yield f
    finally:
        # Equivalente ao __exit__
        f.close()
\`\`\`

O código antes do \`yield\` é executado ao entrar. O \`yield\` entrega o controle para o bloco dentro do \`with\`. O código após o \`yield\` (dentro do \`finally\`) é executado ao sair.

\`\`\`python
with gestor_arquivo("teste.txt") as f:
    f.write("Olá de novo!")
\`\`\`

## Aninhando Contextos (Exemplo Avançado)

É possível aninhar diferentes \`with\`. Isso pode dar lugar a códigos criativos, como um gerador automático de índices para um livro ou relatório.

A classe a seguir mantém um estado interno que muda conforme entramos ou saímos de um contexto.

\`\`\`python
class Indice:
    def __init__(self):
        self.nivel = -1
        self.numeracao = [0]

    def __enter__(self):
        self.nivel += 1
        self.numeracao.append(0)
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        self.numeracao.pop()
        self.nivel -= 1

    def imprimir(self, texto):
        self.numeracao[self.nivel] += 1
        # Cria a string de numeração (ex: 1.2.1)
        # (Fatiamento complexo para pegar do índice 1 até o nível atual)
        numeros = [str(i) for i in self.numeracao[1:self.nivel+2]]
        prefixo = ".".join(numeros)
        indentacao = "  " * self.nivel
        print(f"{indentacao}{prefixo} {texto}")
\`\`\`

Usando a classe \`Indice\`, a chamada à função \`imprimir\` terá um resultado diferente dependendo de quantos blocos \`with\` aninhados estamos.

\`\`\`python
with Indice() as ind:
    ind.imprimir('Capítulo 1')
    
    with ind:
        ind.imprimir('Seção 1.1')
        ind.imprimir('Seção 1.2')
        
        with ind:
            ind.imprimir('Subseção 1.2.1')
            
    ind.imprimir('Capítulo 2')

# Saída:
# 1 Capítulo 1
#   1.1 Seção 1.1
#   1.2 Seção 1.2
#     1.2.1 Subseção 1.2.1
# 2 Capítulo 2
\`\`\`
`;
