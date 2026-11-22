import { useState, useEffect } from "react";
import fotoAniSumarni from "../assets/Foto/guru/Ani Sumarni.jpg";
import fotoSitiRomlah from "../assets/Foto/guru/SITI ROMLAH.jpg";
import fotoRopiah from "../assets/Foto/guru/ROPIAH.jpeg";
import fotoYeniSusanti from "../assets/Foto/guru/Yeni Susanti.jpeg";
import fotoYennyJuwita from "../assets/Foto/guru/YENNY JUWITA.jpeg";
import fotoSitiRuqoyah from "../assets/Foto/guru/SITI RUQOYAH.jpeg";
import fotoReniSriWahyuni from "../assets/Foto/guru/Reni Sri Wahyuni.jpg";
import fotoYanMulyani from "../assets/Foto/guru/YAN MULYANI.jpeg";
import fotoEmaHotimah from "../assets/Foto/guru/EMA HOTIMAH.jpg";
import fotoNiningSariningsih from "../assets/Foto/guru/Nining Sariningsih.jpg";
import fotoTantyAgustianty from "../assets/Foto/guru/TANTY AGUSTIANTY.jpeg";
import fotoDiahPuspita from "../assets/Foto/guru/Diah Puspita.jpg";
import fotoLinggaRusdiana from "../assets/Foto/guru/LINGGA RUSDIANA.jpg";
import fotoDeniHidayat from "../assets/Foto/guru/Deni Hidayat.jpg";
import fotoMamatRahmat from "../assets/Foto/guru/Mamat Rahmat.jpeg";

const teachers = [
  {
    id: "kepala-sekolah-ani",
    name: "Ani Sumarni, S.Pd.AUD",
    role: "Plt. Kepala Sekolah",
    category: "Kepala Sekolah",
    description:
      "Halo! Kenalkan, ini Bu Ani, Plt. Kepala Sekolah kita. Lulusan S1 PAUD Universitas Terbuka ini sudah 21 tahun mengabdi dan mengajar dengan penuh kasih sayang agar sekolah kita selalu seru dan nyaman.",
    nip: "196905202008012013",
    image: fotoAniSumarni,
  },
  {
    id: "guru-siti-romlah-strawberry",
    name: "Siti Romlah, S.Pd.AUD",
    role: "Kelas Strawberi dan Bendahara",
    category: ["Guru", "Bendahara"],
    categoryRoles: {
      Guru: "Guru Kelas Strawberi",
      Bendahara: "Bendahara",
    },
    description:
      "Ini Bu Oom, guru Kelas Strawberi sekaligus Bendahara sekolah. Lulusan S1 PAUD Universitas Terbuka ini sudah punya pengalaman mengajar selama 39 tahun mendampingi anak-anak belajar dengan gembira.",
    nip: "196701112008012006",
    image: fotoSitiRomlah,
  },
  {
    id: "tu-ropiah",
    name: "Ropiah",
    role: "Pengadministrasi Perkantoran / TU",
    category: "Administrasi / Tata Usaha",
    description:
      "Kenalkan, ini Bu Ropi yang bertugas di bagian Tata Usaha. Sudah 23 tahun lamanya Bu Ropi dengan teliti membantu mengurus berbagai surat dan keperluan sekolah kita.",
    nip: "197005042010012001",
    image: fotoRopiah,
  },
  {
    id: "tu-yeni",
    name: "Yeni Susanti",
    role: "Pengadministrasi Perkantoran / Operator Sekolah",
    category: "Administrasi / Tata Usaha",
    description:
      "Ini Bu Yeni, Operator Sekolah kita yang ramah. Lulusan SMA Negeri 4 Cimahi ini sudah lebih dari 7 tahun membantu merapikan data dan kegiatan administrasi sekolah.",
    nip: "198708102025212046",
    image: fotoYeniSusanti,
  },
  {
    id: "tu-yenny",
    name: "Yenny Juwita Ummells",
    role: "Pengadministrasi Perkantoran / Bag. Aset & Kepegawaian",
    category: "Administrasi / Tata Usaha",
    description:
      "Kenalkan, ini Bu Iyen, lulusan D3 UNIKOM yang sudah 1 tahun bergabung di sekolah kita. Bu Iyen membantu menjaga dan mendata perlengkapan serta aset sekolah agar selalu terawat.",
    nip: "198210192025212027",
    image: fotoYennyJuwita,
  },
  {
    id: "guru-siti-ruqoyah",
    name: "Siti Ruqoyah, S.Pd",
    role: "Guru Kelas Apel",
    category: "Guru",
    description:
      "Ini Bu Uqo, wali Kelas Apel yang sabar dan ceria. Lulusan S1 IKIP Siliwangi ini sudah 23 tahun mengajar dan menemani anak-anak bermain sambil belajar.",
    nip: "197908292008012006",
    image: fotoSitiRuqoyah,
  },
  {
    id: "guru-reni",
    name: "Reni Sri Wahyuni, S.Pd",
    role: "Guru Kelas Anggur",
    category: "Guru",
    description:
      "Kenalkan, ini Bu Reni, wali Kelas Anggur kita. Lulusan S1 PGPAUD IKIP Siliwangi ini sudah 30 tahun mengajar dan lebih dari 18 tahun mengabdi dengan penuh semangat.",
    nip: "197203202008012003",
    image: fotoReniSriWahyuni,
  },
  {
    id: "guru-yan",
    name: "Yan Mulyani, S.Pd.AUD",
    role: "Guru Kelas Ceri",
    category: "Guru",
    description:
      "Ini Bu Iyan atau biasa dipanggil Bu Yani, guru Kelas Ceri. Lulusan S1 PG-PAUD Universitas Terbuka ini sudah 21 tahun berpengalaman membimbing anak-anak dengan hangat.",
    nip: "197902052008012004",
    image: fotoYanMulyani,
  },
  {
    id: "guru-ema",
    name: "Ema Hotimah, S.Pd",
    role: "Guru Kelas Ceri",
    category: "Guru",
    description:
      "Kenalkan, ini Bu Ema, guru Kelas Ceri yang penuh perhatian. Lulusan S1 STKIP Siliwangi ini sudah 34 tahun mengajar dan selalu siap membantu anak-anak bertumbuh.",
    nip: "196705181992032011",
    image: fotoEmaHotimah,
  },
  {
    id: "guru-nining",
    name: "Nining Sariningsih, S.Pd",
    role: "Guru Kelas Mangga",
    category: "Guru",
    description:
      "Ini Bu Nining, wali Kelas Mangga yang penyayang. Lulusan S1 UNINUS ini sudah 30 tahun mengajar dan 19 tahun mengabdi menciptakan suasana belajar yang menyenangkan.",
    nip: "196705312008012004",
    image: fotoNiningSariningsih,
  },
  {
    id: "guru-tanty",
    name: "Tanty Agustianty H., S.Pd.I",
    role: "Guru Kelas Jeruk",
    category: "Guru",
    description:
      "Kenalkan, ini Bu Tanty, guru Kelas Jeruk kita. Lulusan S1 Pendidikan Agama Islam Universitas Muhammadiyah Jakarta ini sudah 33 tahun mengajar dengan penuh kesabaran.",
    nip: "196908172008012014",
    image: fotoTantyAgustianty,
  },
  {
    id: "guru-diah",
    name: "Diah Puspita, ST",
    role: "Guru Pendamping Kelas Jeruk",
    category: "Guru",
    description:
      "Ini Bu Diah, guru pendamping di Kelas Jeruk. Lulusan S1 UNJANI Cimahi ini sudah 4 tahun mengabdi di sekolah dan senang mendampingi anak-anak belajar setiap hari.",
    nip: "",
    image: fotoDiahPuspita,
  },
  {
    id: "tenaga-lingga",
    name: "Lingga Rusdiana",
    role: "Operator Layanan Operasional",
    category: "Tenaga Kependidikan",
    description:
      "Kenalkan, ini Pa Lingga, lulusan MA An-Nur Maruyung yang sudah 1 tahun bertugas. Pa Lingga selalu sigap membantu berbagai layanan operasional agar kegiatan sekolah berjalan lancar.",
    nip: "198707042025221060",
    image: fotoLinggaRusdiana,
  },
  {
    id: "tenaga-deni",
    name: "Deni Hidayat",
    role: "Pengelola Umum Operasional",
    category: "Tenaga Kependidikan",
    description:
      "Ini Pa Deni yang sudah 1 tahun membantu di bagian Pengelola Umum Operasional. Pa Deni ikut menjaga agar lingkungan sekolah kita selalu siap dipakai belajar dan bermain.",
    nip: "198510102025211088",
    image: fotoDeniHidayat,
  },
  {
    id: "tenaga-mamat",
    name: "Mamat Rahmat",
    role: "Pengelola Umum Operasional",
    category: "Tenaga Kependidikan",
    description:
      "Kenalkan, ini Pa Mamat yang juga bertugas di bagian Pengelola Umum Operasional selama 1 tahun ini. Pa Mamat selalu membantu kebutuhan umum sekolah agar semuanya tetap rapi dan nyaman.",
    nip: "197610242025211019",
    image: fotoMamatRahmat,
  },
];

function TeacherCloud({ className = "", variant = "puffy" }) {
  const cloudPaths = {
    puffy: "M18 58h68a18 18 0 0 0 0-36 24 24 0 0 0-45-6 21 21 0 0 0-33 17 13 13 0 0 0 10 25Z",
    wide: "M12 60h76a16 16 0 0 0 2-32 25 25 0 0 0-46-8 20 20 0 0 0-35 15 13 13 0 0 0 3 25Z",
    fluffy: "M16 59h70a17 17 0 0 0 2-34 20 20 0 0 0-39-8 22 22 0 0 0-37 13 15 15 0 0 0 4 29Z",
  };

  return (
    <svg className={`teacher-cloud ${className}`} viewBox="0 0 100 100" aria-hidden="true" focusable="false">
      <path d={cloudPaths[variant]} fill="rgba(255, 255, 255, 0.85)" stroke="#DDF1FF" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M29 48h42" fill="none" stroke="#BFE5FB" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function TeacherDoodle({ variant = "star", className = "" }) {
  const doodles = {
    star: (
      <path
        d="M50 9 61 37 91 39 68 58 76 88 50 72 24 88 32 58 9 39 39 37Z"
        fill="rgba(255, 255, 255, 0.45)"
        stroke="#DDF1FF"
      />
    ),
    heart: (
      <path
        d="M50 84 18 53C-2 31 28 8 50 31 72 8 102 31 82 53Z"
        fill="rgba(255, 255, 255, 0.45)"
        stroke="#DDF1FF"
      />
    ),
    flower: (
      <>
        <circle cx="50" cy="25" r="14" fill="rgba(255, 255, 255, 0.45)" stroke="#DDF1FF" />
        <circle cx="73" cy="42" r="14" fill="rgba(255, 255, 255, 0.45)" stroke="#DDF1FF" />
        <circle cx="64" cy="69" r="14" fill="rgba(255, 255, 255, 0.45)" stroke="#DDF1FF" />
        <circle cx="36" cy="69" r="14" fill="rgba(255, 255, 255, 0.45)" stroke="#DDF1FF" />
        <circle cx="27" cy="42" r="14" fill="rgba(255, 255, 255, 0.45)" stroke="#DDF1FF" />
        <circle cx="50" cy="48" r="13" fill="rgba(255, 255, 255, 0.65)" stroke="#DDF1FF" />
      </>
    ),
    pencil: (
      <>
        <path d="m31 73 35-48 14 11-35 48Z" fill="rgba(255, 255, 255, 0.45)" stroke="#DDF1FF" />
        <path d="m31 73-9 22 23-11Z" fill="rgba(255, 255, 255, 0.45)" stroke="#DDF1FF" />
        <path d="m66 25 8-11 14 11-8 11Z" fill="rgba(255, 255, 255, 0.45)" stroke="#DDF1FF" />
      </>
    ),
    book: (
      <>
        <path d="M50 31c-12-9-26-11-38-7v52c14-4 27-2 38 7Zm0 0c12-9 26-11 38-7v52c-14-4-27-2-38 7Z" fill="rgba(255, 255, 255, 0.45)" stroke="#DDF1FF" />
        <path d="M50 31v52M22 38c9-2 17 0 23 4M78 38c-9-2-17 0-23 4" fill="none" stroke="#DDF1FF" />
      </>
    ),
    sun: (
      <>
        <circle cx="50" cy="50" r="23" fill="rgba(255, 255, 255, 0.45)" stroke="#DDF1FF" />
        <path d="M50 10v10m0 60v10M10 50h10m60 0h10M22 22l8 8m40 40 8 8m0-56-8 8m-40 40-8 8" fill="none" stroke="#DDF1FF" />
      </>
    ),
    rainbow: (
      <>
        <path d="M12 80a38 38 0 0 1 76 0H74a24 24 0 0 0-48 0Z" fill="rgba(255, 255, 255, 0.45)" stroke="#DDF1FF" />
        <path d="M27 80a23 23 0 0 1 46 0" fill="none" stroke="#DDF1FF" />
        <path d="M12 80h16m44 0h16" fill="none" stroke="#DDF1FF" />
      </>
    ),
    abc: (
      <>
        <rect x="9" y="31" width="82" height="43" rx="8" fill="rgba(255, 255, 255, 0.45)" stroke="#DDF1FF" />
        <text x="50" y="59" textAnchor="middle" fill="#205B82" fontSize="24" fontWeight="900" fontFamily="Nunito, sans-serif">ABC</text>
      </>
    ),
  };

  return (
    <svg
      className={`teacher-doodle ${className}`}
      viewBox="0 0 100 100"
      aria-hidden="true"
      focusable="false"
    >
      <g strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {doodles[variant]}
      </g>
    </svg>
  );
}

function TeacherCard({
  teacher,
  roleLabel,
  cardKey,
  activeCardKey,
  onToggle,
}) {
  const isActive = activeCardKey === cardKey;
  const displayRole = roleLabel || teacher.role;

  return (
    <article
      className={`teacher-card ${isActive ? "is-active" : ""}`}
      tabIndex={0}
      onMouseEnter={() => onToggle(cardKey, "enter")}
      onMouseLeave={() => onToggle(cardKey, "leave")}
      onClick={() => onToggle(cardKey, "toggle")}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onToggle(cardKey, "toggle");
        }
      }}
      aria-label={`${teacher.name}, ${displayRole}`}
    >
      <div className="teacher-image-wrap">
        <img src={teacher.image} alt={teacher.name} loading="lazy" />
        <div className="teacher-image-overlay" />

        <div className="teacher-text">
          <div className="teacher-info">
            <h3>{teacher.name}</h3>
            <span className="teacher-role-badge">{displayRole}</span>
          </div>

          <div className="teacher-description">
            <p>{teacher.description}</p>
            {teacher.nip && <span className="teacher-nip">NIP: {teacher.nip}</span>}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function TeacherPage() {
  const [activeCardKey, setActiveCardKey] = useState(null);

  // Apply full-page blue background when TeacherPage is active
  useEffect(() => {
    document.body.classList.add("teacher-page-active");
    return () => {
      document.body.classList.remove("teacher-page-active");
    };
  }, []);

  const handleToggle = (key, action) => {
    if (action === "enter") {
      setActiveCardKey(key);
    } else if (action === "leave") {
      setActiveCardKey(null);
    } else if (action === "toggle") {
      setActiveCardKey((current) => (current === key ? null : key));
    }
  };

  // Level 1: Kepala Sekolah
  const headmaster = teachers.find((t) => t.id === "kepala-sekolah-ani");

  // Level 2: Bendahara (Dipisah ke baris tersendiri)
  const treasurer = teachers.find((t) => t.id === "guru-siti-romlah-strawberry");

  // Level 3: Administrasi / Tata Usaha (Dipisah ke baris tersendiri di bawah bendahara)
  const tuStaff = teachers.filter((t) => t.category === "Administrasi / Tata Usaha");

  // Level 4: Dewan Guru (Pendidik Kelas)
  const teachersList = [
    { ...treasurer, roleInClass: "Guru Kelas Strawberi" },
    { ...teachers.find((t) => t.id === "guru-siti-ruqoyah"), roleInClass: "Guru Kelas Apel" },
    { ...teachers.find((t) => t.id === "guru-reni"), roleInClass: "Guru Kelas Anggur" },
    { ...teachers.find((t) => t.id === "guru-yan"), roleInClass: "Guru Kelas Ceri" },
    { ...teachers.find((t) => t.id === "guru-ema"), roleInClass: "Guru Kelas Ceri" },
    { ...teachers.find((t) => t.id === "guru-nining"), roleInClass: "Guru Kelas Mangga" },
    { ...teachers.find((t) => t.id === "guru-tanty"), roleInClass: "Guru Kelas Jeruk" },
    { ...teachers.find((t) => t.id === "guru-diah"), roleInClass: "Guru Pendamping Kelas Jeruk" },
  ];

  // Level 5: Tenaga Kependidikan
  const supportStaff = teachers.filter((t) => t.category === "Tenaga Kependidikan");

  return (
    <section className="teacher-page-section">
      {/* Decorative whimsical clouds */}
      <TeacherCloud className="teacher-cloud-one" />
      <TeacherCloud className="teacher-cloud-two" variant="wide" />
      <TeacherCloud className="teacher-cloud-three" variant="fluffy" />
      <TeacherCloud className="teacher-cloud-four" variant="wide" />

      {/* Decorative doodle ornaments */}
      <TeacherDoodle variant="star" className="teacher-doodle-1" />
      <TeacherDoodle variant="heart" className="teacher-doodle-2" />
      <TeacherDoodle variant="flower" className="teacher-doodle-3" />
      <TeacherDoodle variant="pencil" className="teacher-doodle-4" />
      <TeacherDoodle variant="book" className="teacher-doodle-5" />
      <TeacherDoodle variant="sun" className="teacher-doodle-6" />
      <TeacherDoodle variant="rainbow" className="teacher-doodle-7" />
      <TeacherDoodle variant="abc" className="teacher-doodle-8" />

      {/* Main Page Header */}
      <div className="teacher-heading">
        <div className="teacher-kicker-pill">
          <span className="teacher-kicker-dot" />
          <span>STRUKTUR ORGANISASI SEKOLAH</span>
        </div>
        <h1 className="teacher-main-title">Guru &amp; Tenaga Pendidik</h1>
        <p className="teacher-sub-kicker">
          Bagan susunan kepemimpinan, tenaga pendidik, dan staf penunjang TK Negeri Pembina
        </p>
      </div>

      {/* Organizational Structure Tree */}
      <div className="org-tree-container">
        {/* ========================================================= */}
        {/* LEVEL 1: KEPALA SEKOLAH */}
        {/* ========================================================= */}
        <div className="org-level-section org-level-1">
          <div className="org-tier-pill level-pill-1">
            <span className="tier-dot" />
            <span>Kepala Sekolah</span>
          </div>

          <div className="org-single-card-wrap">
            {headmaster && (
              <TeacherCard
                teacher={headmaster}
                roleLabel="Plt. Kepala Sekolah"
                cardKey="level-1-headmaster"
                activeCardKey={activeCardKey}
                onToggle={handleToggle}
              />
            )}
          </div>
        </div>

        {/* Stem 1: From Kepala Sekolah to Bendahara */}
        <div className="org-stem-down" aria-hidden="true">
          <span className="org-stem-line" />
          <span className="org-connector-node" />
        </div>

        {/* ========================================================= */}
        {/* LEVEL 2: BENDAHARA (Tingkat Tersendiri) */}
        {/* ========================================================= */}
        <div className="org-level-section org-level-2">
          <div className="org-tier-pill level-pill-2">
            <span className="tier-dot" />
            <span>Bendahara</span>
          </div>

          <div className="org-single-card-wrap">
            {treasurer && (
              <TeacherCard
                teacher={treasurer}
                roleLabel="Bendahara Sekolah"
                cardKey="level-2-bendahara"
                activeCardKey={activeCardKey}
                onToggle={handleToggle}
              />
            )}
          </div>
        </div>

        {/* Stem 2: From Bendahara to Administrasi / Tata Usaha */}
        <div className="org-stem-down" aria-hidden="true">
          <span className="org-stem-line" />
          <span className="org-connector-node" />
        </div>

        {/* ========================================================= */}
        {/* LEVEL 3: ADMINISTRASI & TATA USAHA (Tingkat Tersendiri) */}
        {/* ========================================================= */}
        <div className="org-level-section org-level-3">
          <div className="org-tier-pill level-pill-3">
            <span className="tier-dot" />
            <span>Administrasi &amp; Tata Usaha</span>
          </div>

          <div className="org-tu-grid">
            {tuStaff.map((staff) => (
              <TeacherCard
                key={`tu-${staff.id}`}
                teacher={staff}
                roleLabel={staff.role}
                cardKey={`level-3-tu-${staff.id}`}
                activeCardKey={activeCardKey}
                onToggle={handleToggle}
              />
            ))}
          </div>
        </div>

        {/* Stem 3: Central trunk leading to Dewan Guru */}
        <div className="org-stem-down" aria-hidden="true">
          <span className="org-stem-line" />
          <span className="org-connector-node" />
        </div>

        {/* ========================================================= */}
        {/* LEVEL 4: DEWAN GURU */}
        {/* ========================================================= */}
        <div className="org-level-section org-level-4">
          <div className="org-tier-pill level-pill-4">
            <span className="tier-dot" />
            <span>Dewan Guru &amp; Wali Kelas</span>
          </div>

          <div className="org-teachers-grid">
            {teachersList.map((guru) => (
              <TeacherCard
                key={`guru-${guru.id}`}
                teacher={guru}
                roleLabel={guru.roleInClass}
                cardKey={`level-4-guru-${guru.id}`}
                activeCardKey={activeCardKey}
                onToggle={handleToggle}
              />
            ))}
          </div>
        </div>

        {/* Stem 4: Central trunk leading to Tenaga Kependidikan */}
        <div className="org-stem-down" aria-hidden="true">
          <span className="org-stem-line" />
          <span className="org-connector-node" />
        </div>

        {/* ========================================================= */}
        {/* LEVEL 5: TENAGA KEPENDIDIKAN */}
        {/* ========================================================= */}
        <div className="org-level-section org-level-5">
          <div className="org-tier-pill level-pill-5">
            <span className="tier-dot" />
            <span>Tenaga Kependidikan</span>
          </div>

          <div className="org-staff-grid">
            {supportStaff.map((staff) => (
              <TeacherCard
                key={`staff-${staff.id}`}
                teacher={staff}
                roleLabel={staff.role}
                cardKey={`level-5-staff-${staff.id}`}
                activeCardKey={activeCardKey}
                onToggle={handleToggle}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Injected styling: scoped global full-bleed blue background & org tree */}
      <style>{`
        /* -------------------------------------------------------------
           FULL BLUE BACKGROUND: Page shell & body become rich blue
        ------------------------------------------------------------- */
        body.teacher-page-active {
          background-color: #4A9FD9 !important;
        }

        body.teacher-page-active .page-shell {
          background:
            radial-gradient(ellipse at 12% 14%, rgba(221, 241, 255, 0.35), transparent 42%),
            radial-gradient(ellipse at 88% 40%, rgba(169, 221, 245, 0.32), transparent 48%),
            radial-gradient(ellipse at 20% 75%, rgba(221, 241, 255, 0.3), transparent 45%),
            linear-gradient(180deg, #3B8EC3 0%, #4A9FD9 16%, #5CAEE0 48%, #4A9FD9 80%, #3683B8 100%) !important;
          min-height: 100vh;
        }

        /* -------------------------------------------------------------
           NAVBAR: REVERTED TO ORIGINAL COLORS (NOT BLUE)
        ------------------------------------------------------------- */
        body.teacher-page-active .navbar-shell {
          background: #FFF9EC !important;
          box-shadow: 0 5px 16px rgba(48, 70, 90, 0.06) !important;
          border-bottom: 0 !important;
          backdrop-filter: none !important;
          -webkit-backdrop-filter: none !important;
        }

        body.teacher-page-active .brand-name {
          color: #30465A !important;
          text-shadow: none !important;
        }

        body.teacher-page-active .brand-subtitle {
          color: #6B7D89 !important;
        }

        body.teacher-page-active .nav-link,
        body.teacher-page-active .dropdown-toggle {
          color: #30465A !important;
        }

        body.teacher-page-active .nav-link:hover,
        body.teacher-page-active .dropdown-toggle:hover {
          background: #EAF6FF !important;
          color: #2F6F9C !important;
        }

        body.teacher-page-active .nav-link.active {
          background: #3F91BE !important;
          color: #FFFFFF !important;
          box-shadow: none !important;
        }

        body.teacher-page-active .site-footer {
          background: #3683B8 !important;
          border-top: 1px solid rgba(255, 255, 255, 0.2) !important;
        }

        /* -------------------------------------------------------------
           TEACHER PAGE CONTAINER (Transparent, seamless, no white card)
        ------------------------------------------------------------- */
        .teacher-page-section {
          position: relative;
          isolation: isolate;
          background: transparent !important;
          border: none !important;
          border-radius: 0 !important;
          box-shadow: none !important;
          padding: 1.5rem 0 4rem !important;
          margin: 0 !important;
        }

        .teacher-page-section > * {
          position: relative;
          z-index: 1;
        }

        /* Clouds */
        .teacher-cloud {
          position: absolute;
          z-index: 0;
          display: block;
          width: 5.5rem;
          height: 3.6rem;
          overflow: visible;
          opacity: 0.65;
          pointer-events: none;
          animation: teacher-cloud-float 8s ease-in-out infinite;
          will-change: transform;
        }

        .teacher-cloud-one {
          top: 4%;
          left: 2%;
        }

        .teacher-cloud-two {
          top: 14%;
          right: 3%;
          width: 4.8rem;
          height: 3.2rem;
          animation-delay: -2s;
          animation-duration: 9.5s;
        }

        .teacher-cloud-three {
          top: 55%;
          right: 2%;
          width: 5rem;
          height: 3.4rem;
          animation-delay: -4s;
          animation-duration: 10s;
        }

        .teacher-cloud-four {
          bottom: 10%;
          left: 3%;
          width: 4.4rem;
          height: 3rem;
          animation-delay: -1s;
          animation-duration: 8.8s;
        }

        @keyframes teacher-cloud-float {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          32% { transform: translate3d(12px, -12px, 0) rotate(1.5deg) scale(1.03); }
          68% { transform: translate3d(-8px, -5px, 0) rotate(-1.5deg) scale(1.01); }
        }

        /* Doodle ornaments */
        .teacher-doodle {
          position: absolute;
          z-index: 0;
          display: block;
          overflow: visible;
          pointer-events: none;
          opacity: 0.45;
          animation: teacher-doodle-bob 10s ease-in-out infinite;
          will-change: transform;
        }

        @keyframes teacher-doodle-bob {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          40% { transform: translateY(-8px) rotate(3deg); }
          75% { transform: translateY(-3px) rotate(-2deg); }
        }

        .teacher-doodle-1 { width: 3.2rem; height: 3.2rem; top: 2%; left: 8%; animation-delay: -1s; }
        .teacher-doodle-2 { width: 2.8rem; height: 2.8rem; top: 6%; right: 10%; animation-delay: -3.5s; }
        .teacher-doodle-3 { width: 3.2rem; height: 3.2rem; top: 32%; left: 1%; animation-delay: -5s; }
        .teacher-doodle-4 { width: 2.8rem; height: 2.8rem; top: 38%; right: 1%; animation-delay: -2s; }
        .teacher-doodle-5 { width: 3rem; height: 3rem; bottom: 26%; left: 1.5%; animation-delay: -6s; }
        .teacher-doodle-6 { width: 3.2rem; height: 3.2rem; bottom: 18%; right: 2%; animation-delay: -4s; }
        .teacher-doodle-7 { width: 2.8rem; height: 2.8rem; top: 68%; left: 1%; animation-delay: -7s; }
        .teacher-doodle-8 { width: 2.8rem; height: 2.8rem; top: 76%; right: 1%; animation-delay: -0.5s; }

        /* -------------------------------------------------------------
           HEADING (High contrast white typography)
        ------------------------------------------------------------- */
        .teacher-heading {
          text-align: center;
          margin: 0 auto 2.5rem;
          padding: 0 1rem;
        }

        .teacher-kicker-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.85rem;
          padding: 0.4rem 1rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.22);
          border: 1px solid rgba(255, 255, 255, 0.45);
          color: #FFFFFF;
          font-size: 0.74rem;
          font-weight: 850;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          backdrop-filter: blur(8px);
          box-shadow: 0 4px 14px rgba(18, 54, 82, 0.12);
        }

        .teacher-kicker-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #FFF0A8;
          box-shadow: 0 0 8px #FFF0A8;
        }

        .teacher-main-title {
          margin: 0;
          color: #FFFFFF;
          font-family: 'Chewy', 'Nunito', cursive, sans-serif;
          font-size: clamp(2.4rem, 4.8vw, 3.8rem);
          font-weight: 400;
          line-height: 1.15;
          letter-spacing: 0.02em;
          text-shadow: 0 3px 12px rgba(15, 45, 70, 0.35);
        }

        .teacher-sub-kicker {
          max-width: 42rem;
          margin: 0.85rem auto 0;
          color: #E6F4FF;
          font-size: clamp(0.92rem, 1.3vw, 1.05rem);
          line-height: 1.6;
          font-weight: 600;
          text-shadow: 0 1px 4px rgba(15, 45, 70, 0.25);
        }

        /* -------------------------------------------------------------
           ORGANIZATIONAL TREE STRUCTURE
        ------------------------------------------------------------- */
        .org-tree-container {
          position: relative;
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .org-level-section {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }

        /* Tier / Level Badge Pills */
        .org-tier-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.45rem 1.25rem;
          border-radius: 999px;
          background: #FFFFFF;
          color: #1A5276;
          font-size: 0.78rem;
          font-weight: 850;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border: 1.5px solid rgba(221, 241, 255, 0.9);
          box-shadow: 0 6px 18px rgba(18, 54, 82, 0.18);
          margin-bottom: 1.2rem;
          z-index: 2;
        }

        .org-tier-pill .tier-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #4A9FD9;
        }

        .level-pill-1 .tier-dot {
          background: #E67E22;
          box-shadow: 0 0 6px #F39C12;
        }

        /* Connecting vertical stems and nodes */
        .org-stem-down {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 0.4rem 0;
          position: relative;
          z-index: 1;
        }

        .org-stem-line {
          width: 2px;
          height: 34px;
          background: #A9DDF5;
          box-shadow: 0 0 6px rgba(169, 221, 245, 0.4);
        }

        .org-connector-node {
          width: 11px;
          height: 11px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 2.5px solid #69B7E5;
          box-shadow: 0 0 0 3px rgba(169, 221, 245, 0.6), 0 3px 8px rgba(18, 54, 82, 0.2);
          margin-top: -5px;
        }

        /* Single Card Wrapper: Kepala Sekolah & Bendahara */
        .org-single-card-wrap {
          display: flex;
          justify-content: center;
          width: 100%;
          max-width: 245px;
          margin: 0 auto;
        }

        /* Grids for Multi-card Levels */
        .org-tu-grid,
        .org-staff-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1.25rem;
          width: 100%;
          max-width: 810px;
          margin: 0 auto;
          justify-items: center;
        }

        .org-teachers-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 1.25rem;
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          justify-items: center;
        }

        /* -------------------------------------------------------------
           UNIFORM CARD SIZING: EXACT SAME SIZE FOR ALL CARDS
        ------------------------------------------------------------- */
        .teacher-card {
          position: relative;
          width: 100%;
          max-width: 245px;
          border: 1.5px solid rgba(221, 241, 255, 0.55);
          border-radius: 1.45rem;
          overflow: hidden;
          background: rgba(30, 75, 110, 0.35);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          box-shadow: 0 12px 28px rgba(15, 45, 70, 0.22);
          cursor: pointer;
          transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease;
          outline: none;
          height: 100%;
          padding: 0;
          box-sizing: border-box;
        }

        .teacher-card:hover,
        .teacher-card:focus-visible,
        .teacher-card.is-active {
          transform: translateY(-4px);
          border-color: #FFFFFF;
          box-shadow: 0 16px 36px rgba(15, 45, 70, 0.32), 0 0 0 2px rgba(221, 241, 255, 0.4);
        }

        .teacher-image-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 3 / 4;
          overflow: hidden;
          border-radius: 1.4rem;
          display: flex;
          align-items: stretch;
        }

        .teacher-image-wrap img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          transition: transform 0.35s ease;
        }

        .teacher-card:hover .teacher-image-wrap img,
        .teacher-card:focus-visible .teacher-image-wrap img,
        .teacher-card.is-active .teacher-image-wrap img {
          transform: scale(1.06);
        }

        .teacher-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(18, 44, 68, 0.02) 0%,
            rgba(18, 44, 68, 0.18) 32%,
            rgba(14, 34, 52, 0.68) 68%,
            rgba(10, 24, 38, 0.94) 100%
          );
          opacity: 1;
          transition: opacity 0.28s ease;
        }

        .teacher-text {
          position: absolute;
          left: 0.95rem;
          right: 0.95rem;
          bottom: 0.95rem;
          z-index: 3;
          pointer-events: none;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          gap: 0.35rem;
        }

        .teacher-info h3 {
          margin: 0;
          color: #FFFFFF;
          font-family: 'Nunito', sans-serif;
          font-size: clamp(0.95rem, 1.1vw, 1.12rem);
          line-height: 1.25;
          font-weight: 850;
          word-break: break-word;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.45);
        }

        .teacher-role-badge {
          display: inline-block;
          margin-top: 0.25rem;
          color: #DDF1FF;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          text-shadow: 0 2px 6px rgba(0, 0, 0, 0.45);
        }

        .teacher-description {
          opacity: 0;
          max-height: 0;
          overflow: hidden;
          transform: translateY(10px);
          transition: opacity 0.28s ease, transform 0.28s ease, max-height 0.28s ease;
          pointer-events: none;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .teacher-card:hover .teacher-description,
        .teacher-card:focus-visible .teacher-description,
        .teacher-card.is-active .teacher-description {
          opacity: 1;
          max-height: 18rem;
          transform: translateY(0);
        }

        .teacher-description p {
          margin: 0;
          color: rgba(255, 255, 255, 0.95);
          line-height: 1.45;
          font-size: 0.76rem;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
        }

        .teacher-nip {
          color: #BFE5FB;
          font-size: 0.7rem;
          font-weight: 750;
          letter-spacing: 0.02em;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
        }

        /* -------------------------------------------------------------
           RESPONSIVE DESIGN (Desktop, Tablet, Mobile)
        ------------------------------------------------------------- */
        @media (max-width: 1040px) {
          .org-tu-grid,
          .org-teachers-grid,
          .org-staff-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 1.1rem;
          }
        }

        @media (max-width: 800px) {
          .org-tu-grid,
          .org-teachers-grid,
          .org-staff-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            max-width: 540px;
          }

          .teacher-doodle-3,
          .teacher-doodle-4,
          .teacher-doodle-7,
          .teacher-doodle-8 {
            display: none;
          }
        }

        @media (max-width: 580px) {
          .teacher-main-title {
            font-size: 2.2rem;
          }

          .teacher-cloud {
            width: 3.8rem;
            height: 2.5rem;
            opacity: 0.5;
          }

          .teacher-cloud-three,
          .teacher-cloud-four,
          .teacher-doodle {
            display: none;
          }

          .org-tu-grid,
          .org-teachers-grid,
          .org-staff-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 0.85rem;
          }

          .teacher-card {
            border-radius: 1.25rem;
          }

          .teacher-image-wrap {
            border-radius: 1.2rem;
          }

          .teacher-text {
            left: 0.75rem;
            right: 0.75rem;
            bottom: 0.75rem;
          }

          .teacher-info h3 {
            font-size: 0.9rem;
          }

          .teacher-role-badge {
            font-size: 0.65rem;
          }
        }

        @media (max-width: 380px) {
          .org-tu-grid,
          .org-teachers-grid,
          .org-staff-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .teacher-cloud,
          .teacher-doodle {
            animation: none;
            transform: none;
            will-change: auto;
          }
        }
      `}</style>
    </section>
  );
}
