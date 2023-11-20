import { Outlet } from "react-router-dom";
import { LanguageProvider } from "./LanguageProvider";

export const MainLayout = () => {
  return (
    <LanguageProvider>
      <Outlet />
    </LanguageProvider>
  );
};
