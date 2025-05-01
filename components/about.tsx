"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { User, Code, Briefcase, Award } from "lucide-react"

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow bg-clip-text text-transparent bg-gradient-to-r from-neon-purple to-neon-blue">
              About Me
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full mx-auto mb-6" />
            <p className="text-gray-300 text-lg">Get to know more about me and my journey</p>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-effect rounded-xl p-6 md:p-8 mb-12">
            <div className="flex flex-col md:flex-row gap-8">
                  <div className="relative z-10">
                    <motion.div
                      className="absolute -inset-1 rounded-xl bg-gradient-to-r from-neon-purple to-neon-blue opacity-70 blur-xl"
                      animate={{
                        opacity: [0.5, 0.8, 0.5],
                        scale: [0.98, 1.01, 0.98],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                      }}
                    />
              
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <User className="text-neon-purple mr-3" size={24} />
                      <h3 className="text-xl font-semibold">Who I Am</h3>
                    </div>
                    <p className="text-gray-300 mb-4">
                    👋 Hi, I'm K. Sree Charan, a passionate and driven individual specializing in software development, AI/ML, and web technologies. With expertise in languages like C++, Java, Python, and tools such as TensorFlow, PyTorch, Flask, and FastAPI, I’m constantly exploring innovative solutions in real-world projects. 🚀
                    </p>
                    {/* <p className="text-gray-300">
                      With a strong foundation in computer science and a keen interest in emerging technologies, I
                      continuously expand my skills to stay at the forefront of web development trends and best practices.
                    </p> */}
                <br />
                    <div className="flex items-center mb-4">
                  <Code className="text-neon-blue mr-3" size={24} />
                  <h3 className="text-xl font-semibold">What I Do</h3>
                </div>
                <p className="text-gray-300 mb-4">
                I am currently pursuing a Bachelor of Technology in Computer Science and Engineering at Lovely Professional University, with a CGPA of 7.06. During my internships at IIT-Bhubaneswar and LearnFlu Ed-Tech, I gained hands-on experience in cloud-based applications, database integration, and CI/CD pipeline management.
                </p>
                    
                  </div>
              {/* <div className="flex-1">
                <div className="flex items-center mb-4">
                  <Code className="text-neon-blue mr-3" size={24} />
                  <h3 className="text-xl font-semibold">What I Do</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  I develop full-stack web applications using modern JavaScript frameworks like React and Next.js for
                  frontend, and Node.js with Express for backend services. My expertise includes building RESTful APIs,
                  implementing authentication systems, and working with various databases.
                </p>
                <p className="text-gray-300">
                  I&apos;m passionate about creating clean, maintainable code and optimizing application performance. I
                  focus on delivering solutions that are not only technically sound but also provide intuitive user
                  experiences.
                </p>
              </div> */}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              className="glass-effect rounded-xl p-6 card-hover-effect"
              whileHover={{
                boxShadow: "0 0 25px rgba(123, 31, 162, 0.5)",
                borderColor: "rgba(123, 31, 162, 0.8)",
              }}
            >
              <div className="flex items-center mb-4">
                <Briefcase className="text-neon-purple mr-3" size={24} />
                <h3 className="text-xl font-semibold">Experience</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex flex-col">
                  <span className="font-medium">Smart India Hackathon</span>
                  <span className="text-sm text-gray-400">October 2023 - september 2024</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-medium">Kriyeta 3.0 Hackathon</span>
                  <span className="text-sm text-gray-400">Indore 2024</span>
                </li>
                {/* <li className="flex flex-col">
                  <span className="font-medium">Web Developer Intern</span>
                  <span className="text-sm text-gray-400">Digital Innovations • 2019 - 2020</span>
                </li> */}
              </ul>
            </motion.div>

            <motion.div
              className="glass-effect rounded-xl p-6 card-hover-effect"
              whileHover={{
                boxShadow: "0 0 25px rgba(32, 84, 243, 0.5)",
                borderColor: "rgba(32, 84, 243, 0.8)",
              }}
            >
              <div className="flex items-center mb-4">
                <Award className="text-neon-blue mr-3" size={24} />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex flex-col">
                  <span className="font-medium">B.Tech in Computer Science</span>
                  <span className="text-sm text-gray-400">Lovely Professional University • 2022 - 2026</span>
                  <span className="text-sm text-gray-400">phagwara , Punjab  | CGPA : 7.2</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-medium">Kendriya Vidyalaya </span>
                  <span className="text-sm text-gray-400"> Delhi | 2020-2022 | Percentage:- 81%</span>
                </li>
        
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
