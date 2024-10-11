import { useTheme } from "@/components/theme-provider";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

function AppLayout() {
  const { theme } = useTheme();
  return (
    <>
      <Outlet />
      <Toaster theme={theme} />
    </>
  )
}

export default AppLayout;
