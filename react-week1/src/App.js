import React from "react";
import "./App.css";
import Personinfo from "./components/Basicinfo";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      Basicinfo: [
        { name: "Cody", PhoneNumber: "505-503-4455", DOB: "12/23/1998" },
        { name: "Jeff", PhoneNumber: "618-625-8313", DOB: "9/16/1970" },
        { name: "Bob", PhoneNumber: "800-555-5555", DOB: "10/21/1989" },
      ],
    };
  }

  render() {
    return (
      <div className='App'>
        {this.state.Basicinfo.map((personinfo) => {
          return (
            <Personinfo
              name={personinfo.name}
              PhoneNumber={personinfo.PhoneNumber}
              DOB={personinfo.DOB}
            />
          );
        })}
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
