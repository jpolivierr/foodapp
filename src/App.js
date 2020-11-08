import Searchbar from "./component/searchbar/searchbar"
import Navigation from "./component/navigation/Navigation"
import ResultLayout from "./Layout/resultLayout/resultLayout"
import Backmodal from "./component/Backmodal/Backmodal"
import Forms from "./component/Forms/Forms"
import {useSelector, useDispatch} from 'react-redux'
import "./App.css"


function App() {
  const modal = useSelector((state)=> state.modal)
  console.log(modal.modaltype)

  const getForms = () =>{
      switch (modal.modaltype) {
    case 'login':
      return(<Forms type='login'/>)
      break;
    case 'signup':
      return(<Forms type='signup'/>)
      break;
    default:
      return ''
      break;
  }
  }



  return (
    
      <div className="App">
        <Navigation />
        {/* <Backmodal /> */}
        {/* <Searchbar/> */}
        {/* <Forms type="signup" /> */}
        {getForms()}
      
        <ResultLayout />
      </div>
    
  )
}

export default App
