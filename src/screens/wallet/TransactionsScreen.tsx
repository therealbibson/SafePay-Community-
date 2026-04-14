import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ScreenLayout from '../../components/layout/ScreenLayout';
import BottomNavigation from '../../components/layout/BottomNavigation';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import Icon from '../../components/ui/Icon';
import Input from '../../components/ui/Input';
import { colors, spacing, typography } from '../../types/theme';

const TransactionsScreen: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<'all' | 'send' | 'receive' | 'bill' | 'purchase'>('all');
  const [search, setSearch] = useState('');

  const transactions = [
    { id: 1, type: 'receive' as const, amount: 5000, description: 'From John Doe', date: 'Today, 2:30 PM', status: 'completed' },
    { id: 2, type: 'send' as const, amount: 2000, description: 'To Mary Smith', date: 'Yesterday, 5:15 PM', status: 'completed' },
    { id: 3, type: 'bill' as const, amount: 1500, description: 'Electricity Bill', date: '2 days ago', status: 'completed' },
    { id: 4, type: 'receive' as const, amount: 10000, description: 'From James Brown', date: '3 days ago', status: 'completed' },
    { id: 5, type: 'send' as const, amount: 3000, description: 'To Sarah Wilson', date: '4 days ago', status: 'completed' },
    { id: 6, type: 'purchase' as const, amount: 15000, description: 'Marketplace Purchase', date: '5 days ago', status: 'completed' },
    { id: 7, type: 'receive' as const, amount: 7500, description: 'From David Lee', date: '1 week ago', status: 'completed' },
    { id: 8, type: 'bill' as const, amount: 2000, description: 'Airtime', date: '1 week ago', status: 'completed' },
  ];

  const filterButtons = [
    { id: 'all', label: 'All' },
    { id: 'send', label: 'Sent' },
    { id: 'receive', label: 'Received' },
    { id: 'bill', label: 'Bills' },
  ];

  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
  };

  const filterContainerStyle = {
    display: 'flex',
    gap: spacing.sm,
    overflowX: 'auto',
    paddingBottom: spacing.sm,
    marginBottom: spacing.lg,
  };

  const filterButtonStyle = (active: boolean) => ({
    padding: `${spacing.sm} ${spacing.lg}`,
    border: 'none',
    borderRadius: '20px',
    backgroundColor: active ? colors.primary[600] : colors.surface,
    color: active ? colors.text.inverse : colors.text.secondary,
    fontWeight: active ? 600 : 400,
    cursor: 'pointer',
    whiteSpace: 'nowrap' as const,
    fontSize: typography.fontSize.sm,
  });

  const transactionItemStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: `${spacing.lg} 0`,
    borderBottom: `1px solid ${colors.borderLight}`,
  };

  const transactionIconStyle = (type: string) => ({
    width: '45px',
    height: '45px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:
      type === 'receive'
        ? colors.primary[100]
        : type === 'send'
        ? colors.accent[100]
        : type === 'bill'
        ? colors.neutral[100]
        : colors.info + '20',
  });

  const transactionAmountStyle = (type: string) => ({
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.semibold,
    color: type === 'receive' ? colors.primary[600] : colors.text.primary,
  });

  const filteredTransactions = transactions.filter(tx => {
    const matchesFilter = filter === 'all' || tx.type === filter;
    const matchesSearch = tx.description.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <ScreenLayout title="Transactions">
      <div style={containerStyle}>
        {/* Search */}
        <Input
          type="text"
          placeholder="Search transactions..."
          value={search}
          onChange={setSearch}
          icon={<Icon name="search" size={20} />}
          style={{ marginBottom: spacing.lg }}
        />

        {/* Filters */}
        <div style={filterContainerStyle}>
          {filterButtons.map((f) => (
            <button
              key={f.id}
              style={filterButtonStyle(filter === f.id)}
              onClick={() => setFilter(f.id as any)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Transactions List */}
        <Card padding="lg">
          {filteredTransactions.length === 0 ? (
            <div style={{ textAlign: 'center', padding: spacing.xl }}>
              <Icon name="search" size={60} style={{ color: colors.text.tertiary, marginBottom: spacing.md }} />
              <p style={{ fontSize: typography.fontSize.lg, color: colors.text.secondary }}>
                No transactions found
              </p>
            </div>
          ) : (
            filteredTransactions.map((tx) => (
              <div key={tx.id} style={transactionItemStyle}>
                <div style={{ display: 'flex', alignItems: 'center', gap: spacing.md }}>
                  <div style={transactionIconStyle(tx.type)}>
                    <Icon
                      name={tx.type === 'receive' ? 'receive' : tx.type === 'send' ? 'send' : tx.type === 'bill' ? 'bills' : 'market'}
                      size={20}
                      style={{
                        color:
                          tx.type === 'receive'
                            ? colors.primary[600]
                            : tx.type === 'send'
                            ? colors.accent[600]
                            : tx.type === 'bill'
                            ? colors.neutral[600]
                            : colors.info,
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
            ))
          )}
        </Card>
      </div>

      <BottomNavigation />
    </ScreenLayout>
  );
};

export default TransactionsScreen;
