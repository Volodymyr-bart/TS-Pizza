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
  console.log("pizzaList", pizzaList);
  return (
    <div className="App">
      <header></header>
      <main>
        <AddPizzaForm addPizza={addPizza} />
        <DisplayPizzas pizzasList={pizzaList} />
      </main>
    </div>
  );
};

export default App;
