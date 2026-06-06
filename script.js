// 1. AOS Animasyonlarını Başlat
AOS.init({
    duration: 800,
    once: true
});

// 2. Typed.js - Daktilo Efekti
var typed = new Typed('#typed', {
    strings: ['Bugünden Kodluyoruz.', 'Modern Çözümler Sunuyoruz.', 'Geleceği İnşa Ediyoruz.'],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true,
    backDelay: 2000
});

// 3. Tek Sayfa Mimarı (SPA) Sayfa Değiştirme Fonksiyonu
const sections = document.querySelectorAll('.portfolio-section');
const navItems = document.querySelectorAll('.nav-links a.nav-item');

const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px', // Seksiyon ekranın ortasındayken tetiklensin
    threshold: 0
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const activeId = entry.target.getAttribute('id');
            
            // Menü durumunu güncelle
            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === `#${activeId}`) {
                    item.classList.add('active');
                }
            });

            // Eğer "Hakkımda" kısmına geldiyse gelişim barlarını doldur
            if (activeId === 'hakkimda') {
                animateGoalBars();
            }
        }
    });
}, observerOptions);

sections.forEach(section => {
    sectionObserver.observe(section);
});

// 4. İlerleme Çubuklarını Animasyonlandırma
function animateGoalBars() {
    document.querySelectorAll('.goal-bar-fill').forEach(bar => {
        const percent = bar.getAttribute('data-percent');
        bar.style.width = percent + '%';
    });
}

// 5. Üst İlerleme Çubuğu & Header Küçülme Kontrolü & Mouse Aura Koordinat Takibi
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    const progressBar = document.getElementById('progress-bar');
    
    if (window.scrollY > 80) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (window.scrollY / windowHeight) * 100;
    progressBar.style.width = scrollPercentage + '%';
});

// Mouse Aura Işığını Güncelle
window.addEventListener('mousemove', (e) => {
    const root = document.documentElement;
    root.style.setProperty('--mouse-x', `${e.clientX}px`);
    root.style.setProperty('--mouse-y', `${e.clientY}px`);
});

// 6. Mobil Menü Toggle Butonu
const mobileMenuBtn = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Mobil menü açıkken tıklanan link menüyü kapatsın
navItems.forEach(item => {
    item.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// 7. İnteraktif Terminal Komut Satırı Mantığı
const terminalContent = document.getElementById('terminal-content');
const terminalInput = document.getElementById('terminal-input');

terminalContent.addEventListener('click', () => {
    terminalInput.focus();
});

terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const rawCommand = terminalInput.value.trim();
        const command = rawCommand.toLowerCase();
        
        if (command === '') return;

        appendTerminalLine(`guest@egesul:~$ ${rawCommand}`, 't-command-echo');

        switch (command) {
            case 'help':
                appendTerminalLine('Kullanılabilir Komutlar: about, skills, goals, clear', 't-output');
                break;
            case 'about':
                appendTerminalLine('Ege Sül, 13 Eylül 2006 doğumlu. Bilgisayar Programcılığı öğrencisi. Finansal bağımsızlığa ve ileri düzey backend geliştiriciliğe odaklı.', 't-output');
                break;
            case 'skills':
                appendTerminalLine('Aktif Teknoloji Havuzu: C#/.NET Core, MS SQL Server, JavaScript (ES6+), CSS/HTML, WordPress & Elementor.', 't-output');
                break;
            case 'goals':
                appendTerminalLine('Gelişim Hedefleri: YKS Akademik geçiş sınavı hazırlığı, C# Yazılım mimarlığı tasarımı ve kurumsal sistem entegrasyonu.', 't-output');
                break;
            case 'clear':
                const lines = terminalContent.querySelectorAll('.terminal-line');
                lines.forEach(line => {
                    if (line.id !== 'last-terminal-line') {
                        line.remove();
                    }
                });
                break;
            default:
                appendTerminalLine(`Hata: '${rawCommand}' komutu bulunamadı. Kullanılabilir komutlar için 'help' yazın.`, 't-error');
        }

        terminalInput.value = '';
        terminalContent.scrollTop = terminalContent.scrollHeight;
    }
});

function appendTerminalLine(text, className) {
    const newLine = document.createElement('div');
    newLine.className = 'terminal-line';
    
    if (className === 't-command-echo') {
        newLine.innerHTML = `<span class="t-prompt">guest@egesul:~$</span> <span class="t-command">${text.replace('guest@egesul:~$ ', '')}</span>`;
    } else if (className === 't-error') {
        newLine.innerHTML = `<span style="color: #ff5f56; font-weight: bold;">[!]</span> <span style="color: #ff5f56;">${text}</span>`;
    } else {
        newLine.innerHTML = `<span class="t-output">${text}</span>`;
    }

    const inputLine = terminalContent.querySelector('.t-input-line');
    terminalContent.insertBefore(newLine, inputLine);
}

// 8. ARKA PLAN: SİBER CONSTELLATION PLEXUS & VERİ AKIŞI (Parıldayan Yuvarlak Toplar Sürümü)
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

let nodes = [];
let packets = [];
let mouseNode = { x: null, y: null, radius: 180 };

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initConstellation();
}
window.addEventListener('resize', resizeCanvas);

window.addEventListener('mousemove', (e) => {
    mouseNode.x = e.clientX;
    mouseNode.y = e.clientY;
});

window.addEventListener('mouseleave', () => {
    mouseNode.x = null;
    mouseNode.y = null;
});

// Ağ Düğümleri Tanımı (Küreler / Parıldayan Toplar)
class CyberNode {
    constructor(layer) {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.baseX = this.x;
        this.baseY = this.y;
        
        this.layer = layer; // 1: Arka Plan, 2: Orta Plan, 3: Ön Plan (Parallax katmanları)
        
        // Küresel Top fizik özellikleri
        if (layer === 1) {
            this.radius = Math.random() * 2 + 1; // Küçük toplar
            this.speedX = (Math.random() * 0.2) - 0.1;
            this.speedY = (Math.random() * 0.2) - 0.1;
            this.alpha = Math.random() * 0.25 + 0.15;
        } else if (layer === 2) {
            this.radius = Math.random() * 3 + 2; // Orta boy toplar
            this.speedX = (Math.random() * 0.4) - 0.2;
            this.speedY = (Math.random() * 0.4) - 0.2;
            this.alpha = Math.random() * 0.4 + 0.25;
        } else {
            this.radius = Math.random() * 4.5 + 3.5; // Büyük parıldayan ön plan topları
            this.speedX = (Math.random() * 0.6) - 0.3;
            this.speedY = (Math.random() * 0.6) - 0.3;
            this.alpha = Math.random() * 0.5 + 0.4;
        }
        
        this.vx = 0;
        this.vy = 0;
        this.ease = 0.08; // Spring (yaylanma) hızı
    }

    draw() {
        const nodeColor = getComputedStyle(document.documentElement).getPropertyValue('--sari').trim();
        
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = nodeColor;
        ctx.globalAlpha = this.alpha;
        
        ctx.shadowBlur = this.layer === 3 ? 15 : 8;
        ctx.shadowColor = nodeColor;
        
        ctx.fill();
        ctx.restore();
    }

    update() {
        this.baseX += this.speedX;
        this.baseY += this.speedY;

        if (this.baseX < 0 || this.baseX > window.innerWidth) this.speedX = -this.speedX;
        if (this.baseY < 0 || this.baseY > window.innerHeight) this.speedY = -this.speedY;

        if (mouseNode.x !== null && mouseNode.y !== null) {
            const dx = this.baseX - mouseNode.x;
            const dy = this.baseY - mouseNode.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < mouseNode.radius) {
                const force = (mouseNode.radius - dist) / mouseNode.radius;
                const targetX = this.baseX - (dx / dist) * force * 50 * (this.layer * 0.6);
                const targetY = this.baseY - (dy / dist) * force * 50 * (this.layer * 0.6);
                
                this.x += (targetX - this.x) * this.ease;
                this.y += (targetY - this.y) * this.ease;
            } else {
                this.x += (this.baseX - this.x) * this.ease;
                this.y += (this.baseY - this.y) * this.ease;
            }
        } else {
            this.x += (this.baseX - this.x) * this.ease;
            this.y += (this.baseY - this.y) * this.ease;
        }
    }
}

// Veri Akış Paketleri Tanımı (Toplar arası asenkron süzülen parıltılar)
class DataPacket {
    constructor(fromNode, toNode) {
        this.from = fromNode;
        this.to = toNode;
        this.progress = 0;
        this.speed = Math.random() * 0.015 + 0.006;
        this.color = Math.random() > 0.5 ? 'sari' : 'blue';
    }

    draw() {
        const yellowColor = getComputedStyle(document.documentElement).getPropertyValue('--sari').trim();
        const blueColor = getComputedStyle(document.documentElement).getPropertyValue('--neon-blue').trim();
        const activeColor = this.color === 'sari' ? yellowColor : blueColor;

        const x = this.from.x + (this.to.x - this.from.x) * this.progress;
        const y = this.from.y + (this.to.y - this.from.y) * this.progress;

        ctx.save();
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fillStyle = activeColor;
        ctx.shadowBlur = 12;
        ctx.shadowColor = activeColor;
        ctx.globalAlpha = 0.95;
        ctx.fill();
        ctx.restore();
    }

    update() {
        this.progress += this.speed;
        return this.progress >= 1;
    }
}

function initConstellation() {
    nodes = [];
    packets = [];
    
    const isMobile = window.innerWidth < 768;
    const divider = isMobile ? 24000 : 12000;
    const density = Math.floor((window.innerWidth * window.innerHeight) / divider);
    
    for (let i = 0; i < density; i++) {
        const layer = Math.random() > 0.6 ? (Math.random() > 0.7 ? 3 : 2) : 1;
        nodes.push(new CyberNode(layer));
    }
}

function drawConnections() {
    const maxDistance = 140;
    const blueColor = getComputedStyle(document.documentElement).getPropertyValue('--neon-blue').trim();

    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            if (Math.abs(nodes[i].layer - nodes[j].layer) > 1) continue;

            const dx = nodes[i].x - nodes[j].x;
            const dy = nodes[i].y - nodes[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < maxDistance) {
                const opacity = (1 - (dist / maxDistance)) * 0.15 * (nodes[i].layer * 0.5);
                ctx.save();
                ctx.strokeStyle = blueColor;
                ctx.lineWidth = nodes[i].layer === 3 ? 0.8 : 0.4;
                ctx.globalAlpha = opacity;
                ctx.beginPath();
                ctx.moveTo(nodes[i].x, nodes[i].y);
                ctx.lineTo(nodes[j].x, nodes[j].y);
                ctx.stroke();
                ctx.restore();

                if (Math.random() < 0.00015 && packets.length < 25) {
                    packets.push(new DataPacket(nodes[i], nodes[j]));
                }
            }
        }
    }
}

function animateConstellation() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    nodes.forEach(node => {
        node.update();
        node.draw();
    });

    drawConnections();

    for (let i = packets.length - 1; i >= 0; i--) {
        const finished = packets[i].update();
        if (finished) {
            packets.splice(i, 1);
        } else {
            packets[i].draw();
        }
    }

    requestAnimationFrame(animateConstellation);
}

resizeCanvas();
animateConstellation();

// 9. Neon Özelleştirici Kontrol Paneli İşleyişi
const customizerBtn = document.getElementById('customizer-btn');
const customizerPanel = document.getElementById('customizer-panel');

customizerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    customizerPanel.style.display = customizerPanel.style.display === 'flex' ? 'none' : 'flex';
});

document.addEventListener('click', () => {
    customizerPanel.style.display = 'none';
});

customizerPanel.addEventListener('click', (e) => {
    e.stopPropagation();
});

function changeTheme(theme) {
    const root = document.documentElement;
    if (theme === 'classic') {
        root.style.setProperty('--sari', '#FFF400');
        root.style.setProperty('--sari-glow', 'rgba(255, 244, 0, 0.45)');
        root.style.setProperty('--neon-blue', '#00F0FF');
        root.style.setProperty('--neon-blue-glow', 'rgba(0, 240, 255, 0.35)');
    } else if (theme === 'matrix') {
        root.style.setProperty('--sari', '#00FF66');
        root.style.setProperty('--sari-glow', 'rgba(0, 255, 102, 0.45)');
        root.style.setProperty('--neon-blue', '#0d2347');
        root.style.setProperty('--neon-blue-glow', 'rgba(13, 35, 71, 0.35)');
    } else if (theme === 'sunset') {
        root.style.setProperty('--sari', '#FF3366');
        root.style.setProperty('--sari-glow', 'rgba(255, 51, 102, 0.45)');
        root.style.setProperty('--neon-blue', '#FFF400');
        root.style.setProperty('--neon-blue-glow', 'rgba(255, 244, 0, 0.35)');
    }
}

// 10. Proje Modalları İşleyiş Mantığı
function openProjectModal(id) {
    const modal = document.getElementById(`modal-${id}`);
    if (modal) {
        modal.style.display = 'flex';
        setTimeout(() => {
            modal.style.opacity = '1';
            modal.querySelector('.modal-content').style.transform = 'scale(1)';
        }, 10);
    }
}

// Proje Detay Penceresini Kapat
function closeProjectModal(id) {
    const modal = document.getElementById(`modal-${id}`);
    if (modal) {
        modal.style.opacity = '0';
        modal.querySelector('.modal-content').style.transform = 'scale(0.9)';
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }
}

function closeProjectModalOnBg(event, id) {
    if (event.target.id === `modal-${id}`) {
        closeProjectModal(id);
    }
}

// 11. Form Gönderimi Simülasyonu
function handleFormSubmit(event) {
    event.preventDefault();
    const messageBox = document.getElementById('form-message');
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        messageBox.style.display = 'block';
        messageBox.className = 'form-status success';
        messageBox.innerHTML = '<i class="fas fa-check-circle"></i> Mesajınız başarıyla iletildi! En kısa sürede geri dönüş yapacağım.';
        document.getElementById('portfolio-form').reset();
        setTimeout(() => {
            messageBox.style.display = 'none';
        }, 5000);
    } else {
        messageBox.style.display = 'block';
        messageBox.className = 'form-status error';
        messageBox.innerHTML = '<i class="fas fa-exclamation-circle"></i> Lütfen tüm alanları doldurun.';
    }
}
