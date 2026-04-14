import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../../components/ui/Button';
import { colors, spacing, typography } from '../../types/theme';
import { useAuth } from '../../context/AuthContext';

const BiometricsScreen: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { phone, name, pin } = location.state || { phone: '', name: '', pin: '' };
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleEnableBiometrics = () => {
    setLoading(true);
    // Simulate biometric setup - in production, this would use device biometrics
    setTimeout(() => {
      login({
        id: '1',
        phone,
        name,
        pin,
        isVerified: true,
        hasBiometrics: true,
        balance: 0,
        createdAt: new Date(),
      });
      navigate('/dashboard');
    }, 1500);
  };

  const handleSkip = () => {
    login({
      id: '1',
      phone,
      name,
      pin,
      isVerified: true,
      hasBiometrics: false,
      balance: 0,
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

  const contentStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center' as const,
  };

  const iconStyle = {
    fontSize: '100px',
    marginBottom: spacing.xl,
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
    marginBottom: spacing['2xl'],
    lineHeight: typography.lineHeight.relaxed,
    maxWidth: '300px',
  };

  const featureStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.md,
    marginBottom: spacing.md,
    fontSize: typography.fontSize.base,
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
        <div style={iconStyle}>👆</div>
        <h1 style={titleStyle}>Enable Biometrics?</h1>
        <p style={subtitleStyle}>
          Use your fingerprint or face to login quickly and securely.
        </p>

        <div style={{ marginBottom: spacing['2xl'] }}>
          <div style={featureStyle}>
            <span>✓</span>
            <span>Quick and easy login</span>
          </div>
          <div style={featureStyle}>
            <span>✓</span>
            <span>Extra security layer</span>
          </div>
          <div style={featureStyle}>
            <span>✓</span>
            <span>No need to remember PIN</span>
          </div>
        </div>
      </div>

      <div style={buttonContainerStyle}>
        <Button 
          variant="primary" 
          size="xl" 
          fullWidth 
          onClick={handleEnableBiometrics}
          disabled={loading}
        >
          {loading ? 'Setting up...' : 'Enable Biometrics'}
        </Button>
        <Button variant="ghost" size="xl" fullWidth onClick={handleSkip}>
          Skip for now
        </Button>
      </div>
    </div>
  );
};

export default BiometricsScreen;
