const projetos = {
    alvaro_simulator: {
      titulo: 'Alvaro Simulator (2D Game)',
      foto: 'images/projects/alvaro_simulator.png',
      descricao: 'Descrição do Alvaro Simulator.',
      verOnline: 'https://luc5z.github.io/game' 
    },

    calculadora: {
        titulo: 'Calculadora Científica',
        foto: 'images/projects/calculadora.png',
        descricao: 'Descrição da calculadora.',
        verOnline: 'https://luc5z.github.io/calculadora' 
      },
    
  };

  function mostrarDiv(div) {
    document.querySelector('.feed').style.display = 'none';
    document.querySelector('.certificate').style.display = 'none';
    document.querySelector('.technology').style.display = 'none';
    
    document.querySelector('.' + div).style.display = 'flex';
  }

  function abrirModal(idProjeto) {
    const projeto = projetos[idProjeto];
    document.getElementById('modalTitle').innerText = projeto.titulo;
    document.getElementById('modalDescription').innerText = projeto.descricao;

    const fotoProjeto = document.getElementById('modalImage');
    fotoProjeto.src = projeto.foto;
    const linkVerOnlineModal = document.getElementById('modalVerOnline');
    linkVerOnlineModal.href = projeto.verOnline;

    document.getElementById('myModal').style.display = 'block';
  }

  function fecharModal() {
    document.getElementById('myModal').style.display = 'none';
  }