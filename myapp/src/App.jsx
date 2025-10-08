import "./App.css";
import BlogPost from "./components/BlogPost ";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Register from "./components/Register";
import Index from "./Index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const blogData = {
    title: "How to Use React Effectively",
    content: `React is a JavaScript library for building user interfaces. It lets you create reusable UI components. 
  In this article, we will look into useEffect, useState, and how you can optimize rendering performance by using memoization and other techniques...`,
  };
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="/post" element={<BlogPost />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
