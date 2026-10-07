import { useEffect } from 'react'
import homePhoto from '../assets/Foto/Home.jpg'

const advantages = [
  {
    number: '01',
    title: 'Belajar sambil bermain',
    text: 'Anak mengenal hal baru lewat kegiatan yang aktif, menyenangkan, dan sesuai tahap usianya.',
  },
  {
    number: '02',
    title: 'Pembentukan karakter',
    text: 'Kemandirian, kepedulian, dan kebiasaan baik ditumbuhkan melalui rutinitas harian.',
  },
  {
    number: '03',
    title: 'Lingkungan yang ramah anak',
    text: 'Ruang belajar dirancang agar anak merasa aman, diterima, dan berani bereksplorasi.',
  },
]

const programs = [
  { title: 'Literasi & numerasi', text: 'Mengenal bahasa, angka, dan konsep dasar melalui aktivitas konkret.', icon: 'Aa' },
  { title: 'Seni & kreativitas', text: 'Mengembangkan imajinasi melalui musik, gerak, gambar, dan karya.', icon: '✳' },
  { title: 'Karakter & kemandirian', text: 'Melatih tanggung jawab, empati, komunikasi, dan percaya diri.', icon: '♡' },
]

const activities = [
  {
    title: 'Eksplorasi di kelas',
    category: 'KEGIATAN BELAJAR',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=85',
  },
  {
    title: 'Bermain dan bergerak',
    category: 'AKTIVITAS ANAK',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=85',
  },
  {
    title: 'Berkarya bersama',
    category: 'KREATIVITAS',
    image: 'https://images.unsplash.com/photo-1503919005314-30d93d07d823?auto=format&fit=crop&w=800&q=85',
  },
]

const teachers = [
  { name: 'Pendidik Kelompok A', role: 'Guru kelas', image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=600&q=85' },
  { name: 'Pendidik Kelompok B', role: 'Guru kelas', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=85' },
  { name: 'Tenaga Pendidik', role: 'Pendamping anak', image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=85' },
]

function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            currentObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -35px 0px' },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])
}

export default function HomePage({ onNavigate }) {
  useScrollReveal()

  return (
    <div className="home-page">
      <section
        className="home-intro"
        style={{ '--home-hero-photo': `url("${homePhoto}")` }}
      >
        <div className="home-intro-inner">
          <div className="intro-copy" data-reveal>
            <p className="eyebrow">Taman Kanak-Kanak Negeri Pembina</p>
            <h1>Ruang tumbuh untuk <span>masa kecil yang bahagia.</span></h1>
            <p className="intro-description">
              Lingkungan belajar yang aman dan menyenangkan untuk menumbuhkan karakter, kreativitas,
              dan kemampuan dasar anak sejak dini.
            </p>
            <div className="hero-actions">
              <button className="hero-action-button primary" type="button" onClick={() => onNavigate('spmb')}>
                Info pendaftaran <span aria-hidden="true">→</span>
              </button>
              <button className="hero-action-button secondary" type="button" onClick={() => onNavigate('program')}>
                Tanya program <span aria-hidden="true">→</span>
              </button>
              <button className="hero-action-button secondary" type="button" onClick={() => onNavigate('kegiatan')}>
                Lihat kegiatan <span aria-hidden="true">→</span>
              </button>
              <button className="hero-action-button secondary" type="button" onClick={() => onNavigate('contact')}>
                Hubungi sekolah <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
          <div className="intro-photo-wrap" data-reveal>
            <div className="intro-photo" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="golden-age-section" aria-labelledby="golden-age-title">
        <div className="golden-age-inner" data-reveal>
          <div className="golden-age-heading">
            <p className="eyebrow">Tahukah Ayah dan Bunda?</p>
            <h2 id="golden-age-title">Masa emas tumbuh kembang anak</h2>
          </div>
          <div className="golden-age-stat">
            <strong>0-6</strong>
            <span>tahun</span>
          </div>
          <p className="golden-age-copy">
            Tahun-tahun awal adalah waktu penting untuk membangun rasa ingin tahu, kemandirian,
            karakter, dan fondasi belajar melalui pengalaman yang menyenangkan.
          </p>
        </div>
      </section>

      <section className="welcome-section home-container" data-reveal>
        <div className="welcome-photo-frame">
          <img
            src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=800&q=85"
            alt="Ilustrasi pendidik menyambut keluarga sekolah"
            loading="lazy"
          />
          <span className="portrait-label">KEPALA SEKOLAH</span>
        </div>
        <div className="welcome-copy">
          <p className="eyebrow">Sambutan kepala sekolah</p>
          <h2>Selamat datang di TK Negeri Pembina</h2>
          <p>
            Dengan penuh rasa syukur, kami menyambut keluarga baru di TK Negeri Pembina. Kami
            percaya setiap anak memiliki keunikan dan potensi yang perlu didampingi dengan kasih,
            kesabaran, serta pengalaman belajar yang bermakna.
          </p>
          <p>
            Mari berkolaborasi menciptakan masa belajar yang menyenangkan, membangun karakter, dan
            menumbuhkan rasa ingin tahu anak sejak dini.
          </p>
          <div className="principal-signature">
            <strong>Kepala TK Negeri Pembina</strong>
            <span>Salam hangat untuk seluruh keluarga sekolah</span>
          </div>
        </div>
      </section>

      <section className="advantages-section">
        <div className="home-container">
          <div className="home-section-heading" data-reveal>
            <p className="eyebrow">Mengapa memilih kami</p>
            <h2>Awal yang baik untuk langkah besar</h2>
            <p>Pengalaman belajar yang memperhatikan kebutuhan anak secara utuh.</p>
          </div>
          <div className="advantage-grid">
            {advantages.map((item) => (
              <article className="advantage-item" data-reveal key={item.number}>
                <span className="advantage-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="program-section home-container">
        <div className="home-section-heading heading-row" data-reveal>
          <div>
            <p className="eyebrow">Belajar setiap hari</p>
            <h2>Program untuk tumbuh dan berkembang</h2>
          </div>
          <button className="text-link" type="button" onClick={() => onNavigate('program')}>
            Lihat program <span aria-hidden="true">→</span>
          </button>
        </div>
        <div className="program-grid">
          {programs.map((program) => (
            <article className="program-card" data-reveal key={program.title}>
              <span className="program-icon" aria-hidden="true">{program.icon}</span>
              <h3>{program.title}</h3>
              <p>{program.text}</p>
              <span className="card-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="activity-section">
        <div className="home-container">
          <div className="home-section-heading heading-row" data-reveal>
            <div>
              <p className="eyebrow">Cerita dari sekolah</p>
              <h2>Hari-hari penuh pengalaman</h2>
            </div>
            <button className="text-link" type="button" onClick={() => onNavigate('kegiatan')}>
              Buka galeri <span aria-hidden="true">→</span>
            </button>
          </div>
          <div className="activity-grid">
            {activities.map((activity) => (
              <article className="activity-card" data-reveal key={activity.title}>
                <img src={activity.image} alt={activity.title} loading="lazy" />
                <div className="activity-card-copy">
                  <span>{activity.category}</span>
                  <h3>{activity.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="teachers-section home-container">
        <div className="home-section-heading heading-row" data-reveal>
          <div>
            <p className="eyebrow">Sahabat belajar anak</p>
            <h2>Guru yang mendampingi dengan hati</h2>
          </div>
          <button className="text-link" type="button" onClick={() => onNavigate('guru')}>
            Kenali guru <span aria-hidden="true">→</span>
          </button>
        </div>
        <div className="teacher-preview-grid">
          {teachers.map((teacher) => (
            <article className="teacher-preview" data-reveal key={teacher.name}>
              <img src={teacher.image} alt={teacher.name} loading="lazy" />
              <div>
                <h3>{teacher.name}</h3>
                <p>{teacher.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

    </div>
  )
}
