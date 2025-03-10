import React, { useState } from 'react';
import { 
  Code,
  Layout,
  Server,
  Shield,
  Smartphone,
  Database,
  Cloud,
  Github,
  Linkedin,
  Twitter,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      icon: <Layout className="h-8 w-8 text-blue-600" />,
      title: "Développement Frontend",
      description: "Interfaces modernes et réactives avec React, Vue.js et Next.js"
    },
    {
      icon: <Server className="h-8 w-8 text-blue-600" />,
      title: "Développement Backend",
      description: "APIs robustes et évolutives avec Node.js et TypeScript"
    },
    {
      icon: <Cloud className="h-8 w-8 text-blue-600" />,
      title: "Solutions Cloud",
      description: "Déploiement et architecture sur AWS, GCP et Azure"
    }
  ];

  const projects = [
    {
      title: "Plateforme E-commerce",
      description: "Solution e-commerce complète avec paiement intégré et gestion des stocks en temps réel",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      tech: ["React", "Node.js", "Stripe", "MongoDB"],
      stats: {
        "Clients": "1.2K",
        "Ventes": "150K€",
        "Produits": "5K+"
      }
    },
    {
      title: "Dashboard Analytics",
      description: "Tableau de bord analytique avec visualisations de données avancées et rapports personnalisables",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      tech: ["Vue.js", "D3.js", "Firebase", "TypeScript"],
      stats: {
        "Utilisateurs": "5K",
        "Rapports": "12K",
        "Données": "2TB"
      }
    },
    {
      title: "Application Mobile",
      description: "Application cross-platform de gestion de projet avec suivi en temps réel et notifications",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      tech: ["React Native", "Redux", "Node.js", "PostgreSQL"],
      stats: {
        "Téléchargements": "10K",
        "Projets": "2.5K",
        "Équipes": "500+"
      }
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-lg z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold gradient-text">DevPro</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['Services', 'Projets', 'Expertise', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="nav-link text-gray-600 hover:text-blue-600 transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/80"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animate-fade-in">
              Solutions Numériques Innovantes
            </h1>
            <p className="text-xl text-gray-200 mb-10 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Expertise en développement web et mobile pour transformer vos idées en réalité
            </p>
            <div className="flex justify-center space-x-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <a href="#contact" className="btn-primary px-8 py-3 text-white rounded-lg font-medium flex items-center">
                Démarrer un projet
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#projets" className="px-8 py-3 text-white border-2 border-white rounded-lg font-medium hover:bg-white/10 transition">
                Voir nos réalisations
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gradient-to-b from-gray-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">Nos Services</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div key={index} className="service-card p-8 rounded-xl bg-white/10 backdrop-blur-lg border border-white/10 text-white">
                <div className="mb-6">
                  {React.cloneElement(service.icon, { className: "h-8 w-8 text-blue-400" })}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="py-20 bg-gradient-to-b from-blue-900 to-gray-900 relative">
        <div className="absolute inset-0 opacity-5">
          <img
            src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">Notre Expertise</h2>
          <div className="expertise-grid">
            {[
              { icon: <Code />, title: "Frontend", items: ["React", "Vue.js", "Next.js", "TypeScript"] },
              { icon: <Server />, title: "Backend", items: ["Node.js", "Express", "PostgreSQL", "MongoDB"] },
              { icon: <Smartphone />, title: "Mobile", items: ["React Native", "Flutter", "iOS", "Android"] },
              { icon: <Database />, title: "Base de données", items: ["SQL", "NoSQL", "Redis", "GraphQL"] }
            ].map((expertise, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/10">
                <div className="text-blue-400 mb-4">
                  {React.cloneElement(expertise.icon, { className: "h-8 w-8" })}
                </div>
                <h3 className="text-lg font-bold mb-4 text-white">{expertise.title}</h3>
                <ul className="space-y-2">
                  {expertise.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projets" className="py-20 bg-gradient-to-b from-gray-900 to-blue-900 relative">
        <div className="absolute inset-0 opacity-5">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">Projets Récents</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="project-card rounded-xl overflow-hidden bg-white/10 backdrop-blur-lg border border-white/10">
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-blue-400 font-bold">{value}</div>
                          <div className="text-gray-400 text-sm">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gradient-to-b from-blue-900 to-gray-900 relative">
        <div className="absolute inset-0 opacity-5">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-white">Contactez-nous</h2>
            <p className="text-center text-gray-300 mb-12">
              Prêt à donner vie à votre projet ? Discutons-en ensemble.
            </p>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2">Nom</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full btn-primary text-white py-3 rounded-lg font-medium"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-8 md:mb-0">
              <Code className="h-6 w-6 text-blue-400" />
              <span className="ml-2 text-xl font-bold text-white">DevPro</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500">
            <p>&copy; 2024 DevPro. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;