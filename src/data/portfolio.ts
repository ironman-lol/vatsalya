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
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
        alt: 'Living room with panoramic city views',
        aspectRatio: 16/9
      },
      {
        url: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115',
        alt: 'Custom brass-detailed kitchen',
        aspectRatio: 4/3
      },
      {
        url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb3',
        alt: 'Master bedroom with wooden accents',
        aspectRatio: 3/2
      }
    ],
    hero: {
      url: 'https://images.unsplash.com/photo-1600607687644-c7171b42498e',
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
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
        alt: 'Open plan co-working area',
        aspectRatio: 16/9
      },
      {
        url: 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76',
        alt: 'Meeting pods with living walls',
        aspectRatio: 1/1
      },
      {
        url: 'https://images.unsplash.com/photo-1519974719765-e6559eac2575',
        alt: 'Cafe and breakout space',
        aspectRatio: 3/2
      }
    ],
    hero: {
      url: 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76',
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
        url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9',
        alt: 'Restored facade with traditional features',
        aspectRatio: 16/9
      },
      {
        url: 'https://images.unsplash.com/photo-1600585152915-d208bec867a1',
        alt: 'Modern kitchen in historical setting',
        aspectRatio: 4/3
      },
      {
        url: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea',
        alt: 'Courtyard with preserved tiles',
        aspectRatio: 1/1
      }
    ],
    hero: {
      url: 'https://images.unsplash.com/photo-1600566752229-250ed26470e2',
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
        url: '/assets/portfolio/zen-apartment/01.jpg',
        alt: 'Minimalist living space',
        aspectRatio: 16/9
      },
      {
        url: '/assets/portfolio/zen-apartment/02.jpg',
        alt: 'Japanese-inspired bedroom',
        aspectRatio: 4/3
      },
      {
        url: '/assets/portfolio/zen-apartment/03.jpg',
        alt: 'Tea room with custom woodwork',
        aspectRatio: 3/2
      }
    ],
    hero: {
      url: '/assets/portfolio/zen-apartment/hero.jpg',
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
        url: '/assets/portfolio/retail-concept/01.jpg',
        alt: 'Store entrance with dramatic lighting',
        aspectRatio: 16/9
      },
      {
        url: '/assets/portfolio/retail-concept/02.jpg',
        alt: 'Custom display systems',
        aspectRatio: 1/1
      },
      {
        url: '/assets/portfolio/retail-concept/03.jpg',
        alt: 'VIP shopping lounge',
        aspectRatio: 3/2
      }
    ],
    hero: {
      url: '/assets/portfolio/retail-concept/hero.jpg',
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
        url: '/assets/portfolio/garden-house/01.jpg',
        alt: 'House exterior with green roof',
        aspectRatio: 16/9
      },
      {
        url: '/assets/portfolio/garden-house/02.jpg',
        alt: 'Indoor-outdoor living space',
        aspectRatio: 4/3
      },
      {
        url: '/assets/portfolio/garden-house/03.jpg',
        alt: 'Native garden design',
        aspectRatio: 3/2
      }
    ],
    hero: {
      url: '/assets/portfolio/garden-house/hero.jpg',
      alt: 'Garden House exterior view',
      blurDataUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRg...' // TODO: Generate LQIP
    },
    category: 'residential',
    pdfBrochure: '/assets/portfolio/garden-house/brochure.pdf'
  }
];