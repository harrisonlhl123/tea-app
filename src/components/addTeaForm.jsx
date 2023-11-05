import { useDispatch } from "react-redux"
import { useState } from "react"
import { receiveTea } from "../store/teaReducer";


const AddTeaForm = (props) => {
    const dispatch = useDispatch();

    const [flavor, setFlavor] = useState("");
    const [price, setPrice] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        const tea = {
            id: Math.random() * 1000,
            flavor: flavor,
            price: price
        }

        dispatch(receiveTea(tea));
        setFlavor("");
        setPrice("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Flavor
                <input type="text" value={flavor} onChange={e => setFlavor(e.target.value)}/>
            </label>

            <label>Price
                <input type="text" value={price} onChange={e => setPrice(e.target.value)}/>
            </label>

            <input type="submit" value="Add Tea"/>
        </form>
    )
}

export default AddTeaForm;