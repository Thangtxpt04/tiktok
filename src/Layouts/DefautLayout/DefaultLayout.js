import PropTypes from 'prop-types';
import Header from '~/Layouts/components/Header';
import Sidebar from '~/Layouts/components/Sidebar';

import classNames from 'classnames/bind';
import styles from './DefautLayout.module.scss';

import GetApp from '~/components/GetApp';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>
                    {children}
                    <GetApp />
                </div>
            </div>
        </div>
    );
}
DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default DefaultLayout;
