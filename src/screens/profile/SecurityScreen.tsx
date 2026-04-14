import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ScreenLayout from '../../components/layout/ScreenLayout';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import Input from '../../components/ui/Input';
import Icon from '../../components/ui/Icon';
import { colors, spacing, typography } from '../../types/theme';
import { useAuth } from '../../context/AuthContext';

const SecurityScreen: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [biometricsEnabled, setBiometricsEnabled] = useState(user?.hasBiometrics || false);

  const containerStyle = {
    width: '100%',
  };

  const securityCardStyle = {
    padding: spacing.lg,
    backgroundColor: colors.surface,
    borderRadius: '16px',
    border: `1px solid ${colors.border}`,
    marginBottom: spacing.lg,
  };

  const toggleStyle = {
    width: '50px',
    height: '28px',
    borderRadius: '14px',
    backgroundColor: colors.neutral[300],
    border: 'none',
    cursor: 'pointer',
    position: 'relative' as const,
  };

  const toggleActiveStyle = {
    backgroundColor: colors.primary[600],
  };

  return (
    <ScreenLayout title="Security & PIN" showBackButton onBack={() => navigate('/profile')}>
      <div style={containerStyle}>
        {/* PIN Section */}
        <h3 style={{ fontSize: typography.fontSize.lg, fontWeight: 600, marginBottom: spacing.lg }}>
          PIN Settings
        </h3>
        <div style={securityCardStyle}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing.md }}>
            <div>
              <div style={{ fontSize: typography.fontSize.base, fontWeight: 500, marginBottom: spacing.xs }}>
                Change PIN
              </div>
              <div style={{ fontSize: typography.fontSize.sm, color: colors.text.tertiary }}>
                Update your 4-digit PIN
              </div>
            </div>
            <Icon name="arrowRight" size={20} style={{ color: colors.text.tertiary }} />
          </div>
        </div>

        <div style={securityCardStyle}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: typography.fontSize.base, fontWeight: 500, marginBottom: spacing.xs }}>
                Forgot PIN
              </div>
              <div style={{ fontSize: typography.fontSize.sm, color: colors.text.tertiary }}>
                Reset your PIN using phone verification
              </div>
            </div>
            <Icon name="arrowRight" size={20} style={{ color: colors.text.tertiary }} />
          </div>
        </div>

        {/* Biometrics Section */}
        <h3 style={{ fontSize: typography.fontSize.lg, fontWeight: 600, marginTop: spacing.xl, marginBottom: spacing.lg }}>
          Biometric Authentication
        </h3>
        <div style={securityCardStyle}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: typography.fontSize.base, fontWeight: 500, marginBottom: spacing.xs }}>
                Fingerprint / Face ID
              </div>
              <div style={{ fontSize: typography.fontSize.sm, color: colors.text.tertiary }}>
                Use biometrics for quick login
              </div>
            </div>
            <button
              onClick={() => setBiometricsEnabled(!biometricsEnabled)}
              style={{
                ...toggleStyle,
                ...(biometricsEnabled ? toggleActiveStyle : {}),
              }}
            >
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  borderRadius: '50%',
                  backgroundColor: colors.background,
                  position: 'absolute',
                  top: '3px',
                  left: biometricsEnabled ? '25px' : '3px',
                  transition: 'left 0.2s',
                }}
              />
            </button>
          </div>
        </div>

        {/* Security Tips */}
        <h3 style={{ fontSize: typography.fontSize.lg, fontWeight: 600, marginTop: spacing.xl, marginBottom: spacing.lg }}>
          Security Tips
        </h3>
        <Card padding="lg" variant="outlined">
          <div style={{ lineHeight: typography.lineHeight.relaxed }}>
            <div style={{ marginBottom: spacing.md }}>• Never share your PIN with anyone</div>
            <div style={{ marginBottom: spacing.md }}>• Use a PIN that's not easy to guess</div>
            <div style={{ marginBottom: spacing.md }}>• Enable biometrics for extra security</div>
            <div style={{ marginBottom: spacing.md }}>• Always log out after using on shared devices</div>
            <div>• Report suspicious activity immediately</div>
          </div>
        </Card>
      </div>
    </ScreenLayout>
  );
};

export default SecurityScreen;
