import classNames from 'classnames/bind';
import styles from './AccountPrevView.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';
const cx = classNames.bind(styles);
function AccountPrevView({ data }) {
    return (
        <div className={cx('wrapper')}>
            <header>
                <Image src={data.avatar} alt="" className={cx('avatar')} />
                <Button primary>Follow</Button>
            </header>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>{data.nickname}</strong>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>{data.full_name || `${data?.first_name} ${data?.last_name}`}</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>{data.followers_count}</strong>
                    <span className={cx('label')}>Follower</span>
                    <strong className={cx('value')}>{data.likes_count}</strong>
                    <span className={cx('label')}>Thích</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPrevView;
