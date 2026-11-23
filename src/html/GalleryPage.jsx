import { useEffect, useRef } from 'react'

/* -- Icon: jam kecil untuk penanda waktu kegiatan -- */
function IconClock() {
  return (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

/* -- Icon: tangan melambaikan (penyambutan) -- */
function IconWave() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7.5 6.5a1 1 0 0 1 1-1h.01M7 3.5a1 1 0 0 1 1-1h.01M11 2a1 1 0 0 1 1-1h.01M14.5 4a1 1 0 0 1 1-1h.01" />
      <path d="M9 8c0-1.1.9-2 2-2s2 .9 2 2v4" />
      <path d="M7 10V8c0-1.1.9-2 2-2" />
      <path d="M13 8v-1a2 2 0 0 1 4 0v5" />
      <path d="M7 13V10" />
      <path d="M17 13v-5a2 2 0 0 1 4 0v4a7 7 0 0 1-7 7H8a7 7 0 0 1-7-7V11a2 2 0 0 1 4 0v2" />
    </svg>
  )
}

/* -- Icon: bangunan/pendopo (berbaris di pendopo) -- */
function IconBuilding() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21h18" />
      <path d="M5 21V7l7-4 7 4v14" />
      <path d="M9 21v-6h6v6" />
      <path d="M9 10h.01M12 10h.01M15 10h.01M9 14h.01M15 14h.01" />
    </svg>
  )
}

/* -- Icon: tetes air (minum air putih) -- */
function IconDroplet() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
  )
}

/* -- Icon: tangan berdoa (salam doa) -- */
function IconPray() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2v10" />
      <path d="M7 7l5 5 5-5" />
      <path d="M5 12a7 7 0 0 0 14 0" />
      <path d="M9 21h6" />
      <path d="M12 17v4" />
    </svg>
  )
}

/* -- Icon: buku terbuka (pembukaan) -- */
function IconBook() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
      <path d="M6 6h10" />
      <path d="M6 10h10" />
    </svg>
  )
}

/* -- Icon: pensil (kegiatan inti belajar) -- */
function IconPencil() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
    </svg>
  )
}

/* -- Icon: sendok garpu makan (istirahat & makan) -- */
function IconFood() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 11l19-9-9 19-2-8-8-2z" />
    </svg>
  )
}

/* -- Icon: ransel tas (penutup / pulang) -- */
function IconBackpack() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 20V10a8 8 0 0 1 16 0v10" />
      <path d="M4 16h16" />
      <path d="M9 20v-4h6v4" />
      <path d="M10 6a2 2 0 0 0 4 0" />
    </svg>
  )
}

function GalleryCloud({ className = '', variant = 'puffy' }) {
  const cloudPaths = {
    puffy: 'M18 58h68a18 18 0 0 0 0-36 24 24 0 0 0-45-6 21 21 0 0 0-33 17 13 13 0 0 0 10 25Z',
    wide: 'M14 62h76a16 16 0 0 0 0-32 20 20 0 0 0-37-8 19 19 0 0 0-29 15 12 12 0 0 0 0 25Z',
    tall: 'M22 66h58a17 17 0 0 0 3-34 22 22 0 0 0-41-11 18 18 0 0 0-26 19 13 13 0 0 0 6 26Z',
  }

  return (
    <svg className={`gallery-cloud ${className}`} viewBox="0 0 104 74" aria-hidden="true" focusable="false">
      <path d={cloudPaths[variant] || cloudPaths.puffy} fill="#FFFFFF" stroke="#69B7E5" strokeWidth="3" strokeLinejoin="round" />
    </svg>
  )
}

function GalleryDoodle({ variant = 'star', className = '' }) {
  const doodles = {
    star: <path d="M50 9 61 37 91 39 68 58 76 88 50 72 24 88 32 58 9 39 39 37Z" fill="#FFFDF8" stroke="#69B7E5" />,
    heart: <path d="M50 84 18 53C-2 31 28 8 50 31 72 8 102 31 82 53Z" fill="#FFFDF8" stroke="#69B7E5" />,
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
    pencil: (
      <>
        <path d="m31 73 35-48 14 11-35 48Z" fill="#FFFDF8" stroke="#69B7E5" />
        <path d="m31 73-9 22 23-11Z" fill="#FFFDF8" stroke="#69B7E5" />
        <path d="m66 25 8-11 14 11-8 11Z" fill="#FFFDF8" stroke="#69B7E5" />
      </>
    ),
    sun: (
      <>
        <circle cx="50" cy="50" r="23" fill="#FFFDF8" stroke="#69B7E5" />
        <path d="M50 10v10m0 60v10M10 50h10m60 0h10M22 22l8 8m40 40 8 8m0-56-8 8m-40 40-8 8" fill="none" stroke="#69B7E5" />
      </>
    ),
    rainbow: (
      <>
        <path d="M12 80a38 38 0 0 1 76 0H74a24 24 0 0 0-48 0Z" fill="#FFFDF8" stroke="#69B7E5" />
        <path d="M27 80a23 23 0 0 1 46 0" fill="none" stroke="#69B7E5" />
        <path d="M12 80h16m44 0h16" fill="none" stroke="#69B7E5" />
      </>
    ),
    abc: (
      <>
        <rect x="9" y="31" width="82" height="43" rx="8" fill="#FFFDF8" stroke="#69B7E5" />
        <text x="50" y="59" textAnchor="middle" fill="#3F91BE" fontSize="24" fontWeight="900" fontFamily="Nunito, sans-serif">ABC</text>
      </>
    ),
  }

  return (
    <svg className={`gallery-doodle ${className}`} viewBox="0 0 100 100" aria-hidden="true" focusable="false">
      <g strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        {doodles[variant] || doodles.star}
      </g>
    </svg>
  )
}

// Data kegiatan harian TKN Pembina Kelompok A (waktu kegiatan konsisten)
const activities = [
  {
    title: 'Penyambutan Anak',
    category: '06.30 - 06.55',
    description: 'Guru menyambut kedatangan murid dengan senyum hangat di depan pintu sekolah. Momen ini membangun rasa aman, nyaman, dan semangat anak untuk memulai hari belajar.',
    icon: <IconWave />,
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=85',
    alt: 'Guru menyambut anak-anak dengan senyum di pintu sekolah',
  },
  {
    title: 'Berbaris di Pendopo',
    category: '07.00 - 07.30',
    description: 'Seluruh murid berkumpul dan berbaris rapi di pendopo sekolah. Kegiatan ini melatih kedisiplinan, ketertiban, dan rasa kebersamaan sejak dini.',
    icon: <IconBuilding />,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85',
    alt: 'Anak-anak berbaris rapi di pendopo sekolah bersama guru',
  },
  {
    title: 'Minum Air Putih & Berbaris di Depan Kelas',
    category: '07.30 - 07.45',
    description: 'Anak-anak minum air putih untuk menjaga tubuh tetap terhidrasi, kemudian berbaris tertib di depan kelas sebelum masuk untuk belajar.',
    icon: <IconDroplet />,
    image: 'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?auto=format&fit=crop&w=1000&q=85',
    alt: 'Anak-anak minum air putih dan berbaris rapi di depan kelas',
  },
  {
    title: 'Salam Doa & Cek Kehadiran',
    category: '07.45 - 08.00',
    description: 'Kegiatan diawali dengan salam dan doa bersama untuk menumbuhkan nilai spiritual. Guru juga mengecek kehadiran anak sebagai bentuk pembiasaan tanggung jawab.',
    icon: <IconPray />,
    image: 'https://images.unsplash.com/photo-1503919005314-30d93d07d823?auto=format&fit=crop&w=1000&q=85',
    alt: 'Anak-anak berdoa bersama guru di dalam kelas',
  },
  {
    title: 'Pembukaan',
    category: '08.00 - 08.30',
    description: 'Sesi pembukaan dengan apersepsi, bernyanyi lagu tematik, dan percakapan ringan bersama guru untuk menghangatkan suasana dan mempersiapkan pikiran anak.',
    icon: <IconBook />,
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1000&q=85',
    alt: 'Guru memimpin sesi pembukaan dengan bernyanyi bersama anak-anak',
  },
  {
    title: 'Kegiatan Inti',
    category: '08.30 - 09.00',
    description: 'Inti pembelajaran berlangsung melalui eksplorasi, bermain peran, eksperimen sederhana, dan berbagai aktivitas tematik yang menstimulasi seluruh aspek perkembangan anak.',
    icon: <IconPencil />,
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=85',
    alt: 'Anak-anak aktif mengikuti kegiatan inti pembelajaran bersama guru',
  },
  {
    title: 'Istirahat & Makan',
    category: '09.00 - 09.30',
    description: 'Waktu istirahat untuk bermain bebas di area yang aman dan makan bersama. Membiasakan anak makan dengan tertib, bersih, dan bersyukur atas makanan yang ada.',
    icon: <IconFood />,
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1000&q=85',
    alt: 'Anak-anak makan bersama dengan gembira di waktu istirahat',
  },
  {
    title: 'Penutup',
    category: '09.30 - 10.00',
    description: 'Mengulas kegiatan yang telah dilakukan, bernyanyi lagu penutup, berdoa sebelum pulang, dan salam kepada guru. Momen spesial untuk mengakhiri hari belajar dengan bahagia.',
    icon: <IconBackpack />,
    image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=1000&q=85',
    alt: 'Anak-anak berpamitan dan berdoa sebelum pulang bersama guru',
  },
]

// Bus Sekolah ala SPMB (Top-down view menghadap lurus ke depan)
function TopDownSchoolBusGraphic() {
  return (
    <svg className="gallery-bus-svg" viewBox="-36 -24 72 48" role="img" aria-label="Bus sekolah penanda alur rute kegiatan">
      {/* Bayangan halus bus */}
      <ellipse cx="0" cy="1" rx="35" ry="20" fill="rgba(30, 50, 75, 0.18)" />

      {/* Roda samping */}
      <rect x="-24" y="-21" width="12" height="4.5" rx="2" fill="#2B3A4A" />
      <rect x="12" y="-21" width="12" height="4.5" rx="2" fill="#2B3A4A" />
      <rect x="-24" y="16.5" width="12" height="4.5" rx="2" fill="#2B3A4A" />
      <rect x="12" y="16.5" width="12" height="4.5" rx="2" fill="#2B3A4A" />

      {/* Badan Bus (Warna kuning keemasan ceria) */}
      <rect x="-32" y="-18" width="64" height="36" rx="10" fill="#FFC93C" stroke="#2B5B84" strokeWidth="2.6" />

      {/* Bumper depan & belakang */}
      <rect x="30" y="-13" width="4.5" height="26" rx="2" fill="#30465A" stroke="#2B5B84" strokeWidth="1.5" />
      <rect x="-34.5" y="-13" width="4.5" height="26" rx="2" fill="#30465A" stroke="#2B5B84" strokeWidth="1.5" />

      {/* Kaca Depan */}
      <path d="M15 -14 h6 a 5 5 0 0 1 5 5 v18 a 5 5 0 0 1 -5 5 h-6 z" fill="#DDF1FF" stroke="#3B8FC2" strokeWidth="2" />
      <line x1="21" y1="-10" x2="23" y2="10" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.85" />

      {/* Kaca Belakang */}
      <rect x="-28" y="-13" width="5" height="26" rx="2" fill="#DDF1FF" stroke="#3B8FC2" strokeWidth="1.6" />

      {/* Kaca Samping */}
      <g fill="#DDF1FF" stroke="#3B8FC2" strokeWidth="1.2">
        <rect x="-18" y="-16" width="7" height="3" rx="1" />
        <rect x="-8" y="-16" width="7" height="3" rx="1" />
        <rect x="2" y="-16" width="7" height="3" rx="1" />
        <rect x="-18" y="13" width="7" height="3" rx="1" />
        <rect x="-8" y="13" width="7" height="3" rx="1" />
        <rect x="2" y="13" width="7" height="3" rx="1" />
      </g>

      {/* Panel Atap Putih */}
      <rect x="-20" y="-11" width="33" height="22" rx="5" fill="#FFFDF8" stroke="#E6C844" strokeWidth="1.5" />

      {/* Ventilasi/Badge 'TK' */}
      <rect x="-9" y="-7" width="14" height="14" rx="3" fill="#FFEFA6" stroke="#3B8FC2" strokeWidth="1.2" />
      <text x="-2" y="3" textAnchor="middle" fill="#2B5B84" fontSize="7" fontWeight="900" fontFamily="Nunito, sans-serif">TK</text>

      {/* Spion Samping */}
      <rect x="18" y="-22" width="3.5" height="4" rx="1" fill="#FFC93C" stroke="#2B5B84" strokeWidth="1.2" />
      <rect x="18" y="18" width="3.5" height="4" rx="1" fill="#FFC93C" stroke="#2B5B84" strokeWidth="1.2" />

      {/* Lampu Depan (Kuning Terang) */}
      <circle cx="31" cy="-8" r="2.8" fill="#FFF8E7" stroke="#FF9F1C" strokeWidth="1.2" />
      <circle cx="31" cy="8" r="2.8" fill="#FFF8E7" stroke="#FF9F1C" strokeWidth="1.2" />

      {/* Lampu Belakang (Merah) */}
      <rect x="-33" y="-11" width="2" height="5" rx="1" fill="#E63946" />
      <rect x="-33" y="6" width="2" height="5" rx="1" fill="#E63946" />
    </svg>
  )
}

export default function GalleryPage() {
  const timelineRef = useRef(null)
  const busRef = useRef(null)
  const progressRoadRef = useRef(null)
  const itemRefs = useRef([])

  useEffect(() => {
    const timeline = timelineRef.current
    const bus = busRef.current
    const progressRoad = progressRoadRef.current
    if (!timeline || !bus) return undefined

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let animationFrame = 0

    const updateProgress = () => {
      animationFrame = 0
      const timelineRect = timeline.getBoundingClientRect()
      const windowH = window.innerHeight

      // Titik paling atas jalur rute (mulai dari ujung garis paling atas, bukan langsung di checkpoint 1)
      const roadStartY = 16
      const roadStartPageY = timelineRect.top + window.scrollY + roadStartY

      // Ambil posisi setiap checkpoint marker di dalam timeline
      const markerPositions = itemRefs.current.map((item) => {
        if (!item) return { localY: 0, pageY: 0 }
        const marker = item.querySelector('.gallery-timeline-marker')
        const targetEl = marker || item
        const rect = targetEl.getBoundingClientRect()
        return {
          localY: rect.top - timelineRect.top + rect.height / 2,
          pageY: rect.top + window.scrollY + rect.height / 2,
        }
      })

      const firstMarker = markerPositions[0]
      const lastMarker = markerPositions[markerPositions.length - 1]
      if (!firstMarker || !lastMarker) return

      // Titik akhir rute (di bawah checkpoint terakhir)
      const roadEndY = lastMarker.localY + 36
      const roadEndPageY = timelineRect.top + window.scrollY + roadEndY

      // Titik pemicu scroll di layar pengguna
      const scrollTrigger = window.scrollY + windowH * 0.46
      const totalTravel = roadEndPageY - roadStartPageY
      const currentTravel = scrollTrigger - roadStartPageY
      const rawProgress = totalTravel > 0 ? currentTravel / totalTravel : 0
      const progress = reducedMotion.matches
        ? 1
        : Math.max(0, Math.min(1, rawProgress))

      // Posisi bus: Mulai tepat di ujung paling atas garis (roadStartY), melaju ke bawah seiring scroll
      const busY = roadStartY + (roadEndY - roadStartY) * progress
      bus.style.top = `${busY}px`

      // Garis progres aktif tipis yang mengisi seiring bus melaju
      if (progressRoad) {
        progressRoad.style.top = `${roadStartY}px`
        progressRoad.style.height = `${Math.max(0, busY - roadStartY)}px`
      }

      // Setiap bus sampai di checkpoint -> BARU TAMPILKAN FOTO & DESKRIPSI
      itemRefs.current.forEach((item, index) => {
        if (!item) return
        const markerPos = markerPositions[index]
        // Hanya tampil saat bus benar-benar telah mencapai checkpoint tersebut
        const arrived = reducedMotion.matches || busY >= (markerPos.localY - 12)
        item.classList.toggle('is-arrived', arrived)
      })
    }

    const scheduleProgressUpdate = () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(updateProgress)
    }

    window.addEventListener('scroll', scheduleProgressUpdate, { passive: true })
    window.addEventListener('resize', scheduleProgressUpdate)
    reducedMotion.addEventListener('change', scheduleProgressUpdate)

    // Inisialisasi posisi awal bus di ujung atas rute
    scheduleProgressUpdate()

    return () => {
      window.removeEventListener('scroll', scheduleProgressUpdate)
      window.removeEventListener('resize', scheduleProgressUpdate)
      reducedMotion.removeEventListener('change', scheduleProgressUpdate)
      window.cancelAnimationFrame(animationFrame)
    }
  }, [])

  const handleMarkerClick = (index) => {
    const item = itemRefs.current[index]
    if (!item) return
    const marker = item.querySelector('.gallery-timeline-marker')
    const targetEl = marker || item
    const rect = targetEl.getBoundingClientRect()
    const targetY = rect.top + window.scrollY - window.innerHeight * 0.42
    window.scrollTo({ top: targetY, behavior: 'smooth' })
  }

  return (
    <section className="page-section gallery-page">
      {/* Awan dekoratif melayang */}
      <GalleryCloud variant="puffy" className="gallery-cloud-1" />
      <GalleryCloud variant="wide" className="gallery-cloud-2" />
      <GalleryCloud variant="tall" className="gallery-cloud-3" />

      {/* Doodle ornamen ceria */}
      <GalleryDoodle variant="star" className="gallery-doodle-star-1" />
      <GalleryDoodle variant="sun" className="gallery-doodle-sun" />
      <GalleryDoodle variant="rainbow" className="gallery-doodle-rainbow" />
      <GalleryDoodle variant="pencil" className="gallery-doodle-pencil" />
      <GalleryDoodle variant="flower" className="gallery-doodle-flower" />
      <GalleryDoodle variant="abc" className="gallery-doodle-abc" />
      <GalleryDoodle variant="heart" className="gallery-doodle-heart" />

      <header className="gallery-heading">
        <div className="gallery-kicker-pill">
          <span className="gallery-kicker-dot" />
          <span>KEGIATAN HARIAN KELOMPOK A</span>
        </div>
        <h1 className="section-title">Galeri Kegiatan</h1>
        <p className="gallery-intro">
          Rangkaian kegiatan harian TKN Pembina Kota Cimahi - dari penyambutan hingga penutup, setiap momen dirancang penuh kasih untuk tumbuh kembang si kecil.
        </p>
        <p className="gallery-schedule-meta">Tahun Ajaran 2026-2027 &bull; Kelompok A</p>
      </header>

      <div className="gallery-timeline" ref={timelineRef}>
        {/* Titik Awal Mulai Garis di Atas */}
        <div className="gallery-road-start-node" aria-hidden="true" />

        {/* Jalur Rute Lurus: Garis Tipis Putus-putus Satu Sumbu Konsisten */}
        <div className="gallery-straight-road" aria-hidden="true" />

        {/* Jalur Progres Aktif: Garis Biru Tipis Mengikuti Laju Bus */}
        <div className="gallery-road-progress" ref={progressRoadRef} aria-hidden="true" />

        {/* Bus Sekolah yang melaju mulai dari ujung atas rute */}
        <div className="gallery-bus-track" ref={busRef} aria-hidden="true">
          <div className="gallery-bus-motion">
            <TopDownSchoolBusGraphic />
          </div>
        </div>

        {/* Daftar Checkpoint: Foto & Deskripsi Dibuat Sejajar (Konsisten di Desktop & Mobile) */}
        {activities.map((activity, index) => (
          <article
            className="gallery-timeline-item"
            ref={(el) => { itemRefs.current[index] = el }}
            key={activity.title}
          >
            {/* Sisi Kiri: Polaroid Photo Card (Waktu duplikat di bawah foto dihapus) */}
            <figure className="gallery-photo">
              <div className="gallery-photo-inner">
                <img src={activity.image} alt={activity.alt} loading="lazy" />
                <span className="gallery-photo-badge" aria-hidden="true">
                  #{index + 1}
                </span>
              </div>
            </figure>

            {/* Kolom Tengah: Checkpoint Marker Tepat di Satu Sumbu Garis Lurus */}
            <div className="gallery-marker-col">
              <button
                type="button"
                className="gallery-timeline-marker"
                onClick={() => handleMarkerClick(index)}
                aria-label={`Pemberhentian ke-${index + 1}: ${activity.title} (${activity.category})`}
                title={`Klik untuk melaju ke ${activity.title}`}
              >
                <span>{index + 1}</span>
              </button>
            </div>

            {/* Sisi Kanan: Text Description Card (Waktu kegiatan tampil sekali di atas judul) */}
            <div className="gallery-copy">
              <div className="gallery-copy-header">
                <div className="gallery-icon-badge">
                  {activity.icon}
                </div>
                <div className="gallery-time-badge">
                  <IconClock />
                  <span>{activity.category}</span>
                </div>
              </div>
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
            </div>
          </article>
        ))}

        {/* Tanda Selesai di Bawah */}
        <div className="gallery-finish-badge">
          <span>Kegiatan Selesai &bull; Siap Pulang dengan Ceria!</span>
        </div>
      </div>

      <style>{`
        .gallery-page {
          --gallery-cream: #FFFDF8;
          --gallery-blue: #6BB5E3;
          --gallery-blue-dark: #3B8FC2;
          --gallery-navy: #30465A;
          --gallery-muted: #5B7282;
          position: relative;
          overflow-x: clip;
          padding: clamp(1.5rem, 4vw, 3.5rem);
          border-color: rgba(107, 181, 227, 0.28);
          background:
            radial-gradient(ellipse at 8% 10%, rgba(107, 181, 227, 0.14), transparent 30%),
            radial-gradient(ellipse at 92% 50%, rgba(221, 241, 255, 0.55), transparent 32%),
            radial-gradient(ellipse at 12% 90%, rgba(255, 212, 92, 0.12), transparent 28%),
            var(--gallery-cream);
        }

        /* Decorative background clouds */
        .gallery-cloud {
          position: absolute;
          z-index: 0;
          pointer-events: none;
          opacity: 0.45;
          transition: transform 600ms ease;
        }

        .gallery-cloud-1 { top: 3rem; right: -2rem; width: clamp(110px, 12vw, 160px); }
        .gallery-cloud-2 { top: 45%; left: -2.5rem; width: clamp(120px, 14vw, 180px); }
        .gallery-cloud-3 { bottom: 8rem; right: -2rem; width: clamp(100px, 11vw, 150px); }

        /* Decorative doodles */
        .gallery-doodle {
          position: absolute;
          z-index: 0;
          pointer-events: none;
          opacity: 0.35;
          animation: gallery-doodle-bob 4.5s ease-in-out infinite alternate;
        }

        .gallery-doodle-star-1 { top: 2rem; left: 12%; width: 36px; height: 36px; }
        .gallery-doodle-sun { top: 6rem; right: 10%; width: 48px; height: 48px; }
        .gallery-doodle-rainbow { top: 24%; left: 2%; width: 50px; height: 50px; }
        .gallery-doodle-pencil { top: 45%; right: 2%; width: 42px; height: 42px; }
        .gallery-doodle-flower { top: 65%; left: 3%; width: 44px; height: 44px; }
        .gallery-doodle-abc { top: 80%; right: 3%; width: 48px; height: 48px; }
        .gallery-doodle-heart { bottom: 3rem; left: 10%; width: 38px; height: 38px; }

        @keyframes gallery-doodle-bob {
          0% { transform: translateY(0) rotate(0deg); }
          100% { transform: translateY(-7px) rotate(4deg); }
        }

        /* Header */
        .gallery-heading {
          position: relative;
          z-index: 1;
          margin: 0 auto clamp(2rem, 4.5vw, 3.5rem);
          text-align: center;
          padding: 0 0.5rem;
        }

        .gallery-kicker-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.65rem;
          padding: 0.35rem 0.95rem;
          border: 1px solid rgba(59, 143, 194, 0.28);
          border-radius: 999px;
          background: rgba(221, 241, 255, 0.7);
          color: var(--gallery-blue-dark);
          font-size: 0.74rem;
          font-weight: 900;
          letter-spacing: 0.12em;
        }

        .gallery-kicker-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--gallery-blue-dark);
        }

        .gallery-heading .section-title {
          margin: 0;
          color: var(--gallery-navy);
          font-family: 'Chewy', 'Nunito', sans-serif;
          font-size: clamp(2.2rem, 5vw, 3.4rem);
          font-weight: 400;
          line-height: 1.15;
          letter-spacing: 0.02em;
        }

        .gallery-intro {
          max-width: 44rem;
          margin: 0.85rem auto 0;
          color: var(--gallery-muted);
          font-size: clamp(0.95rem, 1.25vw, 1.05rem);
          line-height: 1.65;
        }

        .gallery-schedule-meta {
          max-width: 44rem;
          margin: 0.5rem auto 0;
          color: var(--gallery-blue-dark);
          font-size: 0.88rem;
          font-weight: 800;
          letter-spacing: 0.04em;
        }

        /* -------------------------------------------------------------
           TIMELINE CONTAINER (SATU SUMBU VERTIKAL KONSISTEN)
        ------------------------------------------------------------- */
        .gallery-timeline {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: clamp(2.5rem, 5vw, 4.5rem);
          width: min(100%, 1060px);
          margin: 0 auto;
          padding: 4.5rem 0 3.5rem;
          box-sizing: border-box;
        }

        /* Titik Start di Ujung Atas Jalur */
        .gallery-road-start-node {
          position: absolute;
          top: 16px;
          left: 50%;
          width: 10px;
          height: 10px;
          transform: translate(-50%, -50%);
          background: #FFFFFF;
          border: 2.5px solid #6BB5E3;
          border-radius: 50%;
          box-shadow: 0 0 0 3px rgba(107, 181, 227, 0.4);
          z-index: 2;
        }

        /* Jalur Rute Lurus: Garis Tipis (2px dashed) di Sumbu Tengah */
        .gallery-straight-road {
          position: absolute;
          top: 16px;
          bottom: 2.5rem;
          left: 50%;
          width: 0;
          border-left: 2px dashed rgba(59, 143, 194, 0.45);
          transform: translateX(-50%);
          z-index: 1;
        }

        /* Garis Progres Aktif: Garis Biru Tipis (2.5px solid) */
        .gallery-road-progress {
          position: absolute;
          top: 16px;
          left: 50%;
          width: 2.5px;
          transform: translateX(-50%);
          background: #3B8FC2;
          border-radius: 999px;
          box-shadow: 0 0 6px rgba(59, 143, 194, 0.5);
          z-index: 2;
          pointer-events: none;
          transition: height 75ms ease-out;
        }

        /* Bus Sekolah Berada di Sumbu Tengah Lurus yang Sama */
        .gallery-bus-track {
          position: absolute;
          left: 50%;
          z-index: 5;
          width: 46px;
          height: 46px;
          pointer-events: none;
          transform: translate(-50%, -50%);
          will-change: top;
          transition: top 75ms ease-out;
        }

        .gallery-bus-motion {
          display: block;
          width: 100%;
          height: 100%;
          transform: rotate(90deg); /* Menghadap lurus ke bawah rute */
          animation: gallery-bus-rumble 1.6s ease-in-out infinite;
        }

        @keyframes gallery-bus-rumble {
          0%, 100% { transform: rotate(90deg) scale(1); }
          50% { transform: rotate(90deg) scale(1.03); }
        }

        .gallery-bus-svg {
          display: block;
          width: 100%;
          height: 100%;
          overflow: visible;
          filter: drop-shadow(0 4px 10px rgba(48, 70, 90, 0.22));
        }

        /* -------------------------------------------------------------
           TIMELINE ITEMS: SEJAJAR SIMETRIS (1fr - 64px - 1fr)
           Menjamin kolom tengah selalu persis di 50%
        ------------------------------------------------------------- */
        .gallery-timeline-item {
          position: relative;
          z-index: 3;
          display: grid;
          grid-template-columns: 1fr 64px 1fr;
          align-items: center;
          column-gap: clamp(0.75rem, 2vw, 2.5rem);
          width: 100%;
          box-sizing: border-box;
        }

        /* Kolom Tengah Checkpoint Marker: Tepat di Sumbu Tengah */
        .gallery-marker-col {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          position: relative;
          z-index: 4;
        }

        .gallery-timeline-marker {
          display: grid;
          width: 40px;
          height: 40px;
          place-items: center;
          border: 3.5px solid var(--gallery-cream);
          border-radius: 50%;
          background: #B8DDF4;
          color: #30465A;
          font-family: 'Nunito', sans-serif;
          font-size: 0.95rem;
          font-weight: 900;
          box-shadow: 0 0 0 2px rgba(59, 143, 194, 0.35), 0 3px 8px rgba(48, 70, 90, 0.12);
          cursor: pointer;
          transition: all 280ms cubic-bezier(0.2, 0.8, 0.3, 1);
          padding: 0;
          margin: 0 auto;
        }

        .gallery-timeline-marker:hover {
          transform: scale(1.12);
          border-color: #FFFFFF;
        }

        /* Status Aktif saat Bus sampai di checkpoint */
        .gallery-timeline-item.is-arrived .gallery-timeline-marker {
          background: var(--gallery-blue-dark);
          color: #FFFFFF;
          box-shadow: 0 0 0 5px rgba(107, 181, 227, 0.4), 0 5px 14px rgba(59, 143, 194, 0.35);
          transform: scale(1.12);
        }

        /* -------------------------------------------------------------
           SEJAJAR: FOTO DI KIRI, DESKRIPSI DI KANAN
           BARU TAMPIL SAAT BUS SAMPAI DI CHECKPOINT
        ------------------------------------------------------------- */
        .gallery-photo,
        .gallery-copy {
          opacity: 0;
          pointer-events: none;
          transition: opacity 500ms cubic-bezier(0.16, 1, 0.3, 1),
                      transform 500ms cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 250ms ease,
                      border-color 250ms ease;
        }

        /* Animasi masuk sejajar dari samping */
        .gallery-photo {
          justify-self: end;
          width: min(100%, 390px);
          transform: translateX(-24px) scale(0.96);
          margin: 0;
          padding: 8px 8px 10px;
          border: 1px solid rgba(107, 181, 227, 0.25);
          border-radius: 18px;
          background: #FFFFFF;
          box-shadow: 0 14px 32px rgba(48, 70, 90, 0.12);
          box-sizing: border-box;
        }

        .gallery-copy {
          justify-self: start;
          width: min(100%, 410px);
          transform: translateX(24px) scale(0.96);
          padding: clamp(1.15rem, 2.2vw, 1.75rem);
          border: 2px solid rgba(107, 181, 227, 0.32);
          border-radius: 1.5rem;
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(8px);
          box-shadow: 0 12px 28px rgba(48, 70, 90, 0.07);
          box-sizing: border-box;
        }

        /* Saat bus sampai (is-arrived): TAMPILKAN SEJAJAR */
        .gallery-timeline-item.is-arrived .gallery-photo {
          opacity: 1;
          pointer-events: auto;
          transform: translateX(0) scale(1);
        }

        .gallery-timeline-item.is-arrived .gallery-copy {
          opacity: 1;
          pointer-events: auto;
          transform: translateX(0) scale(1);
        }

        .gallery-photo-inner {
          position: relative;
          aspect-ratio: 4 / 3;
          border-radius: 12px;
          overflow: hidden;
          background: #DDF1FF;
        }

        .gallery-photo-inner img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 350ms ease;
        }

        .gallery-photo-badge {
          position: absolute;
          top: 0.65rem;
          left: 0.65rem;
          display: grid;
          padding: 0.22rem 0.65rem;
          border: 2px solid #FFFFFF;
          border-radius: 999px;
          background: rgba(48, 70, 90, 0.78);
          backdrop-filter: blur(4px);
          color: #FFFFFF;
          font-family: 'Nunito', sans-serif;
          font-size: 0.76rem;
          font-weight: 900;
          letter-spacing: 0.05em;
          box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
        }

        .gallery-copy-header {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          margin-bottom: 0.75rem;
        }

        .gallery-icon-badge {
          display: grid;
          width: 2.5rem;
          height: 2.5rem;
          flex: 0 0 auto;
          place-items: center;
          border-radius: 0.8rem;
          background: #DDF1FF;
          color: var(--gallery-blue-dark);
          box-shadow: inset 0 2px 4px rgba(255, 255, 255, 0.7);
        }

        /* Badge waktu kegiatan tunggal sebelum judul */
        .gallery-time-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.25rem 0.7rem;
          border-radius: 999px;
          background: rgba(107, 181, 227, 0.18);
          color: var(--gallery-blue-dark);
          font-size: 0.75rem;
          font-weight: 850;
          letter-spacing: 0.04em;
        }

        .gallery-time-badge svg {
          flex-shrink: 0;
          opacity: 0.85;
        }

        .gallery-copy h3 {
          margin: 0 0 0.4rem;
          color: var(--gallery-navy);
          font-family: 'Nunito', sans-serif;
          font-size: clamp(1.15rem, 1.8vw, 1.4rem);
          font-weight: 900;
          line-height: 1.25;
        }

        .gallery-copy p {
          margin: 0;
          color: var(--gallery-muted);
          font-size: 0.92rem;
          line-height: 1.6;
        }

        /* Hover interactions */
        @media (hover: hover) and (prefers-reduced-motion: no-preference) {
          .gallery-photo:hover {
            box-shadow: 0 18px 40px rgba(48, 70, 90, 0.18);
            transform: translateY(-3px) scale(1.015);
          }

          .gallery-photo:hover .gallery-photo-inner img {
            transform: scale(1.04);
          }

          .gallery-copy:hover {
            border-color: rgba(59, 143, 194, 0.55);
            box-shadow: 0 16px 36px rgba(59, 143, 194, 0.14);
            transform: translateY(-3px);
          }
        }

        /* Tanda Finish */
        .gallery-finish-badge {
          align-self: center;
          margin-top: 1.5rem;
          padding: 0.6rem 1.4rem;
          border-radius: 999px;
          background: #3B8FC2;
          color: #FFFFFF;
          font-family: 'Nunito', sans-serif;
          font-size: 0.86rem;
          font-weight: 900;
          letter-spacing: 0.04em;
          box-shadow: 0 8px 20px rgba(59, 143, 194, 0.35);
          text-align: center;
          z-index: 3;
        }

        /* -------------------------------------------------------------
           RESPONSIVE: TAMPILAN MOBILE IDENTIK DENGAN WEB
           (TETAP SEJAJAR SIMETRIS 1fr - 34px - 1fr, DIPERKECIL PROPORSIONAL)
        ------------------------------------------------------------- */
        @media (max-width: 768px) {
          .gallery-page {
            padding: 1.25rem 0.5rem 2.5rem;
          }

          .gallery-timeline {
            padding: 3.5rem 0 2rem;
            gap: 1.75rem;
            width: 100%;
          }

          /* Tetap 3 Kolom Simetris Sejajar: Foto di kiri, Marker di tengah, Deskripsi di kanan */
          .gallery-timeline-item {
            grid-template-columns: 1fr 34px 1fr;
            column-gap: 8px;
            align-items: center;
          }

          /* Bus proporsional mobile */
          .gallery-bus-track {
            width: 32px;
            height: 32px;
          }

          /* Jalur tipis 2px di tengah */
          .gallery-straight-road {
            border-left-width: 2px;
          }

          .gallery-road-progress {
            width: 2px;
          }

          /* Marker proporsional mobile */
          .gallery-timeline-marker {
            width: 28px;
            height: 28px;
            font-size: 0.72rem;
            border-width: 2px;
          }

          .gallery-timeline-item.is-arrived .gallery-timeline-marker {
            box-shadow: 0 0 0 3.5px rgba(107, 181, 227, 0.4), 0 3px 8px rgba(59, 143, 194, 0.35);
          }

          /* Foto diperkecil rapi & proporsional */
          .gallery-photo {
            width: 100%;
            max-width: 100%;
            margin: 0;
            padding: 4px 4px 6px;
            border-radius: 12px;
            box-shadow: 0 4px 14px rgba(48, 70, 90, 0.09);
          }

          .gallery-photo-inner {
            border-radius: 8px;
            aspect-ratio: 4 / 3;
          }

          .gallery-photo-badge {
            top: 0.3rem;
            left: 0.3rem;
            padding: 0.1rem 0.4rem;
            font-size: 0.58rem;
            border-width: 1.5px;
          }

          /* Deskripsi diperkecil rapi & seimbang */
          .gallery-copy {
            width: 100%;
            max-width: 100%;
            margin: 0;
            padding: 0.65rem 0.55rem;
            border-radius: 13px;
            border-width: 1.5px;
          }

          .gallery-copy-header {
            gap: 0.35rem;
            margin-bottom: 0.35rem;
          }

          .gallery-icon-badge {
            width: 1.6rem;
            height: 1.6rem;
            border-radius: 0.5rem;
          }

          .gallery-icon-badge svg {
            width: 13px;
            height: 13px;
          }

          .gallery-time-badge {
            font-size: 0.6rem;
            padding: 0.15rem 0.45rem;
            gap: 0.25rem;
          }

          .gallery-copy h3 {
            font-size: 0.82rem;
            margin-bottom: 0.2rem;
            line-height: 1.25;
          }

          .gallery-copy p {
            font-size: 0.68rem;
            line-height: 1.4;
          }

          .gallery-finish-badge {
            font-size: 0.75rem;
            padding: 0.4rem 0.9rem;
            margin-top: 1rem;
          }

          .gallery-cloud,
          .gallery-doodle {
            display: none;
          }
        }

        @media (max-width: 380px) {
          .gallery-timeline-item {
            grid-template-columns: 1fr 28px 1fr;
            column-gap: 5px;
          }

          .gallery-timeline-marker {
            width: 24px;
            height: 24px;
            font-size: 0.65rem;
            border-width: 2px;
          }

          .gallery-bus-track {
            width: 28px;
            height: 28px;
          }

          .gallery-copy {
            padding: 0.5rem 0.4rem;
          }

          .gallery-copy h3 {
            font-size: 0.76rem;
          }

          .gallery-copy p {
            font-size: 0.64rem;
            line-height: 1.35;
          }
        }

        @media (max-width: 540px) {
          .gallery-timeline {
            padding-top: 3rem;
          }

          .gallery-road-start-node,
          .gallery-straight-road,
          .gallery-road-progress,
          .gallery-bus-track {
            left: 16px;
          }

          .gallery-timeline-item {
            grid-template-columns: 32px minmax(0, 1fr);
            align-items: stretch;
            column-gap: 0.65rem;
            row-gap: 0.75rem;
          }

          .gallery-photo {
            grid-column: 2;
            grid-row: 1;
            justify-self: stretch;
          }

          .gallery-marker-col {
            grid-column: 1;
            grid-row: 1 / span 2;
            align-items: center;
          }

          .gallery-copy {
            grid-column: 2;
            grid-row: 2;
            justify-self: stretch;
          }

          .gallery-copy-header {
            flex-wrap: wrap;
          }

          .gallery-time-badge {
            max-width: 100%;
            white-space: normal;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .gallery-bus-motion {
            animation: none;
          }

          .gallery-photo,
          .gallery-copy,
          .gallery-timeline-marker {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }

          .gallery-doodle {
            animation: none;
          }
        }
      `}</style>
    </section>
  )
}
