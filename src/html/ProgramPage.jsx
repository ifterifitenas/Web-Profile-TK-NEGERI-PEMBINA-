export default function ProgramPage() {
  return (
    <section className="page-section">
      <div className="section-header">
        <div>
          <p className="section-kicker">Kegiatan belajar</p>
          <h2 className="section-title">Program Sekolah</h2>
        </div>
        <span className="section-tag">Berkembang optimal</span>
      </div>

      <div className="card-grid">
        <article className="info-card">
          <h3>Literasi Awal</h3>
          <p>Mengajarkan membaca, menulis, dan menghitung sejak dini dengan pendekatan yang menyenangkan.</p>
        </article>
        <article className="info-card">
          <h3>Motorik Halus &amp; Kasar</h3>
          <p>Meningkatkan koordinasi tangan-mata, keseimbangan, serta kemampuan fisik melalui permainan.</p>
        </article>
        <article className="info-card">
          <h3>Keagamaan</h3>
          <p>Menanamkan nilai ibadah, akhlak mulia, dan kebiasaan positif dalam kehidupan sehari-hari.</p>
        </article>
      </div>
    </section>
  )
}
