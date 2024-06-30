import React from 'react';
import Button from "../Button/Button";

const App = () => {
    return (
        <div className="App">
            <Button style={"secondary"} size={28} state={"enabled"} focused counter>
                Что сделать
            </Button>
        </div>
    );
}

export default App;
