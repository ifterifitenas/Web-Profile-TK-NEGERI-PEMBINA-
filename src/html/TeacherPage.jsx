export default function TeacherPage() {
  return (
    <section className="page-section">
      <div className="section-header">
        <div>
          <p className="section-kicker">Pendidik terbaik</p>
          <h2 className="section-title">Guru &amp; Tenaga Pendidik</h2>
        </div>
        <span className="section-tag">Profesional &amp; Ramah</span>
      </div>

      <div className="teacher-grid">
        <article className="teacher-card">
          <div className="teacher-avatar">G1</div>
          <h3>Bu Siti</h3>
          <p>Guru kelas A dengan pendekatan belajar yang hangat dan edukatif.</p>
        </article>
        <article className="teacher-card">
          <div className="teacher-avatar">G2</div>
          <h3>Bu Rina</h3>
          <p>Menangani kegiatan literasi, kreativitas, dan pembiasaan karakter anak.</p>
        </article>
        <article className="teacher-card">
          <div className="teacher-avatar">G3</div>
          <h3>Bu Maya</h3>
          <p>Membimbing perkembangan motorik dan kemandirian anak melalui kegiatan bermain.</p>
        </article>
      </div>
    </section>
  )
}
