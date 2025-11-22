
export const m6Class = `
# Criar Classe em Python

Criar uma classe em Python é extremamente simples e pode ser feito em apenas duas linhas de código usando a palavra reservada **\`class\`**.

\`\`\`python
class MinhaClasse:
    pass
\`\`\`

## Adicionar atributos à classe

Podemos adicionar atributos diretamente à classe. Neste caso, teremos atributos gerais que pertencem à classe em si e não a uma instância específica (são compartilhados).

\`\`\`python
class MinhaClasse:
    atributo1 = "valor1"
    atributo2 = "valor2"
\`\`\`

## Adicionar construtor à classe

Pode-se dizer que toda classe tem um construtor (ou inicializador), que recebe parâmetros de entrada quando o objeto é criado. Criamos, portanto, o método **\`__init__\`**.

Note a diferença entre \`atributo1\` e \`argumento1\` (dica: atributo de classe vs atributo de instância).

\`\`\`python
class MinhaClasse:
    atributo1 = "valor1"
    atributo2 = "valor2"
    
    def __init__(self, argumento1):
        # Atributo de instância (único para cada objeto)
        self.argumento1 = argumento1
\`\`\`

Já estamos com uma classe muito mais completa, mas vamos continuar.

## Adicionar métodos à classe

Além de atributos e do construtor, toda classe tem um conjunto de funções ou métodos que realizam diferentes funcionalidades. Vamos criar a \`funcao1()\`.

\`\`\`python
class MinhaClasse:
    atributo1 = "valor1"
    atributo2 = "valor2"
    
    def __init__(self, argumento1):
        self.argumento1 = argumento1
        
    def funcao1(self):
        print("Esta é a função 1")
\`\`\`

## Criar objeto (Instanciar)

Diferente da classe (que é o modelo), um objeto define uma entidade particular, com atributos particulares para esse objeto. Ou seja, o objeto é a **instância** da classe.

Ele pode ser criado chamando a classe com parênteses \`()\` e passando os argumentos de entrada separados por vírgula.

\`\`\`python
minha_clase = MinhaClasse("Olá")
\`\`\`

## Acessar métodos e atributos

Uma vez que temos o objeto \`minha_clase\`, podemos acessar todo o seu conteúdo, tanto métodos quanto atributos de classe ou de instância. Simplesmente usamos o objeto, um ponto \`.\` e o nome do método ou atributo.

\`\`\`python
print(minha_clase.atributo1)   # Acessa atributo de classe
print(minha_clase.atributo2)   # Acessa atributo de classe
print(minha_clase.argumento1)  # Acessa atributo de instância (definido no __init__)
minha_clase.funcao1()          # Executa o método
\`\`\`
`;
