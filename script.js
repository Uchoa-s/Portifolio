const projetos = [
  {
    nome: "Meu Portifólio",
    descricao: "Painel de Projetos Profissionais",
    link: "https://github.com/Uchoa-s/Portifolio/tree/3059d081fa608de214932d2bbb6da5db2a451506/Portif%C3%B3lio"
  },
];

const container = document.getElementById("lista-projetos");

projetos.forEach(projeto => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <h3>${projeto.nome}</h3>
    <p>${projeto.descricao}</p>
    <a href="${projeto.link}" target="_blank">Ver projeto</a>
  `;

  container.appendChild(card);
});
