import React from "react";
import PizzaForm from "./features/pizza/PizzaForm";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import {
  selectDough,
  selectStyle,
  selectToppings,
} from "./features/pizza/pizzaSlice";
import "./App.css";

const App = () => {
  const style = useSelector(selectStyle);
  const dough = useSelector(selectDough);
  const toppings = useSelector(selectToppings);

  return (
    <div className="App">
      <Container className="py-5 p-2">
        <h1 className="my-5">Welcome to pizzapizz'</h1>
        <div className="my-5 d-flex  justify-content-around">
          <h3
            className={
              !style
                ? "rounded-sm p-3 mb-2 bg-dark text-white"
                : "p-3 mb-2 text-muted"
            }
          >
            Step1
          </h3>
          <h3
            className={
              style && !dough
                ? "rounded-sm p-3 mb-2 bg-dark text-white"
                : "p-3 mb-2 text-muted"
            }
          >
            Step2
          </h3>
          <h3
            className={
              style && dough && toppings.length === 0
                ? "rounded-sm p-3 mb-2 bg-dark text-white"
                : "p-3 mb-2 text-muted"
            }
          >
            Step3
          </h3>
        </div>
        {!style && <PizzaForm options={["Italian", "American"]} type="style" />}
        {style && !dough && (
          <PizzaForm
            options={["Standard", "Wholegrain", "Sour dough"]}
            type="dough"
          />
        )}
        {style && dough && toppings.length === 0 && (
          <PizzaForm
            options={[
              "Cheese",
              "Ham",
              "Mozzarella",
              "Pineapple",
              "Mushrooms",
              "Mais",
              "Onions",
              "Garlic",
              "Pickles",
              "More cheese",
            ]}
            type="toppings"
          />
        )}
        {style && dough !== "" && toppings.length > 0 && (
          <h2>Congrats! Your order is confirmed.</h2>
        )}
        <h2>Your selection</h2>
        {style && <h3>Style: {style}</h3>}
        {style && dough && <h3>Dough type: {dough}</h3>}
        <>
          {style && dough !== "" && toppings.length > 0 && (
            <>
              <h3>Toppings: </h3>
              <ul>
                {toppings.map((topping) => (
                  <li key="topping">{topping}</li>
                ))}
              </ul>
            </>
          )}
        </>
      </Container>
    </div>
  );
};

export default App;
