import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScreenLayout from '../../components/layout/ScreenLayout';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import Icon from '../../components/ui/Icon';
import { colors, spacing, typography } from '../../types/theme';
import { useAuth } from '../../context/AuthContext';

const VerificationScreen: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const containerStyle = {
    maxWidth: '600px',
    margin: '0 auto',
  };

  const isVerified = user?.isVerified || false;

  return (
    <ScreenLayout title="Get Verified" showBackButton onBack={() => navigate('/profile')}>
      <div style={containerStyle}>
        {!isVerified ? (
          <div>
            <div style={{ textAlign: 'center', marginBottom: spacing.xl }}>
              <Icon name="shield" size={80} style={{ color: colors.primary[600], marginBottom: spacing.lg }} />
              <h2 style={{ fontSize: typography.fontSize['2xl'], fontWeight: 700, marginBottom: spacing.md }}>
                Get Verified Badge
              </h2>
              <p style={{ fontSize: typography.fontSize.lg, color: colors.text.secondary }}>
                Build trust with buyers and sellers by verifying your identity
              </p>
            </div>

            <Card padding="xl" variant="elevated" style={{ marginBottom: spacing.xl }}>
              <h3 style={{ fontSize: typography.fontSize.lg, fontWeight: 600, marginBottom: spacing.lg }}>
                Benefits of Verification:
              </h3>
              <div style={{ lineHeight: typography.lineHeight.relaxed }}>
                <div style={{ marginBottom: spacing.md }}>✓ Verified badge on your profile</div>
                <div style={{ marginBottom: spacing.md }}>✓ Higher trust from buyers and sellers</div>
                <div style={{ marginBottom: spacing.md }}>✓ Priority customer support</div>
                <div style={{ marginBottom: spacing.md }}>✓ Lower transaction fees</div>
                <div>✓ Access to exclusive features</div>
              </div>
            </Card>

            <Card padding="lg" style={{ marginBottom: spacing.xl }}>
              <h3 style={{ fontSize: typography.fontSize.lg, fontWeight: 600, marginBottom: spacing.md }}>
                How to Verify:
              </h3>
              <ol style={{ paddingLeft: spacing.lg, lineHeight: typography.lineHeight.relaxed }}>
                <li style={{ marginBottom: spacing.md }}>Upload a valid ID (National ID, Passport, or Driver's License)</li>
                <li style={{ marginBottom: spacing.md }}>Take a selfie for face verification</li>
                <li>Wait for verification (usually within 24 hours)</li>
              </ol>
            </Card>

            <Button variant="primary" size="xl" fullWidth>
              Start Verification
            </Button>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: `${spacing['2xl']} 0` }}>
            <Icon name="verified" size={80} style={{ color: colors.primary[600], marginBottom: spacing.lg }} />
            <h2 style={{ fontSize: typography.fontSize['2xl'], fontWeight: 700, color: colors.primary[600], marginBottom: spacing.md }}>
              You're Verified!
            </h2>
            <p style={{ fontSize: typography.fontSize.lg, color: colors.text.secondary, marginBottom: spacing.xl }}>
              Your account has been verified. You now have access to all premium features.
            </p>
            <Card padding="lg" variant="outlined" style={{ textAlign: 'left', marginBottom: spacing.xl }}>
              <div style={{ marginBottom: spacing.md }}>
                <div style={{ fontSize: typography.fontSize.sm, color: colors.text.tertiary, marginBottom: spacing.xs }}>
                  Verification Status
                </div>
                <div style={{ fontSize: typography.fontSize.lg, fontWeight: 600, color: colors.primary[600] }}>
                  ✓ Verified
                </div>
              </div>
              <div>
                <div style={{ fontSize: typography.fontSize.sm, color: colors.text.tertiary, marginBottom: spacing.xs }}>
                  Verified Since
                </div>
                <div style={{ fontSize: typography.fontSize.base }}>
                  January 15, 2024
                </div>
              </div>
            </Card>
            <Button variant="primary" size="xl" fullWidth onClick={() => navigate('/profile')}>
              Done
            </Button>
          </div>
        )}
      </div>
    </ScreenLayout>
  );
};

export default VerificationScreen;
