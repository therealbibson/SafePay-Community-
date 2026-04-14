import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../../components/ui/Button';
import { colors, spacing, typography } from '../../types/theme';

const PinSetupScreen: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { phone, name } = location.state || { phone: '', name: '' };
  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [error, setError] = useState('');
  const [step, setStep] = useState(1);

  const handleContinue = () => {
    if (step === 1) {
      if (!pin || pin.length !== 4) {
        setError('Please enter a 4-digit PIN');
        return;
      }
      setError('');
      setStep(2);
    } else {
      if (confirmPin !== pin) {
        setError('PINs do not match');
        return;
      }
      navigate('/biometrics', { state: { phone, name, pin } });
    }
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

  const pinDisplayStyle = {
    display: 'flex',
    gap: spacing.md,
    justifyContent: 'center',
    margin: `${spacing.xl} 0`,
  };

  const pinDotStyle = {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    border: `3px solid ${colors.border}`,
    backgroundColor: colors.background,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
  };

  const filledDotStyle = {
    backgroundColor: colors.primary[100],
    borderColor: colors.primary[600],
  };

  const buttonContainerStyle = {
    marginTop: spacing['2xl'],
  };

  const getPinDots = () => {
    const currentPin = step === 1 ? pin : confirmPin;
    return Array.from({ length: 4 }, (_, i) => (
      <div
        key={i}
        style={{
          ...pinDotStyle,
          ...(currentPin[i] ? filledDotStyle : {}),
        }}
      >
        {currentPin[i] ? '•' : ''}
      </div>
    ));
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <button style={backButtonStyle} onClick={() => step === 2 ? setStep(1) : navigate('/verification')}>
          ← Back
        </button>
        <h1 style={titleStyle}>
          {step === 1 ? 'Create Your PIN' : 'Confirm Your PIN'}
        </h1>
        <p style={subtitleStyle}>
          {step === 1 
            ? 'Choose a 4-digit PIN for quick access' 
            : 'Enter your PIN again to confirm'}
        </p>
      </div>

      <div style={formStyle}>
        <div style={pinDisplayStyle}>
          {getPinDots()}
        </div>

        <input
          type="tel"
          value={step === 1 ? pin : confirmPin}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, '').slice(0, 4);
            if (step === 1) {
              setPin(value);
            } else {
              setConfirmPin(value);
            }
          }}
          style={{
            position: 'absolute',
            opacity: 0,
            height: 0,
            width: 0,
          }}
          autoFocus
          maxLength={4}
        />

        {error && (
          <div style={{
            color: colors.error,
            fontSize: typography.fontSize.base,
            textAlign: 'center',
          }}>
            {error}
          </div>
        )}

        <div style={{
          fontSize: typography.fontSize.base,
          color: colors.text.tertiary,
          textAlign: 'center',
          marginTop: spacing.md,
        }}>
          Use a PIN you'll remember. Don't share it with anyone.
        </div>

        <div style={buttonContainerStyle}>
          <Button 
            variant="primary" 
            size="xl" 
            fullWidth 
            onClick={handleContinue}
            disabled={step === 1 ? pin.length !== 4 : confirmPin.length !== 4}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PinSetupScreen;
