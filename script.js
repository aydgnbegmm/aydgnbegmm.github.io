/**
 * BEGÜM AYDOĞAN - PORTFOLYO INTERACTIVITY & DATA LOGIC
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Header & Active Navigation Highlight
  const header = document.getElementById('site-header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Scroll Spy
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // 2. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinksList = document.getElementById('nav-links');

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      const isVisible = navLinksList.style.display === 'flex';
      navLinksList.style.display = isVisible ? 'none' : 'flex';
      navLinksList.style.flexDirection = 'column';
      navLinksList.style.position = 'absolute';
      navLinksList.style.top = '76px';
      navLinksList.style.left = '0';
      navLinksList.style.right = '0';
      navLinksList.style.background = 'rgba(7, 11, 19, 0.98)';
      navLinksList.style.padding = '1.5rem';
      navLinksList.style.borderBottom = '1px solid rgba(0, 229, 255, 0.2)';
    });
  }

  // 3. Project Category Filters
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category');
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });

  // 4. In-Depth Project Modals Data (Updated with Standalone Photos & Corrected Info)
  const projectDetails = {
    tulpar: {
      title: "Tulpar Hibrit VTOL İHA Mimarisi",
      subtitle: "TEKNOFEST 2023 Girişim 1.'lik & METU VTOL 2023 1.'lik",
      image: "assets/images/proj_tulpar.png",
      tags: ["VTOL Hibrit İHA", "SolidWorks", "Mekanik Tasarım", "Kalıp Üretimi"],
      content: `
        <h4>Proje Kapsamı & Mühendislik Rolü:</h4>
        <p>Göktürk İHA Ekibi bünyesinde mekanik departman sorumlusu olarak görev aldığım Tulpar projesi, döner kanat ile dikey iniş-kalkış yapıp ardından sabit kanat modunda yüksek hız ve menzile ulaşan hibrit bir VTOL platformudur.</p>
        <h4>Mühendislik Katkıları:</h4>
        <ul>
          <li><strong>TEKNOFEST 2023 Girişimcilik:</strong> Uzay, Havacılık ve Savunma Teknolojileri kategorisinde "En İyi Girişim" ödülü ile 1.'lik.</li>
          <li><strong>METU VTOL 2023:</strong> Görev parkurunu hatasız otonomi ile tamamlayarak Türkiye 1.'liği.</li>
          <li>Kanat ve gövde kilit mekanizmaları, motor kolları mukavemet optimizasyonu ve faydalı yük atış sisteminin SolidWorks ile modellenmesi ve sonlu elemanlar analizleri tarafımdan yapılmıştır.</li>
        </ul>
      `
    },
    sayzek: {
      title: "Hareketli Gemiye Otonom İHA İniş Sistemi",
      subtitle: "SAYZEK Savunma Sanayii Yapay Zeka Yetenek Kümelenmesi & ASELSAN Gölbaşı",
      image: "assets/images/proj_sayzek.png",
      tags: ["LiDAR-Kamera Füzyonu", "Gazebo", "ROS", "Derin Öğrenme"],
      content: `
        <h4>Akademik Tez Kapsamı:</h4>
        <p>Savunma Sanayii Başkanlığı koordinasyonundaki SAYZEK Akademik Tez Programı (ATP) sürecini başarıyla tamamladım. Çalışmada, dalgalı deniz koşullarında hareket eden bir gemi pisti üzerine sabit kanatlı İHA'nın otonom inişi simüle edilmiştir.</p>
        <h4>Mühendislik Detayları:</h4>
        <ul>
          <li>Gazebo ve ROS ortamında 6 serbestlik dereceli dinamik gemi ve uçak modelleri entegre edildi.</li>
          <li>Görsel referans noktaları derin öğrenme ile tespit edilirken, LiDAR verileriyle sensör füzyonu yapılarak santimetre hassasiyetinde bağıl konum kestirimi gerçekleştirildi.</li>
          <li>Savunma Sanayii Başkanlığı davetiyle <strong>ASELSAN Gölbaşı Yerleşkesi</strong> final etkinliğine katılım sağlandı.</li>
          <li>Gösterilen teknik performans ve proje çıktıları doğrultusunda <strong>Selvi Technology Staj Ödülü</strong> kazanıldı.</li>
        </ul>
      `
    },
    asisguard: {
      title: "ASİSGUARD: Gerçek Zamanlı Nesne & İHA Takibi",
      subtitle: "Gömülü Linux, YOLOv8, MAVLink & Radxa Rock 5B",
      image: "assets/images/proj_asisguard.png",
      tags: ["YOLOv8", "OpenCV", "Gömülü Linux", "Kalman Filtresi", "ONNX/NCNN"],
      content: `
        <h4>Staj Çalışmaları & Geliştirilen Sistem:</h4>
        <p>ASİSGUARD Savunma Sanayii bünyesinde 76 iş günü süren uzun dönem stajımda, gömülü sistemler üzerinde gerçek zamanlı çalışan İHA ve insan tespit/takip mimarisi geliştirdim.</p>
        <h4>Kullanılan Teknolojiler & Katkılar:</h4>
        <ul>
          <li><strong>Donanım:</strong> Radxa Rock 5B ve Raspberry Pi 5 üzerinde Debian tabanlı gömülü Linux optimizasyonları.</li>
          <li><strong>Görüntü İşleme:</strong> OpenCV, YOLOv8, Libcamera, GStreamer ve Kalman filtresi ile kararlı hedef takibi.</li>
          <li><strong>Uçuş Entegrasyonu:</strong> Mamba F405 uçuş kontrol kartına UART üzerinden MAVLink protokolü ve DroneKit ile otonom yönlendirme komutları iletildi.</li>
          <li><strong>Model İvmelendirme:</strong> ONNX ve NCNN entegrasyonu ile model çıkarım hızları (FPS) optimize edilerek düşük gecikme sağlandı.</li>
        </ul>
      `
    },
    tomris: {
      title: "Tomris İki Eksenli Hava Savunma Sistemi",
      subtitle: "TEKNOFEST 2025 Hava Savunma Sistemleri Yarışması (ASELSAN)",
      image: "assets/images/proj_tomris.png",
      tags: ["Takım Kaptanı", "ASELSAN", "Pan-Tilt Taret", "Otonom Angajman"],
      content: `
        <h4>Kaptanlık ve Sistem Mimarisi:</h4>
        <p>ASELSAN yürütücülüğündeki yarışmada Göktürk ekibimizin takım kaptanlığını yürüttüm. Tomris; iki eksenli yönlendirilebilir taret mekanizması üzerinden yaklaşan hava hedeflerini otonom tespit, takip ve angaje eden bir hava savunma sistemidir.</p>
        <h4>Sorumluluklar:</h4>
        <ul>
          <li>Ekip organizasyonu, görev dağılımı, iş takvimi ve Kritik Tasarım Raporu'nun (KTR) hazırlanması.</li>
          <li>Atış mekanizmasındaki mekanik gerilmelerin iyileştirilmesi ve servo-motor güç entegrasyonu.</li>
          <li>Ateşe yasak alan tanımlama, acil durdurma ve otonom hedef takibi yazılım mimarisi denetimi.</li>
        </ul>
      `
    },
    savasan: {
      title: "TEKNOFEST Savaşan İHA Telemetri Mimarisi",
      subtitle: "Baykar Sponsorluğunda 557 Takım Arasından Finalistlik",
      image: "assets/images/proj_savasan.png",
      tags: ["Baykar", "5 GHz AP", "Python TCP/IP Soket", "Düşük Gecikmeli Telemetri"],
      content: `
        <h4>Yarışma ve Görev Kapsamı:</h4>
        <p>Baykar Technologies yürütücülüğündeki Savaşan İHA Yarışması'nda Göktürk Ekibi ile 557 takım arasından 92.5 puan alarak finalist olduk ve 10 tam görev uçuşu gerçekleştirdik.</p>
        <h4>Haberleşme & Aviyonik Entegrasyonu:</h4>
        <ul>
          <li>Takım kaptanı olarak Raspberry Pi 5 üzerinde 5 GHz bandında çalışan kapalı devre Access Point mimarisi kurdum.</li>
          <li>Statik IP yapılandırması ve Python TCP/IP soket programlama ile yer kontrol istasyonuna gerçek zamanlı telemetri aktardım.</li>
          <li>Modüler gövde tasarımı sayesinde yarışma sahasında dakikalar içinde kırımsız montaj ve bakım gerçekleştirildi.</li>
        </ul>
      `
    },
    vtol2025: {
      title: "METU ODTÜ VTOL 2025: Görsel Hedef Takip ile 1.'lik",
      subtitle: "Boeing Sponsorluğunda İkinci Şampiyonluk",
      image: "assets/images/proj_vtol2025.png",
      tags: ["Boeing", "Görsel Hedef Takip", "QR & Çember", "Uçuş Yazılımı"],
      content: `
        <h4>Proje Detayı:</h4>
        <p>Boeing sponsorluğunda düzenlenen ve 9.'su gerçekleştirilen ODTÜ VTOL yarışmasında Göktürk Ekibi olarak ikinci kez Türkiye birinciliği kazandık.</p>
        <h4>Geliştirilen Kontrol Mimarisi:</h4>
        <ul>
          <li>Aviyonik sistem entegrasyonu, uçuş yazılımı optimizasyonu ve Image-Based Visual Servoing (IBVS) yaklaşımı.</li>
          <li>Kırmızı çember ve QR kod hedeflerinden elde edilen pozisyon geri beslemesiyle hava aracının rüzgarda dahi hedef üzerinde milimetrik askıda kalması (hover tracking) sağlandı.</li>
        </ul>
      `
    },
    scara: {
      title: "SCARA Robot ile İHA Yakalama Mekanizması",
      subtitle: "Z-System Havacılık ve Uzay Sanayii AR-GE Stajı",
      image: "assets/images/proj_scara.png",
      tags: ["SCARA Robot", "Simulink", "Kinematik & Dinamik", "ARM"],
      content: `
        <h4>AR-GE Çalışması:</h4>
        <p>Z-System Havacılık bünyesinde, iniş yapan İHA'ları güvenle yakalayıp sabitleyen SCARA robotik kol mekanizmasının geliştirilmesinde görev aldım.</p>
        <h4>Yapılanlar:</h4>
        <ul>
          <li>SCARA robotun 3D SolidWorks modellemesi, ters kinematik ve dinamik tork hesapları.</li>
          <li>Sonuçların MATLAB/Simulink ortamına aktarılarak kontrol çevrimlerinin simüle edilmesi.</li>
          <li>ARM tabanlı Yer Kontrol İstasyonu yazılımındaki hataların giderilerek kararlı çalıştırılması.</li>
        </ul>
      `
    },
    tubitak: {
      title: "TÜBİTAK 2209-A: Akıllı Kilit Sistemi",
      subtitle: "Üniversite Öğrencileri Araştırma Projeleri Destekleme Programı",
      image: "assets/images/proj_tubitak.png",
      tags: ["TÜBİTAK 2209-A", "Raspberry Pi Pico", "NFC / RFID", "Wi-Fi & Bluetooth"],
      content: `
        <h4>Proje Amacı:</h4>
        <p>TÜBİTAK 2209-A desteğiyle yürüttüğüm bu projede, fiziksel anahtarlar yerine akıllı telefonlar, RFID/NFC kartlar ve şifre paneliyle kontrol edilen güvenli bir akıllı kilit mimarisi tasarladım.</p>
        <h4>Mühendislik Çıktıları:</h4>
        <ul>
          <li>Raspberry Pi Pico mikrodenetleyicisi üzerinde MicroPython ile gömülü yazılım geliştirildi.</li>
          <li>Devre şeması Fritzing ve KiCad ile tasarlanıp motor sürücü ve güç regülasyon kartı prototipi üretildi.</li>
          <li>Wi-Fi ve BLE bağlantıları üzerinden mobil cihazlarla anlık durum sorgulama ve kilit açma sağlandı.</li>
        </ul>
      `
    },
    manufacturing: {
      title: "İleri İmalat: PLA-LW 3D Baskı Uçak & Epoksi Kompozit Kalıplama",
      subtitle: "Atölye ve Katmanlı İmalat Deneyimi",
      image: "assets/images/proj_mfg.png",
      tags: ["PLA-LW (Hafif Filament)", "Cura / Simplify3D", "Cam Elyaf Epoksi", "Kalıp Tasarımı"],
      content: `
        <h4>İmalat Yetkinlikleri:</h4>
        <p>1.5 yılı aşkın süredir aktif 3D yazıcı (Creality, Ender, Two Trees) kullanımı, kalibrasyonu ve mekanik tamiratı gerçekleştirmekteyim.</p>
        <h4>Üretim Pratikleri:</h4>
        <ul>
          <li>Isı ile genleşerek standart PLA'ya göre %50 ağırlık tasarrufu sağlayan <strong>PLA-LW</strong> filamentiyle modüler İHA kanat ve gövde üretimi.</li>
          <li>Ahşap ve 3D baskı kalıplar üzerine cam elyaf ve epoksi reçine yatırma ile sağlam ve hafif kompozit gövde üretimi.</li>
          <li>Köpük çekirdek üzerine epoksi cam elyaf kaplama ile yüksek mukavemetli aerodinamik yüzey imalatı.</li>
        </ul>
      `
    }
  };

  // 5. Modal Open/Close Logic
  const modalOverlay = document.getElementById('modal-overlay');
  const modalBody = document.getElementById('modal-body');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  function openProjectModal(key) {
    const data = projectDetails[key];
    if (!data) return;

    modalBody.innerHTML = `
      <div style="display: flex; gap: 2rem; flex-direction: column;">
        <div style="position: relative; border-radius: 14px; overflow: hidden; max-height: 420px; background: #000; text-align: center;">
          <img src="${data.image}" alt="${data.title}" style="max-height: 380px; width: auto; max-width: 100%; margin: 0 auto; object-fit: contain;">
        </div>
        <div>
          <span class="section-tag">${data.subtitle}</span>
          <h2 style="font-size: 1.85rem; color: var(--text-white); margin: 0.75rem 0 0.5rem;">${data.title}</h2>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1.25rem;">
            ${data.tags.map(t => `<span class="tech-tag" style="background: rgba(0, 229, 255, 0.1); color: var(--accent-cyan);">${t}</span>`).join('')}
          </div>
          <div style="color: var(--text-secondary); line-height: 1.7; font-size: 0.95rem;">
            ${data.content}
          </div>
        </div>
      </div>
    `;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function openImageModal(imgSrc, title) {
    modalBody.innerHTML = `
      <div style="text-align: center;">
        <h3 style="font-size: 1.3rem; color: var(--text-white); margin-bottom: 1rem;">${title}</h3>
        <div style="border-radius: 12px; overflow: hidden; background: #000; box-shadow: 0 10px 30px rgba(0,0,0,0.6);">
          <img src="${imgSrc}" alt="${title}" style="max-height: 75vh; margin: 0 auto; object-fit: contain;">
        </div>
      </div>
    `;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  window.openImageModal = openImageModal;

  document.querySelectorAll('.open-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const modalKey = btn.getAttribute('data-modal');
      openProjectModal(modalKey);
    });
  });

  document.querySelectorAll('.open-img-modal').forEach(card => {
    card.addEventListener('click', () => {
      const src = card.getAttribute('data-img');
      const title = card.getAttribute('data-title');
      openImageModal(src, title);
    });
  });

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  // 6. Contact Form Handler with Toast Notification
  window.handleFormSubmit = () => {
    const name = document.getElementById('form-name').value;
    const email = document.getElementById('form-email').value;
    const subject = document.getElementById('form-subject').value;
    const message = document.getElementById('form-message').value;

    const mailtoUrl = `mailto:aydgnbegm@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("Gönderen: " + name + " (" + email + ")\n\n" + message)}`;
    window.location.href = mailtoUrl;

    alert(`Teşekkürler ${name}! Mesajınız e-posta uygulamanıza aktarıldı. En kısa sürede geri dönüş yapacağım.`);
    document.getElementById('contact-form').reset();
  };
});
