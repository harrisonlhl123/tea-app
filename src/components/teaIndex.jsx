import { useSelector } from "react-redux"

const TeaIndex = (props) => {
    const teas = useSelector(state => state.teas);

    return (
        <div>
            <h1>Tea Index:</h1>
            {Object.values(teas).map(tea => (
                    <li>
                        <p>Flavor: {tea.flavor}</p>
                        <p>Price: {tea.price}</p>
                    </li>
            ))}
        </div>
    )
}

export default TeaIndex;

