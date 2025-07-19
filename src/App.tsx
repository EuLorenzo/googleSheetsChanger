import { BrowserRouter } from "react-router";
import Router from "./Router";
import { ThemeProvider } from "./provider/theme-provider";
import { SidebarProvider } from "./components/ui/sidebar";
import { AppSidebar } from "./components/Sidebar";
import AuthProvider from "./provider/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <SidebarProvider>
        <AppSidebar />
        <ThemeProvider defaultTheme="dark">
          <BrowserRouter>
            <div className="w-full">
              <Router />
            </div>
          </BrowserRouter>
        </ThemeProvider>
      </SidebarProvider>
    </AuthProvider>
  );
}

export default App;
