import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScreenLayout from '../../components/layout/ScreenLayout';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import Icon from '../../components/ui/Icon';
import { colors, spacing, typography } from '../../types/theme';
import { useAuth } from '../../context/AuthContext';

const ReceiveMoneyScreen: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const containerStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'center' as const,
  };

  const qrContainerStyle = {
    backgroundColor: colors.surface,
    borderRadius: '20px',
    padding: spacing['2xl'],
    marginBottom: spacing.xl,
    border: `2px solid ${colors.border}`,
  };

  const qrStyle = {
    width: '200px',
    height: '200px',
    margin: '0 auto',
    backgroundColor: colors.text.primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '12px',
  };

  const infoCardStyle = {
    backgroundColor: colors.surface,
    borderRadius: '16px',
    padding: spacing.xl,
    marginBottom: spacing.lg,
    border: `1px solid ${colors.border}`,
  };

  const infoLabelStyle = {
    fontSize: typography.fontSize.sm,
    color: colors.text.tertiary,
    marginBottom: spacing.xs,
  };

  const infoValueStyle = {
    fontSize: typography.fontSize.xl,
    fontWeight: 600,
    color: colors.text.primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
  };

  return (
    <ScreenLayout title="Receive Money">
      <div style={containerStyle}>
        <p style={{ fontSize: typography.fontSize.lg, color: colors.text.secondary, marginBottom: spacing.xl }}>
          Share your details to receive money
        </p>

        {/* QR Code */}
        <div style={qrContainerStyle}>
          <div style={qrStyle}>
            <Icon name="qrCode" size={120} style={{ color: colors.background }} />
          </div>
          <p style={{ fontSize: typography.fontSize.base, color: colors.text.tertiary, marginTop: spacing.md }}>
            Scan this QR code to send money
          </p>
        </div>

        {/* Phone Number */}
        <div style={infoCardStyle}>
          <div style={infoLabelStyle}>Your Phone Number</div>
          <div style={infoValueStyle}>
            {user?.phone || '+234 XXX XXX XXXX'}
            <Icon name="copy" size={20} style={{ color: colors.primary[600], cursor: 'pointer' }} />
          </div>
        </div>

        {/* Account Details */}
        <div style={infoCardStyle}>
          <div style={infoLabelStyle}>SafePay Account</div>
          <div style={infoValueStyle}>
            {user?.phone || 'SP' + user?.id || 'SP123456'}
            <Icon name="copy" size={20} style={{ color: colors.primary[600], cursor: 'pointer' }} />
          </div>
        </div>

        {/* Instructions */}
        <Card padding="lg" variant="outlined" style={{ textAlign: 'left', marginBottom: spacing.xl }}>
          <h3 style={{ fontSize: typography.fontSize.lg, fontWeight: 600, marginBottom: spacing.md }}>
            How to receive money:
          </h3>
          <ol style={{ paddingLeft: spacing.lg, lineHeight: typography.lineHeight.relaxed }}>
            <li style={{ marginBottom: spacing.sm }}>Share your phone number or QR code</li>
            <li style={{ marginBottom: spacing.sm }}>Sender enters your number in their app</li>
            <li style={{ marginBottom: spacing.sm }}>Money is instantly added to your wallet</li>
            <li>You'll receive a notification when money arrives</li>
          </ol>
        </Card>

        <Button variant="primary" size="xl" fullWidth onClick={() => navigate('/wallet')}>
          Done
        </Button>
      </div>
    </ScreenLayout>
  );
};

export default ReceiveMoneyScreen;
