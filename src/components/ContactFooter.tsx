import { useState, FormEvent } from 'react';
import { Phone, MapPin, Mail, Facebook, Clock, Send, CheckCircle } from 'lucide-react';
import { WhatsAppIcon } from './Core';

export function VisitLocation() {
  return (
    <section className="py-24 bg-slate-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-[#D4AF37] font-bold tracking-wider uppercase mb-2">Location</div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#06412D]">VISIT XTOCOM</h2>
          <p className="text-lg text-gray-600 mt-4 font-medium">Find Us in Jos, Plateau State</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          
          {/* Left: Contact Info */}
          <div className="p-10 md:p-14 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-[#06412D] mb-8">Contact Information</h3>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#06412D]/5 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-[#06412D]" />
                </div>
                <div>
                  <p className="text-gray-500 font-medium text-sm mb-1 uppercase tracking-wider">Address</p>
                  <p className="text-lg font-bold text-gray-800">No. 43 Church Street, Jos, Plateau State, Nigeria</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#06412D]/5 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-[#06412D]" />
                </div>
                <div>
                  <p className="text-gray-500 font-medium text-sm mb-1 uppercase tracking-wider">Phone</p>
                  <div className="flex flex-col gap-1">
                    <a href="tel:+2347038164015" className="text-lg font-bold text-gray-800 hover:text-[#D4AF37] transition-colors">07038164015</a>
                    <a href="tel:+2347057301191" className="text-lg font-bold text-gray-800 hover:text-[#D4AF37] transition-colors">07057301191</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#06412D]/5 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-[#06412D]" />
                </div>
                <div>
                  <p className="text-gray-500 font-medium text-sm mb-1 uppercase tracking-wider">Email</p>
                  <a 
                    href="mailto:peacesopeaceso@gmail.com?subject=Inquiry%20to%20XTOCOM%20Engineering&body=Hello%20XTOCOM%20Quality%20Base%20Enterprise%2C%0A%0AI%20am%20interested%20in%20your%20services.%20Please%20contact%20me." 
                    className="text-lg font-bold text-gray-800 hover:text-[#D4AF37] transition-colors break-all"
                  >
                    peacesopeaceso@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#06412D]/5 rounded-lg flex items-center justify-center shrink-0">
                  <WhatsAppIcon className="w-6 h-6 text-[#06412D]" />
                </div>
                <div>
                  <p className="text-gray-500 font-medium text-sm mb-1 uppercase tracking-wider">WhatsApp</p>
                  <a 
                    href="https://wa.me/2347038164015?text=Hello%20XTOCOM%20Quality%20Base%20Enterprise%2C%20I%20would%20like%20to%20inquire%20about%20your%20services." 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-lg font-bold text-gray-800 hover:text-[#D4AF37] transition-colors"
                  >
                    +234 703 816 4015
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#06412D]/5 rounded-lg flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-[#06412D]" />
                </div>
                <div>
                  <p className="text-gray-500 font-medium text-sm mb-1 uppercase tracking-wider">Business Hours</p>
                  <p className="text-lg font-bold text-gray-800">Mon - Sat: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <a href="tel:+2347038164015" className="bg-[#06412D] hover:bg-[#083D2A] text-white px-6 py-4 rounded font-bold transition-colors flex items-center justify-center gap-2 flex-grow sm:flex-grow-0">
                <Phone className="w-5 h-5" /> CALL US
              </a>
              <a 
                href="mailto:peacesopeaceso@gmail.com?subject=Inquiry%20to%20XTOCOM%20Engineering&body=Hello%20XTOCOM%20Quality%20Base%20Enterprise%2C%0A%0AI%20would%20like%20to%20make%20an%20inquiry%20regarding%20your%20services." 
                className="bg-[#06412D]/10 hover:bg-[#06412D]/20 text-[#06412D] px-6 py-4 rounded font-bold transition-colors flex items-center justify-center gap-2 flex-grow sm:flex-grow-0"
              >
                <Mail className="w-5 h-5" /> EMAIL US
              </a>
              <a 
                href="https://wa.me/2347038164015?text=Hello%20XTOCOM%2C%20I%20would%20like%20to%20visit%20your%20office%20or%20inquire%20about%20your%20services." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-4 rounded font-bold transition-colors flex items-center justify-center gap-2 flex-grow sm:flex-grow-0"
              >
                <WhatsAppIcon className="w-5 h-5" /> CHAT ON WHATSAPP
              </a>
              <a href="https://www.google.com/maps/search/?api=1&query=43+Church+Street,+Jos,+Plateau+State,+Nigeria" target="_blank" rel="noopener noreferrer" className="bg-[#D4AF37] hover:bg-[#b5952f] text-[#06412D] px-6 py-4 rounded font-bold transition-colors flex items-center justify-center gap-2 flex-grow sm:flex-grow-0">
                <MapPin className="w-5 h-5" /> GET DIRECTIONS
              </a>
            </div>
          </div>

          {/* Right: Google Map */}
          <div className="h-[400px] lg:h-auto min-h-[400px] relative">
            <iframe 
              src="https://maps.google.com/maps?q=43+Church+Street,+Jos,+Plateau+State,+Nigeria&t=&z=16&ie=UTF8&iwloc=&output=embed" 
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="XTOCOM Location - No. 43 Church Street, Jos"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);

  const servicesMap: Record<string, string> = {
    wiring: 'Home & Industrial Wiring',
    solar: 'Solar Power Systems',
    inverter: 'Inverter & Battery Systems',
    streetlights: 'Solar Street Lights Project',
    camera: 'Camera Installation (CCTV)',
    training: 'Technical Training (Learn Any of These)',
    maintenance: 'Maintenance & Services',
    engineering: 'Engineering & Consultancy'
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const serviceName = servicesMap[formData.service] || formData.service || 'General Inquiry';
    const subject = encodeURIComponent(`New Inquiry from ${formData.fullName} - ${serviceName}`);
    const emailBody = encodeURIComponent(
`Hello XTOCOM Quality Base Enterprise,

I am reaching out regarding your engineering services:

• Full Name: ${formData.fullName}
• Phone: ${formData.phone}
• Email: ${formData.email}
• Service Needed: ${serviceName}

• Message:
${formData.message}

---
Sent from XTOCOM Website Contact Form`
    );

    // Open user's default email client addressed to company email
    window.location.href = `mailto:peacesopeaceso@gmail.com?subject=${subject}&body=${emailBody}`;
    setIsSent(true);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-[#D4AF37] font-bold tracking-wider uppercase mb-2">Get In Touch</div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#06412D]">LET'S POWER YOUR FUTURE</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="bg-[#06412D] p-10 md:p-14 rounded-2xl text-white relative overflow-hidden shadow-2xl">
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#D4AF37]/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">XTOCOM QUALITY BASE ENTERPRISE</h3>
              <p className="text-[#D4AF37] font-medium mb-12">Electrical & Solar Engineering Company</p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="text-green-50/70 font-medium text-sm mb-1 uppercase tracking-wider">PHONE</p>
                    <div className="flex flex-col gap-1">
                      <a href="tel:+2347038164015" className="text-xl font-bold hover:text-[#D4AF37] transition-colors">07038164015</a>
                      <a href="tel:+2347057301191" className="text-xl font-bold hover:text-[#D4AF37] transition-colors">07057301191</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="text-green-50/70 font-medium text-sm mb-1 uppercase tracking-wider">EMAIL</p>
                    <a href="mailto:peacesopeaceso@gmail.com" className="text-xl font-bold hover:text-[#D4AF37] transition-colors break-all">peacesopeaceso@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    <WhatsAppIcon className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="text-green-50/70 font-medium text-sm mb-1 uppercase tracking-wider">WHATSAPP</p>
                    <a href="https://wa.me/2347038164015" target="_blank" rel="noopener noreferrer" className="text-xl font-bold hover:text-[#D4AF37] transition-colors">+234 703 816 4015</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="text-green-50/70 font-medium text-sm mb-1 uppercase tracking-wider">LOCATION</p>
                    <p className="text-xl font-bold">No. 43 Church Street, Jos, Plateau State, Nigeria</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    <Facebook className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="text-green-50/70 font-medium text-sm mb-1 uppercase tracking-wider">FACEBOOK</p>
                    <a 
                      href="https://www.facebook.com/search/top?q=XTOCOM%20Quality%20Base%20Enterprise" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xl font-bold hover:text-[#D4AF37] transition-colors"
                    >
                      Xtocm Quality Base Enterprise
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex flex-wrap gap-4">
                <a href="tel:+2347038164015" className="bg-[#D4AF37] hover:bg-[#b5952f] text-[#06412D] px-6 py-3 rounded font-bold transition-colors shadow-md">
                  CALL US
                </a>
                <a 
                  href="mailto:peacesopeaceso@gmail.com?subject=Inquiry%20to%20XTOCOM%20Engineering&body=Hello%20XTOCOM%20Quality%20Base%20Enterprise%2C%0A%0AI%20would%20like%20to%20inquire%20about%20your%20services.%20Please%20contact%20me." 
                  className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded font-bold transition-colors flex items-center gap-2 shadow-md"
                >
                  <Mail className="w-5 h-5 text-[#D4AF37]" /> EMAIL US
                </a>
                <a 
                  href="https://wa.me/2347038164015?text=Hello%20XTOCOM%20Quality%20Base%20Enterprise%2C%20I%20would%20like%20to%20inquire%20about%20your%20services." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3 rounded font-bold transition-colors flex items-center gap-2 shadow-md"
                >
                  <WhatsAppIcon className="w-5 h-5" /> CHAT ON WHATSAPP
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 p-10 rounded-2xl border border-gray-200">
            <h3 className="text-2xl font-bold text-[#06412D] mb-8">Send Us A Message</h3>
            
            {isSent && (
              <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-xl text-green-900">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-base">Message Generated for peacesopeaceso@gmail.com</h4>
                    <p className="text-sm text-green-800 mt-1">
                      Your default email app was triggered with your pre-filled inquiry. You can also send directly using:
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <a
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=peacesopeaceso@gmail.com&su=${encodeURIComponent(`New Inquiry from ${formData.fullName} - ${servicesMap[formData.service] || formData.service || 'Inquiry'}`)}&body=${encodeURIComponent(`Name: ${formData.fullName}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${servicesMap[formData.service] || formData.service}\n\nMessage:\n${formData.message}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-lg inline-flex items-center gap-2 transition-colors"
                      >
                        <Mail className="w-4 h-4" /> Open in Gmail Web
                      </a>
                      <a
                        href={`https://wa.me/2347038164015?text=${encodeURIComponent(`Hello XTOCOM, I am ${formData.fullName} (${formData.phone}). Inquiring about ${servicesMap[formData.service] || formData.service}: ${formData.message}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-lg inline-flex items-center gap-2 transition-colors"
                      >
                        <WhatsAppIcon className="w-4 h-4" /> Send via WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Your full name"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:border-[#06412D] focus:ring-1 focus:ring-[#06412D] outline-none transition-colors bg-white" 
                  required 
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 07038164015"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:border-[#06412D] focus:ring-1 focus:ring-[#06412D] outline-none transition-colors bg-white" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:border-[#06412D] focus:ring-1 focus:ring-[#06412D] outline-none transition-colors bg-white" 
                    required 
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Service Needed</label>
                <select 
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:border-[#06412D] focus:ring-1 focus:ring-[#06412D] outline-none transition-colors bg-white" 
                  required
                >
                  <option value="">Select Service Needed</option>
                  <option value="wiring">Home & Industrial Wiring</option>
                  <option value="solar">Solar Power Systems</option>
                  <option value="inverter">Inverter & Battery Systems</option>
                  <option value="streetlights">Solar Street Lights Project</option>
                  <option value="camera">Camera Installation (CCTV)</option>
                  <option value="training">Technical Training (Learn Any of These)</option>
                  <option value="maintenance">Maintenance & Services</option>
                  <option value="engineering">Engineering & Consultancy</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea 
                  rows={5} 
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your project or inquiry..."
                  className="w-full p-4 border border-gray-300 rounded-lg focus:border-[#06412D] focus:ring-1 focus:ring-[#06412D] outline-none transition-colors resize-none bg-white" 
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#06412D] hover:bg-[#083D2A] text-white font-bold py-4 rounded-lg transition-colors text-lg flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                <Send className="w-5 h-5 text-[#D4AF37]" />
                <span>SEND MESSAGE</span>
              </button>
              <p className="text-xs text-gray-500 text-center">
                Submitting delivers your inquiry directly to <a href="mailto:peacesopeaceso@gmail.com" className="text-[#06412D] font-semibold underline hover:text-[#D4AF37]">peacesopeaceso@gmail.com</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#04281c] text-white pt-20 pb-8 border-t-[8px] border-[#D4AF37]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-2">XTOCOM QUALITY BASE ENTERPRISE</h3>
            <p className="text-[#D4AF37] font-medium mb-6">Electrical & Solar Engineering Company</p>
            <p className="text-gray-300 italic mb-8 border-l-4 border-[#D4AF37] pl-4 max-w-sm">
              "POWERING TODAY | SUSTAINING TOMORROW"
            </p>
            <div className="flex gap-4">
              <a 
                href="https://wa.me/2347038164015?text=Hello%20XTOCOM%20Quality%20Base%20Enterprise%2C%20I%20am%20messaging%20from%20your%20website." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#06412D] transition-colors"
                aria-label="Chat with XTOCOM on WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/search/top?q=XTOCOM%20Quality%20Base%20Enterprise" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#06412D] transition-colors"
                aria-label="Visit XTOCOM on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="mailto:peacesopeaceso@gmail.com?subject=Inquiry%20to%20XTOCOM%20Quality%20Base%20Enterprise&body=Hello%20XTOCOM%2C%0A%0AI%20am%20reaching%20out%20via%20your%20website." 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#06412D] transition-colors"
                aria-label="Send email to peacesopeaceso@gmail.com"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><a href="#home" className="hover:text-[#D4AF37] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#D4AF37] transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-[#D4AF37] transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li>
                <div className="flex flex-col gap-1">
                  <a href="tel:+2347038164015" className="hover:text-[#D4AF37] transition-colors">07038164015</a>
                  <a href="tel:+2347057301191" className="hover:text-[#D4AF37] transition-colors">07057301191</a>
                </div>
              </li>
              <li>
                <a 
                  href="mailto:peacesopeaceso@gmail.com?subject=Inquiry%20to%20XTOCOM%20Quality%20Base%20Enterprise&body=Hello%20XTOCOM%2C%0A%0AI%20would%20like%20to%20inquire%20about%20your%20services." 
                  className="hover:text-[#D4AF37] transition-colors break-all"
                >
                  peacesopeaceso@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/2347038164015?text=Hello%20XTOCOM%2C%20I%20am%20messaging%20from%20your%20website." target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors flex items-center gap-2">
                  WhatsApp: +234 703 816 4015
                </a>
              </li>
              <li className="pt-2">No. 43 Church Street, Jos, Plateau State, Nigeria</li>
              <li className="pt-2">
                <a 
                  href="https://www.facebook.com/search/top?q=XTOCOM%20Quality%20Base%20Enterprise" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Facebook: Xtocm Quality Base Enterprise
                </a>
              </li>
            </ul>
          </div>
          
        </div>

        <div className="border-t border-white/10 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} XTOCOM Quality Base Enterprise. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
