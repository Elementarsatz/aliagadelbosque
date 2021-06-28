import { Link, useLocation } from 'react-router-dom';

import styles from './sidebar.module.css';
import CloseIcon from '../../assets/icons/close.svg';

const pages = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Works', path: '/works'},
    { title: 'Media', path: '/media' },
    { title: 'News', path: '/news' },
    { title: 'Projects', path: '/projects' }
]

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
    const location = useLocation();
    const currentPath = location.pathname;
    return (
        <>
            {sidebarOpen && <div className={`${styles['overlay']} ${sidebarOpen && styles['overlay-active']}`} onClick={() => setSidebarOpen(false)}></div>}
            <div className={`${styles['sidebar-wrapper']} ${sidebarOpen ? styles['active'] : styles['hidden']}`}>
                <div className="d-flex flex-row justify-content-end">
                    <button className={styles['close-btn']}>
                        <img alt="Close" src={CloseIcon} onClick={() => setSidebarOpen(!sidebarOpen)} />
                    </button>
                </div>
                <ul className={`${styles['sidebar-list']} py-3`}>
                    {pages.map(page => (
                        <li className={`${styles['sidebar-link']} ${page.path === currentPath ? styles['active-link'] : ''} mb-3`} key={`${page.title}-link`}>
                            <Link className="d-block w-100" onClick={() => setSidebarOpen(false)} to={page.path}>{page.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Sidebar;