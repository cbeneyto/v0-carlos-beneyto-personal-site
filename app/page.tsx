"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function Home() {
  const [isDark, setIsDark] = useState(true)
  const [activeSection, setActiveSection] = useState("")
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["intro", "work", "thoughts", "connect"]
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId)
        if (section) {
          const { offsetTop, offsetHeight } = section
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id))
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
    )

    const sections = document.querySelectorAll("[data-animate]")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Navigation */}
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["intro", "work", "thoughts", "connect"].map((section) => (
            <button
              key={section}
              onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
              className={`w-2 h-8 rounded-full transition-all duration-500 ${
                activeSection === section ? "bg-foreground" : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        {/* Hero Section */}
        <header id="intro" className="min-h-screen flex items-center">
          <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
            <div className="lg:col-span-3 space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-2">
                <div className="mb-8">
                  <a
                    href="https://www.linkedin.com/in/cbeneyto/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-block group"
                  >
                    <img
                      src="/images/avatar-carlos-2023.png"
                      alt="Carlos Beneyto"
                      className="w-[100px] h-[100px] rounded-full object-cover border-2 border-border shadow-lg transition-transform duration-300 group-hover:scale-110"
                    />
                    {/* Hover overlay with LinkedIn icon */}
                    <div className="absolute inset-0 rounded-full bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex items-center gap-1.5 text-white">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth="2.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
                  Carlos
                  <br />
                  <span className="text-muted-foreground">Beneyto</span>
                </h1>
              </div>

              <div className="space-y-6 max-w-md">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Product Leader with 10+ years driving
                  <span className="text-foreground"> tech</span>,<span className="text-foreground"> design</span>, and
                  <span className="text-foreground"> business growth</span>. Proven track record in real estate,
                  fintech, and SaaS.
                </p>

                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      Open to relocation
                    </div>
                    <span className="hidden sm:inline">·</span>
                    <div>Valencia, Spain</div>
                    <span className="hidden sm:inline">·</span>
                    <button
                      onClick={() => {
                        const contactSection = document.getElementById("connect")
                        contactSection?.scrollIntoView({ behavior: "smooth" })
                      }}
                      className="hidden sm:inline text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors duration-300 cursor-pointer text-sm"
                    >
                      Contact me
                    </button>
                    <button
                      onClick={() => {
                        const contactSection = document.getElementById("connect")
                        contactSection?.scrollIntoView({ behavior: "smooth" })
                      }}
                      className="sm:hidden text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors duration-300 cursor-pointer text-sm text-left"
                    >
                      Contact me
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">CURRENTLY</div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <img src="https://www.idealista.com/favicon.ico" alt="Idealista" className="w-5 h-5 rounded-full" />
                    <div className="text-foreground">Product Guy</div>
                  </div>
                  <div className="text-muted-foreground">@ Idealista (Unicorn)</div>
                  <div className="text-xs text-muted-foreground">Jun 2023 — Present</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">EXPERTISE</div>
                <div className="flex flex-wrap gap-2">
                  {["Product Management", "Startups", "AI", "UI/UX", "SaaS", "Growth", "Metrics"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Experience Section */}
        <section
          id="work"
          data-animate="work"
          className={`min-h-screen py-20 sm:py-32 transition-all duration-1000 ${
            visibleSections.has("work") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">Experience</h2>
              <div className="text-sm text-muted-foreground font-mono">2013 — 2025</div>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {/* Idealista */}
              <div className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500">
                <div className="lg:col-span-2">
                  <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                    2023
                  </div>
                </div>
                <div className="lg:col-span-6 space-y-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-medium">Product Guy @ Inmovilla</h3>
                    <div className="text-muted-foreground">Idealista</div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed max-w-lg">
                    Leading product at one of Spain's leading real estate CRMs, working with 3,500+ real estate entities
                    and professionals. Building the next generation of CRM technology.
                  </p>
                </div>
                <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
                  <span className="px-2 py-1 text-xs text-muted-foreground rounded">Product Strategy</span>
                  <span className="px-2 py-1 text-xs text-muted-foreground rounded">Real Estate Tech</span>
                  <span className="px-2 py-1 text-xs text-muted-foreground rounded">B2B SaaS</span>
                </div>
              </div>

              {/* The Power Plugin */}
              <div className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500">
                <div className="lg:col-span-2">
                  <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                    2023
                  </div>
                </div>
                <div className="lg:col-span-6 space-y-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-medium">Co-founder & Product</h3>
                    <div className="text-muted-foreground">The Power Plugin</div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed max-w-lg">
                    First marketing and engagement tool allowing gaming and betting operators to reward customers
                    through sports memorabilia collection. Part-time advisor role.
                  </p>
                </div>
                <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
                  <span className="px-2 py-1 text-xs text-muted-foreground rounded">Gaming</span>
                  <span className="px-2 py-1 text-xs text-muted-foreground rounded">Engagement</span>
                  <span className="px-2 py-1 text-xs text-muted-foreground rounded">Web3</span>
                </div>
              </div>

              {/* Edify */}
              <div className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500">
                <div className="lg:col-span-2">
                  <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                    2021
                  </div>
                </div>
                <div className="lg:col-span-6 space-y-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-medium">VP Product & Technology</h3>
                    <div className="text-muted-foreground">Edify (Acquired)</div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed max-w-lg">
                    Transformed spaces into homes through technology and a SaaS platform for construction management.
                    Successfully acquired by Idealista in 2023.
                  </p>
                </div>
                <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
                  <span className="px-2 py-1 text-xs text-muted-foreground rounded">PropTech</span>
                  <span className="px-2 py-1 text-xs text-muted-foreground rounded">SaaS</span>
                  <span className="px-2 py-1 text-xs text-muted-foreground rounded">Construction Tech</span>
                </div>
              </div>

              {/* Creditas */}
              <div className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500">
                <div className="lg:col-span-2">
                  <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                    2020
                  </div>
                </div>
                <div className="lg:col-span-6 space-y-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-medium">Sr. Product Manager</h3>
                    <div className="text-muted-foreground">Creditas (Unicorn)</div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed max-w-lg">
                    Led product initiatives at Brazil's leading digital secured lending platform with +€800M in
                    financing and $4.8B valuation. Managed @Work and Store products.
                  </p>
                </div>
                <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
                  <span className="px-2 py-1 text-xs text-muted-foreground rounded">Fintech</span>
                  <span className="px-2 py-1 text-xs text-muted-foreground rounded">LatAm</span>
                  <span className="px-2 py-1 text-xs text-muted-foreground rounded">Secured Lending</span>
                </div>
              </div>

              {/* EDEM */}
              <div className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500">
                <div className="lg:col-span-2">
                  <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                    2020
                  </div>
                </div>
                <div className="lg:col-span-6 space-y-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-medium">Lecturer - Digital Product</h3>
                    <div className="text-muted-foreground">EDEM Business School</div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed max-w-lg">
                    Teaching digital product management to executives and entrepreneurs, fostering leadership and
                    entrepreneurial spirit.
                  </p>
                </div>
                <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
                  <span className="px-2 py-1 text-xs text-muted-foreground rounded">Education</span>
                  <span className="px-2 py-1 text-xs text-muted-foreground rounded">Product Management</span>
                  <span className="px-2 py-1 text-xs text-muted-foreground rounded">Leadership</span>
                </div>
              </div>

              {/* Sivana Villas */}
              <div className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500">
                <div className="lg:col-span-2">
                  <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                    2020
                  </div>
                </div>
                <div className="lg:col-span-6 space-y-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-medium">Investor & Co-founder</h3>
                    <div className="text-muted-foreground">Sivana Villas Bali</div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed max-w-lg">
                    Boutique resort in Uluwatu, Bali, with 12 luxury villas overlooking the ocean. Created during the
                    pandemic.
                  </p>
                </div>
                <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
                  <span className="px-2 py-1 text-xs text-muted-foreground rounded">Hospitality</span>
                  <span className="px-2 py-1 text-xs text-muted-foreground rounded">Real Estate</span>
                  <span className="px-2 py-1 text-xs text-muted-foreground rounded">Tourism</span>
                </div>
              </div>

              {/* Passporter */}
              <div className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500">
                <div className="lg:col-span-2">
                  <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                    2019
                  </div>
                </div>
                <div className="lg:col-span-6 space-y-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-medium">Head of Product & Tech</h3>
                    <div className="text-muted-foreground">Passporter</div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed max-w-lg">
                    Breaking boundaries creating the first open passport database worldwide, maintaining memories
                    without expiration date. €1.5M+ funding.
                  </p>
                </div>
                <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
                  <span className="px-2 py-1 text-xs text-muted-foreground rounded">Travel Tech</span>
                  <span className="px-2 py-1 text-xs text-muted-foreground rounded">Mobile App</span>
                  <span className="px-2 py-1 text-xs text-muted-foreground rounded">UGC</span>
                </div>
              </div>

              {/* UXER School */}
              <div className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500">
                <div className="lg:col-span-2">
                  <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                    2018
                  </div>
                </div>
                <div className="lg:col-span-6 space-y-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-medium">Mentor - UX & Product</h3>
                    <div className="text-muted-foreground">UXER School</div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed max-w-lg">
                    Part of the mentors community for the UX Experience Immersive Valencia course, 8 intensive weeks on
                    UX, UI and product design.
                  </p>
                </div>
                <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
                  <span className="px-2 py-1 text-xs text-muted-foreground rounded">Education</span>
                  <span className="px-2 py-1 text-xs text-muted-foreground rounded">UX Design</span>
                  <span className="px-2 py-1 text-xs text-muted-foreground rounded">Mentoring</span>
                </div>
              </div>

              {/* Betrocket */}
              <div className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500">
                <div className="lg:col-span-2">
                  <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                    2016
                  </div>
                </div>
                <div className="lg:col-span-6 space-y-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-medium">Chief Product Officer</h3>
                    <div className="text-muted-foreground">Betrocket (Closed)</div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed max-w-lg">
                    Free sports betting platform. Competed in exciting sports betting tournaments to win prizes.
                    Co-founder/CTO developing a complete pioneering sports betting system. €1M+ funding. Lanzadera IV
                    participant.
                  </p>
                </div>
                <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
                  <span className="px-2 py-1 text-xs text-muted-foreground rounded">Gaming</span>
                  <span className="px-2 py-1 text-xs text-muted-foreground rounded">Sports Betting</span>
                  <span className="px-2 py-1 text-xs text-muted-foreground rounded">Entrepreneurship</span>
                </div>
              </div>

              {/* Startupxplore */}
              <div className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500">
                <div className="lg:col-span-2">
                  <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                    2016
                  </div>
                </div>
                <div className="lg:col-span-6 space-y-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-medium">Co-founder & Product Manager</h3>
                    <div className="text-muted-foreground">Startupxplore</div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed max-w-lg">
                    A platform that connects startups with potential investors and partners. Focused on fostering growth
                    and innovation.
                  </p>
                </div>
                <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
                  <span className="px-2 py-1 text-xs text-muted-foreground rounded">Startup Ecosystem</span>
                  <span className="px-2 py-1 text-xs text-muted-foreground rounded">Investment</span>
                  <span className="px-2 py-1 text-xs text-muted-foreground rounded">Networking</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Writings & Thoughts Section */}
        <section
          id="thoughts"
          data-animate="thoughts"
          className={`min-h-screen py-20 sm:py-32 transition-all duration-1000 delay-100 ${
            visibleSections.has("thoughts") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">Writings & Thoughts</h2>
              <Link
                href="https://medium.com/@carlosbeneyto"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground font-mono hover:text-foreground transition-colors duration-300 flex items-center gap-2"
              >
                <span>View all on Medium</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
              <Link
                href="https://medium.com/@carlosbeneyto/meetings-dont-build-products-decisions-do-a9284e6a55a8"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg cursor-pointer"
              >
                <article className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                    <span>Oct 2024</span>
                    <span>5 min</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                    Meetings don't build products. Decisions do.
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    There's this sneaky little trend killing productivity in a bunch of startups: thinking every problem
                    needs to be talked out in a meeting.
                  </p>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    <span>Read more</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </article>
              </Link>

              <Link
                href="https://medium.com/@carlosbeneyto/forget-courses-win-with-hackathons-the-real-way-to-upskill-your-teams-f12b29b4d550"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg cursor-pointer"
              >
                <article className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                    <span>Sep 2024</span>
                    <span>6 min</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                    Forget courses, win with hackathons: the real way to upskill your teams
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    For years, corporate training in digital companies has followed the same ritual: external courses,
                    bootcamps, certifications...
                  </p>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    <span>Read more</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </article>
              </Link>

              <Link
                href="https://medium.com/@carlosbeneyto/ownership-as-a-driver-of-agility-in-your-startup-c5dda017a783"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg cursor-pointer"
              >
                <article className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                    <span>Mar 2024</span>
                    <span>7 min</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                    'Ownership' as a driver of agility in your startup
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    Today we are going to dive into a topic that goes beyond just being 'cool', a concept that is
                    essential and fundamental for the success of any organization.
                  </p>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    <span>Read more</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </article>
              </Link>

              <Link
                href="https://medium.com/@carlosbeneyto/creating-an-mvp-from-0-to-1-without-bullshit-62e81258b8ae"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg cursor-pointer"
              >
                <article className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                    <span>Dec 2023</span>
                    <span>10 min</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                    Creating an 'MVP', from 0 to 1 without bullshit
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    Let's talk no nonsense, creating an MVP for your startup is a hard and difficult path, accept it and
                    start working with it. Shall we start?
                  </p>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    <span>Read more</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </article>
              </Link>
            </div>
          </div>
        </section>

        {/* Connect Section */}
        <section
          id="connect"
          data-animate="connect"
          className={`min-h-screen py-20 sm:py-32 flex items-center transition-all duration-1000 delay-200 ${
            visibleSections.has("connect") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="w-full space-y-12 sm:space-y-16">
            <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
              <div className="space-y-6 sm:space-y-8">
                <h2 className="text-3xl sm:text-4xl font-light">Let's Connect</h2>

                <div className="space-y-6">
                  <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                    Open to bringing global product expertise and founder mindset to new opportunities.
                  </p>

                  <div className="space-y-4">
                    <Link
                      href="mailto:info@carlosbeneyto.com"
                      className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                    >
                      <span className="text-base sm:text-lg">info@carlosbeneyto.com</span>
                      <svg
                        className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="text-sm text-muted-foreground font-mono">ELSEWHERE</div>

              <div className="grid grid-cols-2 gap-4">
                <Link
                  href="https://www.carlosbeneyto.com"
                  className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                >
                  <div className="space-y-2">
                    <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                      Website
                    </div>
                    <div className="text-sm text-muted-foreground">carlosbeneyto.com</div>
                  </div>
                </Link>

                <Link
                  href="https://linkedin.com/in/cbeneyto"
                  className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                >
                  <div className="space-y-2">
                    <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                      LinkedIn
                    </div>
                    <div className="text-sm text-muted-foreground">cbeneyto</div>
                  </div>
                </Link>

                <Link
                  href="https://medium.com/@carlosbeneyto"
                  className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                >
                  <div className="space-y-2">
                    <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                      Medium
                    </div>
                    <div className="text-sm text-muted-foreground">@carlosbeneyto</div>
                  </div>
                </Link>

                <Link
                  href="mailto:info@carlosbeneyto.com"
                  className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                >
                  <div className="space-y-2">
                    <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                      Email
                    </div>
                    <div className="text-sm text-muted-foreground">info@carlosbeneyto.com</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 sm:py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">© 2025 Carlos Beneyto. All rights reserved.</div>
              <div className="text-xs text-muted-foreground">Built with v0 by Vercel</div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
