import './App.css'
import { useEffect, useState, type InputEventHandler } from 'react'
import {useDebounce} from './useDebounce'


const getSearchedElement=()=>{
  console.log('searching...')
}
function App() {
  const [search, setSearch] = useState('Hello world')
  
  const debounceHandler = useDebounce()
  const searchHandler = (e: InputEventHandler<HTMLInputElement>) => {
    setSearch(e.target.value)
    debounceHandler(getSearchedElement)
  }
  const [classNames,setClassNames]= useState('')

  useEffect(()=>{
    console.log("search changed")
    if (Number(search)){
      setClassNames('search-box search-box-colored-text')
    }
    else {
      setClassNames('search-box')
    }

  },[search])


  return (
    <div className="container">
      <input 
      type="text" 
      value={search}
      className={classNames}
      placeholder="Поиск..." 
      onInput={searchHandler}
      />
    </div>
  )
}

export default App
