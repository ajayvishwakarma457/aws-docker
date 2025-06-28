# 🐳 AWS Dockerized Node.js Application

This repository contains a **Node.js application** fully containerized with **Docker** and designed to run both locally and on **AWS EC2**. It includes individual Docker and Docker Compose configurations for streamlined deployment and testing.

---

## 🔗 Repository

**GitHub:** [aws-docker](https://github.com/ajayvishwakarma457/aws-docker)

---

## 🚀 Features

- 🐳 Docker containerization using a production-ready `Dockerfile`
- 📦 Docker Compose setup for easy service management
- ☁️ AWS compatibility for EC2-based container hosting
- 📄 Notes with practical Docker and AWS tips

---

## 🧱 Project Structure

aws-docker/
├── app.js # Main Node.js application
├── Dockerfile # Image definition for single-container use
├── docker-compose.yml # Multi-container orchestration (optional)
├── notes/
│ ├── docker.txt # CLI usage and tips
│ ├── note.txt # General info
│ ├── working.txt # Deployment logs or test notes
│ └── working-test.txt # Additional testing notes
├── .gitignore
├── LICENSE
├── README.md
├── package.json
└── package-lock.json


---

## ⚙️ Technologies Used

- **Node.js** + **Express**
- **Docker** (Single Container)
- **Docker Compose**
- **AWS EC2** (for deployment)

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/ajayvishwakarma457/aws-docker.git
cd aws-docker

Build and Run with Docker
  docker build -t aws-docker-app .
  docker run -p 3000:3000 aws-docker-app
  Then open: http://localhost:3000

Run with Docker Compose
  docker-compose up --build

Deploy to AWS EC2 (Basic Flow)
  Launch an EC2 instance (Amazon Linux 2 or Ubuntu)
  SSH into the instance
  Install Docker & Git
  Clone this repo & run:

  docker build -t aws-docker-app .
  docker run -d -p 80:3000 aws-docker-app

📝 Notes
  All deployment and docker usage logs are maintained in the notes/ folder
  Dockerfile and docker-compose.yml are optimized for simplicity and AWS EC2 compatibility

## 📬 Contact
  **Author:** Ajay M Vishwakarma  
  **Email:** ajayvishwakarma457@gmail.com

📄 License
  This repository is licensed under the MIT License.
  See the LICENSE file for details.

