import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PublicRoutes } from "./route";
import DefaultLayout from "../src/layout/DefaultLayout";
import { Fragment } from "react";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {PublicRoutes.map((route, index) => {
            const Page = route.component;
            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
