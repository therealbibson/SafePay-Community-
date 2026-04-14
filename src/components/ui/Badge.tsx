import React from 'react';
import { colors, borderRadius, spacing, typography } from '../../types/theme';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'success' | 'warning' | 'error' | 'info' | 'neutral';
  size?: 'sm' | 'md' | 'lg';
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'success',
  size = 'md',
}) => {
  const getStyles = () => {
    const baseStyles = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: borderRadius.full,
      fontFamily: typography.fontFamily.sans,
      fontWeight: typography.fontWeight.semibold,
    };

    const sizeStyles = {
      sm: {
        padding: `${spacing.xs} ${spacing.sm}`,
        fontSize: typography.fontSize.xs,
      },
      md: {
        padding: `${spacing.sm} ${spacing.md}`,
        fontSize: typography.fontSize.sm,
      },
      lg: {
        padding: `${spacing.md} ${spacing.lg}`,
        fontSize: typography.fontSize.base,
      },
    };

    const variantStyles = {
      success: {
        backgroundColor: colors.primary[100],
        color: colors.primary[700],
      },
      warning: {
        backgroundColor: colors.accent[100],
        color: colors.accent[700],
      },
      error: {
        backgroundColor: '#fee2e2',
        color: colors.error,
      },
      info: {
        backgroundColor: '#dbeafe',
        color: colors.info,
      },
      neutral: {
        backgroundColor: colors.neutral[100],
        color: colors.neutral[700],
      },
    };

    return {
      ...baseStyles,
      ...sizeStyles[size],
      ...variantStyles[variant],
    };
  };

  return <div style={getStyles()}>{children}</div>;
};

export default Badge;
