import { useState, useEffect } from 'react';
import { Link } from 'react-router';

const galeri = [
  {
    id: 1,
    src: '/Galeri1.png',
    alt: 'Poster Elbima sebagai Kadiv PDD, Mumas Kemakom 2026',
    caption: 'Kadiv PDD, Mumas Kemakom 2026',
  },
  {
    id: 2,
    src: '/Galeri2.png',
    alt: 'Poster Elbima sebagai Anggota Badan Aspirasi',
    caption: 'Anggota Badan Aspirasi',
  },
];

const Home = () => {
  const [terpilih, setTerpilih] = useState(null);

  // Tutup lightbox dengan tombol Escape
  useEffect(() => {
    if (!terpilih) return;
    const onKey = (e) => e.key === 'Escape' && setTerpilih(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [terpilih]);

  return (
    <div className="container page">
      <section className="hero">
        <img className="hero-photo" src="/bimaa.jpg" alt="Foto Elbima" />

        <div className="hero-text">
          <h1>Hajimemaste, watashi namaewa Elbima Dwiputra Hardy</h1>
          <p className="hero-role">Mahasiswa Pendidikan Ilmu Komputer</p>
          <p className="hero-sub">
            Suka mengulik data science, teknologi, dan komunikasi. Semester 3
            di Universitas Pendidikan Indonesia.
          </p>
          <div className="btn-row">
            <a href="#galeri" className="btn btn-primary">
              Lihat galeri
            </a>
            <Link to="/kontak" className="btn btn-ghost">
              Hubungi saya
            </Link>
          </div>
        </div>
      </section>

      <section className="gallery-section" id="galeri">
        <h2>Galeri</h2>
        <p>Beberapa kegiatan organisasi. Klik gambar untuk memperbesar.</p>
        <div className="gallery">
          {galeri.map((item) => (
            <figure className="gallery-item" key={item.id}>
              <button
                type="button"
                className="gallery-btn"
                onClick={() => setTerpilih(item)}
                aria-label={`Perbesar: ${item.caption}`}
              >
                <img src={item.src} alt={item.alt} />
              </button>
              <figcaption>{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {terpilih && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={terpilih.caption}
          onClick={() => setTerpilih(null)}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setTerpilih(null)}
            aria-label="Tutup"
          >
            ×
          </button>
          <img src={terpilih.src} alt={terpilih.alt} />
          <p>{terpilih.caption}</p>
        </div>
      )}
    </div>
  );
};

export default Home;