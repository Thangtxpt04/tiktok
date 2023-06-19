import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import PropTypes from 'prop-types';
import * as suggestedAccountService from '~/Services/suggestedAccountService';
import { useState, useEffect } from 'react';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);
function SuggestedAccounts({ label }) {
    const [suggestAccounts, setSuggestsAccounts] = useState([]);
    const [seeAll, setSeeAll] = useState(true);

    useEffect(() => {
        const fetchAPI = async () => {
            if (seeAll) {
                const result = await suggestedAccountService.suggest(1, 5);
                setSuggestsAccounts(result);
            } else {
                const result = await suggestedAccountService.suggest(1, 16);
                setSuggestsAccounts(result);
            }
        };
        fetchAPI();
    }, [seeAll]);
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {suggestAccounts.map((result) => (
                <AccountItem data={result} key={result.id} />
            ))}

            {seeAll ? (
                <p className={cx('see-more-btn')} onClick={() => setSeeAll(false)}>
                    Xem tất cả
                </p>
            ) : (
                <p className={cx('see-less-btn')} onClick={() => setSeeAll(true)}>
                    Ẩn bớt
                </p>
            )}
        </div>
    );
}
SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};
export default SuggestedAccounts;
