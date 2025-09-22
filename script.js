async function carregarDados(){
  try {
    const resposta = await fetch('data.json');
    const data = await resposta.json();

    const categorias = document.querySelectorAll('.category');

    data.forEach((item, index) => {
      const categoriaDiv = categorias[index];

      const img = categoriaDiv.querySelector('img');
      const name = categoriaDiv.querySelector('.name');
      const score = categoriaDiv.querySelector('.score');

      img.src = item.icon;
      name.textContent = item.category;
      score.innerHTML = `${item.score} <span>/ 100</span>`;
    });

  } catch (erro) {
    console.error("Erro ao carregar os dados:", erro);
  }
}

carregarDados();