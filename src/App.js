import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, Github, ExternalLink, Download, MapPin, Calendar, Award, Code, Linkedin } from 'lucide-react';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState({});
  const [currentSection, setCurrentSection] = useState('hero');
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // MOVED THE FUNCTION HERE
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white text-black min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold">Danny Kim</div>
            <div className="hidden md:flex space-x-8">
              {['about', 'experience', 'projects', 'resume', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors hover:text-gray-700 ${
                    currentSection === section ? 'text-black' : 'text-gray-500'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative">
        <div className="text-center px-4 max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Danny Kim
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-4">
              Deployment Strategist @ Palantir Technologies
            </h2>
            <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-2xl mx-auto">
              Harvard graduate with expertise in product, data science, and AI.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => scrollToSection('resume')}
                className="px-8 py-3 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105"
              >
                View Resume
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 border border-gray-300 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border border-gray-300 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-500" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 delay-300 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl font-bold mb-16 text-center">About</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Korean-born Harvard graduate and product leader driven by leveraging a unique blend of statistical expertise and bicultural perspective to build transformative solutions that reshape how people approach the world.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Currently serving as a Deployment Strategist at Palantir Technologies, I specialize in bridging the gap between complex data systems to create real-world applications that leverage AI. My experience spans product management, data science, and strategic implementation across fintech and government sectors.
                </p>
                <div className="flex items-center gap-4 text-gray-500">
                  <MapPin className="w-5 h-5" />
                  <span>Washington, DC / McLean, VA</span>
                </div>
              </div>
              <div className="flex justify-center">
                <img 
                  src="/photo.jpg" 
                  alt="A professional photo of Danny Kim" 
                  className="w-80 h-80 rounded-2xl object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>  
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 delay-300 ${isVisible.experience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl font-bold mb-16 text-center">Experience</h2>
            <div className="space-y-8">
              {[
                {
                  title: "Deployment Strategist",
                  company: "Palantir Technologies – US Government Division",
                  location: "Washington, DC",
                  period: "Apr 2025 - Present",
                  highlights: [
                    "Leading strategic implementation of data solutions for government clients",
                    "Bridging technical capabilities with operational requirements",
                    "Driving adoption and optimization of Palantir's platform solutions"
                  ]
                },
                {
                  title: "Sr. Associate Product Manager",
                  company: "Capital One - Product Development Program",
                  location: "McLean, VA",
                  period: "Jan 2025 - Mar 2025",
                  highlights: [
                    "Led product strategy and launch of company's first spending analytics visualization feature",
                    "Drove executive stakeholder alignment to scale from beta to 100% of consumer credit card users",
                    "Successfully scaled innovative financial insights to millions of users"
                  ]
                },
                {
                  title: "Associate Product Manager",
                  company: "Capital One",
                  location: "McLean, VA",
                  period: "Aug 2023 - Dec 2024",
                  highlights: [
                    "Spearheaded CPP feature release achieving 23% improvement in customer spending confidence",
                    "Boosted CPP adoption rates fivefold through targeted campaigns and mobile interstitials",
                    "Developed self-serve model monitoring solution standardizing ML drift detection enterprise-wide"
                  ]
                },
                {
                  title: "Data Engineering Intern",
                  company: "iCapital – AI/ML Fintech Platform",
                  location: "New York, NY",
                  period: "Jun 2022 - Aug 2022",
                  highlights: [
                    "Developed ML pipeline for content personalization using AWS SageMaker",
                    "Achieved 30% growth in SIMON marketplace's monthly active users",
                    "Managed end-to-end data workflows using Apache Airflow"
                  ]
                }
              ].map((job, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">{job.title}</h3>
                      <h4 className="text-lg text-gray-600 mb-2">{job.company}</h4>
                      <div className="flex items-center gap-4 text-gray-500 mb-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{job.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {job.highlights.map((highlight, i) => (
                      <li key={i} className="text-gray-600 flex items-start">
                        <span className="text-gray-400 mr-3">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 delay-300 ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl font-bold mb-16 text-center">Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "SwingSwipe",
                  description: "Mobile app platform for golfers to upload swings, receive community feedback, and track progress. Achieved 35 organic downloads on App Store.",
                  tech: ["React Native", "iOS", "Community Platform"],
                  status: "Live on App Store",
                  link: "https://apps.apple.com/us/app/swingswipe/id6738357762"
                },
                {
                  title: "SwapR Marketplace",
                  description: "Community-based marketplace for safe trading of used goods. Gained 100+ users and facilitated 100+ transactions in first 2 months.",
                  tech: ["Web App", "Instagram", "Marketplace"],
                  status: "MVP Launched",
                  link: "https://swaprmarket.glide.page"
                },
                {
                  title: "Sports ML Analysis",
                  description: "Predicted MLB team win rates and FIFA player performance using advanced regression models, random forests, and boosting techniques.",
                  tech: ["Python", "Machine Learning", "Data Analysis"],
                  status: "Research Project",
                  link: "https://github.com/calckorgo82"
                }
              ].map((project, index) => (
                <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 group h-full flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-black group-hover:text-gray-800">{project.title}</h3>
                      <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-black transition-colors" />
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-sm text-green-600">{project.status}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 delay-300 ${isVisible.resume ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl font-bold mb-16 text-center">Resume</h2>
            
            <div className="text-center mb-12">
              <a 
                href="https://docs.google.com/document/d/1wgXjoNKEW_FpTLz4521kiyZ_IBSxWi4ocFpmBXlpZfc/edit?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <button className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105">
                  <Download className="w-5 h-5" />
                  View Full Resume
                </button>
              </a>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-6 h-6 text-gray-500" />
                  <h3 className="text-xl font-bold">Education</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-black">Harvard University</h4>
                    <p className="text-gray-600">A.B. in Statistics/Data Science</p>
                    <p className="text-gray-500">Cambridge, MA</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-6 h-6 text-gray-500" />
                  <h3 className="text-xl font-bold">Certifications</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-black">Product Manager Machine Learning</h4>
                    <p className="text-gray-600">Capital One & UC Berkeley Haas</p>
                    <p className="text-gray-500">May 2024</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="w-6 h-6 text-gray-500" />
                  <h3 className="text-xl font-bold">Technical Skills</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['Foundry', 'AI Prompting', 'Python', 'SQL', 'R', 'JavaScript', 'HTML/CSS', 'Scikit-learn', 'Tableau', 'Figma', 'JIRA', 'AWS'].map((skill) => (
                    <div key={skill} className="px-3 py-2 bg-gray-100 text-center rounded-lg text-gray-600">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 delay-300 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl font-bold mb-16 text-center">Get In Touch</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-gray-500" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Email</p>
                      <a href="mailto:dannykim00926@gmail.com" className="text-black hover:underline">
                        dannykim00926@gmail.com
                      </a>
                    </div>
                  </div>
                  {/* Phone */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-gray-500" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Phone</p>
                      <a href="tel:+12028730949" className="text-black hover:underline">
                        202-873-0949
                      </a>
                    </div>
                  </div>
                  {/* GitHub */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <Github className="w-5 h-5 text-gray-500" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">GitHub</p>
                      <a href="https://github.com/calckorgo82" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">
                        github.com/calckorgo82
                      </a>
                    </div>
                  </div>
                  {/* LinkedIn */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <Linkedin className="w-5 h-5 text-gray-500" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">LinkedIn</p>
                      <a href="https://www.linkedin.com/in/dannykim3" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">
                        linkedin.com/in/dannykim3
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6">Send a Message</h3>
                <div className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formState.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-xl text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formState.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-xl text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Your Message"
                      value={formState.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-xl text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none"
                    />
                  </div>
                  <a
                    href={`mailto:dannykim00926@gmail.com?subject=Message from ${encodeURIComponent(formState.name)} (${encodeURIComponent(formState.email)})&body=${encodeURIComponent(formState.message)}`}
                    className="block w-full text-center px-8 py-3 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                  >
                    Send Message
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">© 2025 Danny Kim. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="https://github.com/calckorgo82" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/dannykim3" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:dannykim00926@gmail.com" className="text-gray-500 hover:text-black transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;