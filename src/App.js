import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Slogan from "./components/Slogan";
import TeamPage from "./components/TeamPage";
import ScrollToTop from "./components/ScrollToTop";
import Forms from "./components/Forms";
import CondoFitoutForm from "./components/CondoFitoutForm";
import HouseDesignForm from "./components/HouseDesignForm";
// import ServicesRoute from "./components/ServicesRoute";

function App() {
  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <Header />

        <AnimatePresence>
          <Switch>
            <Route exact path="/">
              <Slogan />
              <About />
              <TeamPage />
              <Services />
              <ContactUs />
            </Route>

            <Route path="/projects">
              <Projects />
            </Route>

            <Route exact path="/forms">
              <Forms />
            </Route>

            <Route path="/forms/house">
              <HouseDesignForm />
            </Route>

            <Route path="/forms/fitouts">
              <CondoFitoutForm />
            </Route>

            <Redirect from="*" to="/" />
          </Switch>
        </AnimatePresence>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
