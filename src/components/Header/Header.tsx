import { Github, Linkedin, Mail } from 'lucide-react';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <div className={styles.brand}>
            <div className={styles.logo}>Andrew Krupin</div>
            <div className={styles.tag}>Frontend Developer · React · TypeScript</div>
          </div>

          <nav className={styles.links}>
            <a href="https://github.com/ad-13" target="_blank" rel="noreferrer">
              <Github size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/andrew-krupin-9a25238a"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={16} />
            </a>
            <a href="mailto:ad13.other@gmail.com">
              <Mail size={16} />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
