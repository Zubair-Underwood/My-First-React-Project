
export const LiftingStateUp = (props) => {

    const handleClick = (e) => {

        e.preventDefault()
        let dt = "I am Child Data";
        props.myClick(dt);
    }

    return (
        <>
            <button onClick={handleClick}>Click 1</button>
        </>
    )
}
