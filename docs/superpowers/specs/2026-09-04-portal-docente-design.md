# Especificação de Design: Portal de Apoio Docente do Curso de IA

**Data:** 05/09/2026  
**Projeto:** Minicurso de Extensão: *Inteligência Artificial: Fundamentos e Boas Práticas* (32 Horas no Total)  
**Público da Plataforma:** Professoras responsáveis pelo planejamento e ministração das aulas  
**Tema Visual:** Warm Paper & Walnut (*Frontend Design*) – Papel Acolhedor, Marfim, Areia, Trigo, Noz e Café  

---

## 1. Contexto e Objetivo

A plataforma web atua como um **Ambiente Centralizado de Apoio às Professoras**, reunindo em um único local, organizado, ergonômico e sem ruído, todos os recursos necessários para o planejamento, condução e avaliação dos 7 encontros do minicurso.

O foco da aplicação é servir como o **Caderno de Aula Interativo da Professora**, permitindo:
1. Consultar o plano pedagógico e a sequência didática detalhada da aula (180 min);
2. Projetar slides em sala acompanhando as notas de oradora e falas-chave sugeridas sincronizadas;
3. Orientar a atividade prática de laboratório com gabarito de referência e rubrica;
4. Recorrer a analogias e dinâmicas pedagógicas prontas para públicos iniciantes;
5. Imprimir ou exportar em PDF um guia de aula limpo para consulta offline.

---

## 2. Arquitetura da Interface e Navegação

### 2.1. Estrutura com Offcanvas Retrátil e Sub-barra Sticky na Tela

```
┌─────────────────────────────────────────────────────────────────────────────────────────────┐
│ [☰ Módulos do Curso]   Minicurso de IA (32h) › Módulo 1: Desmistificando a IA   [🖨️ Imprimir] [🌙]│
├─────────────────────────────────────────────────────────────────────────────────────────────┤
│ ⏱️ 1. Sequência (180m)  |  🖥️ 2. Slides & Notas  |  🧪 3. Guia da Prática  |  💡 4. Didática  ...   │ <- Sub-barra Sticky
├─────────────────────────────────────────────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────────────────────────────────────────────┐ │
│ │ 📋 CABEÇALHO DO MÓDULO 1: Encontro 1 • 3h presenciais (180 min)                         │ │
│ └─────────────────────────────────────────────────────────────────────────────────────────┘ │
│ ┌─────────────────────────────────────────────────────────────────────────────────────────┐ │
│ │ ⏱️ 1. VISÃO GERAL & SEQUÊNCIA DIDÁTICA (180 MIN)                                        │ │
│ │    • Régua dos 5 Blocos (40m, 30m, 15m, 75m, 20m) + Cards com horários e dicas          │ │
│ └─────────────────────────────────────────────────────────────────────────────────────────┘ │
│ ┌─────────────────────────────────────────────────────────────────────────────────────────┐ │
│ │ 🖥️ 2. SLIDES 16:9               │ 👩‍🏫 NOTAS DA PROFESSORA (Sincronizadas)                 │ │
│ │    [Palco de Projeção]          │ • Objetivo pedagógico do slide                          │ │
│ │                                 │ • O que falar / Falas-chave sugeridas                   │ │
│ └─────────────────────────────────────────────────────────────────────────────────────────┘ │
│ ┌─────────────────────────────────────────────────────────────────────────────────────────┐ │
│ │ 🧪 3. GUIA DA PRÁTICA 1 & GABARITO DE REFERÊNCIA (Portfólio Digital - 0,5 pt)           │ │
│ └─────────────────────────────────────────────────────────────────────────────────────────┘ │
│ ┌─────────────────────────────────────────────────────────────────────────────────────────┐ │
│ │ 💡 4. ORIENTAÇÕES DIDÁTICAS, METÁFORAS & MEDIAÇÃO PEDAGÓGICA                            │ │
│ └─────────────────────────────────────────────────────────────────────────────────────────┘ │
│ ┌─────────────────────────────────────────────────────────────────────────────────────────┐ │
│ │ 📚 5. MATERIAIS DE APOIO, CHECKLIST PRÉ-AULA & REFERÊNCIAS                              │ │
│ └─────────────────────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────────────────┘

Quando o Offcanvas é aberto:
┌──────────────────────────────┬─────────────────────────────────────────────────────────────┐
│ 👩‍🏫 PORTAL DOCENTE           │ 📌 Módulo 1: Desmistificando a IA         [🖨️ Imprimir] [🌙]│
│ [✕ Recolher]                 │                                                             │
├──────────────────────────────┤                                                             │
│ 📚 MÓDULOS DO CURSO (7):     │ (Conteúdo com fundo escurecido / backdrop suave)            │
│ • Módulo 1 (Ativo)           │                                                             │
│ • Módulo 2 (Em breve)        │                                                             │
│ • Módulo 3 a 7 (Em breve)    │                                                             │
└──────────────────────────────┴─────────────────────────────────────────────────────────────┘
```

---

## 3. Especificação Detalhada das Seções do Módulo

### Seção 1: Visão Geral & Sequência Didática da Aula (180 minutos)
* **Cabeçalho do Encontro:** Tema, objetivos, carga horária (3h presenciais), público e avaliação (0,5 pt).
* **Régua dos 5 Blocos da Aula:** Distribuição temporal clara e organizada (40m Teoria & Acolhimento, 30m Demo & Portfólio, 15m Intervalo, 75m Lab Prático, 20m Fechamento & Síntese).
* **Roteiro Passo a Passo:** Cards detalhados para cada bloco contendo horários, ações docentes e dicas de condução.

### Seção 2: Apresentador de Slides & Notas da Professora (Visão Integrada)
* **Palco de Slide 16:9:** Navegação por teclado (`◀` / `▶` / Espaço) e botão para Modo Projeção em Tela Cheia (`F`).
* **Painel de Notas da Professora:** Atualizado dinamicamente em sincronia com o slide visível, apresentando:
  * Objetivo pedagógico do slide;
  * O que falar (falas-chave sugeridas em destaque);
  * Tempo sugerido em sala.

### Seção 3: Guia Completo da Atividade Prática
* **Orientações de Laboratório:** Duração (75 min), ferramentas necessárias (Navegador + Portfólio Digital) e instruções passo a passo.
* **Tabela de Rubrica:** Critérios objetivos de correção (0,5 pt).
* **Gabarito / Exemplo de Resultado Esperado:** Modelo ideal completo com botão de "Copiar Exemplo".

### Seção 4: Didática, Metáforas & Mediação
* **Dinâmica Quebra-Gelo:** Passo a passo da condução da dinâmica "Nuvem Mental da IA".
* **Analogias Didáticas Prontas:** A Receita de Bolo vs. Confeiteiro; O Mapa de Papel vs. Waze.
* **Alertas:** Dúvidas e erros comuns dos alunos e como agir.

### Seção 5: Materiais Complementares & Referências
* **Checklist Pré-Aula:** 5 passos de verificação antes de abrir a sala.
* **Links do Projeto:** Acesso direto ao `plano_de_aula_encontro_1.md` e `arquitetura_pedagogica_curso_ia.md`.
* **Referências Bibliográficas:** Alan Turing (1950), UNESCO (2023) e Russell & Norvig (2022).

---

## 4. Identidade Visual & Estilos de Impressão

* **Paleta Warm Paper & Walnut:**
  - `#F7F3EA` → Fundo geral da aplicação
  - `#FFFDF8` → Cards e recipientes de conteúdo
  - `#EFE8DA` → Menus, offcanvas drawer e seções secundárias
  - `#D8C7A8` → Bordas suaves, divisores e destaques sutis
  - `#806A4E` → Botões principais, acentos e elementos de ação
  - `#3F382F` → Textos principais de alta legibilidade
* **Tipografia:** *Outfit* (títulos e marcas), *Plus Jakarta Sans* (leitura contínua) e *JetBrains Mono* (dados e código).
* **Suporte a Impressão (`@media print`):** Formatação limpa em página contínua estilo livreto/apostila, ocultando botões interativos e menus laterais para gerar PDF perfeito.
