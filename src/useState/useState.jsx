import { useState } from 'react'

function NameList() {
  const [list, setList] = useState(["John", "Gog", "Who"])
  const [name, setName] = useState(() => "jack");

  const onClickButton = () => {
    setList([...list, name]);
    setName("");
  } 
  return (
    <div>
      <ul>
        {list.map((name) => {
          return <li key={name}>{name}</li>
        })}
      </ul>
      <input value={name} type="text" onChange={(e) => setName(e.target.value)}/>
      <button onClick={onClickButton}>click</button>
    </div>
  )
};


function Counter() {
  const [count, setCount] = useState(10);

  function addOne() { 
    setCount(count + 1)
  }
  return <button onClick={addOne}>Count = {count}</button>
}

function App() {
  return(
    <div>
      <NameList  />
      <Counter />
    </div>
  )
}

export default App
