import { RouterProvider } from "react-router-dom";
import router from "./router";
import { AppProvider } from "./contexts/AppContext";
import { UserProvider } from "./contexts/UserContext";
import { HomeProvider } from "./contexts/HomeNavAsideContext";

function App() {
  return (
    <UserProvider>
      <AppProvider>
        <HomeProvider>
          <RouterProvider router={router} />
        </HomeProvider>
      </AppProvider>
    </UserProvider>
  );
}

export default App;
