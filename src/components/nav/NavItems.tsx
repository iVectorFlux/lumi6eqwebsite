import React from 'react';
import { Link } from 'react-router-dom';
import { NavLinkItem } from './NavLinkItem';
import { NavDropdown } from './NavDropdown';
import { navItems, isDropdown, isLink } from '@/config/nav';

type NavItemsDesktopProps = {
  openDropdownIndex: number | null;
  setOpenDropdownIndex: (index: number | null) => void;
};

export const NavItemsDesktop: React.FC<NavItemsDesktopProps> = ({
  openDropdownIndex,
  setOpenDropdownIndex,
}) => {
  return (
    <div className="hidden md:flex items-center gap-8">
      {navItems.map((item, index) => {
        if (isLink(item)) {
          return <NavLinkItem key={item.href} item={item} />;
        }
        if (isDropdown(item)) {
          return (
            <NavDropdown
              key={item.label}
              item={item}
              isOpen={openDropdownIndex === index}
              onOpen={() => setOpenDropdownIndex(index)}
              onClose={() => setOpenDropdownIndex(null)}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

type NavItemsMobileProps = {
  onItemClick: () => void;
  openSections: Set<number>;
  toggleSection: (index: number) => void;
};

export const NavItemsMobile: React.FC<NavItemsMobileProps> = ({
  onItemClick,
  openSections,
  toggleSection,
}) => {
  return (
    <div className="flex flex-col gap-0">
      {navItems.map((item, index) => {
        if (isLink(item)) {
          return (
            <NavLinkItem
              key={item.href}
              item={item}
              onClick={onItemClick}
              className="block py-3 px-2"
            />
          );
        }
        if (isDropdown(item)) {
          const isOpen = openSections.has(index);
          const entries = item.view === 'card' ? item.items ?? [] : item.groups?.flatMap((g) => g.items) ?? [];
          const accentClasses = ['bg-purple-100', 'bg-orange-100', 'bg-blue-100', 'bg-gray-100'];
          return (
            <div key={item.label} className="border-b border-gray-100 pb-2">
              <button
                type="button"
                className="w-full flex items-center justify-between font-semibold text-gray-700 hover:text-rebuttl-blue py-3 px-2 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={() => toggleSection(index)}
                aria-expanded={isOpen}
              >
                <span>{item.label}</span>
                <span className={`transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}>›</span>
              </button>
              {isOpen && (
                <div className="pl-2 mt-1 flex flex-col gap-0.5">
                  {entries.map((entry, i) => (
                    <NavDropdownMobileEntry
                      key={`${entry.href}-${i}`}
                      entry={entry}
                      accentClass={accentClasses[i % accentClasses.length]}
                      onClick={onItemClick}
                    />
                  ))}
                  {item.footerHref && (
                    <Link
                      to={item.footerHref}
                      className="text-sm font-medium text-gray-500 hover:text-rebuttl-blue py-2 px-3"
                      onClick={onItemClick}
                    >
                      {item.footerLabel ?? 'View all'}
                    </Link>
                  )}
                </div>
              )}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

function NavDropdownMobileEntry({
  entry,
  accentClass,
  onClick,
}: {
  entry: { label: string; href: string; description?: string; icon?: string };
  accentClass: string;
  onClick: () => void;
}) {
  return (
    <Link
      to={entry.href}
      className="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-gray-50 text-gray-700 hover:text-rebuttl-blue transition-colors"
      onClick={onClick}
    >
      <div className={`w-9 h-9 rounded-lg ${accentClass} flex items-center justify-center flex-shrink-0`}>
        {entry.icon ? <img src={entry.icon} alt="" className="w-5 h-5 object-contain" /> : null}
      </div>
      <div className="text-left">
        <span className="font-medium block">{entry.label}</span>
        {entry.description && <span className="text-xs text-gray-500">{entry.description}</span>}
      </div>
    </Link>
  );
}
