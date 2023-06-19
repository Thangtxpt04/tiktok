import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import { useState } from 'react';
import Header from './Header';

const defaultFn = () => {};
const cx = classNames.bind(styles);
function Menu({ children, items = [], onChange = defaultFn, hideOnClick = false }) {
    const [history, setHistory] = useState([{ data: items }]);

    // Mặc định show phần tử cuối cùng của marnrng history
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    title={current.title}
                    onClick={() => {
                        if (isParent) {
                            // Thêm con của thằng item vào mảng history
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    // Xử lý xoá phần tử cuối
    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };
    const handleResetMenu = () => {
        setHistory((prev) => prev.slice(0, 1));
    };
    return (
        <Tippy
            visible
            interactive
            offset={[16, 8]}
            delay={[0, 800]}
            placement="bottom-end"
            onHidden={handleResetMenu}
            render={(attr) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attr}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
                        <div className={cx('menu-body')}>{renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}
Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    onChange: PropTypes.func,
    hideOnClick: PropTypes.func,
};
export default Menu;
