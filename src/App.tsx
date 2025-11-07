import { useState, useEffect } from 'react';
import { Moon, Sun, Home, Search, Shield, Globe, Facebook, Instagram, Twitter, Mail } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950 transition-colors duration-500">

        {/* Navbar */}
        <nav
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrollY > 50
              ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg'
              : 'bg-transparent'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center transform rotate-12">
                <Home className="text-white w-6 h-6 -rotate-12" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Nest Finder
              </span>
            </div>

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:scale-110 transition-transform duration-300"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6">
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Modern house exterior"
              className="absolute inset-0 w-full h-full object-cover opacity-40 dark:opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80 dark:from-gray-900/70 dark:via-gray-900/60 dark:to-gray-900/90"></div>
          </div>

          <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8 transition-opacity duration-700 opacity-100">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight">
              Discover Your{" "}
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(56,189,248,0.6)]">
                Perfect Nest
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              The smart way to rent, list, and discover homes — anywhere in
              Bangladesh and beyond 🌍
            </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <a
                href="#"
                className="group flex items-center gap-3 px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-80">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </a>

              <a
                href="#"
                className="group flex items-center gap-3 px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-80">GET IT ON</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://img.staticmb.com/mbcontent/images/crop/uploads/2022/12/tips-to-find-house-for-rent_0_1200.jpg.webp"
                  alt="Home rental"
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-gray-200/50 dark:border-gray-700/50 transform hover:scale-[1.02] transition-all duration-500">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  About Nest Finder
                </h2>

                <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>
                    Nest Finder is a next-generation home rental platform built to make finding or renting a home effortless. Whether you're looking for a cozy apartment in Dhaka or a modern studio abroad, Nest Finder brings verified listings, smart search tools, and real connections together in one app.
                  </p>

                  <p>
                    Our mission is simple — to help everyone find their perfect place to live. From landlords to tenants, Nest Finder builds trust through technology and community.
                  </p>

                  <p className="text-xl font-semibold pt-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Born in Bangladesh, built for the world. 🌍
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 px-6 bg-gradient-to-b from-transparent to-blue-50/50 dark:to-blue-950/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">
              Powerful Features
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={<Search className="w-10 h-10" />}
                title="Smart Search"
                description="Filter homes by location, price, and facilities."
                gradient="from-blue-500 to-cyan-500"
                image="https://media.istockphoto.com/id/827615404/photo/paper-house-under-a-magnifying-lens.jpg?s=612x612&w=0&k=20&c=97KzqjE4gKtU5P0Bs3xFwbOLzNJtwWAnYPUZO1ZaaQI="
              />

              <FeatureCard
                icon={<Home className="w-10 h-10" />}
                title="Instant Booking"
                description="Rent verified properties instantly."
                gradient="from-purple-500 to-pink-500"
                image="https://img.choice.com.au/-/media/5f86cb8f3a5c4695a7fe5ee21f3f215b.ashx"
              />

              <FeatureCard
                icon={<Globe className="w-10 h-10" />}
                title="Global Reach"
                description="Available for use anywhere in the world."
                gradient="from-green-500 to-teal-500"
                image="https://mummyscholar.wordpress.com/wp-content/uploads/2015/10/home-pic-mummyscholar.png"
              />

              <FeatureCard
                icon={<Shield className="w-10 h-10" />}
                title="Secure Platform"
                description="Every listing is verified for trust and safety."
                gradient="from-orange-500 to-red-500"
                image="https://prolink.insure/wp-content/uploads/2023/11/Home-Security.png"
              />
            </div>
          </div>
        </section>

        {/* Call To Action */}
        <section id="cta" className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Team"
              className="absolute inset-0 w-full h-full object-cover opacity-20 dark:opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-10 dark:opacity-20"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
              Ready to Find Your Nest?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Join thousands of users finding their perfect home every day.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <a
                href="#"
                className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-90">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </a>

              <a
                href="#"
                className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-90">GET IT ON</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 bg-gray-900 dark:bg-black text-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center transform rotate-12">
                  <Home className="text-white w-6 h-6 -rotate-12" />
                </div>
                <span className="text-2xl font-bold">Nest Finder</span>
              </div>

              <div className="flex items-center gap-6">
                <a href="#" className="hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-pink-400 transition-colors duration-300 hover:scale-110 transform">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="mailto:support@nestfinder.app" className="hover:text-purple-400 transition-colors duration-300 hover:scale-110 transform">
                  <Mail className="w-6 h-6" />
                </a>
              </div>

              <div className="text-center md:text-right text-gray-400">
                <p className="mt-2">&copy; 2025 Nest Finder. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  image: string;
}

function FeatureCard({ icon, title, description, gradient, image }: FeatureCardProps) {
  return (
    <div className="group relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 hover:-translate-y-2">
      <div className="relative h-40 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40"></div>
      </div>

      <div className="p-8">
        <div
          className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 -mt-12 relative z-10 shadow-lg`}
        >
          {icon}
        </div>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default App;
