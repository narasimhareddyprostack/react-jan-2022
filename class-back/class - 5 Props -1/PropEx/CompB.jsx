let CompB = (props) => {
    return <>
        <h2>Component B:</h2>
        <pre>{JSON.stringify(props)}</pre>
        <h2>Name:{props.name}</h2>
        <h3>Age: {props.age}</h3>
        <img src={props.p_image}/>
    </>
}
export default CompB