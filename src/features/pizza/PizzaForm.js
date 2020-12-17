import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { choiceDough, choiceStyle, choiceToppings } from "./pizzaSlice";
import { Button, Container, Form } from "react-bootstrap";

export const PizzaForm = (options) => {
  const dispatch = useDispatch();
  console.log(options.options);
  console.log(options.type);
  console.log(options.action);

  const [selectedChoice, setSelectedChoice] = useState(options.options[0]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (options.type === "style") dispatch(choiceStyle(selectedChoice));
    if (options.type === "dough") dispatch(choiceDough(selectedChoice));
    if (options.type === "toppings") dispatch(choiceToppings([selectedChoice]));
  };
  return (
    <Container className="container-md mx-auto">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="Form.ControlParticipantIdentity">
          <Form.Label>Pizza {options.type}:</Form.Label>
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
                    name="city"
                    value={option}
                    onChange={(e) => setSelectedChoice(e.target.value)}
                  />
                </>
              ))}
            </>
          )}
        </Form.Group>
        <div style={{ textAlign: "right" }}>
          <Button type="submit">Validate!</Button>
        </div>
      </Form>
    </Container>
  );
};
