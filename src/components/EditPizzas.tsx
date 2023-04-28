import { ChangeEvent, FC, FormEvent, useState } from "react";
import "./../index.css";
import Pizza from "../models/Pizza";

interface EditPizzaFormProps {
  pizza: Pizza;
  toggleEdit: () => void;
  handleEdit: (editPizza: Pizza) => void;
}

const EditPizzaForm: FC<EditPizzaFormProps> = ({
  pizza,
  toggleEdit,
  handleEdit,
}) => {
  const [editPizza, setEditPizza] = useState<Pizza>(pizza);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditPizza({ ...editPizza, [name]: value });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, price, img } = editPizza;
    if (title && price && img) {
      toggleEdit();
      handleEdit(editPizza);
    }
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Namepizz"
          onChange={handleChange}
          value={editPizza.title}
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          onChange={handleChange}
          value={editPizza.price}
        />
        <input
          type="text"
          name="img"
          placeholder="Image"
          onChange={handleChange}
          value={editPizza.img}
        />
        <button type="submit">Accept</button>
      </form>
    </>
  );
};
export default EditPizzaForm;
