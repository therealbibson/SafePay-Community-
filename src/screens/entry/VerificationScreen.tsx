import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { colors, spacing, typography } from '../../types/theme';

const VerificationScreen: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { phone, name } = location.state || { phone: '', name: '' };
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [countdown, setCountdown] = useState(30);

  const handleVerify = () => {
    if (!otp || otp.length !== 6) {
      setError('Please enter the 6-digit code');
      return;
    }

    // Simulate verification - in production, this would verify with an API
    navigate('/pin-setup', { state: { phone, name } });
  };

  const handleResend = () => {
    setCountdown(30);
    // Simulate resending OTP
  };

  React.useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

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

  const phoneDisplayStyle = {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.semibold,
    color: colors.text.primary,
    marginBottom: spacing.xl,
  };

  const otpInputStyle = {
    display: 'flex',
    gap: spacing.md,
    justifyContent: 'center',
    marginBottom: spacing.xl,
  };

  const otpDigitStyle = {
    width: '50px',
    height: '60px',
    fontSize: typography.fontSize['2xl'],
    textAlign: 'center' as const,
    border: `2px solid ${colors.border}`,
    borderRadius: '8px',
    backgroundColor: colors.background,
  };

  const resendStyle = {
    textAlign: 'center' as const,
    marginTop: spacing.md,
    fontSize: typography.fontSize.base,
    color: colors.text.secondary,
  };

  const linkStyle = {
    color: colors.primary[600],
    fontWeight: typography.fontWeight.semibold,
    cursor: countdown > 0 ? 'not-allowed' : 'pointer',
  };

  const buttonContainerStyle = {
    marginTop: spacing['2xl'],
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <button style={backButtonStyle} onClick={() => navigate('/signup')}>
          ← Back
        </button>
        <h1 style={titleStyle}>Verify Your Phone</h1>
        <p style={subtitleStyle}>We sent a code to your phone</p>
      </div>

      <div style={formStyle}>
        <div style={phoneDisplayStyle}>{phone}</div>

        <Input
          type="text"
          label="Enter 6-digit code"
          placeholder="123456"
          value={otp}
          onChange={setOtp}
          maxLength={6}
          helperText="Check your SMS messages for the code"
          error={error}
        />

        <div style={resendStyle}>
          {countdown > 0 ? (
            <span>Resend code in {countdown}s</span>
          ) : (
            <span style={linkStyle} onClick={handleResend}>Resend code</span>
          )}
        </div>

        <div style={buttonContainerStyle}>
          <Button variant="primary" size="xl" fullWidth onClick={handleVerify}>
            Verify
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VerificationScreen;
