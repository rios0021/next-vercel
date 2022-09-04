import {ActiveLink} from "./ActiveLink"
import styles from "./Navbar.module.css";

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
        <nav className={styles['menu-container']}>
            {
                menuItems.map(item => (
                    <ActiveLink key={item.href} text={item.text} href={item.href}></ActiveLink>
                ))
            }
            {/* <ActiveLink text="Home" href='/'></ActiveLink>
            <ActiveLink text="About" href='/about'></ActiveLink>
            <ActiveLink text="Contact" href='/contact'></ActiveLink>
            <ActiveLink text="Pricing" href='/pricing'></ActiveLink> */}
        </nav>
    )
}