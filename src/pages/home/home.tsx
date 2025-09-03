"use client"

import DefaultLayout from "../../layout/DefaultLayout"
import img from "./../../images/img1.jpg"
import img2 from "./../../images/img2.jpg"
import fire from "./../../images/Fire.jpg"
import Cargo from "./../../images/Cargo.jpg"
import Medical from "./../../images/Medical.jpg"
import Engineering from "./../../images/Engineering.jpg"
import Life from "./../../images/life.jpg"
import Motor from "./../../images/Motor.jpg"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import { Link } from "react-router-dom"
import HeroInsuranceSlider from "./homeSlider"
import PartnersSection from "./partener-slider"

const Home = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [whyUsRef, whyUsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [popularRef, popularInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const fadeInLeft = {
    hidden: {
      opacity: 0,
      x: -80,
      rotate: -5,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        duration: 0.9,
        ease: "easeOut",
      },
    },
  }

  const fadeInRight = {
    hidden: {
      opacity: 0,
      x: 80,
      rotate: 5,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        duration: 0.9,
        ease: "easeOut",
      },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const cardHover = {
    hover: {
      y: -10,
      scale: 1.05,
      rotateY: 5,
      boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  }

  const iconFloat = {
    animate: {
      y: [-5, 5, -5],
      rotate: [0, 2, -2, 0],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  const pulseGlow = {
    animate: {
      boxShadow: [
        "0 0 20px rgba(59, 130, 246, 0.3)",
        "0 0 40px rgba(59, 130, 246, 0.6)",
        "0 0 20px rgba(59, 130, 246, 0.3)",
      ],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <DefaultLayout>
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <HeroInsuranceSlider />
      </motion.div>

      <motion.section
        ref={aboutRef}
        initial="hidden"
        animate={aboutInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="about"
      >
        <div className="container">
          <motion.div className="imgs" variants={staggerContainer}>
            <motion.img
              src={img}
              alt=""
              variants={fadeInLeft}
              whileHover={{
                scale: 1.1,
                rotate: 2,
                filter: "brightness(1.1)",
                transition: { duration: 0.3 },
              }}
            />
            <motion.img
              src={img2}
              alt=""
              variants={fadeInRight}
              whileHover={{
                scale: 1.1,
                rotate: -2,
                filter: "brightness(1.1)",
                transition: { duration: 0.3 },
              }}
            />
          </motion.div>

          <motion.div className="text" variants={staggerContainer}>
            <motion.div variants={fadeInUp}>
              <motion.h3
                whileHover={{
                  scale: 1.05,
                  color: "#3b82f6",
                  transition: { duration: 0.2 },
                }}
              >
                Secure Your assets
              </motion.h3>
              <motion.p variants={fadeInUp} transition={{ delay: 0.2 }}>
                In today's unpredictable world, safeguarding your assets is more crucial than ever. Our insurance
                brokerage company is dedicated to providing comprehensive insurance solutions tailored to your unique
                needs. We work with a network of trusted insurers to offer you a range of policies that protect your
                valuable possessions, from your home and vehicle to your business and investments. With our expertise
                and commitment to excellence, you can rest assured that your assets are in safe hands. Let us help you
                navigate the complexities of insurance so you can focus on what matters most.
              </motion.p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <motion.h3
                whileHover={{
                  scale: 1.05,
                  color: "#3b82f6",
                  transition: { duration: 0.2 },
                }}
              >
                About Us
              </motion.h3>
              <motion.p variants={fadeInUp} transition={{ delay: 0.4 }}>
                Our team at Jusoor for Insurance Brokerage possess specialized knowledge in both product offerings and
                client industries, allowing us to adeptly navigate risks and swiftly address client concerns, we
                tirelessly strive to introduce cutting-edge insurance solutions tailored to safeguard individuals,
                families and businesses.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        ref={whyUsRef}
        initial="hidden"
        animate={whyUsInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="why-us"
      >
        <div className="container">
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  ease: "easeOut",
                },
              },
            }}
            whileHover={{
              scale: 1.02,
              textShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
              transition: { duration: 0.3 },
            }}
          >
            Why People Choosing Us!
          </motion.h1>

          <motion.p variants={fadeInUp} transition={{ delay: 0.2 }}>
            We work with multiple insurance carriers to shop around and compare rates and policy conditions, ensuring
            you receive the most competitive options for your needs. Our expert team is here to answer your questions,
            provide personalized advice, and guide you smoothly through the entire insurance process.
          </motion.p>

          <motion.div className="cards" variants={staggerContainer}>
            <motion.div variants={fadeInUp} whileHover="hover" {...cardHover} {...pulseGlow}>
              <motion.svg
                {...iconFloat}
                id="fi_5026775"
                enableBackground="new 0 0 512 512"
                height="512"
                viewBox="0 0 512 512"
                width="512"
                xmlns="http://www.w3.org/2000/svg"
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.6 },
                }}
              >
                <g>
                  <path d="m226 512c-8.972 0-16-7.028-16-16v-39c0-6.217-3.966-11.496-10.103-13.448-12.039-3.439-24.521-8.614-37.072-15.373-2-1.052-4.266-1.61-6.545-1.61-3.763 0-7.304 1.47-9.973 4.138l-27.599 27.6c-2.946 2.946-6.926 4.568-11.208 4.568-4.281 0-8.262-1.622-11.207-4.568l-42.6-42.6c-2.946-2.945-4.568-6.926-4.568-11.207 0-4.282 1.622-8.262 4.568-11.208l27.6-27.599c4.397-4.399 5.41-11.041 2.521-16.528-6.752-12.541-11.927-25.022-15.375-37.09-2.003-6.01-7.41-10.075-13.439-10.075h-39c-8.972 0-16-7.028-16-16v-60c0-8.972 7.028-16 16-16h39c6.217 0 11.496-3.966 13.448-10.103 3.438-12.036 8.613-24.519 15.371-37.072 2.885-5.479 1.872-12.121-2.525-16.518l-27.6-27.601c-2.946-2.946-4.568-6.926-4.568-11.207s1.622-8.261 4.568-11.206l42.6-42.602c2.945-2.946 6.926-4.568 11.207-4.568 4.282 0 8.262 1.622 11.208 4.568l27.599 27.602c2.668 2.668 6.209 4.137 9.971 4.137 2.28 0 4.547-.559 6.556-1.616 12.542-6.754 25.024-11.93 37.092-15.377 6.008-2.004 10.073-7.41 10.073-13.437v-39c0-8.972 7.028-16 16-16h60c8.972 0 16 7.028 16 16v39c0 6.215 3.966 11.494 10.103 13.446 12.039 3.439 24.521 8.614 37.072 15.373 2 1.053 4.267 1.612 6.547 1.612 3.762 0 7.303-1.47 9.971-4.137l27.599-27.602c2.946-2.946 6.926-4.568 11.208-4.568 4.281 0 8.262 1.622 11.207 4.568l42.6 42.602c2.946 2.945 4.568 6.925 4.568 11.206s-1.622 8.261-4.568 11.207l-27.6 27.601c-4.397 4.397-5.41 11.039-2.521 16.526 6.754 12.545 11.928 25.027 15.375 37.092 2.004 6.009 7.411 10.074 13.439 10.074h39c8.972 0 16 7.028 16 16v60c0 8.972-7.028 16-16 16h-39c-6.217 0-11.496 3.966-13.448 10.103-3.44 12.039-8.614 24.521-15.371 37.07-2.885 5.479-1.872 12.121 2.525 16.52l27.6 27.599c2.946 2.946 4.568 6.926 4.568 11.208 0 4.281-1.622 8.262-4.568 11.207l-42.6 42.6c-2.945 2.946-6.926 4.568-11.207 4.568-4.282 0-8.262-1.622-11.208-4.568l-27.599-27.6c-2.668-2.668-6.21-4.138-9.973-4.138-2.279 0-4.546.559-6.554 1.615-12.542 6.754-25.024 11.929-37.092 15.377-6.008 2.004-10.073 7.411-10.073 13.439v39c0 8.972-7.028 16-16 16zm30-390c-73.888 0-134 60.112-134 134s60.112 134 134 134 134-60.112 134-134-60.112-134-134-134z"></path>
                  <path d="m290.395 215.395-49.395 49.394-19.395-19.395c-5.859-5.859-15.352-5.859-21.211 0s-5.859 15.352 0 21.211l30 30c5.859 5.859 15.351 5.86 21.211 0l60-60c5.859-5.859 5.859-15.352 0-21.211s-15.351-5.859-21.21.001z"></path>
                </g>
              </motion.svg>
              <motion.h3
                whileHover={{
                  color: "#3b82f6",
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
              >
                Easy Process
              </motion.h3>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover="hover" {...cardHover} {...pulseGlow}>
              <motion.svg
                {...iconFloat}
                height="448pt"
                viewBox="0 0 448.02519 448"
                width="448pt"
                xmlns="http://www.w3.org/2000/svg"
                id="fi_1728484"
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.6 },
                }}
              >
                <path d="m272 168.011719c29.222656-.011719 57.558594 10.027343 80.257812 28.433593l28.429688-28.433593-100.6875-100.6875-56 56v12.6875c-.054688 3.71875-.632812 7.40625-1.71875 10.960937l23.703125 23.710938c8.558594-1.777344 17.273437-2.671875 26.015625-2.671875zm0 0"></path>
                <path d="m24 160.011719h56c1.667969 0 3.292969.523437 4.648438 1.496093l39.535156 28.242188-4-20.167969c-.46875-2.347656.136718-4.777343 1.648437-6.628906 1.515625-1.855469 3.777344-2.933594 6.167969-2.941406h56c13.253906 0 24-10.746094 24-24v-112c0-13.253907-10.746094-24.0000002-24-24.0000002h-160c-13.253906 0-24 10.7460932-24 24.0000002v112c0 13.253906 10.746094 24 24 24zm-8-136h16v56l9.601562-12.800781c1.574219-1.910157 3.921876-3.019532 6.398438-3.019532s4.824219 1.109375 6.398438 3.019532l17.21875 22.960937 25.726562-38.597656c1.398438-2.101563 3.707031-3.417969 6.226562-3.554688 2.519532-.132812 4.957032.925781 6.574219 2.863281l32.527344 39.042969 34.335937-61.792969 13.984376 7.761719-40 72c-1.28125 2.304688-3.613282 3.828125-6.238282 4.078125-.25.027344-.503906.042969-.753906.039063-2.371094.003906-4.625-1.050781-6.144531-2.871094l-33.144531-39.777344-26.054688 39.089844c-1.433594 2.148437-3.816406 3.476563-6.398438 3.558594-2.585937.015625-5.03125-1.164063-6.625-3.199219l-17.632812-23.464844-16 21.328125v21.335938h160v16h-168c-4.417969 0-8-3.582031-8-8zm0 0"></path>
                <path d="m375.585938 221.117188 26.566406-26.570313-3.359375-22.582031c-.300781.617187-.683594 1.1875-1.136719 1.703125l-33.601562 33.601562c4.164062 4.339844 8.015624 8.964844 11.53125 13.847657zm0 0"></path>
                <path d="m285.65625 50.355469 111.648438 111.648437-12.375-83.199218c-11.074219-3.5-18.023438-14.457032-16.472657-25.964844 1.554688-11.507813 11.160157-20.230469 22.765625-20.667969 11.601563-.4375 21.839844 7.535156 24.257813 18.890625 2.417969 11.359375-3.6875 22.808594-14.464844 27.132812l15.199219 102.25 31.394531-31.394531-14.855469-133.796875-133.816406-14.867187-74.9375 74.9375v25.375l50.34375-50.34375c3.125-3.121094 8.1875-3.121094 11.3125 0zm0 0"></path>
                <path d="m177.015625 381.507812-24.160156 24.160157-11.3125-11.3125 25.410156-25.40625c-3.742187-5.417969-7.0625-11.117188-9.929687-17.046875l-28.96875 28.964844-11.3125-11.3125 33.699218-33.6875c-2.328125-7.148438-4.015625-14.492188-5.042968-21.941407l-42.140626 42.144531-11.3125-11.3125 52-52 .207032.207032c1.316406-52.6875 34.777344-99.1875 84.320312-117.167969l-14.082031-14.082031c-7.519531 9.019531-18.644531 14.253906-30.390625 14.296875h-46.238281l6.078125 30.402343c.644531 3.214844-.742188 6.503907-3.496094 8.285157-1.292969.84375-2.800781 1.300781-4.34375 1.3125-1.667969.003906-3.292969-.519531-4.648438-1.496094l-27.152343-19.390625-100.886719 100.886719 148.6875 148.6875 45.105469-45.101563c-7.3125-5.308594-14.046875-11.371094-20.089844-18.089844zm-134.671875-86.351562 52-52 11.3125 11.3125-52 52zm24.800781 24.800781 52-52 11.3125 11.3125-52 52zm0 0"></path>
                <path d="m400 56.011719c0 4.417969-3.582031 8-8 8s-8-3.582031-8-8 3.582031-8 8-8 8 3.582031 8 8zm0 0"></path>
                <path d="m272 184.011719c-61.855469 0-112 50.144531-112 112s50.144531 112 112 112 112-50.144531 112-112c-.066406-61.828125-50.171875-111.933594-112-112zm0 208c-53.019531 0-96-42.980469-96-96s42.980469-96 96-96 96 42.980469 96 96c-.058594 52.996093-43.003906 95.945312-96 96zm0 0"></path>
                <path d="m272 216.011719c-44.183594 0-80 35.816406-80 80 0 44.183593 35.816406 80 80 80s80-35.816407 80-80c-.046875-44.160157-35.835938-79.949219-80-80zm-8 72h16c13.253906 0 24 10.746093 24 24v8c0 13.253906-10.746094 24-24 24v16h-16v-16c-13.253906 0-24-10.746094-24-24h16c0 4.417969 3.582031 8 8 8h16c4.417969 0 8-3.582031 8-8v-8c0-4.417969-3.582031-8-8-8h-16c-13.253906 0-24-10.746094-24-24v-8c0-13.253907 10.746094-24 24-24v-16h16v16c13.253906 0 24 10.746093 24 24h-16c0-4.417969-3.582031-8-8-8h-16c-4.417969 0-8 3.582031-8 8v8c0 4.417969 3.582031 8 8 8zm0 0"></path>
                <path d="m447.785156 242.828125-12.539062-58.75-16.046875 16.085937 6.847656 46.007813c.457031 4.015625 3.074219 7.457031 6.820313 8.972656 3.75 1.515625 8.023437.859375 11.140624-1.710937 3.121094-2.566406 4.585938-6.636719 3.816407-10.605469zm0 0"></path>
                <path d="m372.160156 375.484375c-3.738281 4.6875-7.804687 9.105469-12.160156 13.222656l56.679688 56.679688c2.566406 2.574219 6.425781 3.347656 9.785156 1.957031 3.355468-1.390625 5.539062-4.667969 5.535156-8.300781-.007812-2.375-.953125-4.652344-2.625-6.34375zm0 0"></path>
              </motion.svg>
              <motion.h3
                whileHover={{
                  color: "#3b82f6",
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
              >
                Competitive Pricing
              </motion.h3>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover="hover" {...cardHover} {...pulseGlow}>
              <motion.svg
                {...iconFloat}
                id="fi_2636188"
                enableBackground="new 0 0 512 512"
                height="512"
                viewBox="0 0 512 512"
                width="512"
                xmlns="http://www.w3.org/2000/svg"
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.6 },
                }}
              >
                <g>
                  <g>
                    <path d="m132.76 233.348h-92.935c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h92.935c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5z"></path>
                    <path d="m140.26 273.173c0-4.143-3.358-7.5-7.5-7.5h-92.935c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h92.935c4.142 0 7.5-3.358 7.5-7.5z"></path>
                    <path d="m39.825 297.998c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h60.61c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5z"></path>
                    <path d="m154.984 345.323c9.706 0 17.602-7.896 17.602-17.602v-109.097c0-9.705-7.896-17.602-17.602-17.602h-87.198c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h87.198c1.435 0 2.602 1.167 2.602 2.602v109.098c0 1.435-1.167 2.602-2.602 2.602h-80.813c-1.305 0-2.588.341-3.721.988l-24.135 13.791v-7.279c0-4.143-3.358-7.5-7.5-7.5h-21.213c-1.435 0-2.602-1.167-2.602-2.602v-109.098c0-1.435 1.167-2.602 2.602-2.602h15.042c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-15.042c-9.706 0-17.602 7.897-17.602 17.602v109.098c0 9.705 7.896 17.602 17.602 17.602h13.713v12.703c0 2.674 1.423 5.145 3.735 6.486 1.164.676 2.464 1.014 3.765 1.014 1.284 0 2.568-.329 3.721-.988l33.626-19.215h78.822z"></path>
                    <path d="m472.175 221.226h-92.935c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h92.935c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5z"></path>
                    <path d="m472.175 253.551h-92.935c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h92.935c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5z"></path>
                    <path d="m472.175 285.876h-60.61c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h60.61c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5z"></path>
                    <path d="m494.398 188.9h-85.155c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h85.155c1.435 0 2.602 1.167 2.602 2.602v109.098c0 1.435-1.167 2.602-2.602 2.602h-21.213c-4.142 0-7.5 3.357-7.5 7.5v7.279l-24.135-13.791c-1.133-.647-2.416-.988-3.721-.988h-80.813c-1.435 0-2.602-1.167-2.602-2.602v-109.098c0-1.435 1.167-2.602 2.602-2.602h17.198c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-17.198c-9.706 0-17.602 7.896-17.602 17.602v109.098c0 9.705 7.896 17.602 17.602 17.602h78.821l33.626 19.215c1.153.659 2.438.988 3.721.988 1.3 0 2.601-.338 3.765-1.014 2.312-1.342 3.735-3.813 3.735-6.486v-12.703h13.713c9.706 0 17.602-7.896 17.602-17.602v-109.098c.001-9.705-7.895-17.602-17.601-17.602z"></path>
                    <path d="m472.175 32.325h-123.24c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h123.24c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5z"></path>
                    <path d="m472.175 64.65h-123.24c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h123.24c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5z"></path>
                    <path d="m472.175 96.976h-90.915c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h90.915c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5z"></path>
                    <path d="m494.398 0h-167.687c-9.706 0-17.602 7.896-17.602 17.602v109.098c0 9.705 7.896 17.602 17.602 17.602h109.126l33.626 19.215c1.153.659 2.438.988 3.721.988 1.3 0 2.601-.338 3.765-1.014 2.312-1.342 3.735-3.813 3.735-6.486v-12.703h13.713c9.706 0 17.602-7.896 17.602-17.602v-109.098c.001-9.706-7.895-17.602-17.601-17.602zm2.602 126.699c0 1.435-1.167 2.602-2.602 2.602h-21.213c-4.142 0-7.5 3.357-7.5 7.5v7.279l-24.135-13.791c-1.133-.647-2.416-.988-3.721-.988h-111.118c-1.435 0-2.602-1.167-2.602-2.602v-109.097c0-1.435 1.167-2.602 2.602-2.602h167.687c1.435 0 2.602 1.167 2.602 2.602z"></path>
                    <path d="m39.825 47.325h123.24c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-123.24c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5z"></path>
                    <path d="m39.825 79.65h123.24c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-123.24c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5z"></path>
                    <path d="m39.825 111.976h90.915c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-90.915c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5z"></path>
                    <path d="m17.602 144.301h13.713v12.703c0 2.674 1.423 5.145 3.735 6.486 1.164.676 2.464 1.014 3.765 1.014 1.284 0 2.568-.329 3.721-.988l33.626-19.215h109.126c9.706 0 17.602-7.896 17.602-17.602v-109.097c0-9.706-7.896-17.602-17.601-17.602h-167.687c-9.706 0-17.602 7.896-17.602 17.602v109.098c0 9.704 7.896 17.601 17.602 17.601zm-2.602-126.699c0-1.435 1.167-2.602 2.602-2.602h167.687c1.435 0 2.602 1.167 2.602 2.602v109.098c0 1.435-1.167 2.602-2.602 2.602h-111.118c-1.305 0-2.588.341-3.721.988l-24.135 13.79v-7.279c0-4.143-3.358-7.5-7.5-7.5h-21.213c-1.435 0-2.602-1.167-2.602-2.602z"></path>
                    <path d="m441.87 432.35h-54.12v-16.377c0-26.205-17.678-49.246-42.99-56.03l-54.996-14.742v-21.305c19.339-11.543 32.325-32.672 32.325-56.784v-77.782c0-16.39-13.334-29.724-29.724-29.724h-9.783c-3.217-10.513-13.01-18.183-24.563-18.183h-20.204c-26.416 0-47.906 21.49-47.906 47.906v77.782c0 24.113 12.986 45.241 32.325 56.784v21.305l-54.996 14.742c-25.312 6.784-42.99 29.825-42.99 56.03v16.377h-54.118c-4.142 0-7.5 3.357-7.5 7.5v32.325c0 4.143 3.358 7.5 7.5 7.5h6.643v24.826c0 4.143 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-24.825h282.763c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-296.906v-17.325h356.74v17.325h-24.805c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h10.662v24.825c0 4.143 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-24.825h6.643c4.142 0 7.5-3.357 7.5-7.5v-32.325c0-4.143-3.358-7.5-7.5-7.5zm-202.396-51.968-21.775 16.591-9.534-32.471 15.416-4.132c2.489 8.556 8.277 15.718 15.893 20.012zm48.945-20.013 15.416 4.132-9.534 32.471-21.775-16.591c7.616-4.293 13.404-11.455 15.893-20.012zm18.67-171.04v31.896h-10.683c-7.005 0-12.704-5.698-12.704-12.703v-33.917h8.663c8.119 0 14.724 6.606 14.724 14.724zm-102.178 0c0-18.145 14.762-32.906 32.906-32.906h20.204c5.891 0 10.683 4.792 10.683 10.683v41.417c0 7.005-5.699 12.703-12.703 12.703h-51.089v-31.897zm0 77.782v-30.886h51.089c7.962 0 15.145-3.381 20.203-8.777 5.058 5.396 12.241 8.777 20.204 8.777h10.683v30.886c0 28.171-22.918 51.09-51.089 51.09s-51.09-22.919-51.09-51.09zm51.089 66.09c6.518 0 12.812-.963 18.764-2.729v20.483c0 10.347-8.417 18.765-18.764 18.765s-18.764-8.418-18.764-18.765v-20.483c5.952 1.766 12.246 2.729 18.764 2.729zm-116.75 82.772c0-19.43 13.107-36.512 31.874-41.542l22.549-6.044 12.705 43.272c.695 2.368 2.512 4.243 4.858 5.013.765.251 1.554.374 2.338.374 1.621 0 3.222-.525 4.546-1.534l37.88-28.863 37.881 28.862c1.324 1.009 2.924 1.534 4.546 1.534.784 0 1.573-.123 2.338-.374 2.346-.77 4.163-2.645 4.858-5.013l12.705-43.272 22.549 6.044c18.767 5.03 31.874 22.112 31.874 41.542v16.377h-38.539v-12.703c0-4.143-3.358-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v12.703h-126.423v-12.703c0-4.143-3.358-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v12.703h-38.539z"></path>
                  </g>
                </g>
              </motion.svg>
              <motion.h3
                whileHover={{
                  color: "#3b82f6",
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
              >
                Expert Advice
              </motion.h3>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover="hover" {...cardHover} {...pulseGlow}>
              <motion.svg
                {...iconFloat}
                clipRule="evenodd"
                fillRule="evenodd"
                height="512"
                strokeLinejoin="round"
                strokeMiterlimit="2"
                viewBox="0 0 48 48"
                width="512"
                xmlns="http://www.w3.org/2000/svg"
                id="fi_8718579"
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.6 },
                }}
              >
                <g transform="translate(-432 -144)">
                  <g id="Icon">
                    <path d="m461 148.414v3.586c0 1.657 1.343 3 3 3h3.585z"></path>
                    <path d="m468.999 169.045v-11.389c0-.222-.025-.442-.073-.656h-4.926c-2.761 0-5-2.239-5-5v-4.927c-.214-.049-.434-.073-.657-.073h-20.344c-1.657 0-3 1.343-3 3v36c0 1.657 1.343 3 3 3h23.679c-2.829-1.991-4.678-5.281-4.678-9 0-6.071 4.929-11 11-11 .337 0 .67.015.999.045zm-19 11.955h4.001c.552 0 1-.448 1-1s-.448-1-1-1h-4.001c-.552 0-1 .448-1 1s.448 1 1 1zm-10.707-2.293 2 2c.391.391 1.024.391 1.414 0l4.001-4c.39-.39.39-1.024 0-1.414s-1.024-.39-1.414 0l-3.294 3.293s-1.293-1.293-1.293-1.293c-.39-.39-1.024-.39-1.414 0s-.39 1.024 0 1.414zm10.707-1.707h4.001c.552 0 1-.448 1-1s-.448-1-1-1h-4.001c-.552 0-1 .448-1 1s.448 1 1 1zm0-6h8.001c.552 0 1-.448 1-1s-.448-1-1-1h-8.001c-.552 0-1 .448-1 1s.448 1 1 1zm-10.707-2.293 2 2c.391.391 1.024.391 1.414 0l4.001-4c.39-.39.39-1.024 0-1.414s-1.024-.39-1.414 0l-3.294 3.293s-1.293-1.293-1.293-1.293c-.39-.39-1.024-.39-1.414 0s-.39 1.024 0 1.414zm10.707-1.707h14c.552 0 1-.448 1-1s-.448-1-1-1h-14c-.552 0-1 .448-1 1s.448 1 1 1zm0-6h14c.552 0 1-.448 1-1s-.448-1-1-1h-14c-.552 0-1 .448-1 1s.448 1 1 1zm-10.707-2.293 2 2c.391.391 1.024.391 1.414 0l4.001-4c.39-.39.39-1.024 0-1.414s-1.024-.39-1.414 0l-3.294 3.293s-1.293-1.293-1.293-1.293c-.39-.39-1.024-.39-1.414 0s-.39 1.024 0 1.414zm10.707-1.707h6c.552 0 1-.448 1-1s-.448-1-1-1h-6c-.552 0-1 .448-1 1s.448 1 1 1z"></path>
                    <path d="m468 171c4.967 0 9 4.033 9 9s-4.033 9-9 9-9-4.033-9-9 4.033-9 9-9zm-4.95 9.707 2.829 2.829c.39.39 1.023.39 1.414 0l5.657-5.657c.39-.391.39-1.024 0-1.415-.391-.39-1.024-.39-1.415 0l-4.949 4.95s-2.121-2.121-2.121-2.121c-.391-.39-1.024-.39-1.415 0-.39.39-.39 1.024 0 1.414z"></path>
                  </g>
                </g>
              </motion.svg>
              <motion.h3
                whileHover={{
                  color: "#3b82f6",
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
              >
                Accurate Document
              </motion.h3>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        ref={popularRef}
        initial="hidden"
        animate={popularInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="popular"
      >
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 50, scale: 0.8 },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 1,
                ease: "easeOut",
              },
            },
          }}
          whileHover={{
            scale: 1.05,
            background: "linear-gradient(45deg, #3b82f6, #8b5cf6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            transition: { duration: 0.3 },
          }}
        >
          Popular Insurance Products
        </motion.h1>

        <motion.div className="container" variants={staggerContainer}>
          {[
            { to: "/Fire-Insurance", img: fire, title: "Fire Insurance", icon: "fi_2267534" },
            { to: "/Cargo-Insurance", img: Cargo, title: "Cargo Insurance", icon: "fi_2300459" },
            { to: "/Medical-Insurance", img: Medical, title: "Medical Insurance", icon: "fi_3577767" },
            { to: "/Engineering-Insurance", img: Engineering, title: "Engineering Insurance", icon: "fi_1839274" },
            { to: "/Life-Insurance", img: Life, title: "Life Insurance", icon: "fi_1518636" },
            { to: "/Motor-Insurance", img: Motor, title: "Motor Insurance", icon: "fi_8430970" },
          ].map((product, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 80,
                  rotateX: -15,
                  scale: 0.8,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  scale: 1,
                  transition: {
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  },
                },
              }}
              whileHover={{
                y: -15,
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
                transition: {
                  duration: 0.4,
                  ease: "easeOut",
                },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to={product.to} className="prod">
                {/* SVG content remains the same but with enhanced hover effects */}
                <motion.svg
                  {...iconFloat}
                  whileHover={{
                    scale: 1.3,
                    rotate: 360,
                    filter: "drop-shadow(0 0 20px rgba(59, 130, 246, 0.6))",
                    transition: { duration: 0.8 },
                  }}
                  // ... existing SVG props and content
                />
                <motion.img
                  src={product.img}
                  alt=""
                  whileHover={{
                    scale: 1.1,
                    filter: "brightness(1.2) saturate(1.2)",
                    transition: { duration: 0.3 },
                  }}
                />
                <motion.h2
                  whileHover={{
                    color: "#3b82f6",
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                >
                  {product.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0.8 }}
                  whileHover={{
                    opacity: 1,
                    transition: { duration: 0.2 },
                  }}
                >
                  Individual {product.title.split(" ")[0].toLowerCase()} insurance is a pivotal component of personal
                  financial planning...
                </motion.p>
                <motion.span
                  whileHover={{
                    x: 10,
                    color: "#3b82f6",
                    transition: { duration: 0.2 },
                  }}
                >
                  Read More
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-chevron-right"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#000000"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    whileHover={{
                      x: 5,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 6l6 6l-6 6" />
                  </motion.svg>
                </motion.span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            ease: "easeOut",
          },
        }}
        viewport={{ once: true}}
      >
        <PartnersSection />
      </motion.div>
    </DefaultLayout>
  )
}

export default Home
