const registrationSteps = [
  { title: 'Hubungi sekolah', text: 'Tanyakan informasi jadwal, kelompok usia, dan alur pendaftaran.' },
  { title: 'Lengkapi berkas', text: 'Siapkan dokumen calon peserta didik sesuai informasi dari sekolah.' },
  { title: 'Kunjungan & konfirmasi', text: 'Ikuti arahan sekolah untuk kunjungan, pengenalan lingkungan, dan konfirmasi.' },
]

export default function SpmbPage() {
  return (
    <section className="page-section">
      <div className="section-header">
        <div>
          <p className="section-kicker">Penerimaan peserta didik baru</p>
          <h1 className="section-title">SPMB TK Negeri Pembina</h1>
        </div>
        <span className="section-tag">Informasi pendaftaran</span>
      </div>
      <p className="hero-text" style={{ marginBottom: '1.5rem' }}>
        Informasi periode, persyaratan, dan kuota pendaftaran akan mengikuti pengumuman resmi sekolah.
      </p>
      <div className="card-grid">
        {registrationSteps.map((step, index) => (
          <article className="info-card" key={step.title}>
            <div className="feature-icon">0{index + 1}</div>
            <h2>{step.title}</h2>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
