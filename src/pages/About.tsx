import React from 'react';
import {
  Flame,
  Code,
  Database,
  Shield,
  Music,
  Users,
  Cpu,
  Cog,
} from 'lucide-react';
import pistolasLogo from './assets/img/pistolasdev-high-resolution-logo-transparent.png';

function About() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Konstantinos Pistolas</span>
              <span className="block text-indigo-600 mt-2">
                Computer Scientist & Developer
              </span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
              Bridging technology and community through innovation and
              dedication
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Left Column - Photo and Quick Info */}
          <div className="lg:col-span-4">
            <div className="bg-white shadow rounded-lg overflow-hidden mb-6">
              <div className="p-6">
                <img
                  src={pistolasLogo}
                  alt="Profile"
                  className="w-full h-auto object-contain rounded-lg mb-6"
                />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  At a Glance
                </h2>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Cpu className="h-5 w-5 text-indigo-500 mr-2" />
                    <span className="text-gray-700">
                      Computer Science Student
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Code className="h-5 w-5 text-indigo-500 mr-2" />
                    <span className="text-gray-700">Software Developer</span>
                  </div>
                  <div className="flex items-center">
                    <Database className="h-5 w-5 text-indigo-500 mr-2" />
                    <span className="text-gray-700">
                      Data Analysis Enthusiast
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-indigo-500 mr-2" />
                    <span className="text-gray-700">
                      Cybersecurity Team Member
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Cog className="h-5 w-5 text-indigo-500 mr-2" />
                    <span className="text-gray-700">Robotics Team Member</span>
                  </div>
                  <div className="flex items-center">
                    <Flame className="h-5 w-5 text-indigo-500 mr-2" />
                    <span className="text-gray-700">Volunteer Firefighter</span>
                  </div>
                  <div className="flex items-center">
                    <Music className="h-5 w-5 text-indigo-500 mr-2" />
                    <span className="text-gray-700">
                      Traditional Greek Dancer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Bio Content */}
          <div className="lg:col-span-8">
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="px-6 py-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  About Me
                </h2>

                <div className="prose max-w-none text-gray-700 space-y-6">
                  <p className="text-lg leading-relaxed">
                    I am a dedicated 3rd-year Computer Science student at
                    Democritus University of Thrace in Kavala, Greece, with a
                    deep passion for technology and innovation. My academic
                    journey has been driven by curiosity and a desire to create
                    meaningful solutions through code.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                    Technical Expertise
                  </h3>
                  <p className="leading-relaxed">
                    My technical interests span across software development,
                    robotics, and data analysis. I've built diverse projects
                    leveraging Java, Spring Boot, Arduino, and Raspberry Pi
                    technologies. I approach each project with a problem-solving
                    mindset, constantly seeking innovative ways to overcome
                    challenges in machine learning, backend development, and
                    cybersecurity.
                  </p>

                  <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100 my-6">
                    <h4 className="text-lg font-medium text-indigo-800 mb-2">
                      Core Technical Skills
                    </h4>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
                      <span className="bg-white px-3 py-1 rounded-full text-sm text-indigo-600 border border-indigo-200">
                        Java
                      </span>
                      <span className="bg-white px-3 py-1 rounded-full text-sm text-indigo-600 border border-indigo-200">
                        Spring Boot
                      </span>
                      <span className="bg-white px-3 py-1 rounded-full text-sm text-indigo-600 border border-indigo-200">
                        Arduino
                      </span>
                      <span className="bg-white px-3 py-1 rounded-full text-sm text-indigo-600 border border-indigo-200">
                        Raspberry Pi
                      </span>
                      <span className="bg-white px-3 py-1 rounded-full text-sm text-indigo-600 border border-indigo-200">
                        Data Analysis
                      </span>
                      <span className="bg-white px-3 py-1 rounded-full text-sm text-indigo-600 border border-indigo-200">
                        Web Development
                      </span>
                      <span className="bg-white px-3 py-1 rounded-full text-sm text-indigo-600 border border-indigo-200">
                        Robotics
                      </span>
                      <span className="bg-white px-3 py-1 rounded-full text-sm text-indigo-600 border border-indigo-200">
                        Cybersecurity
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                    Community Involvement
                  </h3>
                  <p className="leading-relaxed">
                    Beyond academics, I'm deeply committed to community service
                    as a Volunteer Firefighter and active participant in
                    university-led initiatives. These experiences have
                    strengthened my teamwork abilities and leadership skills
                    while keeping me connected to the community I serve.
                  </p>

                  <p className="leading-relaxed">
                    I'm also an engaged member of my university's robotics and
                    cybersecurity teams, where I collaborate with talented peers
                    on exciting projects and competitions. These team
                    environments have taught me the value of diverse
                    perspectives and collaborative problem-solving.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                    Cultural Pursuits
                  </h3>
                  <p className="leading-relaxed">
                    My passion for traditional Greek dancing as a member of a
                    dance group represents my commitment to cultural heritage. I
                    believe this balance between cutting-edge technology and
                    traditional cultural activities enhances my creativity and
                    provides a well-rounded perspective that informs my work.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                    Future Vision
                  </h3>
                  <p className="leading-relaxed">
                    Looking ahead, I aim to leverage my technical skills and
                    community-minded approach to create impactful software and
                    robotics solutions that address real-world problems. I'm
                    committed to continuous learning and growth, always seeking
                    new challenges that push the boundaries of what's possible
                    in technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
