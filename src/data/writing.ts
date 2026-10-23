/**
 * Published writing shown on the Blog page and in "Recent writing" on the home page.
 *
 * Articles stay on the platform where they were published; the site links to the
 * original. To add a new piece, add an entry to ARTICLES below. The order of the
 * list does not matter: entries are sorted by date, newest first.
 */

/** Categories offered by the toggle on the Blog page, in display order. */
export const WRITING_CATEGORIES = ['Artistic', 'Technical'] as const;

export type WritingCategory = (typeof WRITING_CATEGORIES)[number];

export interface Article {
  /** Title as published. */
  title: string;
  /** Link to the original publication. */
  url: string;
  /** Decides which side of the Artistic / Technical toggle the article appears on. */
  category: WritingCategory;
  /** Where the article is published, e.g. "Substack" or "Medium". */
  platform: string;
  /** One or two sentences about the piece. */
  description: string;
  /** Publication date as YYYY-MM-DD. Optional: only add a date you have checked. */
  published?: `${number}-${number}-${number}`;
}

export const ARTICLES: readonly Article[] = [
  {
    title: 'The Heir',
    url: 'https://duotkuerduot.substack.com/p/the-heir',
    category: 'Artistic',
    platform: 'Substack',
    description:
      'On inheriting a hard-won country: a call for South Sudan’s younger generation to stop blaming its ageing liberators and start building.',
    published: '2026-04-23',
  },
  {
    title: 'Building QDoctor: An Agentic AI for Clinical Mental Health Triage in Kenya',
    url: 'https://medium.com/@duotkuerduot/building-qdoctor-an-agentic-ai-for-clinical-mental-health-triage-in-kenya-21a521a6e9d5',
    category: 'Technical',
    platform: 'Medium',
    description:
      'An account of building QDoctor, an agentic AI system for clinical mental-health triage in Kenya, exploring evidence retrieval, search fusion, query analysis, answer validation, and the engineering decisions behind the system.',
    published: '2026-04-11',
  },
  {
    title: 'Let Everyone Dream',
    url: 'https://duotkuerduot.substack.com/p/let-everyone-dream',
    category: 'Artistic',
    platform: 'Substack',
    description:
      'A case for the fields people call useless, told through the tardigrade and what its biology could mean for medicine, space travel and food security.',
    published: '2026-04-03',
  },
];

/** Lower-case identifier for a category, used in markup and URLs (?category=technical). */
export function categorySlug(category: WritingCategory): string {
  return category.toLowerCase();
}

/** Returns a copy sorted newest first. Undated articles keep their order at the end. */
export function newestFirst(articles: readonly Article[]): Article[] {
  return [...articles].sort((a, b) => (b.published ?? '').localeCompare(a.published ?? ''));
}
