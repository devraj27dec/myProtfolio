import { Button } from '@/components/ui/button'
import React from 'react'

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 sm:py-32 py-16 shadow-lg border-slate-200">
        <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl text-slate-300">Get In Touch</h2>
        <p>If you'd like to get in touch with me, feel free to reach out on LinkedIn or my email and I'll get back to you whenever I can.</p>
        <div className=' flex gap-3'>
            <Button asChild>
              <a href="devrajrajput414@gmail.com" className="bg-white text-indigo-600 hover:bg-gray-100 hover:text-black hover:font-bold">Say Hi🖐️</a>
            </Button>
            <Button asChild>
          <a href="https://www.linkedin.com/in/devraj-rajput" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 focus-visible:font-bold">
            LinkedIn
          </a>
        </Button>
        <Button asChild>
          <a href="https://www.instagram.com/raj_kirar027" target="_blank" rel="noopener noreferrer" className="bg-pink-600 hover:bg-pink-700">
            Instagram
          </a>
        </Button>
        </div>
    </div>
  )
}

export default Contact