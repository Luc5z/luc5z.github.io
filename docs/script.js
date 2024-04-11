
const projetos = {
    alvaro_simulator: {
      titulo: 'Alvaro Simulator (2D Game)',
      foto: 'images/projects/alvaro_simulator.png',
      descricao: 'Descrição do Alvaro Simulator.',
      verOnline: 'https://luc5z.github.io/game',
      tipo: 'foto',
    },

    calculadora: {
        titulo: 'Calculadora Científica',
        foto: 'images/projects/calculadora.png',
        descricao: 'Descrição da calculadora.',
        verOnline: 'https://luc5z.github.io/calculadora', 
        tipo: 'foto',
      },

    medlife: {
        titulo: 'MedLife',
        foto: 'images/projects/calculadora.png',
        video: 'images/projects/medlife.mp4',
        descricao: 'Descrição da calculadora.',
        verOnline: '',
        tipo: 'video',
      },
  };
  const certificados = {
    sql: {
      foto: 'images/certificates/curso_sql.jpg',
    },
    linux: {
      foto: 'images/certificates/curso_linux.jpg',
    },
    docker: {
      foto: 'images/certificates/curso_docker.jpg',
    },
    agil: {
      foto: 'images/certificates/curso_agil.jpg',
    },
    bigData: {
      foto: 'images/certificates/certificado-big-data.jpg',
    },
    git: {
      foto: 'images/certificates/curso_git.jpg',
    },
    ingles: {
      foto: 'images/certificates/ingles.jpg',
    },
    cloudQuest: {
      foto: 'images/certificates/aws-cloud-quest-cloud-practitioner.png',
    },
    accreditationTechnical: {
      foto: 'images/certificates/aws-partner-accreditation-technical.png',
    },
    cloudEconomics: {
      foto: 'images/certificates/aws-partner-cloud-economics-accreditation.png',
    },
    salesAccreditation: {
      foto: 'images/certificates/aws-partner-sales-accreditation-business.png',
    },
};

  function mostrarModalSobreMim() {
    document.getElementById('myModalSobreMim').style.display = 'block';
  }
  
  function fecharModalSobreMim() {
    document.getElementById('myModalSobreMim').style.display = 'none';
  }
  

  function trocarAba(div) {
    document.querySelector('.feed').style.display = 'none';
    document.querySelector('.certificate').style.display = 'none';
    document.querySelector('.technology').style.display = 'none';
    
    document.querySelector('.' + div).style.display = 'flex';
  }

  function abrirProjeto(idProjeto) {
    const projeto = projetos[idProjeto];
    document.getElementById('modalTitle').innerText = projeto.titulo;
    document.getElementById('modalDescription').innerText = projeto.descricao;

    if (projeto.tipo == 'foto') {
      const video = document.getElementById('video');
      video.style.display = 'none';
      const fotoProjeto = document.getElementById('modalImage');
      fotoProjeto.style.display = 'block';
      fotoProjeto.src = projeto.foto;

      const linkVerOnlineModal = document.getElementById('modalVerOnline');
      linkVerOnlineModal.href = projeto.verOnline;
    }

    else if (projeto.tipo == 'video'){
      const img = document.getElementById('modalImage');
      img.style.display = 'none';

      const videoprojeto = document.getElementById('source');
      const video = document.getElementById('video');
      video.style.display = 'block';
      videoprojeto.src = projeto.video;

      const linkVerOnlineModal = document.getElementById('modalVerOnline');
      linkVerOnlineModal.style.display = 'none';

    }


    document.getElementById('myModal').style.display = 'block';
  }

  function fecharModal() {
    document.getElementById('myModal').style.display = 'none';
  }

  function abrirCertificado(idCertificado){
    const certificado = certificados[idCertificado];
    const fotoCertificado = document.getElementById('fotoCertificado');
    fotoCertificado.src = certificado.foto


    document.getElementById('divCertificado').style.display = 'block';
  }

  function fecharCertificado(){
    document.getElementById('divCertificado').style.display = 'none';
  }
