// ===========================
// Service data
// ===========================
const services = [
    {
        title: 'Pesawat Uap dan Bejana Tekanan',
        description:`Pesawat Uap dan Bejana Tekan memiliki potensi bahaya yang sangat besar jika tidak dirancang, dioperasikan, atau dirawat dengan benar. bahaya ini bisa menyebabkan kerusakan peralatan, cedera serius, bahkan kematian serta kerugian material.
        <p>Pemeriksaan dan pengujian PUBT adalah serangkaian kegiatan teknis yang di lakukan untuk memastikan bahwa pesawat uap dan bejana tekan aman untuk dioperasikan sesuai dengan standar keselamatan yang berlaku.</p>
        <p>Jenis Pesawat Uap dan bejana tekan :
        - Ketel Uap              - Bejana Tekan
        - Bejana Uap (Strelizer) - Pipa Bertekanan.
        - BPV                    - Tangki Timbun</p>
        <p>Dasar Hukum :
        UU Uap tahun 1930
        UU Nomor 1 tahun 1970 mengenai keselamatan kerja
        Pesawat Uap Tahun 1930
        Permen Nomor 1 / Men / 1982 mengenai Bejana Tekan
        Permen Nomor 1 / Men / 1988 mengenai Klasifikasi &
        Syarat-syarat Operator dari Pesawat Uap</p>
        `
    },
    {
        title: 'Pesawat Angkat Dan Pesawat Angkut',
        description: `<p>Dalam Konteks K3 (Keselamatan dan Kesehatan Kerja) Pesawat Angkat dan Pesaat Angkut adalah peralatan yang digunakan untuk mengangkat, memindahkan, atau mengangkut barang maupun orang, yang penggunaannya memiliki potensi bahaya tinggi jika tidak memenuhi standar keselamatan.</p>
        <p>Jenis Pesawat Angkat dan Pesawat Angkut :
        - Tower Crane - Conveyor - Tractor
        - Excavator - Wheel Loader - Crawler Crane
        - Forklift - Overhead Crane - Boom Lift</p>
        <p>Dasar Hukum :
        - UU Nomor 1 tahun 1970 mengenai keselamatan kerja
        - Permenaker 08 Tahun 2020</p>
        `
    },
    {
        title: 'Pesawat Tenaga dan Produksi',
        description: `<p>Pesawat Tenaga adalah alat atau mesin yang menghasilkan dan atau memindahkan tenaga untuk mendukung proses kerja, terutama tenaga mekanuk, listrik, uap atau hidrolik</p>
        <p>Pesawat Produksi adalah mesin atau alat yang digunakan secara langsung dalam proses produksi barang, umumnya mesin ini mengubah bahan mentah menjadi barang jadi atau setengah jadi.</p>
        <p>Jenis Pesawat Tenaga dan Produksi:
        - Penggerak Mula 
        - Transmisi tenaga mekanik 
        - Tanur
        - Mesin Perkakas dan Produksi</p>
        <p>Dasar Hukum:
        Dasar hukum terkait pesawat tenaga dan pesawat produksi dalam konteks Keselamatan dan Kesehatan Kerja (K3) di Indonesia sangat penting untuk memastikan penggunaan alat-alat tersebut aman bagi pekerja dan lingkungan kerja.
        Berikut adalah dasar hukum utama yang mengatur K3 Pesawat Tenaga dan Produksi:
        - UU No.1 Tahun 1970
        - Permenaker 38 Tahun 2016</p>
        `
    },
    {
        title: 'Instalasi Listrik & Penyalur Petir',
        description: `<p>Pemeriksaan dan pengujian K3 instalasi listrik merupakan keharusan mutlak dalam sistem manajemen Keselamatan dan Kesehatan Kerja (K3), karena instalasi listrik memiliki potensi bahaya tinggi yang bisa menyebabkan kecelakaan serius hingga kematian, serta kerusakan aset dan kebakaran besar.</p>
        <p>Jenis Instalasi Listrik & Penyalur Petir : 
        - Instalasi Listrik
        - Instalasi Penyalur Petir</p>
        <p>Pemeriksaan dan pengujian K3 instalasi listrik merupakan keharusan mutlak dalam sistem manajemen Keselamatan dan Kesehatan Kerja (K3), karena instalasi listrik memiliki potensi bahaya tinggi yang bisa menyebabkan kecelakaan serius hingga kematian, serta kerusakan aset dan kebakaran besar.</p>
        <p>Dasar Hukum:
        Permenaker No.33 tahun 2015 Tentang instalasi Listrik
        - Pasal 10
        - Pasal 9 Ayat 3
        - Pasal 11 Ayat 1</p>
        `
    },
    {
        title: 'Instalasi Proteksi Kebakaran',
        description: `<p>Metode pemeriksaan dan pengujian instalasi proteksi kebakaran bertujuan untuk memastikan bahwa sistem tersebut berfungsi dengan baik dan siap digunakan saat keadaan darurat, serta memenuhi standar K3 dan peraturan teknis yang berlaku. Riksa Uji Proteksi Kebakaran dilakukan oleh tenaga ahli spesialis di bidangnya, pada umumnya riksa uji sebagaimana dilakukan sesuai dengan prosedur dan tidak mengganggu aktivitas gedung.</p>
        <p>Memastikan bahwa seluruh sistem dan peralatan proteksi kebakaran berfungsi secara optimal dan siap digunakan saat terjadi kebakaran atau keadaan darurat. Menilai kondisi teknis dari instalasi dan komponen proteksi kebakaran, baik dari segi fisik, kinerja, maupun keamanan operasional. Menjadi bagian dari upaya pencegahan kecelakaan kerja dan perlindungan aset.</p>
        <p>Jenis Instalasi Proteksi Kebakaran:
        - Instalasi Hydrant
        - Instalasi Alarm Kebakaran Otomatik
        - Instalasi Floading System<p>
        <p>Dasar Hukum ;
        - Instruksi Tenaga Kerja No. Ins 11/M/BW/1997</p>
        `
    },
    {
        title: 'Elevator dan Eskalator',
        description: `<p>Eskalator dan elevator merupakan alat angkut vertikal yang digunakan oleh banyak orang setiap hari, terutama di gedung-gedung tinggi, pusat perbelanjaan, stasiun, dan fasilitas umum lainnya</p>
        <p>Risiko seperti terjepit, terjatuh, kegagalan sistem rem, listrik padam, atau kelebihan muatan dapat terjadi apabila tidak dilakukan pemeriksaan secara berkala.</p>
        <p>Jenis Elevator dan Eskalator:
        - Elevator
        - Eskalator
        - Travelator</p>
        <p>Dasar Hukum ;
        - Undang Undang Nomor 1 Tahun 1970
        - Peraturan Menteri Tenaga Kerja nomor 6 Tahun 2017
        - Peraturan Menteri Tenaga Kerja Nomor 3 Tahun 2017</p>
        `
    }
];

// ===========================
// Mobile menu toggle
// ===========================
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking nav links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ===========================
// Banner carousel
// ===========================
let currentSlide = 0;
const slides = document.querySelectorAll('.banner-slide');
const totalSlides = slides.length;
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const indicatorsContainer = document.getElementById('carouselIndicators');

// Create indicators
for (let i = 0; i < totalSlides; i++) {
    const indicator = document.createElement('div');
    indicator.classList.add('indicator');
    if (i === 0) indicator.classList.add('active');
    indicator.addEventListener('click', () => goToSlide(i));
    indicatorsContainer.appendChild(indicator);
}

const indicators = document.querySelectorAll('.indicator');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Auto-advance carousel
let carouselInterval = setInterval(nextSlide, 5000);

// Pause auto-advance on hover
const bannerSection = document.querySelector('.banner-section');
bannerSection.addEventListener('mouseenter', () => {
    clearInterval(carouselInterval);
});

bannerSection.addEventListener('mouseleave', () => {
    carouselInterval = setInterval(nextSlide, 5000);
});

// ===========================
// Service modal
// ===========================
const modal = document.getElementById('serviceModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalClose = document.getElementById('modalClose');
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach((card, index) => {
    const learnMoreBtn = card.querySelector('.learn-more-btn');
    learnMoreBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openModal(index);
    });
});

function openModal(serviceIndex) {
    const service = services[serviceIndex];
    modalTitle.textContent = service.title;
    modalDescription.innerHTML = service.description.replace(/\n/g, '<br>');
    modal.classList.add('active');
}

function closeModal() {
    modal.classList.remove('active');
}

modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// ===========================
// Smooth scroll with offset
// ===========================
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Header scroll effect
// ===========================
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(242, 140, 40, 0.95)';
    } else {
        header.style.background = 'rgba(242, 140, 40, 0.95)';
    }
});

// ===========================
// Outer gallery carousel (auto-slide + swipe + drag support)
// ===========================
const galleryTrack = document.querySelector('.outer-gallery-track');
const gallerySlides = Array.from(galleryTrack.children);
const galleryNextBtn = document.querySelector('.gallery-nav.next');
const galleryPrevBtn = document.querySelector('.gallery-nav.prev');

let galleryIndex = 0;
let galleryInterval;
let isDragging = false;
let startX = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID;

// Update slide position
function updateGallery() {
  galleryTrack.style.transition = 'transform 0.6s ease';
  galleryTrack.style.transform = `translateX(-${galleryIndex * 100}%)`;
}

// Next / prev buttons
galleryNextBtn.addEventListener('click', () => {
  galleryIndex = (galleryIndex + 1) % gallerySlides.length;
  updateGallery();
  resetAutoSlide();
});

galleryPrevBtn.addEventListener('click', () => {
  galleryIndex = (galleryIndex - 1 + gallerySlides.length) % gallerySlides.length;
  updateGallery();
  resetAutoSlide();
});

// Auto-slide every 5 seconds
function startAutoSlide() {
  galleryInterval = setInterval(() => {
    galleryIndex = (galleryIndex + 1) % gallerySlides.length;
    updateGallery();
  }, 5000);
}

function stopAutoSlide() {
  clearInterval(galleryInterval);
}

function resetAutoSlide() {
  stopAutoSlide();
  startAutoSlide();
}

// Touch support (mobile)
galleryTrack.addEventListener('touchstart', e => startDrag(e.touches[0].clientX));
galleryTrack.addEventListener('touchmove', e => moveDrag(e.touches[0].clientX));
galleryTrack.addEventListener('touchend', e => endDrag(e.changedTouches[0].clientX));

// Mouse drag support (desktop)
galleryTrack.addEventListener('mousedown', e => startDrag(e.clientX));
galleryTrack.addEventListener('mousemove', e => moveDrag(e.clientX));
galleryTrack.addEventListener('mouseup', e => endDrag(e.clientX));
galleryTrack.addEventListener('mouseleave', () => {
  if (isDragging) endDrag(startX);
});

// Dragging logic
function startDrag(x) {
  isDragging = true;
  startX = x;
  stopAutoSlide();
  galleryTrack.style.transition = 'none';
}

function moveDrag(x) {
  if (!isDragging) return;
  const diff = x - startX;
  currentTranslate = -galleryIndex * galleryTrack.offsetWidth + diff;
  galleryTrack.style.transform = `translateX(${currentTranslate}px)`;
}

function endDrag(x) {
  if (!isDragging) return;
  isDragging = false;
  const diff = x - startX;

  if (diff < -50) {
    galleryIndex = (galleryIndex + 1) % gallerySlides.length;
  } else if (diff > 50) {
    galleryIndex = (galleryIndex - 1 + gallerySlides.length) % gallerySlides.length;
  }

  updateGallery();
  startAutoSlide();
}

// Pause auto-slide on hover
galleryTrack.addEventListener('mouseenter', stopAutoSlide);
galleryTrack.addEventListener('mouseleave', startAutoSlide);

// Initialize
updateGallery();
startAutoSlide();
