import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ScreenLayout from '../../components/layout/ScreenLayout';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import Icon from '../../components/ui/Icon';
import Badge from '../../components/ui/Badge';
import { colors, spacing, typography } from '../../types/theme';

const ItemDetailScreen: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showEscrow, setShowEscrow] = useState(false);

  // Mock item data
  const item = {
    id: 1,
    title: 'Garden Chair',
    description: 'Beautiful garden chair in excellent condition. Perfect for your patio or garden. Made of durable material, weather-resistant.',
    price: 15000,
    image: '🪑',
    category: 'Furniture',
    condition: 'Like New',
    distance: '0.5 km',
    location: 'Ikeja, Lagos',
    seller: {
      name: 'John Doe',
      phone: '+234 812 345 6789',
      isVerified: true,
      rating: 4.8,
      reviewCount: 23,
      responseRate: 95,
    },
    deliveryOption: 'both',
    paymentMethods: ['wallet', 'mobile-money', 'cash'],
    escrowEnabled: true,
    postedAt: '2 days ago',
  };

  const containerStyle = {
    width: '100%',
  };

  const imageStyle = {
    width: '100%',
    height: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '120px',
    backgroundColor: colors.surface,
    borderRadius: '16px',
    marginBottom: spacing.xl,
  };

  const sellerCardStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.lg,
    padding: spacing.lg,
    backgroundColor: colors.surface,
    borderRadius: '16px',
    border: `1px solid ${colors.border}`,
    marginBottom: spacing.xl,
  };

  const specItemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: `${spacing.md} 0`,
    borderBottom: `1px solid ${colors.borderLight}`,
  };

  return (
    <ScreenLayout title="Item Details" showBackButton onBack={() => navigate('/market')}>
      <div style={containerStyle}>
        {/* Image */}
        <div style={imageStyle}>{item.image}</div>

        {/* Title & Price */}
        <div style={{ marginBottom: spacing.xl }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: spacing.md }}>
            <h1 style={{ fontSize: typography.fontSize['2xl'], fontWeight: 700, color: colors.text.primary }}>
              {item.title}
            </h1>
            <Badge variant="success">{item.condition}</Badge>
          </div>
          <div style={{ fontSize: typography.fontSize['3xl'], fontWeight: 700, color: colors.primary[600] }}>
            ₦{item.price.toLocaleString()}
          </div>
        </div>

        {/* Description */}
        <Card padding="lg" style={{ marginBottom: spacing.xl }}>
          <h3 style={{ fontSize: typography.fontSize.lg, fontWeight: 600, marginBottom: spacing.md }}>
            Description
          </h3>
          <p style={{ fontSize: typography.fontSize.base, lineHeight: typography.lineHeight.relaxed, color: colors.text.secondary }}>
            {item.description}
          </p>
        </Card>

        {/* Specifications */}
        <Card padding="lg" style={{ marginBottom: spacing.xl }}>
          <h3 style={{ fontSize: typography.fontSize.lg, fontWeight: 600, marginBottom: spacing.md }}>
            Details
          </h3>
          <div style={specItemStyle}>
            <span style={{ color: colors.text.tertiary }}>Category</span>
            <span style={{ fontWeight: 500 }}>{item.category}</span>
          </div>
          <div style={specItemStyle}>
            <span style={{ color: colors.text.tertiary }}>Condition</span>
            <span style={{ fontWeight: 500 }}>{item.condition}</span>
          </div>
          <div style={specItemStyle}>
            <span style={{ color: colors.text.tertiary }}>Location</span>
            <span style={{ fontWeight: 500 }}>{item.location}</span>
          </div>
          <div style={specItemStyle}>
            <span style={{ color: colors.text.tertiary }}>Distance</span>
            <span style={{ fontWeight: 500 }}>{item.distance}</span>
          </div>
          <div style={specItemStyle}>
            <span style={{ color: colors.text.tertiary }}>Posted</span>
            <span style={{ fontWeight: 500 }}>{item.postedAt}</span>
          </div>
        </Card>

        {/* Seller Info */}
        <h3 style={{ fontSize: typography.fontSize.lg, fontWeight: 600, marginBottom: spacing.md }}>
          Seller
        </h3>
        <div style={sellerCardStyle}>
          <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: colors.primary[100], display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>
            👤
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: spacing.sm }}>
              <span style={{ fontSize: typography.fontSize.lg, fontWeight: 600 }}>{item.seller.name}</span>
              {item.seller.isVerified && <Icon name="verified" size={16} style={{ color: colors.primary[600] }} />}
            </div>
            <div style={{ fontSize: typography.fontSize.sm, color: colors.text.tertiary, marginTop: spacing.xs }}>
              ⭐ {item.seller.rating} ({item.seller.reviewCount} reviews) • {item.seller.responseRate}% response rate
            </div>
          </div>
        </div>

        {/* Escrow Option */}
        {item.escrowEnabled && (
          <Card padding="lg" variant="outlined" style={{ marginBottom: spacing.xl, border: `2px solid ${colors.primary[200]}` }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: spacing.md }}>
              <Icon name="shield" size={24} style={{ color: colors.primary[600], flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <h4 style={{ fontSize: typography.fontSize.base, fontWeight: 600, marginBottom: spacing.xs }}>
                  Protected by Escrow
                </h4>
                <p style={{ fontSize: typography.fontSize.sm, color: colors.text.secondary }}>
                  Your payment is held safely until you confirm delivery. Get a full refund if the item doesn't match the description.
                </p>
              </div>
            </div>
          </Card>
        )}

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: spacing.md, marginBottom: spacing['5xl'] }}>
          <Button variant="secondary" size="xl" style={{ flex: 1 }} onClick={() => navigate(`/market/item/${id}/message`)}>
            <Icon name="message" size={20} />
            Message
          </Button>
          <Button variant="accent" size="xl" style={{ flex: 2 }} onClick={() => navigate(`/market/item/${id}/buy`)}>
            <Icon name="market" size={20} />
            Buy Now
          </Button>
        </div>
      </div>
    </ScreenLayout>
  );
};

export default ItemDetailScreen;
