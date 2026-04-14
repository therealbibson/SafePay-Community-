import React from 'react';
import { colors, borderRadius, spacing, typography, transitions } from '../../types/theme';

interface InputProps {
  type?: 'text' | 'tel' | 'email' | 'password' | 'number';
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  error?: string;
  helperText?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  maxLength?: number;
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  label,
  error,
  helperText,
  disabled = false,
  fullWidth = true,
  icon,
  maxLength,
}) => {
  const inputStyles = {
    width: fullWidth ? '100%' : 'auto',
    padding: `${spacing.lg} ${spacing.xl}`,
    fontSize: typography.fontSize.lg,
    fontFamily: typography.fontFamily.sans,
    borderRadius: borderRadius.lg,
    border: `2px solid ${error ? colors.error : colors.border}`,
    backgroundColor: disabled ? colors.neutral[100] : colors.background,
    color: colors.text.primary,
    transition: `border-color ${transitions.normal} ease-in-out`,
    outline: 'none',
    minHeight: '56px',
  };

  const labelStyles = {
    display: 'block',
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.medium,
    color: colors.text.primary,
    marginBottom: spacing.sm,
  };

  const errorStyles = {
    fontSize: typography.fontSize.sm,
    color: colors.error,
    marginTop: spacing.sm,
  };

  const helperTextStyles = {
    fontSize: typography.fontSize.sm,
    color: colors.text.tertiary,
    marginTop: spacing.sm,
  };

  return (
    <div style={{ width: fullWidth ? '100%' : 'auto' }}>
      {label && <label style={labelStyles}>{label}</label>}
      <div style={{ position: 'relative' }}>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          disabled={disabled}
          maxLength={maxLength}
          style={{
            ...inputStyles,
            paddingLeft: icon ? spacing['3xl'] : spacing.xl,
          }}
        />
        {icon && (
          <div
            style={{
              position: 'absolute',
              left: spacing.lg,
              top: '50%',
              transform: 'translateY(-50%)',
              color: colors.text.tertiary,
            }}
          >
            {icon}
          </div>
        )}
      </div>
      {error && <div style={errorStyles}>{error}</div>}
      {helperText && !error && <div style={helperTextStyles}>{helperText}</div>}
    </div>
  );
};

export default Input;
