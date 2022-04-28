import NoNameGrid from "./components/NoNameGrid";

function App() {
  return (
    <div className="App">
      <NoNameGrid
        columns={["a", "b"]}
        data={[
          { a: 1, b: 2 },
          { a: 2, b: 4 },
          { a: 3, b: 4 },
          { a: 4, b: 4 },
          { a: 5, b: 4 },
          { a: 6, b: 4 },
          { a: 7, b: 4 },
          { a: 8, b: 4 },
          { a: 9, b: 4 },
          { a: 10, b: 4 },
          { a: 11, b: 4 },
          { a: 12, b: 4 },
        ]}
        onPageChange={(page: number) => console.log(page)}
      />
    </div>
  );
}

export default App;
