const header = "Hello from the other side"
const title = "Hello"
const table_of_contents = [
  {id: 10, text: "My first story"},
  {id: 20, text: "My second story"},
  {id: 30, text: "My third story"},
]


function App() {
  return (
    <div className="container">
      <h1>{header}</h1>
      <p>{title}</p>
      <ul>
        {table_of_contents.map((content, index) => (
          <li key={index}>{content.text}</li>
        ))}
      </ul>
     </div>
 )
}

export default App