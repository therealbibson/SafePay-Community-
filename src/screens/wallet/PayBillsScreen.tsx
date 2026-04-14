import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ScreenLayout from '../../components/layout/ScreenLayout';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import Input from '../../components/ui/Input';
import { colors, spacing, typography } from '../../types/theme';

const PayBillsScreen: React.FC = () => {
  const navigate = useNavigate();
  const [selectedBill, setSelectedBill] = useState<string | null>(null);
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [step, setStep] = useState(1);

  const billTypes = [
    { id: 'electricity', label: 'Electricity', icon: '💡', color: colors.warning },
    { id: 'airtime', label: 'Airtime', icon: '📱', color: colors.primary[600] },
    { id: 'water', label: 'Water', icon: '💧', color: colors.info },
    { id: 'internet', label: 'Internet', icon: '🌐', color: colors.primary[700] },
    { id: 'tv', label: 'TV Subscription', icon: '📺', color: colors.accent[600] },
  ];

  const containerStyle = {
    width: '100%',
  };

  const billGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
    gap: spacing.lg,
    marginBottom: spacing.xl,
  };

  const billCardStyle = (selected: boolean) => ({
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    padding: spacing.xl,
    backgroundColor: selected ? colors.primary[50] : colors.surface,
    borderRadius: '16px',
    border: selected ? `2px solid ${colors.primary[600]}` : `1px solid ${colors.border}`,
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
  });

  const billIconStyle = {
    fontSize: '40px',
  };

  const handleBillSelect = (billId: string) => {
    setSelectedBill(billId);
    setStep(2);
  };

  const handleContinue = () => {
    if (!accountNumber || !amount) return;
    setStep(3);
  };

  return (
    <ScreenLayout title="Pay Bills" showBackButton onBack={() => navigate('/wallet')}>
      <div style={containerStyle}>
        {step === 1 && (
          <div>
            <h2 style={{ fontSize: typography.fontSize.xl, fontWeight: 600, marginBottom: spacing.lg }}>
              Select Bill Type
            </h2>
            <div style={billGridStyle}>
              {billTypes.map((bill) => (
                <div
                  key={bill.id}
                  style={billCardStyle(selectedBill === bill.id)}
                  onClick={() => handleBillSelect(bill.id)}
                >
                  <div style={billIconStyle}>{bill.icon}</div>
                  <span style={{ fontSize: typography.fontSize.base, fontWeight: 500 }}>
                    {bill.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <Button variant="ghost" size="md" onClick={() => setStep(1)} style={{ marginBottom: spacing.lg }}>
              ← Back to Bill Types
            </Button>
            <h2 style={{ fontSize: typography.fontSize.xl, fontWeight: 600, marginBottom: spacing.lg }}>
              Pay {billTypes.find(b => b.id === selectedBill)?.label}
            </h2>
            
            <div style={{ marginBottom: spacing.lg }}>
              <Input
                type="text"
                label="Account Number / Meter Number"
                placeholder="Enter account number"
                value={accountNumber}
                onChange={setAccountNumber}
              />
            </div>

            <div style={{ marginBottom: spacing.xl }}>
              <Input
                type="number"
                label="Amount"
                placeholder="0.00"
                value={amount}
                onChange={setAmount}
              />
            </div>

            <Button variant="primary" size="xl" fullWidth onClick={handleContinue}>
              Continue
            </Button>
          </div>
        )}

        {step === 3 && (
          <div>
            <Button variant="ghost" size="md" onClick={() => setStep(2)} style={{ marginBottom: spacing.lg }}>
              ← Back
            </Button>
            <h2 style={{ fontSize: typography.fontSize.xl, fontWeight: 600, marginBottom: spacing.lg }}>
              Confirm Payment
            </h2>

            <Card padding="lg" variant="elevated">
              <div style={{ marginBottom: spacing.lg }}>
                <div style={{ fontSize: typography.fontSize.sm, color: colors.text.tertiary, marginBottom: spacing.xs }}>
                  Bill Type
                </div>
                <div style={{ fontSize: typography.fontSize.lg, fontWeight: 500 }}>
                  {billTypes.find(b => b.id === selectedBill)?.label}
                </div>
              </div>
              <div style={{ marginBottom: spacing.lg }}>
                <div style={{ fontSize: typography.fontSize.sm, color: colors.text.tertiary, marginBottom: spacing.xs }}>
                  Account Number
                </div>
                <div style={{ fontSize: typography.fontSize.lg, fontWeight: 500 }}>{accountNumber}</div>
              </div>
              <div>
                <div style={{ fontSize: typography.fontSize.sm, color: colors.text.tertiary, marginBottom: spacing.xs }}>
                  Amount
                </div>
                <div style={{ fontSize: typography.fontSize['2xl'], fontWeight: 700, color: colors.primary[600] }}>
                  ₦{parseFloat(amount).toLocaleString()}
                </div>
              </div>
            </Card>

            <Button variant="primary" size="xl" fullWidth onClick={() => navigate('/wallet')} style={{ marginTop: spacing.xl }}>
              Confirm & Pay
            </Button>
          </div>
        )}
      </div>
    </ScreenLayout>
  );
};

export default PayBillsScreen;
