import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { choiceDough, choiceStyle, choiceToppings } from "./pizzaSlice";
import { Button, Container, Form } from "react-bootstrap";
import store from "../../app/store";

const PizzaForm = (options) => {
  const dispatch = useDispatch();

  const [selectedChoice, setSelectedChoice] = useState(options.options[0]);
  const [selectedToppings, setSelectedToppings] = useState(["Cheese"]);
  console.log(selectedToppings);
  const onTickedFoodChange = (e) => {
    const checked = e.target.checked;
    const value = e.target.name;
    setSelectedToppings((values) =>
      checked ? [...values, value] : values.filter((v) => v !== value)
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (options.type === "style") dispatch(choiceStyle(selectedChoice));
    if (options.type === "dough") dispatch(choiceDough(selectedChoice));
    if (options.type === "toppings") {
      dispatch(choiceToppings(selectedToppings));
      console.log(store.getState());
    }
  };
  return (
    <Container className="container-md mx-auto">
      <Form onSubmit={handleSubmit}>
        <h2>Pizza {options.type}:</h2>
        <div className="my-5 d-flex justify-content-center">
          <Form.Group>
            {options.type !== "toppings" && (
              <Form.Control
                as="select"
                value={selectedChoice}
                onChange={(e) => setSelectedChoice(e.target.value)}
              >
                {options.options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </Form.Control>
            )}
            {options.type === "toppings" && (
              <div>
                {options.options.map((option, index) => (
                  <div key={index} className="d-flex justify-content-between">
                    <Form.Label key={option} htmlFor={option}>
                      {option}:
                    </Form.Label>
                    <Form.Check
                      checked={selectedToppings.includes(option)}
                      id={option}
                      name={option}
                      key={index}
                      onChange={onTickedFoodChange}
                    />{" "}
                  </div>
                ))}
              </div>
            )}
          </Form.Group>
          <div className="ml-5">
            <Button type="submit">
              {options.type === "toppings" ? "Order now!" : "Validate!"}
            </Button>
          </div>
        </div>
      </Form>
    </Container>
  );
};

export default PizzaForm;
