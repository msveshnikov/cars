import React from "react";
import { useInput } from "./useInput";
import { TextField, Button } from "@material-ui/core";
import logo from './logo.svg';
import "./App.css";

const Search = ({ search }) => {
    const [title, resetTitle] = useInput("");

    const searchHandler = (e) => {
        e.preventDefault();
        if (!title.value) {
            return;
        }
        search(title.value);
        resetTitle();
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />

                <form onSubmit={searchHandler} className="search">
                    <TextField label="Title" variant="outlined" type="text" {...title} />
                    <Button type="submit" variant="contained" color="primary">
                        SEARCH
                    </Button>
                </form>
            </header>
        </div>
    );
};

export default Search;
