import Address from "./Address";
import Father from "./Father";

const App = () => {
  let name ="Tanisha";
  let caste = "Adhikari";

  let products =[
    {id:1, name:"Laptop", price:100000},
    {id:2, name:"Iphone", price:200000},
    {id:3, name:"bottle", price:300},
  ];
  let users =[
    {id:1, name:"Rita", age:22,image:"imagee.png",gender:"female"},
    {id:2, name:"Sita", age:25, image:"imagee.png",gender:"female"},
    {id:3, name:"Gita", age:30, image:"imagee.png",gender:"female"},
  ];
  return (
    <div>
      <h1 style={{color:"red"}}>Welcome to React</h1>
      <p style={{backgroundColor:"yellow"}}>Tanisha Adhikari</p>
      <p style={{border:"2px solid black", width:"200px", padding:"10px"}}>This is a paragraph with inline CSS.</p>
      <p>Vite + React </p>
      <h1>Hello, {name} {caste}!</h1>
      <p>The sum of 1+1 is {1+1}.</p>
      <img src="imagee.png" height="200px" width="200px"></img>
      {
        products.map((item, i)=> {

          return <div style={{border:"2px solid black", width:"200px", padding:"10px", margin:"10px"}} key={i}>

            <p>item.id is {item.id}</p>
            <p>item.name is {item.name}</p>
            <p>item.price is {item.price}</p>
          </div>;
        })
      }
        {
          users.map((item, i)=> {

            return <div style={{border:"2px solid black"}}>
             <img src={item.image} height="100px" width="100px"></img>
              <p>id is {item.id}</p>
              <p>name is {item.name}</p>
              <p>age is {item.age}</p>
              <p>gender is {item.gender}</p>
            </div>;
          })

        } 
      <Address country="Nepal" city="Kathmandu" province="Bagmati"> </Address>

      <Father name="John" surname="Doe" age={30}></Father>
      
      <p className="success">This is a success message.</p> 
      <p className="error">This is an error message.</p>
      <p className="warning">This is a warning message.</p> 
    </div>
  );
};

export default App;
