import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ScreenLayout from '../../components/layout/ScreenLayout';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Card from '../../components/ui/Card';
import Icon from '../../components/ui/Icon';
import { colors, spacing, typography } from '../../types/theme';
import { useAuth } from '../../context/AuthContext';

const SendMoneyScreen: React.FC = () => {
  const navigate = useNavigate();
  const { user, updateUser } = useAuth();
  const [step, setStep] = useState(1);
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

  const handleContinue = () => {
    if (step === 1) {
      if (!recipient) {
        setError('Please enter recipient phone number');
        return;
      }
      setError('');
      setStep(2);
    } else if (step === 2) {
      if (!amount || parseFloat(amount) <= 0) {
        setError('Please enter a valid amount');
        return;
      }
      if (parseFloat(amount) > (user?.balance || 0)) {
        setError('Insufficient balance');
        return;
      }
      setError('');
      setStep(3);
    } else if (step === 3) {
      if (!pin || pin.length !== 4) {
        setError('Please enter your 4-digit PIN');
        return;
      }
      // Simulate transaction
      updateUser({ balance: (user?.balance || 0) - parseFloat(amount) });
      setStep(4);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      navigate('/wallet');
    }
  };

  const handleDone = () => {
    navigate('/wallet');
  };

  const containerStyle = {
    maxWidth: '600px',
    margin: '0 auto',
  };

  const stepIndicatorStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: spacing.sm,
    marginBottom: spacing.xl,
  };

  const stepDotStyle = (active: boolean, completed: boolean) => ({
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: completed || active ? colors.primary[600] : colors.neutral[300],
  });

  return (
    <ScreenLayout title="Send Money" showBackButton onBack={handleBack}>
      <div style={containerStyle}>
        {/* Step Indicator */}
        <div style={stepIndicatorStyle}>
          {[1, 2, 3].map((s) => (
            <div key={s} style={stepDotStyle(s === step, s < step)} />
          ))}
        </div>

        {step === 1 && (
          <div>
            <h2 style={{ fontSize: typography.fontSize.xl, fontWeight: 600, marginBottom: spacing.lg }}>
              Who are you sending to?
            </h2>
            <Input
              type="tel"
              label="Phone Number"
              placeholder="Enter recipient's phone number"
              value={recipient}
              onChange={setRecipient}
              helperText="Include country code (e.g., +234)"
              icon={<Icon name="profile" size={20} />}
              error={error}
            />
            <div style={{ marginTop: spacing.xl }}>
              <Button variant="primary" size="xl" fullWidth onClick={handleContinue}>
                Continue
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 style={{ fontSize: typography.fontSize.xl, fontWeight: 600, marginBottom: spacing.lg }}>
              How much to send?
            </h2>
            <Input
              type="number"
              label="Amount"
              placeholder="0.00"
              value={amount}
              onChange={setAmount}
              helperText={`Available balance: ₦${user?.balance?.toLocaleString() || '0'}`}
              error={error}
            />
            <Input
              type="text"
              label="Note (Optional)"
              placeholder="What's this for?"
              value={note}
              onChange={setNote}
              style={{ marginTop: spacing.lg }}
            />
            <div style={{ marginTop: spacing.xl }}>
              <Button variant="primary" size="xl" fullWidth onClick={handleContinue}>
                Continue
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 style={{ fontSize: typography.fontSize.xl, fontWeight: 600, marginBottom: spacing.lg }}>
              Confirm Transaction
            </h2>
            <Card padding="lg" variant="elevated">
              <div style={{ marginBottom: spacing.lg }}>
                <div style={{ fontSize: typography.fontSize.sm, color: colors.text.tertiary, marginBottom: spacing.xs }}>
                  Recipient
                </div>
                <div style={{ fontSize: typography.fontSize.lg, fontWeight: 500 }}>{recipient}</div>
              </div>
              <div style={{ marginBottom: spacing.lg }}>
                <div style={{ fontSize: typography.fontSize.sm, color: colors.text.tertiary, marginBottom: spacing.xs }}>
                  Amount
                </div>
                <div style={{ fontSize: typography.fontSize['2xl'], fontWeight: 700, color: colors.primary[600] }}>
                  ₦{parseFloat(amount).toLocaleString()}
                </div>
              </div>
              {note && (
                <div style={{ marginBottom: spacing.lg }}>
                  <div style={{ fontSize: typography.fontSize.sm, color: colors.text.tertiary, marginBottom: spacing.xs }}>
                    Note
                  </div>
                  <div style={{ fontSize: typography.fontSize.base }}>{note}</div>
                </div>
              )}
            </Card>

            <div style={{ marginTop: spacing.xl }}>
              <Input
                type="password"
                label="Enter PIN to Confirm"
                placeholder="••••"
                value={pin}
                onChange={setPin}
                maxLength={4}
                error={error}
                icon={<Icon name="lock" size={20} />}
              />
              <Button variant="primary" size="xl" fullWidth onClick={handleContinue} style={{ marginTop: spacing.xl }}>
                Confirm & Send
              </Button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div style={{ textAlign: 'center', padding: `${spacing['2xl']} 0` }}>
            <div style={{ fontSize: '80px', marginBottom: spacing.xl }}>✅</div>
            <h2 style={{ fontSize: typography.fontSize['2xl'], fontWeight: 700, color: colors.primary[600], marginBottom: spacing.md }}>
              Money Sent!
            </h2>
            <p style={{ fontSize: typography.fontSize.lg, color: colors.text.secondary, marginBottom: spacing.xl }}>
              You sent ₦{parseFloat(amount).toLocaleString()} to {recipient}
            </p>
            <Card padding="lg" variant="outlined" style={{ textAlign: 'left', marginBottom: spacing.xl }}>
              <div style={{ fontSize: typography.fontSize.sm, color: colors.text.tertiary, marginBottom: spacing.xs }}>
                Transaction ID
              </div>
              <div style={{ fontSize: typography.fontSize.base, fontWeight: 500, marginBottom: spacing.md }}>
                TXN{Date.now()}
              </div>
              <div style={{ fontSize: typography.fontSize.sm, color: colors.text.tertiary, marginBottom: spacing.xs }}>
                Date & Time
              </div>
              <div style={{ fontSize: typography.fontSize.base }}>
                {new Date().toLocaleString()}
              </div>
            </Card>
            <Button variant="primary" size="xl" fullWidth onClick={handleDone}>
              Done
            </Button>
          </div>
        )}
      </div>
    </ScreenLayout>
  );
};

export default SendMoneyScreen;
