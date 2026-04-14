import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { colors, spacing, typography } from '../../types/theme';

const SignupScreen: React.FC = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleContinue = () => {
    if (!phone || !name) {
      setError('Please fill in all fields');
      return;
    }

    if (phone.length < 10) {
      setError('Please enter a valid phone number');
      return;
    }

    // Store data and move to verification
    navigate('/verification', { state: { phone, name } });
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

  const buttonContainerStyle = {
    marginTop: spacing['2xl'],
  };

  const loginLinkStyle = {
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
        <h1 style={titleStyle}>Create Account</h1>
        <p style={subtitleStyle}>Let's get you started with SafePay</p>
      </div>

      <div style={formStyle}>
        <Input
          type="text"
          label="Full Name"
          placeholder="Enter your full name"
          value={name}
          onChange={setName}
        />

        <Input
          type="tel"
          label="Phone Number"
          placeholder="Enter your phone number"
          value={phone}
          onChange={setPhone}
          helperText="Include country code (e.g., +234)"
          error={error}
        />

        <div style={buttonContainerStyle}>
          <Button variant="primary" size="xl" fullWidth onClick={handleContinue}>
            Continue
          </Button>
        </div>

        <div style={loginLinkStyle}>
          Already have an account? <span style={linkStyle} onClick={() => navigate('/login')}>Login</span>
        </div>
      </div>
    </div>
  );
};

export default SignupScreen;
