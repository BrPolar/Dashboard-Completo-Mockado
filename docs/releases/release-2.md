# Release 2 - Dashboard RC

**Versão:** v0.2.0-dashboard-rc

**Data:** 14/06/2026

---

# Resumo

Esta release consolida a implementação do dashboard completo da Horta Inteligente utilizando dados mockados. Foram adicionadas as telas previstas no escopo do projeto, mecanismos básicos de observabilidade, documentação de ameaças e melhorias na experiência do usuário.

---

# Funcionalidades Entregues

## Dashboard Principal

Implementado painel principal contendo:

* Temperatura média
* Umidade média
* Luminosidade média
* Quantidade de canteiros
* Alertas ativos
* Canteiros saudáveis
* Status individual dos canteiros

---

## Alertas

Implementado sistema de alertas baseado em condições simuladas.

Critério atual:

* Umidade inferior a 30%

Funcionalidades:

* Exibição de alertas ativos
* Identificação visual de canteiros em risco

---

## Histórico

Implementada tela de histórico contendo:

* Leituras simuladas
* Data e horário
* Temperatura
* Umidade
* Luminosidade
* Organização em tabela

---

## Cadastro de Canteiros

Implementado CRUD básico.

Operações disponíveis:

* Criar canteiro
* Visualizar canteiros
* Editar nome do canteiro
* Remover canteiro

Validações:

* Nome mínimo de 3 caracteres

---

# Segurança

Documentação criada:

```text
docs/dashboard/threat-model.md
```

Ameaças analisadas:

* XSS
* Manipulação de dados
* Exposição de informações sensíveis
* Comunicação sem criptografia

---

# Observabilidade

Documentação criada:

```text
docs/ops/observability-dashboard.md
```

Inclui:

* Logs estruturados
* Métricas operacionais
* Runbook de investigação

---

# Breaking Changes

Nenhuma breaking change identificada nesta release.

---

# Migração

Não é necessária migração.

Projeto continua utilizando dados mockados.

---

# Issues Resolvidas

* Dashboard principal implementado
* Tela de alertas implementada
* Tela de histórico implementada
* CRUD de canteiros implementado
* Validação de cadastro implementada
* Threat model documentado
* Observabilidade documentada

---

# Rastreabilidade

## UC01 - Monitorar Horta

Componente:

* Dashboard.jsx

Testes:

* Visualização das métricas
* Exibição dos canteiros

Release:

* Dashboard Principal

---

## UC02 - Visualizar Alertas

Componente:

* Alertas.jsx

Testes:

* Detecção de baixa umidade

Release:

* Sistema de Alertas

---

## UC03 - Consultar Histórico

Componente:

* Historico.jsx

Testes:

* Exibição da tabela de leituras

Release:

* Histórico

---

## UC04 - Gerenciar Canteiros

Componente:

* Canteiros.jsx

Testes:

* Criar canteiro
* Editar canteiro
* Remover canteiro

Release:

* CRUD de Canteiros

---

# Conclusão

A Release 2 consolida a primeira versão completa do dashboard da Horta Inteligente, incluindo funcionalidades operacionais, documentação de segurança, observabilidade e rastreabilidade.
