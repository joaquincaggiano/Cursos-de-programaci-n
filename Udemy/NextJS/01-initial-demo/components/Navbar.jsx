import styles from './Navbar.module.css'

// Components
import { Activelink } from './Activelink';

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export const Navbar = () => {
  return (
    <nav>
      <ul className={styles['menu-container']}>
        {menuItems.map((item, i) => {
          return (
            <li key={i}><Activelink text={item.text} url={item.href}/></li>
          )
        })}
      </ul>
    </nav>
  );
};
