/**
 * Navbar configuration: single source of truth for all nav items.
 *
 * Important: each item in a dropdown is a full page. Every `href` below is a route
 * to a dedicated page (e.g. Solutions → "For HR" → /solutions/hr is its own page).
 *
 * - link: single top-level link (one page)
 * - dropdown (card): 2–6 items, each item = one page; use when you have few options
 * - dropdown (mega): many items (10–20+), each item = one page; use groups to organize
 *   (e.g. Solutions with "By role" and "By use case" columns, each entry links to its page)
 */

export type NavLinkItem = {
  type: 'link';
  label: string;
  href: string;
  external?: boolean;
};

/** One dropdown entry = one full page. href is the route to that page. */
export type NavDropdownEntry = {
  label: string;
  href: string;
  description?: string;
  icon?: string;
};

export type NavDropdownGroup = {
  groupLabel: string;
  items: NavDropdownEntry[];
};

export type NavDropdownItem = {
  type: 'dropdown';
  label: string;
  /** 'card' = compact panel (2–6 items, each = page). 'mega' = many items (each = page), use groups */
  view: 'card' | 'mega';
  /** For card view: flat list; each entry is a page */
  items?: NavDropdownEntry[];
  /** For mega view: grouped columns; each entry in each group is a page */
  groups?: NavDropdownGroup[];
  footerHref?: string;
  footerLabel?: string;
};

export type NavItem = NavLinkItem | NavDropdownItem;

export function isDropdown(item: NavItem): item is NavDropdownItem {
  return item.type === 'dropdown';
}

export function isLink(item: NavItem): item is NavLinkItem {
  return item.type === 'link';
}

// ——— Config: edit below to add/remove nav items ———

const DISCOVER_ICON = 'https://lumi6-dev.s3.eu-north-1.amazonaws.com/EQ/discovery-and-assess.svg';
const GROW_ICON = 'https://lumi6-dev.s3.eu-north-1.amazonaws.com/EQ/learn-.svg';

export const navItems: NavItem[] = [
  {
    type: 'dropdown',
    label: 'Products',
    view: 'card',
    items: [
      { label: 'Discover', href: '/products/discover', description: 'Assess & insights', icon: DISCOVER_ICON },
      { label: 'Grow', href: '/products/grow', description: 'Learning & nudges', icon: GROW_ICON },
    ],
    footerHref: '/products',
    footerLabel: 'View all products',
  },
  { type: 'link', label: 'Education', href: '/education' },
  { type: 'link', label: 'Individuals', href: '/individuals' },
  { type: 'link', label: 'Blogs', href: '/blogs' },
];

/**
 * Example: "Solutions" with many items — each item is its own page.
 * Add a route per href (e.g. /solutions/hr, /solutions/ld) and a page component for each.
 * Uncomment and add to navItems when ready.
 */
// export const solutionsNavExample: NavDropdownItem = {
//   type: 'dropdown',
//   label: 'Solutions',
//   view: 'mega',
//   groups: [
//     {
//       groupLabel: 'By role',
//       items: [
//         { label: 'For HR', href: '/solutions/hr', description: 'Talent & culture' },
//         { label: 'For L&D', href: '/solutions/ld', description: 'Learning programs' },
//         { label: 'For Coaches', href: '/solutions/coaches', description: 'Coaching tools' },
//         { label: 'For Leaders', href: '/solutions/leaders', description: 'Leadership EQ' },
//         // ... add more; each href = one page
//       ],
//     },
//     {
//       groupLabel: 'By use case',
//       items: [
//         { label: 'Hiring & Assessment', href: '/solutions/hiring' },
//         { label: 'Team Development', href: '/solutions/team-development' },
//         { label: 'Wellbeing', href: '/solutions/wellbeing' },
//         // ... add more; each href = one page
//       ],
//     },
//   ],
//   footerHref: '/solutions',
//   footerLabel: 'View all solutions',
// };

export const signInUrl = 'https://app.lumi6.com/login';
export const signUpUrl = 'https://app.lumi6.com/signup';
