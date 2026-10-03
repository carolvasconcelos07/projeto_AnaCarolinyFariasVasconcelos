/* ===== Dados do site: temas e notícias fictícias ===== */
const TEMAS = [
  {slug:'tecnologia',    nome:'Tecnologia',    emoji:'💻', cor:'#6c2bd9'},
  {slug:'politica',      nome:'Política',      emoji:'🏛️', cor:'#d6204f'},
  {slug:'esportes',      nome:'Esportes',      emoji:'⚽', cor:'#0a9d58'},
  {slug:'saude',         nome:'Saúde',         emoji:'🩺', cor:'#0097c7'},
  {slug:'economia',      nome:'Economia',      emoji:'📈', cor:'#e08600'},
  {slug:'entretenimento',nome:'Entretenimento',emoji:'🎬', cor:'#ff3d81'},
  {slug:'ciencia',       nome:'Ciência',       emoji:'🔬', cor:'#3b4cca'},
  {slug:'cultura',       nome:'Cultura',       emoji:'🎭', cor:'#9c27b0'},
  {slug:'educacao',      nome:'Educação',      emoji:'🎓', cor:'#00897b'},
  {slug:'mundo',         nome:'Mundo',         emoji:'🌍', cor:'#455a64'}
];

// Cada tema tem 3 notícias fictícias: [título, resumo, hora]
const NOTICIAS = {
  tecnologia:[
    ['Startup brasileira lança assistente de IA em português','Ferramenta promete transformar o atendimento em pequenas empresas.','há 1 hora'],
    ['Novo chip promete bateria de uma semana em celulares','Processador apresentado consome 40% menos energia.','há 3 horas'],
    ['Golpes por mensagem crescem no país','Especialistas ensinam como identificar links falsos.','há 5 horas']],
  politica:[
    ['Congresso debate nova reforma administrativa','Parlamentares devem votar o texto na próxima semana.','há 2 horas'],
    ['Prefeituras recebem verba extra para mobilidade','Recursos serão aplicados em corredores de ônibus.','há 4 horas'],
    ['Comissão aprova projeto de transparência digital','Dados públicos ficarão mais acessíveis ao cidadão.','há 6 horas']],
  esportes:[
    ['Time local vence clássico e assume a liderança','Gol nos acréscimos garantiu a virada diante de 40 mil torcedores.','há 1 hora'],
    ['Nadadora brasileira bate recorde sul-americano','Marca foi alcançada em campeonato no fim de semana.','há 3 horas'],
    ['Vôlei: seleção convoca novos talentos','Treinador aposta em renovação para a próxima temporada.','há 7 horas']],
  saude:[
    ['Estudo aponta benefícios de caminhadas diárias','30 minutos de atividade estão ligados a mais disposição.','há 2 horas'],
    ['Campanha de vacinação é ampliada no estado','Postos funcionarão em horário estendido.','há 5 horas'],
    ['Sono de qualidade: hábitos simples que ajudam','Médicos listam dicas para melhorar o descanso.','há 8 horas']],
  economia:[
    ['Inflação desacelera e mercado reage com otimismo','Analistas revisam projeções para o fim do ano.','há 1 hora'],
    ['Pequenos negócios ganham crédito facilitado','Taxas reduzidas buscam estimular o empreendedorismo.','há 4 horas'],
    ['Dólar fecha em queda após dados de emprego','Moeda americana recua frente ao real.','há 6 horas']],
  entretenimento:[
    ['Série nacional estreia com recorde de audiência','Produção mistura suspense e humor.','há 2 horas'],
    ['Festival de música anuncia line-up completo','Mais de 40 atrações em três dias.','há 5 horas'],
    ['Animação lidera bilheteria no fim de semana','Longa arrecadou milhões em três dias.','há 9 horas']],
  ciencia:[
    ['Cientistas descobrem nova espécie em floresta tropical','Anfíbio de cores vivas foi achado em expedição.','há 3 horas'],
    ['Telescópio registra imagem inédita de galáxia distante','Imagem ajuda a entender a formação das estrelas.','há 5 horas'],
    ['Pesquisa brasileira cria plástico biodegradável','Material é feito a partir de casca de frutas.','há 8 horas']],
  cultura:[
    ['Museu inaugura exposição de arte contemporânea','Mostra reúne 60 obras de artistas emergentes.','há 2 horas'],
    ['Feira literária celebra autores independentes','Lançamentos e oficinas gratuitas.','há 4 horas'],
    ['Teatro de rua ocupa praças neste mês','Espetáculos gratuitos aos sábados.','há 7 horas']],
  educacao:[
    ['Escolas adotam aulas de programação no currículo','Projeto-piloto atinge 200 escolas públicas.','há 1 hora'],
    ['Inscrições para bolsas de estudo abrem na segunda','Candidatos devem se cadastrar pela internet.','há 4 horas'],
    ['Universidades ampliam cursos a distância','Modalidade cresce e atrai trabalhadores.','há 6 horas']],
  mundo:[
    ['Cúpula climática reúne líderes de 50 países','Metas de redução de emissões estão em discussão.','há 2 horas'],
    ['Turismo internacional bate recorde na Europa','Destinos históricos registram lotação máxima.','há 5 horas'],
    ['Trem de alta velocidade é inaugurado','Percurso entre duas capitais cai pela metade.','há 8 horas']]
};