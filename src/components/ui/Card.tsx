import React from 'react';
import { colors, borderRadius, spacing, shadows } from '../../types/theme';

interface CardProps {
  children: React.ReactNode;
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'elevated' | 'outlined';
  fullWidth?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({
  children,
  padding = 'lg',
  variant = 'default',
  fullWidth = true,
  style,
  onClick,
}) => {
  const getPadding = () => {
    switch (padding) {
      case 'sm':
        return spacing.md;
      case 'md':
        return spacing.lg;
      case 'lg':
        return spacing.xl;
      case 'xl':
        return spacing['2xl'];
      default:
        return spacing.xl;
    }
  };

  const getStyles = () => {
    const baseStyles = {
      borderRadius: borderRadius.xl,
      width: fullWidth ? '100%' : 'auto',
      transition: 'all 0.3s ease-in-out',
    };

    const variantStyles = {
      default: {
        backgroundColor: colors.background,
        border: `1px solid ${colors.border}`,
      },
      elevated: {
        backgroundColor: colors.background,
        boxShadow: shadows.md,
        border: 'none',
      },
      outlined: {
        backgroundColor: colors.surface,
        border: `2px solid ${colors.border}`,
      },
    };

    return {
      ...baseStyles,
      ...variantStyles[variant],
      padding: getPadding(),
      cursor: onClick ? 'pointer' : 'default',
    };
  };

  return (
    <div style={{ ...getStyles(), ...style }} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;
