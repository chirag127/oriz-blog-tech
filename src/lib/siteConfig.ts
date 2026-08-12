export interface OrizSiteConfig {
  slug: string
  name: string
  origin: string
  tagline: string
  description?: string
}

export const SITE_CONFIG: OrizSiteConfig = {
  slug: 'tech',
  name: 'Tech',
  origin: 'https://tech-blog.oriz.in',
  tagline: 'Software, drawn to scale — field notes on building and running production systems',
  description:
    'A software-engineering blog by Chirag Singhal. Deep, buildable notes on shipping software — read like an engineering drawing set.',
}
