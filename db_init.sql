CREATE DATABASE IF NOT EXISTS smartcity_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE USER IF NOT EXISTS 'smartcity_user'@'%' IDENTIFIED BY 'smartcity_pass';
GRANT ALL PRIVILEGES ON smartcity_db.* TO 'smartcity_user'@'%';
FLUSH PRIVILEGES;

USE smartcity_db;

CREATE TABLE IF NOT EXISTS attractions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  category VARCHAR(100),
  image_url VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
