import Card from "./Components/Card.jsx";
const App = () => {
  return(
    <div className= 'parent'>
      <Card user = 'Sakshi' age = {24} img="https://i.pinimg.com/736x/c2/5b/e2/c25be23386540fa00235fb7891443ca1.jpg" />
      <Card user = 'Shrinivas' age = {24} img="https://i.pinimg.com/736x/07/4d/b7/074db722788eae273dc49a3d0723f884.jpg"/>
      <Card user = 'Sarika' age = {45} img="https://i.pinimg.com/736x/3c/03/ff/3c03ff017ff3eb3d0ee4a97724691f5b.jpg"/>
      <Card user = 'Sujata' age = {49} img="https://i.pinimg.com/736x/7f/a5/42/7fa5424d4dc1670b9947cc881ecc0f45.jpg"/>
    </div>
  )
}
export default App;