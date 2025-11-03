import { Suspense } from "react";
import Navbar from "./components/navbar";
import { useRoute } from "./components/navbar";
import { ROUTES } from "./constants/route";
import Addbox from "./views/add-box";
import Shipments from "./views/shipments";

const baseUrl = import.meta.env.PUBLIC_APP_BASE_URL || "";
const modules = [
  { id: "1", title: "Add box", link: `${baseUrl}/addbox` },
  { id: "2", title: "Shipments", link: `${baseUrl}/shipments` },
];

const App = () => {
  const { currentPath, navigate } = useRoute();

  function renderView() {
    switch (currentPath) {
      case ROUTES.ADD_BOX:
      case ROUTES.ENTRY:
        return (
          <Suspense>
            <Addbox />
          </Suspense>
        );
      case ROUTES.SHIPMENTS:
        return (
          <Suspense>
            <Shipments />
          </Suspense>
        );
      default:
        return null;
    }
  }

  return (
    <header>
      <Navbar modules={modules} onRouteChange={navigate} />
      {renderView()}
    </header>
  );
};

export default App;
