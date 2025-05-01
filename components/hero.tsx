"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown } from "lucide-react"
import photos from "../public/myphoto2.png"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  // Enhanced typewriter effect with multiple phrases
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(100)

  const phrases = ["Data Science Enthusiast","Software Developer", "9+ Hackathon Winner", "LifeLong Learner"]
  const period = 1500 // pause time after text is fully typed

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length
      const fullText = phrases[i]

      if (isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length - 1))
      } else {
        setDisplayText(fullText.substring(0, displayText.length + 1))
      }

      // Set typing speed - faster when deleting
      setTypingSpeed(isDeleting ? 50 : 100)

      // If completed typing the current phrase
      if (!isDeleting && displayText === fullText) {
        // Pause at the end
        setTimeout(() => setIsDeleting(true), period)
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
        // Pause before typing next phrase
        setTypingSpeed(500)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [displayText, isDeleting, loopNum, typingSpeed, phrases])

  return (
    <motion.section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20"
      style={{ opacity, scale, y }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-20 ml-5">
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h2
            className="text-5xl text-neon-blue mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Hello, I&apos;m
          </motion.h2>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4 text-glow bg-clip-text text-transparent bg-gradient-to-r from-neon-purple to-neon-blue name-3d"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            K Sree Charan
          </motion.h1>

          <motion.div
            className="h-1 w-32 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full mb-6 mx-auto lg:mx-0"
            initial={{ width: 0 }}
            animate={{ width: "8rem" }}
            transition={{ duration: 0.8, delay: 0.7 }}
          />

          <motion.div
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 h-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <span className="inline-block">{displayText}</span>
            <span className="inline-block w-1 h-6 ml-1 bg-neon-purple animate-pulse"></span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <a
              href="#about"
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-neon-purple to-neon-blue text-white font-medium transition-transform hover:scale-105 hover:shadow-lg hover:shadow-neon-purple/20"
            >
              Explore My Work
            </a>
          </motion.div>
        </motion.div>
        
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
          className="flex flex-col items-center"
        >
          <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
          <ArrowDown className="text-neon-blue" />
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
