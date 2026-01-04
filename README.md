# Invoice Management System

## Project Overview
The Invoice Management System is a full-stack web application that allows users to create, view, update, and delete invoices. The application includes user authentication (Signup and Login) and demonstrates CRUD operations using a React frontend and a Node.js + Express backend with SQLite as the database.

This project was developed to assess understanding of React.js, REST APIs, routing, and backend integration.

---

## Tech Stack
- Frontend: React.js, React Router DOM, Axios, CSS
- Backend: Node.js, Express.js
- Database: SQLite
- Tools: GitHub, VS Code

---

## Features
- User Signup and Login
- Create invoices
- View all invoices
- Update invoice details
- Delete invoices
- Invoice status management (Paid / Unpaid / Pending)

---

## Project Structure
invoice-management-system/
├── backend/
│   └── server.js
├── frontend/
│   └── src/
├── .gitignore
├── README.md

---

## How to Run Locally

### Backend
1. Navigate to backend folder
   cd backend
2. Install dependencies
   npm install
3. Start server
   node server.js

Backend runs on: http://localhost:5000

---

### Frontend
1. Navigate to frontend folder
   cd frontend
2. Install dependencies
   npm install
3. Start application
   npm start

Frontend runs on: http://localhost:3000

---

## API Endpoints
- POST /signup – Register user
- POST /login – Login user
- GET /invoices – Fetch all invoices
- POST /invoices – Create invoice
- PUT /invoices/:id – Update invoice
- DELETE /invoices/:id – Delete invoice

---

## Usage
1. Sign up or log in
2. Add a new invoice
3. View invoices on home page
4. Edit or delete invoices as required

---

## Future Enhancements
- JWT-based authentication
- Invoice search and filtering
- Improved UI styling

---

## Author
Syed Mohseen Uddin Ahmed  
GitHub: https://github.com/syedmohseen2071
