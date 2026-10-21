import { useEffect } from 'react'
import homePhoto from '../assets/Foto/Home.jpg'

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

const activityDotPositions = Array.from({ length: 8 * 7 }, (_, index) => {
  const column = index % 8
  const row = Math.floor(index / 8)
  const x = (column + 0.5) / 8
  const y = (row + 0.5) / 7
  const ellipseX = (x - 0.5) / 0.3
  const ellipseY = (y - 0.5) / 0.33

  return ellipseX ** 2 + ellipseY ** 2 <= 0.88
    ? { left: `${x * 100}%`, top: `${y * 100}%` }
    : null
}).filter(Boolean)

const activityCornerDotPositions = Array.from({ length: 8 * 6 }, (_, index) => {
  const column = index % 8
  const row = Math.floor(index / 8)
  const x = (column + 0.5) / 8
  const y = (row + 0.5) / 6
  const ellipseX = (x - 0.5) / 0.3
  const ellipseY = (y - 0.5) / 0.3

  return ellipseX ** 2 + ellipseY ** 2 <= 0.88
    ? { left: `${x * 100}%`, top: `${y * 100}%` }
    : null
}).filter(Boolean)

const teachers = [
  { name: 'Pendidik Kelompok A', role: 'Guru kelas', note: 'Mendampingi anak belajar dan bermain dengan gembira.', image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=600&q=85' },
  { name: 'Pendidik Kelompok B', role: 'Guru kelas', note: 'Mendorong rasa ingin tahu dan kemandirian anak.', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=85' },
  { name: 'Tenaga Pendidik', role: 'Pendamping anak', note: 'Menciptakan suasana belajar yang aman dan hangat.', image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=85' },
]

const whyUsFeatures = [
  {
    title: 'Belajar Sambil Bermain',
    text: 'Kegiatan belajar yang interaktif, kontekstual, dan menyenangkan sesuai tahap perkembangan anak tanpa beban paksaan.',
  },
  {
    title: 'Budi Pekerti & Karakter Mulia',
    text: 'Menanamkan nilai agama, kejujuran, rasa syukur, tanggung jawab, dan kesantunan dalam kehidupan sehari-hari.',
  },
  {
    title: 'Kreativitas & Rasa Ingin Tahu',
    text: 'Mengasah daya pikir, komunikasi, dan keberanian anak melalui kegiatan eksplorasi seni, sains, dan proyek nyata.',
  },
  {
    title: 'Cinta Budaya & Keberagaman',
    text: 'Menumbuhkan rasa bangga pada budaya lokal Indonesia serta melatih sikap saling menghargai sejak dini.',
  },
  {
    title: 'Anak Mandiri & Sehat',
    text: 'Melatih keterampilan fisik-motorik, kemandirian, serta kebiasaan hidup bersih dan sehat agar anak percaya diri.',
  },
  {
    title: 'Guru Berpengalaman & Kasih Sayang',
    text: 'Dikelola oleh pendidik profesional yang sabar dan berkomitmen mendampingi tumbuh kembang buah hati secara optimal.',
  },
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

function HomeDoodle({ className = '', variant = 'puffy' }) {
  const cloudPaths = {
    puffy: 'M18 58h68a18 18 0 0 0 0-36 24 24 0 0 0-45-6 21 21 0 0 0-33 17 13 13 0 0 0 10 25Z',
    wide: 'M12 60h76a16 16 0 0 0 2-32 25 25 0 0 0-46-8 20 20 0 0 0-35 15 13 13 0 0 0 3 25Z',
    fluffy: 'M16 59h70a17 17 0 0 0 2-34 20 20 0 0 0-39-8 22 22 0 0 0-37 13 15 15 0 0 0 4 29Z',
  }

  return (
    <svg className={`home-doodle home-cloud ${className}`} viewBox="0 0 100 100" aria-hidden="true" focusable="false">
      <path d={cloudPaths[variant]} fill="#FFFDF8" stroke="#69B7E5" strokeWidth="3" strokeLinejoin="round" />
      <path d="M29 48h42" fill="none" stroke="#DDF1FF" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

function SchoolDoodle({ variant = 'star', className = '' }) {
  const doodles = {
    star: (
      <path
        d="M50 9 61 37 91 39 68 58 76 88 50 72 24 88 32 58 9 39 39 37Z"
        fill="#FFFDF8"
        stroke="#69B7E5"
      />
    ),
    pencil: (
      <>
        <path d="m31 73 35-48 14 11-35 48Z" fill="#FFFDF8" stroke="#69B7E5" />
        <path d="m31 73-9 22 23-11Z" fill="#FFFDF8" stroke="#69B7E5" />
        <path d="m66 25 8-11 14 11-8 11Z" fill="#FFFDF8" stroke="#69B7E5" />
      </>
    ),
    book: (
      <>
        <path d="M50 31c-12-9-26-11-38-7v52c14-4 27-2 38 7Zm0 0c12-9 26-11 38-7v52c-14-4-27-2-38 7Z" fill="#FFFDF8" stroke="#69B7E5" />
        <path d="M50 31v52M22 38c9-2 17 0 23 4M78 38c-9-2-17 0-23 4" fill="none" stroke="#69B7E5" />
      </>
    ),
    blocks: (
      <>
        <rect x="9" y="46" width="25" height="34" rx="4" fill="#FFFDF8" stroke="#69B7E5" />
        <rect x="38" y="35" width="25" height="45" rx="4" fill="#FFFDF8" stroke="#69B7E5" />
        <rect x="67" y="46" width="25" height="34" rx="4" fill="#FFFDF8" stroke="#69B7E5" />
        <text x="21.5" y="69" textAnchor="middle" fill="#3F91BE" fontSize="19" fontWeight="900" fontFamily="Nunito, sans-serif">A</text>
        <text x="50.5" y="66" textAnchor="middle" fill="#3F91BE" fontSize="19" fontWeight="900" fontFamily="Nunito, sans-serif">B</text>
        <text x="79.5" y="69" textAnchor="middle" fill="#3F91BE" fontSize="19" fontWeight="900" fontFamily="Nunito, sans-serif">C</text>
      </>
    ),
    crayon: (
      <>
        <path d="M35 23h30l8 49-23 17-23-17Z" fill="#FFFDF8" stroke="#69B7E5" />
        <path d="M35 37h30" fill="none" stroke="#69B7E5" />
        <path d="M41 80h18" fill="none" stroke="#69B7E5" />
      </>
    ),
    heart: (
      <path
        d="M50 84 18 53C-2 31 28 8 50 31 72 8 102 31 82 53Z"
        fill="#FFFDF8"
        stroke="#69B7E5"
      />
    ),
    flower: (
      <>
        <circle cx="50" cy="25" r="14" fill="#FFFDF8" stroke="#69B7E5" />
        <circle cx="73" cy="42" r="14" fill="#FFFDF8" stroke="#69B7E5" />
        <circle cx="64" cy="69" r="14" fill="#FFFDF8" stroke="#69B7E5" />
        <circle cx="36" cy="69" r="14" fill="#FFFDF8" stroke="#69B7E5" />
        <circle cx="27" cy="42" r="14" fill="#FFFDF8" stroke="#69B7E5" />
        <circle cx="50" cy="48" r="13" fill="#FFFDF8" stroke="#69B7E5" />
      </>
    ),
    sun: (
      <>
        <circle cx="50" cy="50" r="23" fill="#FFFDF8" stroke="#69B7E5" />
        <path d="M50 10v10m0 60v10M10 50h10m60 0h10M22 22l8 8m40 40 8 8m0-56-8 8m-40 40-8 8" fill="none" stroke="#69B7E5" />
      </>
    ),
    paperplane: (
      <>
        <path d="m9 43 82-29-27 72-15-29Z" fill="#FFFDF8" stroke="#69B7E5" />
        <path d="m49 57 42-43M49 57 31 70" fill="none" stroke="#69B7E5" />
      </>
    ),
    abc: (
      <>
        <rect x="9" y="31" width="82" height="43" rx="8" fill="#FFFDF8" stroke="#69B7E5" />
        <text x="50" y="59" textAnchor="middle" fill="#3F91BE" fontSize="24" fontWeight="900" fontFamily="Nunito, sans-serif">ABC</text>
      </>
    ),
    rainbow: (
      <>
        <path d="M12 80a38 38 0 0 1 76 0H74a24 24 0 0 0-48 0Z" fill="#FFFDF8" stroke="#69B7E5" />
        <path d="M27 80a23 23 0 0 1 46 0" fill="none" stroke="#69B7E5" />
        <path d="M12 80h16m44 0h16" fill="none" stroke="#69B7E5" />
      </>
    ),
  }

  return (
    <svg
      className={`school-doodle ${className}`}
      viewBox="0 0 100 100"
      aria-hidden="true"
      focusable="false"
    >
      <g strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        {doodles[variant]}
      </g>
    </svg>
  )
}

const WAVE_SEGMENTS = 4
const WAVE_SEGMENT_WIDTH = 1440 / WAVE_SEGMENTS
const WAVE_HEIGHT = 80

function buildWaveBoundary(crestY, troughY) {
  let path = `M0 ${crestY}`

  for (let segment = 0; segment < WAVE_SEGMENTS; segment += 1) {
    const startX = segment * WAVE_SEGMENT_WIDTH
    const startY = segment % 2 === 0 ? crestY : troughY
    const endY = segment % 2 === 0 ? troughY : crestY
    path += ` C${startX + WAVE_SEGMENT_WIDTH / 3} ${startY} ${startX + (WAVE_SEGMENT_WIDTH * 2) / 3} ${endY} ${startX + WAVE_SEGMENT_WIDTH} ${endY}`
  }

  return path
}

function buildWavePath(crestY, troughY) {
  return `${buildWaveBoundary(crestY, troughY)} V${WAVE_HEIGHT} H0 Z`
}

function buildWaveCapPath(crestY, troughY) {
  let path = `M0 0 H1440 V${crestY}`

  for (let segment = WAVE_SEGMENTS - 1; segment >= 0; segment -= 1) {
    const startX = segment * WAVE_SEGMENT_WIDTH
    const startY = segment % 2 === 0 ? crestY : troughY
    const endY = segment % 2 === 0 ? troughY : crestY
    path += ` C${startX + (WAVE_SEGMENT_WIDTH * 2) / 3} ${endY} ${startX + WAVE_SEGMENT_WIDTH / 3} ${startY} ${startX} ${startY}`
  }

  return `${path} Z`
}

function buildWaveBandPath(topCrest, topTrough, bottomCrest, bottomTrough) {
  let path = `${buildWaveBoundary(topCrest, topTrough)} L1440 ${bottomCrest}`

  for (let segment = WAVE_SEGMENTS - 1; segment >= 0; segment -= 1) {
    const startX = segment * WAVE_SEGMENT_WIDTH
    const startY = segment % 2 === 0 ? bottomCrest : bottomTrough
    const endY = segment % 2 === 0 ? bottomTrough : bottomCrest
    path += ` C${startX + (WAVE_SEGMENT_WIDTH * 2) / 3} ${endY} ${startX + WAVE_SEGMENT_WIDTH / 3} ${startY} ${startX} ${startY}`
  }

  return `${path} Z`
}

function AnimatedWaveLayer({ className, path, fill, opacity = 1 }) {
  return (
    <g className={`home-wave-layer ${className}`}>
      <path d={path} fill={fill} opacity={opacity} />
      <path d={path} fill={fill} opacity={opacity} transform="translate(1440 0)" />
    </g>
  )
}

function SectionDivider({ fromColor, toColor, className = '', edgeStart = false, edgeEnd = false, children }) {
  // The upper boundary now slopes down into the blue section while the color bands stay continuous.
  const backWave = buildWaveBandPath(0, 28, 20, 48)
  const middleWave = buildWaveBandPath(20, 48, 40, 68)
  const frontWave = buildWavePath(40, 68)
  const frontCap = buildWaveCapPath(40, 68)
  const middleBand = buildWaveBandPath(20, 48, 40, 68)
  const backBand = buildWaveBandPath(0, 28, 20, 48)
  return (
    <div
      className={`section-divider ${className}`.trim()}
      style={{ backgroundColor: edgeStart ? undefined : fromColor }}
      aria-hidden="true"
    >
      <svg viewBox={`0 0 1440 ${edgeStart || edgeEnd ? WAVE_HEIGHT : 72}`} preserveAspectRatio="none" focusable="false">
        {edgeStart ? (
          <>
            <AnimatedWaveLayer className="wave-layer-back" path={backWave} fill="#E0F4FE" opacity={0.4} />
            <AnimatedWaveLayer className="wave-layer-middle" path={middleWave} fill="#CBEAFB" opacity={0.7} />
            <AnimatedWaveLayer className="wave-layer-front" path={frontWave} fill="#A9DDF5" />
          </>
        ) : edgeEnd ? (
          <>
            <AnimatedWaveLayer className="wave-layer-front" path={frontCap} fill="#A9DDF5" />
            <AnimatedWaveLayer className="wave-layer-middle" path={middleBand} fill="#CBEAFB" opacity={0.7} />
            <AnimatedWaveLayer className="wave-layer-back" path={backBand} fill="#E0F4FE" opacity={0.4} />
          </>
        ) : (
          <>
            <path
              d="M0 28 C40 10 80 10 120 28 S200 46 240 28 S320 10 360 28 S440 46 480 28 S560 10 600 28 S680 46 720 28 S800 10 840 28 S920 46 960 28 S1040 10 1080 28 S1160 46 1200 28 S1280 10 1320 28 S1400 46 1440 28 V72 H0 Z"
              fill="#E0F4FE"
              opacity="0.56"
            />
            <path
              d="M0 40 C40 24 80 24 120 40 S200 56 240 40 S320 24 360 40 S440 56 480 40 S560 24 600 40 S680 56 720 40 S800 24 840 40 S920 56 960 40 S1040 24 1080 40 S1160 56 1200 40 S1280 24 1320 40 S1400 56 1440 40 V72 H0 Z"
              fill="#CBEAFB"
              opacity="0.78"
            />
            <path
              d="M0 50 C40 38 80 38 120 50 S200 62 240 50 S320 38 360 50 S440 62 480 50 S560 38 600 50 S680 62 720 50 S800 38 840 50 S920 62 960 50 S1040 38 1080 50 S1160 62 1200 50 S1280 38 1320 50 S1400 62 1440 50 V72 H0 Z"
              fill={toColor}
            />
          </>
        )}
      </svg>
      {children}
    </div>
  )
}

export default function HomePage({ onNavigate }) {
  useScrollReveal()

  return (
    <div className="home-page">
      <section className="home-intro">
        <img
          className="home-intro-background"
          src={homePhoto}
          alt="Anak-anak TK Negeri Pembina bermain dan belajar bersama"
          fetchPriority="high"
        />
        <div className="home-intro-overlay" aria-hidden="true" />
        <HomeDoodle className="doodle-hero-cloud" />
        <HomeDoodle variant="wide" className="doodle-hero-cloud-small" />
        <HomeDoodle variant="fluffy" className="doodle-hero-cloud-third" />
        <HomeDoodle variant="wide" className="doodle-hero-cloud-fourth" />
        <div className="home-intro-inner">
          <div className="intro-copy" data-reveal>
            <p className="eyebrow">Taman Kanak-Kanak Negeri Pembina</p>
            <h1>
              Ruang tumbuh untuk{' '}
              <span className="hero-highlight">
                masa kecil yang bahagia.
                <svg className="hero-highlight-underline" viewBox="0 0 320 16" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M3 10 C58 3 98 14 156 8 S260 3 317 9" />
                </svg>
              </span>
            </h1>
            <p className="intro-description">
              Lingkungan belajar yang aman dan menyenangkan untuk menumbuhkan karakter, kreativitas,
              dan kemampuan dasar anak sejak dini.
            </p>
            <div className="hero-actions">
              <button className="hero-action-button primary" type="button" onClick={() => onNavigate('spmb')}>
                Info Pendaftaran SPMB <span aria-hidden="true">→</span>
              </button>
              <button className="hero-action-button secondary" type="button" onClick={() => onNavigate('contact')}>
                Hubungi Sekolah <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
          <div className="intro-photo-wrap" data-reveal>
            <img
              className="intro-photo"
              src={activities[2].image}
              alt="Anak-anak berkarya bersama dalam kegiatan seni di sekolah"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>
      <SectionDivider
        className="hero-wave"
        fromColor="#FFFDF5"
        toColor="#A9DDF5"
        edgeStart
      />

      <section id="why-us" className="why-us-section" aria-labelledby="why-us-title">
        <HomeDoodle className="doodle-why-us-cloud" />
        <HomeDoodle variant="wide" className="doodle-why-us-cloud-second" />
        <HomeDoodle variant="fluffy" className="doodle-why-us-cloud-third" />
        <HomeDoodle variant="wide" className="doodle-why-us-cloud-fourth" />
        <div className="why-us-inner">
          <div className="why-us-heading">
            <h2 id="why-us-title">Mengapa Memilih TK Pembina?</h2>
          </div>
          <div className="why-us-grid">
            {whyUsFeatures.map((feature) => (
              <article className="why-us-item" data-reveal key={feature.title}>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <SectionDivider
        className="why-us-wave"
        fromColor="#FFFDF5"
        toColor="#A9DDF5"
        edgeEnd
      />

      <section className="welcome-section" data-reveal>
        <HomeDoodle className="doodle-welcome-cloud" />
        <HomeDoodle variant="wide" className="doodle-welcome-cloud-second" />
        <HomeDoodle variant="fluffy" className="doodle-welcome-cloud-third" />
        <HomeDoodle variant="wide" className="doodle-welcome-cloud-fourth" />
        <div className="welcome-section-inner home-container">
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
        </div>
      </section>
      <SectionDivider fromColor="#FFFDF5" toColor="#EEF7FB" />

      <section className="activity-section">
        <div className="activity-dot-pattern activity-dot-pattern--main" aria-hidden="true">
          {activityDotPositions.map((position, index) => (
            <span key={index} style={position} />
          ))}
        </div>
        <div className="activity-dot-pattern activity-dot-pattern--corner" aria-hidden="true">
          {activityCornerDotPositions.map((position, index) => (
            <span key={index} style={position} />
          ))}
        </div>
        <HomeDoodle className="doodle-activity-cloud" />
        <HomeDoodle variant="wide" className="doodle-activity-cloud-second" />
        <HomeDoodle variant="fluffy" className="doodle-activity-cloud-third" />
        <HomeDoodle variant="wide" className="doodle-activity-cloud-fourth" />
        <SchoolDoodle variant="star" className="school-act-1" />
        <SchoolDoodle variant="pencil" className="school-act-2" />
        <SchoolDoodle variant="book" className="school-act-3" />
        <SchoolDoodle variant="blocks" className="school-act-4" />
        <SchoolDoodle variant="sun" className="school-act-5" />
        <SchoolDoodle variant="paperplane" className="school-act-6" />
        <div className="home-container home-wide-container">
          <div className="home-section-heading heading-row" data-reveal>
            <div>
              <p className="eyebrow">Kegiatan Sehari-hari</p>
              <h2>Hari-hari penuh pengalaman</h2>
            </div>
            <button className="text-link" type="button" onClick={() => onNavigate('kegiatan')}>
              Lihat Kegiatan <span aria-hidden="true">→</span>
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
      <SectionDivider fromColor="#EEF7FB" toColor="#FFFDF5" />

      <section className="teachers-section">
        <HomeDoodle className="doodle-teachers-cloud" />
        <HomeDoodle variant="wide" className="doodle-teachers-cloud-second" />
        <HomeDoodle variant="fluffy" className="doodle-teachers-cloud-third" />
        <HomeDoodle variant="wide" className="doodle-teachers-cloud-fourth" />
        <SchoolDoodle variant="heart" className="school-tea-1" />
        <SchoolDoodle variant="flower" className="school-tea-2" />
        <SchoolDoodle variant="crayon" className="school-tea-3" />
        <SchoolDoodle variant="star" className="school-tea-6" />
        <div className="home-container home-wide-container teachers-section-inner">
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
                  <span>{teacher.note}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <SectionDivider fromColor="#FFFDF5" toColor="#A9DDF5" />

      <section className="home-closing-section">
        <HomeDoodle className="doodle-closing-cloud" />
        <HomeDoodle variant="wide" className="doodle-closing-cloud-second" />
        <HomeDoodle variant="fluffy" className="doodle-closing-cloud-third" />
        <HomeDoodle variant="wide" className="doodle-closing-cloud-fourth" />
        <div className="home-container home-closing-content" data-reveal>
          <h2>Siap Memberikan Masa Kecil Terbaik &amp; Bahagia untuk Buah Hati?</h2>
          <p>Mari bergabung menjadi bagian dari keluarga besar TK Negeri Pembina Kota Cimahi.</p>
          <button className="home-closing-button" type="button" onClick={() => onNavigate('spmb')}>
            Daftar SPMB <span aria-hidden="true">→</span>
          </button>
        </div>
      </section>
      <SectionDivider fromColor="#A9DDF5" toColor="#69B7E5" />

    </div>
  )
}
