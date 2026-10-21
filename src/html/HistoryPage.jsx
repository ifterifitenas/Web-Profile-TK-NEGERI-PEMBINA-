const schoolTimeline = [
  {
    period: '2002',
    title: 'TK Negeri Pembina mulai didirikan',
    description: 'Sekolah mulai didirikan sebagai TK negeri di Kota Cimahi.',
  },
  {
    period: '2003–2004',
    title: 'Pembelajaran pertama dimulai',
    description:
      'Tahun pelajaran pertama dimulai. Ibu Ernawati, S.Pd., menjadi kepala sekolah pertama dan bertugas pada 2003–2007.',
  },
  {
    period: '2007–2019',
    title: 'Kepala sekolah: Ibu Ika Surtika, S.Pd.',
    description: 'Memimpin TK Negeri Pembina sejak tahun pelajaran 2007 hingga 2019.',
  },
  {
    period: 'Maret 2019–Juni 2026',
    title: 'Kepala sekolah: Ibu Oneng Rosanah, S.Pd., M.Pd.',
    description: 'Melanjutkan kepemimpinan sekolah hingga Juni 2026.',
  },
  {
    period: 'Tahun Ajaran 2026–2027',
    title: 'Plt. Kepala sekolah: Ibu Ani Sumarni, S.Pd.AUD.',
    description: 'Menjabat sebagai pelaksana tugas kepala sekolah.',
  },
]

const classGroups = ['Pisang', 'Ceri', 'Jeruk', 'Melon', 'Mangga', 'Anggur', 'Apel', 'Strawberry']

const schoolFacts = [
  { value: '156', label: 'peserta didik' },
  { value: '8', label: 'rombongan belajar' },
  { value: '18', label: 'tenaga pendidik dan kependidikan' },
]

export default function HistoryPage() {
  return (
    <div className="history-page">
      <section className="history-hero page-section" aria-labelledby="history-title">
        <div className="history-hero-copy">
          <p className="section-kicker">Sejarah sekolah</p>
          <h1 id="history-title">TK Negeri Pembina Kota Cimahi</h1>
          <p className="history-lead">
            Berada di bawah naungan Dinas Pendidikan Kota Cimahi, sekolah ini merupakan satu-satunya
            TK negeri di Kota Cimahi. Pembelajaran pertama dimulai pada tahun pelajaran 2003–2004.
          </p>
          <span className="history-authority">Di bawah naungan Dinas Pendidikan Kota Cimahi</span>
        </div>
        <div className="history-founded" aria-label="Didirikan pada tahun 2002">
          <span>Mulai didirikan</span>
          <strong>2002</strong>
        </div>
      </section>

      <section className="history-block" aria-labelledby="history-location-title">
        <div className="history-heading">
          <p className="section-kicker">Lokasi dan lingkungan</p>
          <h2 id="history-location-title">Tumbuh di lingkungan pendidikan dan masyarakat</h2>
          <p>
            TK Negeri Pembina Kota Cimahi berada di lingkungan pendidikan yang mencakup TK, SD,
            SMP, SMA, MAN, dan SMK. Selain SD, SMP, dan MAN, terdapat banyak lembaga PAUD di
            lingkungan RW 09. Kawasan ini juga merupakan lingkungan permukiman yang padat penduduk.
          </p>
        </div>

        <div className="history-location-grid">
          <article className="history-address-card">
            <span className="history-card-label">Alamat sekolah</span>
            <h3>Leuwigajah, Cimahi Selatan</h3>
            <p>
              Jl. Kerkhof No. 323, RT 08/RW 09, Kelurahan Leuwigajah, Kecamatan Cimahi Selatan,
              Kota Cimahi.
            </p>
          </article>

          <article className="history-neighborhood-card">
            <span className="history-card-label">Di sekitar sekolah</span>
            <h3>Berada di tengah komunitas belajar</h3>
            <p>
              Lingkungan sekolah dekat dengan Puskesmas Leuwigajah, Lapangan Poral Leuwigajah,
              dan Rusunawa Leuwigajah.
            </p>
            <div className="history-nearby-list" aria-label="Fasilitas di sekitar sekolah">
              <span>Puskesmas</span>
              <span>Lapangan Poral</span>
              <span>Rusunawa</span>
            </div>
          </article>
        </div>
      </section>

      <section className="history-block history-timeline-section" aria-labelledby="history-timeline-title">
        <div className="history-heading">
          <p className="section-kicker">Perjalanan kepemimpinan</p>
          <h2 id="history-timeline-title">Dari tahun ke tahun</h2>
        </div>
        <ol className="history-timeline">
          {schoolTimeline.map((milestone) => (
            <li className="history-timeline-item" key={milestone.period}>
              <span className="history-timeline-period">{milestone.period}</span>
              <div>
                <h3>{milestone.title}</h3>
                <p>{milestone.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="history-current" aria-labelledby="history-current-title">
        <div className="history-heading">
          <p className="section-kicker">Tahun ajaran 2026–2027</p>
          <h2 id="history-current-title">Sekolah hari ini</h2>
          <p>
            TK Negeri Pembina Kota Cimahi berada di bawah naungan Dinas Pendidikan Kota Cimahi dan
            merupakan satu-satunya TK negeri yang ada di Kota Cimahi. Pada tahun pelajaran 2026–2027,
            jumlah anak didik TKN Pembina adalah 156 anak.
          </p>
        </div>

        <div className="history-facts-grid">
          {schoolFacts.map((fact) => (
            <article className="history-fact-card" key={fact.label}>
              <strong>{fact.value}</strong>
              <span>{fact.label}</span>
            </article>
          ))}
        </div>

        <div className="history-groups">
          <h3>Delapan kelompok belajar</h3>
          <ul className="history-group-list">
            {classGroups.map((group) => <li key={group}>{group}</li>)}
          </ul>
        </div>

        <div className="history-campus-panel">
          <div className="history-campus-stat">
            <span>Luas sekolah</span>
            <strong>3.300 <small>m²</small></strong>
          </div>
          <div className="history-campus-copy">
            <h3>Ruang yang luas, teduh, dan menyenangkan</h3>
            <p>
              Pelaksanaan pembelajaran di TK Negeri Pembina terasa menyenangkan karena luas sekolah
              mencapai 3.300 m². Pada pagi hari udaranya bersih berkat banyaknya pepohonan rindang.
              Anak-anak dapat berlari-lari dan bermain dengan leluasa, baik di dalam maupun di luar
              ruangan.
            </p>
            <div className="history-campus-tags" aria-label="Suasana sekolah">
              <span>Pepohonan rindang</span>
              <span>Udara pagi bersih</span>
              <span>Bermain di dalam dan luar ruangan</span>
            </div>
          </div>
        </div>

        <div className="history-notes-grid">
          <article className="history-staff-note">
            <h3>Tenaga sekolah</h3>
            <p>
              Tenaga pendidik dan kependidikan tercatat berjumlah 18 orang. Rincian yang dicantumkan
              meliputi 1 pendidik, 4 tenaga tata usaha, dan 4 penjaga sekolah.
            </p>
          </article>
          <article className="history-family-note">
            <h3>Latar belakang keluarga</h3>
            <p>
              Peserta didik umumnya berasal dari keluarga dengan kondisi ekonomi menengah; banyak
              orang tua bekerja sebagai karyawan perusahaan.
            </p>
          </article>
        </div>
      </section>
    </div>
  )
}
