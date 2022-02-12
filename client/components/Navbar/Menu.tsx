import MenuItem from './MenuItem'
import MobileNavbarToggler from './MobileNavbarToggler'

interface Props {
  menuItems: {
    name: string
  }[]
}

const Menu = ({ menuItems }: Props) => {
  return (
    <div>
      <MobileNavbarToggler />
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav'>
          {
            menuItems.map((item) => <MenuItem key={item.name} item={item} />)
          }
        </ul>
      </div>
    </div>
  )
}

export default Menu
