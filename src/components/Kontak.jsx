const iconProps = {
  className: 'kontak-icon',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

const IconMail = () => (
  <svg {...iconProps}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

const IconPin = () => (
  <svg {...iconProps}>
    <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

const IconInstagram = () => (
  <svg {...iconProps}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
  </svg>
);

const IconYouTube = () => (
  <svg {...iconProps}>
    <rect x="2" y="5" width="20" height="14" rx="4" />
    <path d="M10 9l5 3-5 3z" fill="currentColor" />
  </svg>
);

const IconWhatsApp = () => (
  <svg {...iconProps}>
    <path d="M3 21l1.6-4.7A8.5 8.5 0 1 1 8 19.5L3 21z" />
    <path d="M9 9.5c.5 2.5 2.5 4.5 5 5l1.2-1.2-1.8-1-.8.7a4 4 0 0 1-1.8-1.8l.7-.8-1-1.8L9 9.5z" />
  </svg>
);

const sosial = [
  {
    id: 1,
    nama: 'Instagram',
    detail: '@hardybimaa',
    url: 'https://www.instagram.com/hardybimaa/',
    Icon: IconInstagram,
  },
  {
    id: 2,
    nama: 'YouTube',
    detail: '@ElbimaHardy',
    url: 'https://www.youtube.com/@ElbimaHardy',
    Icon: IconYouTube,
  },
  {
    id: 3,
    nama: 'WhatsApp',
    detail: 'Kirim pesan langsung',
    url: 'https://wa.me/+6285163173275',
    Icon: IconWhatsApp,
  },
];

const Kontak = () => {
  return (
    <div className="container page">
      <div className="kontak-grid">
        <div>
          <h2>Kontak</h2>
          <p>
            Untuk kolaborasi atau sekadar bertanya, hubungi saya lewat email
            atau media sosial di samping.
          </p>
          <div className="btn-row">
            <a
              className="btn btn-primary"
              href="mailto:elbimadwiputra@student.upi.edu"
            >
              Kirim email
            </a>
          </div>
        </div>

        <ul className="kontak-list">
          <li>
            <a
              className="kontak-row"
              href="mailto:elbimadwiputra@student.upi.edu"
            >
              <IconMail />
              <div>
                <strong>Email</strong>
                <span>elbimadwiputra@student.upi.edu</span>
              </div>
            </a>
          </li>
          <li>
            <div className="kontak-row">
              <IconPin />
              <div>
                <strong>Lokasi</strong>
                <span>Universitas Pendidikan Indonesia, Bandung</span>
              </div>
            </div>
          </li>
          {sosial.map(({ id, nama, detail, url, Icon }) => (
            <li key={id}>
              <a
                className="kontak-row"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon />
                <div>
                  <strong>{nama}</strong>
                  <span>{detail}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <section className="peta">
        <iframe
          title="Peta Universitas Pendidikan Indonesia"
          src="https://www.google.com/maps?q=Universitas+Pendidikan+Indonesia,+Bandung&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <a
          className="btn btn-ghost"
          href="https://www.google.com/maps/search/?api=1&query=Universitas+Pendidikan+Indonesia+Bandung"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buka di Google Maps
        </a>
      </section>
    </div>
  );
};

export default Kontak;