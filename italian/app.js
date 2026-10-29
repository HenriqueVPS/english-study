const dayNames = ['Segunda','Terça','Quarta','Quinta','Sexta','Sábado','Domingo'];
const weeklyFormats = [
  {name:'Escuta sem texto + com transcrição',resource:'Podcast Italiano (Livello A2) / Áudio A2',task:'Ouça uma vez sem legenda para captar a ideia principal. Na segunda escuta, acompanhe com a transcrição em italiano e anote até três expressões que bloquearam o sentido.',output:'Resuma o áudio em duas frases e salve duas expressões úteis.'},
  {name:'Vídeo de interesse + shadowing',resource:'Vídeo do Easy Italian ou Lucrezia pré-selecionado',task:'Assista a um trecho curto. Pause para explicar o que está acontecendo em voz alta; depois repita duas frases imitando ritmo, entonação e pronúncia.',output:'Grave 30–60 segundos explicando a situação ou repetindo as frases.'},
  {name:'Gramática em contexto',resource:'Frase modelo + WordReference / Grammatica Essenziale',task:'Observe a estrutura gramatical da semana dentro de um exemplo real. Crie três frases verdadeiras sobre sua vida ou sua rotina usando essa estrutura.',output:'Escreva três frases e reformule-as com ajuda da IA se necessário.'},
  {name:'Diálogo situacional + resposta espontânea',resource:'Easy Italian / Super Easy Italian ou áudio de diálogo',task:'Ouça um diálogo do cotidiano (bar, compras, orientações na rua). Pause antes da resposta do interlocutor e responda o que você diria na situação.',output:'Anote uma pergunta natural e responda sem ler texto pronto.'},
  {name:'Situações do dia a dia em voz alta',resource:'Vídeo ou áudio sobre rotina, conversa e dia a dia em italiano',task:'Ouça prestando atenção em perguntas, respostas naturais e expressões do cotidiano. Pause para narrar uma situação real ou recontar o diálogo com suas próprias palavras.',output:'Grave 45 segundos descrevendo uma situação ou hábito do seu dia a dia em italiano.'},
  {name:'Leitura, escrita e correção',resource:'Texto curto, postagem, receita ou diálogo do barril',task:'Leia pelo sentido geral, selecione uma ideia e escreva uma resposta ou parágrafo curto. Peça à IA para corrigir até dois padrões gramaticais sem descaracterizar sua mensagem.',output:'Guarde o original em italiano, a revisão e a regra observada.'},
  {name:'Revisão e consolidação semanal',resource:'Seus áudios, fichas de vocabulário e notas da semana',task:'Reouça o áudio da semana sem texto. Teste sua memória tentando recuperar frases em voz alta e selecione os conteúdos do barril da próxima semana.',output:'Registre sua autoavaliação e deixe o próximo vídeo pré-selecionado.'}
];

const vocabSets = {
  daily: [
    'svegliarsi','alzarsi','fare la doccia','lavarsi i denti','fare colazione','prendere un caffè','preparare il pranzo','uscire di casa','andare al lavoro','prendere l\'autobus','salire in macchina','arrivare in orario','iniziare il turno','fare una pausa','pranzare','fare due passi','sbrigare una commissione','tornare a casa','preparare la cena','cenare insieme','sparecchiare','lavare i piatti','fare il bucato','mettere in ordine','buttare la spazzatura','andare a letto','addormentarsi','giorno feriale','fine settimana','mattina','pomeriggio','sera','notte','orario','routine','abitudine','promemoria','sveglia','quartiere','fermata dell\'autobus','traffico','puntuale','in ritardo','in anticipo','di solito','spesso','raramente','a volte','prima di tutto','poi','in seguito','prima','mentre','fino a','perché','anche se','riuscire a','avere bisogno di','dovere','preferire','prepararsi','cercare','finire','passare del tempo','avere fretta','al momento','ogni due giorni','una volta alla settimana','con calma','fare un piano'
  ,'svegliarsi all\'alba','suonare la sveglia','rifare il letto','leggere le notizie','preparare lo zaino','chiudere la porta a chiave','scendere le scale','salire sul bus','viaggiare in treno','arrivare in ufficio','timbrare il cartellino','accendere il computer','controllare le email','fare una telefonata','fare due chiacchiere','pausa caffè con i colleghi','mangiare un panino','spegnere il computer','fare la spesa al rientro','rientrare a casa','riposarsi sul divano','apparecchiare la tavola','cenare in tranquillità','lavare le pentole','passare l\'aspirapolvere','guardare una serie','leggere qualche pagina','mettersi il pigiama','prendere sonno','giorno lavorativo','weekend di riposo','di buon mattino','a tarda notte','ogni tanto','per la prima volta','un passo alla volta','darsi una mossa'],
  routine: [
    'svegliarsi','alzarsi','lavarsi','farsi la doccia','asciugarsi i capelli','pettinarsi','farsi la barba','truccarsi','vestirsi','mettersi la giacca','mettersi le scarpe','togliersi le scarpe','prepararsi','sbrigarsi','ricordarsi di','dimenticarsi di','rilassarsi','riposarsi','fermarsi','sedersi','addormentarsi','sentirsi bene','sentirsi stanco','annoiarsi','divertirsi','prendersi cura di','salutarsi','incontrarsi','darsi da fare','farsi un caffè','lavarsi le mani','specchio','pettine','spazzolino da denti','dentifricio','sapone','asciugamano','shampoo','vestiti puliti','pigiama','pantofole','orologio','in fretta','con calma','ogni mattina','prima di dormire','dopo mangiato','subito','presto','tardi','sempre','quasi mai','mai'
  ,'svegliarsi presto','alzarsi subito','lavarsi la faccia','farsi lo shampoo','mettersi la crema','pettinarsi davanti allo specchio','vestirsi di fretta','mettersi i pantaloni','infilarsi la giacca','allacciarsi le scarpe','guardarsi allo specchio','ricordarsi di prendere le chiavi','dimenticarsi l\'ombrello','affrettarsi','sedersi a tavola','sentirsi in gran forma','sentirsi affaticato','riposarsi dieci minuti','rilassarsi ascoltando musica','sdraiarsi a letto','prendersi una pausa','incontrarsi con gli amici','salutarsi con un abbraccio','prendersi cura della casa','farsi una tazza di tè','filo interdentale','dentifricio alla menta','sapone profumato','accappatoio morbido','vestiti comodi','pigiama caldo','pantofole invernali','dopo essersi lavati','subito dopo pranzo','a tarda sera'],
  home: [
    'appartamento','casa','condominio','coinquilino','proprietario','affittuario','affitto','contratto','caparra','bolletta della luce','bolletta del gas','bolletta dell\'acqua','connessione internet','mobili','libreria','scrivania','sedia','cassetto','mensola','armadio','soffitto','pavimento','parete','finestra','tenda','lampada','presa elettrica','prolunga','chiave','serratura','citofono','cucina','bagno','lavanderia','soggiorno','camera da letto','ripostiglio','balcone','terrazza','traslocare','sistemare','montare','riparare','sostituire','aggiustare','rotto','comodo','spazioso','luminoso','arredato','non arredato','condiviso','pulizie','aspirapolvere','lavatrice','lavastoviglie','forno','fornelli','frigorifero','congelatore','microonde','lavandino','rubinetto','lenzuola','cuscino','pulire','mettere a posto','buttare via'
  ,'appartamento in centro','casa indipendente','condominio tranquillo','padrone di casa','spese di riscaldamento','connessione internet veloce','arredo moderno','sedia ergonomica','cassettiera','armadio a quattro ante','letto matrimoniale','materasso comodo','comodino con lampada','soffitto alto','pavimento in parquet','parete tinteggiata','grande finestra','persiane chiuse','tenda chiara','lampadario luminoso','presa di corrente','mazzo di chiavi','serratura blindata','campanello di casa','citofono al portone','cucina attrezzata','fornelli a induzione','forno ventilato','frigorifero capiente','congelatore a cassetti','lavandino in acciaio','rubinetto miscelatore','box doccia in vetro','stendibiancheria pieghevole','ferro da stiro','divano a tre posti','tavolo da pranzo','balcone fiorito','terrazzo panoramico','trasloco imminente','montare una mensola','dipingere una parete','perdere acqua dal tubo','stanza luminosa','fare le pulizie di primavera','straccio per i pavimenti','lenzuola di cotone','coperta pesante'],
  food: [
    'il bar','il bancone','al banco','al tavolo','il barista','il cameriere','il tavolo','il menù','l\'ordinazione','il coperto','il conto','lo scontrino','la mancia','il caffè espresso','il caffè macchiato','il cappuccino','il cornetto','la brioche','la colazione','il pranzo','la cena','l\'antipasto','il primo piatto','il secondo piatto','il contorno','il dolce','il tiramisù','l\'acqua naturale','l\'acqua frizzante','il vino della casa','la birra','un bicchiere','una bottiglia','il piatto','la forchetta','il coltello','il cucchiaio','il tovagliolo','saporito','squisito','salato','dolce','amaro','piccante','fresco','caldo','freddo','fatto in casa','porzione','vegetariano','vegano','senza glutine','avere fame','avere sete','essere sazio','consigliare','ordinare','prenotare un tavolo','da asporto','quanto costa?','posso pagare con la carta?','ci porta il conto per favore?'
  ,'il bar sotto casa','il bancone del bar','consumare al banco','il menù del giorno','la carta dei dolci','chiedere il conto','lasciare la mancia','un caffè espresso ristretto','un caffè lungo','un cappuccino schiumoso','un cornetto al cioccolato','la spremuta d\'arancia fresca','il pranzo di lavoro','una cena speciale','un piatto di pasta al dente','gli spaghetti al pomodoro fresco','il risotto ai funghi porcini','una bistecca ai ferri','il filetto di pesce fresco','le verdure grigliate','le patate al forno croccanti','l\'insalata mista con pomodori','una fetta di crostata','l\'acqua minerale naturale','l\'acqua frizzante ghiacciata','una caraffa di vino della casa','una birra fresca alla spina','la forchetta e il coltello','il cucchiaio e il cucchiaino','il tovagliolo di stoffa','il cestino del pane casereccio','un filo d\'olio extravergine','una spolverata di parmigiano','saporito e gustoso','una vera squisitezza','piatto caldo fumante','pasta fatta in casa','porzione abbondante','menù vegano','pietanze senza glutine','intolleranza alimentare','avere una fame da lupi','avere molta sete','cosa ci consiglia il cameriere?','vorrei ordinare un primo piatto','possiamo avere un altro po\' di pane?','cibo da asporto da portare a casa','posso pagare con la carta contactless?'],
  past_avere: [
    'ieri','ieri mattina','ieri sera','l\'altro ieri','lo scorso fine settimana','la settimana scorsa','un mese fa','poco fa','già','non ancora','ho fatto','ho visto','ho mangiato','ho bevuto','ho lavorato','ho studiato','ho comprato','ho letto','ho scritto','ho ascoltato','ho capito','ho aperto','ho chiuso','ho perso','ho trovato','ho cercato','ho chiesto','ho risposto','ho cucinato','ho pulito','ho dormito','ho giocato','ho provato','ho conosciuto','ho avuto tempo','ho avuto problemi','ho finito il lavoro','ho mandato un messaggio','ho registrato un audio','che cosa hai fatto?','hai già mangiato?','non ho capito bene','abbiamo parlato a lungo','ho pagato il conto','ho ordinato online','ho preso un appuntamento','ho fatto tardi','ho passato una bella giornata'
  ,'ieri mattina presto','ieri pomeriggio verso le quattro','ieri sera dopocena','l\'altro ieri sera','lo scorso fine settimana di riposo','la settimana passata','circa un mese fa','tre giorni fa','proprio poco fa','già fatto tutto','non ancora terminato','ho lavorato duramente tutto il giorno','ho studiato la grammatica italiana','ho mangiato una pizza margherita deliziosa','ho bevuto un buon bicchiere di vino','ho visto un video divertente su YouTube','ho fatto una bella camminata nel parco','ho comprato il pane fresco dal fornaio','ho letto un capitolo interessante del libro','ho scritto un messaggio lungo a un amico','ho ascoltato una puntata del podcast','ho capito perfettamente la spiegazione','ho aperto la finestra per cambiare aria','ho chiuso la porta a chiave prima di uscire','ho perso le chiavi di casa per strada','ho trovato la soluzione al problema','ho cercato le informazioni sul web','ho chiesto aiuto al collega','ho risposto alla mail di lavoro','ho cucinato per tutta la famiglia','ho pulito e ordinato la mia stanza','ho dormito profondamente otto ore','ho letto un bel libro per un\'ora','ho provato una nuova ricetta tradizionale','ho conosciuto una persona molto interessante','ho avuto una giornata piena di impegni','ho avuto una brillante idea per il projeto','ho finito il lavoro in anticipo','che cosa hai fatto di bello ieri?','hai già mangiato qualcosa?','abbiamo parlato a lungo del nostro futuro','ho pagato il conto con il bancomat','ho preso un appuntamento dal dentista','ho fatto tardi per via del traffico','ho trascorso una splendida giornata'],
  past_essere: [
    'andare','venire','uscire','entrare','partire','arrivare','tornare','ritornare','salire','scendere','restare','rimanere','stare','essere','nascere','diventare','sembrare','succedere','accadere','piacere','sono andato','sono andata','siamo andati','siamo andate','è arrivato','è arrivata','sono partito','sono partita','sono uscito','è uscita','sono tornato a casa','mi sono svegliato presto','ci siamo visti','ci siamo divertiti','è successo qualcosa','che cosa è successo?','dove sei andato?','quando sei arrivato?','siamo rimasti a casa','è stato bello','mi è piaciuto','non mi è piaciuto','sono salito sul treno','è sceso alla fermata','siamo diventati amici'
  ,'andare a piedi in centro','venire a trovarmi a casa','uscire la sera con gli amici','entrare nel negozio di abbigliamento','partire con il primo treno della mattina','arrivare puntuale all\'appuntamento','tornare a casa stanco dal lavoro','ritornare dal lungo viaggio','salire al secondo piano senza ascensore','scendere alla fermata successiva','restare a casa a riposare','rimanere fermo al semaforo rosso','stare tutto il giorno tranquillo','essere presente alla riunione','nascere in una piccola città di mare','diventare un bravo programmatore','sembrare una persona simpatica','succedere all\'improvviso senza preavviso','accadere qualcosa di inaspettato','piacere moltissimo il viaggio','sono andato a comprare il giornale','sono andata a trovare mia nonna','siamo andati tutti insieme al cinema','sono arrivato in perfetto orario','è arrivata la pizza che abbiamo ordinato','sono partito presto per non trovare traffico','siamo partiti con lo zaino in spalla','sono uscito di casa alle otto esatte','è uscita con le sue amiche','sono tornato a casa tardi stanotte','siamo tornati dalle vacanze estive','mi sono svegliato prima della sveglia','si è svegliata di ottimo umore','ci siamo visti nella piazza principale','ci siamo divertiti tantissimo alla festa','che cosa è successo esattamente?','dove sei andato ieri pomeriggio?','quando sei arrivato in città?','siamo rimasti a casa per via della pioggia','è stato davvero un bel momento','mi è piaciuto molto questo posto','non mi è piaciuto affatto il finale','sono salito sulla carrozza del treno','è sceso di corsa dall\'autobus','la lezione di italiano è finita','siamo diventati grandi amici con il tempo'],
  directions: [
    'girare a sinistra','girare a destra','andare dritto','attraversare la strada','attraversare sulle strisce','all\'angolo','il semaforo','l\'incrocio','la rotonda','le strisce pedonali','il marciapiede','il pedone','l\'isolato','la via','il corso','il viale','la piazza','il centro storico','il monumento','la chiesa','l\'ingresso','l\'uscita','la stazione ferroviaria','la fermata dell\'autobus','la metropolitana','la linea','il binario','il biglietto','convalidare il biglietto','salire sull\'autobus','scendere alla fermata','perdere il treno','prendere la coincidenza','il traffico','vicino','lontano','di fronte a','accanto a','tra','dietro','davanti','scusi per andare a...?','dov\'è la farmacia più vicina?','è lontano da qui?','ci si arriva a piedi?','prenda la prima a destra','vada sempre dritto','è a cinque minuti a piedi'
  ,'girare a sinistra all\'incrocio','girare a destra subito dopo la chiesa','andare sempre dritto lungo il corso','attraversare la strada con attenzione','attraversare sulle strisce pedonali','all\'angolo tra via Roma e via Milano','fermarsi al semaforo pedonale','fare attenzione all\'incrocio pericoloso','prendere la seconda uscita alla rotonda','le strisce pedonali ben visibili','camminare sul marciapiede largo','dare la precedenza ai pedoni','fare il giro dell\'isolato','percorrere la via principale del quartiere','passeggiare lungo il viale alberato','il corso pedonale pieno di negozi','la piazza centrale della città antica','il centro storico ricco di monumenti','ammirare il monumento storico','visitare la chiesa barocca','la grande cattedrale gotica','l\'ingresso principale dell\'edificio','l\'uscita di emergenza sul retro','raggiungere la stazione ferroviaria a piedi','aspettare alla fermata dell\'autobus','prendere la linea della metropolitana','la linea verde verso la periferia','dirigersi verso il binario di partenza','acquistare il biglietto alla macchinetta','ricordarsi di convalidare il biglietto','salire sull\'autobus prima che parta','scendere alla prossima fermata utile','perdere il treno per pochi secondi','prendere la coincidenza senza fretta','rimanere bloccati nel traffico cittadino','abbastanza vicino da andarci a piedi','troppo lontano da raggiungere camminando','proprio di fronte alla banca','esattamente accanto alla farmacia','situato tra l\'ufficio postale e il bar','nascosto dietro il grande palazzo antico','situato davanti al palazzo del comune','mi scusi per andare al duomo?','dove si trova la farmacia di turno più vicina?','quanto è distante da qui?','si può arrivare comodamente a piedi?','prenda la prima strada a destra','prosegua sempre dritto per trecento metri','si trova proprio di fronte a lei','è a soli cinque minuti di cammino'],
  shopping: [
    'il mercato rionale','il supermercato','la bottega','il panificio','la macelleria','la pescheria','la farmacia','il carrello','il cestino','la cassa','il cassiere','lo scontrino','il prezzo','lo sconto','in offerta','il chilo','mezzo chilo','l\'etto','due etti','un litro','una fetta','un pacco','fresco','maturo','biologico','confezionato','quanto costa al chilo?','quanto viene in tutto?','vorrei due etti di prosciutto','ne prendo mezzo chilo','posso assaggiare?','me lo incarta per favore?','serve una busta?','il sacchetto','paga in contanti o con carta?','ecco a lei','il resto','basta così grazie','lo compro','la prendo','li metto nella borsa','le compro tutte'
  ,'il mercato rionale del sabato mattina','la bancarella della frutta fresca','il supermercato di fiducia del quartiere','la piccola bottega alimentare sotto casa','il panificio con il pane appena sfornato','la macelleria tradizionale del paese','la pescheria con il pesce fresco di giornata','la farmacia di turno aperta la domenica','spingere il carrello della spesa tra le corsie','prendere il cestino di plastica all\'entrata','passare dalla cassa automatica veloce','salutare il cassiere gentile e disponibile','fare la fila ordinata alla cassa','controllare lo scontrino fiscale dopo l\'acquisto','verificare il prezzo al chilo del prodotto','approfittare dello sconto speciale del venti percento','scegliere gli articoli in offerta promozionale','comprare un chilo di mele rosse','prendere mezzo chilo di pane casereccio','ordinare due etti di prosciutto crudo di Parma','chiedere un etto di formaggio stagionato','acquistare un litro di latte fresco intero','una confezione di pasta di grano duro','comprare una dozzina di uova fresche','scegliere frutta fresca di stagione saporita','comprare verdura matura per il minestrone','sentire il profumo del pane appena sfornato','preferire prodotti biologici a chilometro zero','quanto costa al chilo questa qualità?','quanto viene in tutto il totale della spesa?','vorrei due etti di parmigiano reggiano','ne prendo mezzo chilo molto volentieri','ne vorrei un po\' di più se possibile','posso assaggiare un piccolo pezzetto prima di comprare?','mi fa due fette sottili sottili?','me lo incarta con cura per favore?','desidera una busta per la spesa?','il sacchetto di carta resistente','preferisce pagare in contanti o con carta di credito?','ecco a lei il pagamento','può tenere pure il resto','basta così per oggi grazie mille','lo compro subito perché mi serve','la prendo volentieri perché è fresca','li metto dentro la borsa della spesa','le porto a casa per preparare la cena'],
  travel: [
    'il viaggio','il viaggiatore','la valigia','lo zaino','il documento','il passaporto','il biglietto del treno','il biglietto di sola andata','il biglietto di andata e ritorno','prenotare un posto','la stazione ferroviaria','il tabellone','il binario','il treno regionale','il Frecciarossa','l\'Italo','la coincidenza','il ritardo','la cancellazione','la partenza','l\'arrivo','l\'orario','il controllore','obliterare il biglietto','salire in carrozza','il posto a sedere','la prima classe','la seconda classe','l\'albergo','la reception','la camera singola','la camera matrimoniale','la colazione inclusa','il check-in','il check-out','la chiave della camera','a che ora parte il treno?','su quale binario arriva?','abbiamo una coincidenza a Bologna','c\'è il wifi in camera?','buon viaggio'
  ,'fare un viaggio entusiasmante in Italia','partire per le meritate vacanze estive','preparare con cura la valigia capiente','portare con sé uno zaino da viaggio leggero','controllare il documento d\'identità valido','portare il passaporto in corso di validità','acquistare il biglietto del treno in anticipo','comprare un biglietto di sola andata per Milano','prenotare un biglietto di andata e ritorno','scegliere e prenotare il posto a sedere comodo','arrivare in tempo alla stazione ferroviaria','consultare il tabellone elettronico degli arrivi','guardare con attenzione il tabellone delle partenze','dirigersi con calma verso il binario assegnato','salire sul treno regionale veloce','viaggiare a trecento all\'ora sul Frecciarossa','prenotare un posto sul treno alta velocità Italo','non perdere la coincidenza alla stazione di Bologna','essere informati su un eventuale treno in ritardo','dispiacersi per la cancellazione improvvisa del treno','ascoltare l\'annuncio sonoro diffuso in stazione','mostrare il biglietto al capotreno controllore','timbrare e obliterare il biglietto prima di salire a bordo','salire in carrozza con la propria valigia','trovare facilmente il proprio posto a sedere numerato','rilassarsi nella carrozza di prima classe silenziosa','viaggiare comodamente in seconda classe','confermare la prenotazione dell\'albergo prenotato online','presentarsi alla reception dell\'hotel per il check-in','chiedere informazioni utili al receptionist di turno','alloggiare in una camera singola economica e pulita','condividere una camera matrimoniale spaziosa','godersi la colazione a buffet inclusa nel prezzo','effettuare le operazioni di check-in alle due del pomeriggio','completare il check-out entro le undici del mattino','farsi consegnare la chiave magnetica della camera','a che ora esatta parte il prossimo treno per Roma Termini?','da quale binario specifico parte il treno alta velocità?','c\'è l\'impianto di aria condizionata funzionante in camera?','avete una connessione internet wi-fi gratuita per i clienti?','vorrei cortesemente lasciare le valigie in deposito per qualche ora','augurare a tutti un buon viaggio e una serena permanenza'],
  health: [
    'sentirsi in forma','sentirsi poco bene','avere il raffreddore','avere la tosse','avere il mal di gola','avere il mal di testa','avere il mal di stomaco','avere il mal di schiena','avere il mal di denti','avere la febbre','l\'influenza','il sintomo','il dolore','la ferita','il gonfiore','la farmacia','il farmacista','la medicina','il farmaco','lo sciroppo','le compresse','l\'aspirina','la ricetta medica','il medico','l\'ambulatorio','il pronto soccorso','la visita medica','guarire','riprendersi','riposare a letto','prendere una medicina','spiegare come ti senti','respirare profondamente','tossire','starnutire','avere le vertigini','stanco','esausto','rilassato','a stomaco pieno','a stomaco vuoto','due volte al giorno','ogni otto ore','che cosa ti fa male?','da quanti giorni hai la febbre?','mi sento debole','guarisci presto'
  ,'sentirsi in perfetta forma fisica e mentale','sentirsi un po\' giù di corda e stanco','svegliarsi sentendosi poco bene','avere un forte raffreddore con il naso che cola','avere la tosse secca e insistente','avere un fastidioso mal di gola quando si deglutisce','avere un mal di testa lancinante fin dal mattino','avvertire un forte mal di stomaco dopo mangiato','soffrire di mal di schiena per la cattiva postura','avere un doloroso mal di denti improvviso','misurare la febbre alta con il termometro','avere i brividi di freddo e la pelle d\'oca','contrarre la classica influenza stagionale','avvertire un sintomo strano da comunicare al medico','descrivere con precisione un dolore acuto o sordo','disinfettare una piccola ferita superficiale al dito','notare un livido scuro sul braccio dopo una caduta','avere la caviglia gonfia e dolorante dopo una distorsione','recarsi nella farmacia più vicina per un consiglio','parlare apertamente con il farmacista di turno','farsi consigliare e prendere un medicinale adatto','assumere un antidolorifico efficace per calmare il dolore','comprare uno sciroppo per la tosse grassa o secca','farsi prescrivere una scatola di compresse da deglutire','sciogliere una pastiglia effervescente in un bicchiere d\'acqua','presentare la ricetta medica firmata dal dottore','prenotare una visita dal proprio medico di famiglia','attendere il proprio turno nell\'ambulatorio medico','recarsi al pronto soccorso ospedaliero in caso di emergenza','sottoporsi a una visita medica di controllo generale','seguire le cure per guarire in fretta e rimettersi in piedi','riprendersi completamente dopo qualche giorno di riposo','riposare al caldo a letto senza fare sforzi','bere molta acqua naturale per rimanere ben idratati','spiegare con parole semplici e chiare come ci si sente','respirare profondamente durante l\'auscultazione dei polmoni','tossire coprendosi la bocca con il gomito','starnutire più volte di seguito a causa dell\'allergia','avere improvvise vertigini alzandosi in piedi troppo in fretta','sentirsi fisicamente stanco ed esausto a fine giornata','essere molto stressato per il troppo lavoro e il poco sonno','assumere la compressa a stomaco pieno subito dopo i pasti','prendere una medicina a stomaco vuoto prima di fare colazione','assumere la dose indicata due volte al giorno ogni dodici ore','ripetere la somministrazione ogni otto ore secondo la prescrizione','che cosa ti fa male esattamente in questo momento?','da quanti giorni precisi hai la temperatura corporea alta?','mi sento davvero molto debole e senza energie per alzarmi','spero di cuore che tu guarisca il prima possibile'],
  tempo_libero: ['il tempo libero','il fine settimana','uscire con gli amici','ascoltare musica','leggere un libro','leggere il giornale','guardare la tv','guardare una serie','andare al cinema','andare a teatro','andare al museo','fare una passeggiata','fare sport','andare in palestra','fare jogging','andare in bicicletta','fare una gita fuori porta','visitare una mostra','stare all\'aria aperta','fare giardinaggio','cucinare per gli amici','fare l\'aperitivo','prendere un gelato','mangiare una pizza','scambiare due chiacchiere','fare conversazione','ridere e scherzare','riposarsi sul divano','ascoltare un podcast','imparare una lingua','suonare uno strumento','dipingere','disegnare','scrivere un diario','fare una foto','viaggiare nel weekend','staccare la spina','godersi la giornata','avere del tempo libero','passare il tempo','trovare il tempo','organizzare una serata','invitare gli amici a cena','incontrarsi in piazza','fare una camminata','respirare aria fresca','il parco cittadino','il silenzio della natura','il relax totale','una bella giornata di sole','un pomeriggio tranquillo','la serata tra amici','un hobby interessante','la passione per l\'arte','la passione per la musica','il passatempo preferito','divertirsi in compagnia','prima di tutto','all\'inizio della giornata','nel pomeriggio','verso sera','nel frattempo','dopodiché','alla fine','per fortuna','purtroppo','come al solito','senza dubbio','a quanto pare','vale la pena','dare un\'occhiata','fare attenzione a','prendersi cura di sé','dedicare tempo a','fare programmi per il sabato','trascorrere una domenica tranquilla','sentirsi rigenerati','fare due passi in centro','fermarsi a parlare','vivere con calma','condividere bei momenti','scoprire posti nuovi','apprezzare le piccole cose','stare in buona compagnia','prendersi un momento di pausa'],
  opinions: [
    'secondo me','a mio parere','dal mio punto di vista','penso che','credo che','sono d\'accordo','non sono d\'accordo','hai ragione','hai torto','dipende dalla situazione','è vero','non è vero','per esempio','d\'altra parte','invece','tuttavia','preferisco','mi piace molto','non mi piace per niente','mi piacciono i videogiochi','mi interessa','mi sembra utile','è facile','è difficile','è complicato','è divertente','noioso','importante','inutile','conveniente','che cosa ne pensi?','tu cosa faresti?','non sono convinto','è una buona idea','sono della stessa opinione','preferirei fare un\'altra cosa','alla fine dei conti'
  ,'secondo me questa è la soluzione più intelligente ed efficace','a mio parere dovremmo valutare con maggiore attenzione i pro e i contro','dal mio punto di vista la situazione è più semplice di quanto sembri','penso fermamente che sia una buonissima idea da mettere in pratica','credo davvero che sia fondamentale dedicare tempo allo studio quotidiano','sono completamente d\'accordo con l\'opinione che hai appena espresso','non sono per niente d\'accordo con questa conclusione affrettata','hai perfettamente ragione su tutti gli aspetti della questione','hai torto su questo punto specifico e ti spiego il motivo','tutto dipende strettamente dalla situazione e dal contesto in cui ci troviamo','è assolutamente vero e ci sono prove concrete a dimostrarlo','non è affatto così come viene descritto dalle voci di corridoio','fare un esempio pratico per rendere il concetto più chiaro a tutti','d\'altra parte bisogna considerare anche le possibili conseguenze negative','al contrario ritengo che questa sia un\'ottima opportunità da cogliere','tuttavia ci sono ancora alcuni problemi tecnici da risolvere prima','preferisco di gran lunga fare le cose con calma e precisione','mi piace moltissimo questo approccio metodico e ben organizzato','non mi piace per niente perdere tempo prezioso in discussioni inutili','mi piacciono le sfide complesse che mi spingono a migliorare ogni giorno','mi interessa molto approfondire questo argomento durante la lezione','mi sembra una soluzione valida e conveniente per entrambe le parti','è un concetto molto facile da capire anche per chi inizia adesso','è un compito abbastanza difficile che richiede concentrazione e pazienza','è un procedimento troppo complicato da gestire da soli senza aiuto','è stata un\'esperienza davvero divertente ed entusiasmante per tutti noi','ascoltare un discorso noioso e ripetitivo che non porta a nulla di nuovo','considerare questo dettaglio come un fattore assolutamente fondamentale','ritenere superfluo e inutile uno strumento che complica il lavoro','fare una scelta conveniente dal punto di vista del tempo e delle energie','che cosa ne pensi sinceramente di questo nuovo progetto di studio?','tu cosa faresti esattamente se ti trovassi al mio posto in questo momento?','ammetto con franchezza che non sono ancora convinto al cento per cento','condivido in pieno la tua opinione e appoggio la tua proposta finale','preferirei parlarne con calma a quattr\'occhi domani mattina in ufficio','tirando le somme alla fine possiamo ritenerci pienamente soddisfatti dei risultati'],
  plans: [
    'il futuro','il progetto','l\'obiettivo','il traguardo','la decisione','l\'impegno','il programma','il calendario','la scadenza','a lungo termine','a breve termine','domani','dopodomani','la prossima settimana','il prossimo mese','l\'anno prossimo','fra tre giorni','tra poco','da ora in poi','avere intenzione di','avere in programma di','decidere di','pianificare','continuare a studiare','fare progressi','migliorare la pronuncia','parlare con sicurezza','fare una conversazione','fare un viaggio in Italia','farò del mio meglio','andrò a Roma','visiterò una nuova città','studierò ogni giorno per 15 minuti','poco a poco','passo dopo passo','raggiungere il livello B1','non mollare','sono pronto'
  ,'il futuro prossimo ricco di nuove opportunità e traguardi da raggiungere','un progetto ambizioso a cui dedicare tempo ed energie costanti','avere un obiettivo chiaro e ben definito fin dall\'inizio del percorso','raggiungere con successo un traguardo importante come il livello B1','prendere una decisione importante sul proprio percorso di crescita personale','assumersi un impegno quotidiano di quindici minuti di studio attivo','organizzare con metodo il programma di studio per le prossime tredici settimane','guardare il calendario per pianificare le sessioni di ripasso settimanali','rispettare con precisione la scadenza prefissata per il completamento del ciclo','stabilire una serie di obiettivi realistici a lungo termine da raggiungere nel tempo','concentrarsi su piccoli traguardi a breve termine per mantenere alta la motivazione','domani mattina dedicherò la prima ora allo studio del listening senza sottotitoli','dopodomani pomeriggio farò pratica di conversazione ripetendo frasi a voce alta','la prossima settimana inizierò ad ascoltare regolarmente interviste di strada in lingua originale','il prossimo mese farò una verifica approfondita di tutte le strutture grammaticali affrontate','l\'anno prossimo sarò in grado di comprendere e sostenere una conversazione naturale con madrelingua','fra qualche giorno registrerò un audio di un minuto per valutare la mia fluidità','tra poche ore concluderò la sessione odierna e mi godrò un po\' di meritato riposo','da ora in poi studierò con costanza senza saltare nemmeno un singolo giorno','avere ferma intenzione di imparare a comunicare con sicurezza in lingua italiana','avere in programma di partire per un viaggio itinerante tra le città d\'arte italiane','decidere con determinazione di mettersi alla prova con materiali autentici complessi','pianificare con cura tutte le prossime tappe per consolidare le competenze acquisite','continuare a studiare ogni singolo giorno anche nei momenti in cui la motivazione cala','fare progressi costanti e visibili settimana dopo settimana senza avere fretta','migliorare sensibilmente la comprensione orale dei dialoghi a velocità naturale','parlare con maggiore sicurezza senza aver paura di commettere piccoli errori di grammatica','sostenere una conversazione naturale su argomenti di interesse personale e professionale','organizzare nei minimi dettagli un meraviglioso viaggio in Italia tra cultura e cibo tipico','farò del mio meglio per riuscire a raggiungere ogni singolo traguardo prefissato nel piano','andrò a visitare i luoghi più belli di Firenze, Venezia, Roma e della splendida costa italiana','dedicherò con piacere quindici minuti al giorno alla pratica dell\'ascolto e della ripetizione','poco a poco con tanta pazienza e dedizione vedrò i frutti di tutto il lavoro svolto','un passo alla volta con calma e determinazione supererò ogni ostacolo linguistico','raggiungere il solido livello B1 entro la fine dell\'anno per essere pienamente autonomo','non mollare mai davanti alle prime difficoltà o alle strutture che sembrano difficili','sentirsi finalmente pronto per affrontare con entusiasmo la prossima grande sfida comunicativa']
};

const weeks = [
  {theme:'Un giorno tipico: la routine',subtitle:'Costruisci frasi e verbi essenziali per narrare la tua giornata reale.',grammar:'Presente indicativo: verbi regolari (-are, -ere, -ire) e ausiliari (essere, avere, fare)',grammarNote:'Usa il presente per descrivere abitudini e orari: “Di solito mi alzo alle sette e faccio colazione.”',vocab:'daily',content:'Easy Italian / Super Easy Italian: colazione e routine; descrivi la tua giornata tipo e ascolta un breve dialogo sulle abitudini.',resources:[['Easy Italian — YouTube','https://www.youtube.com/@EasyItalian'],['WordReference IT-PT','https://www.wordreference.com/itpt/']],activities:['Ascolta un audio A2 sulla routine. Senza testo, individua le parti della giornata e l\'idea generale.','Narra una routine familiare in italiano. Fai shadowing di due frasi con orari e frequenza.','Confronta “di solito faccio…” con “adesso sto facendo…”. Scrivi tre frasi sulle tue abitudini di oggi.','Riascolta; fai pausa dopo una domanda del video e rispondi prima dell\'intervistato.','Spiega in 45 secondi come inizia la tua mattina. Registrati una volta cercando di collegare le frasi.','Scrivi un breve messaggio a un amico descrivendo la tua giornata. Chiedi all\'IA di correggere la grammatica.','Riascolta l\'audio del lunedì senza testo. Scegli il materiale della prossima settimana e salvalo.']},
  {theme:'Azioni quotidiane e verbi riflessivi',subtitle:'Descrivi abitudini, preparativi e cura personale con i riflessivi.',grammar:'I verbi riflessivi al presente (mi sveglio, ti vesti, si lava, ci prepariamo)',grammarNote:'I verbi riflessivi indicano azioni rivolte a se stessi: “Mi sveglio, mi lavo i denti e mi vesto prima di uscire.”',vocab:'routine',content:'Easy Italian: abitudini serali e routine personale; dialoghi sul relax a casa e sulla cura quotidiana.',resources:[['Learn Italian with Lucrezia','https://www.youtube.com/@LearnItalianwithLucrezia'],['YouGlish Italiano','https://youglish.com/italian']],activities:['Ascolta una conversazione sulle abitudini serali. Scopri cosa fa la persona per rilassarsi.','Guarda il video; fai pausa e descrivi tre azioni che fai prima di andare a dormire.','Esercitati con i verbi riflessivi: mi sveglio, mi lavo, mi preparo. Registra una breve descrizione.','Riascolta il brano e rispondi: “A che ora ti alzi di solito e come ti prepari per il lavoro?”','Spiega passo dopo passo la tua routine mattutina usando prima, poi e infine. Ripeti in shadowing.','Scrivi tre frasi con i verbi riflessivi alla prima e alla terza persona (io mi rilasso / lui si rilassa).','Ripassa cinque espressioni della settimana e riascolta il video senza sottotitoli.']},
  {theme:'La casa e gli spazi',subtitle:'Descrivi la tua casa, le stanze e dove si trovano gli oggetti.',grammar:'C’è / Ci sono + preposizioni articolate di luogo (sul, nella, sopra, vicino a)',grammarNote:'Usa “C’è un tavolo” (singolare) e “Ci sono due finestre” (plurale); specifica dove: “sul tavolo”, “nella camera”.',vocab:'home',content:'Easy Italian: cosa c\'è in casa e in cucina; descrivi gli ambienti e la disposizione dei mobili.',resources:[['Easy Italian — YouTube','https://www.youtube.com/@EasyItalian'],['WordReference IT-PT','https://www.wordreference.com/itpt/']],activities:['Ascolta una conversazione sulla casa. Scopri dove abita la persona e come sono organizzati gli spazi.','Guarda il video del frigo/cucina. Fai pausa e descrivi tre oggetti che hai nella tua stanza.','Pratica c\'è/ci sono descrivendo la tua postazione di lavoro o studio. Registra un audio breve.','Riascolta un passaggio e rispondi in italiano: “Cosa cambieresti della tua casa attuale?”','Spiega come sistemare o pulire una stanza passo a passo. Ripeti le istruzioni con buona intonazione.','Scrivi un messaggio a un coinquilino o proprietario descrivendo un piccolo problema domestico.','Ripassa i vocaboli della casa e ascolta di nuovo il video senza guardare il testo.']},
  {theme:'Al bar e al ristorante',subtitle:'Ordina cibo, chiedi il conto ed esprimi gusti con cortesia.',grammar:'Condizionale di cortesia (Vorrei / Potrei avere) + articoli partitivi (del, della, dei)',grammarNote:'Esprimi richieste educate: “Vorrei un caffè macchiato e una brioche, per favore. Posso avere il conto?”',vocab:'food',content:'Easy Italian: ordinare al bar e cibo preferito degli italiani; sapori, pietanze e buone maniere.',resources:[['Podcast Italiano','https://podcastitaliano.com/'],['WordReference IT-PT','https://www.wordreference.com/itpt/']],activities:['Ascolta un dialogo al bar. Alla prima passata, individua cosa viene ordinato e quanto costa.','Segui un video sulla cucina italiana. Ripeti ad alta voce tre espressioni usate per ordinare.','Crea domande con “Vorrei…” e “Posso avere…?” per ordinare una colazione o un pranzo.','Fai un roleplay da solo: ordina un caffè e una brioche al banco, poi chiedi lo scontrino.','Descrivi il tuo piatto preferito in 45 secondi spiegando gli ingredienti principali.','Scrivi una breve recensione di un ristorante o bar che conosci e rivedila con l\'IA.','Riascolta il dialogo e prova a ripetere le battute del cameriere e del cliente a memoria.']},
  {theme:'Raccontare il passato con AVERE',subtitle:'Narra cosa hai fatto ieri, lo scorso fine settimana o poco fa.',grammar:'Il Passato Prossimo con l’ausiliare AVERE (ho mangiato, ho lavorato, ho visto, ho fatto)',grammarNote:'I verbi transitivi usano l’ausiliare AVERE. Il participio passato resta invariato in -o: “Ho studiato ieri.”',vocab:'past_avere',content:'Easy Italian: cosa hai fatto ieri?; interviste di strada con risposte spontanee al passato.',resources:[['Learn Italian with Lucrezia','https://www.youtube.com/@LearnItalianwithLucrezia'],['YouGlish Italiano','https://youglish.com/italian']],activities:['Ascolta interviste di strada sul passato recente. Anota tre attività svolte dagli intervistati.','Racconta in 45 secondi tre cose che hai fatto ieri usando ho fatto, ho visto, ho mangiato.','Trasforma cinque frasi dal presente al passato prossimo con avere. Leggile ad alta voce.','Simula una conversazione tra colleghi il lunedì mattina: “Cosa hai fatto nel weekend?”','Riascolta il video e fai pausa prima della risposta per provare a formulare la tua.','Scrivi un breve resoconto di un giorno passato (5-6 righe) e chiedi all\'IA di correggere i participi.','Riascolta l\'audio senza testo e verifica quante forme verbali al passato riesci a riconoscere.']},
  {theme:'Movimento e cambiamenti con ESSERE',subtitle:'Parla di spostamenti, arrivi, partenze e accordo del participio.',grammar:'Il Passato Prossimo con l’ausiliare ESSERE (accordo in genere e numero: andato/a/i/e)',grammarNote:'Verbi di movimento e stato richiedono ESSERE: “Marco è andato”, “Chiara è arrivata”, “Siamo partiti presto.”',vocab:'past_essere',content:'Easy Italian: viaggi e spostamenti; dialoghi con verbi di moto (andare, venire, uscire, tornare).',resources:[['Podcast Italiano','https://podcastitaliano.com/'],['WordReference IT-PT','https://www.wordreference.com/itpt/']],activities:['Ascolta una storia di viaggio o spostamento. Individua chi è partito, dove è andato e quando è tornato.','Racconta una tua uscita recente: dove sei andato, a che ora sei uscito e quando sei tornato.','Esercitati sull\'accordo del participio: “sono andato/a”, “siamo tornati/e”. Crea quattro frasi.','Fai un roleplay: racconta a un amico come è andato un viaggio o una gita nel fine settimana.','Riascolta il brano; isola i verbi che usano essere e confrontali con quelli che usano avere.','Scrivi un breve messaggio raccontando un imprevisto capitato mentre eri fuori casa.','Ripeti la narrazione orale senza consultare appunti e verifica la fluidità delle desinenze.']},
  {theme:'In città e indicazioni stradali',subtitle:'Chiedi aiuto per strada, capisci le direzioni e orientati.',grammar:'Imperativo informale e preposizioni di moto (gira a destra, vai dritto, prendi la via)',grammarNote:'Per dare indicazioni: “Gira a sinistra al semaforo, prosegui dritto e prendi la prima a destra.”',vocab:'directions',content:'Easy Italian: come chiedere informazioni e orientarsi in una città italiana (Milano, Roma).',resources:[['Easy Italian — YouTube','https://www.youtube.com/@EasyItalian'],['WordReference IT-PT','https://www.wordreference.com/itpt/']],activities:['Ascolta indicazioni stradali senza guardare la mappa. Disegna mentalmente il percorso descritto.','Apri una mappa di una città italiana e spiega a voce alta come arrivare dalla stazione al centro.','Pratica le formule di cortesia: “Scusi, per andare al Colosseo / al Duomo come posso fare?”','Roleplay: simula di fermare un passante, chiedere della farmacia più vicina e ringraziare.','Ascolta un annuncio in stazione o alla fermata del bus e annota linea, orario e destinazione.','Scrivi indicazioni chiare per un turista che vuole raggiungere casa tua o un punto noto.','Ripeti il tragitto a memoria senza interruzioni e passa al tema della spesa.']},
  {theme:'Fare la spesa e mercati locali',subtitle:'Fai acquisti, chiedi le quantità e usa i pronomi diretti.',grammar:'I pronomi diretti (lo, la, li, le) e il partitivo “ne” (“Ne prendo due etti / tre chili”)',grammarNote:'Usa i pronomi per evitare ripetizioni: “Compri il pane? Sì, lo compro.” Con quantità: “Ne prendo un chilo.”',vocab:'shopping',content:'Super Easy Italian: spesa al mercato e botteghe alimentari; pesi (etto, chilo) e scambi con il negoziante.',resources:[['Learn Italian with Lucrezia','https://www.youtube.com/@LearnItalianwithLucrezia'],['YouGlish Italiano','https://youglish.com/italian']],activities:['Ascolta un dialogo dal panettiere o fruttivendolo. Scopri cosa viene acquistato e le quantità.','Guarda il video del mercato. Ripeti ad alta voce i nomi delle unità di misura (etto, chilo, litro).','Pratica l\'uso di “ne”: “Quante mele vuole? Ne vorrei quattro, grazie.” Crea tre esempi simili.','Roleplay: ordina due etti di formaggio e un chilo di pane, chiedi il prezzo e paga.','Descrivi cosa compri di solito quando vai al supermercato in 45 secondi.','Scrivi una lista della spesa dialogata con il cassiere o bottegaio e falla correggere.','Riascolta il dialogo e verifica la comprensione dei numeri e dei prezzi in euro.']},
  {theme:'Viaggi, treni e sistemazioni',subtitle:'Pianifica viaggi in treno (Trenitalia/Italo), orari e hotel.',grammar:'Verbi modali (dovere, potere, volere) al presente + orari e preposizioni temporali',grammarNote:'Usa i modali per esprimere bisogni e possibilità: “Devo convalidare il biglietto”, “Possiamo salire?”',vocab:'travel',content:'Easy Italian: viaggiare in treno in Italia, annunci in stazione, coincidenze e check-in.',resources:[['Podcast Italiano','https://podcastitaliano.com/'],['WordReference IT-PT','https://www.wordreference.com/itpt/']],activities:['Ascolta una conversazione in stazione ferroviaria. Individua binario, destinazione e orario.','Simula l\'acquisto di un biglietto del treno: andata e ritorno per Firenze, classe e orario desiderato.','Combina dovere, potere e volere con verbi di viaggio: “Voglio partire presto”, “Devo timbrare”.','Roleplay: fai il check-in in albergo, chiedi gli orari della colazione e la password del wi-fi.','Ascolta un annuncio di ritardo del treno e annota di quanti minuti è e qual è il motivo.','Scrivi una breve email per confermare o modificare una prenotazione in albergo.','Riascolta l\'audio sui viaggi e ripeti le frasi chiave per il check-in con sicurezza.']},
  {theme:'Salute, sensazioni e corpo',subtitle:'Spiega dolori, sintomi e chiedi consiglio in farmacia.',grammar:'Espressione del dolore con “Mi fa male / Mi fanno male…” + dovere per raccomandazioni',grammarNote:'Ricorda: “Mi fa male la gola” (singolare) e “Mi fanno male i piedi” (plurale); consiglia: “Devi riposare.”',vocab:'health',content:'Easy Italian / Lucrezia: salute e sensazioni fisiche; espressioni con avere (avere sonno, fame, freddo).',resources:[['Learn Italian with Lucrezia','https://www.youtube.com/@LearnItalianwithLucrezia'],['WordReference IT-PT','https://www.wordreference.com/itpt/']],activities:['Ascolta un dialogo in farmacia o dal medico. Riconosci i sintomi principali descritti.','Esercitati a spiegare dove hai dolore usando “mi fa male…” con parti del corpo diverse.','Formula tre consigli medici con dovere: “Devi bere molta acqua”, “Devi prendere questa pastiglia”.','Roleplay: spiega al farmacista che hai febbre e mal di gola e chiedi cosa puoi prendere.','Riascolta il video senza testo; appunta tutti i termini legati alla salute riconosciuti a orecchio.','Scrivi un messaggio breve per avvisare che non puoi andare al lavoro perché hai l\'influenza.','Ripassa i vocaboli del corpo e riascolta il primo dialogo della settimana.']},
  {theme:'Tempo libero, passioni e vita quotidiana',subtitle:'Racconta cosa fai nel tempo libero, hobby, uscite e situazioni pratiche del giorno.',grammar:'Connettori di causa, scopo e sequenza (prima di tutto, poi, quindi, invece, mentre, perché, per + infinito)',grammarNote:'Collega le idee per un discorso fluido: “Prima finisco le faccende di casa, poi esco a fare una passeggiata al parco per rilassarmi.”',vocab:'tempo_libero',content:'Easy Italian / Podcast Italiano: il tempo libero degli italiani, cosa fare nel fine settimana e conversazioni tra amici.',resources:[['Easy Italian — YouTube','https://www.youtube.com/@EasyItalian'],['Podcast Italiano','https://podcastitaliano.com/']],activities:['Ascolta un audio sul tempo libero e le abitudini quotidiane in Italia. Individua le tre attività preferite citate.','Racconta in 45 secondi cosa ti piace fare nel fine settimana per rilassarti usando i connettori temporali.','Scrivi cinque frasi sui tuoi hobby combinando per + infinito (es.: "Leggo per imparare vocaboli nuovi").','Roleplay: proponi a un amico un\'uscita nel fine settimana (cinema, passeggiata, aperitivo, cena).','Ascolta una conversazione tra amici e fai pausa prima della risposta per formulare la tua proposta spontanea.','Scrivi un breve testo sul tuo fine settimana ideale (6-7 righe) e chiedi all\'IA di correggere la grammatica.','Riascolta l\'audio senza testo e annota tre espressioni idiomatiche legate al tempo libero e allo svago.']},
  {theme:'Esprimere opinioni e preferenze',subtitle:'Di’ cosa pensi, confronta alternative e motiva le tue scelte.',grammar:'Il verbo piacere (Mi piace / Mi piacciono) + espressioni di opinione (Secondo me, Penso che)',grammarNote:'Ricorda l\'accordo: “Mi piace studiare” ma “Mi piacciono le città storiche”; confronta: “più… di…”.',vocab:'opinions',content:'Easy Italian: opinioni della gente, gusti e confronti tra stili di vita nelle città italiane.',resources:[['Easy Italian — YouTube','https://www.youtube.com/@EasyItalian'],['Podcast Italiano','https://podcastitaliano.com/']],activities:['Ascolta due opinioni diverse e individua i punti in cui le persone concordano o dissentono.','Esprimi la tua opinione su un videogioco o tecnologia in 45 secondi con una ragione chiara.','Unisci frasi con secondo me, invece, tuttavia e per esempio. Leggile a voce alta.','Roleplay: confronta due città o due abitudini quotidiane chiedendo il parere dell\'altra persona.','Fai pausa prima della conclusione del video e prova a indovinare cosa dirà il parlante.','Scrivi un paragrafo di opinione sulle tue preferenze e fallo analizzare dall\'IA per varietà lessicale.','Riascolta e riassumi l\'argomentazione principale usando parole tue.']},
  {theme:'Progetti futuri e ponte verso il B1',subtitle:'Pianifica i tuoi traguardi, parla di futuro e valuta i progressi.',grammar:'Il Futuro Semplice dei verbi regolari e irregolari essenziali (farò, andrò, parlerò, studierò)',grammarNote:'Usa il futuro semplice per promesse e progetti: “Il mese prossimo andrò in Italia e parlerò ogni giorno.”',vocab:'plans',content:'Podcast Italiano / Lucrezia: fissare obiettivi di studio e parlare di piani per il futuro.',resources:[['Quadro Comune Europeo (QCER)','https://www.coe.int/en/web/common-european-framework-reference-languages/cefr-descriptors'],['Podcast Italiano','https://podcastitaliano.com/']],activities:['Ascolta qualcuno che parla dei propri progetti. Individua piano, motivazione e primo passo.','Spiega in italiano come intendi proseguire lo studio nei prossimi mesi usando il futuro.','Confronta frasi con intenzione di con forme in futuro semplice (farò, studierò, viaggerò).','Roleplay: parla con un amico di un piano di viaggio comune e stabilisci data e tappe.','Riascolta l\'audio della settimana 1 e confronta la tua comprensione e sicurezza di oggi.','Scrivi una riflessione: cosa è diventato più naturale, cosa crea ancora esitazione e il prossimo obiettivo.','Fai un riassunto orale di un minuto in italiano celebrando il traguardo del ciclo A2.']}
];

const weeklyVideos = [
  {title:'What Italians usually have for breakfast | Super Easy Italian 1',channel:'Easy Italian',id:'ArwXMYXn6h8',start:0,focus:'0:00 — la colazione degli italiani · abitudini mattutine',task:'Ascolta senza sottotitoli per cogliere l\'idea principale; poi racconta cosa mangi tu la mattina.'},
  {title:'What can you do at home in the evening? | Super Easy Italian 5',channel:'Easy Italian',id:'GO2vjowIIw7',start:0,focus:'Cosa fare la sera a casa per rilassarsi',task:'Ascolta le risposte degli intervistati e racconta in tre frasi come trascorri la serata a casa.'},
  {title:'What’s inside an Italian fridge? | Super Easy Italian 3',channel:'Easy Italian',id:'1uapFVlZbUv',start:0,focus:'Gli ingredienti e gli spazi della cucina',task:'Ascolta gli ingredienti nominati e descrivi la disposizione di cinque alimenti nella tua cucina.'},
  {title:'Italians’ favourite food | Easy Italian 1',channel:'Easy Italian',id:'nO3_NfL9Wz4',start:0,focus:'I piatti preferiti e i gusti a tavola',task:'Ascolta i piatti tipici menzionati e spiega in 45 secondi qual è il tuo cibo preferito e perché.'},
  {title:'Expressions with "avere" | Super Easy Italian 8',channel:'Easy Italian',id:'RBCp95hW04N',start:0,focus:'Espressioni con avere e base per il passato recente',task:'Ascolta le espressioni idiomatiche con avere e usane due per raccontare cosa hai fatto poco fa.'},
  {title:'How to greet people in Italy | Super Easy Italian 4',channel:'Easy Italian',id:'AY5gvkPm956',start:0,focus:'Incontri, saluti formali e informali',task:'Ascolta i saluti e simula di incontrare un conoscente per strada raccontando da dove arrivi.'},
  {title:'Italian prepositions: a, su, tra, in | Super Easy Italian 7',channel:'Easy Italian',id:'obnTQ9bHH4i',start:0,focus:'Preposizioni di moto e stato per orientarsi in città',task:'Ascolta l\'uso delle preposizioni e scrivi indicazioni per andare dalla stazione al centro.'},
  {title:'What do you do for a living? | Super Easy Italian 2',channel:'Easy Italian',id:'17Xz09gFdXs',start:0,focus:'Lavoro, professioni e compravendita quotidiana',task:'Ascolta le professioni descritte e racconta qual è la tua attività e quali acquisti fai ogni giorno.'},
  {title:'What Italians usually have for breakfast | Super Easy Italian 1',channel:'Easy Italian',id:'ArwXMYXn6h8',start:0,focus:'Ritmi di viaggio, colazione in viaggio e abitudini',task:'Immagina di essere in una stazione italiana: ordina la colazione prima di salire sul treno.'},
  {title:'Expressions with "avere" | Super Easy Italian 8',channel:'Easy Italian',id:'RBCp95hW04N',start:0,focus:'Avere fame, avere sete, avere sonno e sensazioni fisiche',task:'Ascolta i sintomi fisici e spiega al farmacista cosa ti fa male e cosa ti serve.'},
  {title:'What can you do at home in the evening? | Super Easy Italian 5',channel:'Easy Italian',id:'GO2vjowIIw7',start:0,focus:'Come gli italiani trascorrono il tempo libero, la serata e i momenti di relax',task:'Ascolta cosa fanno le persone per rilassarsi la sera e racconta in 45 secondi quali sono i tuoi passatempi preferiti.'},
  {title:'Talking about the present in Italian | Super Easy Italian 6',channel:'Easy Italian',id:'W8TsMjal2JQ',start:0,focus:'Esprimere preferenze, gusti e opinioni sul presente',task:'Ascolta le opinioni espresse nel video e registra un audio dicendo se sei d\'accordo o no.'},
  {title:'What do you do for a living? | Super Easy Italian 2',channel:'Easy Italian',id:'17Xz09gFdXs',start:0,focus:'Obiettivi futuri e consolidamento del ciclo A2',task:'Ascolta i traguardi espressi e scrivi tre frasi con il futuro semplice sui tuoi prossimi passi.'}
];

const vocabularyVideoMatches = {
  daily: new Set(['svegliarsi','alzarsi','fare colazione','prendere un caffè','routine','abitudine','mattina','di solito','spesso']),
  routine: new Set(['svegliarsi','alzarsi','lavarsi','vestirsi','riposarsi','rilassarsi','addormentarsi','pettinarsi','specchio']),
  home: new Set(['appartamento','casa','cucina','bagno','frigorifero','camera da letto','soggiorno','tavolo','sedia','finestra']),
  food: new Set(['il bar','al banco','il caffè espresso','il cornetto','la colazione','il pranzo','la cena','il conto','squisito']),
  past_avere: new Set(['ieri','ieri sera','ho fatto','ho visto','ho mangiato','ho comprato','ho finito il lavoro']),
  past_essere: new Set(['andare','venire','uscire','tornare','sono andato','è arrivato','siamo partiti','è stato bello']),
  directions: new Set(['girare a sinistra','girare a destra','andare dritto','il semaforo','l\'incrocio','la piazza','la stazione ferroviaria']),
  shopping: new Set(['il mercato rionale','il supermercato','il chilo','l\'etto','fresco','quanto costa al chilo?','lo compro']),
  travel: new Set(['il viaggio','la valigia','il biglietto del treno','la stazione ferroviaria','il binario','la coincidenza']),
  health: new Set(['avere il raffreddore','avere la tosse','avere il mal di testa','la febbre','la farmacia','il farmacista']),
  tempo_libero: new Set(['il tempo libero','il fine settimana','fare una passeggiata','ascoltare musica','leggere un libro','uscire con gli amici','andare al cinema','fare sport','rilassarsi','prendere un caffè']),
  opinions: new Set(['secondo me','penso che','sono d\'accordo','preferisco','mi piace molto','mi sembra utile']),
  plans: new Set(['il futuro','l\'obiettivo','il traguardo','la prossima settimana','il prossimo mese','continuerò a studiare'])
};

const topicLabels = {
  daily: 'la tua routine quotidiana',
  routine: 'la cura personale e le abitudini',
  home: 'la tua casa e gli spazi',
  food: 'il cibo e i pasti',
  past_avere: 'le attività recenti passate',
  past_essere: 'gli spostamenti e i viaggi',
  directions: 'muoversi in città',
  shopping: 'fare la spesa al mercato',
  travel: 'i viaggi e i treni',
  health: 'la salute e il benessere',
  tempo_libero: 'il tempo libero e la vita quotidiana',
  opinions: 'le opinioni e le scelte',
  plans: 'i progetti e il futuro'
};

const localMeanings = {
  'svegliarsi':'acordar; despertar-se','alzarsi':'levantar-se da cama','fare la doccia':'tomar banho de chuveiro','lavarsi i denti':'escovar os dentes','fare colazione':'tomar café da manhã','prendere un caffè':'tomar um café','preparare il pranzo':'preparar o almoço','uscire di casa':'sair de casa','andare al lavoro':'ir para o trabalho','prendere l\'autobus':'pegar o ônibus','salire in macchina':'entrar no carro','arrivare in orario':'chegar no horário; pontualmente','iniziare il turno':'começar o turno/expediente','fare una pausa':'fazer uma pausa/intervalo','pranzare':'almoçar','fare due passi':'dar uma caminhada; dar uma volta','sbrigare una commissione':'resolver uma pendência/tarefa fora de casa','tornare a casa':'voltar para casa','preparare la cena':'preparar o jantar','cenare insieme':'jantar juntos','sparecchiare':'tirar a mesa depois da refeição','lavare i piatti':'lavar a louça','fare il bucato':'lavar a roupa','mettere in ordine':'arrumar; organizar','buttare la spazzatura':'jogar o lixo fora','andare a letto':'ir para a cama; ir dormir','addormentarsi':'adormecer; pegar no sono','giorno feriale':'dia útil (de segunda a sexta)','fine settimana':'fim de semana','mattina':'manhã','pomeriggio':'tarde','sera':'noite (começo da noite)','notte':'noite (madrugada)','orario':'horário; cronograma','routine':'rotina','abitudine':'hábito','promemoria':'lembrete','sveglia':'despertador; alarme','quartiere':'bairro','fermata dell\'autobus':'ponto de ônibus','traffico':'trânsito','puntuale':'pontual; na hora certa','in ritardo':'atrasado','in anticipo':'adiantado; antes da hora','di solito':'normalmente; geralmente','spesso':'frequentemente; com frequência','raramente':'raramente; quase nunca','a volte':'às vezes','prima di tutto':'antes de mais nada; em primeiro lugar','poi':'depois; em seguida','in seguito':'posteriormente; em seguida','prima':'antes','mentre':'enquanto','fino a':'até','perché':'porque; por que','anche se':'mesmo que; embora','riuscire a':'conseguir fazer algo (com esforço)','avere bisogno di':'precisar de; ter necessidade de','dovere':'dever; ter que','preferire':'preferir','prepararsi':'preparar-se; arrumar-se','cercare':'procurar; buscar','finire':'terminar; concluir','passare del tempo':'passar tempo','avere fretta':'estar com pressa','al momento':'no momento; atualmente','ogni due giorni':'a cada dois dias; dia sim, dia não','una volta alla settimana':'uma vez por semana','con calma':'com calma; sem pressa','fare un piano':'fazer um plano; planejar',
  'vestirsi':'vestir-se; trocar de roupa','farsi la doccia':'tomar banho','pettinarsi':'pentear o cabelo','mettersi la giacca':'colocar a jaqueta/casaco','mettersi le scarpe':'calçar os sapatos','togliersi le scarpe':'tirar os sapatos','sbrigarsi':'apressar-se; despachar-se','ricordarsi di':'lembrar-se de','dimenticarsi di':'esquecer-se de','rilassarsi':'relaxar; descansar','riposarsi':'repousar; descansar','sedersi':'sentar-se','sentirsi bene':'sentir-se bem','sentirsi stanco':'sentir-se cansado','annoiarsi':'entediarse; ficar entediado','divertirsi':'divertir-se','prendersi cura di':'cuidar de','incontrarsi':'encontrar-se','specchio':'espelho','pettine':'pente','spazzolino da denti':'escova de dentes','dentifricio':'pasta de dente','asciugamano':'toalha','vestiti puliti':'roupas limpas','pigiama':'pijama','pantofole':'chinelos de quarto',
  'appartamento':'apartamento','casa':'casa','condominio':'prédio; condomínio','coinquilino':'colega de quarto; companheiro de casa','proprietario':'proprietário; senhorio','affitto':'aluguel','contratto':'contrato','bolletta della luce':'conta de luz','bolletta del gas':'conta de gás','bolletta dell\'acqua':'conta de água','connessione internet':'conexão de internet','mobili':'móveis','libreria':'estante de livros','scrivania':'escrivaninha; mesa de trabalho','cassetto':'gaveta','mensola':'prateleira','armadio':'guarda-roupa; armário','finestra':'janela','tenda':'cortina','lampada':'luminária; lâmpada','presa elettrica':'tomada elétrica','cucina':'cozinha','bagno':'banheiro','soggiorno':'sala de estar','camera da letto':'quarto de dormir','balcone':'varanda; sacada','riparare':'consertar; reparar','rotto':'quebrado; estragado','comodo':'confortável; cômodo','spazioso':'espaçoso; amplo','luminoso':'iluminado; claro','arredato':'mobiliado','aspirapolvere':'aspirador de pó','lavatrice':'máquina de lavar roupa','lavastoviglie':'máquina de lavar louça','frigorifero':'geladeira; frigorífico',
  'il bar':'o bar (cafeteria tradicional italiana)','il bancone':'o balcão','al banco':'no balcão (em pé)','al tavolo':'na mesa (com serviço)','il barista':'o atendente do bar / barista','il cameriere':'o garçom','il tavolo':'a mesa','il menù':'o cardápio; menu','il coperto':'taxa de serviço / couvert de mesa','il conto':'a conta','lo scontrino':'o recibo fiscal; comprovante','il caffè espresso':'o café expresso puro','il cappuccino':'o cappuccino','il cornetto':'o croissant / folhado de café da manhã','la brioche':'o pão doce / brioche','la colazione':'o café da manhã','il pranzo':'o almoço','la cena':'o jantar','il primo piatto':'o primeiro prato (geralmente massa ou risoto)','il secondo piatto':'o segundo prato (geralmente carne ou peixe)','il contorno':'o acompanhamento (salada, batata, legumes)','il dolce':'a sobremesa','l\'acqua naturale':'água mineral sem gás','l\'acqua frizzante':'água mineral com gás','saporito':'saboroso; temperado','squisito':'delicioso; requintado','avere fame':'estar com fome','avere sete':'estar com sede','quanto costa?':'quanto custa?','posso pagare con la carta?':'posso pagar com cartão?','ci porta il conto per favore?':'traz a conta por favor?',
  'ieri':'ontem','ieri mattina':'ontem de manhã','ieri sera':'ontem à noite','l\'altro ieri':'anteontem','lo scorso fine settimana':'no fim de semana passado','ho fatto':'fiz; eu fiz','ho visto':'vi; eu vi','ho mangiato':'comi; eu comi','ho bevuto':'bebi; eu bebi','ho lavorato':'trabalhei; eu trabalhei','ho studiato':'estudei; eu estudei','ho comprato':'comprei; eu comprei','ho letto':'li; eu li','ho scritto':'escrevi; eu escrevi','ho ascoltato':'ouvi; escutei','ho capito':'entendi; compreendi','ho perso':'perdi','ho trovato':'encontrei; achei','ho finito il lavoro':'terminei o trabalho','che cosa hai fatto?':'o que você fez?','hai già mangiato?':'já comeu?',
  'sono andato':'fui; eu fui (masculino)','sono andata':'fui; eu fui (feminino)','siamo andati':'fomos (masculino/misto)','è arrivato':'ele chegou','è arrivata':'ela chegou','sono uscito':'saí (masculino)','sono tornato a casa':'voltei para casa','ci siamo divertiti':'nós nos divertimos','è successo qualcosa':'aconteceu alguma coisa','che cosa è successo?':'o que aconteceu?','dove sei andato?':'onde você foi?','siamo rimasti a casa':'ficamos em casa','è stato bello':'foi bom; foi legal','mi è piaciuto':'eu gostei; agradou-me',
  'girare a sinistra':'virar à esquerda','girare a destra':'virar à direita','andare dritto':'seguir em frente; ir reto','attraversare la strada':'atravessar a rua','all\'angolo':'na esquina','il semaforo':'o semáforo; sinal','l\'incrocio':'o cruzamento','le strisce pedonali':'a faixa de pedestres','la piazza':'a praça','la stazione ferroviaria':'a estação de trem','la fermata dell\'autobus':'o ponto de ônibus','scusi per andare a...?':'com licença, para ir para...?','dov\'è la farmacia più vicina?':'onde fica a farmácia mais próxima?','è lontano da qui?':'fica longe daqui?','vada sempre dritto':'vá sempre em frente',
  'il supermercato':'o supermercato','il chilo':'o quilo','mezzo chilo':'meio quilo','l\'etto':'100 gramas (um etto)','due etti':'200 gramas (dois ettos)','fresco':'fresco','quanto costa al chilo?':'quanto custa o quilo?','vorrei due etti di prosciutto':'gostaria de 200g de presunto','ne prendo mezzo chilo':'vou levar meio quilo (disso)','serve una busta?':'precisa de sacola?',
  'il viaggio':'a viagem','la valigia':'a mala','il biglietto del treno':'a passagem de trem','il binario':'a plataforma / linha do trem','la coincidenza':'a conexão / baldeação','il ritardo':'o atraso','a che ora parte il treno?':'a que horas sai o trem?','su quale binario arriva?':'em qual plataforma chega?','buon viaggio':'boa viagem',
  'avere il raffreddore':'estar resfriado','avere la tosse':'estar com tosse','avere il mal di gola':'estar com dor de garganta','avere il mal di testa':'estar com dor de cabeça','avere la febbre':'estar com febre','la medicina':'o remédio; medicamento','il medico':'o médico','guarire':'curar-se; sarar','che cosa ti fa male?':'o que está doendo em você?','guarisci presto':'melhoras; fique bem logo',
  'il computer':'o computador','lo schermo':'a tela; monitor','il programma':'o programa; software','il codice sorgente':'o código-fonte','il bug':'o bug; erro no sistema','costruire un rifugio':'construir um abrigo','il banco da lavoro':'a bancada de trabalho (crafting table)','la pietra rossa':'a redstone (pedra vermelha)','attivare il meccanismo':'ativar o mecanismo','ho risolto il bug':'resolvi o bug',
  'secondo me':'na minha opinião; segundo eu','a mio parere':'a meu ver; na minha opinião','penso che':'penso que; acho que','sono d\'accordo':'estou de acordo; concordo','non sono d\'accordo':'não estou de acordo; discordo','hai ragione':'você tem razão','preferisco':'prefiro','mi piace molto':'gosto muito','è facile':'é fácil','è difficile':'é difícil',
  'il futuro':'o futuro','l\'obiettivo':'o objetivo; meta','il traguardo':'o marco; a conquista','la prossima settimana':'na próxima semana','il prossimo mese':'no próximo mês','l\'anno prossimo':'no ano que vem','farò del mio meglio':'farei o meu melhor','continuerò a studiare':'continuarei a estudar','raggiungere il livello B1':'alcançar o nível B1','non mollare':'não desista','il tempo libero':'o tempo livre; momentos de lazer','il fine settimana':'o fim de semana','uscire con gli amici':'sair com os amigos','ascoltare musica':'ouvir música','leggere un libro':'ler um livro','guardare la tv':'assistir televisão','guardare una serie':'assistir a uma série','andare al cinema':'ir ao cinema','fare una passeggiata':'dar um passeio; fazer uma caminhada','fare sport':'praticar esportes','andare in palestra':'ir à academia','andare in bicicletta':'andar de bicicleta','fare una gita fuori porta':'fazer um passeio/bate-e-volta fora da cidade','stare all\'aria aperta':'ficar ao ar livre','fare l\'aperitivo':'tomar um aperitivo com petiscos','prendere un gelato':'tomar um sorvete','mangiare una pizza':'comer uma pizza','scambiare due chiacchiere':'bater um papo; trocar duas palavras','ridere e scherzare':'rir e brincar; descontrair','riposarsi sul divano':'descansar no sofá','ascoltare un podcast':'ouvir um podcast','staccare la spina':'desconectar da rotina; relaxar a mente','godersi la giornata':'aproveitar o dia'
};

const examplesByTerm = {
  'di solito': ['Di solito mi sveglio alle sette del mattino.', 'Di solito prendo un caffè prima di iniziare a lavorare.'],
  'spesso': ['Ascolto spesso podcast in italiano mentre cammino.', 'Vado spesso al supermercato il sabato mattina.'],
  'raramente': ['Raramente mangio fuori durante la settimana.', 'Lui guarda raramente la televisione.'],
  'a volte': ['A volte studio italiano durante la pausa pranzo.', 'A volte facciamo una passeggiata insieme la sera.'],
  'perché': ['Studio l\'italiano perché voglio viaggiare in Italia.', 'Sono rimasto a casa perché pioveva.'],
  'anche se': ['Anche se ero stanco, ho completato la sessione di studio.', 'Anche se il treno era in ritardo, sono arrivato in orario.'],
  'puntuale': ['Il treno è stato molto puntuale stamattina.', 'Cerco sempre di essere puntuale agli appuntamenti.'],
  'in ritardo': ['Scusa per il ritardo, c\'era molto traffico per strada.', 'Il treno regionale è arrivato con dieci minuti di ritardo.'],
  'svegliarsi': ['Mi sveglio presto ogni giorno per fare esercizio.', 'A che ora ti svegli la domenica?'],
  'alzarsi': ['Mi alzo dal letto dieci minuti dopo la sveglia.', 'Lei si alza sempre prima di tutti in casa.'],
  'fare colazione': ['Faccio colazione con caffè e biscotti.', 'Di solito facciamo colazione insieme la domenica mattina.'],
  'prendere un caffè': ['Prendiamo un caffè al bar vicino all\'ufficio?', 'Prendo sempre un caffè macchiato dopo pranzo.'],
  'andare al lavoro': ['Vado al lavoro in metropolitana ogni giorno.', 'A che ora vai al lavoro la mattina?'],
  'fare la doccia': ['Faccio la doccia calda la sera prima di dormire.', 'Faccio una doccia veloce dopo l\'allenamento.'],
  'vestirsi': ['Mi vesto velocemente per non perdere l\'autobus.', 'Lui si veste sempre in modo elegante.'],
  'prepararsi': ['Ci prepariamo per uscire tra venti minuti.', 'Mi preparo la cena da solo stasera.'],
  'sbrigarsi': ['Dobbiamo sbrigarci o perderemo il treno!', 'Mi sbrigo a finire questo lavoro prima delle sei.'],
  'riposarsi': ['Nel pomeriggio mi riposo per mezz\'ora.', 'La domenica mi piace riposarmi a casa.'],
  'addormentarsi': ['Di solito mi addormento leggendo un libro.', 'Ieri sera mi sono addormentato subito.'],
  'appartamento': ['Abito in un piccolo appartamento in centro.', 'Il mio appartamento è molto luminoso e silenzioso.'],
  'cucina': ['Passo molto tempo in cucina a preparare piatti nuovi.', 'La cucina ha un grande tavolo di legno.'],
  'bagno': ['Il bagno si trova in fondo al corridoio a destra.', 'C\'è una bella doccia spaziosa nel bagno.'],
  'scrivania': ['Tengo sempre la scrivania pulita e in ordine.', 'Ho messo il computer sulla scrivania.'],
  'il bar': ['Ci vediamo al bar all\'angolo alle cinque.', 'In Italia il bar è un luogo di ritrovo quotidiano.'],
  'al banco': ['Prendo un caffè al banco al volo e poi scappo.', 'Al banco il caffè costa di meno che al tavolo.'],
  'il conto': ['Cameriere, ci porta il conto per favore?', 'Possiamo pagare il conto con la carta di credito?'],
  'lo scontrino': ['Faccia prima lo scontrino alla cassa, poi vada al banco.', 'Ecco il suo scontrino con il resto.'],
  'ieri': ['Ieri ho studiato italiano per quindici minuti.', 'Ieri sera abbiamo mangiato una pizza deliziosa.'],
  'ho fatto': ['Ieri ho fatto una lunga passeggiata nel parco.', 'Cosa hai fatto di bello ieri sera?'],
  'ho visto': ['Ho visto un video molto interessante su YouTube.', 'Hai visto dov\'è finita la mia giacca?'],
  'ho mangiato': ['Ho mangiato un piatto di pasta al pomodoro squisito.', 'Abbiamo mangiato tutti insieme in famiglia.'],
  'ho lavorato': ['Ieri ho lavorato fino a tardi al computer.', 'Ho lavorato su un nuovo progetto con i colleghi.'],
  'sono andato': ['Ieri sono andato in centro a comprare un libro.', 'Sono andato alla stazione a prendere un amico.'],
  'è arrivato': ['Il pacco che aspettavo è arrivato stamattina.', 'Marco è arrivato a Roma ieri pomeriggio.'],
  'siamo partiti': ['Siamo partiti presto per evitare il traffico.', 'Siamo partiti in treno da Milano.'],
  'girare a sinistra': ['Gira a sinistra al semaforo e troverai la piazza.', 'Dopo cento metri devi girare a sinistra.'],
  'girare a destra': ['Gira a destra subito dopo la farmacia.', 'Prendi la via a destra per raggiungere la stazione.'],
  'andare dritto': ['Vada sempre dritto per duecento metri.', 'Se vai sempre dritto arrivi direttamente al duomo.'],
  'il semaforo': ['Fermati al semaforo rosso.', 'C\'è un semaforo pedonale proprio all\'incrocio.'],
  'quanto costa?': ['Quanto costa questo libro in vetrina?', 'Quanto costa un biglietto per il treno regionale?'],
  'vorrei': ['Vorrei un cappuccino e un cornetto, grazie.', 'Vorrei prenotare un tavolo per due stasera.'],
  'ne prendo': ['Queste mele sono bellissime: ne prendo un chilo.', 'Il prosciutto è ottimo: ne prendo due etti.'],
  'il biglietto': ['Devi convalidare il biglietto prima di salire sul treno.', 'Ho comprato il biglietto online con l\'applicazione.'],
  'il binario': ['Il treno per Venezia parte dal binario quattro.', 'Attenzione: allontanarsi dalla linea gialla del binario.'],
  'avere il raffreddore': ['Oggi non esco perché ho un forte raffreddore.', 'Prendi una tisana calda se hai il raffreddore.'],
  'mi fa male': ['Mi fa male la testa da stamattina.', 'Mi fa male la gola quando parlo.'],
  'il computer': ['Lavoro al computer per otto ore al giorno.', 'Ho spento il computer prima di andare a dormire.'],
  'il codice sorgente': ['Ho controllato il codice sorgente per trovare l\'errore.', 'Il codice è pulito e ben documentato.'],
  'secondo me': ['Secondo me l\'italiano è una lingua musicale e affascinante.', 'Secondo me questa è la soluzione più rapida.'],
  'penso che': ['Penso che la pratica costante sia il segreto per imparare.', 'Penso che andrò a fare una camminata stasera.'],
  'sono d\'accordo': ['Sono d\'accordo con te su questo punto.', 'Tutti erano d\'accordo con la proposta.'],
  'farò del mio meglio': ['Farò del mio meglio per parlare italiano ogni giorno.', 'Non ti preoccupare: farò del mio meglio.'],
  'continuerò a studiare': ['Continuerò a studiare con costanza anche il mese prossimo.', 'Continuerò a guardare video in lingua originale.']
};

function makeUsageExamples(term, group) {
  if (examplesByTerm[term.toLowerCase()]) return examplesByTerm[term.toLowerCase()];
  const topic = topicLabels[group] || 'la vita quotidiana';
  if (term.includes('?') || /^(io |mi |ci |ho |sono |è |siamo |vada |gira |prenda |vorrei )/i.test(term)) {
    return [
      `In una conversazione reale su ${topic}, puoi dire: “${term}.”`,
      `Ho usato l'espressione “${term}” parlando con un amico di ${topic}.`
    ];
  }
  return [
    `Uso spesso la parola “${term}” quando parlo di ${topic}.`,
    `Durante la lezione abbiamo visto come usare “${term}” in una frase naturale.`
  ];
}

const stateKey = 'italianQuestProgressV1';
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
    toast('Non è stato possibile salvare. Esporta un backup e libera spazio nel browser.');
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
  const resourceAction = useCuratedVideo ? (video.id ? ` · <button class="inline-video-open" type="button" data-week-video="${weekIndex}">abrir vídeo no modal ▶</button>` : '') : w.resources?.[dayIndex % w.resources.length] ? ` · <a href="${w.resources[dayIndex % w.resources.length][1]}" target="_blank" rel="noreferrer">abrir recurso ↗</a>` : '';
  return `<p><b>O que estudar:</b> ${escapeHtml(w.activities[dayIndex])}</p><p><b>Recurso:</b> ${escapeHtml(resource)}${resourceAction}</p><p><b>Tempo:</b> 15 minutos · <b>Como praticar:</b> ${escapeHtml(f.task)}</p><p><b>Entrega do dia:</b> ${escapeHtml(f.output)}</p>`;
}

function listeningPractice(w, weekIndex) {
  const video = weeklyVideos[weekIndex];
  const source = video?.id ? `${video.channel}: “${video.title}”` : 'um áudio A2 em italiano sobre ' + w.theme.toLowerCase();
  const steps = [
    `<b>1 · Escute sem legenda (4 min).</b> Use ${escapeHtml(source)}. Procure a ideia central, quem está falando e o tema; não pause para traduzir mentalmente.`,
    `<b>2 · Recupere de memória (4 min).</b> Feche o áudio/vídeo e diga em voz alta ou anote três ideias que entendeu em italiano. Marque sua confiança abaixo antes de ler qualquer texto.`,
    `<b>3 · Confira e investigue (4 min).</b> Reabra com legenda ou transcrição em italiano. Escolha no máximo duas lacunas: pronúncia conectada, palavra nova ou estrutura gramatical. Anote a frase inteira.`,
    `<b>4 · Ouça e imite (3 min).</b> Ouça o trecho novamente e faça shadowing (repetição em voz alta) de duas frases curtas imitando a entonação do falante italiano.`
  ];
  const dialog = document.getElementById('listening-dialog');
  dialog.dataset.week = String(weekIndex);
  document.getElementById('listening-title').textContent = `Listening · ${w.theme}`;
  document.getElementById('listening-intro').textContent = `Quatro passagens curtas sobre ${w.theme.toLowerCase()}. O objetivo é entender a mensagem global, verificar lacunas e falar em voz alta com naturalidade.`;
  document.getElementById('listening-video-open').hidden = !video?.id;
  document.getElementById('listening-steps').innerHTML = steps.map(step => `<article>${step}</article>`).join('');
  const stored = state.listening?.[weekIndex];
  const history = Array.isArray(stored) ? stored : stored ? [stored] : [];
  const latest = history.at(-1) || {};
  document.getElementById('listening-history').textContent = history.length > 1 ? `Autoavaliações salvas: ${history.slice(-4).map(entry => entry.confidence ? `${entry.confidence}/4` : '—').join(' · ')}` : '';
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
  const action = video.id ? `<button class="video-open-button" type="button" data-week-video="${index}">Assistir no modal ▶</button><a href="https://www.youtube.com/watch?v=${encodeURIComponent(video.id)}${video.start ? `&t=${video.start}s` : ''}" target="_blank" rel="noreferrer">Abrir no YouTube ↗</a>` : `<span class="video-not-available">${escapeHtml(video.focus)}</span>`;
  return `<section class="weekly-video-card"><div class="weekly-video-copy"><div class="vocab-section-label">VÍDEO DA SEMANA · ${escapeHtml(video.channel)}</div><h4>${escapeHtml(video.title)}</h4><p><b>Trecho:</b> ${escapeHtml(video.focus)}</p><p><b>Prática (15 min):</b> ${escapeHtml(video.task)}</p></div><div class="weekly-video-actions"><button class="listening-open-button" type="button" data-listening-week="${index}">Iniciar escuta guiada 🎧</button>${action}</div></section>`;
}

async function translateVocab(term) {
  const localMeaning = localMeanings[term.toLowerCase()];
  if (localMeaning) return localMeaning;
  if (state.lookups[term]) return state.lookups[term];
  const url = new URL('https://api.mymemory.translated.net/get');
  url.searchParams.set('q', term);
  url.searchParams.set('langpair', 'it|pt-BR');
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
  translation.textContent = state.lookups[term] || localMeaning || 'Buscando tradução…';
  document.getElementById('vocab-meaning-note').textContent = localMeaning ? 'Significado contextual deste roteiro; use os exemplos para observar a expressão em situação.' : state.lookups[term] ? 'Tradução automática; considere o contexto da semana para confirmar o sentido.' : 'Tradução automática para orientar; o contexto ajuda a escolher o sentido.';
  document.getElementById('vocab-youglish').href = `https://youglish.com/pronounce/${encodeURIComponent(term)}/italian`;
  document.getElementById('vocab-wordreference').href = `https://www.wordreference.com/itpt/${encodeURIComponent(term)}`;
  document.getElementById('vocab-example-list').innerHTML = makeUsageExamples(term, group).map((example, i) => `<article class="vocab-example"><span>${i + 1}</span><p>${escapeHtml(example)}</p></article>`).join('');
  const weekIndex = Number(key.split('-')[0]);
  activeVocabVideo = vocabularyVideoMatches[group]?.has(term.toLowerCase()) ? weeklyVideos[weekIndex] : null;
  const videoCard = document.getElementById('vocab-related-video');
  videoCard.hidden = !activeVocabVideo?.id;
  if (activeVocabVideo) {
    document.getElementById('vocab-video-title').textContent = `${activeVocabVideo.title} · ${activeVocabVideo.channel}`;
  }
  const complete = document.getElementById('vocab-complete');
  complete.textContent = state.vocab[key] ? 'Concluído ✓ · desfazer' : 'Concluir';
  dialog.showModal();
  if (!state.lookups[term] && !localMeaning) {
    try {
      const meaning = await translateVocab(term);
      if (activeVocabKey === key && dialog.open) {
        translation.textContent = meaning;
        document.getElementById('vocab-meaning-note').textContent = 'Tradução automática; considere o contexto da semana para confirmar o sentido.';
      }
    } catch {
      if (activeVocabKey === key && dialog.open) {
        translation.textContent = 'Tradução indisponível agora. Você ainda pode ver os exemplos e consultar o WordReference.';
        document.getElementById('vocab-meaning-note').textContent = 'Verifique a conexão ou abra a definição no WordReference.';
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
            <h4>Foco gramatical</h4>
            <p><b>${escapeHtml(w.grammar)}</b><br>${escapeHtml(w.grammarNote)}</p>
          </div>
          <div class="detail-box">
            <h4>Conteúdo da semana</h4>
            <p>${escapeHtml(w.content)}</p>
          </div>
        </div>
        <div class="vocab-header">
          <h4>Vocabulário essencial</h4>
          <span class="vocab-count" data-vocab-count="${i}"></span>
        </div>
        <p class="vocab-guidance">Este é um banco de consulta, não uma lista para decorar de uma vez. Escolha até 3 expressões para usar hoje; tente lembrar as antigas antes de olhar.</p>
        <div class="vocab-list">
          ${vocab.map((term, j) => {
            const key = `${i}-${j}`;
            return `<button class="vocab-item ${state.vocab[key] ? 'learned' : ''}" type="button" data-vocab="${key}" aria-pressed="${!!state.vocab[key]}" title="Ver significado e exemplos" aria-label="${escapeHtml(term)}${state.vocab[key] ? ' · concluída' : ''}">${escapeHtml(term)}</button>`;
          }).join('')}
        </div>
        <div class="week-resources">
          <b>Materiais e recursos recomendados</b>
          ${w.resources.map(r => `<a href="${r[1]}" target="_blank" rel="noreferrer">${escapeHtml(r[0])} ↗</a>`).join('')}
          <a href="https://podcastitaliano.com/" target="_blank" rel="noreferrer">Podcast Italiano (A2) ↗</a>
        </div>
        <div class="days-heading">Plano diário · 15 min por sessão</div>
        <div class="day-list">
          ${dayNames.map((day, d) => {
            const key = `${i}-${d}`;
            return `<div class="day-item">
              <div class="day-trigger">
                <input class="day-check" type="checkbox" data-day="${key}" aria-label="Marcar ${day} da semana ${n} como concluído" ${state.days[key] ? 'checked' : ''}>
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
  document.getElementById('completed-count').textContent = `${completed} de ${weeks.length * 7} sessões`;
  document.querySelectorAll('.vocab-count').forEach(label => {
    const weekIndex = Number(label.dataset.vocabCount);
    const total = vocabSets[weeks[weekIndex].vocab].length;
    const learned = Array.from({length: total}, (_, i) => state.vocab[`${weekIndex}-${i}`]).filter(Boolean).length;
    label.textContent = `${learned}/${total} concluídas · clique para ver significado e exemplos`;
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
  const blob = new Blob([JSON.stringify({app: 'italian-quest', version: 1, exportedAt: new Date().toISOString(), state}, null, 2)], {type: 'application/json'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'italian-quest-backup.json';
  a.click();
  URL.revokeObjectURL(a.href);
  toast('Backup baixado. Guarde o arquivo em local seguro.');
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
    toast('Progresso importado neste navegador.');
  } catch {
    toast('Arquivo inválido. Escolha um backup Italian Quest.');
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
  toast(confidence ? 'Reflexão de listening salva.' : 'Anotação salva; marque sua confiança na próxima escuta.');
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
    button.setAttribute('aria-label', `${button.textContent.trim()}${state.vocab[activeVocabKey] ? ' · concluída' : ''}`);
  }
  saveState();
  updateProgress();
  document.getElementById('vocab-complete').textContent = state.vocab[activeVocabKey] ? 'Concluído ✓ · desfazer' : 'Concluir';
  document.getElementById('vocab-dialog').close();
});

document.getElementById('vocab-dialog').addEventListener('click', event => {
  if (event.target === event.currentTarget) event.currentTarget.close();
});

render();

