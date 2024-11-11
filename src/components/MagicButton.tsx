"use client"
import React from 'react'

type MagicButtonProps = {
    title:string;
    icon:React.ReactNode;
    positon: string;
    handleClick?: () => void;
    className?: string
}

export default function MagicButton({title,icon,positon ,handleClick,className}: MagicButtonProps) {
  return (
    <button className='relative inline-flex h-12 w-full md:w-60 md:mt-8 overflow-hidden rounded-lg p-[1px] focus:outline-none'
        onClick={handleClick}
    >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span
            className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
                bg-indigo-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${className}`}
        >
            {positon === 'left' && icon}
            {title}
            {positon === 'right' && icon}
        </span>
    </button>
  )
}