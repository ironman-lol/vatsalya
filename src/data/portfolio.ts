// src/data/portfolio.ts
export interface Project {
  slug: string;
  title: string;
  location: string;
  year: number;
  services: string[];
  description: string;
  images: {
    url: string;
    alt: string;
    aspectRatio: number;
  }[];
  hero: {
    url: string;
    alt: string;
    blurDataUrl: string; // Base64 LQIP placeholder
  };
  category: 'living-room' | 'modular-kitchen' | 'bedroom';
  pdfBrochure?: string;
}

export const projects: Project[] = [
  {
    slug: 'modern-living-room',
    title: 'Contemporary Living Space',
    location: 'Mumbai, India',
    year: 2025,
    services: ['Interior Design', 'Space Planning', 'Custom Furniture'],
    description: 'A luxurious living room design that combines modern aesthetics with comfort. Floor-to-ceiling windows frame panoramic city views while custom details accent rich wooden surfaces.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221',
        alt: 'Living room with panoramic city views',
        aspectRatio: 16/9
      },
      {
        url: 'https://images.unsplash.com/photo-1600210491369-e753d80a41f3',
        alt: 'Custom entertainment center',
        aspectRatio: 4/3
      },
      {
        url: 'https://images.unsplash.com/photo-1632829882891-5047ccc421bc',
        alt: 'Seating area with accent lighting',
        aspectRatio: 3/2
      }
    ],
    hero: {
      url: 'https://images.unsplash.com/photo-1600210491369-e753d80a41f3',
      alt: 'Modern living room main view',
      blurDataUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRg...' // TODO: Generate LQIP
    },
    category: 'living-room',
    pdfBrochure: '/assets/portfolio/modern-living-room/brochure.pdf'
  },
  {
    slug: 'luxury-kitchen',
    title: 'Smart Modular Kitchen',
    location: 'Bangalore, India',
    year: 2024,
    services: ['Kitchen Design', 'Storage Solutions', 'Lighting Design'],
    description: 'A state-of-the-art modular kitchen featuring smart storage solutions, premium appliances, and ergonomic design. Perfect blend of functionality and aesthetic appeal.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2',
        alt: 'Modern kitchen with island',
        aspectRatio: 16/9
      },
      {
        url: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2',
        alt: 'Built-in appliances',
        aspectRatio: 1/1
      },
      {
        url: 'https://images.unsplash.com/photo-1577412647305-991150c7d163',
        alt: 'Storage solutions showcase',
        aspectRatio: 3/2
      }
    ],
    hero: {
      url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2',
      alt: 'Luxury modular kitchen',
      blurDataUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRg...' // TODO: Generate LQIP
    },
    category: 'modular-kitchen'
  },
  {
    slug: 'master-bedroom',
    title: 'Serene Master Suite',
    location: 'Delhi, India',
    year: 2025,
    services: ['Bedroom Design', 'Custom Furniture', 'Lighting Design'],
    description: 'A tranquil master bedroom that combines luxury with comfort. Features custom storage solutions, ambient lighting, and premium materials for a peaceful retreat.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c',
        alt: 'Master bedroom overview',
        aspectRatio: 16/9
      },
      {
        url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
        alt: 'Custom wardrobe design',
        aspectRatio: 4/3
      },
      {
        url: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf',
        alt: 'Reading nook with custom lighting',
        aspectRatio: 3/2
      }
    ],
    hero: {
      url: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c',
      alt: 'Luxury master bedroom',
      blurDataUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRg...' // TODO: Generate LQIP
    },
    category: 'bedroom'
  },
  {
    slug: 'minimalist-bedroom',
    title: 'Minimalist Guest Room',
    location: 'Pune, India',
    year: 2024,
    services: ['Interior Design', 'Space Optimization', 'Storage Solutions'],
    description: 'A thoughtfully designed guest bedroom that maximizes space while maintaining style. Clean lines and smart storage solutions create a welcoming atmosphere.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1613977257363-707ba9348227',
        alt: 'Minimalist bedroom design',
        aspectRatio: 16/9
      },
      {
        url: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154',
        alt: 'Built-in storage solutions',
        aspectRatio: 4/3
      },
      {
        url: 'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4',
        alt: 'Work corner in bedroom',
        aspectRatio: 3/2
      }
    ],
    hero: {
      url: 'https://images.unsplash.com/photo-1613977257363-707ba9348227',
      alt: 'Minimalist bedroom view',
      blurDataUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRg...' // TODO: Generate LQIP
    },
    category: 'bedroom'
  }
];