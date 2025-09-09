"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import "./partener.css"

const partners = [
  { name: "Misr Inusrance", logo: "/Misr-insurance.png" },
  { name: "Misr Inusrance", logo: "/Misr-insurance.png" },
  { name: "Misr Inusrance", logo: "/Misr-insurance.png" },
  { name: "Misr Inusrance", logo: "/Misr-insurance.png" },
  { name: "Misr Inusrance", logo: "/Misr-insurance.png" },
  { name: "Misr Inusrance", logo: "/Misr-insurance.png" },
  { name: "Misr Inusrance", logo: "/Misr-insurance.png" },
  { name: "Misr Inusrance", logo: "/Misr-insurance.png" },
]

export default function PartnersSection() {
  return (
    <section className="partners-section">
      <div className="partners-container">
        <h2 className="partners-title">Our Partners</h2>

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
                slidesPerView: 5,
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
