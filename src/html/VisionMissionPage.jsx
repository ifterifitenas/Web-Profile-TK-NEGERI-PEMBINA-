import '../css/vision-mission.css'

const missions = [
  'Membiasakan nilai agama, budi pekerti, rasa syukur, kepedulian, kejujuran, tanggung jawab, dan perilaku santun dalam kehidupan sehari-hari.',
  'Menumbuhkan kecintaan terhadap budaya lokal, budaya Indonesia, lingkungan, serta sikap menghargai keberagaman.',
  'Menyelenggarakan bermain dan pembelajaran mendalam yang berkesadaran, bermakna, menggembirakan, kontekstual, dan sesuai tahap perkembangan anak.',
  'Mengembangkan kreativitas, rasa ingin tahu, penalaran kritis, komunikasi, kolaborasi, serta kemampuan memecahkan masalah sederhana melalui eksplorasi, projek, seni, dan pengalaman nyata.',
  'Menumbuhkan kemandirian, kesehatan, keterampilan motorik, perawatan diri, dan kebiasaan hidup bersih dan sehat.',
  'Menguatkan kemampuan fondasi literasi, numerasi, sains, teknologi, rekayasa, dan seni tanpa praktik drilling yang tidak sesuai perkembangan anak.',
  'Meningkatkan kompetensi pendidik melalui komunitas belajar, refleksi, supervisi, pelatihan, dan berbagi praktik baik.',
  'Membangun kemitraan yang aktif dan setara dengan orang tua/wali, komite, pemerintah, layanan kesehatan, dan masyarakat untuk mendukung PAUD holistik-integratif.',
]

export default function VisionMissionPage() {
  return (
    <section className="page-section vision-mission-page" aria-labelledby="vision-mission-title">
      <header className="vision-mission-heading">
        <div>
          <p className="section-kicker">Arah pendidikan</p>
          <h1 className="section-title" id="vision-mission-title">Visi &amp; Misi</h1>
        </div>
        <div className="vision-heading-decoration" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </header>

      <article className="vision-statement" aria-labelledby="vision-title">
        <div className="vision-statement-decoration" aria-hidden="true">
          <span />
          <span />
        </div>
        <p className="vision-label" id="vision-title">Visi TK</p>
        <p className="vision-opening">Mewujudkan peserta didik</p>
        <p className="vision-slogan">Budiman Ceria</p>
        <p className="vision-values">Beriman, Berbudaya, Kreatif, Mandiri, Cerdas dan Aktif</p>
      </article>

      <div className="mission-section-heading">
        <div>
          <p className="section-kicker">Langkah untuk mewujudkan visi</p>
          <h2>Misi TK</h2>
        </div>
        <span className="mission-count">8 misi</span>
      </div>

      <ol className="mission-list">
        {missions.map((mission, index) => (
          <li className="mission-card" key={mission}>
            <span className="mission-index" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <p>{mission}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
