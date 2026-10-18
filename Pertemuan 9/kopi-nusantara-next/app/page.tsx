"use client";

import { useState } from "react";
import styles from "./page.module.css";

const menuItems = [
  {
    name: "Kopi Susu Nusantara",
    category: "SIGNATURE COFFEE",
    description: "Perpaduan espresso, susu creamy, dan gula aren.",
    price: "Rp 22.000",
    emoji: "☕",
    color: "coffee",
  },
  {
    name: "Caramel Latte",
    category: "COFFEE",
    description: "Espresso dengan susu lembut dan sentuhan karamel.",
    price: "Rp 25.000",
    emoji: "🥤",
    color: "caramel",
  },
  {
    name: "Matcha Latte",
    category: "NON COFFEE",
    description: "Matcha pilihan dengan susu yang lembut dan creamy.",
    price: "Rp 24.000",
    emoji: "🍵",
    color: "matcha",
  },
];

const journeyItems = [
  {
    number: "01",
    title: "Biji Kopi Pilihan",
    description:
      "Kami memilih biji kopi berkualitas dari berbagai daerah di Indonesia.",
    emoji: "🌱",
  },
  {
    number: "02",
    title: "Diracik dengan Hati",
    description:
      "Setiap cangkir dibuat dengan perhatian pada rasa, aroma, dan kualitas.",
    emoji: "☕",
  },
  {
    number: "03",
    title: "Sajian untukmu",
    description:
      "Secangkir kopi yang menemani cerita, pekerjaan, dan waktu bersantai.",
    emoji: "🤎",
  },
];

const faqItems = [
  {
    question: "Apa itu Kopi Nusantara?",
    answer:
      "Kopi Nusantara merupakan konsep kedai kopi yang mengangkat cita rasa kopi dan kekayaan biji kopi Indonesia.",
  },
  {
    question: "Apakah tersedia minuman non-kopi?",
    answer:
      "Ya! Ada pilihan minuman non-kopi seperti Matcha Latte untuk kamu yang ingin menikmati minuman selain kopi.",
  },
  {
    question: "Bagaimana cara memesan?",
    answer:
      "Pilih minuman favoritmu dari daftar menu, kemudian hubungi kami melalui bagian pemesanan untuk informasi lebih lanjut.",
  },
  {
    question: "Apa yang membuat kopi Indonesia istimewa?",
    answer:
      "Setiap daerah memiliki karakter biji kopi, aroma, dan cita rasa yang berbeda sehingga menghadirkan pengalaman yang beragam.",
  },
];

export default function Home() {
  const [likedItems, setLikedItems] = useState<string[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleLike(name: string) {
    setLikedItems((current) =>
      current.includes(name)
        ? current.filter((item) => item !== name)
        : [...current, name]
    );
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <main className={styles.main}>
      <div className={styles.studentBar}>
        <span>Georgina Gabriella</span>
        <span>NIM: 535250014</span>
      </div>

      <header className={styles.header}>
        <a href="#home" className={styles.logo} onClick={closeMenu}>
          <span className={styles.logoIcon}>☕</span>
          <span className={styles.logoText}>
            KOPI <strong>NUSANTARA</strong>
          </span>
        </a>

        <button
          type="button"
          className={styles.menuToggle}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Buka atau tutup navigasi"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav
          className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}
        >
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#menu" onClick={closeMenu}>Menu</a>
          <a href="#cerita" onClick={closeMenu}>Cerita Kami</a>
          <a href="#perjalanan" onClick={closeMenu}>Perjalanan</a>
          <a href="#faq" onClick={closeMenu}>FAQ</a>
          <a
            href="#pesan"
            className={styles.navButton}
            onClick={closeMenu}
          >
            Pesan Sekarang <span>↗</span>
          </a>
        </nav>
      </header>

      <section id="home" className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>
            DARI BIJI PILIHAN, UNTUK CERITA KITA
          </span>

          <h1>
            Secangkir Kopi,
            <br />
            <span>Sejuta Cerita.</span>
          </h1>

          <p className={styles.heroDescription}>
            Merayakan kekayaan kopi Indonesia dalam setiap tegukan.
            Temukan rasa, aroma, dan cerita yang membuat setiap cangkir
            terasa istimewa.
          </p>

          <div className={styles.heroActions}>
            <a href="#menu" className={styles.primaryButton}>
              Jelajahi Menu <span>→</span>
            </a>
            <a href="#cerita" className={styles.secondaryButton}>
              Cerita Kami
            </a>
          </div>

          <div className={styles.heroStats}>
            <div>
              <strong>100%</strong>
              <span>Cita Rasa Lokal</span>
            </div>
            <div>
              <strong>Fresh</strong>
              <span>Diracik Setiap Hari</span>
            </div>
            <div>
              <strong>Made with</strong>
              <span>Love & Passion</span>
            </div>
          </div>
        </div>

        <div className={styles.heroVisual}>  
<div
  className={`${styles.decorCircle} ${styles.decorCircleOne}`}
/>
<div
  className={`${styles.decorCircle} ${styles.decorCircleTwo}`}
/>
          <div className={styles.coffeeArtwork}>
            <div className={styles.artworkTop}>EST. INDONESIA</div>
            <div className={styles.artworkCup}>☕</div>
            <div className={styles.artworkTitle}>Kopi Nusantara</div>
            <div className={styles.artworkBottom}>
              GOOD COFFEE, GOOD STORIES
            </div>
          </div>

          <div className={styles.floatingNote}>
            <span>✦</span>
            Dari Indonesia, dengan cinta.
          </div>
        </div>
      </section>

      <section className={styles.introStrip}>
        <span>AROMA YANG MEMANGGIL</span>
        <span className={styles.stripStar}>✦</span>
        <span>RASA YANG MENYATUKAN</span>
        <span className={styles.stripStar}>✦</span>
        <span>CERITA YANG TAK TERLUPAKAN</span>
      </section>

      <section id="menu" className={styles.menuSection}>
        <div className={styles.sectionHeading}>
          <span className={styles.eyebrow}>PILIHAN FAVORIT</span>
          <h2>
            Temukan <em>Favoritmu</em>
          </h2>
          <p>
            Setiap minuman punya karakter. Pilih teman terbaik untuk
            menemani harimu.
          </p>
        </div>

        <div className={styles.menuGrid}>
          {menuItems.map((item) => {
            const isLiked = likedItems.includes(item.name);

            return (
              <article className={styles.menuCard} key={item.name}>
                <div
                  className={`${styles.menuImage} ${
                    styles[item.color]
                  }`}
                >
                  <span className={styles.menuEmoji}>{item.emoji}</span>
                  <span className={styles.menuBadge}>
                    {item.category}
                  </span>
                  <span className={styles.imageDecoration}>✦</span>
                </div>

                <div className={styles.menuDetails}>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>

                  <div className={styles.menuBottom}>
                    <strong>{item.price}</strong>

                    <button
                      type="button"
                      className={`${styles.likeButton} ${
                        isLiked ? styles.liked : ""
                      }`}
                      onClick={() => toggleLike(item.name)}
                      aria-label={
                        isLiked
                          ? `Hapus ${item.name} dari favorit`
                          : `Tambahkan ${item.name} ke favorit`
                      }
                    >
                      <span>{isLiked ? "♥" : "♡"}</span>
                      {isLiked ? "Favorit" : "Suka"}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className={styles.menuFooter}>
          <p>
            {likedItems.length > 0
              ? `${likedItems.length} menu tersimpan sebagai favoritmu.`
              : "Punya minuman favorit? Tekan tombol suka untuk menandainya."}
          </p>
          <a href="#pesan" className={styles.textLink}>
            Cara pemesanan <span>→</span>
          </a>
        </div>
      </section>

      <section id="cerita" className={styles.storySection}>
        <div className={styles.storyVisual}>
          <div className={styles.storyBackdrop} />
          <div className={styles.storyCard}>
            <span className={styles.storyDecoration}>❧</span>
            <span className={styles.storySmall}>OUR PHILOSOPHY</span>
            <h2>
              Bukan sekadar kopi,
              <br />
              tapi sebuah <em>cerita.</em>
            </h2>
            <div className={styles.storyDivider} />
            <p>Diracik dengan hati, dinikmati sepenuh rasa.</p>
          </div>
        </div>

        <div className={styles.storyContent}>
          <span className={styles.eyebrow}>
            CERITA DI BALIK CANGKIR
          </span>
          <h2>
            Menghadirkan
            <br />
            <em>Hangatnya Indonesia</em>
          </h2>

          <p>
            Indonesia memiliki kekayaan kopi dengan karakter dan cerita
            yang berbeda dari setiap daerah. Dari aroma yang khas hingga
            cita rasa yang beragam, semuanya menjadi bagian dari
            keistimewaan kopi Nusantara.
          </p>

          <p>
            Kopi Nusantara hadir sebagai bentuk apresiasi terhadap
            kekayaan tersebut. Kami percaya bahwa kopi bukan hanya
            minuman, tetapi juga cara sederhana untuk berbagi cerita dan
            menciptakan momen.
          </p>

          <a href="#perjalanan" className={styles.primaryButton}>
            Kenali Perjalanan Kami <span>→</span>
          </a>
        </div>
      </section>

      <section id="perjalanan" className={styles.journeySection}>
        <div className={styles.sectionHeading}>
          <span className={styles.eyebrow}>
            DARI AWAL HINGGA KE CANGKIR
          </span>
          <h2>
            Perjalanan <em>Secangkir Kopi</em>
          </h2>
          <p>
            Ada proses dan perhatian di balik setiap sajian yang kami
            hadirkan.
          </p>
        </div>

        <div className={styles.journeyGrid}>
          {journeyItems.map((item) => (
            <article className={styles.journeyCard} key={item.number}>
              <div className={styles.journeyTop}>
                <span className={styles.journeyNumber}>
                  {item.number}
                </span>
                <span className={styles.journeyIcon}>
                  {item.emoji}
                </span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="faq" className={styles.faqSection}>
        <div className={styles.faqIntro}>
          <span className={styles.eyebrow}>
            ADA YANG INGIN DITANYAKAN?
          </span>
          <h2>
            Pertanyaan <em>Umum</em>
          </h2>
          <p>
            Temukan jawaban dari beberapa pertanyaan yang sering
            ditanyakan.
          </p>
          <span className={styles.faqDecoration}>☕</span>
        </div>

        <div className={styles.faqList}>
          {faqItems.map((item) => (
            <details className={styles.faqItem} key={item.question}>
              <summary>
                {item.question}
                <span className={styles.faqPlus}>+</span>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="pesan" className={styles.orderSection}>
        <div className={styles.orderContent}>
          <span className={styles.eyebrow}>
            WAKTUNYA MENIKMATI KOPI
          </span>
          <h2>
            Cerita baik dimulai
            <br />
            dari secangkir <em>kopi.</em>
          </h2>
          <p>
            Temukan pilihan minuman favoritmu dan jadikan hari ini lebih
            istimewa bersama Kopi Nusantara.
          </p>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            className={styles.orderButton}
          >
            Hubungi untuk Pemesanan <span>↗</span>
          </a>
          <small>
            Tautan WhatsApp dapat disesuaikan dengan nomor pemesanan.
          </small>
        </div>

        <div className={styles.orderDecoration}>
          <div className={styles.orderRing}>
            <span>☕</span>
          </div>
          <span className={styles.orderStar}>✦</span>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerMain}>
          <div className={styles.footerBrand}>
            <a href="#home" className={styles.logo}>
              <span className={styles.logoIcon}>☕</span>
              <span className={styles.logoText}>
                KOPI <strong>NUSANTARA</strong>
              </span>
            </a>
            <p>
              Merayakan rasa lokal dan cerita yang tumbuh dalam setiap
              cangkir.
            </p>
          </div>

          <div className={styles.footerLinks}>
            <strong>Jelajahi</strong>
            <a href="#home">Home</a>
            <a href="#menu">Menu</a>
            <a href="#cerita">Cerita Kami</a>
          </div>

          <div className={styles.footerLinks}>
            <strong>Informasi</strong>
            <a href="#perjalanan">Perjalanan</a>
            <a href="#faq">FAQ</a>
            <a href="#pesan">Pemesanan</a>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <span>© 2026 Kopi Nusantara</span>
          <span>Dibuat dengan ♥ dan semangat Indonesia.</span>
        </div>
      </footer>
    </main>
  );
}
