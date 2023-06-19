import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faPlus,
    faVideo,
    faGear,
    faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

import { faUser } from '@fortawesome/free-regular-svg-icons';
import {
    EffectIcon,
    MessageIcon,
    InboxIcon,
    LanguageIcon,
    QuestionIcon,
    KeyboardIcon,
    MoonIcon,
    LogoIcon,
} from '~/components/Icon';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import config from '~/config';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import Search from '~/Layouts/components/SearchInput';
import { ModalContextKey } from '~/Contexts/ModalContext';
import { useContext } from 'react';
import ThemeMode from '~/components/ThemeMode';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
        title: 'Tiếng Việt',
        children: {
            title: 'Language',
            data: [
                {
                    title: 'Tiếng Việt (Việt Nam)',
                },
                {
                    title: 'English',
                },
                {
                    title: 'العربية',
                },
                {
                    title: 'বাঙ্গালি (ভারত)',
                },
                {
                    title: 'Cebuano (Pilipinas)',
                },
                {
                    title: 'Čeština (Česká republika)',
                },
                {
                    title: 'Deutsch',
                },
                {
                    title: 'Ελληνικά (Ελλάδα)',
                },
                {
                    title: 'Español',
                },
                {
                    title: 'Suomi (Suomi)',
                },
                {
                    title: 'Filipino (Pilipinas)',
                },
                {
                    title: 'Français',
                },
                {
                    title: 'हिंदी',
                },
                {
                    title: 'Magyar (Magyarország)',
                },
                {
                    title: 'Bahasa Indonesia (Indonesia)',
                },
                {
                    title: 'Italiano (Italia)',
                },
                {
                    title: '日本語（日本）',
                },
                {
                    title: 'Basa Jawa (Indonesia)',
                },
                {
                    title: 'ខ្មែរ (កម្ពុជា)',
                },
                {
                    title: '한국어 (대한민국)',
                },
                {
                    title: 'Bahasa Melayu (Malaysia)',
                },
                {
                    title: 'မြန်မာ (မြန်မာ)',
                },
                {
                    title: 'Nederlands (Nederland)',
                },
                {
                    title: 'Polski (Polska)',
                },
                {
                    title: 'Português (Brasil)',
                },
                {
                    title: 'Română (Romania)',
                },
                {
                    title: 'Русский (Россия)',
                },
                {
                    title: 'Svenska (Sverige)',
                },
                {
                    title: 'ไทย (ไทย)',
                },
                {
                    title: 'Türkçe (Türkiye)',
                },
                {
                    title: 'Українська (Україна)',
                },
                {
                    title: 'اردو',
                },
                {
                    title: '简体中文',
                },
                {
                    title: '繁體中文',
                },
            ],
        },
    },
    {
        icon: <QuestionIcon />,
        title: 'Trợ giúp ',
        to: '/feedback',
    },
    {
        icon: <KeyboardIcon />,
        title: 'Phím tắt trên bàn phím',
    },
    {
        icon: <MoonIcon />,
        title: 'Chế độ tối',
        rightIcon: <ThemeMode />,
    },
];

function Header({ stretch }) {
    const currentUser = false;

    const { loginModalShow } = useContext(ModalContextKey);

    const handleMenuChange = (menuItem) => {};

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Xem hồ sơ',
            to: '/@hoa',
        },
        {
            icon: <FontAwesomeIcon icon={faVideo} />,
            title: 'LIVE Studio',
            to: '/live',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Cài đặt',
            to: '/setting',
        },

        ...MENU_ITEMS,

        {
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
            title: 'Đăng xuất',
            to: '/',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('content', { stretch: stretch })}>
                <Link to={config.routes.home} className={cx('logo')}>
                    <LogoIcon />
                </Link>

                <Search />
                <div className={cx('actions')}>
                    <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        Tải lên
                    </Button>

                    <Button href="#" className={cx('effect-icon')}>
                        <EffectIcon />
                    </Button>

                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Tin nhắn">
                                <button className={cx('action-icon')}>
                                    <MessageIcon width="2.6rem" />
                                </button>
                            </Tippy>

                            <Tippy delay={[0, 200]} content="Hộp thư">
                                <button className={cx('action-icon')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>2</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <Button primary onClick={loginModalShow}>
                            Đăng nhập
                        </Button>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/05aa222706c452c8ad0ea7d2e719a745~c5_300x300.webp?x-expires=1675648800&x-signature=Q8eYKgyjXXPGNj5TxQrci7m1WJk%3D"
                                alt=""
                                className={cx('user-avatar')}
                                fallBack="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
