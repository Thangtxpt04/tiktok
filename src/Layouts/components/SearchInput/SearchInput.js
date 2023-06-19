import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import * as searchService from '~/Services/searchService';
import classNames from 'classnames/bind';
import styles from './SearchInput.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '../../../components/AccountItem';
import { useEffect, useRef, useState } from 'react';
import { useDebounce } from '~/hooks';
import { Link } from 'react-router-dom';
import { CloseIcon, LoadingIcon } from '~/components/Icon';

const cx = classNames.bind(styles);

function SearchInput() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounceValue = useDebounce(searchValue, 700);

    const inputRef = useRef('');

    useEffect(() => {
        if (!debounceValue.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        const fetchApi = async () => {
            setLoading(true);
            const result = await searchService.search(debounceValue);
            setSearchResult(result);
            setLoading(false);
        };
        fetchApi();
    }, [debounceValue]);

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
        setSearchResult([]);
    };
    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (searchValue.startsWith(' ')) {
            return;
        }
        setSearchValue(e.target.value);
    };

    return (
        <div>
            <Tippy
                visible={showResult && searchResult.length > 0}
                interactive
                render={(attr) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attr}>
                        <PopperWrapper>
                            <Link to={`/search/user/${searchValue}`} state={searchValue} onClick={handleHideResult}>
                                <div className={cx('search-result-text')}>
                                    <span>
                                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                                    </span>
                                    {searchValue}
                                </div>
                            </Link>
                            <h4 className={cx('search-title')}>Tài khoản</h4>
                            {searchResult &&
                                searchResult.map((result) => (
                                    <AccountItem key={result.id} data={result} onClick={handleHideResult} />
                                ))}
                            <Link to={`/search/user/${searchValue}`} state={searchValue} onClick={handleHideResult}>
                                <div className={cx('view-all')}>Xem tất cả kết quả dành cho "{searchValue}"</div>
                            </Link>
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Tìm kiếm tài khoản và video"
                        spellCheck={false}
                        value={searchValue}
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('clear-btn')} onClick={handleClear}>
                            <CloseIcon />
                        </button>
                    )}
                    {loading && (
                        <button>
                            <LoadingIcon className={cx('loading')} />
                        </button>
                    )}
                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </Tippy>
        </div>
    );
}

export default SearchInput;
