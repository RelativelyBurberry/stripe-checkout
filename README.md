# Stripe Checkout Integration (React + Express)

A full-stack payment integration using **Stripe Checkout**, built with a **Vite + React frontend** and an **Express.js backend**, deployed on **Vercel** and **Render**. <br>
With modern UI and sleek design and animations using tailwind and framer motion

---

## 🚀 Overview

This application allows users to purchase a **Starter Plan** through Stripe’s hosted Checkout page.

The system is split cleanly into:
- **Frontend**: Vite + React (UI, pricing card, animations, redirects)
- **Backend**: Express + Stripe SDK (session creation, pricing authority)
- **Payments**: Stripe Checkout (secure, PCI-compliant)

The goal was to understand **how real payment systems are wired**, not just how to call an API.

[Vercel Frontend Deployment](https://stripe-checkout-payments.vercel.app/)

---
<img width="1200" height="900" alt="image" src="https://github.com/user-attachments/assets/95286afd-7e18-4b30-92cc-7f9a9e89a79b" />

<video src="https://github.com/user-attachments/assets/64dc807a-cbe2-4f02-9810-4d203e8c7f13">Demo</video>




---

### 🧪 Test Card Details (Stripe)

Use the following in test mode:
- Card Number: 4242 4242 4242 4242
- Expiry: Any future date
- CVC: Any 3 digits

---

## ✨ Features

- 💳 Stripe Checkout integration (Test Mode)
- 🎨 Animated pricing card with Framer Motion
- ✅ Payment success page with confirmation UI
- ❌ Payment cancellation page with graceful fallback
- 🔐 Secure backend-only Stripe secret handling
- 🌍 Environment-based configuration (local + production)
- 🚀 Deployed frontend & backend with real HTTPS domains

---

## 🧠 How I Built It
### Architecture

```
React (Vercel)
|
| POST /checkout
↓
Express API (Render)
|
↓
Stripe Checkout
```
---
## 🛠️ Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, Framer Motion  
- **Backend**: Node.js, Express  
- **Payments**: Stripe Checkout  
- **Deployment**: Vercel (frontend), Render (backend)

---

### Key Decisions
- Used **Stripe Checkout** instead of custom Elements for security and speed
- Kept **pricing logic on the backend** to prevent tampering
- Avoided server-side redirects inside `fetch()` (client-side redirect instead)
- Split frontend and backend deployments for stability

### Development Challenges Solved
- CORS misconfigurations across environments
- HTTP vs HTTPS mismatches during deployment
- Redirect handling with `fetch()` vs browser navigation
- Environment variable scoping (`process.env` vs `import.meta.env`)
- Render startup failures due to missing `npm start` script

---

## 📚 What I Learned

- Stripe payments are **system problems**, not just API calls  
- Frontend success ≠ payment confirmation  
- Why server-side redirects don’t work inside `fetch()`  
- How deployment environments subtly break working local code  
- The importance of **separating UI, business logic, and payments**  
- Why payment backends favor **long-running servers** over serverless  

This project taught me more about **real-world engineering friction** than most feature-heavy apps.

---

## 🔮 Upcoming Features

- 🔁 Stripe **Subscriptions** (monthly plans)  
- 🧾 Payment persistence with a database  
- 🔔 Stripe **Webhooks** for payment verification  
- 👤 User accounts & purchase history  
- 🧠 Feature-gated access after payment  
- 📊 Admin dashboard for payments 

