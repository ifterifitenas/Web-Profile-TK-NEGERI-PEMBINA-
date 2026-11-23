const schoolTimeline = [
  {
    period: '2002',
    title: 'TK Negeri Pembina didirikan',
    description:
      'TK Negeri Pembina Kota Cimahi mulai didirikan di bawah naungan Dinas Pendidikan Kota Cimahi.',
  },
  {
    period: '2003–2007',
    title: 'Pembelajaran pertama dan kepemimpinan Ibu Ernawati, S.Pd.',
    description:
      'Kegiatan pembelajaran dimulai pada tahun pelajaran 2003–2004. Ibu Ernawati menjadi kepala sekolah pertama.',
  },
  {
    period: '2007–2019',
    title: 'Kepemimpinan Ibu Ika Surtika, S.Pd.',
    description: 'Ibu Ika Surtika melanjutkan kepemimpinan TK Negeri Pembina.',
  },
  {
    period: 'Maret 2019–Juni 2026',
    title: 'Kepemimpinan Ibu Oneng Rosanah, S.Pd., M.Pd.',
    description: 'Ibu Oneng Rosanah memimpin sekolah hingga Juni 2026.',
  },
  {
    period: 'Tahun Ajaran 2026–2027',
    title: 'Plt. Kepala sekolah: Ibu Ani Sumarni, S.Pd.AUD.',
    description: 'Ibu Ani Sumarni menjalankan tugas sebagai pelaksana tugas kepala sekolah.',
  },
]

export default function HistoryPage() {
  return (
    <div className="history-v2">
      <section className="history-v2-hero" aria-labelledby="history-title">
        <div className="history-v2-inner history-v2-hero-inner">
          <div className="history-v2-hero-copy">
            <p className="section-kicker">Jejak perjalanan sekolah</p>
            <h1 id="history-title">Sejarah TK Negeri Pembina Kota Cimahi</h1>
            <p>
              Berdiri sejak 2002, TK Negeri Pembina tumbuh sebagai satu-satunya TK negeri di Kota
              Cimahi. Perjalanan sekolah ini berawal dari pembelajaran pertama pada tahun ajaran
              2003–2004 dan terus berlanjut hingga hari ini.
            </p>
            <span className="history-v2-authority">Di bawah naungan Dinas Pendidikan Kota Cimahi</span>
          </div>
          <div className="history-v2-year" aria-label="Didirikan pada tahun 2002">
            <span>Didirikan</span>
            <strong>2002</strong>
          </div>
        </div>
      </section>

      <section className="history-v2-timeline" aria-labelledby="history-timeline-title">
        <div className="history-v2-inner">
          <header className="history-v2-heading">
            <p className="section-kicker">Dari masa ke masa</p>
            <h2 id="history-timeline-title">Perjalanan kepemimpinan</h2>
            <p>
              Catatan tonggak penting sejak sekolah didirikan hingga periode kepemimpinan terbaru.
            </p>
          </header>

          <ol className="history-v2-list">
            {schoolTimeline.map((milestone, index) => (
              <li className="history-v2-item" key={milestone.period}>
                <span className="history-v2-marker" aria-hidden="true">{index + 1}</span>
                <div className="history-v2-card">
                  <span className="history-v2-period">{milestone.period}</span>
                  <div>
                    <h3>{milestone.title}</h3>
                    <p>{milestone.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="history-v2-place" aria-labelledby="history-place-title">
        <div className="history-v2-inner">
          <header className="history-v2-heading">
            <p className="section-kicker">Tempat sekolah bertumbuh</p>
            <h2 id="history-place-title">Bagian dari lingkungan Leuwigajah</h2>
            <p>
              Sekolah berada di tengah lingkungan pendidikan dan permukiman yang hidup, dekat dengan
              layanan kesehatan serta ruang kegiatan masyarakat.
            </p>
          </header>

          <div className="history-v2-place-grid">
            <article className="history-v2-place-card history-v2-address">
              <span className="history-v2-card-label">Alamat sekolah</span>
              <h3>Leuwigajah, Cimahi Selatan</h3>
              <p>
                Jl. Kerkhof No. 323, RT 08/RW 09, Kelurahan Leuwigajah, Kecamatan Cimahi Selatan,
                Kota Cimahi.
              </p>
            </article>
            <article className="history-v2-place-card history-v2-environment">
              <span className="history-v2-card-label">Lingkungan sekitar</span>
              <h3>Belajar di tengah komunitas</h3>
              <p>
                TK Negeri Pembina berada di kawasan yang dikelilingi berbagai jenjang pendidikan dan
                lembaga PAUD. Di lingkungan pendidikan sekitar RW 09 terdapat TK, SD, SMP, SMA, MAN,
                dan SMK, serta berbagai lembaga PAUD. Kawasan ini juga merupakan permukiman yang
                padat penduduk.
                {' '}
                Dalam gambaran yang tercatat, banyak orang tua peserta didik bekerja sebagai karyawan
                perusahaan dan latar ekonomi keluarga umumnya menengah.
              </p>
            </article>
            <article className="history-v2-place-card history-v2-community">
              <span className="history-v2-card-label">Fasilitas masyarakat</span>
              <h3>Dekat dengan layanan sekitar</h3>
              <p>
                Di sekitar sekolah terdapat Puskesmas Leuwigajah, Lapangan Poral Leuwigajah, dan
                Rusunawa Leuwigajah. Kedekatan ini menjadikan sekolah bagian dari lingkungan
                masyarakat yang aktif.
              </p>
            </article>
          </div>

          <aside className="history-v2-campus">
            <span className="history-v2-campus-mark" aria-hidden="true">✦</span>
            <div>
              <p className="section-kicker">Suasana sekolah</p>
              <h3>Ruang luas, teduh, dan menyenangkan</h3>
              <p>
                Area sekolah seluas sekitar 3.300 m² memiliki pepohonan rindang yang membantu
                menjaga suasana pagi tetap sejuk dan nyaman. Ruang yang tersedia memberi anak
                keleluasaan untuk berlari, bermain, dan mengikuti pembelajaran di dalam maupun di
                luar ruangan.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}
