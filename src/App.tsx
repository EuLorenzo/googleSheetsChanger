import { BrowserRouter } from "react-router";
import Router from "./Router";
import { ThemeProvider } from "./provider/theme-provider";
import { SidebarProvider } from "./components/ui/sidebar";
import { AppSidebar } from "./components/Sidebar";
import AuthProvider from "./provider/AuthProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <SidebarProvider>
          <AppSidebar />
          <ThemeProvider defaultTheme="dark">
            <div className="w-full">
              <Router />
            </div>
          </ThemeProvider>
        </SidebarProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
