import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { colors, typography } from '../../types/theme';

const SplashScreen: React.FC = () => {
  const navigate = useNavigate();
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(true);
      setTimeout(() => {
        navigate('/welcome');
      }, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    height: '100vh',
    width: '100%',
    backgroundColor: colors.primary[600],
    transition: 'opacity 0.5s ease-in-out',
    opacity: fade ? 0 : 1,
    overflow: 'hidden' as const,
  };

  const logoStyle = {
    fontSize: typography.fontSize['5xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.text.inverse,
    marginBottom: typography.fontSize.lg,
  };

  const taglineStyle = {
    fontSize: typography.fontSize.xl,
    color: colors.primary[100],
    textAlign: 'center' as const,
  };

  return (
    <div style={containerStyle}>
      <div style={logoStyle}>💰</div>
      <h1 style={logoStyle}>SafePay</h1>
      <p style={taglineStyle}>Simple. Trusted. Local.</p>
    </div>
  );
};

export default SplashScreen;
