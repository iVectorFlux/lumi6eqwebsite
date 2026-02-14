import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight } from 'lucide-react';
import type { NavDropdownItem as NavDropdownItemType, NavDropdownEntry } from '@/config/nav';

const accentClasses: Record<string, { bg: string; hover: string }> = {
  purple: { bg: 'from-purple-100 to-purple-200', hover: 'hover:bg-purple-50/80' },
  orange: { bg: 'from-orange-100 to-amber-200', hover: 'hover:bg-orange-50/80' },
  blue: { bg: 'from-blue-100 to-blue-200', hover: 'hover:bg-blue-50/80' },
  gray: { bg: 'from-gray-100 to-gray-200', hover: 'hover:bg-gray-50/80' },
};

function getAccent(index: number) {
  const keys = Object.keys(accentClasses);
  return accentClasses[keys[index % keys.length]] ?? accentClasses.gray;
}

type CardPanelProps = {
  item: NavDropdownItemType;
  onClose: () => void;
};

function CardPanel({ item, onClose }: CardPanelProps) {
  if (!item.items?.length) return null;
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[320px] sm:w-[400px]">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <div
          className="grid gap-0"
          style={{
            gridTemplateColumns: `repeat(${Math.min(item.items.length, 3)}, 1fr)`,
          }}
        >
          {item.items.map((entry, i) => (
            <DropdownEntryLink key={entry.href} entry={entry} accent={getAccent(i)} onClose={onClose} card />
          ))}
        </div>
        {item.footerHref && (
          <Link
            to={item.footerHref}
            className="block text-center py-3 text-sm font-medium text-gray-500 hover:text-rebuttl-blue hover:bg-gray-50 transition-colors border-t border-gray-100"
            onClick={onClose}
          >
            {item.footerLabel ?? 'View all'}
          </Link>
        )}
      </div>
    </div>
  );
}

type MegaPanelProps = {
  item: NavDropdownItemType;
  onClose: () => void;
};

function MegaPanel({ item, onClose }: MegaPanelProps) {
  if (!item.groups?.length) return null;
  return (
    <div className="absolute top-full left-0 pt-3 w-full min-w-[560px] max-w-[720px]">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-6 max-h-[70vh] overflow-y-auto">
          {item.groups.map((group) => (
            <div key={group.groupLabel}>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">{group.groupLabel}</p>
              <ul className="space-y-1">
                {group.items.map((entry) => (
                  <li key={entry.href}>
                    <Link
                      to={entry.href}
                      className="block py-2 px-2 -mx-2 rounded-lg text-gray-700 hover:text-rebuttl-blue hover:bg-gray-50 transition-colors font-medium"
                      onClick={onClose}
                    >
                      {entry.label}
                      {entry.description && (
                        <span className="block text-xs font-normal text-gray-500 mt-0.5">{entry.description}</span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {item.footerHref && (
          <Link
            to={item.footerHref}
            className="block text-center py-3 text-sm font-medium text-gray-500 hover:text-rebuttl-blue hover:bg-gray-50 transition-colors border-t border-gray-100"
            onClick={onClose}
          >
            {item.footerLabel ?? 'View all'}
          </Link>
        )}
      </div>
    </div>
  );
}

type DropdownEntryLinkProps = {
  entry: NavDropdownEntry;
  accent: { bg: string; hover: string };
  onClose: () => void;
  card?: boolean;
};

function DropdownEntryLink({ entry, accent, onClose, card }: DropdownEntryLinkProps) {
  const content = (
    <>
      {entry.icon && (
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${accent.bg} flex items-center justify-center mb-3 flex-shrink-0`}>
          <img src={entry.icon} alt="" className="w-7 h-7 object-contain" />
        </div>
      )}
      <span className="font-bold text-gray-800 group-hover:text-rebuttl-blue transition-colors">{entry.label}</span>
      {entry.description && <span className="text-sm text-gray-500 mt-0.5">{entry.description}</span>}
      {card && (
        <span className="inline-flex items-center gap-1 text-sm font-medium text-rebuttl-blue mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
          Learn more <ArrowRight className="w-3.5 h-3.5" />
        </span>
      )}
    </>
  );
  const className = `group flex flex-col p-5 transition-colors border-r border-gray-100 last:border-r-0 ${accent.hover}`;
  return (
    <Link to={entry.href} className={className} onClick={onClose}>
      {content}
    </Link>
  );
}

type NavDropdownProps = {
  item: NavDropdownItemType;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const NavDropdown: React.FC<NavDropdownProps> = ({ item, isOpen, onOpen, onClose }) => {
  return (
    <div className="relative" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <span className="font-semibold text-gray-700 hover:text-rebuttl-blue transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-rebuttl-blue after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left inline-flex items-center gap-1 cursor-default">
        {item.label}
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </span>
      {isOpen && item.view === 'card' && <CardPanel item={item} onClose={onClose} />}
      {isOpen && item.view === 'mega' && <MegaPanel item={item} onClose={onClose} />}
    </div>
  );
};
