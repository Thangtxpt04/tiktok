import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick, title }) {
    const classes = cx('menu-item', {
        separate: data.separate,
        [title]: title,
    });
    return (
        <Button leftIcon={data.icon} rightIcon={data.rightIcon} to={data.to} className={classes} onClick={onClick}>
            {data.title}
        </Button>
    );
}
MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItem;
