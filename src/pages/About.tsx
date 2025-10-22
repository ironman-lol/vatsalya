import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { fadeIn } from '../lib/animations';
import type { TeamMember } from '../types';

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'John Doe',
    role: 'Principal Designer',
    bio: 'With over 15 years of experience in interior design, John brings creativity and expertise to every project.',
    imageUrl: '/assets/team/john-doe.jpg',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/johndoe'
    }
  }
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us - Vatsalya Interior Design</title>
        <meta
          name="description"
          content="Learn about our team and our approach to interior design."
        />
      </Helmet>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="container py-32"
      >
        <h1 className="text-4xl font-bold mb-12">About Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600">
              At Vatsalya, we believe that great design has the power to transform lives.
              Our mission is to create spaces that not only look beautiful but also
              enhance the way people live, work, and interact.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Values</h2>
            <ul className="space-y-2 text-gray-600">
              <li>Innovation in design</li>
              <li>Attention to detail</li>
              <li>Client satisfaction</li>
              <li>Sustainability</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-8">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={member.imageUrl}
                alt={`${member.name} - ${member.role}`}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
                <p className="mt-2 text-gray-600">{member.bio}</p>
                {member.socialLinks && (
                  <div className="mt-4">
                    {member.socialLinks.linkedin && (
                      <a
                        href={member.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-yellow hover:text-brand-black"
                      >
                        LinkedIn
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
}
