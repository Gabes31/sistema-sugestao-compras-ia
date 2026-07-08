# 📦 Sugestão de Compras (Gestão de Estoque + IA)

Uma aplicação web desenvolvida para otimizar o planejamento de suprimentos e logística. O sistema processa históricos de consumo (via arquivos CSV) para calcular a **Curva ABC** de materiais, prever faltas de estoque e gerar sugestões automatizadas de compras.

O grande diferencial deste projeto é a integração com **Inteligência Artificial Generativa (Google Gemini API)**, que atua como um agente de sourcing estruturado para sugerir ações logísticas imediatas e realizar varreduras automatizadas na web em busca de fornecedores homologados para os itens em ruptura.

## ✨ Principais Funcionalidades

* **Processamento Local de CSV:** Upload seguro de relatórios do SAP (Consumo e Saldo Atual) processados localmente via `PapaParse`.
* **Motor de Regras Logísticas:** 
  * Classificação automática dos itens em Giro A, B e C.
  * Cálculo de média de consumo mensal considerando apenas itens com recorrência.
  * Separação visual entre "Estoque Saudável" e "Ação Necessária (Comprar)".
* **Análise de Risco com IA (Gemini):**
  * Cruzamento de itens com estoque zerado e geração instantânea de planos de ação emergenciais.
  * *Pesquisa de Mercado Automatizada:* Busca ativa por distribuidores e fabricantes no Brasil (com integração Google Search / Grounding) para o material selecionado.
* **Exportação Multiformato:** Geração nativa de relatórios em CSV e documentos PDF de alta fidelidade para envio direto à área de compras.

## 🛠️ Tecnologias Utilizadas

* **Front-end:** HTML5, Tailwind CSS, Vanilla JavaScript (ES6+).
* **Back-end:** Google Apps Script (GAS) responsável por servir o sistema (`doGet`).
* **Integrações (APIs):** 
  * Google Gemini 2.5 Flash API (IA Generativa + Google Search Tools).
* **Bibliotecas:** PapaParse (para manipulação avançada de CSVs).

## 🚀 Como executar o projeto

Este projeto foi desenhado para rodar dentro do ecossistema Google Workspace (Apps Script), mas a interface pode ser executada isoladamente:

1. Clone o repositório.
2. Abra o arquivo `index.html` em qualquer navegador moderno.
3. Se desejar testar os recursos de Inteligência Artificial, localize a variável `apiKey` no final do script (linha 149) e insira sua chave válida do Google AI Studio.
