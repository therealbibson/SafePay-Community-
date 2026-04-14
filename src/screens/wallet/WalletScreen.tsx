import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScreenLayout from '../../components/layout/ScreenLayout';
import BottomNavigation from '../../components/layout/BottomNavigation';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import Icon from '../../components/ui/Icon';
import { colors, spacing, typography } from '../../types/theme';
import { useAuth } from '../../context/AuthContext';

const WalletScreen: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const walletActions = [
    { id: 'send', label: 'Send Money', icon: 'send', color: colors.primary[600], path: '/wallet/send' },
    { id: 'receive', label: 'Receive Money', icon: 'receive', color: colors.primary[500], path: '/wallet/receive' },
    { id: 'bills', label: 'Pay Bills', icon: 'bills', color: colors.accent[600], path: '/wallet/bills' },
    { id: 'savings', label: 'Savings', icon: 'savings', color: colors.primary[700], path: '/wallet/savings' },
    { id: 'history', label: 'History', icon: 'search', color: colors.neutral[600], path: '/wallet/transactions' },
  ];

  const recentTransactions = [
    { id: 1, type: 'receive', amount: 5000, description: 'From John Doe', date: 'Today, 2:30 PM' },
    { id: 2, type: 'send', amount: 2000, description: 'To Mary Smith', date: 'Yesterday, 5:15 PM' },
    { id: 3, type: 'bill', amount: 1500, description: 'Electricity Bill', date: '2 days ago' },
    { id: 4, type: 'receive', amount: 10000, description: 'From James Brown', date: '3 days ago' },
    { id: 5, type: 'send', amount: 3000, description: 'To Sarah Wilson', date: '4 days ago' },
  ];

  const balanceCardStyle = {
    background: `linear-gradient(135deg, ${colors.primary[600]} 0%, ${colors.primary[800]} 100%)`,
    borderRadius: '20px',
    padding: spacing['2xl'],
    color: colors.text.inverse,
    marginBottom: spacing.xl,
  };

  const actionGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
    gap: spacing.lg,
    marginBottom: spacing.xl,
  };

  const actionCardStyle = (color: string) => ({
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
    '&:hover': {
      backgroundColor: `${color}10`,
      borderColor: color,
    },
  });

  const actionIconStyle = (color: string) => ({
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: `${color}20`,
  });

  const transactionItemStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: `${spacing.lg} 0`,
    borderBottom: `1px solid ${colors.borderLight}`,
  };

  const transactionAmountStyle = (type: string) => ({
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.semibold,
    color: type === 'receive' ? colors.primary[600] : colors.text.primary,
  });

  return (
    <ScreenLayout title="Wallet">
      <div style={{ marginBottom: spacing['5xl'] }}>
        {/* Balance Card */}
        <div style={balanceCardStyle}>
          <div style={{ fontSize: typography.fontSize.lg, opacity: 0.9, marginBottom: spacing.sm }}>
            Available Balance
          </div>
          <div style={{ fontSize: typography.fontSize['4xl'], fontWeight: typography.fontWeight.bold, marginBottom: spacing.md }}>
            ₦{user?.balance?.toLocaleString() || '0'}
          </div>
          <div style={{ display: 'flex', gap: spacing.md }}>
            <Button variant="secondary" size="md" onClick={() => navigate('/wallet/send')}>
              Send Money
            </Button>
            <Button variant="secondary" size="md" onClick={() => navigate('/wallet/receive')}>
              Receive
            </Button>
          </div>
        </div>

        {/* Wallet Actions */}
        <div style={actionGridStyle}>
          {walletActions.map((action) => (
            <div
              key={action.id}
              style={actionCardStyle(action.color)}
              onClick={() => navigate(action.path)}
            >
              <div style={actionIconStyle(action.color)}>
                <Icon name={action.icon} size={24} style={{ color: action.color }} />
              </div>
              <span style={{ fontSize: typography.fontSize.base, fontWeight: 500, color: colors.text.primary }}>
                {action.label}
              </span>
            </div>
          ))}
        </div>

        {/* Recent Transactions */}
        <div style={{ fontSize: typography.fontSize.xl, fontWeight: 600, color: colors.text.primary, marginBottom: spacing.lg }}>
          Recent Transactions
        </div>
        <Card padding="lg">
          {recentTransactions.map((tx) => (
            <div key={tx.id} style={transactionItemStyle}>
              <div style={{ display: 'flex', alignItems: 'center', gap: spacing.md }}>
                <div
                  style={{
                    width: '45px',
                    height: '45px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
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
          <div style={{ marginTop: spacing.lg, textAlign: 'center' }}>
            <Button variant="ghost" size="md" onClick={() => navigate('/wallet/transactions')}>
              View All Transactions
            </Button>
          </div>
        </Card>
      </div>

      <BottomNavigation />
    </ScreenLayout>
  );
};

export default WalletScreen;
