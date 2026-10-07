export default function GalleryPage() {
  return (
    <section className="page-section">
      <div className="section-header">
        <div>
          <p className="section-kicker">Moment belajar</p>
          <h2 className="section-title">Galeri Kegiatan</h2>
        </div>
        <span className="section-tag">Aktivitas anak</span>
      </div>

      <div className="gallery-grid">
        <article className="gallery-card">
          <div className="teacher-avatar">1</div>
          <h3>Belajar bersama</h3>
          <p>Aktivitas interaktif yang membuat anak lebih antusias belajar di kelas.</p>
        </article>
        <article className="gallery-card">
          <div className="teacher-avatar">2</div>
          <h3>Olahraga</h3>
          <p>Kegiatan fisik yang menyehatkan badan dan membentuk karakter disiplin.</p>
        </article>
        <article className="gallery-card">
          <div className="teacher-avatar">3</div>
          <h3>Ekspresi seni</h3>
          <p>Anak belajar mewarnai, menari, dan berkarya dengan penuh kreativitas.</p>
        </article>
      </div>
    </section>
  )
}
