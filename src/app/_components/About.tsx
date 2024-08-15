'use client'
import { motion } from 'framer-motion'
import React from 'react'

const About = () => {
  return (
    <motion.section
      className="flex flex-col items-center justify-center gap-4 sm:py-32 py-16 shadow-lg border-slate-200"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl text-slate-300"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        About Me
      </motion.h2>
      <motion.div
        className="container flex items-center justify-center mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <p className="text-center text-slate-200 max-w-4xl leading-relaxed ">
          I'm a passionate <span className='font-bold text-purple-500'>Full Stack Developer</span> with a strong
          foundation in both frontend and backend development. As a fresher in
          the field, I am constantly learning and adapting to new technologies
          to build efficient and scalable web applications. I thrive in
          collaborative environments, where creativity and problem-solving come
          together to deliver user-centric digital solutions. Whether it's
          designing intuitive user interfaces or working with server-side logic,
          I enjoy every step of the development process. I'm excited to
          contribute my skills and grow as a developer while making a positive
          impact through technology.
        </p>
      </motion.div>
    </motion.section>
  )
}

export default About