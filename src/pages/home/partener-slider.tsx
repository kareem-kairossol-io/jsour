"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import "./partener.css"
import { t } from "i18next"
import { useTranslation } from "react-i18next"

const partners = Array.from({ length: 12 }, (_, i) => ({
  name: `Partner ${i + 1}`,
  logo: `/imgs/parteners/partener_${i + 1}.jpeg`,
}))

export default function PartnersSection() {
  const translate = useTranslation().t
  return (
    <section className="partners-section">
      <div className="partners-container">
        <h2 className="partners-title">{translate('ourPartenerTitle')}</h2>

        <div className="partners-slider">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={40}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 60,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 70,
              },
            }}
          >
            {partners.map((partner, index) => (
              <SwiperSlide key={index}>
                <div className="partner-slide">
                  <img src={partner.logo || "/placeholder.svg"} alt={`${partner.name} logo`} className="partner-logo" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
