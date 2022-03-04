import { useFetch } from "./hooks/useFetch"

type Repository = {
  full_name: string
  description: string
}
function App() {
  const {data: repositories, isFetching} = useFetch<Repository[]>('https://api.github.com/users/Math2121/repos')
return (
    <div className="App">
    <ul>
      {isFetching ?? <p>Carregando...</p>}
      {repositories?.map((repo)=>(
      <li>

        <p>{repo.full_name}</p>
        <p>{repo.description}</p>
        
      </li>
      ))}
    </ul>
    </div>
  )
}

export default App
