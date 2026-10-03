/* ===== Validação do cadastro + envio simulado (localStorage) ===== */
const form = document.getElementById('form-cadastro');
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Mostra/limpa a mensagem de erro de um campo; retorna true se válido
function erro(id, msg){
  document.getElementById('erro-'+id).textContent = msg;
  document.getElementById(id).classList.toggle('invalido', !!msg);
  return !msg;
}

form.addEventListener('submit', e => {
  e.preventDefault();                                     // evita recarregar a página
  const nome = form.nome.value.trim(), email = form.email.value.trim(), msg = form.mensagem.value.trim();
  const ok = [                                            // roda todas as validações
    erro('nome',     nome.length < 3 ? 'Informe seu nome (mín. 3 letras).' : ''),
    erro('email',    !regexEmail.test(email) ? 'Informe um e-mail válido.' : ''),
    erro('mensagem', msg.length < 5 ? 'Escreva uma mensagem (mín. 5 caracteres).' : '')
  ].every(Boolean);
  if(!ok) return;

  // Simula o envio guardando no localStorage
  const lista = JSON.parse(localStorage.getItem('cadastros') || '[]');
  lista.push({nome, email, msg, data:new Date().toISOString()});
  localStorage.setItem('cadastros', JSON.stringify(lista));

  form.reset();
  const s = document.getElementById('sucesso');
  s.style.display = 'block';
  s.textContent = `Obrigado, ${nome}! Cadastro enviado com sucesso.`;
});