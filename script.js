let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');

btnMenu.addEventListener('click', ()=> {
    menu.classList.add('abrir-menu');
});

menu.addEventListener('click', ()=> {
    menu.classList.remove('abrir-menu');
});

overlay.addEventListener('click', ()=> {
    menu.classList.remove('abrir-menu');
});

  document.getElementById("meuFormulario").addEventListener("submit", function(event) {
    event.preventDefault();

    let nome = document.getElementById("name").value;
    let servico = document.getElementById("servico").value;
    let regime = document.getElementById("regime").value;
    let area = document.getElementById("area").value;
    let faturamento = document.getElementById("faturamento").value;

    let mensagem = `Olá, eu sou "${nome}", preciso "${servico}", a área de atuação da minha empresa é "${area}", meu regime tributário atual é "${regime}" e a minha média de faturamento é "${faturamento}".`;

    let numeroWhatsApp = "77988449348";
    let link = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    window.open(link, "_blank");
  });