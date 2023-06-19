import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);
function AccountItem({ data, ...passProp }) {
    return (
        // Bấm vào kết quả tìm kiếm phải ẩn đi
        <Link to={`/@/${data.nickname}`} state={data} className={cx('wrapper')} {...passProp}>
            <Image src={data.avatar} alt={data.full_name} className={cx('avatar')} />
            <div className={cx('infor')}>
                <p className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />}
                </p>
                <span className={cx('user-name')}>{data.nickname}</span>
            </div>
        </Link>
    );
}
AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};
export default AccountItem;
