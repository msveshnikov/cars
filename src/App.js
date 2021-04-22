import React, { useState } from "react";
import { useInput } from "./useInput";
import { TextField, Button } from "@material-ui/core";
import logo from "./assets/orange-car-hp-right-mercedez.png";
import "./App.css";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import swal from "sweetalert";

const App = () => {
    const [year] = useInput("");
    const [brand, setBrand] = useState("ford");
    const [model] = useInput("");
    const [vehicle, setVehicle] = useState("limousine");
    const [gearbox, setGearbox] = useState("manuell");
    const [kilo] = useInput("");
    const [power] = useInput("");
    const [fueltype, setFueltype] = useState("benzin");
    const [notrepaireddamage, setNotrepaireddamage] = useState("nein");
    const brands = [
        "volkswagen",
        "sonstige_autos",
        "lancia",
        "ford",
        "opel",
        "mercedes_benz",
        "toyota",
        "audi",
        "bmw",
        "mitsubishi",
        "fiat",
        "nissan",
        "renault",
        "mazda",
        "subaru",
        "peugeot",
        "smart",
        "mini",
        "hyundai",
        "dacia",
        "porsche",
        "alfa_romeo",
        "daewoo",
        "saab",
        "kia",
        "chevrolet",
        "volvo",
        "skoda",
        "seat",
        "citroen",
        "suzuki",
        "honda",
        "jeep",
        "jaguar",
        "daihatsu",
        "land_rover",
        "chrysler",
        "rover",
        "lada",
    ];

    const handleGear = (event) => {
        setGearbox(event.target.value);
    };

    const handleRepair = (event) => {
        setNotrepaireddamage(event.target.value);
    };

    const handleFuel = (event) => {
        setFueltype(event.target.value);
    };

    const handleVehicle = (event) => {
        setVehicle(event.target.value);
    };

    const handleBrand = (event) => {
        setBrand(event.target.value);
    };

    const searchHandler = (e) => {
        e.preventDefault();
        fetch(
            `https://elk.maxsoft.shop/?yearofregistration=${year.value}&brand=${brand}&model=${model.value}&vehicletype=${vehicle}&gearbox=${gearbox}&kilometer=${kilo.value}&powerps=${power.value}&fueltype=${fueltype}&notrepaireddamage=${notrepaireddamage}`
        )
            .then((res) => res.json())
            .then((res) => {
                const p = Math.round(res.price * 26.5) + " CZK";
                swal({
                    title: "Price",
                    text: p,
                    icon: "warning",
                    confirmButtonClass: "btn-danger",
                });
            })
            .catch((res) => {
                console.log(res);
            });
    };

    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />

                <form onSubmit={searchHandler} className="search">
                    <TextField style={{ marginTop: 10 }} label="Year" variant="outlined" type="text" {...year} />
                    <br />

                    <FormControl style={{ marginTop: 10 }} fullWidth variant="filled">
                        <InputLabel>Brand</InputLabel>
                        <Select name="brand" value={brand} onChange={handleBrand}>
                            {brands.map((c) => (
                                <MenuItem key={c} value={c}>
                                    {capitalize(c)}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <br />
                    <TextField style={{ marginTop: 10 }} label="Model" variant="outlined" type="text" {...model} />
                    <br />
                    <FormControl style={{ marginTop: 10 }} fullWidth variant="filled">
                        <InputLabel>Vehicle Type</InputLabel>
                        <Select name="vehicle" value={vehicle} onChange={handleVehicle}>
                            <MenuItem value={"limousine"}>Sedan</MenuItem>
                            <MenuItem value={"coupe"}>Coupe</MenuItem>
                            <MenuItem value={"kleinwagen"}>Hatchback</MenuItem>
                            <MenuItem value={"suv"}>SUV</MenuItem>
                            <MenuItem value={"kombi"}>Combi</MenuItem>
                            <MenuItem value={"cabrio"}>Cabriolet</MenuItem>
                            <MenuItem value={"bus"}>Bus</MenuItem>
                            <MenuItem value={"andere"}>Other</MenuItem>
                        </Select>
                    </FormControl>
                    <br />
                    <FormControl style={{ marginTop: 10 }} fullWidth variant="filled">
                        <InputLabel>Gearbox</InputLabel>
                        <Select name="gearbox" value={gearbox} onChange={handleGear}>
                            <MenuItem value={"manuell"}>Manual</MenuItem>
                            <MenuItem value={"automatik"}>Automatic</MenuItem>
                        </Select>
                    </FormControl>

                    <br />
                    <TextField style={{ marginTop: 10 }} label="Kilometers" variant="outlined" type="text" {...kilo} />
                    <br />
                    <TextField style={{ marginTop: 10 }} label="Power" variant="outlined" type="text" {...power} />

                    <br />
                    <FormControl style={{ marginTop: 10 }} fullWidth variant="filled">
                        <InputLabel>Fuel Type</InputLabel>
                        <Select name="fueltype" value={fueltype} onChange={handleFuel}>
                            <MenuItem value={"benzin"}>Gasoline</MenuItem>
                            <MenuItem value={"diesel"}>Diesel</MenuItem>
                            <MenuItem value={"hybrid"}>Hybrid</MenuItem>
                            <MenuItem value={"lpg"}>LPG</MenuItem>
                            <MenuItem value={"cng"}>CNG</MenuItem>
                            <MenuItem value={"elektro"}>Electro</MenuItem>
                            <MenuItem value={"andere"}>Other</MenuItem>
                        </Select>
                    </FormControl>

                    <br />
                    <FormControl style={{ marginTop: 10 }} fullWidth variant="filled">
                        <InputLabel>Damaged</InputLabel>
                        <Select name="notrepaireddamage" value={notrepaireddamage} onChange={handleRepair}>
                            <MenuItem value={"nein"}>No</MenuItem>
                            <MenuItem value={"ja"}>Yes</MenuItem>
                        </Select>
                    </FormControl>

                    <br />
                    <br />
                    <Button type="submit" variant="contained" color="secondary">
                        check price
                    </Button>
                    <br />
                    <br />
                </form>
            </header>
        </div>
    );
};

export default App;
