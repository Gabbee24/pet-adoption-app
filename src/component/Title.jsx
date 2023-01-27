import {FcHome} from 'react-icons/fc'
import { Link } from 'react-router-dom'

const Title = () => {

  const style={
    listStyleType: 'none',
    textDecoration: 'none'

  };

  return (
    <Link style={style} to="/">
        <h2 style={{textAlign :'center', color: ' #ad343e'}}><FcHome/> Adopt Me</h2>
    </Link>
  )
}

export default Title