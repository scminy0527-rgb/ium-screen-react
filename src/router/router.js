import { createBrowserRouter } from "react-router-dom";
import PostListCard from "../component/PostListCard";
import LiveChatCard from "../component/LiveChatCard";
import ChatSample from "../page/ChatSample";
import PostDetailPage from "../page/PostDetailPage";
import UserProfile from "../page/UserProfile";
import PostWrite from "../page/PostWrite";
import PopupChatScreen from "../component/PopupChatScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PostListCard />,
  },
  {
    path: "/community/post/write",
    element: <PostWrite />,
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
  {
    path: "/popup-chat",
    element: <PopupChatScreen />,
  },
]);

export default router;
