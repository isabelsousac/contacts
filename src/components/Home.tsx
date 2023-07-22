import { Divider } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = (): JSX.Element => {
    return (
        <div className="home">
            <h1>Coming soon</h1>

            <Divider role="presentation" />

            <h3>Please, click  <Link to="/contacts">here</Link> to see your contacts!</h3>
        </div>
    );
}

export default Home;