🛠️ Docker Installation
  docker --version            # Check Docker version
  docker info                 # Show system-wide Docker info

📦 Images
  docker build -t <name> .                      # Build an image from Dockerfile
  docker pull <image>                           # Pull image from Docker Hub
  docker push <name>                            # Push image to Docker Hub
  docker images                                 # List all images
  docker rmi <image-id or name>                 # Remove image
  docker tag <image> <repo>/<image>:<tag>       # Tag image for repository


🧱 Containers
  docker create <image>                         # Create a container but don't start
  docker run <image>                            # Create and start container
  docker run -d <image>                         # Detached mode
  docker run -it <image> /bin/bash              # Interactive mode
  docker start <container-id or name>           # Start container
  docker stop <container-id or name>            # Stop container
  docker restart <container-id or name>         # Restart container
  docker rm <container-id or name>              # Remove container
  docker kill <container-id or name>            # Force stop container


📋 Container Management
  docker ps                                     # Running containers
  docker ps -a                                  # All containers
  docker logs <container>                       # View logs
  docker top <container>                        # Show processes in container
  docker inspect <container or image>           # Detailed info
  docker exec -it <container> /bin/bash         # Run shell in container
  docker attach <container>                     # Attach terminal



📂 Volumes (Data Persistence)
  docker volume create <volume-name>            # Create volume
  docker volume ls                              # List volumes
  docker volume inspect <volume>                # Inspect volume
  docker volume rm <volume>                     # Remove volume


🌐 Networking
  docker network ls                             # List networks
  docker network create <network-name>          # Create network
  docker network inspect <network>              # Inspect network
  docker network rm <network-name>              # Remove network
  docker run --network=<network-name> ...       # Run container on specific network


📄 Dockerfile Commands (in the file, not CLI)
  FROM       # Base image
  RUN        # Run command in shell
  CMD        # Default command
  COPY       # Copy files
  ADD        # Like COPY but can extract archives
  WORKDIR    # Set working directory
  ENV        # Set environment variables
  EXPOSE     # Document exposed port
  ENTRYPOINT # Main command
  VOLUME     # Declare mount point


📑 Docker Compose
  docker-compose up                            # Start services (from docker-compose.yml)
  docker-compose up -d                         # Detached mode
  docker-compose down                          # Stop and remove services
  docker-compose stop                          # Stop services
  docker-compose start                         # Start services
  docker-compose build                         # Build images
  docker-compose ps                            # List services
  docker-compose logs                          # Show logs
  docker-compose exec <service> <cmd>          # Execute command in running service



🧹 System Cleanup
  docker system prune                           # Remove all unused containers, networks, images
  docker image prune                            # Remove unused images
  docker container prune                        # Remove stopped containers
  docker volume prune                           # Remove unused volumes
  docker builder prune                          # Clean up build cache


🔐 Docker Login/Logout (Hub)
  docker login                                  # Login to Docker Hub
  docker logout                                 # Logout









