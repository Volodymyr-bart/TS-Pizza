import { FC } from "react";
import Pizza from "../../models/Pizza";
import SinglePizza from "../SinglePizza/SinglePizza";
import { DisplayPizzasStyled, List } from "./DisplayPizzas.styled";

interface DisplayPizzasProps {
  pizzasList: Pizza[];
  updatePizza: (editPizza: Pizza) => void;
  handleDelete: (id: number) => void;
  toggleEdit: () => void;
}

const DisplayPizzas: FC<DisplayPizzasProps> = ({
  pizzasList,
  updatePizza,
  handleDelete,
  toggleEdit,
}) => {
  return (
    <DisplayPizzasStyled>
      <List>
        {pizzasList.map((pizza) => (
          <SinglePizza
            key={pizza.id}
            pizza={pizza}
            updatePizza={updatePizza}
            handleDelete={handleDelete}
            toggleEdit={toggleEdit}
          />
        ))}
      </List>
    </DisplayPizzasStyled>
  );
};

export default DisplayPizzas;
