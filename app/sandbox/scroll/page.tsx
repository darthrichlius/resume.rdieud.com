"use client";
import React, { useEffect } from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

const TestPage = () => {
  // useEffect is used to perform side effects in functional components.
  // Here, it's used to register scroll events and update scrollSpy when the component mounts.
  useEffect(() => {
    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register("begin", (to, element) => {
      console.log("begin", to, element);
    });

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register("end", (to, element) => {
      console.log("end", to, element);
    });

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  // Defining functions to perform different types of scrolling.
  const scrollToTop = (e: any) => {
    e.preventDefault();
    scroll.scrollToTop();
  };

  const scrollToBottom = (e: any) => {
    e.preventDefault();
    scroll.scrollToBottom();
  };

  const scrollTo = (e: any) => {
    e.preventDefault();
    scroll.scrollTo(100); // Scrolling to 100px from the top of the page.
  };

  const scrollMore = (e: any) => {
    e.preventDefault();
    scroll.scrollMore(100); // Scrolling an additional 100px from the current scroll position.
  };

  // Function to handle the activation of a link.
  const handleSetActive = (to: string) => {
    console.log(to);
  };

  // Rendering the component's JSX.
  return (
    <div className="pt-96">
      <div>
        <a href="#" onClick={(e) => scrollToBottom(e)}>
          To the bottom!
        </a>
      </div>
      <div>
        <a href="#" onClick={(e) => scrollTo(e)}>
          Scroll to 100px from the top
        </a>
      </div>
      {/* Link component to scroll to "test1" element with specified properties */}
      <Link
        activeClass="active"
        to="test1"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        onSetActive={handleSetActive}
      >
        Test 1
      </Link>

      {/* Other Link and Button components for navigation, each with their unique properties and targets */}
      {/* ... */}

      {/* Element components that act as scroll targets */}
      <Element name="test1" className="element">
        test 1
      </Element>
      <Element name="test2" className="element">
        test 2
      </Element>
      <div id="anchor" className="element">
        test 6 (anchor)
      </div>

      {/* Links to elements inside a specific container */}
      <Link to="firstInsideContainer" containerId="containerElement">
        Go to first element inside container
      </Link>
      <Link to="secondInsideContainer" containerId="containerElement">
        Go to second element inside container
      </Link>

      {/* Container with elements inside */}
      <div className="element" id="containerElement">
        <Element name="firstInsideContainer">
          first element inside container
        </Element>
        <Element name="secondInsideContainer">
          second element inside container
        </Element>
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt eius
        commodi, totam debitis qui cum? Facilis quidem beatae, possimus
        similique, maiores aliquid sed unde commodi iure nisi ad cum nemo. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Sunt eius commodi,
        totam debitis qui cum? Facilis quidem beatae, possimus similique,
        maiores aliquid sed unde commodi iure nisi ad cum nemo. Lorem ipsum
        dolor, sit amet consectetur adipisicing elit. Sunt eius commodi, totam
        debitis qui cum? Facilis quidem beatae, possimus similique, maiores
        aliquid sed unde commodi iure nisi ad cum nemo. Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Sunt eius commodi, totam debitis qui
        cum? Facilis quidem beatae, possimus similique, maiores aliquid sed unde
        commodi iure nisi ad cum nemo. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Sunt eius commodi, totam debitis qui cum? Facilis
        quidem beatae, possimus similique, maiores aliquid sed unde commodi iure
        nisi ad cum nemo. Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Sunt eius commodi, totam debitis qui cum? Facilis quidem beatae,
        possimus similique, maiores aliquid sed unde commodi iure nisi ad cum
        nemo. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
        eius commodi, totam debitis qui cum? Facilis quidem beatae, possimus
        similique, maiores aliquid sed unde commodi iure nisi ad cum nemo. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Sunt eius commodi,
        totam debitis qui cum? Facilis quidem beatae, possimus similique,
        maiores aliquid sed unde commodi iure nisi ad cum nemo.
      </p>
      <div>
        <a href="#" onClick={(e) => scrollMore(e)}>
          Scroll 100px more from the current position!
        </a>
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt eius
        commodi, totam debitis qui cum? Facilis quidem beatae, possimus
        similique, maiores aliquid sed unde commodi iure nisi ad cum nemo. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Sunt eius commodi,
        totam debitis qui cum? Facilis quidem beatae, possimus similique,
        maiores aliquid sed unde commodi iure nisi ad cum nemo. Lorem ipsum
        dolor, sit amet consectetur adipisicing elit. Sunt eius commodi, totam
        debitis qui cum? Facilis quidem beatae, possimus similique, maiores
        aliquid sed unde commodi iure nisi ad cum nemo. Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Sunt eius commodi, totam debitis qui
        cum? Facilis quidem beatae, possimus similique, maiores aliquid sed unde
        commodi iure nisi ad cum nemo. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Sunt eius commodi, totam debitis qui cum? Facilis
        quidem beatae, possimus similique, maiores aliquid sed unde commodi iure
        nisi ad cum nemo. Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Sunt eius commodi, totam debitis qui cum? Facilis quidem beatae,
        possimus similique, maiores aliquid sed unde commodi iure nisi ad cum
        nemo. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
        eius commodi, totam debitis qui cum? Facilis quidem beatae, possimus
        similique, maiores aliquid sed unde commodi iure nisi ad cum nemo. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Sunt eius commodi,
        totam debitis qui cum? Facilis quidem beatae, possimus similique,
        maiores aliquid sed unde commodi iure nisi ad cum nemo.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt eius
        commodi, totam debitis qui cum? Facilis quidem beatae, possimus
        similique, maiores aliquid sed unde commodi iure nisi ad cum nemo. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Sunt eius commodi,
        totam debitis qui cum? Facilis quidem beatae, possimus similique,
        maiores aliquid sed unde commodi iure nisi ad cum nemo. Lorem ipsum
        dolor, sit amet consectetur adipisicing elit. Sunt eius commodi, totam
        debitis qui cum? Facilis quidem beatae, possimus similique, maiores
        aliquid sed unde commodi iure nisi ad cum nemo. Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Sunt eius commodi, totam debitis qui
        cum? Facilis quidem beatae, possimus similique, maiores aliquid sed unde
        commodi iure nisi ad cum nemo. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Sunt eius commodi, totam debitis qui cum? Facilis
        quidem beatae, possimus similique, maiores aliquid sed unde commodi iure
        nisi ad cum nemo. Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Sunt eius commodi, totam debitis qui cum? Facilis quidem beatae,
        possimus similique, maiores aliquid sed unde commodi iure nisi ad cum
        nemo. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
        eius commodi, totam debitis qui cum? Facilis quidem beatae, possimus
        similique, maiores aliquid sed unde commodi iure nisi ad cum nemo. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Sunt eius commodi,
        totam debitis qui cum? Facilis quidem beatae, possimus similique,
        maiores aliquid sed unde commodi iure nisi ad cum nemo.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt eius
        commodi, totam debitis qui cum? Facilis quidem beatae, possimus
        similique, maiores aliquid sed unde commodi iure nisi ad cum nemo. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Sunt eius commodi,
        totam debitis qui cum? Facilis quidem beatae, possimus similique,
        maiores aliquid sed unde commodi iure nisi ad cum nemo. Lorem ipsum
        dolor, sit amet consectetur adipisicing elit. Sunt eius commodi, totam
        debitis qui cum? Facilis quidem beatae, possimus similique, maiores
        aliquid sed unde commodi iure nisi ad cum nemo. Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Sunt eius commodi, totam debitis qui
        cum? Facilis quidem beatae, possimus similique, maiores aliquid sed unde
        commodi iure nisi ad cum nemo. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Sunt eius commodi, totam debitis qui cum? Facilis
        quidem beatae, possimus similique, maiores aliquid sed unde commodi iure
        nisi ad cum nemo. Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Sunt eius commodi, totam debitis qui cum? Facilis quidem beatae,
        possimus similique, maiores aliquid sed unde commodi iure nisi ad cum
        nemo. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
        eius commodi, totam debitis qui cum? Facilis quidem beatae, possimus
        similique, maiores aliquid sed unde commodi iure nisi ad cum nemo. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Sunt eius commodi,
        totam debitis qui cum? Facilis quidem beatae, possimus similique,
        maiores aliquid sed unde commodi iure nisi ad cum nemo.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt eius
        commodi, totam debitis qui cum? Facilis quidem beatae, possimus
        similique, maiores aliquid sed unde commodi iure nisi ad cum nemo. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Sunt eius commodi,
        totam debitis qui cum? Facilis quidem beatae, possimus similique,
        maiores aliquid sed unde commodi iure nisi ad cum nemo. Lorem ipsum
        dolor, sit amet consectetur adipisicing elit. Sunt eius commodi, totam
        debitis qui cum? Facilis quidem beatae, possimus similique, maiores
        aliquid sed unde commodi iure nisi ad cum nemo. Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Sunt eius commodi, totam debitis qui
        cum? Facilis quidem beatae, possimus similique, maiores aliquid sed unde
        commodi iure nisi ad cum nemo. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Sunt eius commodi, totam debitis qui cum? Facilis
        quidem beatae, possimus similique, maiores aliquid sed unde commodi iure
        nisi ad cum nemo. Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Sunt eius commodi, totam debitis qui cum? Facilis quidem beatae,
        possimus similique, maiores aliquid sed unde commodi iure nisi ad cum
        nemo. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
        eius commodi, totam debitis qui cum? Facilis quidem beatae, possimus
        similique, maiores aliquid sed unde commodi iure nisi ad cum nemo. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Sunt eius commodi,
        totam debitis qui cum? Facilis quidem beatae, possimus similique,
        maiores aliquid sed unde commodi iure nisi ad cum nemo.
      </p>

      {/* Anchors to trigger scroll actions */}
      <a href="#" onClick={(e) => scrollToTop(e)}>
        To the top!
      </a>
    </div>
  );
};

export default TestPage;
