# RISE SPACE - Form Đăng Ký Sinh Viên

Dự án đăng ký tham gia chương trình RISE SPACE sử dụng Next.js, Prisma ORM và MySQL.

## 🚀 Cài Đặt & Chạy Project

### Yêu Cầu

- **Node.js** (v18 trở lên)
- **Docker Desktop** (để chạy MySQL)

### Bước 1: Clone Project

```bash
git clone <repo-url>
cd register
```

### Bước 2: Cài Dependencies

```bash
npm install
```

### Bước 3: Setup Environment

```bash
# Copy file .env.example thành .env.local
cp .env.example .env.local

# File .env.local đã có sẵn cấu hình:
# DATABASE_URL="mysql://root:123456@localhost:3306/risespace"
```

### Bước 4: Khởi Động MySQL với Docker

```bash
# Lần đầu: Tạo và chạy MySQL container
docker-compose up -d

# Kiểm tra MySQL đã chạy chưa
docker ps
```

### Bước 5: Tạo Database Schema

```bash
# Đợi 10 giây để MySQL khởi động hoàn tất
npx prisma db push
```

### Bước 6: Chạy Dev Server

```bash
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem website.

---

## 📦 Quản Lý Docker

### Dừng MySQL

```bash
docker-compose down
```

### Khởi động lại MySQL

```bash
docker-compose up -d
```

### Xóa Database (Reset toàn bộ data)

```bash
docker-compose down -v
docker-compose up -d
npx prisma db push
```

### Xem data trong MySQL

```bash
docker exec risespace-mysql mysql -uroot -p123456 risespace -e "SELECT * FROM registrations;"
```

---

## 🐳 Deploy với Docker

### Build Docker Image

```bash
# Build image cho production
docker build -t form-register .

# Build với custom tag
docker build -t form-register:v1.0 .
```

### Chạy Container

```bash
# Chạy với environment variables
docker run -p 3000:3000 \
  -e DATABASE_URL="mysql://root:123456@host.docker.internal:3306/risespace" \
  -e NODE_ENV=production \
  form-register

# Hoặc dùng file .env
docker run -p 3000:3000 --env-file .env form-register
```

### Chạy Toàn Bộ Stack (App + MySQL)

```bash
# Thêm service app vào docker-compose.yml rồi chạy:
docker-compose up -d
```

**Lưu ý:** Trong Docker container, thay `localhost` bằng `host.docker.internal` để kết nối MySQL trên host machine.

---

## 🔍 API Endpoints

### Test kết nối Database

```
GET http://localhost:3000/api/test-db
```

### Lưu form đăng ký

```
POST http://localhost:3000/api/registration
```

### Xem tất cả đăng ký

```
GET http://localhost:3000/api/registrations
```

---

## 📁 Cấu Trúc Project

```
├── app/
│   ├── api/
│   │   ├── registration/       # API lưu form
│   │   ├── registrations/      # API xem data
│   │   └── test-db/            # API test kết nối
│   ├── components/
│   │   └── client/
│   │       ├── BackgroundSlider.tsx
│   │       └── MultiStepForm.tsx
│   ├── registration/           # Trang form đăng ký
│   └── page.tsx                # Trang chủ
├── lib/
│   └── prisma.ts               # Prisma client
├── prisma/
│   └── schema.prisma           # Database schema
├── docker-compose.yml          # Config MySQL Docker
├── init.sql                    # Script khởi tạo database
└── .env.local                  # Config database (không push lên Git)
```

---

## 🛠️ Troubleshooting

### Port 3306 đã bị sử dụng

Tắt MySQL cũ trên máy hoặc đổi port trong `docker-compose.yml`:

```yaml
ports:
  - "3307:3306" # Đổi port sang 3307
```

### Không kết nối được MySQL

```bash
# Restart Docker container
docker-compose restart

# Xem log
docker logs risespace-mysql
```

### Dev server báo lỗi

```bash
# Xóa cache Next.js
rm -rf .next
npm run dev
```

---

## 👥 Chia Sẻ Project Với Đồng Đội

1. Push code lên Git (file `.env.local` không được push)
2. Đồng đội clone project
3. Chạy các lệnh setup từ Bước 2 đến Bước 6
4. Mỗi người có database riêng trên máy mình

**Lưu ý:** Database không tự động sync giữa các máy. Nếu cần chia sẻ data, export/import file SQL hoặc dùng database cloud chung.

---

## 📝 Tech Stack

- **Frontend:** Next.js 16, React 19, TailwindCSS v4
- **Backend:** Next.js API Routes
- **Database:** MySQL 8.0 (Docker)
- **ORM:** Prisma
- **Forms:** Multi-step form với validation
