
import './App.css';

export default function App() {
  //const names = ["Ajith", "Aravind", "Sarathy", "Welcome All"];
  const users = [
    {
    name: "Ajith",
    pic: "https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Profile-Photo-Wallpaper.jpg"
  },
  {
    name: "Aravind",
    pic: "https://1.bp.blogspot.com/-Q45319SNgB8/YSo43rh_adI/AAAAAAAAWJ4/YP-0r8bhIG0Gmmw5KfpKmoJL6PagyPqyQCLcBGAsYHQ/s0/cute-dp-images-cute-profile-pictures%2B%25281%2529.jpg"
  }, 
  {
  name: "Sarathy",
  pic: "https://wallpapercave.com/wp/wp9276354.jpg"
  }
     ];
  return (
    <div className="App">
      {/*<Msg name="Ajith" />
         <Msg name="Aravind" />
         <Msg name="Sarathy" />*/}
         {/*map used to transforming - Array of string to Array of JSX */}
          
          {/*{names.map(nm=> <Msg name="Ajith"/>)} */} {/*this code gives Ajith name 3 times*/}  
         {/*{names.map(nm=><Msg name={nm}/>)} */}
         {users.map((ur)=>(
           <Msg 
             name={ur.name}
             pic={ur.pic}
           />
         ))}
    </div>
  );
}
/*
function Msg(props) {
  return (
    <div>
      <h1> {props.name}</h1>
    </div>
  );
  
}
*/
// Destructuring the props
function Msg({name, pic}) {
  return (
    <div>
      <img className="user-pic"
      src={pic} alt={name}/>
      <h1 className="user-name"> {name}</h1>
      
    </div>
  ); 
}