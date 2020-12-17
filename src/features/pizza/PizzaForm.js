import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { choiceDough, choiceStyle, choiceToppings } from "./pizzaSlice";
import { Button, Container, Form } from "react-bootstrap";
import store from "../../app/store";

export const PizzaForm = (options) => {
  const dispatch = useDispatch();
  console.log(options.options);
  console.log(options.options[0]);
  console.log(options.type);

  const [selectedChoice, setSelectedChoice] = useState(options.options[0]);
  const selectedChoices = [];

  const onTickedFoodChange = (e) => {
    const checked = e.target.checked;
    const value = e.target.name;
    console.log(checked);
    if (checked) selectedChoices.push(value);
  };
  const checkedOption = options.options[0] === "cheese";

  const handleSubmit = (event) => {
    event.preventDefault();
    if (options.type === "style") dispatch(choiceStyle(selectedChoice));
    if (options.type === "dough") dispatch(choiceDough(selectedChoice));
    if (options.type === "toppings") {
      dispatch(choiceToppings(selectedChoices));
      console.log(store.getState());
    }
  };
  return (
    <Container className="container-md mx-auto">
      <Form onSubmit={handleSubmit}>
        <div className="d-flex">
          <Form.Group controlId="Form.ControlParticipantIdentity">
            <h2>Pizza {options.type}:</h2>
            {options.type !== "toppings" && (
              <Form.Control
                as="select"
                value={selectedChoice}
                onChange={(e) => setSelectedChoice(e.target.value)}
              >
                {options.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Form.Control>
            )}
            {options.type === "toppings" && (
              <>
                {options.options.map((option) => (
                  <>
                    <Form.Label>{option}:</Form.Label>
                    <Form.Control
                      type="checkbox"
                      defaultChecked={checkedOption}
                      name={option}
                      key={option}
                      onChange={onTickedFoodChange}
                    />{" "}
                  </>
                ))}
              </>
            )}
          </Form.Group>
          <div style={{ textAlign: "right" }}>
            <Button type="submit">
              {options.type === "toppings" ? "Order now!" : "Validate!"}
            </Button>
          </div>
        </div>
      </Form>
    </Container>
  );
};
