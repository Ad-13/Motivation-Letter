import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Entwickelt mit ❤️</p>
      <div>Made by Andrew Krupin — Frontend Developer • Kleve, Germany</div>
      <div className={styles.small}>CV & motivation letter attached to email.</div>
    </footer>
  );
};

export default Footer;
