import logo from './H-logo.ico';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayoks = ['Razzak', 'Jashim', 'Alomgir', 'Salman sha', 'Manna', 'Sakib'];
  const products = [
    { name: "Photography", price: "$ 9.99", descrip: 'Lightroom, Lightroom Classic, Photoshop on desktop and iPad, and 20GB of cloud storage (1TB available).' },
    { name: "Photoshop", price: "$ 20.99", descrip: 'Create beautiful graphics, photos, and art on desktop and iPad. Comes with Adobe Fresco for drawing and painting.' },
    { name: "Acrobat Pro", price: "$ 14.99", descrip: 'The complete PDF solution for working anywhere (includes desktop, web, and mobile access).' },
    { name: "Illustrator", price: "$ 20.99", descrip: 'Create precise designs, Illustrations, and vector graphics on desktop and iPad.' }
  ]
  const friends = [
    { id: 1, name: 'Fahim', phone: '0123', address: 'Jessore' },
    { id: 2, name: 'Halim', phone: '05689', address: 'Dhaka' },
    { id: 3, name: 'Dalim', phone: '8534', address: 'Khulna' },
    { id: 4, name: 'Kolim', phone: '023974', address: 'Sharsha' }
  ]

  const friends2 = [
    { id: 5, name: 'Fahim', phone: '0123', address: 'Jessore' },
    { id: 6, name: 'Halim', phone: '05689', address: 'Dhaka' },
    { id: 7, name: 'Dalim', phone: '8534', address: 'Khulna' },
    { id: 8, name: 'Kolim', phone: '023974', address: 'Sharsha' }
  ]

  const containerDiv = {
    margin: '1rem',
    padding: '0.7rem',
    marginTop: '2rem'
  }
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)"
  }


  return (



    <div className="App">
      <h1>My name is Hadiuzzaman</h1>

      {/* Show Count Section */}
      <div style={containerDiv}>
        <Count></Count>
      </div>

      {/* Dynamic Data call */}
      <div style={containerDiv}>
        <DynamicData></DynamicData>
      </div>



      {/* Show Friend information */}
      <div style={containerDiv}>
        <h2>Show Friend information</h2>
        <div style={gridStyle}>
          {
            friends.map(fr => <Friend friend={fr}></Friend>)
          }
          {
            friends2.map(a => <Friend friend={a}></Friend>)
          }
        </div>
      </div>

      {/* Show Products information */}
      <div style={containerDiv}>
        <h2>Show Products information</h2>
        <div className='product-info' style={gridStyle}>
          {
            products.map(pd => <Product product={pd}></Product>)
          }
        </div>
      </div>




      {/* <Counter></Counter>

      {
        nayoks.map(nayok =><li>{nayok}</li>)
      }
      {
        products.map(product =><li>{product.name}</li>)
      }
      {
        products.map(product =><Product product={product}></Product>)
      }
      {
        friends.map(fr => <Friend friend={fr}></Friend>)
      }

      {
        friends2.map(fr => <Friend friend={fr}></Friend>)
      } */}

      {/* <Product product={products[0]}></Product>
      <Product product={products[1]}></Product>
      <Product product={products[2]}></Product>
      <Product product={products[3]}></Product> */}

    </div>
  );
}

// Count Stage
function Count() {
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  };
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleDecrease} >Decrease</button>
      <button onClick={handleIncrease} >Increase</button>
    </div>
  )
}

// Show Friend information
function Friend(props) {
  const friendStyle = {
    boxShadow: "0.5rem 0.5rem 1rem lightsalmon",
    borderRadius: "1rem",
    padding: "0.5rem",
    margin: "1rem",
    backgroundColor: "lightgray"
  }

  return (
    <div style={friendStyle}>
      <h1>ID: {props.friend.id}</h1>
      <h3>Name: {props.friend.name}</h3>
      <h4>Phone: {props.friend.phone}</h4>
      <p>Address: {props.friend.address}</p>
    </div>
  )
}

// Show Products information
function Product(props) {
  const productStyle = {
    boxShadow: "0.5rem 0.5rem 1rem lightsalmon",
    borderRadius: "1rem",
    padding: "0.5rem",
    margin: "1rem",
    backgroundColor: "lightgray"
  }
  const { name, price, descrip } = props.product;
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h4>{price}</h4>
      <p>{descrip}</p>
      <button>Bye now</button>
    </div>
  )
}

// Show Dynamic Data
function DynamicData() {
  const [users, setCount] = useState([]);
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=50')
      .then(res => res.json())
      .then(data => setCount(data.results));
  }, []);


  const productStyle = {
    boxShadow: "0.5rem 0.5rem 1rem lightsalmon",
    borderRadius: "1rem",
    padding: "0.5rem",
    margin: "1rem",
    backgroundColor: "lightgray"
  }
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)"
  }
  return (
    <div>
      <h1>Show Dynamic Data: {users.length}</h1>
      <div style={gridStyle}>
        {
          users.map(user =>
            <div className='dynamic-data' style={productStyle}>
              <h3>Name: {user.name.title} {user.name.first} {user.name.last}</h3>
              <aside><img src={user.picture.medium} alt="" /></aside>
              <p><b>Gender:</b> {user.gender}</p>
              <h5><b>Age:</b> {user.dob.age}</h5>
              <p><b>Email:</b> {user.email}</p>
              <p><b>Phone:</b> {user.phone}</p>
              <p><strong>Address:</strong> {user.location.city}, {user.location.state}, {user.location.country}</p>
              <p><b>ZipCode:</b> {user.location.postcode}</p>
            </div>)
        }
      </div>
    </div>
  )
}


// function Counter() {
//   const [count, setCount] = useState(0);
//   const handleIncrease = () => setCount(count + 1);

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={handleIncrease}>Increase</button>
//     </div>
//   )
// }

// function Product(props) {
//   const productStyle = {
//     boxShadow: "0.5rem 0.5rem 1rem lightsalmon",
//     borderRadius: "1rem",
//     padding: "0.5rem",
//     margin: "1rem",
//     backgroundColor: "lightgray"
//   }
//   const gridStyle = {
//     display: "grid",
//     gridTemplateColumns: "1fr 2fr 1fr"
//   }

//   const { name, price, descrip } = props.product;
//   return (
//     <div style={gridStyle}>
//       <div style={productStyle}>
//         <h3>{name}</h3>
//         <h4>price: {price}</h4>
//         <p>{descrip}</p>
//         <button>Bye now</button>
//       </div>
//     </div>

//   )
// }

// function Friend(props) {
//   const productStyle = {
//     boxShadow: "0.5rem 0.5rem 1rem lightsalmon",
//     borderRadius: "1rem",
//     padding: "0.5rem",
//     margin: "1rem",
//     backgroundColor: "lightgray"
//   }
//   const gridStyle = {
//     display: "grid",
//     gridTemplateColumns: "1fr 2fr 1fr"
//   }

//   const { id, name, phone, address } = props.friend;
//   return (
//     <div style={gridStyle}>
//       <div style={productStyle}>
//         <h3>ID: {id}</h3>
//         <h3>Name: {name}</h3>
//         <h4>Phone: {phone}</h4>
//         <p>Address: {address}</p>
//       </div>
//     </div>

//   )
// }

export default App;
