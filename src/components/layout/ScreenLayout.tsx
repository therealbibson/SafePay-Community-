import React from 'react';
import { colors, spacing } from '../../types/theme';

interface ScreenLayoutProps {
  children: React.ReactNode;
  title?: string;
  showBackButton?: boolean;
  onBack?: () => void;
  rightAction?: React.ReactNode;
}

const ScreenLayout: React.FC<ScreenLayoutProps> = ({
  children,
  title,
  showBackButton = false,
  onBack,
  rightAction,
}) => {
  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: colors.background,
    paddingBottom: spacing['5xl'], // Space for bottom nav
    width: '100%',
    maxWidth: '100%',
  };

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: `${spacing.xl} ${spacing.xl}`,
    backgroundColor: colors.background,
    borderBottom: title ? `1px solid ${colors.border}` : 'none',
  };

  const headerLeftStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.md,
  };

  const backButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    border: 'none',
    backgroundColor: colors.surfaceVariant,
    cursor: 'pointer',
    fontSize: '20px',
  };

  const titleStyle = {
    fontSize: '20px',
    fontWeight: 600,
    color: colors.text.primary,
  };

  const contentStyle = {
    padding: `${spacing.xl} ${spacing.xl}`,
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
    boxSizing: 'border-box' as const,
  };

  return (
    <div style={containerStyle}>
      {(title || showBackButton || rightAction) && (
        <div style={headerStyle}>
          <div style={headerLeftStyle}>
            {showBackButton && (
              <button style={backButtonStyle} onClick={onBack}>
                ←
              </button>
            )}
            {title && <h1 style={titleStyle}>{title}</h1>}
          </div>
          {rightAction}
        </div>
      )}
      <div style={contentStyle}>
        {children}
      </div>
    </div>
  );
};

export default ScreenLayout;
