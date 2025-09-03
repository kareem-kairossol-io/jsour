"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules"
import { ChevronRight, ChevronLeft } from "lucide-react"
import "./home-slider.css"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-fade"
import { Link } from "react-router-dom"
import DOMPurify from "dompurify"

const heroSlides = [
  {
    id: 1,
    title: "We build trust to <br> secure your future",
    subtitle: "Protect Your Property",
    description:
      "Your partner at every step toward security.",
    link: "/Fire-Insurance",
    image: "/static/media/Fire.11f6d127168196b63258.jpg",
    buttonText: "Get Quote",
    bgGradient: "linear-gradient(to right, rgba(127, 29, 29, 0.7), rgba(154, 52, 18, 0.7))",
  },
  {
    id: 2,
    title: "Shield of Trust",
    subtitle: "Secure Your Shipments",
    description: "Protecting your business with trust and expertise.",
    link: "/Cargo-Insurance",
    image: "/static/media/Cargo.8f1444d61d2e0dddaa1e.jpg",
    buttonText: "Learn More",
    bgGradient: "linear-gradient(to right, rgba(30, 58, 138, 0.7), rgba(21, 94, 117, 0.7))",
  },
  {
    id: 3,
    title: "Smart Coverage. <br> Real Protection.",
    subtitle: "Your Health, Our Priority",
    description: "Innovative insurance solutions tailored to your needs.",
    link: "/Medical-Insurance",
    image: "/static/media/Medical.57319208baca9a050f1d.jpg",
    buttonText: "Explore Plans",
    bgGradient: "linear-gradient(to right, rgba(20, 83, 45, 0.7), rgba(6, 95, 70, 0.7))",
  },
  {
    id: 4,
    title: "Protecting <br> What Matters Most",
    subtitle: "Industrial Protection Solutions",
    description: "We are here for you, Your family And your business.",
    link: "/Engineering-Insurance",
    image: "/static/media/Engineering.8c69d4bf97e056e4c6c9.jpg",
    buttonText: "Get Coverage",
    bgGradient: "linear-gradient(to right, rgba(154, 52, 18, 0.7), rgba(146, 64, 14, 0.7))",
  },
  {
    id: 5,
    title: "Because Every Risk Deserves a Strategy",
    subtitle: "Secure Your Legacy",
    description: "Well-crafted plans to face every challenge.",
    link: "/Life-Insurance",
    image: "/static/media/life.b5ee892a115ab684eecd.jpg",
    buttonText: "Start Today",
    bgGradient: "linear-gradient(to right, rgba(88, 28, 135, 0.7), rgba(67, 56, 202, 0.7))",
  },
  {
    id: 6,
    title: "We Cover. You Prosper.",
    subtitle: "Drive with Confidence",
    description: "Your security is the path to your success.",
    link: "/Motor-Insurance",
    image: "/static/media/Motor.fd6751f9b9a42a9b9b67.jpg",
    buttonText: "Get Insured",
    bgGradient: "linear-gradient(to right, rgba(67, 56, 202, 0.7), rgba(37, 99, 235, 0.7))",
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
  },
}

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.4 },
  },
}

export default function HeroInsuranceSlider() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isInView, setIsInView] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      className="hero-section"
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        navigation={{
          prevEl: ".hero-swiper-button-prev",
          nextEl: ".hero-swiper-button-next",
        }}
        pagination={{
          clickable: true,
          bulletClass: "hero-swiper-pagination-bullet",
          bulletActiveClass: "hero-swiper-pagination-bullet-active",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper: any) => setActiveSlide(swiper.activeIndex)}
        className="hero-swiper"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="slide-container">
              {/* Background Image */}
              <div
                className="slide-background"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              />

              {/* Overlay */}
              <div className="slide-overlay" style={{ background: slide.bgGradient }} />

              {/* Content */}
              <div className="slide-content">
                <div className="container">
                  <div className="content-wrapper">
                    <motion.div
                      key={`slide-${index}`}
                      initial="hidden"
                      animate={activeSlide === index ? "visible" : "hidden"}
                      variants={slideInLeft}
                      className="text-content"
                    >
                      <motion.h1
                        variants={slideInLeft}
                        className="title"
                        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(slide.title) }}
                      />
                      {/* Description */}
                      <motion.p variants={slideInRight} className="description">
                        {slide.description}
                      </motion.p>

                      {/* Buttons */}
                      <motion.div variants={fadeInUp} className="button-group">
                        <Link to={slide.link} style={{ textDecoration: "none" }}>
                          <button className="primary-button">
                            {slide.buttonText}
                            <ChevronRight className="button-icon" />
                          </button>
                        </Link>
                        {/* <Link to={slide.link} style={{ textDecoration: "none" }}>
                        <button className="secondary-button">Learn More</button>
                        </Link> */}
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="bottom-gradient" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation */}
      <button className="hero-swiper-button-prev nav-button nav-button-prev">
        <ChevronLeft className="nav-icon" />
      </button>

      <button className="hero-swiper-button-next nav-button nav-button-next">
        <ChevronRight className="nav-icon" />
      </button>

      {/* Slide Counter */}
      <div className="slide-counter">
        <span className="current-slide">{String(activeSlide + 1).padStart(2, "0")}</span>
        <span className="separator">/</span>
        <span className="total-slides">{String(heroSlides.length).padStart(2, "0")}</span>
      </div>

      {/* Social Links */}
      <div className="social-links">
        <div className="social-line"></div>
        <a href="#" className="social-link">
          <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
          </svg>
        </a>
        <a href="#" className="social-link">
          <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      </div>
    </motion.section>
  )
}
