const skill = ['Komunikasi', 'Teknologi', 'Data science'];

const organisasi = [
  { id: 1, peran: 'Kepala Divisi PDD', tempat: 'Mumas Kemakom 2026' },
  { id: 2, peran: 'Anggota Badan Aspirasi', tempat: 'Kemakom' },
];

const About = () => {
  return (
    <div className="container page">
      <h2>Tentang Saya</h2>

      <div className="about-grid">
        <div>
          <p>
            Saya merupakan Mahasiswa Pendidikan Ilmu Komputer Angkatan 2025
            yang saat ini sedang menempuh semester 3 di Universitas Pendidikan
            Indonesia, memiliki skill dalam bidang Komunikasi dan Teknologi,
            dan suka mengulik hal-hal yang berhubungan dengan data science.
          </p>

          <h3>Keahlian</h3>
          <ul className="chips">
            {skill.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Pendidikan</h3>
          <ul className="facts">
            <li>
              <strong>Pendidikan Ilmu Komputer</strong>
              <span>Universitas Pendidikan Indonesia, angkatan 2025</span>
            </li>
          </ul>

          <h3>Organisasi</h3>
          <ul className="facts">
            {organisasi.map((o) => (
              <li key={o.id}>
                <strong>{o.peran}</strong>
                <span>{o.tempat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;