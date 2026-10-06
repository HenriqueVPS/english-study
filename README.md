# English Quest — B1 → C1

Roteiro interativo de inglês para estudante B1, com foco em listening, gramática e conversação com falantes nativos. O plano usa interesses em programação e Minecraft para contextualizar as tarefas.

## Usar localmente

Abra `index.html` em um navegador moderno. O roteiro contém um ciclo inicial de 13 semanas, com sete sessões diárias de 15 minutos em cada semana. Abra uma semana e selecione um dia para ver tarefa, recurso, duração e resultado esperado. Marque a caixa para computar a sessão. Clique em expressões do vocabulário para marcá-las como estudadas.

O progresso é salvo em `localStorage` no navegador atual. Ele fica separado por navegador, perfil e dispositivo e pode ser apagado ao limpar os dados do site. Use **Exportar progresso** para baixar um backup JSON e **Importar** para restaurá-lo em outro navegador.

## Publicar com GitHub Pages

O workflow em `.github/workflows/pages.yml` publica a raiz do repositório no GitHub Pages a cada push para `main` ou acionamento manual. No GitHub, abra **Settings → Pages**, escolha **GitHub Actions** como fonte de build/deploy e envie os arquivos para `main`. O endereço publicado aparece na execução bem-sucedida do workflow.

GitHub Actions publica os arquivos da página; ele não executa um banco de dados de progresso. Se a página for usada em outro dispositivo, o navegador desse dispositivo terá outro `localStorage`; transfira o JSON de backup para levar o progresso. Para sincronização automática entre dispositivos seria necessário integrar um serviço com autenticação e banco de dados.

## Organização do estudo

- O roteiro lista 70–100 expressões por semana, alinhadas ao tema. Clique nas expressões para manter uma lista leve do que já revisou.
- Cada dia dura 15 minutos e inclui prática guiada de input compreensível, escuta, fala, gramática em contexto ou revisão.
- Use legendas/transcrições em inglês como apoio depois da primeira escuta sem texto. O foco é compreender a mensagem antes de estudar detalhes.
- O plano de 12 semanas é o primeiro ciclo, não uma promessa de C1 em três meses. Com 15 minutos ativos ao dia, a estimativa prudente para B1→C1 funcional é 4–7 anos ou mais; oportunidades regulares de conversa e exposição adicional afetam muito o prazo.

## Referências

- [British Council — B1 Listening](https://learnenglish.britishcouncil.org/skills/listening/b1-listening)
- [British Council — Audio series](https://learnenglish.britishcouncil.org/free-resources/general/audio-series)
- [BBC Learning English — 6 Minute English](https://www.bbc.co.uk/learningenglish/english/features/6-minute-english)
- [YouGlish](https://youglish.com/english)
- [Cambridge Dictionary](https://dictionary.cambridge.org/)
- [CEFR descriptors — Council of Europe](https://www.coe.int/en/web/common-european-framework-reference-languages/cefr-descriptors)

Consulte o `README` anterior no histórico Git se quiser recuperar a versão extensa em formato de plano textual.
