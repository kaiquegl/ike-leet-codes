import { createBrowserRouter } from "react-router"
import { RootLayout } from "@/components/layout/RootLayout"
import { ProblemListPage } from "@/pages/ProblemListPage"
import { ProblemDetailPage } from "@/pages/ProblemDetailPage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <ProblemListPage /> },
      { path: "problems/:id", element: <ProblemDetailPage /> },
    ],
  },
])
