import { ShieldCheck, Wrench, Zap, Leaf, HeartHandshake, Sun, Battery, HardHat } from 'lucide-react';

export function Services() {
  const services = [
    {
      title: "ELECTRICAL INSTALLATION",
      desc: "Wiring, rewiring, lighting and power distribution solutions for residential, commercial and industrial applications.",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "SOLAR POWER SYSTEMS",
      desc: "Design, supply, installation and commissioning of efficient solar power systems tailored to customer needs.",
      icon: Sun,
      image: "https://i.ibb.co/jvzFShxQ/image.jpg"
    },
    {
      title: "INVERTER & BATTERY SYSTEMS",
      desc: "Reliable inverter and battery solutions designed for dependable backup power and efficient energy management.",
      icon: Battery,
      image: "https://i.ibb.co/MDRHg6Xj/image.jpg"
    },
    {
      title: "MAINTENANCE & SERVICES",
      desc: "Preventive maintenance, troubleshooting, repairs, inspections and upgrades for electrical and solar systems.",
      icon: Wrench,
      image: "https://i.ibb.co/DHsRJcXd/image.jpg"
    },
    {
      title: "ENGINEERING & CONSULTANCY",
      desc: "Project planning, system design, technical assessment and professional engineering consultancy.",
      icon: HardHat,
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-[#D4AF37] font-bold tracking-wider uppercase mb-2">What We Do</div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#06412D]">OUR PROFESSIONAL SERVICES</h2>
        </div>

        {/* Top row - 3 items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group border border-gray-100">
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-[#06412D]/30 group-hover:bg-[#06412D]/10 transition-colors z-10" />
                <img src={service.image} alt={service.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute -bottom-6 left-6 bg-[#D4AF37] p-4 rounded-lg shadow-lg z-20 text-[#06412D]">
                  <service.icon className="w-8 h-8" />
                </div>
              </div>
              <div className="pt-12 pb-8 px-8">
                <h3 className="text-xl font-bold text-[#06412D] mb-4 line-clamp-1">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row - 2 items centered */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8 lg:w-2/3 mx-auto">
          {services.slice(3, 5).map((service, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group border border-gray-100">
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-[#06412D]/30 group-hover:bg-[#06412D]/10 transition-colors z-10" />
                <img src={service.image} alt={service.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute -bottom-6 left-6 bg-[#D4AF37] p-4 rounded-lg shadow-lg z-20 text-[#06412D]">
                  <service.icon className="w-8 h-8" />
                </div>
              </div>
              <div className="pt-12 pb-8 px-8">
                <h3 className="text-xl font-bold text-[#06412D] mb-4 line-clamp-1">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  const reasons = [
    { title: "QUALITY ASSURED", desc: "Professional workmanship and attention to quality and safety.", icon: ShieldCheck },
    { title: "EXPERT ENGINEERS", desc: "Skilled professionals with technical knowledge and practical engineering experience.", icon: Wrench },
    { title: "RELIABLE & EFFICIENT", desc: "Dependable power solutions designed for efficient performance.", icon: Zap },
    { title: "SUSTAINABLE SOLUTIONS", desc: "Clean and sustainable energy solutions for a better energy future.", icon: Leaf },
    { title: "EXCELLENT CUSTOMER SUPPORT", desc: "Dedicated support before, during and after every project.", icon: HeartHandshake }
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-[#06412D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-[#D4AF37] font-bold tracking-wider uppercase mb-2">Our Advantages</div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">WHY CHOOSE XTOCOM?</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {reasons.map((reason, i) => (
            <div key={i} className="bg-white/10 p-8 rounded-xl border border-white/10 hover:border-[#D4AF37]/50 transition-colors">
              <div className="w-14 h-14 bg-[#D4AF37] rounded-lg flex items-center justify-center text-[#06412D] mb-6">
                <reason.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
              <p className="text-green-50/80 leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  const projects = [
    { title: "Solar Power Installation", image: "https://i.ibb.co/FqWnRfbB/image.jpg" },
    { title: "Inverter Installation", image: "https://i.ibb.co/SX7MvgZm/image.jpg" },
    { title: "Battery Installation", image: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&q=80&w=800" },
    { title: "Electrical Installation", image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800" },
    { title: "Commercial Solar Projects", image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=800" },
    { title: "Maintenance & Servicing", image: "https://i.ibb.co/N2jymgws/image.jpg" }
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-[#D4AF37] font-bold tracking-wider uppercase mb-2">Our Work</div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#06412D]">PROJECT SHOWCASE</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projects.map((proj, i) => (
            <div key={i} className="group relative h-72 rounded-xl overflow-hidden shadow-md">
              <img src={proj.image} alt={proj.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06412D]/90 via-[#06412D]/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full translate-y-2 group-hover:translate-y-0 transition-transform">
                <h3 className="text-xl font-bold text-white mb-1">{proj.title}</h3>
                <div className="w-12 h-1 bg-[#D4AF37] group-hover:w-24 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-50 border border-gray-200 rounded-2xl p-10 text-center max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-[#06412D] mb-2">NEED A SIMILAR SOLUTION?</h3>
            <p className="text-gray-600">Contact our engineering team to discuss your project requirements.</p>
          </div>
          <a href="#contact" className="bg-[#06412D] hover:bg-[#083D2A] text-white px-8 py-4 rounded font-bold text-lg transition-colors whitespace-nowrap">
            CONTACT US
          </a>
        </div>
      </div>
    </section>
  );
}

export function HowWeWork() {
  const steps = [
    { num: "01", title: "CONSULTATION", desc: "Understand the customer's power needs." },
    { num: "02", title: "ASSESSMENT & DESIGN", desc: "Assess requirements and design the appropriate solution." },
    { num: "03", title: "INSTALLATION", desc: "Professionally install and configure the system." },
    { num: "04", title: "SUPPORT & MAINTENANCE", desc: "Provide ongoing technical support and maintenance." }
  ];

  return (
    <section className="py-24 bg-slate-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-[#D4AF37] font-bold tracking-wider uppercase mb-2">Our Process</div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#06412D]">HOW WE WORK</h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative group">
              <div className="text-6xl font-black text-gray-100 absolute top-4 right-6 z-0 group-hover:text-[#D4AF37]/20 transition-colors">
                {step.num}
              </div>
              <div className="relative z-10">
                <div className="w-12 h-1 bg-[#D4AF37] mb-6"></div>
                <h3 className="text-xl font-bold text-[#06412D] mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
