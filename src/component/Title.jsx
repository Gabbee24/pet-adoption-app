import {MdPets} from 'react-icons/md'
import { Link } from 'react-router-dom'

const Title = () => {

  const style={
    listStyleType: 'none',
    textDecoration: 'none'

  };

  // const style2={
  //   textAlign: 'center',
  //   color: '#ad343e'

  // };

  return (
    <Link className='text-6xl text-white hover:text-gray-200' to="/">
        <h2 style={{}}><MdPets style={{}} /> Adopt Me</h2>
    </Link>
  )
}

export default Title