// -------------------- MENU RESPONSIVO --------------------
let menu = document.querySelector('.menu-icon');  // Ícone do menu 
let navbar = document.querySelector(".navbar");   // Menu de navegação

// Evento de clique no ícone do menu
menu.onclick = () => {
    // Alterna a animação do menu (transforma em "X") e abre/fecha o menu
    menu.classList.toggle("move");
    navbar.classList.toggle("open-menu");
};

// Fecha o menu automaticamente ao rolar a página
window.onscroll = () => {
    menu.classList.remove("move");
    navbar.classList.remove("open-menu");
};

// -------------------- DEFINIR DATAS NO FORMULÁRIO --------------------
window.onload = () => {
    // Data atual no formato YYYY-MM-DD
    let today = new Date().toISOString().split('T')[0];
    document.getElementById('start-date').value = today;

    // Data de retorno: 7 dias após a data atual
    let returnDate = new Date(Date.now() + 7 * 86400000)  // 86400000ms = 1 dia
        .toISOString()
        .split('T')[0];
    document.getElementById('return-date').value = returnDate;
};

// -------------------- ANIMAÇÃO COM SCROLLREVEAL --------------------
const animate = ScrollReveal({
  origin: 'top',      // A animação vem de cima
  distance: '60px',   // Distância do movimento
  duration: 2500,     // Duração da animação em milissegundos
  delay: 400          // Atraso antes de iniciar a animação
});

// Revela os elementos com animação
animate.reveal(".nav"); // Navbar
animate.reveal(".home-img img", { origin: "right" }); // Imagem da home (da direita)

// -------------------- DROPDOWN MENU --------------------
document.querySelector('.dropdown-btn').addEventListener('click', () => {
    const menu = document.getElementById('cars-menu'); // Dropdown de carros
    // Alterna entre mostrar e esconder o menu
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});
const toggleBtn = document.getElementById('togglePlans');
const plansContainer = document.getElementById('plansContainer');

toggleBtn.addEventListener('click', () => {
  if (plansContainer.style.display === 'flex') {
    plansContainer.style.display = 'none';
    toggleBtn.textContent = 'Conhecer Plano';
  } else {
    plansContainer.style.display = 'flex';
    toggleBtn.textContent = 'Fechar Planos';
  }
});

