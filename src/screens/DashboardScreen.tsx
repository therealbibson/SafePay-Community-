import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScreenLayout from '../components/layout/ScreenLayout';
import BottomNavigation from '../components/layout/BottomNavigation';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Icon from '../components/ui/Icon';
import { colors, spacing, typography } from '../types/theme';
import { useAuth } from '../context/AuthContext';

const DashboardScreen: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const quickActions = [
    { id: 'send', label: 'Send Money', icon: 'send', color: colors.primary[600], path: '/wallet/send' },
    { id: 'receive', label: 'Receive', icon: 'receive', color: colors.primary[500], path: '/wallet/receive' },
    { id: 'bills', label: 'Pay Bills', icon: 'bills', color: colors.accent[600], path: '/wallet/bills' },
    { id: 'savings', label: 'Savings', icon: 'savings', color: colors.primary[700], path: '/wallet/savings' },
  ];

  const recentTransactions = [
    { id: 1, type: 'receive', amount: 5000, description: 'From John Doe', date: 'Today' },
    { id: 2, type: 'send', amount: 2000, description: 'To Mary Smith', date: 'Yesterday' },
    { id: 3, type: 'bill', amount: 1500, description: 'Electricity Bill', date: '2 days ago' },
  ];

  const featuredItems = [
    { id: 1, title: 'Garden Chair', price: 15000, image: '🪑', distance: '0.5 km' },
    { id: 2, title: 'Handmade Basket', price: 5000, image: '🧺', distance: '1.2 km' },
    { id: 3, title: 'Used Laptop', price: 45000, image: '💻', distance: '2.0 km' },
  ];

  const balanceCardStyle = {
    background: `linear-gradient(135deg, ${colors.primary[600]} 0%, ${colors.primary[800]} 100%)`,
    borderRadius: '20px',
    padding: spacing['2xl'],
    color: colors.text.inverse,
    marginBottom: spacing.xl,
  };

  const balanceLabelStyle = {
    fontSize: typography.fontSize.lg,
    opacity: 0.9,
    marginBottom: spacing.sm,
  };

  const balanceAmountStyle = {
    fontSize: typography.fontSize['4xl'],
    fontWeight: typography.fontWeight.bold,
    marginBottom: spacing.md,
  };

  const quickActionsContainer = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: spacing.lg,
    marginBottom: spacing.xl,
  };

  const actionCardStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    padding: spacing.xl,
    backgroundColor: colors.surface,
    borderRadius: '16px',
    border: `1px solid ${colors.border}`,
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
  };

  const actionIconStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
  };

  const actionLabelStyle = {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.medium,
    color: colors.text.primary,
  };

  const sectionTitleStyle = {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.semibold,
    color: colors.text.primary,
    marginBottom: spacing.lg,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const seeAllStyle = {
    fontSize: typography.fontSize.base,
    color: colors.primary[600],
    cursor: 'pointer',
  };

  const transactionItemStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: `${spacing.lg} 0`,
    borderBottom: `1px solid ${colors.borderLight}`,
  };

  const transactionLeftStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.md,
  };

  const transactionIconStyle = {
    width: '45px',
    height: '45px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
  };

  const transactionAmountStyle = (type: string) => ({
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.semibold,
    color: type === 'receive' ? colors.primary[600] : colors.text.primary,
  });

  const featuredItemsContainer = {
    display: 'flex',
    gap: spacing.lg,
    overflowX: 'auto' as const,
    paddingBottom: spacing.md,
  };

  const featuredItemStyle = {
    minWidth: '160px',
    backgroundColor: colors.surface,
    borderRadius: '16px',
    padding: spacing.lg,
    border: `1px solid ${colors.border}`,
  };

  const itemImageStyle = {
    fontSize: '60px',
    marginBottom: spacing.md,
  };

  return (
    <ScreenLayout title="Home">
      <div style={{ marginBottom: spacing['5xl'] }}>
        {/* Balance Card */}
        <div style={balanceCardStyle}>
          <div style={balanceLabelStyle}>Total Balance</div>
          <div style={balanceAmountStyle}>
            ₦{user?.balance?.toLocaleString() || '0'}
          </div>
          <Button variant="secondary" size="md" onClick={() => navigate('/wallet')}>
            View Wallet →
          </Button>
        </div>

        {/* Quick Actions */}
        <div style={sectionTitleStyle}>
          <span>Quick Actions</span>
        </div>
        <div style={quickActionsContainer}>
          {quickActions.map((action) => (
            <div
              key={action.id}
              style={actionCardStyle}
              onClick={() => navigate(action.path)}
            >
              <div style={{ ...actionIconStyle, backgroundColor: `${action.color}20` }}>
                <Icon name={action.icon} size={24} style={{ color: action.color }} />
              </div>
              <span style={actionLabelStyle}>{action.label}</span>
            </div>
          ))}
        </div>

        {/* Recent Transactions */}
        <div style={sectionTitleStyle}>
          <span>Recent Transactions</span>
          <span style={seeAllStyle} onClick={() => navigate('/wallet/transactions')}>
            See All
          </span>
        </div>
        <Card padding="lg">
          {recentTransactions.map((tx) => (
            <div key={tx.id} style={transactionItemStyle}>
              <div style={transactionLeftStyle}>
                <div
                  style={{
                    ...transactionIconStyle,
                    backgroundColor:
                      tx.type === 'receive'
                        ? colors.primary[100]
                        : tx.type === 'send'
                        ? colors.accent[100]
                        : colors.neutral[100],
                  }}
                >
                  <Icon
                    name={tx.type === 'receive' ? 'receive' : tx.type === 'send' ? 'send' : 'bills'}
                    size={20}
                    style={{
                      color:
                        tx.type === 'receive'
                          ? colors.primary[600]
                          : tx.type === 'send'
                          ? colors.accent[600]
                          : colors.neutral[600],
                    }}
                  />
                </div>
                <div>
                  <div style={{ fontSize: typography.fontSize.base, fontWeight: 500 }}>
                    {tx.description}
                  </div>
                  <div style={{ fontSize: typography.fontSize.sm, color: colors.text.tertiary }}>
                    {tx.date}
                  </div>
                </div>
              </div>
              <div style={transactionAmountStyle(tx.type)}>
                {tx.type === 'receive' ? '+' : '-'}₦{tx.amount.toLocaleString()}
              </div>
            </div>
          ))}
        </Card>

        {/* Featured Items */}
        <div style={{ ...sectionTitleStyle, marginTop: spacing.xl }}>
          <span>Nearby Items</span>
          <span style={seeAllStyle} onClick={() => navigate('/market')}>
            Browse All
          </span>
        </div>
        <div style={featuredItemsContainer}>
          {featuredItems.map((item) => (
            <div key={item.id} style={featuredItemStyle} onClick={() => navigate(`/market/item/${item.id}`)}>
              <div style={itemImageStyle}>{item.image}</div>
              <div style={{ fontSize: typography.fontSize.base, fontWeight: 600, marginBottom: spacing.xs }}>
                {item.title}
              </div>
              <div style={{ fontSize: typography.fontSize.lg, fontWeight: typography.fontWeight.bold, color: colors.primary[600] }}>
                ₦{item.price.toLocaleString()}
              </div>
              <div style={{ fontSize: typography.fontSize.sm, color: colors.text.tertiary, marginTop: spacing.xs }}>
                {item.distance}
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNavigation />
    </ScreenLayout>
  );
};

export default DashboardScreen;
