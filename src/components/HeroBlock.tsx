import styles from './HeroBlock.module.css';

export default function HeroBlock() {
  return (
    <section className={styles.vgHero} aria-labelledby="vg-hero-h">
      <div className={styles.vgHeroInner}>
        <span className={`stamp ${styles.vgHeroStamp}`} aria-hidden="true">
          never locked in
        </span>

        <h1 id="vg-hero-h" className={`h-hand xxl ${styles.vgHeroTitle}`}>
          Voice agent infrastructure you actually own.
          <br />
          <u className={styles.vgHeroU}>
            Self-hosted, on your keys, every call accounted for.
          </u>
        </h1>

        <p className={`p-hand ${styles.vgHeroSub}`}>
          Drop one import to track cost per call, replay any conversation, and route per latency budget.
        </p>

        <div className={styles.vgHeroCtas}>
          <a className={`btn accent ${styles.vgHeroCtaPrimary}`} href="/docs/getting-started">
            Install in 60 seconds
          </a>
          <a className={`btn ${styles.vgHeroCtaGhost}`} href="/docs">
            Read the docs
          </a>
        </div>

        <div className={styles.vgHeroMeta}>
          <span className="tiny-mono">uv add voicegateway</span>
          <span className={styles.vgHeroMetaSep} aria-hidden="true">·</span>
          <span className="tiny-mono">MIT · open source · zero telemetry</span>
        </div>
      </div>
    </section>
  );
}
