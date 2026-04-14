import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ScreenLayout from '../../components/layout/ScreenLayout';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import Icon from '../../components/ui/Icon';
import { colors, spacing, typography } from '../../types/theme';

const SavingsScreen: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('rules');

  const savingsRules = [
    { id: 1, name: 'Daily Save', amount: 500, frequency: 'Daily', isActive: true, saved: 15000 },
    { id: 2, name: 'Weekly Goal', amount: 2000, frequency: 'Weekly', isActive: true, saved: 8000 },
    { id: 3, name: 'Emergency Fund', amount: 5000, frequency: 'Monthly', isActive: false, saved: 0 },
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

  const ruleCardStyle = {
    backgroundColor: colors.surface,
    borderRadius: '16px',
    padding: spacing.xl,
    marginBottom: spacing.lg,
    border: `1px solid ${colors.border}`,
  };

  const ruleHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  };

  const progressStyle = {
    height: '8px',
    backgroundColor: colors.neutral[200],
    borderRadius: '4px',
    overflow: 'hidden',
    marginTop: spacing.md,
  };

  const progressBarStyle = (percent: number) => ({
    height: '100%',
    backgroundColor: colors.primary[600],
    borderRadius: '4px',
    width: `${percent}%`,
  });

  return (
    <ScreenLayout title="Savings" showBackButton onBack={() => navigate('/wallet')}>
      <div style={containerStyle}>
        {/* Total Savings Card */}
        <Card padding="xl" variant="elevated" style={{ marginBottom: spacing.xl, background: `linear-gradient(135deg, ${colors.primary[600]} 0%, ${colors.primary[800]} 100%)`, color: colors.text.inverse }}>
          <div style={{ fontSize: typography.fontSize.lg, opacity: 0.9, marginBottom: spacing.sm }}>
            Total Savings
          </div>
          <div style={{ fontSize: typography.fontSize['4xl'], fontWeight: 700 }}>
            ₦23,000
          </div>
          <div style={{ fontSize: typography.fontSize.sm, marginTop: spacing.sm, opacity: 0.8 }}>
            Across 2 active savings rules
          </div>
        </Card>

        {/* Tabs */}
        <div style={tabContainerStyle}>
          <button style={tabStyle(activeTab === 'rules')} onClick={() => setActiveTab('rules')}>
            My Rules
          </button>
          <button style={tabStyle(activeTab === 'history')} onClick={() => setActiveTab('history')}>
            History
          </button>
        </div>

        {activeTab === 'rules' && (
          <div>
            {savingsRules.map((rule) => (
              <div key={rule.id} style={ruleCardStyle}>
                <div style={ruleHeaderStyle}>
                  <div>
                    <div style={{ fontSize: typography.fontSize.lg, fontWeight: 600, marginBottom: spacing.xs }}>
                      {rule.name}
                    </div>
                    <div style={{ fontSize: typography.fontSize.sm, color: colors.text.tertiary }}>
                      ₦{rule.amount.toLocaleString()} / {rule.frequency}
                    </div>
                  </div>
                  <div style={{
                    padding: `${spacing.xs} ${spacing.md}`,
                    borderRadius: '20px',
                    backgroundColor: rule.isActive ? colors.primary[100] : colors.neutral[100],
                    color: rule.isActive ? colors.primary[700] : colors.neutral[600],
                    fontSize: typography.fontSize.sm,
                    fontWeight: 500,
                  }}>
                    {rule.isActive ? 'Active' : 'Paused'}
                  </div>
                </div>
                <div style={{ marginBottom: spacing.sm }}>
                  <div style={{ fontSize: typography.fontSize.sm, color: colors.text.tertiary, marginBottom: spacing.xs }}>
                    Saved: ₦{rule.saved.toLocaleString()}
                  </div>
                  <div style={progressStyle}>
                    <div style={progressBarStyle((rule.saved / (rule.amount * 10)) * 100)} />
                  </div>
                </div>
              </div>
            ))}

            <Button variant="primary" size="xl" fullWidth icon={<Icon name="plus" size={20} />}>
              Create New Savings Rule
            </Button>
          </div>
        )}

        {activeTab === 'history' && (
          <div>
            <Card padding="lg">
              <div style={{ textAlign: 'center', padding: spacing.xl }}>
                <Icon name="savings" size={60} style={{ color: colors.text.tertiary, marginBottom: spacing.md }} />
                <p style={{ fontSize: typography.fontSize.lg, color: colors.text.secondary }}>
                  No savings history yet
                </p>
              </div>
            </Card>
          </div>
        )}
      </div>
    </ScreenLayout>
  );
};

export default SavingsScreen;
