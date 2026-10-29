# English Quest & Italian Quest

Roteiro interativo bilíngue para estudo autônomo com sessões diárias de 15 minutos, listening em 4 passagens, gramática em contexto, vocabulário ativo e apoio de vídeos do YouTube:

- **🇬🇧 English Quest (B1 → C1):** localizado na raiz (`/` ou `index.html`).
- **🇮🇹 Italian Quest (A2 → B1):** localizado em [`/italian/`](italian/index.html) (com botão direto no topo da página).

Ambos compartilham o mesmo domínio online e publicam automaticamente no GitHub Pages pelo mesmo workflow.

---

## Usar localmente

* Para inglês: abra `index.html` no navegador.
* Para italiano: abra `italian/index.html` (ou clique no botão **🇮🇹 Italian** no topo de `index.html`).

Cada roteiro contém um ciclo inicial de 13 semanas (91 sessões diárias). Abra uma semana e selecione um dia para ver a tarefa, o recurso, o tempo e a entrega esperada. Clique em qualquer expressão para abrir sua ficha de vocabulário com tradução, exemplos práticos de uso e links de pronúncia; marque como concluída ao clicar em **Concluir**.

O progresso é salvo no `localStorage` do navegador sob chaves independentes:
- Inglês: `englishQuestProgressV1` (backup: `english-quest-backup.json`)
- Italiano: `italianQuestProgressV1` (backup: `italian-quest-backup.json`)

Use o botão **Exportar progresso** para baixar um arquivo JSON de backup e **Importar** para restaurá-lo em outro navegador ou dispositivo.

---

## Publicar no GitHub Pages

O workflow em `.github/workflows/pages.yml` publica todo o repositório no GitHub Pages a cada push para a branch `main`:
* A página de inglês fica na raiz do seu site (`https://seu-usuario.github.io/seu-repositorio/`).
* A página de italiano fica no subdiretório (`https://seu-usuario.github.io/seu-repositorio/italian/`).
* O botão de troca no topo permite alternar instantaneamente entre inglês e italiano sem sair do domínio.

---

## Estrutura do Projeto

```
english-study/
├── index.html           # Página principal: English Quest (B1 → C1)
├── app.js               # Lógica e banco de dados de inglês
├── styles.css           # Estilos unificados para ambos os planos
├── italian.html         # Redirecionamento conveniente para /italian/
├── italian/
│   ├── index.html       # Página dedicada: Italian Quest (A2 → B1)
│   └── app.js           # Lógica, banco de dados e vocabulário de italiano
├── .github/
│   └── workflows/
│       └── pages.yml    # Publicação estática no GitHub Pages
└── README.md
```
