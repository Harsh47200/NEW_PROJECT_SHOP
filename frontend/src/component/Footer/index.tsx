import React from "react";
import scss from "./Footer.module.scss";
import { GiGearHammer } from "react-icons/gi"; // engineering gear + hammer icon

const Footer = () => {
  return (
    <footer className={scss.footer}>
      <div className={scss.footer__container}>
        <div className={scss.footer__content}>
          {/* Logo + Brand */}
          <div className={scss.footer__brand}>
            <div className={scss.footer__logo}>
              <GiGearHammer className={scss.footer__logo_icon} />
            </div>
            <span className={scss.footer__text}>
              Mamta<span>Engineering</span> Works
            </span>
          </div>

          {/* Copyright */}
          <div className={scss.footer__copyright}>
            © 2025 Mamta Engineering Works. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
