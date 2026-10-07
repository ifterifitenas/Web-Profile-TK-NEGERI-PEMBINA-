export default function FacilityPage() {
  return (
    <section className="page-section">
      <div className="section-header">
        <div>
          <p className="section-kicker">Pendukung belajar</p>
          <h2 className="section-title">Fasilitas</h2>
        </div>
        <span className="section-tag">Aman &amp; Nyaman</span>
      </div>

      <div className="card-grid">
        <article className="info-card">
          <h3>Ruang Kelas</h3>
          <p>Ruang kelas yang terang, bersih, dan nyaman untuk mendukung proses belajar anak.</p>
        </article>
        <article className="info-card">
          <h3>Area Bermain</h3>
          <p>Area bermain edukatif yang aman dan merangsang kreativitas serta interaksi sosial.</p>
        </article>
        <article className="info-card">
          <h3>Perpustakaan Mini</h3>
          <p>Menumbuhkan minat membaca sejak dini dengan koleksi buku yang sesuai usia anak.</p>
        </article>
      </div>
    </section>
  )
}
