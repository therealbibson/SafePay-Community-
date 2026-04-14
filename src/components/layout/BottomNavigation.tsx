import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Icon from '../ui/Icon';
import { colors, spacing, typography } from '../../types/theme';

interface NavItem {
  id: string;
  label: string;
  icon: string;
  path: string;
}

const BottomNavigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems: NavItem[] = [
    { id: 'home', label: 'Home', icon: 'home', path: '/dashboard' },
    { id: 'wallet', label: 'Wallet', icon: 'wallet', path: '/wallet' },
    { id: 'sell', label: 'Sell', icon: 'sell', path: '/sell' },
    { id: 'market', label: 'Market', icon: 'market', path: '/market' },
    { id: 'profile', label: 'Profile', icon: 'profile', path: '/profile' },
  ];

  const containerStyle = {
    position: 'fixed' as const,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.background,
    borderTop: `1px solid ${colors.border}`,
    padding: `${spacing.sm} 0`,
    boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.05)',
    zIndex: 1000,
  };

  const navItemStyle = (isActive: boolean) => ({
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: spacing.xs,
    padding: spacing.sm,
    cursor: 'pointer',
    border: 'none',
    backgroundColor: 'transparent',
    opacity: isActive ? 1 : 0.6,
    transition: 'opacity 0.2s ease-in-out',
  });

  const iconStyle = (isActive: boolean) => ({
    color: isActive ? colors.primary[600] : colors.text.tertiary,
  });

  const labelStyle = (isActive: boolean) => ({
    fontSize: typography.fontSize.xs,
    fontWeight: isActive ? typography.fontWeight.semibold : typography.fontWeight.normal,
    color: isActive ? colors.primary[600] : colors.text.tertiary,
  });

  return (
    <div style={containerStyle}>
      {navItems.map((item) => {
        const isActive = location.pathname === item.path || 
                         (item.id === 'sell' && location.pathname.startsWith('/sell'));
        
        return (
          <button
            key={item.id}
            style={navItemStyle(isActive)}
            onClick={() => navigate(item.path)}
          >
            <Icon name={item.icon} size={24} style={iconStyle(isActive)} />
            <span style={labelStyle(isActive)}>{item.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default BottomNavigation;
