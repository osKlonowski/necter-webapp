import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.footerWrap}>
          <div className={styles.footerLinksContainer}>
            <div className={styles.footerLinksWrapper}>
              <div className={styles.footerLinkItems}>
                <h1 className={styles.footerLinkTitle}>NECTER</h1>
                <a className={styles.footerLink}>Contact</a>
                <a className={styles.footerLink}>Imprint</a>
                <a className={styles.footerLink}>Download</a>
              </div>
            </div>
            <div className={styles.footerLinksWrapper}>
              <div className={styles.footerLinkItems}>
                <h1 className={styles.footerLinkTitle}>NECTER</h1>
                <a className={styles.footerLink}>Contact</a>
                <a className={styles.footerLink}>Imprint</a>
                <a className={styles.footerLink}>Download</a>
              </div>
            </div>
            <div className={styles.footerLinksWrapper}>
              <div className={styles.footerLinkItems}>
                <h1 className={styles.footerLinkTitle}>NECTER</h1>
                <a className={styles.footerLink}>Contact</a>
                <a className={styles.footerLink}>Imprint</a>
                <a className={styles.footerLink}>Download</a>
              </div>
            </div>
          </div>
          <div className={styles.socialMedia}>
            <div className={styles.socialMediaWrap}>
              <a className={styles.socialLogo}>NECTER</a>
              <p className={styles.websiteRights}>
                © Copyright TUNED BKT UG (haftungsbeschränkt) {"2019-"}
                {new Date().getFullYear()} - All Rights Reserved
              </p>
              <div className={styles.socialIcons}>
                <div className={styles.socialIconLink}>Facebook</div>
                <div className={styles.socialIconLink}>Instagram</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
