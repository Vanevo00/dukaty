interface Props {
  item: {
    name: string
  }
}

const MenuItem = ({ item }: Props) => {
  return (
    <li className='nav-item'>
      <a className='nav-link secondary-color primary-font font-weight-600' href='#'>{item.name}</a>
    </li>
  )
}

export default MenuItem
