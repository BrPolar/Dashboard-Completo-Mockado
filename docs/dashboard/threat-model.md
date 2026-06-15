# Threat Model - Dashboard da Horta Inteligente

## Objetivo

Este documento identifica ameaças relacionadas ao dashboard da Horta Inteligente, os ativos protegidos e as medidas adotadas para reduzir riscos de segurança.

---

# Ativos Protegidos

Os principais ativos do dashboard são:

* Leituras dos sensores (temperatura, umidade e luminosidade)
* Eventos de irrigação
* Dados dos canteiros
* Integridade dos dados exibidos
* Camada de comunicação com a futura API
* Credenciais de autenticação (implementação futura)

---

# Ameaça 1 - Cross-Site Scripting (XSS)

## Cenário

Um usuário malicioso pode tentar cadastrar um canteiro com conteúdo contendo código HTML ou JavaScript.

Exemplo:

```html
<script>alert('Ataque')</script>
```

Caso o conteúdo seja renderizado sem validação, scripts podem ser executados no navegador.

## Impacto

* Alteração da interface
* Roubo de informações de sessão
* Execução de código não autorizado

## Mitigação

* React realiza escape automático de conteúdo renderizado.
* Não é utilizado dangerouslySetInnerHTML.
* Campos de entrada possuem validação básica de tamanho.

## Status

Mitigação aplicada.

---

# Ameaça 2 - Manipulação de Dados do Dashboard

## Cenário

Dados incorretos ou alterados podem ser exibidos aos operadores, gerando decisões erradas sobre irrigação e monitoramento.

## Impacto

* Decisões incorretas de operação
* Falha no monitoramento da horta
* Perda de confiabilidade do sistema

## Mitigação

* Estrutura de dados centralizada.
* Validação de campos obrigatórios.
* Separação da camada de visualização e dos dados mockados.

## Status

Mitigação parcialmente aplicada.

Quando houver API real serão implementadas validações no backend.

---

# Ameaça 3 - Exposição de Informações Sensíveis em Logs

## Cenário

Durante desenvolvimento, informações sensíveis podem ser registradas em logs do navegador ou console.

Exemplos:

* Tokens de autenticação
* Endereços de dispositivos IoT
* Configurações de rede

## Impacto

* Vazamento de informações
* Facilitação de ataques futuros

## Mitigação

* Nenhuma credencial é armazenada no frontend.
* Logs limitados a informações operacionais.
* Remoção de dados sensíveis dos registros.

## Status

Mitigação aplicada.

---

# Ameaça 4 - Comunicação Sem Criptografia

## Cenário

Quando a API real for integrada, dados podem trafegar sem proteção adequada.

## Impacto

* Interceptação de tráfego
* Exposição de dados do sistema

## Mitigação

* Planejamento de uso exclusivo de HTTPS/TLS.
* Requisições centralizadas em camada única de acesso.

## Status

Dívida técnica registrada para integração futura.

---

# Evidência de Scanning

Ferramenta utilizada:

npm audit

Resultado obtido:

* Pacotes auditados: 142
* Vulnerabilidades encontradas: 0

Trecho da execução:

```bash
added 6 packages, and audited 142 packages

found 0 vulnerabilities
```

---

# Conclusão

O dashboard foi analisado sob a perspectiva de segurança da aplicação frontend. Foram identificadas ameaças relacionadas à entrada de dados, exposição de informações e futura integração com APIs. As principais mitigações foram aplicadas ou registradas como dívida técnica para evolução do projeto.
