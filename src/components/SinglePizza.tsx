import { FC } from "react";
import Pizza from "../models/Pizza";
import { RiEdit2Line } from "react-icons/ri";
import { MdDelete } from "react-icons/md";

// RiEdit2Line;
// MdDelete;

interface SinglePizzaProps {
  pizza: Pizza;
}
const SinglePizza: FC<SinglePizzaProps> = ({ pizza }) => {
  return (
    <li>
      <div>
        <h2>{pizza.title}</h2>
        <span>{pizza.price}</span>
      </div>
      <div>
        <RiEdit2Line />
        <MdDelete />
      </div>
    </li>
  );
};

export default SinglePizza;
