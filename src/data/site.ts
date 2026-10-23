/**
 * Site-wide details: name, default description, navigation and profile links.
 * Everything that mentions these elsewhere on the site reads them from here.
 */

export const SITE = {
  name: 'Duot Kuer Duot',
  /** Default description for search engines and link previews. */
  description:
    'I work with data and AI, explore ideas across disciplines, and build things aimed at solving real problems.',
  location: 'Nairobi, Kenya',
  /** Language of the site content, used for the <html lang> attribute. */
  lang: 'en',
} as const;

/** The four primary pages, in the order they appear in the navigation. */
export const NAVIGATION = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Explorations', href: '/explorations' },
] as const;

export interface Profile {
  /** Text used for the link, e.g. "GitHub". */
  label: string;
  /** Full URL of the profile. */
  href: string;
}

/**
 * External profiles. Used in the footer (in this order) and on the About page.
 * To add another profile, add an entry here; the footer picks it up automatically.
 */
export const PROFILES = {
  github: { label: 'GitHub', href: 'https://github.com/duotkuerduot' },
  substack: { label: 'Substack', href: 'https://duotkuerduot.substack.com' },
  medium: { label: 'Medium', href: 'https://medium.com/@duotkuerduot' },
} as const satisfies Record<string, Profile>;
