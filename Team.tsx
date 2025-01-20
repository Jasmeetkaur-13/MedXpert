import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Team = () => {
  const team = [
    {
      name: "Zain shaikh",
      role: "Data analytics",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400",
      bio: "Transforming data into insights for business growth.",
       links: {
        github: "#",
        linkedin: "#",
        email: "mailto:sarah@healthai.com"
      }
    },
    {
      name: "Jaydev",
      role: "Machine learning",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400",
      bio: "Specialist in medical AI and machine learning algorithms.",
      links: {
        github: "#",
        linkedin: "#",
        email: "mailto:michael@healthai.com"
      }
    },
    {
      name: "JasmeetKaur",
      role: "Frontend Developer",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400&h=400",
      bio: "Creates intuitive interfaces for healthcare professionals",
      links: {
        github: "#",
        linkedin: "#",
        email: "mailto:emily@healthai.com"
      }
    },
    {
      name: "Kunal Jadhav",
      role: "UI/UX Designer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400",
      bio: "Creates intuitive interfaces for healthcare professionals",
      links: {
        github: "#",
        linkedin: "#",
        email: "mailto:alex@healthai.com"
      }
    }
  ];

  return (
    <div id="team" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            The brilliant minds behind MedXpert's innovation
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="relative w-full h-80 rounded-lg overflow-hidden group-hover:opacity-90 transition-opacity duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-200 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-300">
                    {member.role}
                  </p>
                  <p className="mt-2 text-l text-black-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {member.bio}
                  </p>
                  <div className="mt-4 flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={member.links.github}
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href={member.links.linkedin}
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={member.links.email}
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;