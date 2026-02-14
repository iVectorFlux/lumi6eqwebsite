import React from 'react';
import { Link } from 'react-router-dom';
import type { NavLinkItem as NavLinkItemType } from '@/config/nav';

const linkBase =
  'font-semibold text-gray-700 hover:text-rebuttl-blue transition-colors relative after:content-[""] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-rebuttl-blue after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left';

type Props = {
  item: NavLinkItemType;
  onClick?: () => void;
  className?: string;
};

export const NavLinkItem: React.FC<Props> = ({ item, onClick, className = '' }) => {
  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${linkBase} ${className}`}
        onClick={onClick}
      >
        {item.label}
      </a>
    );
  }
  return (
    <Link to={item.href} className={`${linkBase} ${className}`} onClick={onClick}>
      {item.label}
    </Link>
  );
};
