import { useEffect, useState } from "react";
import { DEFAULT_ROUTE } from "../../constants/route";

function useRoute() {
  const [currentPath, setCurrentPath] = useState<string>(
    window.location.pathname || DEFAULT_ROUTE,
  );

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", onLocationChange);

    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);

  const navigate = (link: string) => {
    window.history.pushState(null, "", link);
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return { currentPath, navigate };
}

export default useRoute;
