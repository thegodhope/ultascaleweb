import { BarChart3, BriefcaseBusiness, Cog, Palette, Rocket } from 'lucide-react';
import { Service } from '@/types';

export const services: Service[] = [
  { title: 'Product Development & Strategy', description: 'Design and build digital products with validated market fit.', icon: Rocket, bullets: ['Roadmapping', 'MVP Definition', 'UX/UI Optimization'] },
  { title: 'Branding & Creative', description: 'Craft standout brands that move buyers from awareness to trust.', icon: Palette, bullets: ['Identity Systems', 'Messaging Frameworks', 'Rebranding'] },
  { title: 'Talent & Execution', description: 'Deploy specialist teams for rapid execution and measurable output.', icon: BriefcaseBusiness, bullets: ['Curated Teams', 'On-Demand Specialists', 'Delivery Leadership'] },
  { title: 'Operations & Systems', description: 'Streamline workflows and build repeatable internal operating systems.', icon: Cog, bullets: ['SOP Development', 'Workflow Optimization', 'System Deployment'] },
  { title: 'Marketing & Revenue Growth', description: 'Scale qualified demand through strategic acquisition channels.', icon: BarChart3, bullets: ['SEO', 'Paid Advertising', 'Sales Funnels'] }
];

export const timeline = ['Concept', 'Development', 'Visibility', 'Scale', 'Revenue'];
