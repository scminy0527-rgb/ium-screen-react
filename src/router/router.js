import { createBrowserRouter } from "react-router-dom";
import PostListCard from "../component/PostListCard";
import LiveChatCard from "../component/LiveChatCard";
import ChatSample from "../page/ChatSample";
import PostDetailPage from "../page/PostDetailPage";
import UserProfile from "../page/UserProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PostListCard />,
  },
  {
    path: "/chat-card",
    element: <LiveChatCard />,
  },
  {
    path: "/chat-page",
    element: <ChatSample />,
  },
  {
    path: "/community/post/:id",
    element: <PostDetailPage />,
  },
  {
    path: "/community/user/:id",
    element: <UserProfile />,
  },
]);

export default router;
