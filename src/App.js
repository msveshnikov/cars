import React, { useState } from "react";
import { useInput } from "./useInput";
import { TextField, Button, Typography } from "@material-ui/core";
import logo from "./assets/orange-car-hp-right-mercedez.png";
import "./App.css";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

const App = () => {
    const [year] = useInput("");
    const [brand] = useInput("");
    const [model] = useInput("");
    const [vehicle] = useInput("");
    const [gearbox, setGearbox] = useState("manuell");
    const [kilo] = useInput("");
    const [power] = useInput("");
    const [fueltype] = useInput("");
    const [notrepaireddamage] = useInput("");

    const [price, setPrice] = useState();

    const handleChange = (event) => {
        setGearbox(event.target.value);
    };

    const searchHandler = (e) => {
        e.preventDefault();
        fetch(
            `https://elk.maxsoft.shop/?yearofregistration=${year.value}&brand=${brand.value}&model=${model.value}&vehicletype=${vehicle.value}&gearbox=${gearbox}&kilometer=${kilo.value}&powerps=${power.value}&fueltype=${fueltype.value}&notrepaireddamage=${notrepaireddamage.value}`
        )
            .then((res) => res.json())
            .then((res) => {
                setPrice(Math.round(res.price * 26.5) + " CZK");
            })
            .catch((res) => {
                console.log(res);
            });
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />

                <form onSubmit={searchHandler} className="search">
                    <TextField style={{ marginTop: 10 }} label="Year" variant="outlined" type="text" {...year} />
                    <br />
                    <TextField style={{ marginTop: 10 }} label="Brand" variant="outlined" type="text" {...brand} />
                    <br />
                    <TextField style={{ marginTop: 10 }} label="Model" variant="outlined" type="text" {...model} />
                    <br />
                    <TextField
                        style={{ marginTop: 10 }}
                        label="Vehicle type"
                        variant="outlined"
                        type="text"
                        {...vehicle}
                    />
                    <br />
                    <FormControl style={{ marginTop: 10 }} fullWidth variant="filled">
                        <InputLabel>Gearbox</InputLabel>
                        <Select name="gearbox" value={gearbox} onChange={handleChange}>
                            <MenuItem value={"manuell"}>Manual</MenuItem>
                            <MenuItem value={"automatik"}>Automatic</MenuItem>
                        </Select>
                    </FormControl>

                    <br />
                    <TextField style={{ marginTop: 10 }} label="Kilometers" variant="outlined" type="text" {...kilo} />
                    <br />
                    <TextField style={{ marginTop: 10 }} label="Power" variant="outlined" type="text" {...power} />
                    <br />
                    <TextField
                        style={{ marginTop: 10 }}
                        label="Fuel Type"
                        variant="outlined"
                        type="text"
                        {...fueltype}
                    />
                    <br />
                    <TextField
                        style={{ marginTop: 10 }}
                        label="Not Repaired Damage"
                        variant="outlined"
                        type="text"
                        {...notrepaireddamage}
                    />
                    <br />
                    <br />
                    <Button type="submit" variant="contained" color="secondary">
                        check price
                    </Button>
                    <br />
                </form>
                <br />
                <Typography variant="h2">{price}</Typography>
            </header>
        </div>
    );
};

export default App;
