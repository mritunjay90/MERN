const Info =({name, surname, ward})=>{
    return(
        <div>
            <h1>this is info component</h1>
            <h2>my info</h2>
            <p>Name: {name}</p>
            <p>Surname: {surname}</p>
            <p>Ward: {ward}</p>
        </div>
    )
}
export default Info;