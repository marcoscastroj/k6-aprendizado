# Projeto de Testes de Carga com K6

Este projeto contém diversos cenários de testes de carga, estresse, pico, fumaça e soak utilizando o [K6](https://k6.io/), focados na rota `/signup` de uma API local.

## Estrutura

- **common/**: Configurações globais (ex: URL base, headers).
- **data/**: Utilitários para geração de dados dinâmicos (ex: usuários aleatórios).
- **requests/**: Funções para requisições HTTP.
- **scenarios/**: Cenários de teste reutilizáveis.
- **k6-tests-aula/**: Exemplos de scripts da aula do PapitoTECH.
- **smoke_test.js, stress_test.js, spike_test.js, soak_test.js, load_test.js**: Scripts para diferentes tipos de teste.

## Pré-requisitos

- [xK6](https://github.com/grafana/xk6) instalado.
- [xK6-Faker](https://github.com/grafana/xk6-faker) buildado.
- API rodando localmente em `http://localhost:3333`.


## Como executar
Importe o build do xK6 para raiz do projeto ou adicione ao PATH do window.

Execute qualquer teste com:

```sh
.\k6.exe run nome_do_teste.js
```

## Caso queira exibição de dashboard:

Execute isso:
```sh
$env:K6_WEB_DASHBOARD_EXPORT="report.html";.\k6.exe run nome_do_teste.js
```
