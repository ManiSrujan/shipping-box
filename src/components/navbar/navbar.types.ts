interface INavbarModule {
  id: string;
  title: string;
  link: string;
}

interface INavbar {
  modules: INavbarModule[];
  onRouteChange: (link: string) => void;
}

export type { INavbar, INavbarModule };
