import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {  useDispatch, useSelector } from 'react-redux'
import { StoreState } from './redux/store'
import { User } from './domain/user'
import { create } from './redux/slices/users'
import { add, getAnimalState, remove } from './redux/slices/animals'

function App() {
  const state = useSelector<StoreState>(state => state) as StoreState
  const dispatch = useDispatch()

  const createUser = (user: User) => 
    dispatch(create(user))

  const loadAnimalState = (animalId: string) => {
    console.log(getAnimalState(state.animals, animalId))
  }
  
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <pre>{JSON.stringify(state.users, null, 2)}</pre>
      <div className="card">
        <button onClick={() => createUser({
          age: 2,
          id: "1",
          name: "Jose"
        })}>
          add user
        </button>
        </div>
        <pre>{JSON.stringify(state.animals, null, 2)}</pre>
      <div className="card">
        <button onClick={() => dispatch(add({
          id: String((state.animals.animals?.length || 0) + 1), 
          name: "bige", 
          type: "dog"
        }))}>
          add animals
        </button>
        <button onClick={() => dispatch(remove("1"))}>
          remove animals
        </button>
        <button onClick={() => loadAnimalState("1")}>get animal</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
