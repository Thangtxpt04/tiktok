import classNames from 'classnames/bind';
import styles from './searchAccount.module.scss';

import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function SearchAccount({ data }) {
    return (
        <Link to={`/@/${data?.nickname}`} state={data} className={cx('search-container')}>
            <Image className={cx('avatar')} src={data?.avatar} alt={data?.nickname} />
            <div className={cx('infor')}>
                <div className={cx('user-name')}>
                    {data?.nickname}
                    {data?.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('check-icon')} />}
                </div>
                <div className={cx('search-name')}>
                    {data?.full_name || `${data?.first_name} ${data?.last_name}`} -{' '}
                    <strong>{data?.followers_count}</strong> Followers
                </div>
                <div className={cx('search-bio')}>{data?.bio}</div>
            </div>
        </Link>
    );
}

export default SearchAccount;
