import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#06412D] shadow-lg py-3' : 'bg-[#06412D] py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="XTOCOM QUALITY BASE ENTERPRISE" 
              className="h-10 md:h-12 w-auto object-contain bg-white rounded p-1"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                if (e.currentTarget.nextElementSibling) {
                  e.currentTarget.nextElementSibling.classList.remove('hidden');
                }
              }}
            />
            <span className="hidden text-white font-extrabold text-xl md:text-2xl tracking-wide uppercase leading-tight">
              XTOCOM
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-white hover:text-[#D4AF37] font-medium transition-colors text-sm uppercase tracking-wide">
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href="#contact" className="bg-[#D4AF37] hover:bg-[#b5952f] text-[#06412D] px-6 py-2.5 rounded font-bold transition-colors">
              GET A QUOTE
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#06412D] border-t border-white/10 shadow-xl pb-6 pt-2">
          <div className="px-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-white hover:text-[#D4AF37] font-medium text-lg border-b border-white/5 pb-3">
                {link.name}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsOpen(false)} className="bg-[#D4AF37] hover:bg-[#b5952f] text-[#06412D] text-center px-6 py-3 rounded font-bold mt-2">
              GET A QUOTE
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
