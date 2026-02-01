import { 
  Phone, 
  Calendar, 
  Clock, 
  MapPin, 
  Heart, 
  Stethoscope, 
  Brain, 
  Baby, 
  Users,
  Activity,
  Shield,
  Award,
  Microscope,
  Ambulance,
  ChevronRight,
  Star,
  CheckCircle2,
  Building2,
  Mail,
  ArrowRight
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-800">CityCare</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-slate-600 hover:text-sky-600 transition-colors">About</a>
              <a href="#departments" className="text-slate-600 hover:text-sky-600 transition-colors">Departments</a>
              <a href="#doctors" className="text-slate-600 hover:text-sky-600 transition-colors">Doctors</a>
              <a href="#facilities" className="text-slate-600 hover:text-sky-600 transition-colors">Facilities</a>
              <a href="#contact" className="text-slate-600 hover:text-sky-600 transition-colors">Contact</a>
            </div>
            <div className="flex items-center gap-4">
              <a href="tel:+911234567890" className="hidden sm:flex items-center gap-2 text-sky-600 font-medium">
                <Phone className="w-4 h-4" />
                <span>Emergency</span>
              </a>
              <a href="#appointment" className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-2.5 rounded-lg font-medium transition-colors">
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-emerald-50" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-sky-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-100 rounded-full blur-3xl opacity-50" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInUp">
              <div className="inline-flex items-center gap-2 bg-sky-50 text-sky-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4" />
                <span>NABH Accredited Hospital</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Advanced Healthcare.
                <span className="text-sky-600"> Compassionate Treatment.</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-xl">
                Experience world-class medical care with our team of experienced specialists, 
                state-of-the-art facilities, and patient-first approach. Your health is our priority.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#appointment" className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-sky-200">
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                </a>
                <a href="tel:+911234567890" className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-emerald-200">
                  <Phone className="w-5 h-5" />
                  Emergency: 108
                </a>
              </div>
              <div className="mt-10 flex items-center gap-8">
                <div>
                  <div className="text-3xl font-bold text-slate-900">25+</div>
                  <div className="text-slate-500">Years Experience</div>
                </div>
                <div className="w-px h-12 bg-slate-200" />
                <div>
                  <div className="text-3xl font-bold text-slate-900">50+</div>
                  <div className="text-slate-500">Expert Doctors</div>
                </div>
                <div className="w-px h-12 bg-slate-200" />
                <div>
                  <div className="text-3xl font-bold text-slate-900">100K+</div>
                  <div className="text-slate-500">Patients Treated</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative bg-gradient-to-br from-sky-100 to-emerald-100 rounded-3xl p-8 lg:p-12">
                <div className="aspect-square bg-white rounded-2xl shadow-xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Stethoscope className="w-12 h-12 text-sky-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">24/7 Emergency Care</h3>
                    <p className="text-slate-600 mb-6">Round-the-clock emergency services with rapid response</p>
                    <div className="flex items-center justify-center gap-4 text-sm text-slate-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        Always Open
                      </span>
                      <span className="flex items-center gap-1">
                        <Phone className="w-4 h-4" />
                        108
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sky-600 font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-6">
                Trusted Healthcare Partner for Over 25 Years
              </h2>
              <p className="text-slate-600 text-lg mb-6">
                CityCare Hospital has been at the forefront of medical excellence since 1999. 
                We combine cutting-edge technology with compassionate care to deliver the best 
                possible outcomes for our patients.
              </p>
              <p className="text-slate-600 mb-8">
                Our mission is to provide accessible, high-quality healthcare that puts patients first. 
                We believe in treating not just the condition, but the whole person.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Patient-Centric</h4>
                    <p className="text-sm text-slate-500">Care tailored to your needs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Advanced Technology</h4>
                    <p className="text-sm text-slate-500">Latest medical equipment</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Expert Team</h4>
                    <p className="text-sm text-slate-500">Highly qualified doctors</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Quality Care</h4>
                    <p className="text-sm text-slate-500">International standards</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-slate-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Accreditations & Certifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                    <div className="text-2xl font-bold text-sky-600">NABH</div>
                    <div className="text-sm text-slate-500">Accredited</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                    <div className="text-2xl font-bold text-sky-600">ISO</div>
                    <div className="text-sm text-slate-500">9001:2015</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                    <div className="text-2xl font-bold text-sky-600">NABL</div>
                    <div className="text-sm text-slate-500">Certified Lab</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                    <div className="text-2xl font-bold text-sky-600">JCI</div>
                    <div className="text-sm text-slate-500">Member</div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-sky-500 to-emerald-500 rounded-2xl p-8 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <Heart className="w-8 h-8" />
                  <h3 className="text-xl font-bold">Our Values</h3>
                </div>
                <p className="text-white/90">
                  Compassion, Integrity, Excellence, and Innovation guide everything we do. 
                  We are committed to making healthcare accessible and affordable for all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section id="departments" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sky-600 font-semibold text-sm uppercase tracking-wider">Our Specialties</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">
              Comprehensive Medical Departments
            </h2>
            <p className="text-slate-600">
              We offer a wide range of medical specialties with expert doctors and advanced facilities 
              to provide complete healthcare under one roof.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, name: "Cardiology", desc: "Heart care & surgeries", color: "bg-rose-100 text-rose-600" },
              { icon: Activity, name: "Orthopedics", desc: "Bone & joint care", color: "bg-blue-100 text-blue-600" },
              { icon: Brain, name: "Neurology", desc: "Brain & nervous system", color: "bg-purple-100 text-purple-600" },
              { icon: Baby, name: "Pediatrics", desc: "Child healthcare", color: "bg-amber-100 text-amber-600" },
              { icon: Users, name: "Gynecology", desc: "Women's health", color: "bg-pink-100 text-pink-600" },
              { icon: Stethoscope, name: "General Medicine", desc: "Primary healthcare", color: "bg-emerald-100 text-emerald-600" },
              { icon: Ambulance, name: "Emergency & ICU", desc: "24/7 critical care", color: "bg-red-100 text-red-600" },
              { icon: Microscope, name: "Diagnostics", desc: "Lab & imaging", color: "bg-cyan-100 text-cyan-600" },
            ].map((dept, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow group cursor-pointer">
                <div className={`w-14 h-14 ${dept.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <dept.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{dept.name}</h3>
                <p className="text-slate-500 text-sm">{dept.desc}</p>
                <div className="mt-4 flex items-center text-sky-600 text-sm font-medium">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12">
            <div>
              <span className="text-sky-600 font-semibold text-sm uppercase tracking-wider">Our Team</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3">
                Meet Our Expert Doctors
              </h2>
            </div>
            <a href="#" className="mt-4 sm:mt-0 inline-flex items-center text-sky-600 font-medium hover:text-sky-700">
              View All Doctors
              <ChevronRight className="w-5 h-5 ml-1" />
            </a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Dr. Rajesh Sharma", specialty: "Cardiology", exp: "20+ years", qual: "MD, DM (Cardiology)" },
              { name: "Dr. Priya Patel", specialty: "Gynecology", exp: "15+ years", qual: "MD, DGO" },
              { name: "Dr. Amit Kumar", specialty: "Orthopedics", exp: "18+ years", qual: "MS (Ortho), MCh" },
              { name: "Dr. Sunita Gupta", specialty: "Pediatrics", exp: "12+ years", qual: "MD (Pediatrics)" },
            ].map((doctor, idx) => (
              <div key={`doctor-${idx}`} className="bg-slate-50 rounded-2xl overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-sky-100 to-emerald-100 flex items-center justify-center">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md">
                    <Users className="w-12 h-12 text-slate-400" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900">{doctor.name}</h3>
                  <p className="text-sky-600 font-medium text-sm">{doctor.specialty}</p>
                  <p className="text-slate-500 text-sm mt-1">{doctor.qual}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-slate-500">{doctor.exp}</span>
                    <button className="text-sky-600 text-sm font-medium hover:underline">Book Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sky-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">
              Healthcare Excellence You Can Trust
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Clock, title: "24/7 Emergency Services", desc: "Round-the-clock emergency care with rapid response teams always ready." },
              { icon: Award, title: "Experienced Specialists", desc: "Team of highly qualified doctors with decades of combined experience." },
              { icon: Microscope, title: "Advanced Equipment", desc: "State-of-the-art medical technology for accurate diagnosis and treatment." },
              { icon: Shield, title: "Safe Environment", desc: "Strict hygiene protocols and infection control measures in place." },
              { icon: Heart, title: "Patient-Centric Care", desc: "Personalized treatment plans focused on your unique healthcare needs." },
              { icon: Building2, title: "Modern Infrastructure", desc: "World-class facilities designed for patient comfort and care." },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-sky-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section id="appointment" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sky-600 font-semibold text-sm uppercase tracking-wider">Book Appointment</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-6">
                Schedule Your Visit Today
              </h2>
              <p className="text-slate-600 text-lg mb-8">
                Book an appointment with our expert doctors. Fill in the form and we will 
                confirm your appointment within 24 hours.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Phone</div>
                    <div className="text-slate-600">+91 12345 67890</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Email</div>
                    <div className="text-slate-600">appointments@citycare.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Working Hours</div>
                    <div className="text-slate-600">Mon - Sat: 8:00 AM - 8:00 PM</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Patient Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all" placeholder="Enter your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all" placeholder="Enter phone number" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Department</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all bg-white">
                      <option>Select Department</option>
                      <option>Cardiology</option>
                      <option>Orthopedics</option>
                      <option>Neurology</option>
                      <option>Pediatrics</option>
                      <option>Gynecology</option>
                      <option>General Medicine</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Date</label>
                    <input type="date" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message (Optional)</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all resize-none" placeholder="Describe your symptoms or concerns"></textarea>
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" id="privacy" className="mt-1 w-4 h-4 text-sky-600 rounded border-slate-300 focus:ring-sky-500" />
                  <label htmlFor="privacy" className="text-sm text-slate-600">
                    I agree to the privacy policy and consent to sharing my information for appointment booking purposes.
                  </label>
                </div>
                <button type="submit" className="w-full bg-sky-500 hover:bg-sky-600 text-white py-4 rounded-xl font-semibold transition-colors">
                  Book Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sky-600 font-semibold text-sm uppercase tracking-wider">Facilities</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">
              World-Class Infrastructure
            </h2>
            <p className="text-slate-600">
              Our hospital is equipped with modern facilities to ensure the best care and comfort 
              for our patients.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "ICU", desc: "Advanced intensive care units with monitoring systems" },
              { title: "Operation Theatres", desc: "Modular OTs with laminar airflow and advanced equipment" },
              { title: "Pharmacy", desc: "24/7 pharmacy with genuine medicines" },
              { title: "Laboratory", desc: "NABL accredited diagnostic laboratory" },
              { title: "Ambulance", desc: "Fully equipped ambulances with life support" },
              { title: "Cafeteria", desc: "Hygienic food services for patients and visitors" },
            ].map((facility, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-sky-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{facility.title}</h3>
                <p className="text-slate-600">{facility.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sky-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">
              What Our Patients Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Ramesh Kumar", text: "Excellent care and professional staff. The doctors took time to explain everything. Highly recommended!", rating: 5 },
              { name: "Priya Sharma", text: "The best hospital experience I've had. Clean facilities, caring nurses, and skilled doctors.", rating: 5 },
              { name: "Amit Patel", text: "Emergency response was quick and efficient. Saved my father's life. Forever grateful.", rating: 5 },
            ].map((testimonial, idx) => (
              <div key={`testimonial-${idx}`} className="bg-slate-50 rounded-2xl p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-sky-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-500">Verified Patient</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency & Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Phone className="w-4 h-4" />
                <span>24/7 Emergency</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Emergency? We are Here to Help
              </h2>
              <p className="text-slate-300 text-lg mb-8">
                Our emergency department is open 24/7 with rapid response teams ready to 
                handle any medical emergency.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
                <div className="text-sm text-slate-400 mb-2">Emergency Hotline</div>
                <a href="tel:108" className="text-4xl font-bold text-white hover:text-sky-400 transition-colors">
                  108
                </a>
                <div className="text-slate-400 mt-2">Toll-free emergency number</div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-sky-400" />
                  <span className="text-slate-300">123 Healthcare Avenue, Medical District, City - 123456</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-sky-400" />
                  <span className="text-slate-300">+91 12345 67890</span>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="w-6 h-6 text-sky-400" />
                  <span className="text-slate-300">Open 24/7 for Emergency</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-800 rounded-2xl p-4 h-96">
              <div className="w-full h-full bg-slate-700 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-sky-400 mx-auto mb-4" />
                  <p className="text-slate-400">Google Maps Embed</p>
                  <p className="text-slate-500 text-sm">123 Healthcare Avenue</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">CityCare</span>
              </div>
              <p className="text-sm leading-relaxed">
                Providing world-class healthcare with compassion and excellence since 1999.
                Your health is our priority.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:text-sky-400 transition-colors">About Us</a></li>
                <li><a href="#departments" className="hover:text-sky-400 transition-colors">Departments</a></li>
                <li><a href="#doctors" className="hover:text-sky-400 transition-colors">Our Doctors</a></li>
                <li><a href="#facilities" className="hover:text-sky-400 transition-colors">Facilities</a></li>
                <li><a href="#appointment" className="hover:text-sky-400 transition-colors">Book Appointment</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Departments</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-sky-400 transition-colors">Cardiology</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Orthopedics</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Neurology</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Pediatrics</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Gynecology</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  123 Healthcare Avenue, City
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +91 12345 67890
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  info@citycare.com
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm">© 2024 CityCare Hospital. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-sky-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-sky-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-sky-400 transition-colors">Legal</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
