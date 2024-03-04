import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesPublic from "./public.routes";
import RoutesPrivate from "./private.routes";

export default function RouteMain() {
  const token = localStorage.getItem('@token');

  return (
    <Router>
      <section className="flex w-[100%] h-[100vh]">
        {token ? <RoutesPrivate /> : <RoutesPublic />}
      </section>
    </Router>
  );
}
