const dayNames = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
const weeklyFormats = [
  {name:'Listening without text + with transcript',resource:'Speaking Brazilian / Easy Portuguese audio',task:'Listen once without subtitles to grasp the main idea and context. On the second listen, follow along with the Portuguese transcript and note down up to three expressions that blocked your understanding.',output:'Summarize the audio in two sentences and save two useful expressions.'},
  {name:'Curated video + shadowing',resource:'Pre-selected Easy Portuguese / Speaking Brazilian video',task:'Watch a short clip. Pause to explain what is happening out loud in Portuguese; then repeat two key sentences mimicking natural Brazilian rhythm, contractions, and intonation.',output:'Record 30–60 seconds summarizing the scene or repeating the sentences.'},
  {name:'Grammar in real context',resource:'Model sentence + WordReference / Grammar notes',task:'Observe the weekly Brazilian grammar structure inside a realistic example. Create three true sentences about your own life or routine using the pattern.',output:'Write three sentences and refine them using AI feedback if needed.'},
  {name:'Situational dialogue + spontaneous response',resource:'Easy Portuguese street interview or everyday scenario',task:'Listen to a natural everyday dialogue (boteco, market, street directions, casual chat). Pause before the speaker responds and say aloud what you would answer in that situation.',output:'Note down a natural question and answer without reading a pre-written script.'},
  {name:'Daily life scenarios out loud',resource:'Short video or audio about Brazilian daily life & culture',task:'Listen paying close attention to natural question-and-answer flow, contractions (tô, pra, cê), and colloquial fillers. Pause to narrate a real-life situation or retell the story in your own words.',output:'Record 45 seconds describing an everyday habit or situation in Brazilian Portuguese.'},
  {name:'Reading, writing & error correction',resource:'Short Brazilian text, social post, recipe, or dialogue',task:'Read for general meaning, pick a central idea, and write a short response or paragraph (5–6 lines). Ask AI to check up to two grammatical patterns while keeping your personal voice intact.',output:'Keep your original Portuguese text, the revision, and the rule you observed.'},
  {name:'Weekly review & consolidation',resource:'Your audios, vocabulary cards, and weekly notes',task:'Re-listen to Monday’s audio without any text. Test your memory by recalling sentences out loud, review your saved vocabulary, and select next week’s content barrel.',output:'Log your self-assessment score and prepare your next week’s video.'}
];

const vocabSets = {
  greetings: [
    'oi','olá','bom dia','boa tarde','boa noite','tudo bem?','tudo bom?','como vai?','como você tá?','e aí?','beleza?','prazer em conhecer','o prazer é meu','de onde você é?','eu sou dos Estados Unidos','eu sou americano','eu sou canadense','eu moro no Brasil','eu moro em São Paulo','eu falo inglês','eu falo um pouco de português','com licença','por favor','muito obrigado','muito obrigada','de nada','não há de quê','desculpa','foi mal','até logo','até mais','até amanhã','tchau','se cuida','bom fim de semana','como se chama?','qual é o seu nome?','meu nome é...','quantos anos você tem?','eu tenho trinta anos','eu trabalho com...','eu sou programador','eu sou engenheiro','ser','estar','eu sou','eu tô / eu estou','você é','você tá / você está','a gente é','a gente tá','eles são','eles estão','brasileiro','estrangeiro','gringo','amigo','conhecido','vizinho','colega de trabalho','sim','não','claro','com certeza','entendi','não entendi','pode repetir?','fala mais devagar por favor'
  ],
  routine: [
    'acordar','acordar cedo','acordar tarde','o despertador toca','levantar da cama','espreguiçar','tomar banho','lavar o rosto','escovar os dentes','fazer a barba','pentear o cabelo','trocar de roupa','vestir a roupa','colocar os sapatos','tomar café da manhã','fazer um cafezinho','comer um pão com manteiga','preparar o almoço','sair de casa','fechar a porta','pegar o elevador','descer as escadas','pegar o metrô','pegar o ônibus','esperar no ponto','andar a pé','dirigir','pegar trânsito','chegar no trabalho','chegar na hora','chegar atrasado','começar o expediente','bater o ponto','ligar o computador','olhar os e-mails','fazer uma reunião','fazer uma pausa','pausa pro café','conversar com os colegas','almoçar','comer no quilo','voltar pro trabalho','terminar o serviço','sair do trabalho','voltar pra casa','fazer compras no caminho','chegar em casa','tirar os sapatos','relaxar no sofá','tomar um banho quente','fazer o jantar','jantar em família','lavar a louça','limpar a pia','jogar o lixo fora','arrumar a sala','assistir à televisão','ler um livro','colocar o pijama','ir pra cama','deitar','pegar no sono','dormir cedo','dormir tarde'
  ],
  home: [
    'apartamento','casa','prédio','condomínio','andar','portaria','portão','interfone','campainha','chave','sala de estar','sofá','poltrona','televisão','controle remoto','mesa de centro','tapete','estante de livros','quarto','cama de casal','cama de solteiro','colchão','travesseiro','lençol','coberta','guarda-roupa','armário','gaveta','cabide','abajur','cozinha','fogão','forno','geladeira','congelador','micro-ondas','pia da cozinha','torneira','escorredor de pratos','armário de cozinha','mesa de jantar','cadeira','banheiro','chuveiro','box do banheiro','espelho','pia do banheiro','toalha de banho','toalha de rosto','papel higiênico','área de serviço','lavanderia','máquina de lavar','tanque','varal de roupas','ferro de passar','aspirador de pó','vassoura','rodo','balde','pano de chão','varanda','sacada','janela','cortina','tomada','lâmpada','parete','chão','teto','tem uma padaria perto','perto da minha casa','longe do centro','ao lado do mercado','em frente à praça'
  ],
  food: [
    'o boteco','o bar','a padaria','a lanchonete','o restaurante','o garçom','a garçonete','o cardápio','o menu','a mesa','o balcão','pedir no balcão','sentar na mesa','o café com leite','o cafezinho','o café puro','o pingado','o pão na chapa','o pão de queijo quentinho','a coxinha de frango com catupiry','o pastel de queijo','o pastel de carne','a empada','o açaí na tigela','açaí com banana e granola','a água mineral sem gás','a água com gás','a água de coco gelada','o suco de laranja natural','o suco de maracujá','o suco de abacaxi com hortelã','a cerveja gelada','o chopp gelado','a caipirinha','o prato feito (PF)','o almoço por quilo','o self-service','o arroz com feijão','o bife acebolado','o filé de frango grelhado','o peixe fresco','a farofa caseira','o vinagrete','a mandioca frita','a batata frita','a salada verde','a sobremesa','o pudim de leite','o brigadeiro','garçom, por favor!','eu queria pedir...','você pode trazer...?','traz a conta pra gente?','a conta por favor','quanto deu no total?','aceita cartão?','aceita Pix?','posso pagar no débito?','posso pagar no crédito?','tem taxa de serviço?','a caixinha do garçom','tá uma delícia','muito gostoso','pra viagem','embrulha pra viagem por favor'
  ],
  market: [
    'a feira livre','a barraca de frutas','a barraca de verduras','o feirante','o supermercado','o carrinho de compras','a cestinha','as compras do mês','o quilo','meio quilo','cem gramas','duzentos gramas','uma dúzia de ovos','uma dúzia de bananas','o pedaço','o pacote','a lata','o vidro','a garrafa','a fruta madura','a verdura fresca','o legume','o tomate','a cebola','o alho','a batata','a cenoura','a alface','o limão taiti','a laranja','a banana prata','a maçã','o abacaxi doce','a manga','o mamão','o melão','a melancia','o morango','o maracujá','o arroz','o feijão carioca','o feijão preto','o óleo de soja','o azeite de oliva','o sal','o açúcar','o café moído','o leite integral','o queijo minas','o queijo prato','o presunto fatiado','o pão francês','quanto tá o quilo?','tá bem docinho?','pode experimentar?','me dá dois quilos de tomate','me vê meio quilo de cebola','tá maduro pra hoje?','quanto deu tudo?','me dá uma sacolinha por favor','passar no caixa','a fila do caixa','pagar em dinheiro','o troco','passar o cartão','precisa de nota fiscal?','só isso mesmo, obrigado'
  ],
  directions: [
    'virar à esquerda','virar à direita','seguir em frente','ir reto','atravessar a rua','atravessar na faixa','a faixa de pedestres','o semáforo','o sinal de trânsito','o farol','a esquina','o quarteirão','a quadra','a rua','a avenida','o cruzamento','a rotatória','a calçada','a praça','o ponto de ônibus','a estação de metrô','a estação de trem','a linha do metrô','a linha amarela','a catraca do metrô','o bilhete do metrô','recarregar o cartão','descer no próximo ponto','pegar a integração','subir a rua','descer a rua','o trânsito pesado','o congestionamento','o engarrafamento','perto daqui','longe daqui','fica logo ali','fica do outro lado da rua','em frente ao banco','ao lado da farmácia','atrás da igreja','entre a padaria e o mercado','com licença, onde fica...?','como eu faço pra chegar no centro?','é perto daqui?','dá pra ir a pé?','demora muito pra chegar?','pega a primeira à direita','vira à esquerda no farol','vai até o final da rua','fica a cinco minutos a pé'
  ],
  past_regular: [
    'ontem','ontem de manhã','ontem à tarde','ontem à noite','anteontem','na semana passada','no mês passado','no ano passado','outro dia','faz tempo','já terminei','ainda não','falei com o meu chefe','conversei com um amigo','estudei português ontem','trabalhei o dia todo','morei no Rio de Janeiro','morei em São Paulo','comprei frutas na feira','almocei com os colegas','jantei em casa','tomei um café na padaria','andei pelo parque','limpei a casa no sábado','arrumei o meu quarto','lavei toda a louça','ajudei meu vizinho','gostei muito do filme','visitei a família','cheguei cedo no trabalho','voltei tarde pra casa','comi um pastel delicioso','bebi uma água de coco','abri a janela do quarto','fechei a porta com chave','decidi estudar mais','assisti a uma série brasileira','ouvi música o dia todo','escrevi uma mensagem','o que você fez ontem?','você já comeu alguma coisa?','eu não entendi direito','nós conversamos bastante','paguei a conta no cartão','peguei o ônibus errado'
  ],
  past_irregular: [
    'ir no passado','ser no passado','ter no passado','fazer no passado','estar no passado','eu fui','você foi','ele foi','ela foi','a gente foi','eles foram','eu tive','você teve','ele teve','a gente teve','eles tiveram','eu fiz','você fez','ele fez','a gente fez','eles fizeram','eu estive','você esteve','a gente esteve','fui à praia no sábado','fui ao supermercado de manhã','fui visitar uns amigos','tive que trabalhar no sábado','tive uma reunião demorada','tive um problema no trabalho','não tive tempo de cozinhar','fiz o almoço pra família','fiz uma caminhada na praia','fiz compras na feira','estive em São Paulo no ano passado','foi muito bom','foi bem legal','foi uma experiência ótima','foi difícil no começo','não deu tempo','deu tudo certo','o que aconteceu?','o que você fez no fim de semana?','onde você foi ontem?','a que horas você voltou?','a gente se divertiu bastante','a gente comeu pizza juntos','conheci pessoas simpáticas','ficamos em casa descansando'
  ],
  free_time: [
    'o tempo livre','o fim de semana','o feriado prolongado','gostar de ir à praia','gostar de tomar banho de mar','tomar sol na areia','tomar água de coco bem gelada','ouvir samba de raiz','escutar MPB','ouvir bossa nova','andar de bicicleta no calçadão','passear no parque no domingo','fazer uma caminhada matinal','correr ao ar livre','fazer um churrasco em casa','churrasco com os amigos','reunir os amigos no sábado','tomar uma cerveja gelada no boteco','fazer um piquenique na praça','jogar futebol com a galera','assistir ao jogo de futebol','torcer pelo time de coração','tocar violão','aprender a dançar forró','ler um bom livro na rede','assistir a um filme nacional','curtir a natureza','fazer uma trilha na montanha','viajar no feriado','conhecer cidades históricas','visitar um museu de arte','dar uma volta na cidade','bater papo com os vizinhos','relaxar no sofá depois do almoço','aproveitar o dia de sol','descansar bastante no domingo','o que você gosta de fazer no tempo livre?','eu adoro a cultura brasileira','eu prefiro ficar em casa descansando'
  ],
  travel: [
    'fazer uma viagem pelo Brasil','férias de verão','preparar a mala de viagem','levar uma mochila leve','o documento de identidade (RG)','o passaporte válido','comprar a passagem com antecedência','passagem de ida e volta','passagem de ônibus interestadual','a rodoviária da cidade','o terminal rodoviário','o aeroporto internacional','o balcão de check-in','o portão de embarque','despachar a bagagem','a mala de mão','o voo tá atrasado','embarcar no avião','aterrissar no destino','a pousada na praia','o hotel no centro','fazer o check-in no hotel','fazer o check-out ao meio-dia','a chave do quarto','quarto com cama de casal','quarto com ar-condicionado','café da manhã incluído na diária','a praia paradisíaca','alugar um carro','fazer um passeio de barco','que horas sai o ônibus?','a que horas sai o voo?','quanto tempo dura a viagem?','onde fica a plataforma de embarque?','tem vaga na pousada?','vou viajar no mês que vem','vamos conhecer o Rio de Janeiro','vamos visitar Salvador','vai dar tudo certo','boa viagem e aproveite!'
  ],
  health: [
    'estar com dor de cabeça','estar com dor de garganta','estar com dor de dente','estar com dor de barriga','estar com dor nas costas','estar com dor no corpo todo','estar com febre alta','medir a temperatura com o termômetro','estar com calafrio','estar resfriado','estar com gripe forte','estar com o nariz entupido','estar com tosse seca','espirrar por causa da alergia','ter tontura ao levantar','estar com azia depois de comer','sentir enjoo','sentir-se cansado e sem energia','estar estressado com o trabalho','a farmácia de plantão','o farmacêutico experiente','o remédio pra dor','o analgésico','o anti-inflamatório','o xarope pra tosse','as pastilhas pra garganta','a pomada pra machucado','o curativo','a receita médica do doutor','o posto de saúde do bairro','o médico de família','marcar uma consulta médica','o pronto-socorro do hospital','o que você tá sentindo?','onde tá doendo?','desde quando você tá assim?','toma esse remédio de oito em oito horas','tomar o comprimido depois das refeições','tomar em jejum antes do café','beber bastante água e suco natural','ficar de repouso na cama','melhoras pra você!','espero que você melhore logo'
  ],
  colloquial: [
    'né?','pois é','beleza?','tudo beleza','e aí, tudo bem?','tranquilo','tá tranquilo','valeu!','valeu demais','tá bom','tá certo','com certeza','claro que sim','de jeito nenhum','imagina!','não foi nada','dar um jeito','o jeitinho brasileiro','vai dar certo','deu tudo certo','não deu certo','que legal!','que massa!','que bacana!','nossa!','nossa senhora!','caramba!','fala sério!','mentira!','jura?','relaxa!','de boa','tô de boa','fica tranquilo','com calma','pouco a pouco','um passo de cada vez','no fim das contas','tirando as dúvidas','de vez em quando','com frequência','fazer sentido','isso faz muito sentido','isso não faz sentido','vale a pena','valeu a pena','dar uma olhada','prestar atenção','tomar cuidado','ficar de olho','tá ligado?','partiu!','bora!'
  ],
  plans_b1: [
    'o futuro','o próximo objetivo','a meta de aprendizado','falar português com confiança','falar português sem travar','entender nativos falando rápido','manter uma conversa natural e fluida','não ter medo de cometer erros','aprender com os próprios erros','praticar quinze minutos por dia','estudar com consistência e foco','fazer progressos visíveis a cada semana','ampliar o vocabulário do dia a dia','dominar as estruturas básicas da língua','dar o próximo passo nos estudos','alcançar o nível B1 comunicativo','fazer amigos brasileiros nativos','entender letras de músicas brasileiras','assistir a filmes brasileiros sem legenda','ler notícias e crônicas em português','fazer uma viagem inesquecível pelo Brasil','conversar com pessoas de várias regiões','conhecer a cultura e a culinária do Brasil','ter autonomia para viajar e morar','eu vou continuar estudando todo dia','eu vou falar com mais segurança','eu vou conseguir me comunicar','não desista no meio do caminho','com paciência e dedicação dá certo','estou muito animado para continuar','estou pronto para o próximo desafio!'
  ]
};

const weeks = [
  {theme:'Greetings, First Steps & Ser vs. Estar',subtitle:'Essential phrases to introduce yourself and meet people in Brazil.',grammar:'Subject pronouns (eu, você, a gente, eles) & Ser vs. Estar in the present tense',grammarNote:'In Brazil, “a gente” takes the 3rd-person singular for “we” (a gente é / a gente tá). Use SER for identity and origin (“Sou americano”) and ESTAR for states and locations (“Tô no Brasil”).',vocab:'greetings',content:'Easy Portuguese / Speaking Brazilian: how to introduce yourself and greet locals; basic origins and pleasantries.',resources:[['Easy Portuguese — YouTube','https://www.youtube.com/@EasyPortugueseVideos'],['WordReference PT-EN','https://www.wordreference.com/pten/']],activities:['Listen to a short A1 audio with native Brazilians introducing themselves. Identify names, origins, and greetings without subtitles.','Practice introducing yourself aloud in Portuguese: name, nationality, and where you live. Shadow two greeting lines.','Compare “Eu sou…” (permanent) with “Eu estou / Eu tô…” (temporary state). Write three sentences about your nationality and feelings today.','Listen to the dialogue again; pause after each question and answer before the native speaker responds.','Record a 45-second introduction in Portuguese without reading from a script. Re-record once aiming for natural flow.','Write a short friendly message introducing yourself to a Brazilian friend. Ask AI to check your ser/estar usage.','Re-listen to Monday’s dialogue without text. Save two expressions you liked and choose your Week 2 materials.']},
  {theme:'Daily Routine & Present Tense Verbs',subtitle:'Describe your real day from morning to night with everyday verbs.',grammar:'Present tense of regular verbs (-ar, -er, -ir) & everyday routine actions',grammarNote:'Regular endings: acordar (acordo, acorda, acordamos, acordam), comer (como, come, comemos, comem). In spoken Brazilian, pronouns are kept natural: “Eu acordo cedo e tomo um café.”',vocab:'routine',content:'Speaking Brazilian / Easy Portuguese: daily routine in Brazil; morning habits, commuting, and evening relaxation.',resources:[['Speaking Brazilian Language School','https://www.youtube.com/@SpeakingBrazilian'],['YouGlish Portuguese','https://youglish.com/portuguese']],activities:['Listen to an audio about someone’s daily routine in São Paulo. Catch three activities they do before lunch without looking at the text.','Watch the video; pause and describe your own morning routine in Portuguese using first, then, and finally.','Practice present tense verbs: acordar, tomar café, sair, almoçar, voltar. Write five sentences about your schedule.','Listen to the clip again and answer: “A que horas você acorda e o que você faz antes de sair de casa?”','Explain your typical morning in 45 seconds aloud. Repeat key verbs focusing on natural nasal vowels (pão, café, manhã).','Write a quick email or text to a friend describing how your day usually goes. Have AI review verb agreements.','Review five routine verbs without looking at notes and re-listen to the video cleanly.']},
  {theme:'Home, Rooms & “Ter” as “There Is”',subtitle:'Describe your home, furniture, and where things are located.',grammar:'Using “Ter” as “there is/are” + prepositions of place and contractions (no, na, do, da)',grammarNote:'Brazilians colloquially use “ter” for existence: “Tem uma padaria aqui perto” (There is a bakery nearby). Combine with em/no/na: “na sala”, “em cima da mesa”.',vocab:'home',content:'Easy Portuguese: apartment and neighborhood tours; describing rooms, furniture, and local spots.',resources:[['Easy Portuguese — YouTube','https://www.youtube.com/@EasyPortugueseVideos'],['WordReference PT-EN','https://www.wordreference.com/pten/']],activities:['Listen to someone describing their apartment. Note down which rooms are mentioned and what they like about it.','Walk around your room or desk and name five objects aloud in Portuguese using “Tem…” and “Está em cima de…”.','Practice contractions: em + o = no, em + a = na, de + o = do, de + a = da. Write four sentences describing your living space.','Listen to the tour again and answer: “Como é a sua casa e o que você mais gosta nela?”','Explain how to organize or tidy up a room step by step in 45 seconds using natural connectors.','Write a short note to a roommate or landlord mentioning a minor issue in the apartment. Check with AI.','Review house vocabulary and listen to the tour video once more without subtitles.']},
  {theme:'At the Boteco, Café & Restaurant',subtitle:'Order food, drinks, coffee, and ask for the bill politely.',grammar:'Polite requests (Eu queria... / Você pode me trazer...?), “Tem...?”, and asking for the bill',grammarNote:'Order politely using “Eu queria um café, por favor” or “Me vê um pão de queijo”. Ask for the bill with “A conta, por favor” or “Traz a conta pra gente?”.',vocab:'food',content:'Easy Portuguese / Street Smart Brazil: ordering at a Brazilian boteco, padaria, and self-service restaurant; street snacks and coffee.',resources:[['Street Smart Brazil','https://streetsmartbrazil.com/'],['WordReference PT-EN','https://www.wordreference.com/pten/']],activities:['Listen to a dialogue at a Brazilian padaria or restaurant. Identify what the customer orders and how much it costs.','Watch a video about Brazilian food. Repeat aloud three phrases used when ordering snacks and drinks.','Roleplay alone: walk into a boteco, ask what fresh juices they have, order a coxinha, and ask to pay by card.','Listen again; pause before the waiter answers and say what you would like to eat or drink.','Describe your favorite Brazilian dish or snack (feijoada, pão de queijo, açaí) in 45 seconds.','Write a mini restaurant dialogue between a customer and a waiter. Ask AI to check for natural Brazilian phrasing.','Re-listen to the restaurant dialogue and recite the ordering lines from memory.']},
  {theme:'At the Feira Livre & Supermarket',subtitle:'Buy fruits, vegetables, ask prices, and handle quantities in kilograms.',grammar:'Demonstratives (este, esse, aquele / aqui, aí, lá) & quantities (quilo, dúzia, pedaço)',grammarNote:'At the market, use “Esse aqui tá maduro?” and “Me dá meio quilo de tomate”. Remember: “um quilo”, “dois quilos”, “uma dúzia”.',vocab:'market',content:'Speaking Brazilian / Easy Portuguese: visiting a traditional Brazilian street market (feira livre); buying tropical fruit and pastel.',resources:[['Speaking Brazilian Language School','https://www.youtube.com/@SpeakingBrazilian'],['YouGlish Portuguese','https://youglish.com/portuguese']],activities:['Listen to an audio at a feira livre. Catch three fruits or vegetables mentioned and whether they are ripe.','Watch the feira video. Shadow the vendor calling out fruit prices and practice saying prices aloud in reais.','Practice demonstratives: “esse aqui”, “essa fruta aí”, “aquele abacaxi lá”. Make three example sentences.','Roleplay: approach a fruit stall, ask if the mango is sweet, ask the price per kilo, and buy half a dozen bananas.','Describe your weekly grocery run in 45 seconds: what you buy at the supermarket versus the local market.','Write out a dialogue for buying fruit at a street market and check with AI.','Re-listen without subtitles and test if you catch the prices and numbers easily.']},
  {theme:'City Navigation & Asking Directions',subtitle:'Navigate Brazilian streets, take the metro/bus, and understand instructions.',grammar:'Giving directions with the imperative & prepositions of movement (vira, segue, pega, atravessa)',grammarNote:'To give directions in spoken Brazilian, use informal commands: “Vira à direita no farol, segue em frente e pega a primeira rua.”',vocab:'directions',content:'Easy Portuguese: asking for directions in Rio de Janeiro and São Paulo; metro stations, bus stops, and landmarks.',resources:[['Easy Portuguese — YouTube','https://www.youtube.com/@EasyPortugueseVideos'],['WordReference PT-EN','https://www.wordreference.com/pten/']],activities:['Listen to street directions without looking at a map. Mentally trace the route described by the local speaker.','Look at a map of a Brazilian city (e.g. Avenida Paulista) and explain aloud how to walk from a metro station to a museum.','Practice polite inquiries: “Com licença, você sabe onde fica a farmácia mais próxima?” and “Dá pra ir a pé?”.','Roleplay: pretend you are lost in town; stop a passerby, ask how to get to the beach or metro, and thank them warmly.','Listen to an announcement or transit dialogue and note down the line, stop, and direction.','Write clear walking directions for a tourist to get from your home to the nearest bus stop or café.','Repeat the route aloud from memory and prepare for next week’s past tense.']},
  {theme:'Telling the Past: Pretérito Perfeito',subtitle:'Talk about what you did yesterday, last weekend, or a few days ago.',grammar:'Simple Past (Pretérito Perfeito) of regular verbs (-ar, -er, -ir)',grammarNote:'Regular past endings: falar (falei, você falou, a gente falou, eles falaram), comer (comi, comeu, comemos, comeram). Use for completed past events.',vocab:'past_regular',content:'Speaking Brazilian: talking about what you did yesterday; real street interviews discussing recent activities.',resources:[['Speaking Brazilian Language School','https://www.youtube.com/@SpeakingBrazilian'],['WordReference PT-EN','https://www.wordreference.com/pten/']],activities:['Listen to Brazilians talking about what they did yesterday. Note down three activities completed by the speakers.','Narrate three things you did yesterday in Portuguese using “ontem eu conversei”, “estudei”, “trabalhei”, “comi”.','Transform five present-tense sentences into the simple past (pretérito perfeito). Read them aloud with confidence.','Simulate a Monday morning chat with a coworker: “E aí, o que você fez no fim de semana?”','Listen to the video again; pause before the speaker finishes their past sentence and predict the verb form.','Write a short journal entry (5–6 lines) recounting an enjoyable day from last week. Check with AI.','Re-listen to the audio without subtitles and count how many past-tense verbs you recognize by ear.']},
  {theme:'Key Irregular Past Verbs (Fui, Tive, Fiz)',subtitle:'Master the essential irregular past verbs used in every Brazilian conversation.',grammar:'Irregular past forms of IR, SER, TER, FAZER, and ESTAR',grammarNote:'Ir/Ser share forms: “Eu fui pra praia” (I went) / “Foi muito legal” (It was cool). Ter: “Eu tive que trabalhar”. Fazer: “Eu fiz comida”.',vocab:'past_irregular',content:'Speaking Brazilian / Easy Portuguese: sharing weekend stories; irregular verbs in natural casual conversation.',resources:[['Speaking Brazilian Language School','https://www.youtube.com/@SpeakingBrazilian'],['YouGlish Portuguese','https://youglish.com/portuguese']],activities:['Listen to a story about a weekend trip. Identify where the person went, what they had to do, and if it went well.','Tell a short story about an outing you had using “eu fui”, “eu fiz”, “eu tive”, and “foi muito bom”.','Create four contrasting sentences: two using “fui” (went) and two using “foi” (was/were). Say them aloud.','Roleplay: catch up with a friend over coffee and describe an unexpected situation that happened to you last month.','Listen to the video and notice how Brazilians say “a gente foi” instead of the formal “nós fomos”.','Write a short paragraph about your best weekend trip so far and get feedback on irregular verb forms.','Re-tell the trip story without looking at any notes, focusing on smooth rhythm.']},
  {theme:'Free Time, Hobbies & Gostar de',subtitle:'Express likes, passions, music, beach culture, and weekend relaxation.',grammar:'The verb “Gostar de” (+ noun / infinitive) & expressing preferences with “Preferir”',grammarNote:'Always remember the preposition “de”: “Eu gosto de praia”, “Gosto de ouvir música brasileira”. With contractions: “Gosto do clima”, “Gosto da comida”.',vocab:'free_time',content:'Easy Portuguese: what Brazilians love doing in their free time; outdoor activities, samba, football, and beach life.',resources:[['Easy Portuguese — YouTube','https://www.youtube.com/@EasyPortugueseVideos'],['YouGlish Portuguese','https://youglish.com/portuguese']],activities:['Listen to locals talking about their favorite weekend pastimes. Note down three hobbies mentioned.','Record 45 seconds sharing your favorite hobbies in Portuguese using “eu gosto de…”, “eu adoro…”, and “eu prefiro…”.','Practice contractions with gostar: gostar + o = gostar do, gostar + a = gostar da. Write four sentences.','Roleplay: invite a friend to do something on Saturday (go for a bike ride, visit a park, grab an açaí).','Listen to a Brazilian song (samba or bossa nova) and write down three lines you understood by ear.','Write a paragraph about your ideal weekend in Brazil and check your use of “gostar de” with AI.','Re-listen to the free time audio and summarize the main speaker’s opinions in your own words.']},
  {theme:'Travel in Brazil & Immediate Future',subtitle:'Plan trips, bus tickets, hotels, and express future plans naturally.',grammar:'Immediate future with IR + Infinitive (Vou viajar, vamos sair, ele vai chegar)',grammarNote:'In spoken Brazilian Portuguese, the future is almost always expressed with “ir + infinitive”: “Amanhã eu vou comprar a passagem”, “No mês que vem a gente vai viajar”.',vocab:'travel',content:'Speaking Brazilian / Street Smart Brazil: traveling in Brazil, taking long-distance buses (rodoviária), and hotel check-in.',resources:[['Speaking Brazilian Language School','https://www.youtube.com/@SpeakingBrazilian'],['WordReference PT-EN','https://www.wordreference.com/pten/']],activities:['Listen to a conversation at a hotel reception or bus station. Note the departure time, destination, and room details.','Explain a future trip you want to take in Brazil in 45 seconds using “Eu vou viajar pra…”, “Vou ficar em…”, “Vou conhecer…”.','Write five sentences about your plans for next week using “vou + infinitive” and “a gente vai + infinitive”.','Roleplay: check in at a Brazilian pousada; confirm breakfast hours, ask for the Wi-Fi password, and ask for a beach towel.','Listen to an announcement at an airport or bus terminal and note down the gate/platform number.','Draft a short confirmation email to a hotel or host asking about check-in times. Check with AI.','Re-listen to the travel audio and repeat the check-in questions until they feel spontaneous.']},
  {theme:'Health, Body & Pharmacy in Brazil',subtitle:'Explain pains, symptoms, and understand pharmacist advice.',grammar:'Expressing physical sensations with “Estar com...” (dor de cabeça, febre) & “Doer”',grammarNote:'Brazilians say “Estou com dor de cabeça” (I have a headache) or “Meu pé tá doendo” (My foot hurts). Give advice with “Você tem que tomar…” or “Precisa repousar”.',vocab:'health',content:'Speaking Brazilian / Street Smart Brazil: health vocabulary, going to a pharmacy (farmácia), and common ailments.',resources:[['Street Smart Brazil','https://streetsmartbrazil.com/'],['WordReference PT-EN','https://www.wordreference.com/pten/']],activities:['Listen to a dialogue between a customer and a pharmacist. Identify the symptom and the recommended medication.','Practice explaining where it hurts using “Tô com dor de…” with different body parts aloud.','Create three medical recommendations using “Você precisa…” and “Tem que tomar esse remédio…”.','Roleplay: tell a Brazilian pharmacist that you have a sore throat and fever, and ask what medicine they recommend.','Listen to the dialogue again without subtitles; write down all health-related words you catch.','Write a short message to your boss or teacher explaining that you cannot attend today because you are unwell.','Review body and symptom vocabulary, then re-listen to the pharmacy conversation.']},
  {theme:'Brazilian Slang, Fillers & Natural Speech',subtitle:'Sound natural with essential conversational markers, “né?”, “pois é”, and “dar um jeito”.',grammar:'Colloquial discourse markers (né?, pois é, beleza, e aí?, tranquilo, dar um jeito)',grammarNote:'“Né?” (short for “não é?”) seeks agreement like “right?”. “Pois é” confirms a thought like “indeed/yeah”. “Dar um jeito” means finding a clever solution.',vocab:'colloquial',content:'Easy Portuguese: key words and slangs to sound like a native Brazilian; natural conversation flow.',resources:[['Easy Portuguese — YouTube','https://www.youtube.com/@EasyPortugueseVideos'],['Speaking Brazilian Language School','https://www.youtube.com/@SpeakingBrazilian']],activities:['Listen to an authentic casual chat between friends. Count how many times “né?”, “tá bom”, and “pois é” appear.','Record 45 seconds telling a story where you naturally incorporate “né?”, “com certeza”, and “deu tudo certo”.','Explain the cultural concept of “dar um jeito” / “jeitinho brasileiro” in your own words.','Roleplay: react to good news and bad news using “Que legal!”, “Que massa!”, “Caramba!”, and “Relaxa, vai dar tudo certo”.','Listen to a street interview; pause after each sentence and mimic the natural reduction (e.g. “tá” instead of “está”, “pra” instead of “para”).','Write a casual WhatsApp-style conversation full of natural conversational expressions and check with AI.','Re-listen to the colloquial video and enjoy how much easier natural speech feels now.']},
  {theme:'Future Goals & Bridging to B1',subtitle:'Celebrate your progress, review past & future, and set your next milestones.',grammar:'Consolidating Present, Pretérito Perfeito, and Immediate Future in continuous speech',grammarNote:'Combine all three timeframes: “Ano passado eu não falava português (past), hoje eu estudo todo dia (present) e no próximo ano vou viajar pro Brasil com confiança (future)!”',vocab:'plans_b1',content:'Speaking Brazilian: goal setting, how to maintain motivation, and bridging from A2 to fluent B1 conversations.',resources:[['Speaking Brazilian Language School','https://www.youtube.com/@SpeakingBrazilian'],['WordReference PT-EN','https://www.wordreference.com/pten/']],activities:['Listen to a Brazilian teacher talking about language learning goals. Note down the three tips for fluency.','Record a 1-minute speech in Portuguese celebrating your journey through the 13 weeks: what was hard, what became easy, and your next goal.','Compare your speaking confidence from Week 1 with today: what vocabulary and grammar patterns feel instinctive now?','Roleplay: converse with a native language partner about your plans to visit Brazil and make friends.','Re-listen to Monday’s Week 1 audio and notice how much clearer native speech sounds now.','Write a self-reflection essay in Portuguese (10–12 lines) summarizing your progress. Have AI evaluate your syntax.','Celebrate finishing your A1–A2 Brazilian Portuguese quest! Save your backup JSON and prepare for B1.']}
];

const weeklyVideos = [
  {title:'Introduce Yourself in Brazilian Portuguese | Super Easy Brazilian Portuguese 7',channel:'Easy Portuguese',id:'W_B9j3-ixZw',start:0,focus:'0:00 — meeting people, introducing yourself, and basic origins',task:'Listen without subtitles to catch names and backgrounds, then introduce yourself aloud.'},
  {title:'Brazilians Talk About Their Daily Routines | Easy Portuguese 105',channel:'Easy Portuguese',id:'GClwSA1vTS4',start:0,focus:'Everyday routines, morning habits, and daily schedules',task:'Listen to locals describing their day and record a 45-second summary of your own routine.'},
  {title:'Kristina and her neighbourhood | Super Easy Brazilian Portuguese 1',channel:'Easy Portuguese',id:'W_B9j3-ixZw',start:0,focus:'Exploring a Brazilian neighborhood and describing places',task:'Listen to descriptions of local spots, then describe your street and home aloud in Portuguese.'},
  {title:'How To Order In A Restaurant | Super Easy Portuguese 12',channel:'Easy Portuguese',id:'Oyyfzh8mN6s',start:0,focus:'Ordering food, drinks, asking for the menu, and the bill',task:'Listen to the restaurant dialogue, then roleplay ordering a meal and asking for the bill.'},
  {title:'Going to a Brazilian street market (Feira Livre)',channel:'Easy Portuguese',id:'W_B9j3-ixZw',start:0,focus:'Buying fresh fruit, pastel, and asking prices at the market',task:'Listen to the feirantes calling out prices and practice asking for fruit by the kilo.'},
  {title:'Asking for directions in Brazil | Easy Portuguese',channel:'Easy Portuguese',id:'GClwSA1vTS4',start:0,focus:'Asking how to get somewhere, street turns, and metro directions',task:'Listen to walking directions and practice repeating turn-by-turn instructions aloud.'},
  {title:'What did you do yesterday? Talking about the past | Speaking Brazilian',channel:'Speaking Brazilian',id:'W_B9j3-ixZw',start:0,focus:'Pretérito perfeito regular verbs in everyday conversation',task:'Listen to past-tense answers and recount three things you did yesterday.'},
  {title:'Past tense irregular verbs in conversation | Speaking Brazilian',channel:'Speaking Brazilian',id:'Oyyfzh8mN6s',start:0,focus:'Key irregular verbs: fui, tive, fiz, foi legal',task:'Listen to weekend stories and tell a short story about an outing you enjoyed.'},
  {title:'Free time and weekend in Brazil | Easy Portuguese',channel:'Easy Portuguese',id:'GClwSA1vTS4',start:0,focus:'Hobbies, music, beach culture, and weekend relaxation',task:'Listen to people describing their free time and record what you enjoy doing to unwind.'},
  {title:'Traveling in Brazil & booking a stay | Speaking Brazilian',channel:'Speaking Brazilian',id:'W_B9j3-ixZw',start:0,focus:'Immediate future (ir + infinitive) and hotel check-in',task:'Listen to travel plans and talk about a trip you want to make in Brazil.'},
  {title:'At the pharmacy & talking about symptoms | Street Smart Brazil',channel:'Street Smart Brazil',id:'Oyyfzh8mN6s',start:0,focus:'Estar com dor de cabeça, febre, and pharmacy advice',task:'Listen to symptoms being described and practice explaining how you feel.'},
  {title:'5 Key Words to Help You Have Natural Conversations | Super Easy Portuguese 46',channel:'Easy Portuguese',id:'W_B9j3-ixZw',start:0,focus:'Colloquial markers: né, pois é, beleza, com certeza',task:'Listen to natural fillers and incorporate them into a 45-second conversational audio.'},
  {title:'Goal setting and speaking Portuguese with confidence | Speaking Brazilian',channel:'Speaking Brazilian',id:'GClwSA1vTS4',start:0,focus:'Reviewing progress, building confidence, and bridging to B1',task:'Listen to fluency tips and record a 1-minute summary of your achievements.'}
];

const vocabularyVideoMatches = {
  greetings: new Set(['oi','olá','bom dia','boa tarde','boa noite','tudo bem?','prazer em conhecer','de onde você é?','meu nome é...']),
  routine: new Set(['acordar','levantar da cama','tomar banho','escovar os dentes','tomar café da manhã','almoçar','sair de casa','voltar pra casa']),
  home: new Set(['apartamento','casa','sala de estar','quarto','cozinha','banheiro','sofá','geladeira','tem uma padaria perto']),
  food: new Set(['o boteco','a padaria','o garçom','o cardápio','o café com leite','o pão de queijo','a conta por favor','quanto deu no total?']),
  market: new Set(['a feira livre','o feirante','o supermercado','o quilo','quanto tá o quilo?','pode experimentar?','me dá dois quilos de tomate']),
  directions: new Set(['virar à esquerda','virar à direita','seguir em frente','o semáforo','a esquina','o ponto de ônibus','a estação de metrô']),
  past_regular: new Set(['ontem','ontem à noite','falei com o meu chefe','estudei português ontem','trabalhei o dia todo','o que você fez ontem?']),
  past_irregular: new Set(['eu fui','você foi','a gente foi','eu tive','eu fiz','foi muito bom','o que aconteceu?']),
  free_time: new Set(['o tempo livre','o fim de semana','gostar de ir à praia','ouvir samba de raiz','fazer um churrasco em casa','bater papo com os vizinhos']),
  travel: new Set(['fazer uma viagem pelo Brasil','a rodoviária da cidade','o aeroporto internacional','fazer o check-in no hotel','vou viajar no mês que vem']),
  health: new Set(['estar com dor de cabeça','estar com febre alta','estar resfriado','a farmácia de plantão','o remédio pra dor','melhoras pra você!']),
  colloquial: new Set(['né?','pois é','beleza?','tranquilo','valeu!','com certeza','dar um jeito','que legal!','relaxa!','de boa']),
  plans_b1: new Set(['o próximo objetivo','falar português com confiança','praticar quinze minutos por dia','alcançar o nível B1 comunicativo','estou pronto para o próximo desafio!'])
};

const topicLabels = {
  greetings: 'greetings and introducing yourself',
  routine: 'your daily routine',
  home: 'your home and spaces',
  food: 'food, drinks, and restaurants',
  market: 'street market and grocery shopping',
  directions: 'getting around and street directions',
  past_regular: 'past activities and yesterday',
  past_irregular: 'past events and storytelling',
  free_time: 'free time, hobbies, and Brazilian leisure',
  travel: 'traveling and booking accommodations',
  health: 'health, symptoms, and the pharmacy',
  colloquial: 'Brazilian slang and conversational fillers',
  plans_b1: 'future goals and language fluency'
};

const localMeanings = {
  'oi':'hi; hello','olá':'hello','bom dia':'good morning','boa tarde':'good afternoon','boa noite':'good evening; good night','tudo bem?':'how are you?; is everything fine?','tudo bom?':'is everything good?; how are you?','como vai?':'how is it going?','como você tá?':'how are you doing? (colloquial)','e aí?':'what’s up?; hey!','beleza?':'all good?; what’s up? (informal)','prazer em conhecer':'pleasure to meet you','o prazer é meu':'the pleasure is mine','de onde você é?':'where are you from?','eu sou dos estados unidos':'I am from the United States','eu sou americano':'I am American','eu moro no brasil':'I live in Brazil','eu moro em são paulo':'I live in São Paulo','eu falo inglês':'I speak English','eu falo um pouco de português':'I speak a little Portuguese','com licença':'excuse me','por favor':'please','muito obrigado':'thank you very much (male speaker)','muito obrigada':'thank you very much (female speaker)','de nada':'you’re welcome','desculpa':'sorry; excuse me','foi mal':'my bad; sorry (informal)','até logo':'see you soon','até mais':'see you later','até amanhã':'see you tomorrow','tchau':'bye; goodbye','se cuida':'take care','bom fim de semana':'have a good weekend','meu nome é...':'my name is...','quantos anos você tem?':'how old are you?','eu tenho trinta anos':'I am thirty years old','ser':'to be (permanent essence/identity)','estar':'to be (temporary state/location)','eu sou':'I am (permanent)','eu tô / eu estou':'I am (temporary state/location)','você é':'you are','a gente é':'we are (colloquial Brazilian)','a gente tá':'we are (temporary/colloquial)','brasileiro':'Brazilian','amigo':'friend','com certeza':'definitely; for sure','entendi':'I understood; got it','não entendi':'I didn’t understand','pode repetir?':'could you repeat that?','fala mais devagar por favor':'speak slower please',
  'acordar':'to wake up','acordar cedo':'to wake up early','levantar da cama':'to get out of bed','tomar banho':'to take a shower','escovar os dentes':'to brush one’s teeth','fazer a barba':'to shave','trocar de roupa':'to change clothes','tomar café da manhã':'to have breakfast','fazer um cafezinho':'to brew a quick coffee','preparar o almoço':'to make lunch','sair de casa':'to leave home','pegar o metrô':'to take the subway','pegar o ônibus':'to catch the bus','chegar no trabalho':'to arrive at work','fazer uma pausa':'to take a break','pausa pro café':'coffee break','almoçar':'to have lunch','comer no quilo':'to eat at a pay-by-weight buffet','voltar pra casa':'to return home','jantar':'to have dinner','lavar a louça':'to do the dishes','jogar o lixo fora':'to take out the trash','assistir à televisão':'to watch television','ir pra cama':'to go to bed','pegar no sono':'to fall asleep',
  'apartamento':'apartment','casa':'house','prédio':'building','quarto':'bedroom','sala de estar':'living room','cozinha':'kitchen','banheiro':'bathroom','varanda':'balcony; veranda','sofá':'sofa; couch','geladeira':'refrigerator','fogão':'stove','cama de casal':'double bed','armário':'cabinet; closet','chuveiro':'shower','tem uma padaria perto':'there is a bakery nearby','perto da minha casa':'near my house','longe do centro':'far from downtown',
  'o boteco':'the traditional Brazilian pub/bar','a padaria':'the bakery / corner breakfast spot','a lanchonete':'the snack bar','o garçom':'the waiter','o cardápio':'the menu','o cafezinho':'the small espresso/filtered coffee','o café com leite':'coffee with milk','o pão na chapa':'toasted French bread with butter','o pão de queijo quentinho':'warm cheese bread','a coxinha de frango com catupiry':'chicken coxinha with cream cheese','o pastel de queijo':'fried cheese turnover / pastel','o açaí na tigela':'açaí bowl','a água de coco gelada':'cold coconut water','a cerveja gelada':'cold beer','o prato feito (pf)':'traditional fixed lunch plate (rice, beans, meat, salad)','o almoço por quilo':'pay-by-weight buffet lunch','o arroz com feijão':'rice and beans','garçom, por favor!':'waiter, please!','eu queria pedir...':'I would like to order...','traz a conta pra gente?':'could you bring us the bill?','a conta por favor':'the bill, please','quanto deu no total?':'how much is the total?','aceita cartão?':'do you take card?','aceita pix?':'do you accept Pix (instant mobile payment)?','pra viagem':'to go; takeout',
  'a feira livre':'the open-air street market','o feirante':'the market vendor','o supermercado':'the supermarket','o quilo':'the kilogram','meio quilo':'half a kilo','uma dúzia de ovos':'a dozen eggs','fruta madura':'ripe fruit','verdura fresca':'fresh greens/vegetables','quanto tá o quilo?':'how much is a kilo?','pode experimentar?':'can I try a piece?','me dá dois quilos de tomate':'give me two kilos of tomatoes','me dá uma sacolinha por favor':'give me a plastic bag please','o troco':'the change (money)','só isso mesmo, obrigado':'just that, thank you',
  'virar à esquerda':'to turn left','virar à direita':'to turn right','seguir em frente':'to go straight ahead','atravessar a rua':'to cross the street','na faixa de pedestres':'on the pedestrian crosswalk','o semáforo':'the traffic light','a esquina':'the street corner','o ponto de ônibus':'the bus stop','a estação de metrô':'the subway station','com licença, onde fica...?':'excuse me, where is...?','como eu faço pra chegar no centro?':'how do I get to downtown?','é perto daqui?':'is it close to here?','dá pra ir a pé?':'can I walk there?; is it walkable?','fica a cinco minutos a pé':'it’s a five-minute walk',
  'ontem':'yesterday','ontem à noite':'yesterday evening; last night','na semana passada':'last week','falei com o meu chefe':'I spoke with my boss','estudei português ontem':'I studied Portuguese yesterday','trabalhei o dia todo':'I worked all day','almocei com os colegas':'I had lunch with colleagues','o que você fez ontem?':'what did you do yesterday?','você já comeu alguma coisa?':'have you eaten anything yet?','eu não entendi direito':'I didn’t catch that properly',
  'eu fui':'I went','você foi':'you went','a gente foi':'we went','eu tive':'I had','eu fiz':'I made; I did','foi muito bom':'it was very good','foi bem legal':'it was really cool','o que aconteceu?':'what happened?','o que você fez no fim de semana?':'what did you do over the weekend?','a gente se divertiu bastante':'we had a lot of fun',
  'o tempo livre':'free time; leisure','o fim de semana':'the weekend','gostar de ir à praia':'to like going to the beach','ouvir samba de raiz':'to listen to traditional samba','fazer um churrasco em casa':'to have a barbecue at home','tomar uma cerveja gelada no boteco':'to have a cold beer at the pub','o que você gosta de fazer no tempo livre?':'what do you like to do in your free time?','eu adoro a cultura brasileira':'I love Brazilian culture',
  'fazer uma viagem pelo brasil':'to take a trip through Brazil','comprar a passagem com antecedência':'to buy the ticket in advance','a rodoviária da cidade':'the city bus terminal','fazer o check-in no hotel':'to check in at the hotel','quarto com ar-condicionado':'room with air conditioning','vou viajar no mês que vem':'I’m going to travel next month','boa viagem e aproveite!':'have a safe trip and enjoy!',
  'estar com dor de cabeça':'to have a headache','estar com dor de garganta':'to have a sore throat','estar com febre alta':'to have a high fever','estar resfriado':'to have a cold','a farmácia de plantão':'the on-duty pharmacy','o que você tá sentindo?':'what are you feeling?','onde tá doendo?':'where does it hurt?','melhoras pra você!':'get well soon!',
  'né?':'right?; isn’t it? (colloquial tag)','pois é':'yeah, that’s true; indeed','beleza?':'all good?','tranquilo':'chill; smooth; no problem','valeu!':'thanks!; cheers!','tá bom':'okay; all right','com certeza':'definitely; absolutely','dar um jeito':'to find a way; work things out','o jeitinho brasileiro':'the Brazilian way of improvising a solution','vai dar certo':'it’s going to work out','que legal!':'how cool!; awesome!','nossa!':'wow!; gosh!','de boa':'relaxed; chill; all good','partiu!':'let’s go!; I’m off!',
  'o próximo objetivo':'the next goal','falar português com confiança':'to speak Portuguese with confidence','entender nativos falando rápido':'to understand natives speaking fast','praticar quinze minutos por dia':'to practice fifteen minutes a day','alcançar o nível b1 comunicativo':'to reach the communicative B1 level','estou pronto para o próximo desafio!':'I am ready for the next challenge!','olá':'hello','boa tarde':'good afternoon','boa noite':'good evening; good night','tudo bom?':'is everything good?; how are you?','como vai?':'how are you doing?','como você tá?':'how are you? (spoken contraction of "está")','e aí?':'hey!; what’s up?','beleza?':'all good?; what’s up?','o prazer é meu':'the pleasure is mine','eu sou americano':'I am American (male)','eu sou canadense':'I am Canadian','eu moro no brasil':'I live in Brazil','eu moro em são paulo':'I live in São Paulo','eu falo inglês':'I speak English','não há de quê':'don’t mention it; you’re welcome','até mais':'see you later','até logo':'see you soon','até amanhã':'see you tomorrow','se cuida':'take care','bom fim de semana':'have a good weekend','como se chama?':'what is your name?','qual é o seu nome?':'what is your name?','quantos anos você tem?':'how old are you?','eu tenho trinta anos':'I am thirty years old','eu trabalho com...':'I work with...','eu sou programador':'I am a programmer / software developer','eu sou engenheiro':'I am an engineer','você é':'you are','você tá / você está':'you are (temporary / state)','a gente é':'we are (colloquial)','a gente tá':'we are (temporary / colloquial)','eles são':'they are','eles estão':'they are (temporary / location)','estrangeiro':'foreigner','gringo':'foreigner (friendly/informal in Brazil)','conhecido':'acquaintance','vizinho':'neighbor','colega de trabalho':'coworker; colleague','sim':'yes','não':'no','claro':'of course; sure','acordar tarde':'to wake up late','o despertador toca':'the alarm clock rings','espreguiçar':'to stretch in bed','lavar o rosto':'to wash one’s face','pentear o cabelo':'to comb one’s hair','vestir a roupa':'to get dressed; put clothes on','colocar os sapatos':'to put on shoes','comer um pão com manteiga':'to eat bread with butter','fechar a porta':'to close the door','pegar o elevador':'to take the elevator','descer as escadas':'to go down the stairs','pegar o ônibus':'to catch the bus','esperar no ponto':'to wait at the bus stop','andar a pé':'to walk; go on foot','dirigir':'to drive','pegar trânsito':'to hit traffic; get stuck in traffic','chegar na hora':'to arrive on time','chegar atrasado':'to arrive late','começar o expediente':'to start the workday/shift','bater o ponto':'to clock in/out for work','ligar o computador':'to turn on the computer','olhar os e-mails':'to check emails','fazer uma reunião':'to have a meeting','conversar com os colegas':'to chat with coworkers','voltar pro trabalho':'to return to work','terminar o serviço':'to finish work/task','sair do trabalho':'to leave work','fazer compras no caminho':'to buy groceries on the way','chegar em casa':'to arrive home','tirar os sapatos':'to take off shoes','relaxar no sofá':'to relax on the couch','tomar um banho quente':'to take a warm shower','fazer o jantar':'to cook dinner','jantar em família':'to have dinner with family','limpar a pia':'to clean the sink','arrumar a sala':'to tidy up the living room','ler um livro':'to read a book','colocar o pijama':'to put on pajamas','deitar':'to lie down','dormir cedo':'to sleep early','dormir tarde':'to sleep late','prédio':'building','condomínio':'gated community / condo building','andar':'floor (of a building); to walk','portaria':'front desk / entrance lobby','portão':'gate','interfone':'intercom','campainha':'doorbell','chave':'key','poltrona':'armchair','controle remoto':'remote control','mesa de centro':'coffee table','tapete':'rug; carpet','estante de livros':'bookshelf','cama de solteiro':'single bed','colchão':'mattress','travesseiro':'pillow','lençol':'bedsheet','coberta':'blanket','guarda-roupa':'wardrobe; closet','gaveta':'drawer','cabide':'clothes hanger','abajur':'bedside lamp','congelador':'freezer','micro-ondas':'microwave','pia da cozinha':'kitchen sink','torneira':'tap; faucet','escorredor de pratos':'dish drying rack','armário de cozinha':'kitchen cabinet','mesa de jantar':'dining table','cadeira':'chair','box do banheiro':'shower stall / glass enclosure','pia do banheiro':'bathroom sink','toalha de banho':'bath towel','toalha de rosto':'hand towel','papel higiênico':'toilet paper','área de serviço':'laundry area / utility room','lavanderia':'laundry room','máquina de lavar':'washing machine','tanque':'laundry wash basin','varal de roupas':'clothesline / drying rack','ferro de passar':'clothes iron','aspirador de pó':'vacuum cleaner','vassoura':'broom','rodo':'floor squeegee (essential Brazilian tool)','balde':'bucket','pano de chão':'floor cleaning cloth','sacada':'balcony','janela':'window','cortina':'curtain','tomada':'electrical outlet','lâmpada':'lightbulb','parede':'wall','chão':'floor','teto':'ceiling','ao lado do mercado':'next to the grocery market','em frente à praça':'in front of the square','a garçonete':'the waitress','o menu':'the menu','a mesa':'the table','o balcão':'the counter','pedir no balcão':'to order at the counter','sentar na mesa':'to sit at a table','o café puro':'black coffee (no milk)','o pingado':'coffee with a splash of milk (served in a small glass)','a empada':'savory Brazilian pot pie / tart','açaí com banana e granola':'açaí with sliced banana and granola','a água mineral sem gás':'still mineral water','a água com gás':'sparkling mineral water','o suco de laranja natural':'freshly squeezed orange juice','o suco de maracujá':'passion fruit juice','o suco de abacaxi com hortelã':'pineapple juice with fresh mint','o chopp gelado':'cold draft beer','a caipirinha':'caipirinha (traditional cachaça, lime & sugar cocktail)','o self-service':'buffet / self-service restaurant','o bife acebolado':'steak with sautéed onions','o filé de frango grelhado':'grilled chicken fillet','o peixe fresco':'fresh fish','a farofa caseira':'homemade toasted cassava flour (farofa)','o vinagrete':'Brazilian tomato, onion and bell pepper relish','a mandioca frita':'fried yucca / cassava','a batata frita':'french fries','a salada verde':'green salad','a sobremesa':'dessert','o pudim de leite':'caramel milk flan / pudim','o brigadeiro':'traditional chocolate truffle sweet','você pode trazer...?':'could you bring...?','aceita cartão?':'do you take credit/debit card?','aceita pix?':'do you take Pix (instant mobile transfer)?','posso pagar no débito?':'can I pay with debit card?','posso pagar no crédito?':'can I pay with credit card?','tem taxa de serviço?':'is there a service charge (10%)?','a caixinha do garçom':'the waiter tip / tip jar','tá uma delícia':'it’s delicious!','muito gostoso':'very tasty','embrulha pra viagem por favor':'wrap it to go please','a barraca de frutas':'fruit market stall','a barraca de verduras':'vegetable stall','o carrinho de compras':'shopping cart','a cestinha':'small shopping basket','as compras do mês':'monthly grocery shopping','cem gramas':'100 grams','duzentos gramas':'200 grams','uma dúzia de bananas':'a dozen bananas','o pedaço':'the piece / slice','o pacote':'the packet / package','a lata':'the can','o vidro':'the glass jar / bottle','a garrafa':'the bottle','o legume':'vegetable / root','o tomate':'tomato','a cebola':'onion','o alho':'garlic','a batata':'potato','a cenoura':'carrot','a alface':'lettuce','o limão taiti':'Persian/Tahiti green lime','a laranja':'orange','a banana prata':'banana prata (popular Brazilian dessert banana)','a maçã':'apple','o abacaxi doce':'sweet pineapple','a manga':'mango','o mamão':'papaya','o melão':'melon','a melancia':'watermelon','o morango':'strawberry','o maracujá':'passion fruit','o arroz':'rice','o feijão carioca':'pinto / carioca beans','o feijão preto':'black beans','o óleo de soja':'soybean cooking oil','o azeite de oliva':'olive oil','o sal':'salt','o açúcar':'sugar','o café moído':'ground coffee','o leite integral':'whole milk','o queijo minas':'Minas fresh white cheese','o queijo prato':'prato cheese (mild yellow sliced cheese)','o presunto fatiado':'sliced ham','o pão francês':'crusty Brazilian white bread roll','tá bem docinho?':'is it sweet? (asking about fruit)','me vê meio quilo de cebola':'give me half a kilo of onions','tá maduro pra hoje?':'is it ripe enough for today?','quanto deu tudo?':'how much is everything together?','passar no caixa':'to check out at the cash register','a fila do caixa':'the checkout line','pagar em dinheiro':'to pay in cash','passar o cartão':'to swipe/insert the card','precisa de nota fiscal?':'do you need a receipt / tax invoice?','ir reto':'to go straight','atravessar na faixa':'to cross on the pedestrian crossing','o sinal de trânsito':'the traffic light','o farol':'the traffic light (São Paulo regional term)','o quarteirão':'city block','a quadra':'city block (Rio/Brasília regional term)','a rua':'street','a avenida':'avenue','o cruzamento':'intersection','a rotatória':'roundabout','a calçada':'sidewalk','a praça':'public square / plaza','a estação de trem':'train station','a linha do metrô':'metro line','a linha amarela':'the yellow metro line (São Paulo)','a catraca do metrô':'metro turnstile','o bilhete do metrô':'metro ticket','recarregar o cartão':'to top up / recharge transit card','descer no próximo ponto':'to get off at the next bus stop','pegar a integração':'to take the transfer / connection','subir a rua':'to walk up the street','descer a rua':'to walk down the street','o trânsito pesado':'heavy traffic','o congestionamento':'traffic jam','o engarrafamento':'traffic gridlock','perto daqui':'near here','longe daqui':'far from here','fica logo ali':'it’s right over there','fica do outro lado da rua':'it’s across the street','em frente ao banco':'in front of the bank','ao lado da farmácia':'next to the pharmacy','atrás da igreja':'behind the church','entre a padaria e o mercado':'between the bakery and the market','é perto daqui?':'is it near here?','demora muito pra chegar?':'does it take long to get there?','pega a primeira à direita':'take the first right','vira à esquerda no farol':'turn left at the traffic light','vai até o final da rua':'go until the end of the street','ontem de manhã':'yesterday morning','ontem à tarde':'yesterday afternoon','anteontem':'the day before yesterday','no mês passado':'last month','no ano passado':'last year','outro dia':'the other day','faz tempo':'a long time ago; it’s been a while','já terminei':'I already finished','ainda não':'not yet','morei no rio de janeiro':'I lived in Rio de Janeiro','comprei frutas na feira':'I bought fruit at the market','jantei em casa':'I had dinner at home','tomei um café na padaria':'I had coffee at the bakery','andei pelo parque':'I walked through the park','limpei a casa no sábado':'I cleaned the house on Saturday','arrumei o meu quarto':'I tidied up my room','lavei toda a louça':'I washed all the dishes','ajudei meu vizinho':'I helped my neighbor','gostei muito do filme':'I really liked the movie','visitei a família':'I visited family','cheguei cedo no trabalho':'I arrived early at work','voltei tarde pra casa':'I got back home late','comi um pastel delicioso':'I ate a delicious fried pastel','bebi uma água de coco':'I drank fresh coconut water','abri a janela do quarto':'I opened the bedroom window','fechei a porta com chave':'I locked the door with a key','decidi estudar mais':'I decided to study more','assisti a uma série brasileira':'I watched a Brazilian series','ouvi música o dia todo':'I listened to music all day','escrevi uma mensagem':'I wrote a message','nós conversamos bastante':'we talked a lot','paguei a conta no cartão':'I paid the bill with a card','peguei o ônibus errado':'I caught the wrong bus','ele foi':'he went / he was','ela foi':'she went / she was','eles foram':'they went / they were','ele teve':'he had','a gente teve':'we had','eles tiveram':'they had','ele fez':'he did / he made','a gente fez':'we did / we made','eles fizeram':'they did / they made','eu estive':'I was (temporarily)','você esteve':'you were (temporarily)','a gente esteve':'we were (temporarily)','fui à praia no sábado':'I went to the beach on Saturday','fui ao supermercado de manhã':'I went to the supermarket in the morning','fui visitar uns amigos':'I went to visit some friends','tive que trabalhar no sábado':'I had to work on Saturday','tive uma reunião demorada':'I had a lengthy meeting','tive um problema no trabalho':'I had an issue at work','não tive tempo de cozinhar':'I didn’t have time to cook','fiz o almoço pra família':'I made lunch for the family','fiz uma caminhada na praia':'I took a walk on the beach','fiz compras na feira':'I shopped at the market','estive em são paulo no ano passado':'I was in São Paulo last year','foi uma experiência ótima':'it was a great experience','foi difícil no começo':'it was difficult at the beginning','não deu tempo':'there wasn’t enough time','deu tudo certo':'everything went well; it worked out','a que horas você voltou?':'what time did you come back?','a gente comeu pizza juntos':'we ate pizza together','conheci pessoas simpáticas':'I met friendly people','ficamos em casa descansando':'we stayed home relaxing','o feriado prolongado':'the long weekend / bank holiday','gostar de tomar banho de mar':'to like swimming in the ocean','tomar sol na areia':'to sunbathe on the sand','tomar água de coco bem gelada':'to drink ice-cold coconut water','escutar mpb':'to listen to MPB (Música Popular Brasileira)','ouvir bossa nova':'to listen to Bossa Nova','andar de bicicleta no calçadão':'to ride a bicycle on the beach boardwalk','passear no parque no domingo':'to stroll in the park on Sunday','fazer uma caminhada matinal':'to go for a morning walk','correr ao ar livre':'to run outdoors','fazer um churrasco em casa':'to have a barbecue at home','churrasco com os amigos':'barbecue with friends','reunir os amigos no sábado':'to get friends together on Saturday','fazer um piquenique na praça':'to have a picnic in the park square','jogar futebol com a galera':'to play soccer with friends/crew','assistir ao jogo de futebol':'to watch the soccer match','torcer pelo time de coração':'to cheer for one’s favorite team','tocar violão':'to play acoustic guitar','aprender a dançar forró':'to learn how to dance forró','ler um bom livro na rede':'to read a good book in a hammock','assistir a um filme nacional':'to watch a Brazilian film','curtir a natureza':'to enjoy nature','fazer uma trilha na montanha':'to hike a mountain trail','viajar no feriado':'to travel on the holiday','conhecer cidades históricas':'to visit historical towns','visitar um museu de arte':'to visit an art museum','dar uma volta na cidade':'to take a stroll around the city','bater papo com os vizinhos':'to chat with neighbors','relaxar no sofá depois do almoço':'to relax on the couch after lunch','aproveitar o dia de sol':'to enjoy the sunny day','descansar bastante no domingo':'to rest well on Sunday','o que você gosta de fazer no tempo livre?':'what do you like to do in your free time?','eu prefiro ficar em casa descansando':'I prefer staying home resting','férias de verão':'summer vacation','preparar a mala de viagem':'to pack the travel suitcase','levar uma mochila leve':'to take a light backpack','o documento de identidade (rg)':'national ID document','o passaporte válido':'valid passport','passagem de ida e volta':'round-trip ticket','passagem de ônibus interestadual':'interstate bus ticket','o terminal rodoviário':'bus terminal / station','o aeroporto internacional':'international airport','o balcão de check-in':'check-in desk','o portão de embarque':'boarding gate','despachar a bagagem':'to check luggage','a mala de mão':'carry-on luggage','o voo tá atrasado':'the flight is delayed','embarcar no avião':'to board the plane','aterrissar no destino':'to land at the destination','a pousada na praia':'beach guesthouse / inn','o hotel no centro':'downtown hotel','fazer o check-out ao meio-dia':'to check out at noon','a chave do quarto':'room key','quarto com cama de casal':'room with double bed','café da manhã incluído na diária':'breakfast included in daily rate','a praia paradisíaca':'paradisiacal beach','alugar um carro':'to rent a car','fazer um passeio de barco':'to take a boat tour','que horas sai o ônibus?':'what time does the bus leave?','a que horas sai o voo?':'what time does the flight leave?','quanto tempo dura a viagem?':'how long does the trip take?','onde fica a plataforma de embarque?':'where is the boarding platform?','tem vaga na pousada?':'are there rooms available at the inn?','vamos conhecer o rio de janeiro':'we’re going to discover Rio de Janeiro','vamos visitar salvador':'we’re going to visit Salvador','estar com dor de dente':'to have a toothache','estar com dor de barriga':'to have a stomachache','estar com dor nas costas':'to have a backache','estar com dor no corpo todo':'to ache all over','medir a temperatura com o termômetro':'to take temperature with thermometer','estar com calafrio':'to have the chills','estar com gripe forte':'to have a bad flu','estar com o nariz entupido':'to have a stuffy nose','estar com tosse seca':'to have a dry cough','espirrar por causa da alergia':'to sneeze because of allergies','ter tontura ao levantar':'to feel dizzy when standing up','estar com azia depois de comer':'to have heartburn after eating','sentir enjoo':'to feel nauseous','sentir-se cansado e sem energia':'to feel tired and drained of energy','estar estressado com o trabalho':'to be stressed from work','o farmacêutico experiente':'experienced pharmacist','o remédio pra dor':'pain medication','o analgésico':'painkiller','o anti-inflamatório':'anti-inflammatory drug','o xarope pra tosse':'cough syrup','as pastilhas pra garganta':'throat lozenges','a pomada pra machucado':'ointment for wounds/bruises','o curativo':'bandage / adhesive strip','a receita médica do doutor':'doctor’s prescription','o posto de saúde do bairro':'neighborhood public health clinic','o médico de família':'family doctor / physician','marcar uma consulta médica':'to schedule a doctor’s appointment','o pronto-socorro do hospital':'hospital emergency room','desde quando você tá assim?':'how long have you felt like this?','toma esse remédio de oito em oito horas':'take this medicine every eight hours','tomar o comprimido depois das refeições':'take the pill after meals','tomar em jejum antes do café':'take on an empty stomach before breakfast','beber bastante água e suco natural':'drink plenty of water and fresh juice','ficar de repouso na cama':'to rest in bed','espero que você melhore logo':'I hope you get better soon','tudo beleza':'everything is good; all fine','e aí, tudo bem?':'hey, how are you?','tá tranquilo':'it’s all good; no worries','valeu demais':'thanks a lot; much appreciated','tá certo':'that’s right; all right','claro que sim':'of course yes; sure thing','de jeito nenhum':'no way; by no means','não foi nada':'it was nothing; don’t mention it','o jeitinho brasileiro':'the Brazilian creative way of solving problems','que massa!':'that’s awesome!; so cool!','que bacana!':'how neat!; that’s great!','nossa senhora!':'my goodness!; oh my god!','caramba!':'wow!; holy cow!; darn!','fala sério!':'no way!; you’ve got to be kidding!','mentira!':'no way! (in disbelief)','jura?':'really?; swear it?','tô de boa':'I’m chill; I’m good','fica tranquilo':'don’t worry; take it easy','com calma':'calmly; taking your time','pouco a pouco':'little by little','um passo de cada vez':'one step at a time','no fim das contas':'at the end of the day','tirando as dúvidas':'clearing up questions','de vez em quando':'from time to time; once in a while','com frequência':'frequently','fazer sentido':'to make sense','isso faz muito sentido':'that makes a lot of sense','isso não faz sentido':'that doesn’t make sense','vale a pena':'it’s worth it','valeu a pena':'it was worth it','dar uma olhada':'to take a look','prestar atenção':'to pay attention','tomar cuidado':'to be careful','ficar de olho':'to keep an eye on','tá ligado?':'you know what I mean?; get it?','bora!':'let’s go!; come on!','o futuro':'the future','a meta de aprendizado':'learning goal','falar português sem travar':'to speak Portuguese without freezing/hesitating','manter uma conversa natural e fluida':'to maintain a natural, fluid conversation','não ter medo de cometer erros':'not being afraid to make mistakes','aprender com os próprios erros':'to learn from one’s own mistakes','estudar com consistência e foco':'to study with consistency and focus','fazer progressos visíveis a cada semana':'to make visible progress every week','ampliar o vocabulário do dia a dia':'to expand daily vocabulary','dominar as estruturas básicas da língua':'to master the basic language structures','dar o próximo passo nos estudos':'to take the next step in studies','fazer amigos brasileiros nativos':'to make native Brazilian friends','entender letras de músicas brasileiras':'to understand lyrics of Brazilian songs','assistir a filmes brasileiros sem legenda':'to watch Brazilian movies without subtitles','ler notícias e crônicas em português':'to read news and chronicles in Portuguese','fazer uma viagem inesquecível pelo brasil':'to take an unforgettable trip across Brazil','conversar com pessoas de várias regiões':'to chat with people from various regions','conhecer a cultura e a culinária do brasil':'to experience Brazil’s culture and cuisine','ter autonomia para viajar e morar':'to have independence to travel and live in Brazil','eu vou continuar estudando todo dia':'I am going to keep studying every day','eu vou falar com mais segurança':'I am going to speak with greater confidence','eu vou conseguir me comunicar':'I will be able to communicate','não desista no meio do caminho':'don’t give up halfway','com paciência e dedicação dá certo':'with patience and dedication it works out','estou muito animado para continuar':'I am very excited to keep going'
};

const examplesByTerm = {
  'tudo bem?': ['Oi, tudo bem? Como foi o seu dia?', 'Tudo bem por aqui, e com você?'],
  'prazer em conhecer': ['Muito prazer em conhecer você!', 'Sou o Henrique, prazer em conhecer.'],
  'eu sou dos estados unidos': ['Eu sou dos Estados Unidos, mas moro no Brasil agora.', 'De que estado dos Estados Unidos você é?'],
  'eu falo um pouco de português': ['Eu falo um pouco de português, estou aprendendo.', 'Ela fala um pouco de português também.'],
  'com certeza': ['Você vem pro churrasco no sábado? — Com certeza!', 'Com certeza essa é a melhor opção.'],
  'acordar cedo': ['Eu costumo acordar cedo durante a semana.', 'Acordei cedo para aproveitar o dia de sol.'],
  'fazer um cafezinho': ['Vou fazer um cafezinho antes de começar a trabalhar.', 'Quer que eu faça um cafezinho pra você?'],
  'tomar café da manhã': ['Tomo café da manhã com pão e frutas.', 'A gente tomou café da manhã na padaria da esquina.'],
  'o pão de queijo quentinho': ['Nada melhor do que um pão de queijo quentinho com café.', 'Pedi dois pães de queijo quentinhos no balcão.'],
  'traz a conta pra gente?': ['Garçom, traz a conta pra gente, por favor?', 'Pode trazer a conta pra gente no cartão.'],
  'quanto tá o quilo?': ['Bom dia! Quanto tá o quilo dessa manga?', 'Quanto tá o quilo do tomate hoje?'],
  'virar à direita': ['Você vai virar à direita logo depois do semáforo.', 'Vira à direita na próxima esquina.'],
  'seguir em frente': ['Pode seguir em frente por dois quarteirões.', 'Segue em frente até ver a praça.'],
  'dá pra ir a pé?': ['A farmácia é perto, dá pra ir a pé?', 'Dá pra ir a pé tranquilamente daqui.'],
  'ontem': ['Ontem eu estudei português por quinze minutos.', 'O que você comeu no almoço ontem?'],
  'foi muito bom': ['O passeio na praia ontem foi muito bom!', 'O almoço em família foi muito bom.'],
  'gostar de ir à praia': ['Eu gosto de ir à praia aos domingos.', 'No verão todo mundo gosta de ir à praia.'],
  'vou viajar no mês que vem': ['Vou viajar no mês que vem para conhecer o Rio de Janeiro.', 'No mês que vem vou viajar com a família.'],
  'estar com dor de cabeça': ['Hoje tô com dor de cabeça, vou tomar um remédio.', 'Ela disse que está com dor de cabeça.'],
  'dar um jeito': ['Fica tranquilo, a gente sempre dá um jeito.', 'Não se preocupe que eu dou um jeito nisso hoje.'],
  'vai dar certo': ['Continua praticando que vai dar certo!', 'Não se preocupe, vai dar tudo certo.']
};

function makeUsageExamples(term, group) {
  if (examplesByTerm[term.toLowerCase()]) return examplesByTerm[term.toLowerCase()];
  const topic = topicLabels[group] || 'daily life';
  if (term.includes('?') || /^(eu |você |a gente |ele |ela |eles |vamos |vou |tô |foi )/i.test(term)) {
    return [
      `In a real Brazilian conversation about ${topic}, you can say: “${term}.”`,
      `A native speaker might say “${term}” when chatting about ${topic}.`
    ];
  }
  return [
    `You will often hear the expression “${term}” in Brazil when discussing ${topic}.`,
    `Try using “${term}” in a complete sentence during your speaking practice today.`
  ];
}

const stateKey = 'portugueseQuestProgressV1';
let state = loadState();
state.lookups ||= {};
let activeVocabKey = null;
let activeVocabVideo = null;

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(stateKey)) || {days:{},vocab:{}};
  } catch {
    return {days:{},vocab:{}};
  }
}

function saveState() {
  try {
    localStorage.setItem(stateKey, JSON.stringify(state));
    updateProgress();
    return true;
  } catch {
    toast('Could not save progress. Please export a backup and free storage space in your browser.');
    return false;
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function makeDayDescription(w, dayIndex, weekIndex = weeks.indexOf(w)) {
  const f = weeklyFormats[dayIndex];
  const video = weeklyVideos[weekIndex];
  const useCuratedVideo = dayIndex === 1 && video;
  const resource = useCuratedVideo ? `${video.channel} — ${video.title}` : f.resource;
  const resourceAction = useCuratedVideo ? (video.id ? ` · <button class="inline-video-open" type="button" data-week-video="${weekIndex}">open video in modal ▶</button>` : '') : w.resources?.[dayIndex % w.resources.length] ? ` · <a href="${w.resources[dayIndex % w.resources.length][1]}" target="_blank" rel="noreferrer">open resource ↗</a>` : '';
  return `<p><b>Daily task:</b> ${escapeHtml(w.activities[dayIndex])}</p><p><b>Resource:</b> ${escapeHtml(resource)}${resourceAction}</p><p><b>Time:</b> 15 minutes · <b>How to practice:</b> ${escapeHtml(f.task)}</p><p><b>Daily outcome:</b> ${escapeHtml(f.output)}</p>`;
}

function listeningPractice(w, weekIndex) {
  const video = weeklyVideos[weekIndex];
  const source = video?.id ? `${video.channel}: “${video.title}”` : 'a short A1–A2 Brazilian Portuguese audio about ' + w.theme.toLowerCase();
  const steps = [
    `<b>1 · Listen without subtitles (4 min).</b> Use ${escapeHtml(source)}. Focus on catching the main topic, who is speaking, and the emotional tone; do not pause to translate word-for-word.`,
    `<b>2 · Recall from memory (4 min).</b> Close the video/audio and speak aloud or write down three things you understood in Portuguese. Mark your confidence score below before looking at any text.`,
    `<b>3 · Check and investigate (4 min).</b> Open with Portuguese subtitles/transcript. Choose at most two gaps: a connected speech reduction (like 'tô' or 'pra'), a new word, or a verb ending. Write the whole sentence down.`,
    `<b>4 · Listen and shadow (3 min).</b> Listen to the clip once more and do shadowing (speak along in real time) with two short sentences, mimicking natural Brazilian pronunciation and melody.`
  ];
  const dialog = document.getElementById('listening-dialog');
  dialog.dataset.week = String(weekIndex);
  document.getElementById('listening-title').textContent = `Listening · ${w.theme}`;
  document.getElementById('listening-intro').textContent = `Four short passes on ${w.theme.toLowerCase()}. The goal is to catch the core message, check gaps, and practice natural Brazilian speaking rhythm.`;
  document.getElementById('listening-video-open').hidden = !video?.id;
  document.getElementById('listening-steps').innerHTML = steps.map(step => `<article>${step}</article>`).join('');
  const stored = state.listening?.[weekIndex];
  const history = Array.isArray(stored) ? stored : stored ? [stored] : [];
  const latest = history.at(-1) || {};
  document.getElementById('listening-history').textContent = history.length > 1 ? `Saved self-assessments: ${history.slice(-4).map(entry => entry.confidence ? `${entry.confidence}/4` : '—').join(' · ')}` : '';
  document.querySelectorAll('[name="listening-confidence"]').forEach(input => input.checked = input.value === String(latest.confidence || ''));
  document.getElementById('listening-note').value = latest.note || '';
  dialog.showModal();
}

function openVideoDialog(video) {
  if (!video?.id) return;
  const dialog = document.getElementById('video-dialog');
  document.getElementById('video-dialog-channel').textContent = video.channel;
  document.getElementById('video-dialog-title').textContent = video.title;
  document.getElementById('video-dialog-focus').textContent = video.focus;
  document.getElementById('video-dialog-task').textContent = video.task;
  document.getElementById('video-youtube-link').href = `https://www.youtube.com/watch?v=${encodeURIComponent(video.id)}${video.start ? `&t=${video.start}s` : ''}`;
  document.getElementById('video-frame').src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(video.id)}?start=${video.start || 0}&autoplay=1&rel=0`;
  dialog.showModal();
}

function renderWeeklyVideoCard(video, index) {
  const action = video.id ? `<button class="video-open-button" type="button" data-week-video="${index}">Watch in modal ▶</button><a href="https://www.youtube.com/watch?v=${encodeURIComponent(video.id)}${video.start ? `&t=${video.start}s` : ''}" target="_blank" rel="noreferrer">Open on YouTube ↗</a>` : `<span class="video-not-available">${escapeHtml(video.focus)}</span>`;
  return `<section class="weekly-video-card"><div class="weekly-video-copy"><div class="vocab-section-label">WEEKLY VIDEO · ${escapeHtml(video.channel)}</div><h4>${escapeHtml(video.title)}</h4><p><b>Focus:</b> ${escapeHtml(video.focus)}</p><p><b>Practice (15 min):</b> ${escapeHtml(video.task)}</p></div><div class="weekly-video-actions"><button class="listening-open-button" type="button" data-listening-week="${index}">Start guided listening 🎧</button>${action}</div></section>`;
}

async function translateVocab(term) {
  const localMeaning = localMeanings[term.toLowerCase()];
  if (localMeaning) return localMeaning;
  if (state.lookups[term]) return state.lookups[term];
  const url = new URL('https://api.mymemory.translated.net/get');
  url.searchParams.set('q', term);
  url.searchParams.set('langpair', 'pt-BR|en');
  const response = await fetch(url, {headers: {Accept: 'application/json'}, signal: AbortSignal.timeout(9000)});
  if (!response.ok) throw new Error('translation unavailable');
  const data = await response.json();
  const value = data?.responseData?.translatedText;
  if (data?.responseStatus !== 200 || !value || value.toLowerCase().includes('no query specified')) throw new Error('translation unavailable');
  state.lookups[term] = value;
  saveState();
  return value;
}

async function openVocabCard(button, term, key, group) {
  activeVocabKey = key;
  const dialog = document.getElementById('vocab-dialog');
  document.getElementById('vocab-dialog-title').textContent = term;
  const translation = document.getElementById('vocab-translation');
  const localMeaning = localMeanings[term.toLowerCase()];
  translation.textContent = state.lookups[term] || localMeaning || 'Looking up translation…';
  document.getElementById('vocab-meaning-note').textContent = localMeaning ? 'Contextual meaning for this roadmap; use examples to see it in real speech.' : state.lookups[term] ? 'Automatic translation; consider the weekly context to verify nuance.' : 'Automatic translation; the context will help choose the best meaning.';
  document.getElementById('vocab-youglish').href = `https://youglish.com/pronounce/${encodeURIComponent(term)}/portuguese`;
  document.getElementById('vocab-wordreference').href = `https://www.wordreference.com/pten/${encodeURIComponent(term)}`;
  document.getElementById('vocab-example-list').innerHTML = makeUsageExamples(term, group).map((example, i) => `<article class="vocab-example"><span>${i + 1}</span><p>${escapeHtml(example)}</p></article>`).join('');
  const weekIndex = Number(key.split('-')[0]);
  activeVocabVideo = vocabularyVideoMatches[group]?.has(term.toLowerCase()) ? weeklyVideos[weekIndex] : null;
  const videoCard = document.getElementById('vocab-related-video');
  videoCard.hidden = !activeVocabVideo?.id;
  if (activeVocabVideo) {
    document.getElementById('vocab-video-title').textContent = `${activeVocabVideo.title} · ${activeVocabVideo.channel}`;
  }
  const complete = document.getElementById('vocab-complete');
  complete.textContent = state.vocab[key] ? 'Learned ✓ · undo' : 'Mark as learned';
  dialog.showModal();
  if (!state.lookups[term] && !localMeaning) {
    try {
      const meaning = await translateVocab(term);
      if (activeVocabKey === key && dialog.open) {
        translation.textContent = meaning;
        document.getElementById('vocab-meaning-note').textContent = 'Automatic translation; consider the weekly context to confirm nuance.';
      }
    } catch {
      if (activeVocabKey === key && dialog.open) {
        translation.textContent = 'Translation temporarily unavailable. You can still check the examples and WordReference.';
        document.getElementById('vocab-meaning-note').textContent = 'Check your internet connection or open the definition on WordReference.';
      }
    }
  }
}

function render() {
  document.getElementById('week-jump').innerHTML = weeks.map((week, index) => `<option value="${index + 1}">${index + 1}</option>`).join('');
  const root = document.getElementById('weeks-container');
  root.innerHTML = weeks.map((w, i) => {
    const n = i + 1;
    const vocab = vocabSets[w.vocab];
    return `<article class="week-card ${i === 0 ? 'open' : ''}" data-week="${i}">
      <button class="week-summary" type="button" aria-expanded="${i === 0 ? 'true' : 'false'}">
        <span class="week-num">W${String(n).padStart(2, '0')}</span>
        <span>
          <span class="week-title">${escapeHtml(w.theme)}</span>
          <span class="week-subtitle">${escapeHtml(w.subtitle)}</span>
        </span>
        <span class="week-chip">${escapeHtml(w.grammar)}</span>
        <span class="week-chevron">⌄</span>
      </button>
      <div class="week-details">
        <div class="week-overview">
          <div class="detail-box">
            <h4>Grammar Focus</h4>
            <p><b>${escapeHtml(w.grammar)}</b><br>${escapeHtml(w.grammarNote)}</p>
          </div>
          <div class="detail-box">
            <h4>Weekly Content</h4>
            <p>${escapeHtml(w.content)}</p>
          </div>
        </div>
        <div class="vocab-header">
          <h4>Essential Vocabulary</h4>
          <span class="vocab-count" data-vocab-count="${i}"></span>
        </div>
        <p class="vocab-guidance">This is a reference bank, not a list to memorize all at once. Choose up to 3 expressions to actively use today; recall earlier ones before looking.</p>
        <div class="vocab-list">
          ${vocab.map((term, j) => {
            const key = `${i}-${j}`;
            return `<button class="vocab-item ${state.vocab[key] ? 'learned' : ''}" type="button" data-vocab="${key}" aria-pressed="${!!state.vocab[key]}" title="View meaning and examples" aria-label="${escapeHtml(term)}${state.vocab[key] ? ' · learned' : ''}">${escapeHtml(term)}</button>`;
          }).join('')}
        </div>
        <div class="week-resources">
          <b>Recommended Materials & Tools</b>
          ${w.resources.map(r => `<a href="${r[1]}" target="_blank" rel="noreferrer">${escapeHtml(r[0])} ↗</a>`).join('')}
          <a href="https://www.youtube.com/@EasyPortugueseVideos" target="_blank" rel="noreferrer">Easy Portuguese Videos ↗</a>
        </div>
        <div class="days-heading">Daily Plan · 15 min per session</div>
        <div class="day-list">
          ${dayNames.map((day, d) => {
            const key = `${i}-${d}`;
            return `<div class="day-item">
              <div class="day-trigger">
                <input class="day-check" type="checkbox" data-day="${key}" aria-label="Mark ${day} of week ${n} as completed" ${state.days[key] ? 'checked' : ''}>
                <button type="button" class="day-trigger-main">
                  <span class="day-name">${day}</span>
                  <span class="day-focus">${escapeHtml(weeklyFormats[d].name)}</span>
                  <span class="day-time">15 min</span>
                  <span class="day-toggle">⌄</span>
                </button>
              </div>
              <div class="day-detail">${makeDayDescription(w, d)}</div>
            </div>`;
          }).join('')}
        </div>
      </div>
    </article>`;
  }).join('');

  root.querySelectorAll('.week-card').forEach((card, index) => {
    const video = renderWeeklyVideoCard(weeklyVideos[index], index);
    card.querySelector('.week-overview').insertAdjacentHTML('afterend', video);
  });

  root.querySelectorAll('.week-summary').forEach(btn => btn.addEventListener('click', () => {
    const card = btn.closest('.week-card');
    const open = !card.classList.contains('open');
    card.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
  }));

  root.querySelectorAll('[data-week-video]').forEach(btn => btn.addEventListener('click', () => openVideoDialog(weeklyVideos[Number(btn.dataset.weekVideo)])));
  root.querySelectorAll('[data-listening-week]').forEach(btn => btn.addEventListener('click', () => listeningPractice(weeks[Number(btn.dataset.listeningWeek)], Number(btn.dataset.listeningWeek))));
  root.querySelectorAll('.day-trigger-main').forEach(btn => btn.addEventListener('click', () => btn.closest('.day-item').classList.toggle('expanded')));
  root.querySelectorAll('.day-check').forEach(box => box.addEventListener('change', () => {
    state.days[box.dataset.day] = box.checked;
    saveState();
  }));
  root.querySelectorAll('.vocab-item').forEach(btn => btn.addEventListener('click', () => {
    const [weekIndex, termIndex] = btn.dataset.vocab.split('-').map(Number);
    openVocabCard(btn, vocabSets[weeks[weekIndex].vocab][termIndex], btn.dataset.vocab, weeks[weekIndex].vocab);
  }));
  updateProgress();
}

function updateProgress() {
  const completed = Object.values(state.days).filter(Boolean).length;
  const pct = Math.round(completed / (weeks.length * 7) * 100);
  document.getElementById('overall-percent').textContent = `${pct}%`;
  document.getElementById('overall-bar').style.width = `${pct}%`;
  document.getElementById('completed-count').textContent = `${completed} of ${weeks.length * 7} sessions`;
  document.querySelectorAll('.vocab-count').forEach(label => {
    const weekIndex = Number(label.dataset.vocabCount);
    const total = vocabSets[weeks[weekIndex].vocab].length;
    const learned = Array.from({length: total}, (_, i) => state.vocab[`${weekIndex}-${i}`]).filter(Boolean).length;
    label.textContent = `${learned}/${total} learned · click to view meaning and examples`;
  });
  let current = weeks.length;
  for (let w = 0; w < weeks.length; w++) {
    let weekDone = true;
    for (let d = 0; d < 7; d++) {
      if (!state.days[`${w}-${d}`]) weekDone = false;
    }
    if (!weekDone) {
      current = w + 1;
      break;
    }
  }
  document.getElementById('week-jump').value = String(current);
  document.querySelectorAll('.week-card').forEach((card, index) => card.classList.toggle('current-week', index + 1 === current));
}

let toastTimer;
function toast(message) {
  const el = document.getElementById('toast');
  el.textContent = message;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2600);
}

document.getElementById('export-button').addEventListener('click', () => {
  const blob = new Blob([JSON.stringify({app: 'portuguese-quest', version: 1, exportedAt: new Date().toISOString(), state}, null, 2)], {type: 'application/json'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'portuguese-quest-backup.json';
  a.click();
  URL.revokeObjectURL(a.href);
  toast('Backup downloaded. Keep the file in a safe place.');
});

document.getElementById('import-file').addEventListener('change', async e => {
  const file = e.target.files?.[0];
  if (!file) return;
  try {
    const data = JSON.parse(await file.text());
    const imported = data.state || data;
    if (!imported.days || !imported.vocab) throw new Error('invalid');
    state = {days: imported.days, vocab: imported.vocab, lookups: imported.lookups || {}, listening: imported.listening || {}};
    saveState();
    render();
    toast('Progress imported successfully in this browser.');
  } catch {
    toast('Invalid file. Please choose a valid Portuguese Quest backup.');
  }
  e.target.value = '';
});

document.getElementById('vocab-close').addEventListener('click', () => document.getElementById('vocab-dialog').close());
document.getElementById('listening-close').addEventListener('click', () => document.getElementById('listening-dialog').close());
document.getElementById('listening-save').addEventListener('click', () => {
  const week = Number(document.getElementById('listening-dialog').dataset.week);
  const confidence = document.querySelector('[name="listening-confidence"]:checked')?.value || '';
  const note = document.getElementById('listening-note').value.trim();
  state.listening ||= {};
  const attempts = Array.isArray(state.listening[week]) ? state.listening[week] : state.listening[week] ? [state.listening[week]] : [];
  attempts.push({confidence, note, updatedAt: new Date().toISOString()});
  state.listening[week] = attempts.slice(-12);
  saveState();
  document.getElementById('listening-dialog').close();
  toast(confidence ? 'Listening reflection saved.' : 'Note saved; remember to rate your confidence on your next listen.');
});

document.getElementById('listening-video-open').addEventListener('click', () => openVideoDialog(weeklyVideos[Number(document.getElementById('listening-dialog').dataset.week)]));
document.getElementById('week-jump').addEventListener('change', event => {
  const index = Number(event.target.value) - 1;
  const cards = document.querySelectorAll('.week-card');
  const target = cards[index];
  if (!target) return;
  document.querySelectorAll('.week-card.open').forEach(card => {
    card.classList.remove('open');
    card.querySelector('.week-summary').setAttribute('aria-expanded', 'false');
  });
  target.classList.add('open');
  target.querySelector('.week-summary').setAttribute('aria-expanded', 'true');
  target.scrollIntoView({behavior: 'smooth', block: 'start'});
});

document.getElementById('vocab-video-open').addEventListener('click', () => openVideoDialog(activeVocabVideo));
document.getElementById('video-close').addEventListener('click', () => document.getElementById('video-dialog').close());
document.getElementById('video-dialog').addEventListener('close', () => {
  document.getElementById('video-frame').src = 'about:blank';
});
document.getElementById('video-dialog').addEventListener('click', event => {
  if (event.target === event.currentTarget) event.currentTarget.close();
});

document.getElementById('vocab-complete').addEventListener('click', () => {
  if (!activeVocabKey) return;
  state.vocab[activeVocabKey] = !state.vocab[activeVocabKey];
  const button = document.querySelector(`.vocab-item[data-vocab="${activeVocabKey}"]`);
  if (button) {
    button.classList.toggle('learned', state.vocab[activeVocabKey]);
    button.setAttribute('aria-pressed', String(state.vocab[activeVocabKey]));
    button.setAttribute('aria-label', `${button.textContent.trim()}${state.vocab[activeVocabKey] ? ' · learned' : ''}`);
  }
  saveState();
  updateProgress();
  document.getElementById('vocab-complete').textContent = state.vocab[activeVocabKey] ? 'Learned ✓ · undo' : 'Mark as learned';
  document.getElementById('vocab-dialog').close();
});

document.getElementById('vocab-dialog').addEventListener('click', event => {
  if (event.target === event.currentTarget) event.currentTarget.close();
});

render();
