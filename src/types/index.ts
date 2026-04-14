// Core Types for SafePay Application

export interface User {
  id: string;
  phone: string;
  name: string;
  pin?: string;
  isVerified: boolean;
  hasBiometrics: boolean;
  balance: number;
  createdAt: Date;
}

export interface Transaction {
  id: string;
  type: 'send' | 'receive' | 'bill' | 'purchase' | 'sale';
  amount: number;
  from?: string;
  to?: string;
  description: string;
  date: Date;
  status: 'pending' | 'completed' | 'failed';
}

export interface Bill {
  id: string;
  type: 'electricity' | 'water' | 'airtime' | 'internet' | 'other';
  provider: string;
  accountNumber: string;
  amount: number;
  dueDate?: Date;
}

export interface SavingsRule {
  id: string;
  name: string;
  amount: number;
  frequency: 'daily' | 'weekly' | 'monthly';
  isActive: boolean;
}

export interface MarketplaceItem {
  id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  location: string;
  distance: number;
  seller: Seller;
  condition: 'new' | 'like-new' | 'good' | 'fair';
  deliveryOption: 'pickup' | 'delivery' | 'both';
  paymentMethods: ('wallet' | 'mobile-money' | 'cash')[];
  escrowEnabled: boolean;
  postedAt: Date;
  status: 'active' | 'sold' | 'pending';
}

export interface Seller {
  id: string;
  name: string;
  phone: string;
  isVerified: boolean;
  rating: number;
  reviewCount: number;
  responseRate: number;
}

export interface Message {
  id: string;
  fromUserId: string;
  toUserId: string;
  content: string;
  timestamp: Date;
  read: boolean;
}

export interface Purchase {
  id: string;
  itemId: string;
  buyerId: string;
  sellerId: string;
  amount: number;
  paymentMethod: 'wallet' | 'mobile-money' | 'cash';
  escrowEnabled: boolean;
  status: 'pending' | 'paid' | 'shipped' | 'delivered' | 'completed' | 'cancelled';
  createdAt: Date;
}

export interface FraudAlert {
  id: string;
  type: 'suspicious_transaction' | 'unusual_location' | 'new_device' | 'multiple_failed_attempts';
  description: string;
  severity: 'low' | 'medium' | 'high';
  timestamp: Date;
  resolved: boolean;
}

export interface Notification {
  id: string;
  type: 'transaction' | 'message' | 'purchase' | 'sale' | 'fraud_alert' | 'bill_reminder';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
}
