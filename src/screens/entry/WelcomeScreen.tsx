import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';
import { colors, spacing, typography } from '../../types/theme';

const WelcomeScreen: React.FC = () => {
  const navigate = useNavigate();

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    minHeight: '100vh',
    backgroundColor: colors.background,
    padding: `${spacing['2xl']} ${spacing.xl}`,
  };

  const contentStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center' as const,
  };

  const iconStyle = {
    fontSize: '120px',
    marginBottom: spacing.xl,
  };

  const titleStyle = {
    fontSize: typography.fontSize['4xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
    marginBottom: spacing.lg,
  };

  const subtitleStyle = {
    fontSize: typography.fontSize.xl,
    color: colors.text.secondary,
    marginBottom: spacing['2xl'],
    lineHeight: typography.lineHeight.relaxed,
  };

  const featureStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.md,
    marginBottom: spacing.md,
    fontSize: typography.fontSize.lg,
    color: colors.text.secondary,
  };

  const buttonContainerStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: spacing.lg,
    width: '100%',
    maxWidth: '400px',
    margin: '0 auto',
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <div style={iconStyle}>🌍</div>
        <h1 style={titleStyle}>Welcome to SafePay</h1>
        <p style={subtitleStyle}>
          Your simple, trusted way to manage money and buy & sell locally in your community.
        </p>
        
        <div style={{ marginBottom: spacing['2xl'] }}>
          <div style={featureStyle}>
            <span>💚</span>
            <span>Send & receive money easily</span>
          </div>
          <div style={featureStyle}>
            <span>🛒</span>
            <span>Buy & sell items locally</span>
          </div>
          <div style={featureStyle}>
            <span>🔒</span>
            <span>Safe and secure transactions</span>
          </div>
        </div>
      </div>

      <div style={buttonContainerStyle}>
        <Button variant="primary" size="xl" fullWidth onClick={() => navigate('/signup')}>
          Get Started
        </Button>
        <Button variant="outline" size="xl" fullWidth onClick={() => navigate('/login')}>
          I already have an account
        </Button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
