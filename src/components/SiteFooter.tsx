import styles from './SiteFooter.module.css';

const footerLinks = [
  { label: 'github', href: 'https://github.com/mahimailabs/voicegateway' },
  { label: 'linkedin', href: 'https://www.linkedin.com/in/mahimairaja/' },
  { label: 'changelog', href: '/docs/changelog' },
];

export default function SiteFooter() {
  return (
    <footer className={styles.vgFooter}>
      <div className={styles.vgFooterInner}>
        <span className="tiny-mono">© 2026 Mahimai AI · Sarnia, Ontario, Canada</span>

        <nav className={styles.vgFooterNav} aria-label="Footer">
          {footerLinks.map((item, i) => (
            <span key={item.label}>
              <a href={item.href}>{item.label}</a>
              {i < footerLinks.length - 1 ? (
                <span className={styles.vgSep} aria-hidden="true">·</span>
              ) : null}
            </span>
          ))}
        </nav>

        <span className={styles.vgFooterStatus} aria-label="System status">
          <span className={styles.vgDot} aria-hidden="true" />
          <span className="tiny-mono">STATUS: OPERATIONAL · VERSION: 0.1.1</span>
        </span>
      </div>
    </footer>
  );
}
