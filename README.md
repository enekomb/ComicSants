# ComicSants 🦸‍♂️

[![License: ISC](https://img.shields.io/badge/License-ISC_2026-blue.svg)](https://opensource.org/licenses/ISC)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933.svg?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-000000.svg?logo=express&logoColor=white)](https://expressjs.com/)
[![SQLite](https://img.shields.io/badge/SQLite-better--sqlite3-003B57.svg?logo=sqlite&logoColor=white)](https://www.sqlite.org/)
[![Status](https://img.shields.io/badge/Type-Internal_POS_%26_Inventory-orange.svg)](#)

> **ComicSants** is an internal Point of Sale (POS) and inventory management application for hobby stores, covering comics, trading cards, board games, snacks, and more.

_Live demo: Coming soon._

---

## 📘 Project Description

**ComicSants** streamlines day-to-day store operations by unifying stock control, sales processing, invoice generation, and sales analytics into a single web application.  
Built on Node.js, Express, and SQLite, it is optimized for local deployment where reliability, simplicity, and fast, offline-friendly access are critical.

---

## ✨ Key Features

- **🛒 POS Workflow**
  - Interactive cart for multiple product categories.
  - Real-time calculation of subtotals and totals.
  - Automatic, printable invoice generation for every sale.

- **📦 Inventory Management**
  - CRUD management for **Comics**, **Snacks**, **Board Games** (`tables`), and **Trading Cards** (`cards`).
  - Clear separation of product categories for easier maintenance.

- **📊 Analytics Dashboard**
  - Google Charts–based dashboards to visualize sales by category.
  - Pie charts and tabular breakdowns for quick decision-making.

- **👥 Client & Admin System**
  - Admin authentication for restricted access.
  - Client association with sales orders to build purchase history.

---

## 🛠️ Tech Stack

- **Frontend**
  - HTML5, CSS3, vanilla JavaScript (ES6+)
  - Google Charts API for analytics visualization

- **Backend**
  - Node.js 18+
  - Express.js 4.x

- **Database**
  - SQLite (via `better-sqlite3`) as a local, file-based store

- **Security & Tooling**
  - Helmet (HTTP header hardening)
  - CORS (configurable cross-origin access)
  - bcrypt (password hashing)
  - Nodemon for local development

---

## 🚀 Getting Started

### ✅ Prerequisites

- **Node.js** 18+  
- **npm** (bundled with Node.js)

### 💾 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/enekomb/ComicSants.git
   cd ComicSants
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   A `.env.example` file is provided:

   ```bash
   cp .env.example .env
   ```

   Key variables:
   - `PORT` – Server port (default `3000`)
   - `NODE_ENV` – `development` or `production`
   - `DB_PATH` – Optional custom SQLite file path
   - `SESSION_SECRET`, `JWT_SECRET` – Reserved for future auth enhancements

4. **Initialize the database**

   The SQLite database file is created automatically on first run.  
   To bootstrap an admin user:

   ```bash
   npm run init-db
   ```

   This creates:
   - **Username**: `admin`  
   - **Password**: `admin123` (hashed with bcrypt)

5. **Run the server**

   ```bash
   npm start      # Production-style run
   # or
   npm run dev   # Development with nodemon auto-reload
   ```

6. **Open the application**

   - Visit `http://localhost:3000`
   - Log in with `admin` / `admin123`
   - **Important**: Change the default password after the first login.

---

## 🔭 Future Enhancements

- **Multi-branch support** for managing multiple physical store locations.
- **Role-based access control** (cashier vs. manager vs. admin).
- **Advanced reporting** (best-selling products, customer lifetime value, seasonal trends).
- **Export pipelines** for accounting tools (CSV/Excel exports and scheduled reports).
- **Optional cloud deployment** presets (Dockerfile, production configs).

---

## 📝 License

This project is licensed under the **ISC License (2026)**.  
See the `LICENSE` file in this repository for full details.

---

## 🌐 Other Projects & Portfolio

- **CoWorkoholics** – Full‑stack coworking space management platform with real-time room booking and calendar views:  
  `https://github.com/enekomb/CoWorkoholics`
- **GitHub Portfolio** – Explore more projects and product case studies:  
  `https://github.com/enekomb`

---

**Built with ❤️ as part of the ComicSants product suite.**
