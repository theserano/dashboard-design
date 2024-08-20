import { grid } from 'ldrs'

type Props = {}

grid.register();

const Loader = ({}: Props) => {

  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh'
    }}>
        <l-grid
        size="100"
        speed="1.5" 
        color="black" 
        ></l-grid>
    </div>
  )
}

export default Loader