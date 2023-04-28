import { FC, useState } from "react";
import "./App.css";
import AddPizzaForm from "./components/AddPizzaFom";
import Pizza from "./models/Pizza";
import DisplayPizzas from "./components/DisplayPizzas/DisplayPizzas";

const App: FC = () => {
  const [pizzaList, setPizzaList] = useState<Pizza[]>([]);
  const addPizza = (newPizza: Pizza) => {
    setPizzaList([...pizzaList, newPizza]);
  };

  const handleEdit = (editPizza: Pizza) => {
    setPizzaList([...pizzaList, editPizza]);
  };
  const handleDelete = (id: number) => {
    const newList = pizzaList.filter((pizza) => id !== pizza.id);
    setPizzaList(newList);
  };

  return (
    <div className="App">
      <header></header>
      <main>
        <AddPizzaForm addPizza={addPizza} />
        <DisplayPizzas
          pizzasList={pizzaList}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </main>
    </div>
  );
};

export default App;
