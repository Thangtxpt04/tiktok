import classNames from 'classnames/bind';
import styles from './Search.module.scss';

import * as searchService from '~/Services/searchService';
import SearchAccount from '~/components/SearchAcount';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ChevronDownIcon } from '~/components/Icon';
const cx = classNames.bind(styles);
function Search() {
    const [searchResults, setSearchResults] = useState([]);
    const [page, setPage] = useState(1);

    const location = useLocation();

    useEffect(() => {
        const fetchAPI = async () => {
            const result = await searchService.search(location.state, 'more');
            console.log(result);
            setSearchResults(result);
            setPage(1);
        };
        fetchAPI();
    }, [location.state]);

    const handleLoadMore = async () => {
        const result = await searchService.search(location.state, 'more', page + 1);
        setSearchResults((prev) => [...prev, ...result]);
        setPage(page + 1);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('tab-container')}>
                <div className={cx('tab-item')}>Top</div>
                <div className={cx('tab-item', { selected: true })}>Accounts</div>
                <div className={cx('tab-item')}>Videos</div>
                <div className={cx('underline')}></div>
            </div>
            <div className={cx('search-result')}>
                {searchResults.map((data, index) => (
                    <SearchAccount key={index} data={data} />
                ))}
            </div>
            <div className={cx('load-more')} onClick={handleLoadMore}>
                Tải thêm
                <ChevronDownIcon className={cx('loadmore-icon')} />
            </div>
        </div>
    );
}

export default Search;
