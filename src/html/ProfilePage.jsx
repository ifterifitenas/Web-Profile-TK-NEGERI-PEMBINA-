export default function ProfilePage() {
  return (
    <section className="page-section">
      <div className="section-header">
        <div>
          <p className="section-kicker">Tentang sekolah</p>
          <h2 className="section-title">Profil TK Negeri Pembina</h2>
        </div>
        <span className="section-tag">Sejak 1998</span>
      </div>

      <div className="feature-grid">
        <article className="feature-card">
          <div className="feature-icon">V</div>
          <h3>Visi</h3>
          <p>Menciptakan generasi yang cerdas, mandiri, berakhlak mulia, dan siap menghadapi masa depan.</p>
        </article>

        <article className="feature-card">
          <div className="feature-icon">M</div>
          <h3>Misi</h3>
          <p>Menyediakan proses belajar yang aman, menyenangkan, dan berbasis karakter untuk setiap anak.</p>
        </article>

        <article className="feature-card">
          <div className="feature-icon">F</div>
          <h3>Filosofi</h3>
          <p>Anak belajar melalui bermain, eksplorasi, dan pengalaman nyata dalam lingkungan yang hangat.</p>
        </article>
      </div>
    </section>
  )
}
