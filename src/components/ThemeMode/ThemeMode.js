import classNames from 'classnames/bind';
import styles from './Theme.module.scss';

import { useEffect, useState } from 'react';
import useLocalStorage from '~/hooks/useLocalStorage';
import config from '~/config';
const cx = classNames.bind(styles);
function ThemeMode() {
    // Khai báo hằng số `appStorageKey` để lưu trữ tên của key trong localStorage
    const appStorageKey = config.localStorage.app;

    // Sử dụng hook `useLocalStorage` để lấy và lưu trữ dữ liệu trong localStorage
    const [dataStorage, setDataStorage] = useLocalStorage(appStorageKey);

    // Khai báo state `isDarkMode` với giá trị ban đầu được thiết lập từ localStorage
    const [isDarkMode, setIsDarkMode] = useState(dataStorage.theme === 'dark');

    // Khai báo hàm `themeToggle` để thực hiện chức năng chuyển đổi giữa nền sáng và tối
    const themeToggle = () => {
        setIsDarkMode(!isDarkMode);
    };

    // Sử dụng hook `useEffect` để thực hiện các hành động khi giá trị của `isDarkMode` thay đổi
    useEffect(() => {
        // Khai báo đối tượng `themeData` với giá trị ban đầu là chế độ nền sáng
        const themeData = {
            theme: 'light',
        };

        // Nếu `isDarkMode` được bật, thay đổi thuộc tính `data-theme` của thẻ `html` sang chế độ nền tối và cập nhật giá trị `theme` của `themeData`
        if (isDarkMode) {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeData.theme = 'dark';
        } else {
            // Ngược lại, đặt chế độ nền sáng và không cập nhật giá trị `theme` của `themeData`
            document.documentElement.setAttribute('data-theme', 'light');
        }

        // Lưu trữ dữ liệu `themeData` vào localStorage thông qua hook `setDataStorage`
        setDataStorage(themeData);
    }, [isDarkMode, setDataStorage]);

    // Trả về JSX để hiển thị nút chuyển đổi giữa chế độ nền sáng và tối
    return (
        <div>
            <input type="checkbox" id={cx('theme-input')} hidden checked={isDarkMode} onChange={themeToggle} />
            <label className={cx('switch')} htmlFor={cx('theme-input')}></label>
        </div>
    );
}

export default ThemeMode;
