const Footer = () => {
  const kontak = [
    { id: 1, nama: "Instagram", url: "https://www.instagram.com/hardybimaa/" },
    { id: 2, nama: "YouTube", url: "https://www.youtube.com/@ElbimaHardy" },
    { id: 3, nama: "WhatsApp", url: "https://wa.me/+6285163173275" },
  ];

  return (
    <footer>
      <h2 id="Kontak">Kontak</h2>
      <hr />
      <div className="kontak">
        {kontak.map((item) => (
          <a key={item.id} href={item.url} target="_blank" rel="noopener noreferrer">
            <span>{item.nama}</span>
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;