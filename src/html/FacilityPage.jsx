import { useEffect, useRef, useState } from 'react'

const facilityPhotoFiles = import.meta.glob(
  '../assets/Foto/Fasilitas/**/*.{jpg,jpeg}',
  { eager: true, import: 'default', query: '?url' },
)

const facilityGroups = [
  {
    id: 'kelas-mangga',
    folder: 'kelas/kelas_mangga/',
    name: 'Ruang Kelas Mangga',
    description: 'Dokumentasi ruang belajar Kelompok Mangga.',
  },
  {
    id: 'kelas-strawberry',
    folder: 'kelas/kelas_strawbery/',
    name: 'Ruang Kelas Strawberry',
    description: 'Dokumentasi ruang belajar Kelompok Strawberry.',
  },
  {
    id: 'aula',
    folder: 'aula/',
    name: 'Aula',
    description: 'Dokumentasi fasilitas aula sekolah.',
  },
  {
    id: 'bermain-depan',
    folder: 'bermain_depan/',
    name: 'Area Bermain Depan',
    description: 'Dokumentasi area bermain di bagian depan sekolah.',
  },
  {
    id: 'bermain-tengah',
    folder: 'bermain_tengah/',
    name: 'Area Bermain Tengah',
    description: 'Dokumentasi area bermain di bagian tengah sekolah.',
  },
  {
    id: 'lapangan-bola',
    folder: 'lapangan_bola/',
    name: 'Lapangan Bola',
    description: 'Dokumentasi lapangan bola sekolah.',
  },
  {
    id: 'pendopo',
    folder: 'pendopo/',
    name: 'Pendopo',
    description: 'Dokumentasi fasilitas pendopo sekolah.',
  },
  {
    id: 'toilet',
    folder: 'toilet/',
    name: 'Toilet',
    description: 'Dokumentasi fasilitas toilet sekolah.',
  },
].map((group) => ({
  ...group,
  photos: Object.entries(facilityPhotoFiles)
    .filter(([path]) => path.includes(`/Fasilitas/${group.folder}`))
    .sort(([pathA], [pathB]) => pathA.localeCompare(pathB, undefined, { numeric: true }))
    .map(([path, src]) => ({ path, src })),
}))

function FacilityDoodle({ variant, className = '' }) {
  const doodles = {
    star: (
      <path d="m50 7 11 28 30 2-23 19 8 30-26-16-26 16 8-30L9 37l30-2Z" />
    ),
    flower: (
      <>
        <circle cx="50" cy="24" r="13" />
        <circle cx="74" cy="43" r="13" />
        <circle cx="65" cy="70" r="13" />
        <circle cx="35" cy="70" r="13" />
        <circle cx="26" cy="43" r="13" />
        <circle cx="50" cy="48" r="12" />
      </>
    ),
    book: (
      <>
        <path d="M50 30c-13-9-27-10-39-6v52c14-4 27-2 39 7 12-9 25-11 39-7V24c-12-4-26-3-39 6Z" />
        <path d="M50 30v53M21 38c10-2 18 0 24 4m34-4c-10-2-18 0-24 4" />
      </>
    ),
    cloud: (
      <path d="M18 62h64a17 17 0 0 0 0-34 23 23 0 0 0-43-7 20 20 0 0 0-30 17 14 14 0 0 0 9 24Z" />
    ),
    sun: (
      <>
        <circle cx="50" cy="50" r="22" />
        <path d="M50 8v12m0 60v12M8 50h12m60 0h12M20 20l9 9m42 42 9 9m0-60-9 9m-42 42-9 9" />
      </>
    ),
    pencil: (
      <>
        <path d="m31 70 39-47 13 11-39 47-17 8Z" />
        <path d="m31 70 13 11m26-58 13 11" />
      </>
    ),
    heart: (
      <path d="M50 83 18 53C-3 32 27 9 50 31 73 9 103 32 82 53Z" />
    ),
    rainbow: (
      <>
        <path d="M12 78a38 38 0 0 1 76 0H72a22 22 0 0 0-44 0Z" />
        <path d="M28 78a22 22 0 0 1 44 0" />
      </>
    ),
  }

  return (
    <svg
      className={`facility-doodle ${className}`}
      viewBox="0 0 100 100"
      aria-hidden="true"
      focusable="false"
    >
      <g>{doodles[variant]}</g>
    </svg>
  )
}

function FacilityPhotoGallery({ group, onSelectPhoto }) {
  const galleryRef = useRef(null)

  const scrollGallery = (direction) => {
    galleryRef.current?.scrollBy({
      left: direction * galleryRef.current.clientWidth * 0.8,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const gallery = galleryRef.current
    if (!gallery) return undefined

    const handleWheel = (event) => {
      const maxScrollLeft = gallery.scrollWidth - gallery.clientWidth
      if (maxScrollLeft <= 0) return

      event.preventDefault()
      const rawDelta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY
      const modeScale = event.deltaMode === WheelEvent.DOM_DELTA_LINE ? 16
        : event.deltaMode === WheelEvent.DOM_DELTA_PAGE ? gallery.clientWidth
          : 1
      const delta = rawDelta * modeScale * 2
      const nextScrollLeft = Math.min(maxScrollLeft, Math.max(0, gallery.scrollLeft + delta))
      gallery.scrollTo({ left: nextScrollLeft, behavior: 'instant' })
      event.stopPropagation()
    }

    gallery.addEventListener('wheel', handleWheel, { capture: true, passive: false })
    return () => gallery.removeEventListener('wheel', handleWheel, { capture: true })
  }, [])

  return (
    <div className="facility-gallery">
      <div className="facility-gallery-controls">
        <button
          className="facility-gallery-arrow"
          type="button"
          aria-label={`Gulir foto ${group.name} ke kiri`}
          onClick={() => scrollGallery(-1)}
        >
          <span aria-hidden="true">←</span>
        </button>
        <button
          className="facility-gallery-arrow"
          type="button"
          aria-label={`Gulir foto ${group.name} ke kanan`}
          onClick={() => scrollGallery(1)}
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>
      <div
        className="facility-photo-grid"
        ref={galleryRef}
        tabIndex={0}
        aria-label={`Foto ${group.name}`}
      >
        {group.photos.map((photo) => {
          const caption = photo.caption
          const alt = caption ? `${group.name}, ${caption}` : group.name

          return (
            <FacilityPhotoCard
              key={photo.path}
              photo={photo}
              alt={alt}
              caption={caption}
              groupName={group.name}
              onSelectPhoto={onSelectPhoto}
            />
          )
        })}
      </div>
    </div>
  )
}

function FacilityPhotoCard({ photo, alt, caption, groupName, onSelectPhoto }) {
  return (
    <article className="facility-photo-card">
      <button
        className="facility-photo-button"
        type="button"
        onClick={() => onSelectPhoto({ ...photo, alt, groupName })}
        aria-label={`Perbesar ${alt}`}
      >
        <img src={photo.src} alt={alt} loading="lazy" />
        <span className="facility-photo-zoom-hint" aria-hidden="true">Lihat foto</span>
      </button>
      {caption && <p className="facility-photo-caption">{caption}</p>}
    </article>
  )
}

export default function FacilityPage() {
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const [zoom, setZoom] = useState(1)

  useEffect(() => {
    if (!selectedPhoto) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedPhoto(null)
    }

    const previousOverflow = document.body.style.overflow
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [selectedPhoto])

  const openPhoto = (photo) => {
    setZoom(1)
    setSelectedPhoto(photo)
  }

  return (
    <div className="facility-page">
      <header className="facility-hero">
        <FacilityDoodle variant="cloud" className="facility-hero-doodle" />
        <p className="section-kicker">Pendukung belajar</p>
        <h1>Fasilitas TK Negeri Pembina</h1>
        <p>
          Kenali ruang belajar dan area sekolah tempat anak belajar, bermain, dan bertumbuh.
        </p>
      </header>

      <div className="facility-groups">
        {facilityGroups.map((group, index) => {
          const currentColor = index % 2 === 0 ? '#EEF7FB' : '#FFF9EC'
          const nextColor = index % 2 === 0 ? '#FFF9EC' : '#EEF7FB'

          return (
            <div
              className="facility-group-wrap"
              key={group.id}
              style={{ '--facility-band': currentColor, '--facility-next-band': nextColor }}
            >
              <section className="facility-group" aria-labelledby={`${group.id}-title`}>
                <FacilityDoodle
                  variant={['star', 'book', 'flower', 'rainbow', 'sun', 'pencil', 'heart', 'cloud'][index]}
                  className="facility-doodle-left"
                />
                <FacilityDoodle
                  variant={['flower', 'sun', 'heart', 'cloud', 'star', 'rainbow', 'book', 'pencil'][index]}
                  className="facility-doodle-right"
                />
                <div className="facility-group-inner">
                  <div className="facility-group-heading">
                    <div>
                      <p className="section-kicker">Fasilitas sekolah</p>
                      <h2 id={`${group.id}-title`}>{group.name}</h2>
                      <p>{group.description}</p>
                    </div>
                  </div>
                  <FacilityPhotoGallery group={group} onSelectPhoto={openPhoto} />
                </div>
              </section>
              {index < facilityGroups.length - 1 && (
                <div className="facility-divider" aria-hidden="true">
                  <svg viewBox="0 0 1440 72" preserveAspectRatio="none" focusable="false">
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
                      fill="var(--facility-next-band)"
                    />
                  </svg>
                </div>
              )}
            </div>
          )
        })}
      </div>
      {selectedPhoto && (
        <div
          className="facility-lightbox"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedPhoto(null)
          }}
        >
          <section
            className="facility-lightbox-dialog"
            role="dialog"
            aria-modal="true"
            aria-label={`Pratinjau foto ${selectedPhoto.groupName}`}
          >
            <div className="facility-lightbox-toolbar">
              <p>{selectedPhoto.groupName}</p>
              <div className="facility-lightbox-actions">
                <button
                  type="button"
                  aria-label="Perkecil foto"
                  onClick={() => setZoom((currentZoom) => Math.max(0.75, currentZoom - 0.25))}
                  disabled={zoom <= 0.75}
                >
                  −
                </button>
                <span>{Math.round(zoom * 100)}%</span>
                <button
                  type="button"
                  aria-label="Perbesar foto"
                  onClick={() => setZoom((currentZoom) => Math.min(3, currentZoom + 0.25))}
                  disabled={zoom >= 3}
                >
                  +
                </button>
                <button
                  className="facility-lightbox-close"
                  type="button"
                  aria-label="Tutup foto"
                  onClick={() => setSelectedPhoto(null)}
                >
                  ×
                </button>
              </div>
            </div>
            <div className="facility-lightbox-image-wrap">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                style={{ transform: `scale(${zoom})` }}
              />
            </div>
          </section>
        </div>
      )}
    </div>
  )
}
