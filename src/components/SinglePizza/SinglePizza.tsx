import { FC } from "react";
import Pizza from "../../models/Pizza";
import { RiEdit2Line } from "react-icons/ri";
import { MdDelete } from "react-icons/md";

import { Item } from "./SinglePizza.styled";

interface SinglePizzaProps {
  pizza: Pizza;
  updatePizza: (editPizza: Pizza) => void;
  handleDelete: (id: number) => void;
  toggleEdit: () => void;
}
const SinglePizza: FC<SinglePizzaProps> = ({
  pizza,
  updatePizza,
  handleDelete,
  toggleEdit,
}) => {
  return (
    <Item>
      <div className="description">
        <h2>{pizza.title}</h2>
        <span>{pizza.price}</span>
        <img src={pizza.img} alt={pizza.title} />
      </div>
      <div className="operation">
        <RiEdit2Line
          className="operation__edit"
          size={30}
          onClick={() => {
            toggleEdit();
            console.log(pizza.id);
          }}
        />
        <MdDelete
          className="operation__delete"
          size={30}
          onClick={() => {
            handleDelete(pizza.id);
          }}
        />
      </div>
    </Item>
  );
};

export default SinglePizza;
