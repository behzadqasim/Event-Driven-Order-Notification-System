# 📦 Event-Driven Order & Notification System

A production-style event-driven microservices system built to demonstrate scalable backend architecture using asynchronous messaging and container orchestration.

This project simulates a real-world order processing pipeline where services communicate via events instead of direct API calls, ensuring loose coupling, scalability, and resilience.

---

## 🚀 Architecture Overview

The system consists of independent services:

- **API Service** – Handles order creation and exposes REST endpoints
- **Order Processor Service** – Consumes order events and validates business logic
- **Notification Service** – Sends notifications based on order lifecycle events
- **Analytics Service** – Aggregates and stores event data for reporting

Services communicate asynchronously using a message broker:

- Apache Kafka (event streaming backbone)  
  or  
- RabbitMQ (task-based messaging)

All services are containerized and orchestrated using Docker and Kubernetes.

---

## 🔄 Event Flow

1. Client creates an order → `order.created`
2. Order Processor consumes event and validates business logic
3. Emits:
   - `order.confirmed`
   - or `order.failed`
4. Notification Service consumes lifecycle events and sends notifications
5. Analytics Service consumes all events for aggregation and reporting

---

## 🧱 System Design Principles

- Event-driven architecture
- Loose coupling between services
- Idempotent consumers
- Retry mechanism with Dead Letter Queue (DLQ)
- Horizontal scalability
- Graceful shutdown handling
- Health & readiness checks
- Config management via environment variables & secrets

---

## 🛠 Tech Stack

- Node.js
- MariaDB
- Apache Kafka
- Docker
- Kubernetes (Minikube / k3d for local development)

---

## 📂 Project Structure

