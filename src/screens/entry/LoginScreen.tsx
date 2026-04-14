import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { colors, spacing, typography } from '../../types/theme';
import { useAuth } from '../../context/AuthContext';

const LoginScreen: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [phone, setPhone] = useState('');
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!phone || !pin) {
      setError('Please enter your phone number and PIN');
      return;
    }

    // Simulate login - in production, this would call an API
    login({
      id: '1',
      phone,
      name: 'John Doe',
      pin,
      isVerified: true,
      hasBiometrics: false,
      balance: 50000,
      createdAt: new Date(),
    });

    navigate('/dashboard');
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    minHeight: '100vh',
    backgroundColor: colors.background,
    padding: `${spacing['2xl']} ${spacing.xl}`,
  };

  const headerStyle = {
    marginBottom: spacing['2xl'],
  };

  const backButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.sm,
    fontSize: typography.fontSize.lg,
    color: colors.primary[600],
    cursor: 'pointer',
    marginBottom: spacing.xl,
    border: 'none',
    backgroundColor: 'transparent',
  };

  const titleStyle = {
    fontSize: typography.fontSize['3xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
    marginBottom: spacing.md,
  };

  const subtitleStyle = {
    fontSize: typography.fontSize.lg,
    color: colors.text.secondary,
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: spacing.xl,
    maxWidth: '400px',
    margin: '0 auto',
    flex: 1,
    justifyContent: 'center' as const,
  };

  const forgotPinStyle = {
    textAlign: 'right' as const,
    fontSize: typography.fontSize.base,
    color: colors.primary[600],
    cursor: 'pointer',
    marginTop: spacing.sm,
  };

  const buttonContainerStyle = {
    marginTop: spacing['2xl'],
  };

  const signupLinkStyle = {
    textAlign: 'center' as const,
    marginTop: spacing.xl,
    fontSize: typography.fontSize.lg,
    color: colors.text.secondary,
  };

  const linkStyle = {
    color: colors.primary[600],
    fontWeight: typography.fontWeight.semibold,
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <button style={backButtonStyle} onClick={() => navigate('/welcome')}>
          ← Back
        </button>
        <h1 style={titleStyle}>Welcome Back</h1>
        <p style={subtitleStyle}>Enter your phone number and PIN to login</p>
      </div>

      <div style={formStyle}>
        <Input
          type="tel"
          label="Phone Number"
          placeholder="Enter your phone number"
          value={phone}
          onChange={setPhone}
          helperText="Include country code (e.g., +234)"
        />

        <Input
          type="password"
          label="PIN"
          placeholder="Enter your 4-digit PIN"
          value={pin}
          onChange={setPin}
          maxLength={4}
          error={error}
        />

        <div style={forgotPinStyle}>Forgot PIN?</div>

        <div style={buttonContainerStyle}>
          <Button variant="primary" size="xl" fullWidth onClick={handleLogin}>
            Login
          </Button>
        </div>

        <div style={signupLinkStyle}>
          Don't have an account? <span style={linkStyle} onClick={() => navigate('/signup')}>Sign Up</span>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
