import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './SuggestedAccounts.module.scss';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPrevView from './AccountPrevView';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
const cx = classNames.bind(styles);
function AccountItem({ data }) {
    const prevView = (props) => {
        return (
            <div className={cx('preview')} tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPrevView data={data} />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <Link to={`/@/${data?.nickname}`} state={data}>
            <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={prevView}>
                <div className={cx('account-item')}>
                    <Image className={cx('avatar')} src={data.avatar} alt="" />
                    <div className={cx('item-infor')}>
                        <p className={cx('nickname')}>
                            <strong>{data.nickname}</strong>
                            {data.tick && <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />}
                        </p>
                        <p className={cx('name')}>{data?.full_name || `${data?.first_name} ${data?.last_name}`}</p>
                    </div>
                </div>
            </Tippy>
        </Link>
    );
}
AccountItem.propTypes = {};
export default AccountItem;
