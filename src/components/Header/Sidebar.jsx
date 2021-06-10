import { Link, useLocation } from 'react-router-dom';

import styles from './sidebar.module.css';
import CloseIcon from '../../assets/close.svg';

const pages = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Projects', path: '/projects' },
    { title: 'Media', path: '/media' },
    { title: 'News', path: '/news' }
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
                        <img src={CloseIcon} onClick={() => setSidebarOpen(!sidebarOpen)} />
                    </button>
                </div>
                <ul className={`${styles['sidebar-list']} py-3`}>
                    {pages.map(page => (
                        <li className={`${styles['sidebar-link']} ${page.path === currentPath ? styles['active-link'] : ''} mb-3`} key={`${page.title}-link`}>
                            <Link to={page.path}>{page.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Sidebar;