# E.O.A Line - Christian Fashion E-commerce

A modern, multilingual e-commerce platform for Christian fashion combining faith with style.

## 🚀 Features

- **Multilingual Support** - 20+ languages with complete localization
- **Christian Fashion Collections** - LA VEIRA and TUMIE collections
- **Secure Payments** - Stripe integration for safe transactions
- **Responsive Design** - Beautiful UI that works on all devices
- **Shopping Cart & Wishlist** - Full e-commerce functionality
- **Faith-Based Content** - Bible verses and spiritual messaging

## 🛠️ Setup Instructions

### 1. Clone the Repository
```bash
git clone <repository-url>
cd eoa-line
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
```bash
# Copy the environment template
cp .env.example .env

# Edit .env with your actual API keys
nano .env
```

### 4. Required Environment Variables

**Stripe Configuration:**
```env
VITE_STRIPE_PUBLIC_KEY=pk_live_your_actual_stripe_public_key
STRIPE_SECRET_KEY=sk_live_your_actual_stripe_secret_key
```

**Supabase Configuration (if using):**
```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

### 5. Start Development Server
```bash
npm run dev
```

## 🔐 Security Notes

- **Never commit API keys** to version control
- **Use environment variables** for all sensitive data
- **Replace demo keys** with real keys for production
- **Enable HTTPS** in production
- **Regularly rotate** API keys and secrets

## 🌍 Supported Languages

- English, German, French, Spanish, Italian
- Portuguese, Dutch, Swedish, Norwegian, Danish
- Finnish, Polish, Ukrainian, Russian
- Chinese, Japanese, Korean, Hindi
- Arabic, Turkish

## 📦 Deployment

### Production Checklist
- [ ] Replace all demo/test API keys with production keys
- [ ] Set `NODE_ENV=production`
- [ ] Enable HTTPS
- [ ] Configure proper CORS settings
- [ ] Set up monitoring and logging
- [ ] Test payment processing
- [ ] Verify all translations

### Build for Production
```bash
npm run build
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary software owned by E.O.A Line.

## 🆘 Support

For technical support or questions:
- Email: support@eoaline.com
- Phone: 1-800-EOA-HELP

---

**⚠️ Important Security Reminder:**
Never share or commit your actual API keys. Always use environment variables and keep your `.env` file secure.