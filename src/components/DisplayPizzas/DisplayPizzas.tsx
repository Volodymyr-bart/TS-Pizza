import { FC } from "react";
import Pizza from "../../models/Pizza";
import SinglePizza from "../SinglePizza";
import { DisplayPizzasStyled } from "./DisplayPizzas.styled";

interface DisplayPizzasProps {
  pizzasList: Pizza[];
  handleEdit: (editPizza: Pizza) => void;
  handleDelete: (id: number) => void;
}

const DisplayPizzas: FC<DisplayPizzasProps> = ({
  pizzasList,
  handleEdit,
  handleDelete,
}) => {
  return (
    <DisplayPizzasStyled>
      <ul>
        {pizzasList.map((pizza) => (
          <SinglePizza
            key={pizza.id}
            pizza={pizza}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </DisplayPizzasStyled>
  );
};

export default DisplayPizzas;
