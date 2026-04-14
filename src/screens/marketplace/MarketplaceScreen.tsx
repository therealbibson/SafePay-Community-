import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ScreenLayout from '../../components/layout/ScreenLayout';
import BottomNavigation from '../../components/layout/BottomNavigation';
import Icon from '../../components/ui/Icon';
import Input from '../../components/ui/Input';
import { colors, spacing, typography } from '../../types/theme';

const MarketplaceScreen: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [search, setSearch] = useState('');

  const categories = [
    { id: 'all', label: 'All', icon: '🏪' },
    { id: 'electronics', label: 'Electronics', icon: '📱' },
    { id: 'furniture', label: 'Furniture', icon: '🪑' },
    { id: 'clothing', label: 'Clothing', icon: '👕' },
    { id: 'vehicles', label: 'Vehicles', icon: '🚗' },
    { id: 'home', label: 'Home & Garden', icon: '🏠' },
  ];

  const items = [
    { id: 1, title: 'Garden Chair', price: 15000, image: '🪑', category: 'furniture', distance: '0.5 km', seller: 'John D.', rating: 4.8 },
    { id: 2, title: 'Handmade Basket', price: 5000, image: '🧺', category: 'home', distance: '1.2 km', seller: 'Mary S.', rating: 4.5 },
    { id: 3, title: 'Used Laptop', price: 45000, image: '💻', category: 'electronics', distance: '2.0 km', seller: 'James B.', rating: 4.9 },
    { id: 4, title: 'Men\'s Shirt', price: 3000, image: '👕', category: 'clothing', distance: '0.8 km', seller: 'Sarah W.', rating: 4.7 },
    { id: 5, title: 'Bicycle', price: 25000, image: '🚲', category: 'vehicles', distance: '3.5 km', seller: 'David L.', rating: 4.6 },
    { id: 6, title: 'Plant Pot', price: 2000, image: '🪴', category: 'home', distance: '1.5 km', seller: 'Emma R.', rating: 4.4 },
  ];

  const containerStyle = {
    width: '100%',
  };

  const searchContainerStyle = {
    marginBottom: spacing.lg,
  };

  const categoryScrollStyle = {
    display: 'flex',
    gap: spacing.md,
    overflowX: 'auto' as const,
    paddingBottom: spacing.sm,
    marginBottom: spacing.xl,
  };

  const categoryButtonStyle = (active: boolean) => ({
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: spacing.xs,
    padding: `${spacing.md} ${spacing.lg}`,
    borderRadius: '12px',
    backgroundColor: active ? colors.primary[50] : colors.surface,
    border: active ? `2px solid ${colors.primary[600]}` : `1px solid ${colors.border}`,
    cursor: 'pointer',
    minWidth: '80px',
  });

  const itemsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
    gap: spacing.lg,
  };

  const itemCardStyle = {
    backgroundColor: colors.surface,
    borderRadius: '16px',
    overflow: 'hidden',
    border: `1px solid ${colors.border}`,
    cursor: 'pointer',
    transition: 'transform 0.2s ease-in-out',
  };

  const itemImageStyle = {
    height: '150px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '80px',
    backgroundColor: colors.background,
  };

  const itemContentStyle = {
    padding: spacing.lg,
  };

  const filteredItems = items.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <ScreenLayout title="Marketplace">
      <div style={containerStyle}>
        {/* Search */}
        <div style={searchContainerStyle}>
          <Input
            type="text"
            placeholder="Search items..."
            value={search}
            onChange={setSearch}
            icon={<Icon name="search" size={20} />}
          />
        </div>

        {/* Categories */}
        <div style={categoryScrollStyle}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              style={categoryButtonStyle(selectedCategory === cat.id)}
              onClick={() => setSelectedCategory(cat.id)}
            >
              <span style={{ fontSize: '24px' }}>{cat.icon}</span>
              <span style={{ fontSize: typography.fontSize.xs, fontWeight: 500 }}>
                {cat.label}
              </span>
            </button>
          ))}
        </div>

        {/* Items Grid */}
        <div style={itemsGridStyle}>
          {filteredItems.map((item) => (
            <div key={item.id} style={itemCardStyle} onClick={() => navigate(`/market/item/${item.id}`)}>
              <div style={itemImageStyle}>{item.image}</div>
              <div style={itemContentStyle}>
                <div style={{ fontSize: typography.fontSize.base, fontWeight: 600, marginBottom: spacing.xs }}>
                  {item.title}
                </div>
                <div style={{ fontSize: typography.fontSize.lg, fontWeight: 700, color: colors.primary[600], marginBottom: spacing.xs }}>
                  ₦{item.price.toLocaleString()}
                </div>
                <div style={{ fontSize: typography.fontSize.sm, color: colors.text.tertiary, marginBottom: spacing.xs }}>
                  📍 {item.distance}
                </div>
                <div style={{ fontSize: typography.fontSize.sm, color: colors.text.tertiary }}>
                  ⭐ {item.rating} • {item.seller}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div style={{ textAlign: 'center', padding: spacing['2xl'] }}>
            <Icon name="search" size={60} style={{ color: colors.text.tertiary, marginBottom: spacing.md }} />
            <p style={{ fontSize: typography.fontSize.lg, color: colors.text.secondary }}>
              No items found
            </p>
          </div>
        )}
      </div>

      <BottomNavigation />
    </ScreenLayout>
  );
};

export default MarketplaceScreen;
