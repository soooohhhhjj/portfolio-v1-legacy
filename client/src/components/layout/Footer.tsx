import { Link } from "react-router-dom";
import { FOOTER_LINKS, FOOTER_META, FOOTER_SOCIALS } from "./footerData";
import { footerStyles } from "./footerStyles";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <section className={footerStyles.section}>
      <div className={footerStyles.content}>
        <div className={footerStyles.wrapper}>
          <footer className={footerStyles.card}>
            <div className={footerStyles.layout}>
              <div className={footerStyles.brand}>
                <span className={footerStyles.name}>{FOOTER_META.name}</span>
                <span className={footerStyles.role}>{FOOTER_META.role}</span>
                <p className={footerStyles.tagline}>{FOOTER_META.tagline}</p>
              </div>

              <div className={footerStyles.columns}>
                <div>
                  <p className={footerStyles.columnTitle}>Explore</p>
                  <div className={footerStyles.linkList}>
                    {FOOTER_LINKS.map((link) => (
                      <Link key={link.label} className={footerStyles.link} to={link.to}>
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <p className={footerStyles.columnTitle}>Connect</p>
                  <div className={footerStyles.socialList}>
                    {FOOTER_SOCIALS.map(({ label, href, Icon }) => (
                      <a
                        key={label}
                        className={footerStyles.socialLink}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Icon className={footerStyles.socialIcon} />
                        <span>{label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className={footerStyles.divider} />

            <div className={footerStyles.bottomRow}>
              <span>(c) {year} {FOOTER_META.name}. All rights reserved.</span>
              <span>Designed and built with React + Tailwind.</span>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}
