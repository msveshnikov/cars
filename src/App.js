import React from "react";
import { useInput } from "./useInput";
import { TextField, Button } from "@material-ui/core";
import logo from "./assets/orange-car-hp-right-mercedez.png";
import "./App.css";

const App = () => {
    const [year] = useInput("");
    const [brand] = useInput("");
    const [model] = useInput("");
    const [vehicle] = useInput("");
    const [gearbox] = useInput("");
    const [kilo] = useInput("");
    const [power] = useInput("");

    const searchHandler = (e) => {
        e.preventDefault();
        // search(year.value);
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />

                <form onSubmit={searchHandler} className="search">
                    <TextField label="Year" variant="outlined" type="text" {...year} />
                    <br />
                    <TextField label="Brand" variant="outlined" type="text" {...brand} />
                    <br />
                    <TextField label="Model" variant="outlined" type="text" {...model} />
                    <br />
                    <TextField label="Vehicle" variant="outlined" type="text" {...vehicle} />
                    <br />
                    <TextField label="Gearbox" variant="outlined" type="text" {...gearbox} />
                    <br />
                    <TextField label="Mileage" variant="outlined" type="text" {...kilo} />
                    <br />
                    <TextField label="Power" variant="outlined" type="text" {...power} />
                    <br />
                    <br />
                    <Button type="submit" variant="contained" color="secondary">
                        CHECK PRICE
                    </Button>
                </form>
            </header>
        </div>
    );
};

export default App;
