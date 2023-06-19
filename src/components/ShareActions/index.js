import classNames from 'classnames/bind';
import styles from './ShareAction.module.scss';
import Tippy from '@tippyjs/react/headless';
import { Wrapper } from '../Popper';
import { ChevronDownIcon, EmailIcon, EmbedIcon, LinkRoundedIcon, WhatsApp } from '../Icon';
import images from '~/assets/images';
import { useState } from 'react';
const cx = classNames.bind(styles);
function ShareAction({ children }) {
    const [expanded, setExpanded] = useState(false);
    const SHARE_MENU = [
        {
            icon: <EmbedIcon />,
            title: 'Nhúng',
        },
        {
            icon: <img src={images.facebook} alt="facebook"></img>,
            title: 'Share to Facebook',
        },
        {
            icon: <WhatsApp />,
            title: 'Share to WhatsApp',
        },
        {
            icon: <img src={images.twitter} alt="twitter"></img>,
            title: 'Share to Twitter',
        },
        {
            icon: <LinkRoundedIcon />,
            title: 'Sao chép liên kết',
        },
    ];

    const EXPANDED_SHARE_MENU = [
        ...SHARE_MENU,
        {
            icon: <img src={images.linkedin} alt="likedin" />,
            title: 'Share to LinkedIn',
        },
        {
            icon: <img src={images.reddit} alt="facebook"></img>,
            title: 'Share to Reddit',
        },
        {
            icon: <img src={images.telegram} alt="facebook"></img>,
            title: 'Share to Telegram',
        },
        {
            icon: <EmailIcon />,
            title: 'Share to Email',
        },
    ];
    const Menu = expanded ? EXPANDED_SHARE_MENU : SHARE_MENU;
    return (
        <div>
            <Tippy
                // visible
                interactive
                delay={[200, 700]}
                onHidden={() => setExpanded(false)}
                offset={[-100, 10]}
                render={(attrs) => (
                    <div tabIndex="-1" {...attrs}>
                        <Wrapper className={cx('share-tab')}>
                            <div className={cx('share-wrapper')}>
                                {Menu.map((item, index) => (
                                    <div className={cx('share-item')} key={index}>
                                        {item.icon}
                                        {item.title}
                                    </div>
                                ))}
                                {!expanded && (
                                    <div className={cx('more-btn')} onClick={() => setExpanded(true)}>
                                        <ChevronDownIcon />
                                    </div>
                                )}
                            </div>
                        </Wrapper>
                    </div>
                )}
            >
                {children}
            </Tippy>
        </div>
    );
}

export default ShareAction;
