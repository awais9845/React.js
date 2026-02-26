import Dashboard from "./components/Dashboard";
import Information from "./components/Information";
function App() {
  return (
    <div>
      <Dashboard>
        <h1 className="m-7 text-4xl">what is your name?</h1>
        {/* <Information
          data={{
            name: "awais khan",
            fatherName: "Sartaj khan",
            age: 19,
            grade: 12,
          }}
        />
        <Information
          data={{
            name: "awais khan",
            fatherName: "Sartaj khan",
            age: 19,
            grade: 12,
          }}
        />
        <Information
          data={{
            name: "awais khan",
            fatherName: "Sartaj khan",
            age: 19,
            grade: 12,
          }}
        /> */}
      </Dashboard>
    </div>
  );
}

export default App;
