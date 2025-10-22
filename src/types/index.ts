// Type definitions for form data
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Type definitions for project data
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: ProjectCategory;
  completionDate: string;
  client: string;
  tags: string[];
}

export type ProjectCategory = 'residential' | 'commercial' | 'hospitality' | 'retail';

// Type definitions for team member data
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

// Type definitions for navigation items
export interface NavItem {
  label: string;
  path: string;
  icon?: React.ReactNode;
}

// Type definitions for button props
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children: React.ReactNode;
}

// Type definitions for animation variants
export interface AnimationVariants {
  hidden: object;
  visible: object;
}
