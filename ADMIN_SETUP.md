# Admin Panel Setup Guide

This guide will help you set up and access the admin panel for your clothing store.

## Prerequisites

1. Supabase account and project set up
2. Environment variables configured in `.env` file
3. Database migrations applied

## Database Setup

### 1. Apply Migrations

The following migrations need to be applied in order:

1. `20251017111600_admin_products.sql` - Creates products and admin_users tables
2. `20251017112000_storage_bucket.sql` - Sets up storage bucket for product images

### 2. Create Your First Admin User

After applying migrations, you need to create an admin user in Supabase:

1. Go to your Supabase Dashboard
2. Navigate to Authentication > Users
3. Click "Add User" and create a new user with email and password
4. Copy the user's UUID
5. Go to Table Editor > admin_users
6. Click "Insert row" and add:
   - `id`: Paste the user's UUID
   - `email`: The admin's email
   - `full_name`: Admin's full name (optional)
   - `role`: "admin"

## Accessing the Admin Panel

### Login URL

```
http://localhost:5173/admin/login
```

Or in production:
```
https://yourdomain.com/admin/login
```

### Default Credentials

Use the email and password you created in Supabase for your admin user.

## Admin Panel Features

### Dashboard (`/admin/dashboard`)
- View total revenue, orders, and products
- Sales analytics with 7-day revenue chart
- Key performance metrics

### Products (`/admin/products`)
- Add new products
- Edit existing products
- Delete products
- Upload product images to Supabase Storage
- Automatic Stripe product and price creation
- Search and filter products
- View product inventory

### Orders (`/admin/orders`)
- View all orders from Supabase database
- Filter orders by status
- Search orders by customer email or order ID
- View order details and revenue statistics

### Settings (`/admin/settings`)
- Update admin profile information
- View account statistics
- Sign out

## Product Management Workflow

### Adding a New Product:

1. Click "Add Product" button
2. Upload product image (automatically stored in Supabase Storage)
3. Fill in product details:
   - Name
   - Description
   - Price (in EUR)
   - Stock quantity
   - Category
   - Sizes (comma-separated)
   - Colors (comma-separated)
4. Click "Add Product"

The system will automatically:
- Upload image to Supabase Storage
- Create product in Stripe
- Create price in Stripe
- Save all data to Supabase database

### Editing a Product:

1. Click "Edit" on any product card
2. Modify the details
3. Optionally upload a new image
4. Click "Update Product"

### Deleting a Product:

1. Click the trash icon on any product card
2. Confirm deletion
3. Product will be soft-deleted in Stripe and removed from database

## Order Management

Orders are automatically created when:
- Customers complete checkout through Stripe
- Stripe webhook processes payment completion
- Order data is saved to Supabase

View orders in the Orders page with:
- Customer email
- Order amount
- Payment status
- Order date

## Technical Details

### Tech Stack:
- React + TypeScript
- TailwindCSS
- Supabase (Database, Auth, Storage)
- Stripe API
- React Router DOM
- Recharts (for analytics)

### Theme Colors:
- Primary: Navy Blue (#1E3A8A)
- Accent: Gold (#FFD700)
- Gradients for premium feel

### Security:
- All routes under `/admin` are protected
- Only authenticated admin users can access
- Row Level Security (RLS) enabled on all tables
- Secure image upload to Supabase Storage

## Troubleshooting

### Cannot Login
- Verify user exists in Supabase Authentication
- Verify user is added to `admin_users` table
- Check that user ID matches between auth.users and admin_users

### Cannot Upload Images
- Verify storage bucket `product-images` exists
- Check RLS policies on storage.objects
- Ensure admin user is in admin_users table

### Products Not Creating in Stripe
- Verify STRIPE_SECRET_KEY is set in environment variables
- Check Stripe API key is for the correct mode (test/live)
- Review browser console for errors

### Orders Not Showing
- Verify orders table has data
- Check RLS policies allow admin users to read orders
- Ensure webhook is configured to save orders

## Support

Powered by AMEN TECH — Matthew 6:33

For technical support or questions, refer to the codebase documentation or contact your development team.
