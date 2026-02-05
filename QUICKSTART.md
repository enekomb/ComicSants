# Quick Start Guide - ComicSants

## 🚀 Quick Setup (5 minutes)

### 1. Install Dependencies
```bash
git clone https://github.com/enekomb/ComicSants.git
cd ComicSants
npm install
```

### 2. Initialize Database
```bash
npm run init-db
```
This creates the SQLite database and a default admin user:
- **Username**: `admin`
- **Password**: `admin123`

### 3. Start Server
```bash
npm start
```

### 4. Access Application
Open your browser and visit: `http://localhost:3000`

⚠️ **Important**: Change the default password after first login!

---

## 🌐 Free Deployment Options

### Option 1: Railway (Easiest - 5 minutes) ⭐
**Best for**: SQLite applications, automatic deployments

1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select ComicSants repository
5. Add Volume:
   - Go to Settings → Volumes → Add Volume
   - Mount path: `/app/database`
   - This persists your database across deployments
6. Deploy automatically

**Free Tier**: $5 credit/month (~500 hours)

---

### Option 2: Render (Alternative - 10 minutes)
**Best for**: Persistent storage, automatic SSL

1. Go to [render.com](https://render.com)
2. Sign up with GitHub
3. New Web Service → Connect repository
4. Configure:
   - Build Command: `npm install`
   - Start Command: `npm start`
5. Add Disk:
   - Name: `database-disk`
   - Mount Path: `/app/database`
   - Size: 1GB
6. Deploy

**Free Tier**: 750 hours/month + 1GB storage

---

### Option 3: Self-Hosted VPS (Full Control - 30 minutes)

#### For Ubuntu/Debian:
```bash
# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clone and setup
git clone https://github.com/enekomb/ComicSants.git
cd ComicSants
npm install
npm run init-db

# Install PM2 for process management
sudo npm install -g pm2
pm2 start index.js --name comicsants
pm2 startup
pm2 save

# Optional: Setup Nginx as reverse proxy
sudo apt install nginx
```

**Cost**: From $5/month (DigitalOcean, Linode, etc.)

---

## 📊 Comparison Table

| Platform | Setup Time | Free Tier | SQLite Support | Best For |
|----------|------------|-----------|----------------|----------|
| Railway | 5 min | $5 credit/mo | ✅ Yes | Quick deployment |
| Render | 10 min | 750 hrs/mo | ✅ Yes | Persistent apps |
| Vercel | N/A | Unlimited | ❌ No | Not suitable |
| VPS | 30 min | From $5/mo | ✅ Yes | Production |

---

## 🔧 Common Tasks

### Change Admin Password
1. Login with default credentials
2. Use the management interface to update admin password
3. Or connect to database directly:
```bash
sqlite3 database/comicsants.db
UPDATE admins SET password = 'newpassword' WHERE username = 'admin';
.exit
```

### Backup Database
```bash
cp database/comicsants.db database/backup-$(date +%Y%m%d).db
```

### View Database Contents
```bash
sqlite3 database/comicsants.db
.tables
SELECT * FROM admins;
.exit
```

### Development Mode (Auto-reload)
```bash
npm run dev
```

---

## 📚 Documentation

- **README.md** - Complete project documentation
- **DEPLOYMENT.md** - Detailed deployment guide for all platforms
- **MIGRATION.md** - Technical details of MongoDB to SQLite migration

---

## ⚠️ Important Notes

1. **Security**: Change default admin password immediately
2. **Backups**: Regularly backup `database/comicsants.db`
3. **Production**: Consider bcrypt for password hashing
4. **Scaling**: For >50 concurrent users, consider PostgreSQL
5. **HTTPS**: Always use HTTPS in production

---

## 🐛 Troubleshooting

### Server won't start
```bash
# Check if port 3000 is in use
lsof -i :3000
# Kill the process or change port
PORT=3001 npm start
```

### Database locked
- Stop all instances of the server
- Check for stale connections
- Consider PostgreSQL for high concurrency

### Can't login
- Verify admin user exists: `npm run init-db`
- Check credentials: admin/admin123

---

## 🤝 Need Help?

- Issues: [GitHub Issues](https://github.com/enekomb/ComicSants/issues)
- Documentation: See README.md and DEPLOYMENT.md
- Email: Check package.json for author contacts

---

**Made with ❤️ by the ComicSants Team**
