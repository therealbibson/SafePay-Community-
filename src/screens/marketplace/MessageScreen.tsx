import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ScreenLayout from '../../components/layout/ScreenLayout';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import Input from '../../components/ui/Input';
import Icon from '../../components/ui/Icon';
import { colors, spacing, typography } from '../../types/theme';

const MessageScreen: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [message, setMessage] = useState('');

  const messages = [
    { id: 1, sender: 'buyer', text: 'Hi, is this item still available?', time: '2:30 PM' },
    { id: 2, sender: 'seller', text: 'Yes, it\'s still available!', time: '2:35 PM' },
    { id: 3, sender: 'buyer', text: 'Can you deliver to Ikeja?', time: '2:40 PM' },
    { id: 4, sender: 'seller', text: 'Sure, delivery is ₦500', time: '2:45 PM' },
  ];

  const containerStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column' as const,
    height: 'calc(100vh - 200px)',
  };

  const messageListStyle = {
    flex: 1,
    overflowY: 'auto' as const,
    padding: `${spacing.lg} 0`,
  };

  const messageBubbleStyle = (isSender: boolean) => ({
    maxWidth: '70%',
    padding: `${spacing.md} ${spacing.lg}`,
    borderRadius: '16px',
    marginBottom: spacing.md,
    alignSelf: isSender ? 'flex-end' : 'flex-start',
    backgroundColor: isSender ? colors.primary[600] : colors.surface,
    color: isSender ? colors.text.inverse : colors.text.primary,
  });

  const inputContainerStyle = {
    display: 'flex',
    gap: spacing.md,
    alignItems: 'flex-end',
    paddingTop: spacing.lg,
    borderTop: `1px solid ${colors.border}`,
  };

  const handleSend = () => {
    if (!message.trim()) return;
    // Send message logic here
    setMessage('');
  };

  return (
    <ScreenLayout title="Messages" showBackButton onBack={() => navigate('/market')}>
      <div style={containerStyle}>
        {/* Item Context */}
        <Card padding="md" style={{ marginBottom: spacing.lg }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: spacing.md }}>
            <div style={{ fontSize: '40px' }}>🪑</div>
            <div>
              <div style={{ fontSize: typography.fontSize.base, fontWeight: 600 }}>Garden Chair</div>
              <div style={{ fontSize: typography.fontSize.sm, color: colors.text.tertiary }}>₦15,000</div>
            </div>
          </div>
        </Card>

        {/* Messages */}
        <div style={messageListStyle}>
          {messages.map((msg) => (
            <div
              key={msg.id}
              style={{
                display: 'flex',
                justifyContent: msg.sender === 'seller' ? 'flex-end' : 'flex-start',
              }}
            >
              <div>
                <div style={messageBubbleStyle(msg.sender === 'seller')}>
                  {msg.text}
                </div>
                <div style={{ fontSize: typography.fontSize.xs, color: colors.text.tertiary, textAlign: msg.sender === 'seller' ? 'right' : 'left' }}>
                  {msg.time}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div style={inputContainerStyle}>
          <Input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={setMessage}
            fullWidth
            style={{ flex: 1 }}
          />
          <Button variant="primary" size="lg" onClick={handleSend} icon={<Icon name="send" size={20} />}>
            Send
          </Button>
        </div>
      </div>
    </ScreenLayout>
  );
};

export default MessageScreen;
