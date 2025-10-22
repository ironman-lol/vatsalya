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
  category: 'residential' | 'commercial' | 'renovation' | 'interiors';
  pdfBrochure?: string;
}

export const projects: Project[] = [
  {
    slug: 'skyline-penthouse',
    title: 'Skyline Penthouse',
    location: 'Mumbai, India',
    year: 2025,
    services: ['Interior Design', 'Space Planning', 'Custom Furniture'],
    description: 'A luxurious penthouse merging contemporary design with traditional Indian elements. Floor-to-ceiling windows frame panoramic city views while custom brass details accent rich wooden surfaces.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221',
        alt: 'Living room with panoramic city views',
        aspectRatio: 16/9
      },
      {
        url: 'https://images.unsplash.com/photo-1600210491369-e753d80a41f3',
        alt: 'Custom brass-detailed kitchen',
        aspectRatio: 4/3
      },
      {
        url: 'https://images.unsplash.com/photo-1632829882891-5047ccc421bc',
        alt: 'Master bedroom with wooden accents',
        aspectRatio: 3/2
      }
    ],
    hero: {
      url: 'https://images.unsplash.com/photo-1600210491369-e753d80a41f3',
      alt: 'Skyline Penthouse main living area',
      blurDataUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRg...' // TODO: Generate LQIP
    },
    category: 'residential',
    pdfBrochure: '/assets/portfolio/skyline-penthouse/brochure.pdf'
  },
  {
    slug: 'urban-workspace',
    title: 'Urban Co-Working Space',
    location: 'Bangalore, India',
    year: 2024,
    services: ['Commercial Design', 'Space Planning', 'Lighting Design'],
    description: 'A dynamic co-working environment designed for creativity and collaboration. Industrial elements meet biophilic design with an emphasis on natural light and flexible workspaces.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2',
        alt: 'Open plan co-working area',
        aspectRatio: 16/9
      },
      {
        url: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2',
        alt: 'Meeting pods with living walls',
        aspectRatio: 1/1
      },
      {
        url: 'https://images.unsplash.com/photo-1577412647305-991150c7d163',
        alt: 'Cafe and breakout space',
        aspectRatio: 3/2
      }
    ],
    hero: {
      url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2',
      alt: 'Urban Workspace central atrium',
      blurDataUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRg...' // TODO: Generate LQIP
    },
    category: 'commercial'
  },
  {
    slug: 'heritage-renovation',
    title: 'Heritage Villa Restoration',
    location: 'Goa, India',
    year: 2024,
    services: ['Restoration', 'Interior Design', 'Historical Preservation'],
    description: 'Careful restoration of a 19th-century Portuguese villa, preserving original features while integrating modern amenities. Traditional materials and techniques were used alongside contemporary interventions.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92',
        alt: 'Restored facade with traditional features',
        aspectRatio: 16/9
      },
      {
        url: 'https://images.unsplash.com/photo-1501183638710-841dd1904471',
        alt: 'Modern kitchen in historical setting',
        aspectRatio: 4/3
      },
      {
        url: 'https://images.unsplash.com/photo-1582037928769-181f2644ecb7',
        alt: 'Courtyard with preserved tiles',
        aspectRatio: 1/1
      }
    ],
    hero: {
      url: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92',
      alt: 'Heritage Villa exterior view',
      blurDataUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRg...' // TODO: Generate LQIP
    },
    category: 'renovation'
  },
  {
    slug: 'zen-apartment',
    title: 'Zen City Apartment',
    location: 'Delhi, India',
    year: 2025,
    services: ['Interior Design', 'Furniture Design', 'Styling'],
    description: 'A minimalist urban retreat emphasizing calm and functionality. Clean lines and natural materials create a sense of peace within the bustling city.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c',
        alt: 'Minimalist living space',
        aspectRatio: 16/9
      },
      {
        url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
        alt: 'Japanese-inspired bedroom',
        aspectRatio: 4/3
      },
      {
        url: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf',
        alt: 'Tea room with custom woodwork',
        aspectRatio: 3/2
      }
    ],
    hero: {
      url: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c',
      alt: 'Zen Apartment main space',
      blurDataUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRg...' // TODO: Generate LQIP
    },
    category: 'interiors'
  },
  {
    slug: 'retail-concept',
    title: 'Luxury Retail Concept',
    location: 'Mumbai, India',
    year: 2025,
    services: ['Commercial Design', 'Lighting Design', 'Visual Merchandising'],
    description: 'A flagship retail space that redefines luxury shopping through immersive design. Dynamic lighting and modular displays create ever-changing experiences.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db',
        alt: 'Store entrance with dramatic lighting',
        aspectRatio: 16/9
      },
      {
        url: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5',
        alt: 'Custom display systems',
        aspectRatio: 1/1
      },
      {
        url: 'https://images.unsplash.com/photo-1519420573924-65fcd45245f8',
        alt: 'VIP shopping lounge',
        aspectRatio: 3/2
      }
    ],
    hero: {
      url: 'https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db',
      alt: 'Retail Concept main hall',
      blurDataUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRg...' // TODO: Generate LQIP
    },
    category: 'commercial'
  },
  {
    slug: 'garden-house',
    title: 'Garden House',
    location: 'Pune, India',
    year: 2024,
    services: ['Architecture', 'Landscape Design', 'Interior Design'],
    description: 'A sustainable family home that dissolves the boundaries between inside and outside. Extensive glazing and green roofs create a seamless connection with the surrounding garden.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1613977257363-707ba9348227',
        alt: 'House exterior with green roof',
        aspectRatio: 16/9
      },
      {
        url: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154',
        alt: 'Indoor-outdoor living space',
        aspectRatio: 4/3
      },
      {
        url: 'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4',
        alt: 'Native garden design',
        aspectRatio: 3/2
      }
    ],
    hero: {
      url: 'https://images.unsplash.com/photo-1613977257363-707ba9348227',
      alt: 'Garden House exterior view',
      blurDataUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRg...' // TODO: Generate LQIP
    },
    category: 'residential',
    pdfBrochure: '/assets/portfolio/garden-house/brochure.pdf'
  }
];