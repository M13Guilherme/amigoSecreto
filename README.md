# 🤝 Amigo Secreto

Aplicação web para organizar sorteios de amigo secreto, desenvolvida como exercício prático do curso de **Lógica de Programação** da [Alura](https://www.alura.com.br/).

## 📋 Sobre o projeto

A aplicação permite cadastrar participantes e realizar o sorteio automaticamente, definindo quem tira quem no amigo secreto. O resultado é exibido na tela após o sorteio, com cada participante vinculado ao seu amigo secreto.

> O HTML e o CSS foram fornecidos pela Alura como material de apoio. O foco do exercício foi o desenvolvimento da lógica em JavaScript.

## 🚀 Funcionalidades

- Adicionar participantes à lista
- Remover participantes da lista clicando no nome
- Validar campo vazio ao adicionar um nome
- Impedir nomes duplicados na lista
- Exigir mínimo de 3 participantes para realizar o sorteio
- Embaralhar os participantes de forma aleatória antes do sorteio
- Exibir o resultado do sorteio na tela
- Reiniciar o sorteio limpando todos os dados

## 🛠️ Tecnologias utilizadas

- HTML
- CSS
- JavaScript

## 📁 Estrutura do projeto

```
amigoSecreto/
├── assets/       # Imagens e recursos da aplicação
├── js/           # Lógica em JavaScript
├── index.html    # Página principal
└── style.css     # Estilos da aplicação
```

## ▶️ Como executar

1. Clone o repositório:
```bash
git clone https://github.com/M13Guilherme/amigoSecreto.git
```

2. Abra o arquivo `index.html` no navegador.

> Dica: use a extensão **Live Server** do VS Code para facilitar o desenvolvimento.

## 📚 Aprendizados

- Manipulação de arrays com `push()`, `splice()` e `includes()`
- Algoritmo de embaralhamento Fisher-Yates com `Math.random()`
- Criação e remoção dinâmica de elementos com `createElement()`, `appendChild()` e `remove()`
- Uso de `indexOf()` para localizar itens no array
- Navegação por arrays com laço `for`
- Validação de entradas do usuário com mensagens de alerta
