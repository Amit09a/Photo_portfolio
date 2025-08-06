import React from 'react';
import { Award, Users, Calendar } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Calendar, number: '1', label: 'Years Experience' },
    { icon: Users, number: '25', label: 'Happy Clients' }
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://ik.imagekit.io/xype4aqhh/WhatsApp%20Image%202025-07-28%20at%207.41.22%20PM.jpeg?updatedAt=1754481809826"
                alt="Amit Meena - Photographer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl -z-10"></div>
          </div>

          {/* Right Side - Content */}
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About Me
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              I'm Amit Meena, a passionate photographer based in Delhi  
              capturing life's most precious moments. I have Just started My journey with a simple camera and an insatiable 
              curiosity about the world around me.
            </p>
            
            <p className="text-lg text-gray-400 mb-10 leading-relaxed">
              Specializing in portrait, landscape, and street photography, I believe every photograph tells a story. 
              My approach combines technical expertise with artistic vision to create images that not only capture 
              moments but evoke emotions and preserve memories for generations.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="h-8 w-8 text-white mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;