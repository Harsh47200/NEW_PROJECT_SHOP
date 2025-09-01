import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Phone } from "lucide-react";
import { FaWhatsappSquare } from "react-icons/fa";
import scss from "./HeroSection.module.scss";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Expert JCB Maintenance Services",
      subtitle: "Professional repair and maintenance for all JCB models",
      description: [
        "Complete hydraulic system repair, engine overhaul, and genuine parts replacement.",
        "Advanced diagnostic tools used to identify and solve engine issues.",
        "Engine service includes draining old oil, replacing with new oil, and changing filters.",
        "We stock multiple filters: engine oil, diesel, stainer, hydraulic oil, and transmission filters.",
        "Available oils: hydraulic oil, transmission oil, excel oil.",
        "We handle oil changes for transmission, differential, hydraulic, and engine oil systems."
      ],
      image: "../images/slider2.webp",
      bgColor: "from-yellow-500 to-orange-600",
    },
    {
      title: "Hitachi Equipment Specialists",
      subtitle: "Authorized service center for Hitachi machinery",
      description: [
        "Expert diagnostics, component replacement, and performance optimization."
      ],
      image: "../images/slider1.jpg",
      bgColor: "from-blue-500 to-blue-700",
    },
    {
      title: "Hydraulic Pump & Seal Repair",
      subtitle: "Precision hydraulic system solutions",
      description: [
        "Complete pump rebuilding, seal replacement, and system testing."
      ],
      image: "../images/Hydraulicpump.webp",
      bgColor: "from-green-500 to-teal-600",
    },
    {
      title: "Professional Welding Works",
      subtitle: "All types of welding including hardbasing design",
      description: [
        "Structural welding, component repair, and custom fabrication."
      ],
      image: "../images/slider3.jpg",
      bgColor: "from-red-200 to-pink-200",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const whatsappNumber = "919913972701";
  const emergencyNumber = "9913972701";

  return (
    <section id="home" className={scss.hero}>
      <div className={scss.hero__container}>
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`${scss.hero__slide} ${
              index === currentSlide
                ? scss.hero__slide__active
                : index < currentSlide
                ? scss.hero__slide__prev
                : scss.hero__slide__next
            }`}
          >
            <div
              className={`${scss.hero__background} bg-gradient-to-br ${slide.bgColor}`}
            >
              <div className={scss.hero__overlay}></div>
              <div
                className={scss.hero__image}
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              ></div>
              <div className={scss.hero__content}>
                <div className={scss.hero__text}>
                  <h2 className={scss.hero__title}>{slide.title}</h2>
                  <p className={scss.hero__subtitle}>{slide.subtitle}</p>

                  {/* Description List */}
                  <ul className={scss.hero__description}>
                    {Array.isArray(slide.description)
                      ? slide.description.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))
                      : <p>{slide.description}</p>}
                  </ul>

                  <div className={scss.hero__buttons}>
                    {/* WhatsApp Button */}
                    <button
                      onClick={() =>
                        window.open(
                          `https://wa.me/${whatsappNumber}?text=Hello, I need service help!`,
                          "_blank"
                        )
                      }
                      className={`${scss.hero__btn} ${scss.hero__btn__primary} flex items-center gap-2`}
                    >
                      <FaWhatsappSquare className="text-green-500 w-5 h-5" />
                      WhatsApp
                    </button>

                    {/* Call Button */}
                    <button
                      onClick={() =>
                        (window.location.href = `tel:${emergencyNumber}`)
                      }
                      className={`${scss.hero__btn} ${scss.hero__btn__secondary} flex items-center gap-2`}
                    >
                      <Phone className="w-5 h-5 text-red-500" />
                      Call for Emergency
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className={`${scss.hero__nav} ${scss.hero__nav__prev}`}
      >
        <ChevronLeft className={scss.hero__nav_icon} />
      </button>
      <button
        onClick={nextSlide}
        className={`${scss.hero__nav} ${scss.hero__nav__next}`}
      >
        <ChevronRight className={scss.hero__nav_icon} />
      </button>

      {/* Slide Indicators */}
      <div className={scss.hero__indicators}>
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`${scss.hero__indicator} ${
              index === currentSlide ? scss.hero__indicator__active : ""
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
