import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ScreenLayout from '../../components/layout/ScreenLayout';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import Icon from '../../components/ui/Icon';
import { colors, spacing, typography } from '../../types/theme';

const BuyFlowScreen: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [step, setStep] = useState(1);
  const [selectedPayment, setSelectedPayment] = useState<'wallet' | 'mobile-money' | 'cash'>('wallet');
  const [useEscrow, setUseEscrow] = useState(true);
  const [deliveryOption, setDeliveryOption] = useState<'pickup' | 'delivery'>('pickup');

  // Mock item data
  const item = {
    title: 'Garden Chair',
    price: 15000,
    image: '🪑',
  };

  const paymentMethods = [
    { id: 'wallet', label: 'SafePay Wallet', icon: 'wallet', description: 'Pay from your wallet balance' },
    { id: 'mobile-money', label: 'Mobile Money', icon: 'bills', description: 'Pay via mobile money' },
    { id: 'cash', label: 'Cash on Delivery', icon: 'receive', description: 'Pay when you receive the item' },
  ];

  const containerStyle = {
    width: '100%',
  };

  const paymentCardStyle = (selected: boolean) => ({
    display: 'flex',
    alignItems: 'center',
    gap: spacing.lg,
    padding: spacing.lg,
    backgroundColor: selected ? colors.primary[50] : colors.surface,
    borderRadius: '12px',
    border: selected ? `2px solid ${colors.primary[600]}` : `1px solid ${colors.border}`,
    cursor: 'pointer',
    marginBottom: spacing.md,
  });

  const optionButtonStyle = (selected: boolean) => ({
    flex: 1,
    padding: spacing.lg,
    borderRadius: '12px',
    backgroundColor: selected ? colors.primary[600] : colors.surface,
    color: selected ? colors.text.inverse : colors.text.primary,
    fontWeight: selected ? 600 : 400,
    cursor: 'pointer',
    fontSize: typography.fontSize.base,
    border: selected ? 'none' : `1px solid ${colors.border}`,
  });

  const handleContinue = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      // Complete purchase
      navigate('/market');
    }
  };

  return (
    <ScreenLayout title="Buy Item" showBackButton onBack={() => step > 1 ? setStep(step - 1) : navigate(`/market/item/${id}`)}>
      <div style={containerStyle}>
        {/* Item Summary */}
        <Card padding="lg" style={{ marginBottom: spacing.xl }}>
          <div style={{ display: 'flex', gap: spacing.lg, alignItems: 'center' }}>
            <div style={{ fontSize: '60px' }}>{item.image}</div>
            <div>
              <div style={{ fontSize: typography.fontSize.lg, fontWeight: 600 }}>{item.title}</div>
              <div style={{ fontSize: typography.fontSize['2xl'], fontWeight: 700, color: colors.primary[600] }}>
                ₦{item.price.toLocaleString()}
              </div>
            </div>
          </div>
        </Card>

        {step === 1 && (
          <div>
            <h2 style={{ fontSize: typography.fontSize.xl, fontWeight: 600, marginBottom: spacing.lg }}>
              Select Payment Method
            </h2>
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                style={paymentCardStyle(selectedPayment === method.id)}
                onClick={() => setSelectedPayment(method.id as any)}
              >
                <Icon name={method.icon} size={32} style={{ color: selectedPayment === method.id ? colors.primary[600] : colors.text.tertiary }} />
                <div>
                  <div style={{ fontSize: typography.fontSize.base, fontWeight: 500 }}>{method.label}</div>
                  <div style={{ fontSize: typography.fontSize.sm, color: colors.text.tertiary }}>{method.description}</div>
                </div>
                {selectedPayment === method.id && <Icon name="check" size={20} style={{ color: colors.primary[600] }} />}
              </div>
            ))}
            <Button variant="primary" size="xl" fullWidth onClick={handleContinue} style={{ marginTop: spacing.xl }}>
              Continue
            </Button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 style={{ fontSize: typography.fontSize.xl, fontWeight: 600, marginBottom: spacing.lg }}>
              Delivery Option
            </h2>
            <div style={{ display: 'flex', gap: spacing.md, marginBottom: spacing.xl }}>
              <button
                style={optionButtonStyle(deliveryOption === 'pickup')}
                onClick={() => setDeliveryOption('pickup')}
              >
                📍 Pickup
              </button>
              <button
                style={optionButtonStyle(deliveryOption === 'delivery')}
                onClick={() => setDeliveryOption('delivery')}
              >
                🚚 Delivery
              </button>
            </div>

            <Card padding="lg" variant="outlined" style={{ marginBottom: spacing.xl }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: spacing.md }}>
                <Icon name="shield" size={24} style={{ color: colors.primary[600], flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h4 style={{ fontSize: typography.fontSize.base, fontWeight: 600, marginBottom: spacing.xs }}>
                      Enable Escrow Protection
                    </h4>
                    <button
                      onClick={() => setUseEscrow(!useEscrow)}
                      style={{
                        width: '50px',
                        height: '28px',
                        borderRadius: '14px',
                        backgroundColor: useEscrow ? colors.primary[600] : colors.neutral[300],
                        border: 'none',
                        cursor: 'pointer',
                        position: 'relative',
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
                          left: useEscrow ? '25px' : '3px',
                          transition: 'left 0.2s',
                        }}
                      />
                    </button>
                  </div>
                  <p style={{ fontSize: typography.fontSize.sm, color: colors.text.secondary }}>
                    Your payment is held until you confirm delivery. Recommended for first-time buyers.
                  </p>
                </div>
              </div>
            </Card>

            <Button variant="primary" size="xl" fullWidth onClick={handleContinue}>
              Continue
            </Button>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 style={{ fontSize: typography.fontSize.xl, fontWeight: 600, marginBottom: spacing.lg }}>
              Confirm Purchase
            </h2>
            
            <Card padding="lg" variant="elevated" style={{ marginBottom: spacing.xl }}>
              <div style={{ marginBottom: spacing.lg }}>
                <div style={{ fontSize: typography.fontSize.sm, color: colors.text.tertiary, marginBottom: spacing.xs }}>
                  Item
                </div>
                <div style={{ fontSize: typography.fontSize.lg, fontWeight: 500 }}>{item.title}</div>
              </div>
              <div style={{ marginBottom: spacing.lg }}>
                <div style={{ fontSize: typography.fontSize.sm, color: colors.text.tertiary, marginBottom: spacing.xs }}>
                  Price
                </div>
                <div style={{ fontSize: typography.fontSize['2xl'], fontWeight: 700, color: colors.primary[600] }}>
                  ₦{item.price.toLocaleString()}
                </div>
              </div>
              <div style={{ marginBottom: spacing.lg }}>
                <div style={{ fontSize: typography.fontSize.sm, color: colors.text.tertiary, marginBottom: spacing.xs }}>
                  Payment Method
                </div>
                <div style={{ fontSize: typography.fontSize.base, fontWeight: 500 }}>
                  {paymentMethods.find(m => m.id === selectedPayment)?.label}
                </div>
              </div>
              <div style={{ marginBottom: spacing.lg }}>
                <div style={{ fontSize: typography.fontSize.sm, color: colors.text.tertiary, marginBottom: spacing.xs }}>
                  Delivery
                </div>
                <div style={{ fontSize: typography.fontSize.base, fontWeight: 500 }}>
                  {deliveryOption === 'pickup' ? 'Pickup' : 'Delivery'}
                </div>
              </div>
              {useEscrow && (
                <div>
                  <div style={{ fontSize: typography.fontSize.sm, color: colors.text.tertiary, marginBottom: spacing.xs }}>
                    Protection
                  </div>
                  <div style={{ fontSize: typography.fontSize.base, fontWeight: 500, color: colors.primary[600] }}>
                    ✓ Escrow Enabled
                  </div>
                </div>
              )}
            </Card>

            <Button variant="accent" size="xl" fullWidth onClick={handleContinue}>
              Confirm Purchase
            </Button>
          </div>
        )}
      </div>
    </ScreenLayout>
  );
};

export default BuyFlowScreen;
