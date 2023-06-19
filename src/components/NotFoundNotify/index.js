import classNames from 'classnames/bind';
import { BigUserIcon } from '../Icon';
import styles from './NotFoundNotify.module.scss';

const cx = classNames.bind(styles);

function NotFoundNotify() {
    return (
        <div className={cx('notify')}>
            <div className={cx('notify-container')}>
                <BigUserIcon className={cx('user-icon')} />
                <h2 className={cx('notify__title')}>Không có nội dung</h2>
                <p className={cx('notify__content')}>Người dùng chưa đăng bất kì video nào</p>
            </div>
        </div>
    );
}

export default NotFoundNotify;
