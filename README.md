
# 🌟 PLP Week 3 – React.js Front-End Assignment

This is a complete front-end application built using **React**, **Vite**, **Tailwind CSS**, and **React Router**. It was created as part of the **Power Learn Project (PLP) – Week 3 assignment** and showcases essential modern front-end skills, including state management, hooks, theme context, and API integration.

---

## ✅ Features

- 🧱 **Reusable Components** – Navbar, Footer, Button, Card, Layout
- 🎯 **Task Manager** – Add, delete, complete, and filter tasks (All / Active / Completed)
- 💾 **Persistence** – Tasks saved to **localStorage**
- 🌙 **Theme Toggle** – Light/Dark mode using `useContext` and Tailwind dark mode
- 🔄 **API Integration** – Fetch posts from [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
- 🔍 **Search & Pagination** – Filter API data and paginate results
- 📱 **Responsive Design** – Works seamlessly on mobile, tablet, and desktop
- ⚛️ **React Hooks** – `useState`, `useEffect`, `useContext`
- 🛠️ **Custom Hook** – `useLocalStorage` to persist tasks between refreshes

---

## 🧠 Project Structure

```

src/
├── components/        # Reusable components: Navbar, Footer, Button, Card
├── context/           # ThemeContext (light/dark mode)
├── hooks/             # Custom hooks (useLocalStorage)
├── pages/             # Page-level components (Home, Tasks, Posts)
├── App.jsx            # Routing structure
├── main.jsx           # ReactDOM entry
└── index.css          # Tailwind CSS

````

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/PLP-MERN-Stack-Development/week-3-react-js-assignment-MohamedBashir2093.git
cd week-3-react-js-assignment-MohamedBashir2093
````

### 2. Install Dependencies

Make sure you have [Node.js](https://nodejs.org/) installed (v18+). Then install packages:

```bash
pnpm install
# or use npm if you prefer:
# npm install
```

### 3. Run the App

```bash
pnpm run dev
# or
npm run dev
```

### 4. Open in Browser

Go to:
👉 `http://localhost:5173`

---

## 🌍 Live Demo

✅ [Deployed Link (Vercel)](https://week-3-react-js-a-git-fac244-arafatbashir093-gmailcoms-projects.vercel.app/)


---

## 📸 Screenshots

### 🏠 Home Page

> Introduction, theme toggle, and navigation

![Home Screenshot](./src/Screenshots/Screenshot%202025-07-11%20154553.png)

### ✅ Tasks Page

> Add, delete, complete, and filter tasks — saved to local storage

![Tasks Screenshot](./src/Screenshots/Screenshot%202025-07-11%20154647.png)

### 📬 Posts Page

> Data from API with search, loading state, and pagination

![Posts Screenshot](./src/Screenshots/Screenshot%202025-07-11%20154714.png)



---

## 📦 Tech Stack

* **React** (Hooks, Context API)
* **Vite** (Fast bundler & dev server)
* **Tailwind CSS** (Styling + responsive design)
* **React Router DOM** (Routing)
* **JSONPlaceholder API** (External data)
* **PNPM/NPM** (Package management)

---

## 👨‍💻 Author

**Hamud Mohamed Bashir**

---

## 📜 License

This project is for educational purposes under PLP and is open for personal learning or showcasing.

