import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ScreenLayout from '../../components/layout/ScreenLayout';
import BottomNavigation from '../../components/layout/BottomNavigation';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import Input from '../../components/ui/Input';
import Icon from '../../components/ui/Icon';
import { colors, spacing, typography } from '../../types/theme';

const SellScreen: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [deliveryOption, setDeliveryOption] = useState<'pickup' | 'delivery' | 'both'>('both');
  const [escrowEnabled, setEscrowEnabled] = useState(true);

  const categories = [
    'Electronics', 'Furniture', 'Clothing', 'Vehicles', 'Home & Garden', 'Books', 'Sports', 'Other'
  ];

  const containerStyle = {
    width: '100%',
  };

  const uploadAreaStyle = {
    border: `2px dashed ${colors.border}`,
    borderRadius: '16px',
    padding: spacing['2xl'],
    textAlign: 'center' as const,
    cursor: 'pointer',
    backgroundColor: colors.surface,
    marginBottom: spacing.xl,
  };

  const categoryGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: spacing.md,
    marginBottom: spacing.xl,
  };

  const categoryButtonStyle = (selected: boolean) => ({
    padding: spacing.md,
    borderRadius: '12px',
    backgroundColor: selected ? colors.primary[600] : colors.surface,
    color: selected ? colors.text.inverse : colors.text.primary,
    fontWeight: selected ? 600 : 400,
    cursor: 'pointer',
    fontSize: typography.fontSize.base,
    border: selected ? 'none' : `1px solid ${colors.border}`,
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
      if (!title || !price) return;
      setStep(2);
    } else if (step === 2) {
      if (!category) return;
      setStep(3);
    } else if (step === 3) {
      // Post item
      navigate('/market');
    }
  };

  return (
    <ScreenLayout title="Sell Item">
      <div style={containerStyle}>
        {step === 1 && (
          <div>
            <h2 style={{ fontSize: typography.fontSize.xl, fontWeight: 600, marginBottom: spacing.lg }}>
              Add Photos & Details
            </h2>

            <div style={uploadAreaStyle}>
              <Icon name="camera" size={48} style={{ color: colors.text.tertiary, marginBottom: spacing.md }} />
              <div style={{ fontSize: typography.fontSize.lg, fontWeight: 500, marginBottom: spacing.xs }}>
                Tap to add photos
              </div>
              <div style={{ fontSize: typography.fontSize.sm, color: colors.text.tertiary }}>
                Add up to 5 photos
              </div>
            </div>

            <Input
              type="text"
              label="Item Title"
              placeholder="What are you selling?"
              value={title}
              onChange={setTitle}
              fullWidth
            />

            <Input
              type="number"
              label="Price (₦)"
              placeholder="0.00"
              value={price}
              onChange={setPrice}
              fullWidth
            />

            <Input
              type="text"
              label="Description (Optional)"
              placeholder="Describe your item..."
              value={description}
              onChange={setDescription}
            />

            <Button variant="primary" size="xl" fullWidth onClick={handleContinue} style={{ marginTop: spacing.xl }}>
              Continue
            </Button>
          </div>
        )}

        {step === 2 && (
          <div>
            <Button variant="ghost" size="md" onClick={() => setStep(1)} style={{ marginBottom: spacing.lg }}>
              ← Back
            </Button>
            <h2 style={{ fontSize: typography.fontSize.xl, fontWeight: 600, marginBottom: spacing.lg }}>
              Select Category
            </h2>

            <div style={categoryGridStyle}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  style={categoryButtonStyle(category === cat)}
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </button>
              ))}
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
              Delivery & Payment
            </h2>

            <div style={{ marginBottom: spacing.xl }}>
              <div style={{ fontSize: typography.fontSize.base, fontWeight: 600, marginBottom: spacing.md }}>
                Delivery Option
              </div>
              <div style={{ display: 'flex', gap: spacing.md }}>
                <button
                  style={optionButtonStyle(deliveryOption === 'pickup')}
                  onClick={() => setDeliveryOption('pickup')}
                >
                  📍 Pickup Only
                </button>
                <button
                  style={optionButtonStyle(deliveryOption === 'delivery')}
                  onClick={() => setDeliveryOption('delivery')}
                >
                  🚚 Delivery
                </button>
                <button
                  style={optionButtonStyle(deliveryOption === 'both')}
                  onClick={() => setDeliveryOption('both')}
                >
                  Both
                </button>
              </div>
            </div>

            <Card padding="lg" variant="outlined" style={{ marginBottom: spacing.xl, border: `2px solid ${colors.primary[200]}` }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: spacing.md }}>
                <Icon name="shield" size={24} style={{ color: colors.primary[600], flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h4 style={{ fontSize: typography.fontSize.base, fontWeight: 600, marginBottom: spacing.xs }}>
                      Enable Escrow
                    </h4>
                    <button
                      onClick={() => setEscrowEnabled(!escrowEnabled)}
                      style={{
                        width: '50px',
                        height: '28px',
                        borderRadius: '14px',
                        backgroundColor: escrowEnabled ? colors.primary[600] : colors.neutral[300],
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
                          left: escrowEnabled ? '25px' : '3px',
                          transition: 'left 0.2s',
                        }}
                      />
                    </button>
                  </div>
                  <p style={{ fontSize: typography.fontSize.sm, color: colors.text.secondary }}>
                    Hold payment until buyer confirms delivery. Builds trust with buyers.
                  </p>
                </div>
              </div>
            </Card>

            <Card padding="lg" variant="elevated" style={{ marginBottom: spacing.xl }}>
              <div style={{ marginBottom: spacing.md }}>
                <div style={{ fontSize: typography.fontSize.sm, color: colors.text.tertiary, marginBottom: spacing.xs }}>
                  Item
                </div>
                <div style={{ fontSize: typography.fontSize.lg, fontWeight: 500 }}>{title}</div>
              </div>
              <div style={{ marginBottom: spacing.md }}>
                <div style={{ fontSize: typography.fontSize.sm, color: colors.text.tertiary, marginBottom: spacing.xs }}>
                  Price
                </div>
                <div style={{ fontSize: typography.fontSize['2xl'], fontWeight: 700, color: colors.primary[600] }}>
                  ₦{parseFloat(price).toLocaleString()}
                </div>
              </div>
              <div>
                <div style={{ fontSize: typography.fontSize.sm, color: colors.text.tertiary, marginBottom: spacing.xs }}>
                  Category
                </div>
                <div style={{ fontSize: typography.fontSize.base, fontWeight: 500 }}>{category}</div>
              </div>
            </Card>

            <Button variant="accent" size="xl" fullWidth onClick={handleContinue}>
              Post Item
            </Button>
          </div>
        )}
      </div>

      <BottomNavigation />
    </ScreenLayout>
  );
};

export default SellScreen;
