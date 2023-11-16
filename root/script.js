        const themeToggle = document.getElementById('theme-toggle');
        const lightIcons = document.querySelectorAll('.light-icon');
        const darkIcons = document.querySelectorAll('.dark-icon');
        const body = document.body;
        const header = document.querySelector('header');
        const nav = document.querySelector('nav');
        const linkInicio = document.querySelector('nav h1 a');

        document.documentElement.classList.add('scroll-smooth');

        // Função para alternar o tema
        function toggleTheme() {
            body.classList.toggle('dark-theme');
            header.classList.toggle('dark-theme');
            nav.classList.toggle('dark-theme');

            // Alternar visibilidade dos ícones
            lightIcons.forEach(icon => icon.classList.toggle('hidden'));
            darkIcons.forEach(icon => icon.classList.toggle('hidden'));
        }

        // Lidar com o clique no botão de alternar tema
        themeToggle.addEventListener('click', toggleTheme);