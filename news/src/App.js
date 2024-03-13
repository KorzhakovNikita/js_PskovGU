import { Routes, Route } from "react-router-dom";
import NewsFeed from "./news";
import PostPage from "./post";
import "./tailwind.css";

const App = () => (
    <Routes>
        <Route path="/" element={<NewsFeed />} />
        <Route path="/post/:postId" element={<PostPage />} />
    </Routes>
);

export default App;