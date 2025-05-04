import React from 'react';
import { BookOpen, Award, Users, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-orange-500 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Student Tech Magazine</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Empowering the next generation of technology innovators and thinkers through quality content and community.
          </p>
        </div>
      </div>
      
      {/* Mission Statement */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-orange-500 mb-6">Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Student Tech Magazine is dedicated to bridging the gap between academic learning and real-world technology applications. 
              We believe that students are the future architects of technological innovation, and our mission is to equip them with 
              the knowledge, insights, and inspiration they need to thrive in a rapidly evolving tech landscape.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Through high-quality articles, interviews with industry leaders, and coverage of cutting-edge developments, 
              we aim to foster a community of curious, informed, and engaged tech enthusiasts who will shape the digital world of tomorrow.
            </p>
          </div>
        </div>
      </div>
      
      {/* Values */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Educational Excellence</h3>
              <p className="text-gray-600">
                We're committed to providing accurate, informative, and educational content that helps students 
                expand their knowledge and skills in technology.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation Focus</h3>
              <p className="text-gray-600">
                We celebrate and explore innovative ideas, emerging technologies, and forward-thinking approaches 
                that are shaping the future of tech.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Community Building</h3>
              <p className="text-gray-600">
                We foster a supportive community where students can connect, collaborate, and learn from each other 
                across diverse backgrounds and disciplines.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Global Perspective</h3>
              <p className="text-gray-600">
                We embrace diverse viewpoints and international perspectives, recognizing that technology 
                transcends borders and connects people worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Team Section */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" 
                alt="Sarah Johnson" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Sarah Johnson</h3>
                <p className="text-orange-500 mb-4">Editor-in-Chief</p>
                <p className="text-gray-600">
                  With over 10 years in tech journalism, Sarah leads our editorial team with passion and expertise.
                </p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <img 
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg" 
                alt="Michael Chen" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Michael Chen</h3>
                <p className="text-orange-500 mb-4">Technical Director</p>
                <p className="text-gray-600">
                  A software engineer turned writer, Michael ensures our technical content is accurate and accessible.
                </p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <img 
                src="https://images.pexels.com/photos/3799832/pexels-photo-3799832.jpeg" 
                alt="Aisha Patel" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Aisha Patel</h3>
                <p className="text-orange-500 mb-4">Community Manager</p>
                <p className="text-gray-600">
                  Aisha builds bridges between our readers, contributors, and the broader tech community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;