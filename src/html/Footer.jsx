import schoolLogo from '../assets/Foto/LOGO.jpg'
import mapIcon from '../assets/Icons/2330619271551682745.svg'
import phoneIcon from '../assets/Icons/8216011891543238910.svg'
import emailIcon from '../assets/Icons/11444610701574338604.svg'

const footerLinks = [
  { id: 'home', label: 'Home' },
  { id: 'sejarah', label: 'Sejarah' },
  { id: 'visi-misi', label: 'Visi & Misi' },
  { id: 'fasilitas', label: 'Fasilitas' },
  { id: 'guru', label: 'Guru' },
  { id: 'kegiatan', label: 'Kegiatan' },
  { id: 'spmb', label: 'SPMB' },
]

const gmapsUrl = 'https://maps.app.goo.gl/QjsCsPdF5Hq1isiQ6'

export default function Footer({ onNavigate }) {
  return (
    <footer className="site-footer" id="site-footer">
      <div className="footer-main">
        <div className="footer-school">
          <div className="footer-brand">
            <img className="footer-brand-mark" src={schoolLogo} alt="Logo TK Negeri Pembina" />
            <span>TK NEGERI PEMBINA</span>
          </div>
          <p>
            Mendampingi anak tumbuh, belajar, dan mengenali potensinya dalam lingkungan yang ramah
            dan menyenangkan.
          </p>
          <span className="footer-location">Kota Cimahi, Jawa Barat</span>
        </div>

        <div className="footer-navigation">
          <h2>Navigasi</h2>
          <ul>
            {footerLinks.map((link) => (
              <li key={link.id}>
                <button type="button" onClick={() => onNavigate(link.id)}>
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-contact">
          <h2>Informasi Kontak</h2>
          <dl>
            <div className="contact-row">
              <dt>
                <img className="contact-icon" src={mapIcon} alt="Ikon lokasi" />
                Alamat
              </dt>
              <dd>
                <a href={gmapsUrl} target="_blank" rel="noreferrer">
                  JL.Kerkhof No 323 Kelurahan Leuwigajah, Kecamatan Cimahi Selatan, Kota Cimahi, Jawa Barat 40532
                </a>
              </dd>
            </div>
            <div className="contact-row">
              <dt>
                <img className="contact-icon" src={phoneIcon} alt="Ikon telepon" />
                Telepon / WhatsApp
              </dt>
              <dd>
                <a href="tel:+62226677954">022-6677954</a>
              </dd>
            </div>
            <div className="contact-row">
              <dt>
                <img className="contact-icon" src={emailIcon} alt="Ikon email" />
                Email
              </dt>
              <dd>
                <a href="mailto:info@tknegeripembina.sch.id">Email resmi sekolah</a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} TK Negeri Pembina Kota Cimahi</span>
        <span>Ramah anak · Tumbuh bersama</span>
      </div>
    </footer>
  )
}
