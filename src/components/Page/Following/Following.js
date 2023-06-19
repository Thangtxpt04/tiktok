import classNames from 'classnames/bind';
import styles from './Following.module.scss';
import SuggestFollow from './SuggestFollow';

const cx = classNames.bind(styles);
function Following() {
    return (
        <div className={cx('wrapper')}>
            <SuggestFollow />
        </div>
    );
}

export default Following;
