import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScreenLayout from '../../components/layout/ScreenLayout';
import BottomNavigation from '../../components/layout/BottomNavigation';
import Button from '../../components/ui/Button';
import Icon from '../../components/ui/Icon';
import Badge from '../../components/ui/Badge';
import { colors, spacing, typography } from '../../types/theme';
import { useAuth } from '../../context/AuthContext';

const ProfileScreen: React.FC = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const menuItems = [
    { id: 'security', label: 'Security & PIN', icon: 'lock', path: '/profile/security' },
    { id: 'verification', label: 'Get Verified', icon: 'verified', path: '/profile/verification' },
    { id: 'notifications', label: 'Notifications', icon: 'bell', path: '/profile/notifications' },
    { id: 'linked', label: 'Linked Accounts', icon: 'wallet', path: '/profile/linked' },
    { id: 'family', label: 'Family Oversight', icon: 'profile', path: '/profile/family' },
    { id: 'help', label: 'Help & Support', icon: 'alert', path: '/profile/help' },
    { id: 'about', label: 'About SafePay', icon: 'info', path: '/profile/about' },
  ];

  const containerStyle = {
    width: '100%',
  };

  const profileHeaderStyle = {
    textAlign: 'center' as const,
    marginBottom: spacing.xl,
  };

  const avatarStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    backgroundColor: colors.primary[100],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '50px',
    margin: '0 auto',
    marginBottom: spacing.lg,
  };

  const menuItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.lg,
    padding: spacing.lg,
    backgroundColor: colors.surface,
    borderRadius: '12px',
    border: `1px solid ${colors.border}`,
    cursor: 'pointer',
    marginBottom: spacing.md,
    transition: 'background-color 0.2s',
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <ScreenLayout title="Profile">
      <div style={containerStyle}>
        {/* Profile Header */}
        <div style={profileHeaderStyle}>
          <div style={avatarStyle}>👤</div>
          <h2 style={{ fontSize: typography.fontSize['2xl'], fontWeight: 700, marginBottom: spacing.sm }}>
            {user?.name || 'John Doe'}
          </h2>
          <div style={{ fontSize: typography.fontSize.lg, color: colors.text.secondary, marginBottom: spacing.sm }}>
            {user?.phone || '+234 XXX XXX XXXX'}
          </div>
          {user?.isVerified && (
            <Badge variant="success">
              <Icon name="verified" size={14} style={{ marginRight: spacing.xs }} />
              Verified
            </Badge>
          )}
        </div>

        {/* Menu Items */}
        <div>
          {menuItems.map((item) => (
            <div key={item.id} style={menuItemStyle} onClick={() => navigate(item.path)}>
              <Icon name={item.icon} size={24} style={{ color: colors.primary[600] }} />
              <span style={{ flex: 1, fontSize: typography.fontSize.lg, fontWeight: 500 }}>
                {item.label}
              </span>
              <Icon name="arrowRight" size={20} style={{ color: colors.text.tertiary }} />
            </div>
          ))}
        </div>

        {/* Logout Button */}
        <Button variant="danger" size="xl" fullWidth onClick={handleLogout} style={{ marginTop: spacing.xl }}>
          Logout
        </Button>

        <div style={{ textAlign: 'center', marginTop: spacing.xl, fontSize: typography.fontSize.sm, color: colors.text.tertiary }}>
          SafePay v1.0.0
        </div>
      </div>

      <BottomNavigation />
    </ScreenLayout>
  );
};

export default ProfileScreen;
