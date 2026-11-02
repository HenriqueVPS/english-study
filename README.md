# Language Quests: English, Italian & Portuguese

Roteiro interativo de estudo autônomo com sessões diárias de 15 minutos, listening em 4 passagens, gramática em contexto, vocabulário ativo e vídeos do YouTube com curadoria:

- **🇬🇧 English Quest (B1 → C1):** localizado na raiz (`/` ou `index.html`) — interface em português para estudantes brasileiros de inglês.
- **🇮🇹 Italian Quest (A2 → B1):** localizado em [`/italian/`](italian/index.html) — interface em português focada em gramática, listening e dia a dia na Itália.
- **🇧🇷 Portuguese Quest (A1 → A2):** localizado em [`/portuguese/`](portuguese/index.html) — **interface em inglês** adaptada especificamente para falantes de inglês que querem aprender Português do Brasil com naturalidade.

Todos compartilham o mesmo domínio online e são publicados automaticamente no GitHub Pages pelo mesmo workflow.

---

## Usar localmente

* Para inglês: abra `index.html` no navegador.
* Para italiano: abra `italian/index.html` (ou clique no botão **🇮🇹 Italian** no topo).
* Para português: abra `portuguese/index.html` (ou clique no botão **🇧🇷 Portuguese** no topo).

Cada roteiro contém um ciclo inicial de 13 semanas (91 sessões diárias). Abra uma semana e selecione um dia para ver a tarefa, o recurso, o tempo e a entrega esperada. Clique em qualquer expressão para abrir sua ficha de vocabulário com tradução, exemplos práticos de uso e links de pronúncia; marque como concluída ao clicar em **Concluir / Mark as learned**.

O progresso é salvo no `localStorage` do navegador sob chaves independentes:
- Inglês: `englishQuestProgressV1` (backup: `english-quest-backup.json`)
- Italiano: `italianQuestProgressV1` (backup: `italian-quest-backup.json`)
- Português: `portugueseQuestProgressV1` (backup: `portuguese-quest-backup.json`)

Use o botão **Exportar progresso / Export progress** para baixar um arquivo JSON de backup e **Importar / Import** para restaurá-lo em outro navegador ou dispositivo.

---

## Publicar no GitHub Pages

O workflow em `.github/workflows/pages.yml` publica todo o repositório no GitHub Pages a cada push para a branch `main`:
* A página de inglês fica na raiz do seu site (`https://seu-usuario.github.io/seu-repositorio/`).
* A página de italiano fica no subdiretório (`https://seu-usuario.github.io/seu-repositorio/italian/`).
* A página de português fica no subdiretório (`https://seu-usuario.github.io/seu-repositorio/portuguese/`).
* Os botões de troca no topo permitem alternar instantaneamente entre qualquer um dos idiomas sem sair do domínio.

---

## Estrutura do Projeto

```
english-study/
├── index.html           # Página principal: English Quest (B1 → C1)
├── app.js               # Lógica e banco de dados de inglês
├── styles.css           # Estilos unificados para os três planos
├── italian.html         # Redirecionamento conveniente para /italian/
├── italian/
│   ├── index.html       # Página dedicada: Italian Quest (A2 → B1)
│   └── app.js           # Lógica, banco de dados e vocabulário de italiano
├── portuguese.html      # Redirecionamento conveniente para /portuguese/
├── portuguese/
│   ├── index.html       # Página dedicada: Portuguese Quest (A1 → A2) em inglês
│   └── app.js           # Lógica, banco de dados e vocabulário de português para falantes de inglês
├── .github/
│   └── workflows/
│       └── pages.yml    # Publicação estática no GitHub Pages
└── README.md
```
