const Card = (props) => {
  console.log(props);
  return(
    <div className = 'card'>
        <img src={props.img}/>
        <h1>{props.user}</h1>
        <h2>{props.age}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Modi quae ad minus alias non? </p>
            <button>View Profile</button>
    </div>
  )
}
export default Card;