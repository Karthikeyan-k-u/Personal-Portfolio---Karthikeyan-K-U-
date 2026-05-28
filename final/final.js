 /* Theme Toggle */
        const themeBtn = document.getElementById('themeToggle');
        let isLight = false;
        themeBtn.addEventListener('click', () => {
            isLight = !isLight;
            document.body.classList.toggle('light', isLight);
            themeBtn.textContent = isLight ? '🌙 Dark' : '☀ Light';
        });

        /* Skills */
        const skills = [
            { name: 'Java & OOP', pct: 85 }, { name: 'Front-End Development', pct: 80 },
            { name: 'HTML & CSS', pct: 90 }, { name: 'JavaScript', pct: 75 },
            { name: 'Python', pct: 78 }, { name: 'UI/UX Design', pct: 72 },
            { name: 'Responsive Design', pct: 82 }, { name: 'Java Swing (GUI)', pct: 70 },
            { name: 'Problem Solving', pct: 88 }, { name: 'AI Tools', pct: 85 },
        ];
        const skillsGrid = document.getElementById('skillsGrid');
        skills.forEach((s, i) => {
            const el = document.createElement('div');
            el.className = 'skill-item reveal';
            el.style.transitionDelay = (i * 0.055) + 's';
            el.innerHTML = `<div class="skill-header"><span class="skill-name">${s.name}</span><span class="skill-pct">${s.pct}%</span></div><div class="skill-bar-bg"><div class="skill-bar-fill" data-pct="${s.pct}"></div></div>`;
            skillsGrid.appendChild(el);
        });

        /* Scroll Reveal */
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    entry.target.querySelectorAll('.skill-bar-fill').forEach(b => { b.style.width = b.dataset.pct + '%'; });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        /* Project Filter */
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const filter = btn.dataset.filter;
                document.querySelectorAll('#projectsGrid .project-card').forEach(card => {
                    const match = filter === 'all' || card.dataset.cat === filter;
                    card.classList.toggle('hidden', !match);
                });
            });
        });

        /* Contact Validation */
        document.getElementById('contactForm').addEventListener('submit', e => {
            e.preventDefault();
            const name = document.getElementById('nameField').value.trim();
            const email = document.getElementById('emailField').value.trim();
            const msg = document.getElementById('msgField').value.trim();
            const ne = document.getElementById('nameError');
            const ee = document.getElementById('emailError');
            const me = document.getElementById('msgError');
            ne.textContent = ee.textContent = me.textContent = '';
            let valid = true;
            if (!name) { ne.textContent = 'Please enter your name.'; valid = false; }
            if (!email) { ee.textContent = 'Please enter your email.'; valid = false; }
            else if (!email.includes('@') || !email.includes('.')) { ee.textContent = 'Please enter a valid email address.'; valid = false; }
            if (!msg) { me.textContent = 'Please write a message.'; valid = false; }
            if (valid) {
                document.getElementById('contactForm').style.display = 'none';
                document.getElementById('formSuccess').style.display = 'block';
            }
        });