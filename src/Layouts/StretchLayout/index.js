import classNames from 'classnames/bind';
import GetApp from '~/components/GetApp';
import Header from '~/Layouts/components/Header';
import Sidebar from '../components/Sidebar';
import styles from './StretchLayout.module.scss';

const cx = classNames.bind(styles);
function StretchLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header stretch />
            <div className={cx('container')}>
                <Sidebar shink />
                <div className={cx('content')}>
                    {children}
                    <GetApp />
                </div>
            </div>
        </div>
    );
}

export default StretchLayout;
