/**
 * Things being built, investigated or explored.
 *
 * Shown on the Explorations page and under "Selected explorations" on the home
 * page, in the order listed here. Both pages read from this list, so names,
 * descriptions and links stay consistent.
 */

export interface Exploration {
  title: string;
  /** Short label shown with the title, e.g. "Healthcare AI". */
  category: string;
  description: string;
  /** Optional external link. Leave it out when there is nothing public to link to yet. */
  link?: {
    label: string;
    href: string;
  };
}

export const EXPLORATIONS: readonly Exploration[] = [
  {
    title: 'QDoctor',
    category: 'Healthcare AI',
    description:
      'An AI project exploring how machine learning and evidence-oriented AI systems can help healthcare professionals work with reliable medical information.',
    link: {
      label: 'View on GitHub',
      href: 'https://github.com/duotkuerduot/QDoctor-2.0',
    },
  },
  {
    title: 'AI agents for personal finance',
    category: 'AI agents · Personal finance',
    description:
      'Exploring how AI agents can support personal financial management, help people make sense of their finances, and assist with everyday financial decisions.',
    link: {
      label: 'View on GitHub',
      href: 'https://github.com/duotkuerduot/Financial-ai',
    },
  },
  {
    title: 'AI for drug discovery',
    category: 'Artificial intelligence · Drug discovery',
    description: 'I am currently heavily exploring using AI for drug discovery.',
  },
];
