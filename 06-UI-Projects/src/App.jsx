
import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'

const App = () => {

  const users = [
    {
      img:'https://images.pexels.com/photos/8145256/pexels-photo-8145256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      color:'blue',
      intro:'',
      tag:'Satisfied'
    },
    {
      img:'https://images.pexels.com/photos/12902905/pexels-photo-12902905.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      color:'lightseagreen',
      intro:'',
      tag:'Underserved'
    },
    {
      img:'https://images.pexels.com/photos/12902867/pexels-photo-12902867.jpeg',
      color:'royalblue',
      intro:'',
      tag:'Underserved'
    },
    {
      img:'https://images.pexels.com/photos/7550308/pexels-photo-7550308.jpeg?cs=srgb&dl=pexels-mart-production-7550308.jpg&fm=jpg',
      color:'purple',
      intro:'',
      tag:'Underbanked'
    },
    {
      img:'https://media.istockphoto.com/id/2203914014/photo/professional-business-team-collaboration-in-a-modern-office-environment.jpg?s=612x612&w=0&k=20&c=QuNBRCjo28NDXgynyVGSnZmvPCixqRFTydGcMhu8Mdc=',
      color:'black',
      intro:'',
      tag:'Average'
    }
  ]
  return (
    <div>
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App
