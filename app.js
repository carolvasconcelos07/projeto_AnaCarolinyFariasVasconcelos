/* ===== Lógica comum: monta cabeçalho, menu, rodapé e cards ===== */
const BASE  = document.body.dataset.base;                 // '' na raiz, '../' dentro de pages/
const PASTA = BASE === '' ? 'pages/' : '';                // prefixo para links das páginas
const ATUAL = document.body.dataset.tema || document.body.dataset.pagina; // tema, 'cadastro' ou 'home'

// Cabeçalho: logo, botão de cadastro e menu com Início + 10 abas
function montarCabecalho(){
  const links = TEMAS.map(t =>
    `<a href="${PASTA}${t.slug}.html" class="${t.slug===ATUAL?'ativo':''}">${t.emoji} ${t.nome}</a>`).join('');
  document.getElementById('topo').innerHTML = `
    <header class="header">
      <div class="header-in">
        <a href="${BASE}index.html" class="logo">Pulsar<span>.</span></a>
        <a href="${PASTA}cadastro.html" class="btn-cad">Cadastre-se</a>
      </div>
      <nav class="menu">
        <a href="${BASE}index.html" class="${ATUAL==='home'?'ativo':''}">🏠 Início</a>${links}
      </nav>
    </header>`;
}

// Rodapé repete os links (voltar à home de qualquer lugar)
function montarRodape(){
  document.getElementById('rodape').innerHTML = `
    <footer class="footer"><a href="${BASE}index.html">Início</a>
    ${TEMAS.map(t=>`<a href="${PASTA}${t.slug}.html">${t.nome}</a>`).join('')}
    <p style="margin-top:10px">© 2026 Pulsar — notícias fictícias para fins acadêmicos.</p></footer>`;
}

// Card de notícia: usa a foto de assets/ e, se ela não existir, mostra o gradiente com emoji
function card(tema, n, grande=false){
  const foto = n[3] || `${tema.slug}.jpg`;   // 4º item opcional da notícia; senão usa a foto do tema
  return `<a class="card ${grande?'grande':''}" href="${PASTA}${tema.slug}.html">
    <div class="img" style="background:linear-gradient(135deg,${tema.cor},#222)">${tema.emoji}
      <img src="${BASE}assets/${foto}" alt="${n[0]}" onerror="this.remove()">
    </div>
    <div class="card-body"><span class="tag" style="background:${tema.cor}">${tema.nome}</span>
    <h3>${n[0]}</h3><p>${n[1]}</p><div class="hora">${n[2]}</div></div></a>`;
}


montarCabecalho();
montarRodape();
const main = document.getElementById('conteudo');

if (ATUAL === 'home'){
  // Destaques: 1 principal + 3 laterais
  const dest = TEMAS.slice(0,4).map(t => [t, NOTICIAS[t.slug][0]]);
  main.innerHTML = `<h1 class="titulo">Destaques do dia</h1><p class="sub">As notícias mais importantes agora.</p>
    <section class="destaques">${card(...dest[0],true)}<div class="lado">${dest.slice(1).map(d=>card(...d)).join('')}</div></section>
    <h2 class="secao">Últimas por tema</h2>
    <section class="grid">${TEMAS.map(t=>card(t,NOTICIAS[t.slug][1])).join('')}</section>`;
} else if (document.body.dataset.tema){
  // Página de tema: lista as notícias do tema
  const t = TEMAS.find(x => x.slug === ATUAL);
  main.innerHTML = `<h1 class="titulo">${t.emoji} ${t.nome}</h1><p class="sub">Todas as notícias de ${t.nome}.</p>
    <section class="grid">${NOTICIAS[t.slug].map(n=>card(t,n)).join('')}</section>`;
}