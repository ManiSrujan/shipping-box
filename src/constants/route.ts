const ROUTES = {
  ENTRY: "/",
  ADD_BOX: "/addbox",
  SHIPMENTS: "/shipments",
} as const;

const DEFAULT_ROUTE = ROUTES.ADD_BOX;

export { ROUTES, DEFAULT_ROUTE };
