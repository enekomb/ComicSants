# Deployment Guide - ComicSants

This guide provides instructions for deploying ComicSants with SQLite on free hosting platforms.

## Overview

ComicSants is now configured to use SQLite as its database, making it easy to deploy on various platforms. SQLite stores data in a local file (`database/comicsants.db`), which makes it portable and simple to manage.

## Deployment Options

### Option 1: Railway (Recommended for SQLite)

Railway supports persistent storage and is ideal for SQLite applications.

#### Steps:

1. **Create a Railway Account**
   - Go to [railway.app](https://railway.app)
   - Sign up with GitHub

2. **Create a New Project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your forked ComicSants repository

3. **Configure Environment**
   - Railway will automatically detect the Node.js application
   - Add environment variable: `PORT=3000` (Railway will override this with its own port)
   
4. **Add Persistent Volume** (Important for SQLite)
   - In your service settings, go to "Settings" > "Volumes"
   - Click "Add Volume"
   - Mount path: `/app/database`
   - This ensures your database persists across deployments

5. **Deploy**
   - Railway will automatically build and deploy
   - Access your app at the provided Railway URL

#### Cost: Free tier includes:
- $5 credit per month
- 500 hours of execution time
- Persistent storage included

---

### Option 2: Render

Render offers free web services with persistent disk storage.

#### Steps:

1. **Create a Render Account**
   - Go to [render.com](https://render.com)
   - Sign up with GitHub

2. **Create a New Web Service**
   - Click "New +" > "Web Service"
   - Connect your GitHub repository
   - Select ComicSants repository

3. **Configure Service**
   - **Name**: comicsants
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`

4. **Add Persistent Disk**
   - Scroll to "Disk" section
   - Click "Add Disk"
   - Name: `database-disk`
   - Mount Path: `/app/database`
   - Size: 1GB (free tier)

5. **Environment Variables**
   - Add `NODE_ENV=production`

6. **Deploy**
   - Click "Create Web Service"
   - Render will build and deploy your app

#### Cost: Free tier includes:
- 750 hours per month
- Automatic SSL
- 1GB persistent storage

---

### Option 3: Vercel (Limited SQLite Support)

⚠️ **Warning**: Vercel uses serverless functions which don't support persistent file storage. SQLite won't work properly on Vercel without modifications.

**Alternative for Vercel**: Consider using Vercel Postgres or Neon (serverless Postgres) instead.

If you want to use Vercel, you'll need to:
1. Switch to a hosted database service (Neon, PlanetScale, or Vercel Postgres)
2. Modify the database connection to use PostgreSQL/MySQL instead of SQLite

---

### Option 4: Self-Hosted VPS (DigitalOcean, Linode, AWS EC2)

For full control and production use, deploy on a VPS.

#### Steps:

1. **Set up a Linux server**
   - Ubuntu 22.04 or Debian 11 recommended

2. **Install Node.js**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

3. **Clone and setup**
   ```bash
   git clone https://github.com/enekomb/ComicSants.git
   cd ComicSants
   npm install
   ```

4. **Set up as a service with PM2**
   ```bash
   sudo npm install -g pm2
   pm2 start index.js --name comicsants
   pm2 startup
   pm2 save
   ```

5. **Set up Nginx reverse proxy**
   ```bash
   sudo apt install nginx
   sudo nano /etc/nginx/sites-available/comicsants
   ```

   Add configuration:
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

6. **Enable site and restart Nginx**
   ```bash
   sudo ln -s /etc/nginx/sites-available/comicsants /etc/nginx/sites-enabled/
   sudo systemctl restart nginx
   ```

7. **Set up SSL with Let's Encrypt**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d your-domain.com
   ```

---

## Database Initialization

The SQLite database will be automatically created on first run. To initialize with sample data:

1. **Create an admin user** (Important for first login)
   ```bash
   # Recommended: Use the initialization script
   npm run init-db
   
   # This creates an admin user with:
   # Username: admin
   # Password: admin123 (securely hashed with bcrypt)
   ```
   
   **Alternative manual method**:
   ```bash
   # Generate a bcrypt hash for your password
   node -e "console.log(require('bcrypt').hashSync('yourpassword', 10))"
   
   # Copy the hash output, then:
   sqlite3 database/comicsants.db
   INSERT INTO admins (username, password) VALUES ('admin', '<paste-hash-here>');
   .exit
   ```

2. **Add sample data** (Optional)
   You can add sample comics, snacks, cards, and board games through the web interface after logging in.

---

## Environment Variables

The application supports the following environment variables:

- `PORT`: Server port (default: 3000)
- `NODE_ENV`: Environment mode (development/production)

---

## Backup and Restore

### Backup
```bash
# Copy the SQLite database file
cp database/comicsants.db database/backup-$(date +%Y%m%d).db
```

### Restore
```bash
# Restore from backup
cp database/backup-YYYYMMDD.db database/comicsants.db
```

---

## Monitoring and Logs

### Railway
- Logs are available in the Railway dashboard
- Click on your service > "Deployments" > Select deployment > "View Logs"

### Render
- Logs available in the Render dashboard
- Click on your service > "Logs" tab

### Self-Hosted
```bash
# View PM2 logs
pm2 logs comicsants

# View Nginx logs
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log
```

---

## Troubleshooting

### Database not persisting
- Ensure you've set up a persistent volume/disk
- Check mount path is correct (`/app/database`)
- Verify write permissions

### SQLite locked error
- This can happen with high concurrent access
- Consider upgrading to PostgreSQL for production if you experience this

### Port already in use
- Change the PORT environment variable
- Check for other processes using the port: `lsof -i :3000`

---

## Production Recommendations

1. **Change default admin password** immediately after first login
2. **Set up regular backups** of the SQLite database
3. **Use HTTPS** in production (free with Let's Encrypt)
4. **Monitor disk usage** - SQLite database grows with data
5. **Consider PostgreSQL** if you expect high concurrent users (>50 simultaneous)

---

## Cost Comparison

| Platform | Free Tier | Persistent Storage | Best For |
|----------|-----------|-------------------|----------|
| Railway | $5/month credit | ✅ Yes | Small to medium apps |
| Render | 750 hours/month | ✅ Yes (1GB) | Small apps |
| Vercel | Unlimited | ❌ No (Serverless) | Not suitable for SQLite |
| Self-Hosted VPS | From $5/month | ✅ Yes | Production, full control |

---

## Support

For issues and questions:
- GitHub Issues: [ComicSants Issues](https://github.com/enekomb/ComicSants/issues)
- Documentation: [README.md](./README.md)
