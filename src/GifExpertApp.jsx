import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Attack On Titan']);
    const onAddCategory = (newCategory) => {

        if (!categories.includes(newCategory)) {
            setCategories([newCategory, ...categories]);
        }
        // categories.push(newCategory);
        // const newValue = 'Demon Slayer';

    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                // setCategories={ setCategories }
                // onNewCategory={ event => onAddCategory(event) }
                onNewCategory={event => onAddCategory(event)}
            />

            {
                categories.map((category) => (

                    <GifGrid
                        key={category}
                        category={category}
                    />

                ))
            }
        </>
    )
}