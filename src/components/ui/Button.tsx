import React from 'react';
import { colors, borderRadius, spacing, typography, transitions } from '../../types/theme';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'lg',
  fullWidth = false,
  disabled = false,
  onClick,
  type = 'button',
  icon,
}) => {
  const getStyles = () => {
    const baseStyles = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: spacing.sm,
      fontFamily: typography.fontFamily.sans,
      fontWeight: typography.fontWeight.semibold,
      borderRadius: borderRadius.lg,
      transition: `all ${transitions.normal} ease-in-out`,
      cursor: disabled ? 'not-allowed' : 'pointer',
      border: 'none',
      outline: 'none',
    };

    const sizeStyles = {
      sm: {
        padding: `${spacing.sm} ${spacing.lg}`,
        fontSize: typography.fontSize.sm,
        minHeight: '40px',
      },
      md: {
        padding: `${spacing.md} ${spacing.xl}`,
        fontSize: typography.fontSize.base,
        minHeight: '48px',
      },
      lg: {
        padding: `${spacing.lg} ${spacing['2xl']}`,
        fontSize: typography.fontSize.lg,
        minHeight: '56px',
      },
      xl: {
        padding: `${spacing.xl} ${spacing['3xl']}`,
        fontSize: typography.fontSize.xl,
        minHeight: '64px',
      },
    };

    const variantStyles = {
      primary: {
        backgroundColor: disabled ? colors.neutral[300] : colors.primary[600],
        color: colors.text.inverse,
        '&:hover': !disabled ? { backgroundColor: colors.primary[700] } : {},
      },
      secondary: {
        backgroundColor: disabled ? colors.neutral[300] : colors.neutral[100],
        color: disabled ? colors.neutral[500] : colors.text.primary,
        '&:hover': !disabled ? { backgroundColor: colors.neutral[200] } : {},
      },
      accent: {
        backgroundColor: disabled ? colors.neutral[300] : colors.accent[600],
        color: colors.text.inverse,
        '&:hover': !disabled ? { backgroundColor: colors.accent[700] } : {},
      },
      outline: {
        backgroundColor: 'transparent',
        color: disabled ? colors.neutral[400] : colors.primary[600],
        border: `2px solid ${disabled ? colors.neutral[300] : colors.primary[600]}`,
        '&:hover': !disabled ? { backgroundColor: colors.primary[50] } : {},
      },
      ghost: {
        backgroundColor: 'transparent',
        color: disabled ? colors.neutral[400] : colors.primary[600],
        '&:hover': !disabled ? { backgroundColor: colors.primary[50] } : {},
      },
      danger: {
        backgroundColor: disabled ? colors.neutral[300] : colors.error,
        color: colors.text.inverse,
        '&:hover': !disabled ? { backgroundColor: '#dc2626' } : {},
      },
    };

    return {
      ...baseStyles,
      ...sizeStyles[size],
      ...variantStyles[variant],
      width: fullWidth ? '100%' : 'auto',
    };
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={getStyles()}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;
