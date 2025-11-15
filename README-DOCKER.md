# RISE SPACE Registration Project

## Setup với Docker

### 1. Cài Docker Desktop
- Tải Docker Desktop: https://www.docker.com/products/docker-desktop

### 2. Clone project và setup
```bash
git clone <repo-url>
cd register

# Copy file env
cp .env.example .env.local

# Khởi động MySQL trong Docker
docker-compose up -d

# Cài dependencies
npm install

# Chạy Prisma migration
npx prisma db push

# Chạy dev server
npm run dev
```

### 3. Truy cập
- Website: http://localhost:3000
- Test DB: http://localhost:3000/api/test-db

### 4. Dừng MySQL Docker
```bash
docker-compose down
```

### 5. Xem data trong MySQL
```bash
docker exec -it risespace-mysql mysql -uroot -proot123 risespace
```

Sau đó query:
```sql
SELECT * FROM registrations;
```

## Lưu ý
- File `.env.local` không push lên Git
- Docker sẽ tự động tạo database và table khi chạy lần đầu
- Data được lưu trong Docker volume, không mất khi restart
