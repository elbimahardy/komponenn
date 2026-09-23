const Content = () => {
  const galeri = [
    { id: 1, src: "Galeri1.png", alt: "Galeri 1" },
    { id: 2, src: "Galeri2.png", alt: "Galeri 2" },
  ];

  return (
    <div className="isi">
      <img src="me-myself-and-i.jpg" alt="Foto Elbima" />
      
      <h1>Hajimemaste, watashi namaewa Elbima Dwiputra Hardy</h1>
      <p className="keterangan">Mahasiswa Pendidikan Ilmu Komputer</p>

      <h2 id="Tentang">Tentang Saya</h2>
      <p style={{ textAlign: "justify" }}>
        Saya merupakan Mahasiswa Pendidikan Ilmu Komputer Angkatan 2025
        yang saat ini sedang menempuh semester 3 di Universitas Pendidikan
        Indonesia, memiliki skill dalam bidang Komunikasi dan Teknologi,
        dan suka mengulik hal-hal yang berhubungan dengan data science.
      </p>

      <h2 id="Galeri">Galeri</h2>
      <div className="galeri">
        {galeri.map((item) => (
          <img key={item.id} src={item.src} alt={item.alt} />
        ))}
      </div>
    </div>
  );
};

export default Content;