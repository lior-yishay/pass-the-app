import { specialHerd } from '../proxyServer/Data';
import { CowCard } from './CowCard';

const Shop = () => {

    const formattedCows = specialHerd.map(cow => {
        return <div key={cow.name}><CowCard cowDetails={cow}></CowCard></div>
    })
    return (<div className='grid grid-cols-4 gap-3'>
        {formattedCows}
    </div>

    )
}

export default Shop;