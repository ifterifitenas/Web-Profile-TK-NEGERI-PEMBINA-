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
    <div className="vision-mission-page" aria-labelledby="vision-mission-title">
      <section className="vision-top-section">
        <div className="vision-mission-inner">
          <header className="vision-mission-heading">
            <div>
              <p className="section-kicker">Arah pendidikan</p>
              <h1 id="vision-mission-title">Visi &amp; Misi</h1>
              <p className="vision-heading-copy">
                Nilai dan langkah pendidikan untuk mendampingi anak tumbuh dengan gembira.
              </p>
            </div>
            <svg className="vision-heading-doodle" viewBox="0 0 120 90" aria-hidden="true">
              <path d="M22 57h70a18 18 0 0 0 0-36A24 24 0 0 0 46 14a20 20 0 0 0-34 16 15 15 0 0 0 10 27Z" />
              <path d="m87 68 5 10 11 2-8 7 2 11-10-6-10 6 2-11-8-7 11-2Z" />
            </svg>
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
        </div>
      </section>

      <section className="mission-section" aria-labelledby="mission-title">
        <div className="vision-mission-inner">
          <div className="mission-section-heading">
            <div>
              <p className="section-kicker">Langkah untuk mewujudkan visi</p>
              <h2 id="mission-title">Misi TK</h2>
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
        </div>
      </section>
    </div>
  )
}
