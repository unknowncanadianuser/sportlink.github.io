import AccountDeletion from "@/pages/AccountDeletion";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import OpenSourceLicenses from "@/pages/OpenSourceLicenses";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsAndConditions from "@/pages/TermsAndConditions";
import { Route, Switch } from "wouter";
import { useEffect } from "react";
import { useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

function EventsFallbackRedirect() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    setLocation("/");
  }, [setLocation]);

  return null;
}

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route
        path={"/events"}
        component={EventsFallbackRedirect}
      />
      <Route
        path={"/events/:rest*"}
        component={EventsFallbackRedirect}
      />
      <Route path={"/account-deletion"} component={AccountDeletion} />
      <Route path={"/open-source-licenses"} component={OpenSourceLicenses} />
      <Route path={"/privacy-policy"} component={PrivacyPolicy} />
      <Route path={"/terms-and-conditions"} component={TermsAndConditions} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
