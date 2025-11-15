-- Script tự động tạo table khi Docker MySQL khởi động lần đầu
CREATE TABLE IF NOT EXISTS registrations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  student_id VARCHAR(50) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  email VARCHAR(255) NOT NULL,
  facebook_link VARCHAR(500),
  house VARCHAR(50),
  major VARCHAR(100),
  experience VARCHAR(100),
  goal TEXT,
  expectation TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
