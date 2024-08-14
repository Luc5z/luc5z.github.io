const projetos = {
    denuncieaqui: {
      titulo: 'Denuncie Aqui!',
      foto: 'images/projects/denuncieaqui.png',
      video: 'https://www.youtube.com/embed/djc54DXraRo',
      descricao: 'Sistema de denúncias de descarte irregular e desmatamento para a COP30 desenvolvido em Django, criado por mim, Dival Lucas.',
      verOnline: '',
      repositorio: '',
    },

    alvaro_simulator: {
      titulo: 'Alvaro Simulator (2D Game)',
      foto: 'images/projects/alvaro_simulator.png',
      descricao: '"Alvaro Simulator" é um jogo criado com o intuito de ensinar códigos CSS para programadores iniciantes.',
      verOnline: 'https://luc5z.github.io/game',
      repositorio: 'https://github.com/Luc5z/game',
    },

    calculadora: {
        titulo: 'Calculadora Científica',
        foto: 'images/projects/calculadora.png',
        descricao: 'Calculadora científica do Bob Esponja funcional',
        verOnline: 'https://luc5z.github.io/calculadora', 
        repositorio: 'https://github.com/Luc5z/calculadora',
      },

    medlife: {
        titulo: 'MedLife',
        foto: 'images/projects/medlife.png',
        video: 'https://youtube.com/embed/FFpjvcQ3yg0',
        descricao: 'Sistema desenvolvido em Django para Web que simula um site de clínica laboratorial, criado por mim, Dival Lucas.',
        verOnline: '',
        repositorio: 'https://github.com/Luc5z/MedLife',
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

  function carregarProjetos() {
    const container = document.getElementById('feed');
    let htmlContent = '';

    for (const chave in projetos) {
        if (projetos.hasOwnProperty(chave)) {
            const projeto = projetos[chave];

            htmlContent += `
                <div class="project_description">
                    <div class="project" onclick="abrirProjeto('${chave}')" style="background-image: url(${projeto.foto}); background-size: cover; background-repeat: no-repeat; cursor: pointer;">
                    </div>
                    <h2>${projeto.titulo}</h2>
                </div>
            `;
        }
    }

    container.innerHTML = htmlContent;
}

  function abrirProjeto(idProjeto) {
    const projeto = projetos[idProjeto];
    document.getElementById('modalTitle').innerText = projeto.titulo;
    document.getElementById('modalDescription').innerText = projeto.descricao;
    const linkRepositorio = document.getElementById('modalRepositorio');
    linkRepositorio.href = projeto.repositorio; 

    if (!projeto.repositorio){
    linkRepositorio.style.display = 'none';
    }

    if (!projeto.verOnline){
    const linkVerOnlineModal = document.getElementById('modalVerOnline');
    linkVerOnlineModal.style.display = 'none';
    }

    if (projeto.verOnline) {
      const video = document.getElementById('video');
      video.style.display = 'none';
      const fotoProjeto = document.getElementById('modalImage');
      fotoProjeto.style.display = 'block';
      fotoProjeto.src = projeto.foto;

      const linkVerOnlineModal = document.getElementById('modalVerOnline');
      linkVerOnlineModal.style.display = 'block';
      linkVerOnlineModal.href = projeto.verOnline;
    }

    else {
      const img = document.getElementById('modalImage');
      img.style.display = 'none';

      const video = document.getElementById('video');
      video.style.display = 'block';
      video.src = projeto.video;
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

window.onload = carregarProjetos;