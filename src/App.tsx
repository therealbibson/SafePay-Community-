import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SplashScreen from './screens/entry/SplashScreen'
import WelcomeScreen from './screens/entry/WelcomeScreen'
import LoginScreen from './screens/entry/LoginScreen'
import SignupScreen from './screens/entry/SignupScreen'
import VerificationScreen from './screens/entry/VerificationScreen'
import PinSetupScreen from './screens/entry/PinSetupScreen'
import BiometricsScreen from './screens/entry/BiometricsScreen'
import DashboardScreen from './screens/DashboardScreen'
import WalletScreen from './screens/wallet/WalletScreen'
import SendMoneyScreen from './screens/wallet/SendMoneyScreen'
import ReceiveMoneyScreen from './screens/wallet/ReceiveMoneyScreen'
import PayBillsScreen from './screens/wallet/PayBillsScreen'
import SavingsScreen from './screens/wallet/SavingsScreen'
import TransactionsScreen from './screens/wallet/TransactionsScreen'
import MarketplaceScreen from './screens/marketplace/MarketplaceScreen'
import ItemDetailScreen from './screens/marketplace/ItemDetailScreen'
import BuyFlowScreen from './screens/marketplace/BuyFlowScreen'
import MessageScreen from './screens/marketplace/MessageScreen'
import SellScreen from './screens/selling/SellScreen'
import SellerDashboardScreen from './screens/selling/SellerDashboardScreen'
import ProfileScreen from './screens/profile/ProfileScreen'
import VerificationScreenProfile from './screens/profile/VerificationScreen'
import SecurityScreen from './screens/profile/SecurityScreen'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Entry Flow */}
        <Route path="/" element={<SplashScreen />} />
        <Route path="/welcome" element={<WelcomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/verification" element={<VerificationScreen />} />
        <Route path="/pin-setup" element={<PinSetupScreen />} />
        <Route path="/biometrics" element={<BiometricsScreen />} />
        
        {/* Main App */}
        <Route path="/dashboard" element={<DashboardScreen />} />
        
        {/* Wallet */}
        <Route path="/wallet" element={<WalletScreen />} />
        <Route path="/wallet/send" element={<SendMoneyScreen />} />
        <Route path="/wallet/receive" element={<ReceiveMoneyScreen />} />
        <Route path="/wallet/bills" element={<PayBillsScreen />} />
        <Route path="/wallet/savings" element={<SavingsScreen />} />
        <Route path="/wallet/transactions" element={<TransactionsScreen />} />
        
        {/* Marketplace */}
        <Route path="/market" element={<MarketplaceScreen />} />
        <Route path="/market/item/:id" element={<ItemDetailScreen />} />
        <Route path="/market/item/:id/buy" element={<BuyFlowScreen />} />
        <Route path="/market/item/:id/message" element={<MessageScreen />} />
        
        {/* Selling */}
        <Route path="/sell" element={<SellScreen />} />
        <Route path="/sell/dashboard" element={<SellerDashboardScreen />} />
        
        {/* Profile */}
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/profile/verification" element={<VerificationScreenProfile />} />
        <Route path="/profile/security" element={<SecurityScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App