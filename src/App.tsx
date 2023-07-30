import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { List } from "antd";

function App() {
    return (
        <div className="App">
            <List>
                <List.Item>
                    <List.Item.Meta
                        title="Cool item title"
                        description="Cool item description"
                    />
                </List.Item>
            </List>
        </div>
    );
}

export default App;
