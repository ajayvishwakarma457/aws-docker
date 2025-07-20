🧱 Basic Docker Commands
  
  🐳 Docker Version & Help
    docker --version           # Show Docker version
    docker --help              # Show help for Docker CLI
  
  
  📦 Working with Images
    docker build -t app-name .        # Build image from Dockerfile
    docker images                     # List all local images
    docker rmi <image_id>             # Remove image
    docker pull node                  # Pull image from Docker Hub
  
  
  🚢 Running Containers
    docker run app-name                       # Run container
    docker run -p 3000:3000 app-name          # Map port 3000 inside container to host
    docker run -d app-name                    # Run in detached mode (background)
    docker run -it node /bin/bash             # Start interactive container (terminal access)
  
  
  📋 Container Management
    docker ps                         # List running containers
    docker ps -a                      # List all containers (including stopped)
    docker stop <container_id>       # Stop a running container
    docker start <container_id>      # Start a stopped container
    docker restart <container_id>    # Restart a container
    docker rm <container_id>         # Remove a container
  
  
  📄 Logs and Inspect
    docker logs <container_id>             # View logs
    docker inspect <container_id>          # Low-level container info
  
  
  🔄 Exec and Attach
    docker exec -it <container_id> bash    # Exec into a running container (like SSH)
    docker attach <container_id>           # Attach to STDIN/STDOUT of container


🧱 Docker Compose Commands

  🔧 Common Docker Compose
    docker-compose up                      # Start all services
    docker-compose up -d                   # Detached mode
    docker-compose down                    # Stop and remove services
    docker-compose build                   # Build services
    docker-compose restart                 # Restart services
    docker-compose logs                    # View logs for services
    docker-compose exec app bash           # Exec into a service container




