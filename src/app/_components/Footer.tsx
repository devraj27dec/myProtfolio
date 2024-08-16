import React from 'react'
import { LinkedInLogoIcon , InstagramLogoIcon , GitHubLogoIcon} from '@radix-ui/react-icons'

const Footer = () => {
  return (
    <footer className=' flex flex-col items-center justify-center py-5 text-center'>
      <span className='text-lg md:text-xl mb-4 md:mb-5'>Designed & Made 💜 By with Devraj Rajput</span>
      <div className="flex gap-4 md:mt-4">
        <a href="https://www.linkedin.com/in/devraj-rajput" target="_blank" rel="noopener noreferrer">
          <LinkedInLogoIcon className="w-6 h-6 text-gray-300 hover:text-blue-700" />
        </a>
        <a href="https://www.instagram.com/raj_kirar027" target="_blank" rel="noopener noreferrer">
          <InstagramLogoIcon className="w-6 h-6 text-gray-300 hover:text-pink-600" />
        </a>
        <a href="https://github.com/devraj27dec" target="_blank" rel="noopener noreferrer">
          <GitHubLogoIcon className="w-6 h-6 text-gray-300 hover:text-black" />
        </a>
      </div>
    </footer>
  )
}

export default Footer