# Tu Bao Makeup Academy

## Overview
Welcome to the **Tu Bao Makeup Academy Website**is a premier institution dedicated to providing top-tier education and training in makeup and beauty. Our academy is renowned for its expert instructors, comprehensive curriculum, and state-of-the-art facilities.

## Technologies
This project is built with robust and modern technologies to ensure high performance and scalability:
- **EJS templates** for rendering HTML pages.
- **Prisma ORM** for database access.
- **MySQL database.**
- **Tailwind CSS** for styling.
- **Vite** for building the frontend assets. 

## Our mockup: 
[huyhoang2564/Final_Web_G9_2](https://github.com/huyhoang2564/Final_Web_G9_2)

## Detail of the project
- [Wireframe](Report/Wireframe/README.md)
- [Planning & Task](Report/Planning/README.md)


## Prerequisites

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/download/)
- [MySQL](https://dev.mysql.com/downloads/mysql/)
- [Git](https://git-scm.com/downloads)

## Project Structure

Here is an overview of the main directories and files in the project:
- **/src**: Static files like CSS, JavaScript, and images.
- **package.json**: Lists the project dependencies and scripts.

## Setup Instructions

1. **Clone the Repository**

```bash
git clone https://github.com/huyhoang2564/Final_Web_G9_2

cd Final_Web_G9_2

```

2. **Install Dependencies**

Install all required dependencies using npm:

```bash
npm install
```

3. **Database Setup**

- Ensure MySQL is running on your machine.
- Create a new database called `apps`.
- Update the database configuration in environment variables (`.env` file).

Create `.env` like `.env.example` and set the values. For example:
```
PORT=3000
SITE_NAME="LBJ"
NODE_ENV=development
DATABASE_URL="mysql://root:password@localhost:3306/apps"
```

4. **Run Database Migrations**

Run the migrations to set up the database schema:

```bash
npx prisma migrate dev
```

5. **Seed the Database**

Populate the database with initial data:

```bash
node prisma/seed.js
```

6. **Start the Server**

If you want to run the server in production mode, use:
```bash
npm start
```

If you want to run in development mode, use:
```bash
npm run dev
```

### Reset Database

To reset the database, you could run the following command to undo all migrations and re-run them.
```
npx prisma migrate reset
node prisma/seed.js
```

## Contributors

1. giangandinh21 - Đinh Gia Ngân
2. huyhoang2564 - Trương Huy Hoàng
3. maitrinh33 - Đỗ Phạm Mai Trinh
4. thanhtram2k4 - Nguyễn Hoàng Thanh Trâm

## Contact
* Email: hoang.truong220207@vnuk.edu.vn
