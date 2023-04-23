import React, { useState, useEffect } from "react";
import "../style/Counter.css";

const App = () => {
    const [selections, setSelections] = useState(
        JSON.parse(localStorage.getItem("selections")) || []
    );
    const [counters, setCounters] = useState(
        JSON.parse(localStorage.getItem("counters")) || {}
    );
    const [genders, setGenders] = useState(
        localStorage.getItem("genders") || ""
    );
    const [colors, setColors] = useState(
        localStorage.getItem("colors") || ""
    );
    const [sizes, setSizes] = useState(
        localStorage.getItem("sizes") || ""
    );

    const handleClearStorage = () => {
        localStorage.removeItem("counters");
        localStorage.removeItem("selections");
        setCounters({});
        setSelections([]);
    }

    useEffect(() => {
        localStorage.setItem("genders", genders);
        localStorage.setItem("colors", colors);
        localStorage.setItem("sizes", sizes);
        localStorage.setItem("counters", JSON.stringify(counters));
        localStorage.setItem("selections", JSON.stringify(selections));
        document.getElementById("genders-input").value = genders;
        document.getElementById("colors-input").value = colors;
        document.getElementById("sizes-input").value = sizes;
    }, [genders, colors, sizes, counters, selections]);


    const handleUpdate = () => {
        const gendersInput = document.getElementById("genders-input").value;
        const colorsInput = document.getElementById("colors-input").value;
        const sizesInput = document.getElementById("sizes-input").value;
        setGenders(gendersInput);
        setColors(colorsInput);
        setSizes(sizesInput);
        localStorage.setItem("genders", gendersInput);
        localStorage.setItem("colors", colorsInput);
        localStorage.setItem("sizes", sizesInput);
    };


    const handleAdd = (gender, color, size) => {
        const newSelection = { gender, color, size };
        const existingSelectionIndex = selections.findIndex(
            (s) => s.gender === gender && s.color === color && s.size === size
        );

        if (existingSelectionIndex >= 0) {
            const existingSelection = selections[existingSelectionIndex];
            const key = `${gender}-${color}-${size}`;
            const newCounters = { ...counters, [key]: counters[key] + 1 };
            setCounters(newCounters);

            const newSelections = [...selections];
            newSelections[existingSelectionIndex] = {
                ...existingSelection,
                count: existingSelection.count + 1,
            };
            setSelections(newSelections);
        } else {
            const key = `${gender}-${color}-${size}`;
            const newCounters = { ...counters, [key]: 1 };
            setCounters(newCounters);

            setSelections([...selections, { ...newSelection, count: 1 }]);
        }
    };

    const handleRemove = (index) => {
        const removedSelection = selections[index];

        const key = `${removedSelection.gender}-${removedSelection.color}-${removedSelection.size}`;
        const newCounters = { ...counters };
        if (newCounters[key] > 1) {
            newCounters[key]--;
        } else {
            delete newCounters[key];
        }
        setCounters(newCounters);

        const newSelections = [...selections];
        newSelections[index] = {
            ...removedSelection,
            count: removedSelection.count - 1,
        };
        if (newSelections[index].count === 0) {
            newSelections.splice(index, 1);
        }
        setSelections(newSelections);
    };
    return (
        <div style={{ display: "flex" }}>
            <div style={{ flex: 1 }}>
                <h2>Contador Mariseta</h2>
                <div>
                    <div>
                        <label htmlFor="genders-input">Genero:</label>
                        <input id="genders-input" type="text" />
                    </div>
                    <div>
                        <label htmlFor="colors-input">Colores:</label>
                        <input id="colors-input" type="text" />
                    </div>
                    <div>
                        <label htmlFor="sizes-input">Tallas:</label>
                        <input id="sizes-input" type="text" />
                    </div>
                    <button onClick={handleUpdate}>Actualizar Textos</button>
                    <button onClick={handleClearStorage}>Nuevo Contador</button>

                    {genders.split(" ").map((gender) =>
                        colors.split(" ").map((color) => (
                            <div key={`${gender}-${color}`}>
                                <h4>{`${gender} ${color}`}</h4>
                                {sizes.split(" ").map((size) => (
                                    <button
                                        key={`${gender}-${color}-${size}`}
                                        onClick={() => handleAdd(gender, color, size)}
                                    >
                                        {size}
                                    </button>
                                ))}
                                <br />
                            </div>
                        ))
                    )}
                </div>
            </div>
            <div style={{ flex: 1, marginBottom: "16px" }}>
                <h2>Suma de camisetas</h2>
                {selections.map((selection, index) => (
                    <div key={`${selection.gender}-${selection.color}-${selection.size}`}>
                        {`${selection.gender} ${selection.color} ${selection.size} ${counters[`${selection.gender}-${selection.color}-${selection.size}`]
                            }`}
                        <button onClick={() => handleRemove(index)}>Restar</button>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default App;
