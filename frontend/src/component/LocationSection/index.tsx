import React from "react";
import { MapPin, Clock, Navigation } from "lucide-react";
import styles from "./LocationSection.module.scss";

const LocationSection = () => {
  return (
    <section id="location" className={styles.location}>
      <div className={styles.location__container}>
        {/* Title */}
        <div className={styles.location__header}>
          <h3 className={styles.location__title}>Our Location</h3>
          <p className={styles.location__subtitle}>
            Visit our modern workshop or call us for on-site service across Gujarat & nearby states.
          </p>
        </div>

        {/* Grid Layout */}
        <div className={styles.location__grid}>
          {/* Map Section */}
          <div className={styles.location__map}>
            <iframe
              src="https://www.google.com/maps?q=23.805773,72.379625&hl=en&z=15&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Workshop Location"
            />
            <div className={styles.location__map_overlay}></div>
            <div className={styles.location__map_caption}>
              <h4 className={styles.location__map_title}>Mamta Engineering Works</h4>
              <p className={styles.location__map_subtitle}>
                Near Bus Station, Highway Road, Unjha, Gujarat
              </p>
            </div>
            <div className={styles.location__map_pin}>
              <MapPin />
            </div>
          </div>

          {/* Info Cards */}
          <div className={styles.location__info}>
            <div className={styles.location__info_grid}>
              {/* Address */}
              <div className={styles.location__info_card}>
                <h4 className={styles.location__info_title}>
                  <MapPin className={styles.location__info_icon} />
                  Workshop Address
                </h4>
                <p className={styles.location__info_text}>Mamta Engineering Works</p>
                <p className={styles.location__info_text}>Near Bus Station, Highway Road</p>
                <p className={styles.location__info_text}>Unjha, Gujarat 384170</p>
              </div>

              {/* Working Hours */}
              <div className={styles.location__info_card}>
                <h4 className={styles.location__info_title}>
                  <Clock className={styles.location__info_icon} />
                  Working Hours
                </h4>
                <p className={styles.location__info_text}>
                  <span className="font-semibold">Mon - Sat:</span> 8:00 AM - 8:00 PM
                </p>
                <p className={styles.location__info_text}>
                  <span className="font-semibold">Sunday:</span> 9:00 AM - 5:00 PM
                </p>
                <p className={`${styles.location__info_text} text-red-600 font-semibold`}>
                  Emergency On-Call: 24/7
                </p>
              </div>

              {/* Service Areas */}
              <div className={styles.location__info_card}>
                <h4 className={styles.location__info_title}>
                  <Navigation className={styles.location__info_icon} />
                  Service Areas
                </h4>
                <div className={styles.location__info_grid_2}>
                  <p>• Ahmedabad</p>
                  <p>• Mehsana</p>
                  <p>• Rajkot</p>
                  <p>• Pune (On-call)</p>
                  <p>• Jaipur (On-call)</p>
                  <p>• Haryana (On-call)</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              className={styles.location__info_btn}
              onClick={() =>
                window.open("https://www.google.com/maps?q=23.805773,72.379625", "_blank")
              }
            >
              <Navigation /> Get Directions
            </button>
          </div>
        </div>

        {/* Interactive Map */}
        <div className={styles.location__map_interactive}>
          <h4 className={styles.location__map_interactive_title}>Interactive Workshop Map</h4>
          <p className={styles.location__map_interactive_subtitle}>
            Click the button below to open detailed location & directions.
          </p>
          <div className={styles.location__map_interactive_box}>
            <div className={styles.location__map_interactive_pin}>
              <MapPin />
            </div>
            <h5 className={styles.location__map_interactive_title}>Mamta Engineering Works</h5>
            <p className={styles.location__map_interactive_desc}>
              Near Bus Station, Highway Road, Unjha
            </p>
            <button
              className={styles.location__map_interactive_btn}
              onClick={() =>
                window.open("https://www.google.com/maps?q=23.805773,72.379625", "_blank")
              }
            >
              Open in Maps
            </button>
            {/* Decorative Bubbles */}
            <div className={`${styles.location__map_decorative} ${styles["location__map_decorative--1"]}`}></div>
            <div className={`${styles.location__map_decorative} ${styles["location__map_decorative--2"]}`}></div>
            <div className={`${styles.location__map_decorative} ${styles["location__map_decorative--3"]}`}></div>
            <div className={`${styles.location__map_decorative} ${styles["location__map_decorative--4"]}`}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
