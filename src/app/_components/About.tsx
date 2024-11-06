'use client'
import { Reveal } from '@/components/reveal'
import React from 'react'

const About = () => {
  return (
    <Reveal
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <section
        id="about"
        className="flex flex-col items-center justify-center gap-4 sm:py-36 py-20 "
      >
        <Reveal
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
        >
          <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl text-slate-300">
            About Me
          </h2>
        </Reveal>

        <Reveal
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <div className="container flex items-center justify-center mt-2">
            <p className="text-center text-slate-200 max-w-4xl leading-relaxed">
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
          </div>
        </Reveal>
      </section>
    </Reveal>
  )
}

export default About