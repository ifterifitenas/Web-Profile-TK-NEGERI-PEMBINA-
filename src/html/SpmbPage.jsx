import { useEffect, useRef } from 'react'

function IconCalendar() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="3" ry="3" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <circle cx="8" cy="15" r="1" fill="currentColor" />
      <circle cx="12" cy="15" r="1" fill="currentColor" />
      <circle cx="16" cy="15" r="1" fill="currentColor" />
    </svg>
  )
}

function IconChild() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <circle cx="9" cy="9.5" r="1" fill="currentColor" />
      <circle cx="15" cy="9.5" r="1" fill="currentColor" />
    </svg>
  )
}

function IconBackpack() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 10a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v9a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-9z" />
      <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
      <rect x="8" y="12" width="8" height="5" rx="1.5" />
    </svg>
  )
}

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function IconDocument() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  )
}

function IconSchool() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function IconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15-.2.301-.777.978-.953 1.18-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.799-1.5-1.786-1.676-2.087-.175-.301-.019-.464.132-.614.135-.135.301-.351.451-.527.151-.175.201-.301.301-.502.101-.2.05-.376-.025-.526-.075-.15-.678-1.634-.928-2.237-.244-.588-.492-.508-.678-.518-.175-.009-.376-.009-.577-.009-.201 0-.527.075-.803.376-.276.301-1.054 1.03-1.054 2.511 0 1.481 1.079 2.91 1.229 3.111.151.201 2.123 3.242 5.143 4.547.718.311 1.279.496 1.716.635.722.23 1.379.197 1.9.12.58-.088 1.78-.727 2.03-1.43.25-.703.25-1.306.175-1.431-.075-.125-.276-.201-.577-.351zM12.04 2C6.52 2 2.04 6.48 2.04 12c0 1.83.49 3.55 1.35 5.04L2 22l5.12-1.34c1.44.79 3.09 1.24 4.92 1.24 5.52 0 10-4.48 10-10S17.56 2 12.04 2z" />
    </svg>
  )
}

function IconArrowDown() {
  return (
    <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="10" y1="4" x2="10" y2="16" />
      <polyline points="5 11 10 16 15 11" />
    </svg>
  )
}

function IconCheck() {
  return (
    <svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="4 10 8 14 16 6" />
    </svg>
  )
}

function SpmbCloud({ className = '', variant = 'puffy' }) {
  const cloudPaths = {
    puffy: 'M18 58h68a18 18 0 0 0 0-36 24 24 0 0 0-45-6 21 21 0 0 0-33 17 13 13 0 0 0 10 25Z',
    wide: 'M14 62h76a16 16 0 0 0 0-32 20 20 0 0 0-37-8 19 19 0 0 0-29 15 12 12 0 0 0 0 25Z',
    tall: 'M22 66h58a17 17 0 0 0 3-34 22 22 0 0 0-41-11 18 18 0 0 0-26 19 13 13 0 0 0 6 26Z',
  }

  return (
    <svg className={`spmb-cloud ${className}`} viewBox="0 0 104 74" aria-hidden="true" focusable="false">
      <path d={cloudPaths[variant] || cloudPaths.puffy} fill="#FFFFFF" stroke="#69B7E5" strokeWidth="3" strokeLinejoin="round" />
    </svg>
  )
}

function SpmbDoodle({ variant = 'star', className = '' }) {
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
    book: (
      <>
        <path d="M50 31c-12-9-26-11-38-7v52c14-4 27-2 38 7Zm0 0c12-9 26-11 38-7v52c-14-4-27-2-38 7Z" fill="#FFFDF8" stroke="#69B7E5" />
        <path d="M50 31v52M22 38c9-2 17 0 23 4M78 38c-9-2-17 0-23 4" fill="none" stroke="#69B7E5" />
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
    <svg className={`spmb-doodle ${className}`} viewBox="0 0 100 100" aria-hidden="true" focusable="false">
      <g strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        {doodles[variant] || doodles.star}
      </g>
    </svg>
  )
}

function TopDownSchoolBus() {
  return (
    <g className="spmb-bus-graphic">
      {/* Soft vehicle shadow */}
      <ellipse cx="0" cy="1" rx="36" ry="20" fill="rgba(30, 50, 75, 0.16)" />

      {/* Tires visible on sides */}
      <rect x="-24" y="-21" width="12" height="4.5" rx="2" fill="#2B3A4A" />
      <rect x="12" y="-21" width="12" height="4.5" rx="2" fill="#2B3A4A" />
      <rect x="-24" y="16.5" width="12" height="4.5" rx="2" fill="#2B3A4A" />
      <rect x="12" y="16.5" width="12" height="4.5" rx="2" fill="#2B3A4A" />

      {/* Main Bus Body (Warm golden-yellow) */}
      <rect x="-32" y="-18" width="64" height="36" rx="10" fill="#FFC93C" stroke="#2B5B84" strokeWidth="2.8" />

      {/* Front and rear bumpers */}
      <rect x="30" y="-13" width="4.5" height="26" rx="2" fill="#30465A" stroke="#2B5B84" strokeWidth="1.5" />
      <rect x="-34.5" y="-13" width="4.5" height="26" rx="2" fill="#30465A" stroke="#2B5B84" strokeWidth="1.5" />

      {/* Front Windshield (curved light blue glass) */}
      <path d="M15 -14 h6 a 5 5 0 0 1 5 5 v18 a 5 5 0 0 1 -5 5 h-6 z" fill="#DDF1FF" stroke="#3B8FC2" strokeWidth="2.2" />
      <line x1="21" y1="-10" x2="23" y2="10" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.85" />

      {/* Rear window */}
      <rect x="-28" y="-13" width="5" height="26" rx="2" fill="#DDF1FF" stroke="#3B8FC2" strokeWidth="1.8" />

      {/* Side Windows */}
      <g fill="#DDF1FF" stroke="#3B8FC2" strokeWidth="1.2">
        <rect x="-18" y="-16" width="7" height="3" rx="1" />
        <rect x="-8" y="-16" width="7" height="3" rx="1" />
        <rect x="2" y="-16" width="7" height="3" rx="1" />
        <rect x="-18" y="13" width="7" height="3" rx="1" />
        <rect x="-8" y="13" width="7" height="3" rx="1" />
        <rect x="2" y="13" width="7" height="3" rx="1" />
      </g>

      {/* White Roof panel */}
      <rect x="-20" y="-11" width="33" height="22" rx="5" fill="#FFFDF8" stroke="#E6C844" strokeWidth="1.5" />

      {/* Roof Hatch / Badge with 'TK' */}
      <rect x="-9" y="-7" width="14" height="14" rx="3" fill="#FFEFA6" stroke="#3B8FC2" strokeWidth="1.2" />
      <text x="-2" y="3" textAnchor="middle" fill="#2B5B84" fontSize="7" fontWeight="900" fontFamily="Nunito, sans-serif">TK</text>

      {/* Side Mirrors */}
      <rect x="18" y="-22" width="3.5" height="4" rx="1" fill="#FFC93C" stroke="#2B5B84" strokeWidth="1.2" />
      <rect x="18" y="18" width="3.5" height="4" rx="1" fill="#FFC93C" stroke="#2B5B84" strokeWidth="1.2" />

      {/* Headlights (Front warm amber lights) */}
      <circle cx="31" cy="-8" r="2.8" fill="#FFF8E7" stroke="#FF9F1C" strokeWidth="1.2" />
      <circle cx="31" cy="8" r="2.8" fill="#FFF8E7" stroke="#FF9F1C" strokeWidth="1.2" />

      {/* Taillights (Rear red) */}
      <rect x="-33" y="-11" width="2" height="5" rx="1" fill="#E63946" />
      <rect x="-33" y="6" width="2" height="5" rx="1" fill="#E63946" />
    </g>
  )
}

function SchoolEntrance({ leftGateRef, rightGateRef }) {
  return (
    <g className="spmb-entrance-group">
      {/* School building roof & body */}
      <path d="M-118 -74 0-158l118 84Z" fill="#FFD45C" stroke="#3B8FC2" strokeWidth="6" strokeLinejoin="round" />
      <rect x="-100" y="-78" width="200" height="78" rx="8" fill="#FFF8E7" stroke="#3B8FC2" strokeWidth="5" />
      <rect x="-73" y="-58" width="37" height="34" rx="5" fill="#DDF1FF" stroke="#6BB5E3" strokeWidth="3" />
      <rect x="36" y="-58" width="37" height="34" rx="5" fill="#DDF1FF" stroke="#6BB5E3" strokeWidth="3" />
      <path d="M-18 0v-53a18 18 0 0 1 36 0V0" fill="#6BB5E3" stroke="#3B8FC2" strokeWidth="4" />
      
      {/* Title signboard */}
      <rect x="-58" y="-140" width="116" height="30" rx="9" fill="#FFFFFF" stroke="#3B8FC2" strokeWidth="4" />
      <text x="0" y="-120" textAnchor="middle" fill="#30465A" fontSize="16" fontWeight="900" fontFamily="Nunito, sans-serif">TK PEMBINA</text>

      {/* Gates */}
      <rect ref={leftGateRef} className="spmb-gate-leaf spmb-gate-left" x="-98" y="-4" width="46" height="58" rx="4" fill="#6BB5E3" stroke="#3B8FC2" strokeWidth="4" />
      <rect ref={rightGateRef} className="spmb-gate-leaf spmb-gate-right" x="52" y="-4" width="46" height="58" rx="4" fill="#6BB5E3" stroke="#3B8FC2" strokeWidth="4" />
      <path d="M-88 12h26m-26 16h26m72-16h26m-26 16h26" stroke="#FFF8E7" strokeWidth="3.5" strokeLinecap="round" />
    </g>
  )
}

const registrationSteps = [
  {
    number: '01',
    title: 'Hubungi Sekolah',
    text: 'Tanyakan informasi periode pendaftaran, kelompok usia, dan alur penerimaan kepada pihak sekolah.',
    icon: <IconPhone />,
  },
  {
    number: '02',
    title: 'Lengkapi Berkas',
    text: 'Siapkan dokumen calon peserta didik agar proses verifikasi data berjalan lancar dan mudah.',
    icon: <IconDocument />,
  },
  {
    number: '03',
    title: 'Kunjungan & Konfirmasi',
    text: 'Atur kunjungan untuk mengenal lingkungan sekolah dan melakukan konfirmasi pendaftaran si kecil.',
    icon: <IconSchool />,
  },
]

const registrationInfo = [
  { label: 'Periode', value: 'Menyusul sesuai pengumuman resmi', icon: <IconCalendar /> },
  { label: 'Usia Calon Siswa', value: 'Menyusul sesuai kelompok usia', icon: <IconChild /> },
  { label: 'Kuota Penerimaan', value: 'Menyusul sesuai daya tampung', icon: <IconBackpack /> },
]

const requiredDocuments = [
  'Akta kelahiran calon peserta didik (fotokopi & asli)',
  'Kartu Keluarga (KK) orang tua / wali',
  'Pas foto berwarna calon peserta didik',
  'Dokumen pendukung lain sesuai pengumuman sekolah',
]

const frequentlyAskedQuestions = [
  {
    question: 'Berapa usia minimal untuk mendaftar?',
    answer: 'Ketentuan usia calon peserta didik mengikuti petunjuk teknis pengumuman resmi sekolah. Silakan hubungi kami untuk informasi detail kelompok usia.',
  },
  {
    question: 'Apakah ada biaya formulir pendaftaran?',
    answer: 'Informasi administrasi dan ketentuan resmi akan disampaikan secara terbuka oleh pihak sekolah saat periode penerimaan dibuka.',
  },
  {
    question: 'Kapan orang tua dapat berkunjung ke sekolah?',
    answer: 'Kunjungan dapat dijadwalkan dengan menghubungi pihak sekolah terlebih dahulu agar tidak mengganggu aktivitas kegiatan belajar mengajar.',
  },
  {
    question: 'Bagaimana cara memastikan berkas sudah lengkap?',
    answer: 'Anda dapat mengonfirmasi checklist berkas kepada tim panitia penerimaan melalui WhatsApp sebelum menyerahkan berkas fisik ke sekolah.',
  },
]

const desktopRoutePath = 'M500 0 C500 120 230 120 230 270 S500 420 500 560 S770 700 770 840 S500 980 500 1080'
const mobileRoutePath = 'M80 0 L80 1100'
const stopProgress = [0.14, 0.40, 0.67]
const whatsappLink = 'https://wa.me/62226677954?text=Halo%2C%20saya%20ingin%20bertanya%20tentang%20pendaftaran%20SPMB%20TK%20Negeri%20Pembina.'

export default function SpmbPage() {
  const routeRef = useRef(null)
  const svgRef = useRef(null)
  const pathRef = useRef(null)
  const busRef = useRef(null)
  const gateRef = useRef(null)
  const leftGateRef = useRef(null)
  const rightGateRef = useRef(null)
  const finishRef = useRef(null)
  const markerRefs = useRef([])
  const stepRefs = useRef([])
  const supportingRefs = useRef([])

  useEffect(() => {
    const route = routeRef.current
    const svg = svgRef.current
    const path = pathRef.current
    const progressPath = svg?.querySelector('.spmb-route-progress')
    const bus = busRef.current
    const entrance = gateRef.current
    const finish = finishRef.current
    if (!route || !svg || !path || !bus || !entrance || !finish) return undefined

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const mobileQuery = window.matchMedia('(max-width: 760px)')
    const observers = []
    let animationFrame = 0
    let pathLength = path.getTotalLength()

    const syncRouteShape = () => {
      const mobile = mobileQuery.matches
      svg.setAttribute('viewBox', mobile ? '0 0 800 1180' : '0 0 1000 1180')
      path.setAttribute('d', mobile ? mobileRoutePath : desktopRoutePath)
      progressPath?.setAttribute('d', mobile ? mobileRoutePath : desktopRoutePath)
      pathLength = path.getTotalLength()
      scheduleProgressUpdate()
    }

    const updateProgress = () => {
      animationFrame = 0
      const routeRect = route.getBoundingClientRect()
      const windowH = window.innerHeight
      const startY = routeRect.top - windowH * 0.45
      const totalDist = routeRect.height - windowH * 0.2
      const rawProgress = totalDist > 0 ? -startY / totalDist : 0
      const progress = reducedMotion.matches
        ? 1
        : Math.max(0, Math.min(1, rawProgress))

      // Keep the bus driving smoothly and park just in front of the school gate
      const busProgress = progress * 0.92
      const currentLength = pathLength * busProgress

      // Tangent angle sampling ahead and behind for ultra-smooth rotation without abrupt flips
      const delta = Math.min(14, Math.max(4, pathLength * 0.015))
      const backLen = Math.max(0, currentLength - delta)
      const fwdLen = Math.min(pathLength, currentLength + delta)
      const pBack = path.getPointAtLength(backLen)
      const pFwd = path.getPointAtLength(fwdLen)
      const angle = Math.atan2(pFwd.y - pBack.y, pFwd.x - pBack.x) * (180 / Math.PI)

      const busPoint = path.getPointAtLength(currentLength)
      bus.setAttribute('transform', `translate(${busPoint.x} ${busPoint.y}) rotate(${angle})`)

      // Stop markers update
      stopProgress.forEach((stop, index) => {
        const markerPoint = path.getPointAtLength(pathLength * stop)
        markerRefs.current[index]?.setAttribute('transform', `translate(${markerPoint.x} ${markerPoint.y})`)
      })

      // School entrance placement
      const destination = path.getPointAtLength(pathLength)
      entrance.setAttribute('transform', `translate(${destination.x} ${destination.y})`)

      // Trace line
      if (progressPath) {
        progressPath.style.strokeDasharray = `${currentLength} ${pathLength}`
      }

      // Step cards state
      stopProgress.forEach((stop, index) => {
        const arrived = reducedMotion.matches || busProgress >= stop - 0.03
        markerRefs.current[index]?.classList.toggle('is-active', arrived)
        stepRefs.current[index]?.classList.toggle('is-arrived', arrived)
      })

      // Finish arrival and gate open
      const reachedSchool = reducedMotion.matches || progress >= 0.88
      entrance.classList.toggle('is-open', reachedSchool)
      finish.classList.toggle('is-visible', reachedSchool)
      leftGateRef.current?.classList.toggle('is-open', reachedSchool)
      rightGateRef.current?.classList.toggle('is-open', reachedSchool)
    }

    const scheduleProgressUpdate = () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(updateProgress)
    }

    if ('IntersectionObserver' in window) {
      const supportingObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      }, { threshold: 0.12, rootMargin: '0px 0px -24px 0px' })
      supportingRefs.current.forEach((element) => {
        if (element) supportingObserver.observe(element)
      })
      observers.push(supportingObserver)
    } else {
      supportingRefs.current.forEach((element) => element?.classList.add('is-visible'))
    }

    window.addEventListener('scroll', scheduleProgressUpdate, { passive: true })
    window.addEventListener('resize', syncRouteShape)
    reducedMotion.addEventListener('change', scheduleProgressUpdate)
    mobileQuery.addEventListener('change', syncRouteShape)
    syncRouteShape()
    updateProgress()

    return () => {
      window.removeEventListener('scroll', scheduleProgressUpdate)
      window.removeEventListener('resize', syncRouteShape)
      reducedMotion.removeEventListener('change', scheduleProgressUpdate)
      mobileQuery.removeEventListener('change', syncRouteShape)
      window.cancelAnimationFrame(animationFrame)
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  return (
    <section className="page-section spmb-page">
      {/* Subtle floating background clouds matching HomePage / TeacherPage */}
      <SpmbCloud variant="puffy" className="spmb-cloud-1" />
      <SpmbCloud variant="wide" className="spmb-cloud-2" />
      <SpmbCloud variant="tall" className="spmb-cloud-3" />

      {/* Decorative doodle ornaments scattered in empty spaces */}
      <SpmbDoodle variant="star" className="spmb-doodle-star-1" />
      <SpmbDoodle variant="sun" className="spmb-doodle-sun" />
      <SpmbDoodle variant="rainbow" className="spmb-doodle-rainbow" />
      <SpmbDoodle variant="pencil" className="spmb-doodle-pencil" />
      <SpmbDoodle variant="flower" className="spmb-doodle-flower" />
      <SpmbDoodle variant="abc" className="spmb-doodle-abc" />
      <SpmbDoodle variant="book" className="spmb-doodle-book" />
      <SpmbDoodle variant="heart" className="spmb-doodle-heart" />

      <header className="spmb-heading">
        <div>
          <div className="spmb-kicker-pill">
            <span className="spmb-kicker-dot" />
            <span>PENERIMAAN PESERTA DIDIK BARU</span>
          </div>
          <h1 className="section-title">SPMB TK Negeri Pembina</h1>
        </div>
        <a className="spmb-info-link" href="#spmb-info">
          <span>Informasi Pendaftaran</span>
          <IconArrowDown />
        </a>
      </header>

      <p className="spmb-intro">
        Mari mulai perjalanan belajar dan tumbuh kembang si kecil bersama TK Negeri Pembina. Ikuti setiap tahapan pendaftaran dengan nyaman dan terarah.
      </p>

      {/* Quick Info Grid */}
      <div className="spmb-info-grid" id="spmb-info">
        {registrationInfo.map((item, index) => (
          <article className="spmb-info-card spmb-appear" ref={(element) => { supportingRefs.current[index] = element }} key={item.label}>
            <div className="spmb-info-icon">
              {item.icon}
            </div>
            <div className="spmb-info-text">
              <h2>{item.label}</h2>
              <p>{item.value}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Road Section Heading */}
      <div className="spmb-section-heading">
        <div className="spmb-sub-badge">TAHAPAN PENDAFTARAN</div>
        <h2>Jalan Menuju Sekolah</h2>
        <p>Ikuti rute perjalanan bus sekolah, kami siap mendampingi setiap langkah pendaftaran ananda.</p>
      </div>

      {/* Interactive Road & Stops */}
      <div className="spmb-route" ref={routeRef}>
        <svg className="spmb-route-svg" ref={svgRef} viewBox="0 0 1000 1180" preserveAspectRatio="none" aria-hidden="true">
          {/* Base dashed route road */}
          <path className="spmb-route-base" ref={pathRef} d={desktopRoutePath} />
          {/* Active progress track */}
          <path className="spmb-route-progress" d={desktopRoutePath} />

          {/* Stop markers */}
          {registrationSteps.map((step, index) => (
            <g
              className="spmb-route-marker"
              ref={(element) => { markerRefs.current[index] = element }}
              key={step.number}
            >
              <circle r="28" fill="#B8DDF4" stroke="#FFFDF8" strokeWidth="6" />
              <text y="7" textAnchor="middle">{step.number}</text>
            </g>
          ))}

          {/* School Entrance Building & Gates */}
          <g className="spmb-entrance" ref={gateRef}>
            <SchoolEntrance leftGateRef={leftGateRef} rightGateRef={rightGateRef} />
          </g>

          {/* Moving Bus with Top-Down View */}
          <g className="spmb-moving-bus" ref={busRef}>
            <TopDownSchoolBus />
          </g>
        </svg>

        {/* Stop Cards along the road */}
        {registrationSteps.map((step, index) => (
          <article
            className={`spmb-route-stop spmb-route-stop-${index + 1}`}
            ref={(element) => { stepRefs.current[index] = element }}
            key={step.number}
          >
            <div className="spmb-step-card">
              <span className="spmb-step-number">{step.number}</span>
              <div className="spmb-step-content">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
              <div className="spmb-step-icon">
                {step.icon}
              </div>
            </div>
          </article>
        ))}

        {/* Arrival Card at School */}
        <div className="spmb-finish" ref={finishRef}>
          <span className="spmb-finish-label">TIBA DI SEKOLAH!</span>
          <a className="spmb-whatsapp-cta" href={whatsappLink} target="_blank" rel="noreferrer">
            <IconWhatsApp />
            <span>Daftar via WhatsApp</span>
          </a>
          <p>Hubungi panitia untuk informasi berkas dan konfirmasi pendaftaran.</p>
        </div>
      </div>

      {/* Support Section: Documents Checklist & FAQ */}
      <div className="spmb-support-grid">
        <section className="spmb-support-card spmb-appear" ref={(element) => { supportingRefs.current[3] = element }}>
          <div className="spmb-kicker-pill">
            <span className="spmb-kicker-dot" />
            <span>SIAPKAN DARI RUMAH</span>
          </div>
          <h2>Persyaratan Berkas</h2>
          <ul className="spmb-checklist">
            {requiredDocuments.map((document) => (
              <li key={document}>
                <span className="spmb-check-badge">
                  <IconCheck />
                </span>
                <span>{document}</span>
              </li>
            ))}
          </ul>
          <p className="spmb-note">Pastikan kembali kelengkapan dan keabsahan berkas kepada pihak sekolah.</p>
        </section>

        <section className="spmb-support-card spmb-faq spmb-appear" ref={(element) => { supportingRefs.current[4] = element }}>
          <div className="spmb-kicker-pill">
            <span className="spmb-kicker-dot" />
            <span>TANYA JAWAB</span>
          </div>
          <h2>Yang Sering Ditanyakan</h2>
          {frequentlyAskedQuestions.map((item) => (
            <details className="spmb-faq-item" key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </section>
      </div>

      <style>{`
        .spmb-page {
          --spmb-cream: #FFFDF8;
          --spmb-blue: #6BB5E3;
          --spmb-blue-dark: #3B8FC2;
          --spmb-navy: #30465A;
          --spmb-muted: #5B7282;
          position: relative;
          overflow: hidden;
          padding: clamp(1.5rem, 4vw, 3.25rem);
          border-color: rgba(107, 181, 227, 0.25);
          background:
            radial-gradient(ellipse at 8% 12%, rgba(107, 181, 227, 0.14), transparent 30%),
            radial-gradient(ellipse at 92% 45%, rgba(221, 241, 255, 0.55), transparent 32%),
            radial-gradient(ellipse at 15% 85%, rgba(255, 212, 92, 0.12), transparent 28%),
            var(--spmb-cream);
        }

        /* Clouds in background */
        .spmb-cloud {
          position: absolute;
          z-index: 0;
          pointer-events: none;
          opacity: 0.42;
          transition: transform 600ms ease;
        }

        .spmb-cloud-1 {
          top: 3rem;
          right: -2rem;
          width: clamp(110px, 12vw, 160px);
        }

        .spmb-cloud-2 {
          top: 38%;
          left: -2.5rem;
          width: clamp(120px, 14vw, 180px);
        }

        .spmb-cloud-3 {
          bottom: 12rem;
          right: -2rem;
          width: clamp(100px, 11vw, 150px);
        }

        /* Doodle ornaments */
        .spmb-doodle {
          position: absolute;
          z-index: 0;
          pointer-events: none;
          opacity: 0.32;
          animation: spmb-doodle-bob 4s ease-in-out infinite alternate;
        }

        .spmb-doodle-star-1 {
          top: 2rem;
          left: 48%;
          width: 36px;
          height: 36px;
          animation-duration: 4.5s;
        }

        .spmb-doodle-sun {
          top: 7rem;
          right: 8%;
          width: 50px;
          height: 50px;
          animation-duration: 5s;
        }

        .spmb-doodle-rainbow {
          top: 22%;
          left: 3%;
          width: 54px;
          height: 54px;
          animation-duration: 4.2s;
        }

        .spmb-doodle-pencil {
          top: 42%;
          right: 4%;
          width: 44px;
          height: 44px;
          animation-duration: 3.8s;
        }

        .spmb-doodle-flower {
          top: 58%;
          left: 4%;
          width: 42px;
          height: 42px;
          animation-duration: 4.6s;
        }

        .spmb-doodle-abc {
          top: 74%;
          right: 3%;
          width: 52px;
          height: 52px;
          animation-duration: 5.2s;
        }

        .spmb-doodle-book {
          bottom: 4rem;
          left: 8%;
          width: 46px;
          height: 46px;
          animation-duration: 4s;
        }

        .spmb-doodle-heart {
          bottom: 2rem;
          right: 18%;
          width: 38px;
          height: 38px;
          animation-duration: 4.8s;
        }

        @keyframes spmb-doodle-bob {
          0% { transform: translateY(0) rotate(0deg); }
          100% { transform: translateY(-7px) rotate(4deg); }
        }

        /* Pill kicker badge */
        .spmb-kicker-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.65rem;
          padding: 0.35rem 0.85rem;
          border: 1px solid rgba(59, 143, 194, 0.28);
          border-radius: 999px;
          background: rgba(221, 241, 255, 0.6);
          color: var(--spmb-blue-dark);
          font-size: 0.74rem;
          font-weight: 900;
          letter-spacing: 0.1em;
        }

        .spmb-kicker-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--spmb-blue-dark);
        }

        .spmb-heading {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 1.5rem;
        }

        .spmb-heading .section-title,
        .spmb-section-heading h2,
        .spmb-support-card h2 {
          margin: 0;
          color: var(--spmb-navy);
          font-family: 'Nunito', 'Arial Rounded MT Bold', sans-serif;
          font-weight: 900;
        }

        .spmb-heading .section-title {
          font-size: clamp(2rem, 4.2vw, 3.1rem);
          line-height: 1.15;
        }

        .spmb-info-link {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          flex: 0 0 auto;
          padding: 0.65rem 1.15rem;
          border: 1.5px solid rgba(59, 143, 194, 0.32);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.85);
          color: var(--spmb-blue-dark);
          font-size: 0.88rem;
          font-weight: 800;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(59, 143, 194, 0.08);
          transition: background 180ms ease, transform 180ms ease, box-shadow 180ms ease;
        }

        .spmb-info-link:hover {
          transform: translateY(-2px);
          background: #EAF8FF;
          box-shadow: 0 6px 18px rgba(59, 143, 194, 0.16);
        }

        .spmb-intro {
          position: relative;
          z-index: 1;
          max-width: 50rem;
          margin: 1.1rem 0 1.8rem;
          color: var(--spmb-muted);
          font-size: 1.02rem;
          line-height: 1.7;
        }

        /* Quick Info Grid */
        .spmb-info-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1.1rem;
          scroll-margin-top: 2rem;
        }

        .spmb-info-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          min-height: 104px;
          padding: 1.15rem 1.25rem;
          border: 1.5px solid rgba(107, 181, 227, 0.28);
          border-radius: 1.35rem;
          background: rgba(255, 255, 255, 0.88);
          backdrop-filter: blur(8px);
          box-shadow: 0 8px 22px rgba(48, 70, 90, 0.05);
          transition: transform 220ms ease, box-shadow 220ms ease;
        }

        .spmb-info-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 28px rgba(59, 143, 194, 0.12);
        }

        .spmb-info-icon {
          display: grid;
          width: 3.1rem;
          height: 3.1rem;
          flex: 0 0 auto;
          place-items: center;
          border-radius: 1.05rem;
          background: #DDF1FF;
          color: var(--spmb-blue-dark);
          box-shadow: inset 0 2px 4px rgba(255, 255, 255, 0.6);
        }

        .spmb-info-text h2 {
          margin: 0 0 0.3rem;
          color: var(--spmb-navy);
          font-size: 0.98rem;
          font-weight: 800;
        }

        .spmb-info-text p {
          margin: 0;
          color: var(--spmb-muted);
          font-size: 0.85rem;
          line-height: 1.45;
        }

        .spmb-appear {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 550ms ease, transform 550ms cubic-bezier(0.2, 0.7, 0.3, 1);
        }

        .spmb-appear.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Section Heading */
        .spmb-section-heading {
          position: relative;
          z-index: 1;
          margin: clamp(3.5rem, 7vw, 5.5rem) auto 1.6rem;
          text-align: center;
        }

        .spmb-sub-badge {
          display: inline-block;
          margin-bottom: 0.45rem;
          color: var(--spmb-blue-dark);
          font-size: 0.76rem;
          font-weight: 900;
          letter-spacing: 0.12em;
        }

        .spmb-section-heading h2 {
          font-size: clamp(1.8rem, 3.6vw, 2.5rem);
        }

        .spmb-section-heading > p {
          max-width: 36rem;
          margin: 0.6rem auto 0;
          color: var(--spmb-muted);
          font-size: 0.96rem;
          line-height: 1.6;
        }

        /* The Route Road */
        .spmb-route {
          position: relative;
          display: grid;
          grid-template-rows: repeat(3, minmax(220px, auto)) minmax(200px, auto);
          gap: clamp(1.75rem, 4vw, 3rem);
          width: min(100%, 1040px);
          margin: 0 auto;
          isolation: isolate;
        }

        .spmb-route-svg {
          position: absolute;
          z-index: 0;
          inset: 0;
          display: block;
          width: 100%;
          height: 100%;
          overflow: visible;
          pointer-events: none;
        }

        .spmb-route-base,
        .spmb-route-progress {
          fill: none;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-width: 8;
        }

        .spmb-route-base {
          stroke: rgba(107, 181, 227, 0.45);
          stroke-dasharray: 10 14;
        }

        .spmb-route-progress {
          stroke: var(--spmb-blue-dark);
          stroke-dasharray: 10 14;
        }

        .spmb-route-marker {
          transform-box: view-box;
          opacity: 0.65;
          transition: opacity 280ms ease, filter 280ms ease;
        }

        .spmb-route-marker circle {
          transform-box: fill-box;
          transform-origin: center;
          transition: fill 280ms ease, transform 280ms ease;
        }

        .spmb-route-marker text {
          fill: #FFFFFF;
          font-family: 'Nunito', sans-serif;
          font-size: 16px;
          font-weight: 900;
        }

        .spmb-route-marker.is-active {
          opacity: 1;
          filter: drop-shadow(0 0 10px rgba(59, 143, 194, 0.35));
        }

        .spmb-route-marker.is-active circle {
          fill: var(--spmb-blue-dark);
          transform: scale(1.15);
        }

        /* Bus Animation & Positioning */
        .spmb-moving-bus {
          transform-box: view-box;
          transition: transform 120ms linear;
        }

        .spmb-bus-graphic {
          transform-box: fill-box;
          transform-origin: center;
        }

        .spmb-entrance {
          transform-box: view-box;
        }

        .spmb-gate-leaf {
          transform-box: fill-box;
          transform-origin: center;
          transition: transform 700ms cubic-bezier(0.2, 0.75, 0.2, 1);
        }

        .spmb-gate-left.is-open {
          transform: translateX(-28px) rotate(-26deg);
        }

        .spmb-gate-right.is-open {
          transform: translateX(28px) rotate(26deg);
        }

        /* Route Stop Cards */
        .spmb-route-stop {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(0, 1fr) 130px minmax(0, 1fr);
          align-items: center;
          min-width: 0;
        }

        .spmb-route-stop-1 .spmb-step-card,
        .spmb-route-stop-3 .spmb-step-card {
          grid-column: 1;
        }

        .spmb-route-stop-2 .spmb-step-card {
          grid-column: 3;
        }

        .spmb-step-card {
          display: grid;
          grid-template-columns: auto minmax(0, 1fr) auto;
          align-items: center;
          gap: 1.05rem;
          padding: clamp(1.15rem, 2.5vw, 1.65rem);
          border: 2px solid rgba(107, 181, 227, 0.35);
          border-radius: 1.6rem;
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(10px);
          box-shadow: 0 12px 32px rgba(48, 70, 90, 0.07);
          opacity: 0;
          transition: opacity 500ms ease, transform 600ms cubic-bezier(0.2, 0.65, 0.3, 1), box-shadow 250ms ease, border-color 250ms ease;
        }

        .spmb-route-stop-1 .spmb-step-card,
        .spmb-route-stop-3 .spmb-step-card {
          transform: translate(-30px, 14px);
        }

        .spmb-route-stop-2 .spmb-step-card {
          transform: translate(30px, 14px);
        }

        .spmb-route-stop.is-arrived .spmb-step-card {
          opacity: 1;
          transform: translate(0, 0);
          border-color: rgba(59, 143, 194, 0.6);
          box-shadow: 0 14px 36px rgba(59, 143, 194, 0.12);
        }

        .spmb-step-number {
          display: grid;
          width: 2.75rem;
          height: 2.75rem;
          flex: 0 0 auto;
          place-items: center;
          border-radius: 50%;
          background: #DDF1FF;
          color: var(--spmb-blue-dark);
          font-size: 0.92rem;
          font-weight: 900;
          transition: background 280ms ease, color 280ms ease, transform 280ms ease;
        }

        .spmb-route-stop.is-arrived .spmb-step-number {
          transform: scale(1.12);
          background: var(--spmb-blue-dark);
          color: #FFFFFF;
        }

        .spmb-step-content h3 {
          margin: 0 0 0.35rem;
          color: var(--spmb-navy);
          font-family: 'Nunito', 'Arial Rounded MT Bold', sans-serif;
          font-size: 1.15rem;
          font-weight: 900;
        }

        .spmb-step-content p {
          margin: 0;
          color: var(--spmb-muted);
          font-size: 0.92rem;
          line-height: 1.6;
        }

        .spmb-step-icon {
          display: grid;
          width: 2.6rem;
          height: 2.6rem;
          flex: 0 0 auto;
          place-items: center;
          border-radius: 0.9rem;
          background: rgba(221, 241, 255, 0.7);
          color: var(--spmb-blue-dark);
        }

        /* Finish / Arrival */
        .spmb-finish {
          align-self: center;
          justify-self: center;
          width: min(100%, 420px);
          padding: 1rem;
          text-align: center;
          opacity: 0;
          transform: translateY(18px) scale(0.95);
          transition: opacity 500ms ease, transform 650ms cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .spmb-finish.is-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .spmb-finish-label {
          display: inline-block;
          margin-bottom: 0.75rem;
          padding: 0.35rem 0.9rem;
          border-radius: 999px;
          background: rgba(221, 241, 255, 0.8);
          color: var(--spmb-blue-dark);
          font-size: 0.76rem;
          font-weight: 900;
          letter-spacing: 0.12em;
        }

        .spmb-whatsapp-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.65rem;
          min-height: 3.5rem;
          padding: 0.9rem 1.75rem;
          border: 2px solid #3B8FC2;
          border-radius: 999px;
          background: linear-gradient(135deg, #6BB5E3 0%, #3B8FC2 100%);
          color: #FFFFFF;
          box-shadow: 0 12px 24px rgba(59, 143, 194, 0.28);
          font-size: 1.02rem;
          font-weight: 900;
          text-decoration: none;
          transition: transform 180ms ease, box-shadow 180ms ease;
        }

        .spmb-whatsapp-cta:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 16px 32px rgba(59, 143, 194, 0.36);
        }

        .spmb-finish > p {
          margin: 0.75rem 0 0;
          color: var(--spmb-muted);
          font-size: 0.86rem;
          line-height: 1.5;
        }

        /* Support Grid */
        .spmb-support-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
          gap: 1.4rem;
          margin-top: clamp(3rem, 6vw, 5rem);
        }

        .spmb-support-card {
          padding: clamp(1.4rem, 3.5vw, 2.2rem);
          border: 1.5px solid rgba(107, 181, 227, 0.28);
          border-radius: 1.6rem;
          background: rgba(255, 255, 255, 0.88);
          backdrop-filter: blur(8px);
          box-shadow: 0 10px 28px rgba(48, 70, 90, 0.06);
        }

        .spmb-support-card h2 {
          margin: 0.4rem 0 1.2rem;
          font-size: 1.48rem;
        }

        .spmb-checklist {
          display: grid;
          gap: 0.95rem;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .spmb-checklist li {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          color: var(--spmb-navy);
          font-size: 0.94rem;
          line-height: 1.55;
        }

        .spmb-check-badge {
          display: grid;
          width: 1.45rem;
          height: 1.45rem;
          flex: 0 0 auto;
          place-items: center;
          margin-top: 0.15rem;
          border-radius: 50%;
          background: #DDF1FF;
          color: var(--spmb-blue-dark);
        }

        .spmb-note {
          margin: 1.4rem 0 0;
          padding-top: 1rem;
          border-top: 1px dashed rgba(107, 181, 227, 0.35);
          color: var(--spmb-muted);
          font-size: 0.84rem;
          line-height: 1.5;
        }

        .spmb-faq-item {
          border-top: 1px solid rgba(107, 181, 227, 0.25);
        }

        .spmb-faq-item summary {
          position: relative;
          padding: 1rem 1.6rem 1rem 0;
          color: var(--spmb-navy);
          font-size: 0.95rem;
          font-weight: 800;
          cursor: pointer;
          list-style: none;
          transition: color 180ms ease;
        }

        .spmb-faq-item summary:hover {
          color: var(--spmb-blue-dark);
        }

        .spmb-faq-item summary::-webkit-details-marker {
          display: none;
        }

        .spmb-faq-item summary::after {
          content: '+';
          position: absolute;
          right: 0;
          top: 0.95rem;
          color: var(--spmb-blue-dark);
          font-size: 1.3rem;
          font-weight: 900;
          line-height: 1;
        }

        .spmb-faq-item[open] summary::after {
          content: '−';
        }

        .spmb-faq-item > p {
          margin: -0.2rem 0 1.1rem;
          color: var(--spmb-muted);
          font-size: 0.89rem;
          line-height: 1.65;
        }

        /* Responsive Breakpoints */
        @media (max-width: 820px) {
          .spmb-info-grid {
            grid-template-columns: 1fr;
          }

          .spmb-doodle-sun,
          .spmb-doodle-flower,
          .spmb-doodle-heart {
            display: none;
          }
        }

        @media (max-width: 760px) {
          .spmb-heading {
            align-items: flex-start;
            flex-direction: column;
          }

          .spmb-route {
            grid-template-rows: repeat(3, minmax(185px, auto)) minmax(185px, auto);
            gap: 1.5rem;
          }

          .spmb-route-stop {
            grid-template-columns: 75px minmax(0, 1fr);
            align-items: center;
          }

          .spmb-route-stop-1 .spmb-step-card,
          .spmb-route-stop-2 .spmb-step-card,
          .spmb-route-stop-3 .spmb-step-card {
            grid-column: 2;
            transform: translate(16px, 12px);
          }

          .spmb-route-stop.is-arrived .spmb-step-card {
            transform: translate(0, 0);
          }

          .spmb-support-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 560px) {
          .spmb-page {
            padding: 1.25rem 0.95rem;
          }

          .spmb-cloud,
          .spmb-doodle {
            display: none;
          }

          .spmb-route-stop {
            grid-template-columns: 60px minmax(0, 1fr);
          }

          .spmb-step-card {
            grid-template-columns: auto minmax(0, 1fr);
            gap: 0.75rem;
            padding: 1rem 0.95rem;
          }

          .spmb-step-icon {
            display: none;
          }

          .spmb-step-number {
            width: 2.35rem;
            height: 2.35rem;
            font-size: 0.8rem;
          }

          .spmb-step-content h3 {
            font-size: 1.02rem;
          }

          .spmb-step-content p {
            font-size: 0.84rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .spmb-doodle {
            animation: none;
          }

          .spmb-appear,
          .spmb-step-card,
          .spmb-gate-leaf,
          .spmb-finish,
          .spmb-route-marker,
          .spmb-route-marker circle,
          .spmb-info-link,
          .spmb-whatsapp-cta,
          .spmb-moving-bus {
            transition: none;
          }
        }
      `}</style>
    </section>
  )
}
