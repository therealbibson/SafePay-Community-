import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ScreenLayout from '../../components/layout/ScreenLayout';
import BottomNavigation from '../../components/layout/BottomNavigation';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import Icon from '../../components/ui/Icon';
import Badge from '../../components/ui/Badge';
import { colors, spacing, typography } from '../../types/theme';

const SellerDashboardScreen: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('listings');

  const listings = [
    { id: 1, title: 'Garden Chair', price: 15000, image: '🪑', status: 'active', views: 45, inquiries: 3 },
    { id: 2, title: 'Handmade Basket', price: 5000, image: '🧺', status: 'active', views: 32, inquiries: 1 },
    { id: 3, title: 'Used Laptop', price: 45000, image: '💻', status: 'sold', views: 120, inquiries: 8 },
  ];

  const messages = [
    { id: 1, item: 'Garden Chair', buyer: 'John D.', lastMessage: 'Is this still available?', time: '2 hours ago', unread: true },
    { id: 2, item: 'Handmade Basket', buyer: 'Mary S.', lastMessage: 'Can you deliver?', time: '1 day ago', unread: false },
  ];

  const sales = [
    { id: 1, item: 'Used Laptop', buyer: 'James B.', amount: 45000, date: '3 days ago', status: 'completed' },
    { id: 2, item: 'Men\'s Shirt', buyer: 'Sarah W.', amount: 3000, date: '1 week ago', status: 'completed' },
  ];

  const containerStyle = {
    width: '100%',
  };

  const tabContainerStyle = {
    display: 'flex',
    gap: spacing.sm,
    marginBottom: spacing.xl,
    backgroundColor: colors.surface,
    padding: spacing.xs,
    borderRadius: '12px',
  };

  const tabStyle = (active: boolean) => ({
    flex: 1,
    padding: `${spacing.sm} ${spacing.lg}`,
    border: 'none',
    borderRadius: '8px',
    backgroundColor: active ? colors.background : 'transparent',
    color: active ? colors.primary[600] : colors.text.secondary,
    fontWeight: active ? 600 : 400,
    cursor: 'pointer',
    fontSize: typography.fontSize.base,
  });

  const listingCardStyle = {
    display: 'flex',
    gap: spacing.lg,
    padding: spacing.lg,
    backgroundColor: colors.surface,
    borderRadius: '16px',
    border: `1px solid ${colors.border}`,
    marginBottom: spacing.lg,
  };

  const messageCardStyle = {
    display: 'flex',
    gap: spacing.lg,
    padding: spacing.lg,
    backgroundColor: colors.surface,
    borderRadius: '16px',
    border: `1px solid ${colors.border}`,
    marginBottom: spacing.lg,
    cursor: 'pointer',
  };

  return (
    <ScreenLayout title="Seller Dashboard" showBackButton onBack={() => navigate('/sell')}>
      <div style={containerStyle}>
        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: spacing.md, marginBottom: spacing.xl }}>
          <Card padding="lg" variant="elevated">
            <div style={{ fontSize: typography.fontSize['2xl'], fontWeight: 700, color: colors.primary[600] }}>
              3
            </div>
            <div style={{ fontSize: typography.fontSize.sm, color: colors.text.tertiary }}>
              Active Listings
            </div>
          </Card>
          <Card padding="lg" variant="elevated">
            <div style={{ fontSize: typography.fontSize['2xl'], fontWeight: 700, color: colors.accent[600] }}>
              2
            </div>
            <div style={{ fontSize: typography.fontSize.sm, color: colors.text.tertiary }}>
              New Messages
            </div>
          </Card>
          <Card padding="lg" variant="elevated">
            <div style={{ fontSize: typography.fontSize['2xl'], fontWeight: 700, color: colors.success }}>
              ₦48K
            </div>
            <div style={{ fontSize: typography.fontSize.sm, color: colors.text.tertiary }}>
              Total Sales
            </div>
          </Card>
        </div>

        {/* Tabs */}
        <div style={tabContainerStyle}>
          <button style={tabStyle(activeTab === 'listings')} onClick={() => setActiveTab('listings')}>
            My Listings
          </button>
          <button style={tabStyle(activeTab === 'messages')} onClick={() => setActiveTab('messages')}>
            Messages
          </button>
          <button style={tabStyle(activeTab === 'sales')} onClick={() => setActiveTab('sales')}>
            Sales
          </button>
        </div>

        {activeTab === 'listings' && (
          <div>
            {listings.map((item) => (
              <div key={item.id} style={listingCardStyle}>
                <div style={{ fontSize: '60px' }}>{item.image}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: spacing.xs }}>
                    <div style={{ fontSize: typography.fontSize.lg, fontWeight: 600 }}>{item.title}</div>
                    <Badge variant={item.status === 'active' ? 'success' : 'neutral'}>
                      {item.status}
                    </Badge>
                  </div>
                  <div style={{ fontSize: typography.fontSize.lg, fontWeight: 700, color: colors.primary[600], marginBottom: spacing.sm }}>
                    ₦{item.price.toLocaleString()}
                  </div>
                  <div style={{ fontSize: typography.fontSize.sm, color: colors.text.tertiary }}>
                    👁 {item.views} views • 💬 {item.inquiries} inquiries
                  </div>
                </div>
              </div>
            ))}
            <Button variant="primary" size="xl" fullWidth onClick={() => navigate('/sell')}>
              <Icon name="sell" size={20} />
              Post New Item
            </Button>
          </div>
        )}

        {activeTab === 'messages' && (
          <div>
            {messages.map((msg) => (
              <div key={msg.id} style={messageCardStyle}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: colors.primary[100], display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>
                  👤
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: spacing.xs }}>
                    <div style={{ fontSize: typography.fontSize.base, fontWeight: 600 }}>{msg.buyer}</div>
                    <div style={{ fontSize: typography.fontSize.sm, color: colors.text.tertiary }}>{msg.time}</div>
                  </div>
                  <div style={{ fontSize: typography.fontSize.sm, color: colors.text.tertiary, marginBottom: spacing.xs }}>
                    Re: {msg.item}
                  </div>
                  <div style={{ fontSize: typography.fontSize.base, fontWeight: msg.unread ? 600 : 400 }}>
                    {msg.lastMessage}
                  </div>
                </div>
                {msg.unread && (
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: colors.primary[600] }} />
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'sales' && (
          <div>
            {sales.map((sale) => (
              <div key={sale.id} style={listingCardStyle}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: typography.fontSize.lg, fontWeight: 600, marginBottom: spacing.xs }}>
                    {sale.item}
                  </div>
                  <div style={{ fontSize: typography.fontSize.sm, color: colors.text.tertiary, marginBottom: spacing.sm }}>
                    Buyer: {sale.buyer}
                  </div>
                  <div style={{ fontSize: typography.fontSize.lg, fontWeight: 700, color: colors.primary[600], marginBottom: spacing.xs }}>
                    ₦{sale.amount.toLocaleString()}
                  </div>
                  <div style={{ fontSize: typography.fontSize.sm, color: colors.text.tertiary }}>
                    {sale.date}
                  </div>
                </div>
                <Badge variant="success">{sale.status}</Badge>
              </div>
            ))}
          </div>
        )}
      </div>

      <BottomNavigation />
    </ScreenLayout>
  );
};

export default SellerDashboardScreen;
