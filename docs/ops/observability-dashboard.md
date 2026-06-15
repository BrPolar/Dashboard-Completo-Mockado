# Observability Dashboard

## Objetivo

Este documento descreve a estratégia de observabilidade aplicada ao dashboard da Horta Inteligente, incluindo logs, métricas e procedimentos de investigação de falhas.

---

# Logs Estruturados

O frontend registra eventos relevantes para facilitar depuração e monitoramento.

Exemplos de eventos registrados:

* Carregamento da Dashboard
* Acesso à tela de Alertas
* Acesso ao Histórico
* Criação de novo canteiro
* Edição de canteiro
* Remoção de canteiro

Exemplo de log estruturado:

```json
{
  "timestamp": "2026-06-14T20:15:30Z",
  "event": "canteiro_criado",
  "canteiro": "Novo Canteiro"
}
```

---

# Métricas Monitoradas

## Quantidade de Alertas Ativos

A aplicação calcula continuamente a quantidade de canteiros em estado de alerta.

Regra atual:

* Umidade abaixo de 30%

Exemplo:

```text
Alertas ativos: 1
```

---

## Quantidade de Canteiros Monitorados

Métrica utilizada para acompanhamento operacional.

Exemplo:

```text
Total de canteiros: 4
```

---

# Evidência de Instrumentação

Durante os testes locais foram observados registros de eventos como:

```text
[INFO] Dashboard carregado
[INFO] Tela de alertas acessada
[INFO] Novo canteiro criado
[INFO] Canteiro removido
```

Esses registros demonstram que a aplicação produz informações úteis para diagnóstico durante a execução.

---

# Runbook de Investigação

## Cenário

Dashboard apresenta erro persistente ou dados incorretos.

## Passo 1

Verificar console do navegador.

Procurar por:

* erros JavaScript
* falhas de carregamento
* mensagens de validação

## Passo 2

Verificar logs da aplicação.

Confirmar:

* criação de eventos
* acesso às telas
* operações de CRUD

## Passo 3

Validar integridade dos dados mockados.

Arquivos:

```text
src/mocks/canteiros.js
src/mocks/historico.js
```

## Passo 4

Executar novamente:

```bash
npm install
npm run dev
```

para garantir que dependências e ambiente estejam corretos.

## Passo 5

Caso o problema persista, registrar incidente e anexar:

* print da falha
* logs capturados
* horário da ocorrência

---

# Melhorias Futuras

Planeja-se integrar:

* coleta centralizada de logs
* métricas em tempo real
* monitoramento de performance
* integração com backend real

---

# Conclusão

A aplicação possui mecanismos básicos de observabilidade adequados para o estágio atual do projeto. Logs, métricas e procedimentos de investigação foram definidos para facilitar operação, manutenção e evolução futura do sistema.
