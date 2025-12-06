// script.js - Comportamento: carrega data.json, renderiza serviços e controla formulário e menu

document.addEventListener('DOMContentLoaded', () => {
    // Ano no footer
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Menu mobile
    const menuBtn = document.getElementById('menuBtn');
    const nav = document.getElementById('nav');
    
    if (menuBtn && nav) {
        menuBtn.addEventListener('click', () => {
            nav.classList.toggle('open');
            const isOpen = nav.classList.contains('open');
            menuBtn.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
            menuBtn.textContent = isOpen ? '✕' : '☰';
        });

        // Fechar menu ao clicar em um link
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('open');
                menuBtn.setAttribute('aria-label', 'Abrir menu');
                menuBtn.textContent = '☰';
            });
        });
    }

    // Carregar serviços a partir de data.json
    fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar dados');
            }
            return response.json();
        })
        .then(data => {
            if (data.services && Array.isArray(data.services)) {
                renderServices(data.services);
            } else {
                console.error('Formato de dados inválido');
                showError('Erro ao carregar serviços. Por favor, recarregue a página.');
            }
        })
        .catch(err => {
            console.error('Erro ao carregar serviços:', err);
            showError('Erro ao carregar serviços. Por favor, verifique sua conexão e recarregue a página.');
        });

    // Função para renderizar serviços
    function renderServices(services) {
        const grid = document.getElementById('servicesGrid');
        if (!grid) {
            console.error('Elemento servicesGrid não encontrado');
            return;
        }

        grid.innerHTML = '';

        services.forEach(service => {
            const card = document.createElement('article');
            card.className = 'card';
            card.innerHTML = `
                <h3>${escapeHtml(service.title)}</h3>
                <p>${escapeHtml(service.summary)}</p>
                <p class="range">${escapeHtml(service.range)}</p>
            `;
            grid.appendChild(card);
        });
    }

    // Função para mostrar erro
    function showError(message) {
        const grid = document.getElementById('servicesGrid');
        if (grid) {
            grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--muted);">
                <p>${escapeHtml(message)}</p>
            </div>`;
        }
    }

    // Formulário de contato
    const form = document.getElementById('contactForm');
    const msg = document.getElementById('formMessage');
    
    if (form && msg) {
        form.addEventListener('submit', (ev) => {
            ev.preventDefault();
            
            // Limpar mensagem anterior
            msg.textContent = '';
            msg.classList.remove('show');

            // Obter dados do formulário
            const formData = new FormData(form);
            const name = formData.get('name')?.trim() || '';
            const email = formData.get('email')?.trim() || '';
            const company = formData.get('company')?.trim() || '';
            const phone = formData.get('phone')?.trim() || '';
            const message = formData.get('message')?.trim() || '';

            // Validações
            if (!name || !email || !message) {
                showFormMessage('Por favor, preencha todos os campos obrigatórios.', 'error');
                return;
            }

            // Validação básica de email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showFormMessage('Por favor, insira um endereço de email válido.', 'error');
                return;
            }

            // Simular envio (aqui você integraria com API/Back-end)
            showFormMessage('Mensagem enviada com sucesso! Responderemos em até 2 dias úteis.', 'success');
            
            // Log dos dados (em produção, enviaria para servidor)
            console.log('Dados do formulário:', {
                name,
                email,
                company,
                phone,
                message
            });

            // Limpar formulário após 2 segundos
            setTimeout(() => {
                form.reset();
            }, 2000);
        });
    }

    // Função para mostrar mensagem do formulário
    function showFormMessage(message, type = 'success') {
        if (!msg) return;
        
        msg.textContent = message;
        msg.classList.add('show');
        
        // Remover mensagem após 5 segundos
        setTimeout(() => {
            msg.classList.remove('show');
        }, 5000);
    }

    // Função utilitária para escapar HTML
    function escapeHtml(str) {
        if (typeof str !== 'string') {
            return '';
        }
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        };
        return str.replace(/[&<>"']/g, m => map[m]);
    }

    // Smooth scroll para links de âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animação de entrada para cards (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar cards quando forem criados
    setTimeout(() => {
        document.querySelectorAll('.card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    }, 100);
});
