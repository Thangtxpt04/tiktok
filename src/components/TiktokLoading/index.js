import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './TiktokLoading.module.scss';

const cx = classNames.bind(styles);

function TiktokLoading({ medium = false, small = false, className }) {
    return <div id={cx('loader')} className={cx({ medium, small, className })} />;
}

TiktokLoading.propTypes = {
    medium: PropTypes.bool,
    small: PropTypes.bool,
};

export default TiktokLoading;
