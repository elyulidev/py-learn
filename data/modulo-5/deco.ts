
export const m5Deco = `
# Decoradores em Python

Os decoradores são funções que modificam o comportamento de outras funções, ajudam a encurtar nosso código e o tornam mais *Pythônico*. Se você já viu o símbolo \`@\`, você está diante de um decorador (ou *decorator*), seja um que o Python oferece por padrão ou um criado especificamente.

Se você ainda não domina bem as funções, recomendamos revisar o capítulo anterior antes de continuar.

Vejamos um exemplo muito simples. Temos uma função \`soma()\` que vamos decorar usando \`meu_decorador()\`. Para isso, antes da declaração da função soma, fazemos uso de \`@meu_decorador\`.

\`\`\`python
def meu_decorador(funcao):
    def nova_funcao(a, b):
        print("Vai ser chamada")
        c = funcao(a, b)
        print("Foi chamada")
        return c
    return nova_funcao

@meu_decorador
def soma(a, b):
    print("Entra na função soma")
    return a + b

soma(5, 8)

# Saída:
# Vai ser chamada
# Entra na função soma
# Foi chamada
\`\`\`

O que o \`meu_decorador()\` faz é definir uma nova função que encapsula ou envolve a função que é passada como entrada. Concretamente, ele faz uso de dois \`print()\`, um antes e outro depois da chamada da função original.

Portanto, qualquer função que use \`@meu_decorador\` terá dois prints extras, um no início e outro no final, independentemente do que a função realmente faça.

Vejamos outro exemplo usando o decorador sobre outra função.

\`\`\`python
@meu_decorador
def subtrai(a, b):
    print("Entra na função subtrai")
    return a - b

subtrai(5, 3)

# Saída:
# Vai ser chamada
# Entra na função subtrai
# Foi chamada
\`\`\`

Uma vez entendido isso, vamos entrar um pouco mais em detalhes vendo como o Python trata as funções, como se pode definir um decorador sem \`@\`, como se podem passar argumentos aos decoradores e, para finalizar, exemplos práticos.

## Definindo decoradores

Antes de mais nada, é preciso entender que **tudo em Python é um objeto**, inclusive uma função. De fato, pode-se atribuir uma função a uma variável. Note a diferença entre:

1.  \`diga_ola()\`: chama a função.
2.  \`diga_ola\`: faz referência à função, não a chama.

\`\`\`python
def diga_ola():
    print("Olá")
    
f1 = diga_ola() # Chama a função. f1 recebe o retorno (None)
f2 = diga_ola   # Atribui a função a f2

print(f1)      # None
print(f2)      # <function diga_ola at 0x...>

# f1()         # Erro! Não é válido pois f1 é None
f2()           # Chama f2, que é diga_ola()

del f2         # Apaga a referência f2 
# f2()         # Erro! Já não existe

diga_ola()     # Ok. A função original segue existindo
\`\`\`

Entendido isso, demos um passo a mais. Em Python, podem-se definir **funções dentro de outras funções** (Closures). A função \`operacoes\` define \`soma()\` e \`subtrai()\`, e dependendo do parâmetro de entrada \`op\`, devolverá uma ou outra.

\`\`\`python
def operacoes(op):
    def soma(a, b):
        return a + b
    def subtrai(a, b):
        return a - b
    
    if op == "soma":
        return soma
    elif op == "subtrai":
        return subtrai
    
funcao_soma = operacoes("soma")
print(funcao_soma(5, 7)) # 12

funcao_subtrai = operacoes("subtrai")
print(funcao_subtrai(5, 7)) # -2
\`\`\`

Se chamamos a função devolvida com dois operandos, realizar-se-á uma operação distinta em função de se usou soma ou subtração.

Agora já podemos dar a última volta no parafuso e escrever nosso próprio decorador **sem fazer uso de \`@\`**. 

Por um lado temos o decorador, que recebe como entrada uma função e devolve outra função decorada. Por outro, a função \`soma()\` que queremos decorar.

\`\`\`python
def decorador(func):
    def envoltorio_func(a, b):
        print("Decorador antes de chamar a função")
        c = func(a, b)
        print("Decorador depois de chamar a função")
        return c
    return envoltorio_func

def soma(a, b):
    print("Dentro de soma")
    return a + b

# Manualmente decorando a função
funcao_decorada = decorador(soma)

funcao_decorada(5, 8)
\`\`\`

Então, fazendo uso de \`decorador\` e passando como entrada \`soma\`, recebemos uma nova função decorada com uma funcionalidade nova, pronta para ser usada. **Isso é exatamente o que o açúcar sintático \`@\` faz por baixo dos panos.**

## Decoradores com parâmetros

Talvez você queira que seu decorador tenha algum parâmetro de entrada para modificar seu comportamento. Isso pode ser feito envolvendo mais uma vez a função (3 níveis de profundidade).

\`\`\`python
def meu_decorador_com_args(arg):
    def decorador_real(funcao):
        def nova_funcao(a, b):
            print(arg)
            c = funcao(a, b)
            print(arg)
            return c
        return nova_funcao
    return decorador_real

@meu_decorador_com_args("Imprimir isto antes e depois")
def soma(a, b):
    print("Entra na função soma")
    return a + b

soma(5, 8)
# Saída:
# Imprimir isto antes e depois
# Entra na função soma
# Imprimir isto antes e depois
\`\`\`

É importante recalcar que os exemplos mostrados até agora são didáticos. Vejamos exemplos mais práticos.

## Exemplo: Logger

Uma das utilidades mais comuns dos decoradores são os **loggers**. Seu uso nos permite escrever em um arquivo os resultados de certas operações, quais funções foram chamadas, ou qualquer informação que no futuro resulte útil para depuração.

No exemplo seguinte temos um uso mais completo do decorador \`log()\` que escreve em um arquivo os resultados das funções que foram chamadas. Note o uso de \`*args\` e \`**kwargs\` para fazer o decorador funcionar com qualquer tipo de função.

\`\`\`python
def log(nome_arquivo):
    def decorador_log(func):
        def decorador_funcao(*args, **kwargs):
            with open(nome_arquivo, 'a') as arquivo:
                # Executa a função e captura o output
                output = func(*args, **kwargs)
                # Escreve o resultado no arquivo
                arquivo.write(f"{output}\\n")
            return output
        return decorador_funcao
    return decorador_log

@log('saida.log')
def soma(a, b):
    return a + b

@log('saida.log')
def subtrai(a, b):
    return a - b

@log('saida.log')
def multiplicadivide(a, b, c):
    return a*b/c

soma(10, 30)
subtrai(7, 23)
multiplicadivide(5, 10, 2)
\`\`\`

Neste caso, o decorador pode ser usado sobre funções que têm diferente número de parâmetros de entrada, e sua funcionalidade será sempre a mesma: escrever no arquivo passado como parâmetro os resultados das operações.

## Exemplo: Uso autorizado (Autenticação)

Outro caso de uso muito importante e amplamente usado em frameworks web como **Flask** ou **Django**, é o uso de decoradores para assegurar que uma função só seja chamada quando o usuário se autenticou.

Realizando uma simplificação, poderíamos ter um decorador que exigisse que uma variável \`autenticado\` fosse \`True\`. A função será executada apenas se dita variável global for verdadeira, e dará um erro caso contrário.

\`\`\`python
autenticado = True

def requer_autenticacao(f):
    def funcao_decorada(*args, **kwargs):
        if not autenticado:
            print("Erro. O usuário não se autenticou")
        else:
            return f(*args, **kwargs)
    return funcao_decorada

@requer_autenticacao
def diga_ola():
    print("Olá!")
    
diga_ola()
\`\`\`

Experimente mudar a variável \`autenticado\` para \`False\` e veja o que acontece.
`;
