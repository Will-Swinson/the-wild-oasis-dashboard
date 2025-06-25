# 🏨 The Wild Oasis – Admin Dashboard

A modern, full-featured admin dashboard for managing hotel/cabin bookings. Built with **React**, this app provides tools for authentication, cabin management, booking tracking, user activity, and detailed analytics.

---
## 🧪 Demo Access
You can explore and interact with the app using a demo account:

- **Email:** `demo@email.com`  
- **Password:** `12345678`  
- **Live Site:** [Click here to try the app](https://the-wild-oasis-dashboard-five.vercel.app/dashboard)

Feel free to log in, view bookings, manage cabins, and explore all features. This account is for demo purposes only — no real data is stored.

---

## 🚀 Features

- 🔐 **Authentication** (Login, Signup, Update Password)
- 🏠 **Cabin Management** (Add/Edit/Delete cabins)
- 📅 **Booking Management** (View, Check-in/out, Delete)
- 👥 **Guest Management** (Add guests, view lists)
- 📊 **Dashboard** (Charts, Stats, Recent bookings/stays)
- ⚙️ **Settings** (Update global app settings)
- 🌙 **Dark Mode Support**

---

## 🧩 Tech Stack

- React
- Supabase (auth & database)
- Custom Hooks
- Context API
- Modular component architecture
- React Query

---

## 📁 Project Structure

- `features/` – Main app logic (authentication, cabins, bookings, etc.)
- `pages/` – Page-level views (e.g., Bookings.jsx, Settings.jsx)
- `services/` – API functions (auth, bookings, cabins, etc.)
- `hooks/` – Custom React hooks
- `context/` – Theme/Dark mode context
- `ui/` – Shared UI components
- `utils/` – Utility functions
- `styles/` – Global styles

---

## 🛠️ Setup & Run

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
