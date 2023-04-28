import { FC, useState } from "react";
import Pizza from "../models/Pizza";
import { RiEdit2Line } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import EditPizzaForm from "./EditPizzas";

interface SinglePizzaProps {
  pizza: Pizza;
  handleEdit: (editPizza: Pizza) => void;
  handleDelete: (id: number) => void;
}
const SinglePizza: FC<SinglePizzaProps> = ({
  pizza,
  handleEdit,
  handleDelete,
}) => {
  const [edit, setEdit] = useState<boolean>(false);
  const toggleEdit = () => {
    setEdit(!edit);
  };
  return (
    <li>
      <div>
        <h2>{pizza.title}</h2>
        <span>{pizza.price}</span>
      </div>
      <div>
        <RiEdit2Line onClick={toggleEdit} />
        <MdDelete
          onClick={() => {
            handleDelete(pizza.id);
          }}
        />
      </div>
      {edit ? (
        <EditPizzaForm
          pizza={pizza}
          handleEdit={handleEdit}
          toggleEdit={toggleEdit}
        />
      ) : null}
    </li>
  );
};

export default SinglePizza;
