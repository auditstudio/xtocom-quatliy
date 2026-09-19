import { CheckCircle, Phone, Mail } from 'lucide-react';

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://i.ibb.co/jvzFShxQ/image.jpg" 
          alt="XTOCOM Engineering" 
          className="absolute inset-0 w-full h-full object-cover object-center min-w-full min-h-full opacity-35" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06412D]/95 via-[#06412D]/80 to-[#06412D]/50"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div className="inline-block bg-[#D4AF37] text-[#06412D] font-bold px-4 py-1.5 rounded-sm mb-6 tracking-wider text-sm uppercase">
            XTOCOM Quality Base Enterprise
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            POWERING TODAY. <br/> <span className="text-[#D4AF37]">SUSTAINING TOMORROW.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
            Reliable Electrical & Solar Engineering Solutions for Homes, Businesses and Industries. We specialize in <strong>camera installation</strong>, <strong>solar street lights projects</strong>, and <strong>home and industrial wiring</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="bg-[#D4AF37] hover:bg-[#b5952f] text-[#06412D] text-center px-8 py-4 rounded font-bold text-lg transition-colors flex items-center justify-center">
              GET A QUOTE
            </a>
            <a 
              href="https://wa.me/2347038164015?text=Hello%20XTOCOM%20Engineering%2C%20I%20would%20like%20to%20inquire%20about%20your%20electrical%20and%20solar%20services." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white hover:bg-gray-100 text-[#06412D] flex justify-center items-center gap-2 px-8 py-4 rounded font-bold text-lg transition-colors"
            >
              <WhatsAppIcon className="w-6 h-6 text-[#25D366]" /> WHATSAPP US
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function About() {
  const coreServices = [
    { title: "Home & Industrial Wiring", desc: "Expert wiring, conduit piping, and power distribution solutions for residential and industrial complexes." },
    { title: "Solar Street Lights Project", desc: "Turnkey design, supply, and installation of durable solar-powered street and estate lighting." },
    { title: "Camera Installation", desc: "Advanced CCTV and security camera setups engineered for round-the-clock safety and monitoring." },
    { title: "Hands-on Technical Training", desc: "We train people practically in all of these engineering trades to build real-world technical competence." }
  ];

  const highlights = [
    "Home & industrial wiring",
    "Solar street lights projects",
    "Camera & CCTV installation",
    "Practical technical training",
    "Quality workmanship & safety",
    "Reliable power backup systems",
    "Engineering consultancy",
    "Lifetime customer satisfaction"
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-[#D4AF37] font-bold tracking-wider uppercase mb-2">About Us</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#06412D] mb-6 leading-tight">
              ENGINEERING POWER SOLUTIONS YOU CAN TRUST
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              XTOCOM Quality Base Enterprise is a professional electrical and solar engineering company delivering dependable energy and security infrastructure. From precision <strong>home and industrial wiring</strong> and large-scale <strong>solar street lights projects</strong> to high-definition <strong>camera installations</strong>, our solutions are built to last.
            </p>
            <p className="text-base text-gray-700 bg-amber-50/70 border-l-4 border-[#D4AF37] p-4 rounded-r-lg mb-8">
              <strong>Technical Training:</strong> We don't just build systems—we train people in each of these technical skills, equipping students, technicians, and apprentices with real-world engineering knowledge.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <span className="text-gray-700 font-medium text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {coreServices.map((srv, idx) => (
                <div key={idx} className="bg-slate-50 p-5 rounded-xl border border-gray-100 shadow-sm hover:border-[#D4AF37]/50 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37] mb-2" />
                  <h4 className="font-bold text-[#06412D] text-base mb-1">{srv.title}</h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{srv.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-slate-50 p-8 md:p-10 rounded-2xl border border-gray-100 shadow-xl relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
              
              <div className="relative z-10 mb-8">
                <h3 className="text-xl font-bold text-[#06412D] mb-3 flex items-center gap-3">
                  <span className="w-8 h-1 bg-[#D4AF37]"></span> Our Mission
                </h3>
                <p className="text-gray-600 text-base leading-relaxed italic">
                  "Our mission is to provide reliable, efficient and sustainable electrical, security, and energy solutions while training people and delivering lasting value to every client."
                </p>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-[#06412D] mb-3 flex items-center gap-3">
                  <span className="w-8 h-1 bg-[#D4AF37]"></span> Our Vision
                </h3>
                <p className="text-gray-600 text-base leading-relaxed italic">
                  "To become a trusted leader in electrical, renewable energy and technical skill development through innovation, safety, and excellence."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="bg-[#06412D] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/4"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          READY FOR RELIABLE <span className="text-[#D4AF37]">POWER?</span>
        </h2>
        <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
          Let XTOCOM help you find the right electrical or solar solution for your home, business or organization.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 flex-wrap">
          <a href="tel:+2347038164015" className="bg-[#D4AF37] hover:bg-[#b5952f] text-[#06412D] px-6 py-4 rounded font-bold text-base md:text-lg transition-colors flex items-center justify-center gap-2 shadow-lg w-full sm:w-auto">
            <Phone className="w-5 h-5" /> 07038164015
          </a>
          <a href="tel:+2347057301191" className="bg-[#D4AF37] hover:bg-[#b5952f] text-[#06412D] px-6 py-4 rounded font-bold text-base md:text-lg transition-colors flex items-center justify-center gap-2 shadow-lg w-full sm:w-auto">
            <Phone className="w-5 h-5" /> 07057301191
          </a>
          <a 
            href="mailto:peacesopeaceso@gmail.com?subject=Inquiry%20from%20Website&body=Hello%20XTOCOM%20Engineering%2C%0A%0AI%20am%20ready%20for%20reliable%20electrical%20and%20solar%20power%20solutions.%20Please%20contact%20me." 
            className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-4 rounded font-bold text-base md:text-lg transition-colors flex items-center justify-center gap-2 shadow-lg w-full sm:w-auto"
          >
            <Mail className="w-5 h-5 text-[#D4AF37]" /> EMAIL US
          </a>
          <a 
            href="https://wa.me/2347038164015?text=Hello%20XTOCOM%2C%20I%20am%20ready%20for%20reliable%20power%20solutions%20and%20would%20like%20to%20consult%20with%20your%20team." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-white hover:bg-gray-100 text-[#06412D] px-6 py-4 rounded font-bold text-base md:text-lg transition-colors flex items-center justify-center gap-2 shadow-lg w-full sm:w-auto"
          >
            <WhatsAppIcon className="w-5 h-5 text-[#25D366]" /> WHATSAPP US
          </a>
        </div>
      </div>
    </section>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/2347038164015?text=Hello%20XTOCOM%20Quality%20Base%20Enterprise%2C%20I%20would%20like%20to%20make%20an%20inquiry%20about%20your%20electrical%20and%20solar%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20ba59] transition-transform hover:scale-110 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon className="w-8 h-8" />
    </a>
  );
}

export function CompanyVideo() {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative border-t border-white/5">
      <div className="absolute inset-0 z-0">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
         <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00DF67]/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="text-[#D4AF37] font-bold tracking-wider uppercase mb-2">Our Work In Action</div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">POWERING A BETTER FUTURE</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Discover how XTOCOM delivers reliable electrical and solar engineering solutions with quality, expertise and professionalism.
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/10 aspect-video">
          <iframe 
            className="w-full h-full border-0 absolute inset-0"
            src="https://www.youtube.com/embed/fo4N2nwyrPo?rel=0"
            title="XTOCOM Company Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
