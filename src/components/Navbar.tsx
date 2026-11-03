import { useState, useEffect } from 'react'

interface NavbarProps {
  activeSection: string
  onSelectSection: (id: string) => void
}

export function Navbar({ activeSection, onSelectSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050505]/90 backdrop-blur-md border-b border-white/10 py-4'
          : 'bg-transparent py-7'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Left: Clean Brand */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            onSelectSection('home')
          }}
          className="text-sm font-bold tracking-widest text-white uppercase hover:opacity-75 transition-opacity"
        >
          KARTIK BHANGALE
        </a>

        {/* Right: Minimal Nav Links */}
        <nav className="flex items-center gap-7 text-xs tracking-wider uppercase">
          {navItems.map((item) => {
            const isActive = activeSection === item.id
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  onSelectSection(item.id)
                }}
                className={`transition-colors duration-200 ${
                  isActive ? 'text-white font-medium' : 'text-[#A0A0A0] hover:text-white'
                }`}
              >
                {item.label}
              </a>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
