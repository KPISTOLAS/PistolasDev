import React from 'react';
import { ExternalLink, Github, Smartphone } from 'lucide-react';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Email Sender Automation Using Spring Boot",
      description: "An automated email sending system built with Spring Boot that allows for scheduled and triggered email communications.",
      technologies: ["Java", "Spring Boot", "SMTP", "Thymeleaf"],
      link: "https://github.com/KPISTOLAS/EmailSender",
      icon: <Github className="h-10 w-10 text-indigo-500" />
    },
    {
      id: 2,
      title: "Product Management Web App for eShop Items",
      description: "A comprehensive web application for managing e-commerce products, including inventory tracking, categorization, and pricing management.",
      technologies: ["Java", "Spring Boot", "MySQL", "Thymeleaf", "Bootstrap"],
      link: "https://github.com/KPISTOLAS/Product_Managment",
      icon: <ExternalLink className="h-10 w-10 text-indigo-500" />
    },
    {
      id: 3,
      title: "Currency Converter Android App",
      description: "A mobile application that provides real-time currency conversion between multiple international currencies.",
      technologies: ["Android", "Java", "API Integration", "Material Design"],
      link: "https://play.google.com/store/apps/details?id=com.pistolascode.converter&pli=1",
      icon: <Smartphone className="h-10 w-10 text-indigo-500" />
    }
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">My Projects</span>
            <span className="block text-indigo-600 mt-2">What I've Built</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
            A showcase of my technical work and development projects
          </p>
        </div>

        <div className="mt-16 space-y-12">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
              <div className="px-6 py-8 sm:p-10 sm:pb-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    {project.icon}
                  </div>
                  <div className="ml-5">
                    <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                  </div>
                </div>
                <div className="mt-5">
                  <p className="text-lg text-gray-700">{project.description}</p>
                </div>
                <div className="mt-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="px-6 pt-6 pb-8 bg-gray-50 border-t border-gray-200">
                <div className="flex items-center">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    View Project
                    <ExternalLink className="ml-2 -mr-1 h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;