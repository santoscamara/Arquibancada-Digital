function scrollEsquerda1() {
    const wrapper = document.querySelector("#carrossel1 .produtos-wrapper");
    wrapper.scrollLeft -= 376;
    
}

function scrollDireita1() {
    const wrapper = document.querySelector("#carrossel1 .produtos-wrapper");
    wrapper.scrollLeft += 376;
    
}

function scrollEsquerda2() {
    const wrapper = document.querySelector("#carrossel2 .produtos-wrapper");
    wrapper.scrollLeft -= 376;
    
}

function scrollDireita2() {
    const wrapper = document.querySelector("#carrossel2 .produtos-wrapper");
    wrapper.scrollLeft += 376;
    
}

function scrollEsquerda3() {
    const wrapper = document.querySelector("#carrossel3 .produtos-wrapper");
    wrapper.scrollLeft -= 376;
    
}

function scrollDireita3() {
    const wrapper = document.querySelector("#carrossel3 .produtos-wrapper");
    wrapper.scrollLeft += 376;
    
}

function scrollEsquerda4() {
    const wrapper = document.querySelector("#carrossel4 .produtos-wrapper");
    wrapper.scrollLeft -= 376;
    
}

function scrollDireita4() {
    const wrapper = document.querySelector("#carrossel4 .produtos-wrapper");
    wrapper.scrollLeft += 376;
    
}

function filtrarProdutosPorCheckbox(carrosselId) {
  const carrossel = document.getElementById(carrosselId);
  const produtos = carrossel.querySelectorAll('.produto-detalhes');

  // Pega todos os checkboxes selecionados
  const checkboxes = document.querySelectorAll('input[name="time"]:checked');
  const timesSelecionados = Array.from(checkboxes).map(cb => cb.value);

  produtos.forEach(produto => {
    // Se nenhum filtro estiver selecionado, mostra todos
    if(timesSelecionados.length === 0) {
      produto.style.display = 'block';
    } else {
      // Mostra o produto se o time dele estiver selecionado
      produto.style.display = timesSelecionados.includes(produto.dataset.time) ? 'block' : 'none';
    }
  });
}

// Adiciona evento aos checkboxes para filtrar quando mudarem
const checkboxes = document.querySelectorAll('input[name="time"]');
checkboxes.forEach(cb => {
  cb.addEventListener('change', () => filtrarProdutosPorCheckbox('carrossel1'));
  cb.addEventListener('change', () => filtrarProdutosPorCheckbox('carrossel2'));
  cb.addEventListener('change', () => filtrarProdutosPorCheckbox('carrossel3'));
  cb.addEventListener('change', () => filtrarProdutosPorCheckbox('carrossel4'));
});