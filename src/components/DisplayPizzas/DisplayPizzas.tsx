import { FC } from "react";
import Pizza from "../../models/Pizza";
import SinglePizza from "../SinglePizza";
import { DisplayPizzasStyled } from "./DisplayPizzas.styled";

interface DisplayPizzasProps {
  pizzasList: Pizza[];
}

const DisplayPizzas: FC<DisplayPizzasProps> = ({ pizzasList }) => {
  return (
    <DisplayPizzasStyled>
      <ul>
        {pizzasList.map((pizza) => (
          <SinglePizza key={pizza.id} pizza={pizza} />
        ))}
      </ul>
    </DisplayPizzasStyled>
  );
};

export default DisplayPizzas;
