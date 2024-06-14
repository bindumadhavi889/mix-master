import Wrapper from '../assets/wrappers/ErrorPage'
import { Link,useRouteError } from 'react-router-dom'
import img from '../assets/not-found.svg'
const Error = () => {
  const error = useRouteError()
  if(error.status===404){
    return (
      <Wrapper>
        <div>
          <img src={img} alt='not found'/>
          <h3>Ohh!</h3>
          <p>we can't seem to find page you are looking for</p>
          <Link to='/'>Back to Home</Link>
        </div>
      </Wrapper>
    )
  }
  return (
    <h2>error</h2>
  )
}
export default Error