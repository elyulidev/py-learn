
import { Chapter } from './types';

export const CURRICULUM: Chapter[] = [
  {
    id: 'mod-1',
    title: 'Módulo 1: Introdução ao Python',
    topics: [
      { id: 'm1-what-is', title: 'O que é Python?', description: 'Conceitos fundamentais.', difficulty: 'green', promptContext: 'Explique o que é Python.' },
      { id: 'm1-install', title: 'Baixar e Instalar Python', description: 'Configuração do ambiente.', difficulty: 'green', promptContext: 'Como instalar Python.' },
      { id: 'm1-hello', title: 'Olá Mundo em Python', description: 'Primeiro programa.', difficulty: 'green', promptContext: 'Hello World.' },
      { id: 'm1-syntax', title: 'Sintaxe Básica', description: 'Indentação e estrutura.', difficulty: 'green', promptContext: 'Sintaxe básica.' },
      { id: 'm1-vars', title: 'Nomeando Variáveis I', description: 'Convenções de nomes.', difficulty: 'green', promptContext: 'Snake case e variáveis.' },
      { id: 'm1-reserved', title: 'Palavras Reservadas', description: 'Keywords proibidas.', difficulty: 'orange', promptContext: 'Keywords do Python.' },
      { id: 'm1-scope', title: 'Escopo de Variáveis', description: 'Local vs Global.', difficulty: 'orange', promptContext: 'Escopo LEGB.' },
      { id: 'm1-exec', title: 'Executando Scripts', description: 'Rodando arquivos .py.', difficulty: 'orange', promptContext: 'Como rodar .py.' },
      { id: 'm1-typing', title: 'Tipagem Dinâmica e Duck Typing', description: 'Sistema de tipos.', difficulty: 'orange', promptContext: 'Duck typing.' },
      { id: 'm1-builtin', title: 'Funções Built-in', description: 'Funções nativas.', difficulty: 'orange', promptContext: 'Print, len, type, etc.' },
      { id: 'm1-unpacking', title: 'Unpacking em Python', description: 'Desempacotamento de sequências.', difficulty: 'orange', promptContext: 'Unpacking de tuplas.' }
    ]
  },
  {
    id: 'mod-2',
    title: 'Módulo 2: Estruturas de Controle',
    topics: [
      { id: 'm2-if', title: 'Condicional if', description: 'Tomada de decisão.', difficulty: 'green', promptContext: 'If, elif, else.' },
      { id: 'm2-for', title: 'Loop for', description: 'Iteração definida.', difficulty: 'green', promptContext: 'For loops.' },
      { id: 'm2-range', title: 'Range', description: 'Gerador de sequências.', difficulty: 'green', promptContext: 'Função range().' },
      { id: 'm2-while', title: 'Loop while', description: 'Iteração indefinida.', difficulty: 'green', promptContext: 'While loops.' },
      { id: 'm2-switch', title: 'Switch (Simulação)', description: 'Alternativas ao switch clássico.', difficulty: 'orange', promptContext: 'Como simular switch antes do 3.10.' },
      { id: 'm2-match', title: 'Match', description: 'Pattern Matching (3.10+).', difficulty: 'orange', promptContext: 'Match case.' },
      { id: 'm2-break', title: 'Break', description: 'Interromper loops.', difficulty: 'orange', promptContext: 'Uso do break.' },
      { id: 'm2-continue', title: 'Continue', description: 'Pular iteração.', difficulty: 'orange', promptContext: 'Uso do continue.' },
      { id: 'm2-zip', title: 'Iterar com zip', description: 'Iteração paralela.', difficulty: 'orange', promptContext: 'Função zip.' },
      { id: 'm2-enumerate', title: 'Iterar com enumerate', description: 'Índice e valor.', difficulty: 'orange', promptContext: 'Função enumerate.' },
      { id: 'm2-listcomp', title: 'List Comprehensions', description: 'Listas concisas.', difficulty: 'orange', promptContext: 'List comprehensions.' },
      { id: 'm2-iterators', title: 'Iteradores e Iteráveis', description: 'Protocolo de iteração.', difficulty: 'red', promptContext: 'Iterators vs Iterables.' }
    ]
  },
  {
    id: 'mod-3',
    title: 'Módulo 3: Tipos e Estruturas',
    topics: [
      { id: 'm3-int', title: 'Inteiro (int)', description: 'Números inteiros.', difficulty: 'green', promptContext: 'Tipo int.' },
      { id: 'm3-bool', title: 'Booleano', description: 'Lógica binária.', difficulty: 'green', promptContext: 'Tipo bool.' },
      { id: 'm3-float', title: 'Float', description: 'Ponto flutuante.', difficulty: 'green', promptContext: 'Tipo float e precisão.' },
      { id: 'm3-complex', title: 'Números Complexos', description: 'Matemática complexa.', difficulty: 'green', promptContext: 'Tipo complex.' },
      { id: 'm3-str', title: 'Cadeias (Strings)', description: 'Texto.', difficulty: 'green', promptContext: 'Strings.' },
      { id: 'm3-list', title: 'Listas', description: 'Vetores dinâmicos.', difficulty: 'green', promptContext: 'Listas e métodos.' },
      { id: 'm3-set', title: 'Set', description: 'Conjuntos únicos.', difficulty: 'orange', promptContext: 'Sets.' },
      { id: 'm3-tuple', title: 'Tupla (Tuple)', description: 'Sequências imutáveis.', difficulty: 'orange', promptContext: 'Tuplas.' },
      { id: 'm3-dict', title: 'Dicionário', description: 'Chave-Valor.', difficulty: 'orange', promptContext: 'Dicts.' },
      { id: 'm3-frozenset', title: 'Frozenset', description: 'Conjuntos imutáveis.', difficulty: 'orange', promptContext: 'Frozenset.' },
      { id: 'm3-castings', title: 'Castings', description: 'Conversão de tipos.', difficulty: 'orange', promptContext: 'Type casting.' },
      { id: 'm3-collections', title: 'Coleções', description: 'Tipos de container especializados.', difficulty: 'orange', promptContext: 'Collections module.' },
      { id: 'm3-mutability', title: 'Mutabilidade', description: 'Conceito de memória.', difficulty: 'orange', promptContext: 'Mutable vs Immutable.' }
    ]
  },
  {
    id: 'mod-4',
    title: 'Módulo 4: Operadores',
    topics: [
      { id: 'm4-assign', title: 'Operadores de Atribuição', description: 'Atribuindo valores.', difficulty: 'green', promptContext: 'Atribuição.' },
      { id: 'm4-arith', title: 'Operadores Aritméticos', description: 'Cálculos matemáticos.', difficulty: 'green', promptContext: 'Aritmética.' },
      { id: 'm4-rel', title: 'Operadores Relacionais', description: 'Comparações.', difficulty: 'green', promptContext: 'Comparação.' },
      { id: 'm4-log', title: 'Operadores Lógicos', description: 'Lógica booleana.', difficulty: 'green', promptContext: 'Lógica booleana.' },
      { id: 'm4-bitwise', title: 'Operadores Bitwise', description: 'Operações bit a bit.', difficulty: 'orange', promptContext: 'Bitwise ops.' },
      { id: 'm4-identity', title: 'Operadores de Identidade', description: 'Teste de objeto.', difficulty: 'orange', promptContext: 'is vs ==.' },
      { id: 'm4-member', title: 'Operadores de Membresia', description: 'Pertinência.', difficulty: 'orange', promptContext: 'in operator.' },
      { id: 'm4-walrus', title: 'Operador Walrus', description: 'Atribuição em expressão.', difficulty: 'orange', promptContext: 'Walrus operator.' }
    ]
  },
  {
    id: 'mod-5',
    title: 'Módulo 5: Funções',
    topics: [
      { id: 'm5-funcs', title: 'Funções em Python', description: 'Definição básica.', difficulty: 'green', promptContext: 'Definindo funções.' },
      { id: 'm5-pass', title: 'Passagem por valor e referência', description: 'Comportamento de memória.', difficulty: 'orange', promptContext: 'Pass by object reference.' },
      { id: 'm5-args', title: 'Uso de args e kwargs', description: 'Argumentos variáveis.', difficulty: 'orange', promptContext: '*args e **kwargs.' },
      { id: 'm5-annot', title: 'Anotações em Funções', description: 'Type Hints.', difficulty: 'orange', promptContext: 'Type hints.' },
      { id: 'm5-lambda', title: 'Funções Lambda', description: 'Funções anônimas.', difficulty: 'orange', promptContext: 'Lambdas.' },
      { id: 'm5-recur', title: 'Recursividade', description: 'Funções recursivas.', difficulty: 'orange', promptContext: 'Recursion.' },
      { id: 'm5-deco', title: 'Decoradores', description: 'Wrappers de função.', difficulty: 'red', promptContext: 'Decorators.' },
      { id: 'm5-gen', title: 'Geradores', description: 'Iteradores preguiçosos.', difficulty: 'red', promptContext: 'Generators.' },
      { id: 'm5-coro', title: 'Corrotinas', description: 'Async/Await.', difficulty: 'red', promptContext: 'Coroutines.' },
      { id: 'm5-cache', title: 'Caching de Funções', description: 'Otimização.', difficulty: 'red', promptContext: 'Caching e Memoization.' },
      { id: 'm5-funcprog', title: 'Programação Funcional', description: 'Map, Filter, Reduce.', difficulty: 'red', promptContext: 'Functional programming concepts.' }
    ]
  },
  {
    id: 'mod-6',
    title: 'Módulo 6: Orientação a Objetos',
    topics: [
      { id: 'm6-oop', title: 'Programação Orientada a Objetos', description: 'Conceitos.', difficulty: 'green', promptContext: 'Intro a POO.' },
      { id: 'm6-methods', title: 'Tipos de métodos', description: 'Instância, Classe, Estático.', difficulty: 'orange', promptContext: 'Types of methods.' },
      { id: 'm6-inh', title: 'Herança', description: 'Hierarquia de classes.', difficulty: 'orange', promptContext: 'Inheritance.' },
      { id: 'm6-prop', title: 'Decorador Property', description: 'Getters e Setters.', difficulty: 'orange', promptContext: '@property.' },
      { id: 'm6-dunder', title: 'Métodos dunder ou mágicos', description: 'Métodos especiais.', difficulty: 'orange', promptContext: 'Magic methods.' },
      { id: 'm6-override', title: 'Sobrescrevendo métodos mágicos', description: 'Operadores customizados.', difficulty: 'red', promptContext: 'Overriding.' },
      { id: 'm6-abc', title: 'Interfaces e ABC', description: 'Classes Abstratas.', difficulty: 'red', promptContext: 'Abstract Base Classes.' },
      { id: 'm6-abstract', title: 'Abstração', description: 'Conceito de design.', difficulty: 'green', promptContext: 'Abstraction.' },
      { id: 'm6-coupling', title: 'Acoplamento', description: 'Dependências.', difficulty: 'green', promptContext: 'Coupling.' },
      { id: 'm6-class', title: 'Criar classe', description: 'Sintaxe.', difficulty: 'green', promptContext: 'Class syntax.' },
      { id: 'm6-encap', title: 'Encapsulamento', description: 'Proteção de dados.', difficulty: 'green', promptContext: 'Encapsulation.' },
      { id: 'm6-poly', title: 'Polimorfismo', description: 'Flexibilidade.', difficulty: 'orange', promptContext: 'Polymorphism.' },
      { id: 'm6-cohesion', title: 'Coesão', description: 'Responsabilidade única.', difficulty: 'green', promptContext: 'Cohesion.' }
    ]
  },
  {
    id: 'mod-7',
    title: 'Módulo 7: Exceções',
    topics: [
      { id: 'm7-ex', title: 'Exceções em Python', description: 'Tratamento de erros.', difficulty: 'green', promptContext: 'Exceptions handling.' },
      { id: 'm7-assert', title: 'Uso do assert()', description: 'Validações.', difficulty: 'green', promptContext: 'Assert usage.' },
      { id: 'm7-define', title: 'Definindo Exceções', description: 'Erros customizados.', difficulty: 'orange', promptContext: 'Custom exceptions.' },
      { id: 'm7-ctx', title: 'Context Managers', description: 'Declaração with.', difficulty: 'red', promptContext: 'Context managers.' }
    ]
  },
  {
    id: 'mod-8',
    title: 'Módulo 8: Ficheros (Arquivos)',
    topics: [
      { id: 'm8-read', title: 'Ler arquivos', description: 'Leitura de dados.', difficulty: 'orange', promptContext: 'Reading files.' },
      { id: 'm8-write', title: 'Escrever arquivos', description: 'Gravação de dados.', difficulty: 'orange', promptContext: 'Writing files.' }
    ]
  },
  {
    id: 'mod-9',
    title: 'Módulo 9: Computação Científica',
    topics: [
      { id: 'm9-math', title: 'Math', description: 'Módulo padrão.', difficulty: 'orange', promptContext: 'Math module.' },
      { id: 'm9-numpy', title: 'NumPy: Arrays N-dimensionais', description: 'Computação vetorial.', difficulty: 'orange', promptContext: 'Numpy basics.' },
      { id: 'm9-plt', title: 'Visualização com Matplotlib', description: 'Gráficos.', difficulty: 'orange', promptContext: 'Matplotlib basics.' }
    ]
  },
  {
    id: 'mod-10',
    title: 'Módulo 10: Modularização',
    topics: [
      { id: 'm10-modules', title: 'Módulos e Pacotes', description: 'Imports, Pip e Venv.', difficulty: 'orange', promptContext: 'Modules, imports, pip, venv and __name__.' }
    ]
  },
  {
    id: 'mod-eval',
    title: 'Avaliação',
    topics: [
      { id: 'evaluation-main', title: 'Exame Final e Projetos', description: 'Download do exame.', difficulty: 'red', promptContext: 'Exam download.' }
    ]
  },
  {
    id: 'mod-biblio',
    title: 'Bibliografia',
    topics: [
      { id: 'bibliography-main', title: 'Referências e Livros', description: 'Material de apoio.', difficulty: 'green', promptContext: 'Books and references.' }
    ]
  }
];
