import { FC, useState } from "react";
import "./App.css";
import AddPizzaForm from "./components/AddPizzaFom";
import Pizza from "./models/Pizza";
import DisplayPizzas from "./components/DisplayPizzas/DisplayPizzas";
import { PIZZA_LIST } from "./data/mocData";
import EditPizzaForm from "./components/EditPizzas";

const App: FC = () => {
  const [pizzaList, setPizzaList] = useState<Pizza[]>(PIZZA_LIST);
  const [editStatus, setEditStatus] = useState<boolean>(false);
  const addPizza = (newPizza: Pizza) => {
    setPizzaList([...pizzaList, newPizza]);
  };

  const updatePizza = (editPizza: Pizza) => {
    const list = pizzaList.filter((pizza) => pizza.id !== editPizza.id);
    setPizzaList([...list, editPizza]);
  };
  const handleDelete = (id: number) => {
    const newList = pizzaList.filter((pizza) => id !== pizza.id);
    setPizzaList(newList);
  };
  const toggleEdit = () => {
    setEditStatus(!editStatus);
  };

  return (
    <div className="App">
      <header>Pizza Store</header>
      <main>
        <AddPizzaForm addPizza={addPizza} />
        <DisplayPizzas
          pizzasList={pizzaList}
          updatePizza={updatePizza}
          handleDelete={handleDelete}
          toggleEdit={toggleEdit}
        />
        {editStatus ? (
          <EditPizzaForm
            pizza={pizzaList[0]}
            updatePizza={updatePizza}
            toggleEdit={toggleEdit}
          />
        ) : null}
      </main>
    </div>
  );
};

export default App;
