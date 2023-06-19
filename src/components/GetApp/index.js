import classNames from 'classnames/bind';
import { ForwardStepIcon } from '../Icon';
import Tippy from '@tippyjs/react/headless';
import { Wrapper } from '../Popper';
import { useState, useEffect } from 'react';
import styles from './GetApp.module.scss';
import { PCIcon, XMarkIcon, SmartPhoneIcon } from '../Icon';

const cx = classNames.bind(styles);
function GetApp() {
    const [active, setActive] = useState(false);
    const [showGetApp, setShowGetApp] = useState(false);

    const handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', () => {
            return window.scrollY > 100 ? setActive(true) : setActive(false);
        });
    }, []);
    return (
        <div className={cx('wrapper', { active })}>
            <div className={cx('container')}>
                <Tippy
                    visible={showGetApp}
                    interactive
                    // trigger="click"
                    placement="top-end"
                    offset={[0, -30]}
                    zIndex="99"
                    render={(attrs) => (
                        <div tabIndex="-1" {...attrs}>
                            <Wrapper>
                                <div className={cx('tippy-wrapper')}>
                                    <div className={cx('tippy-inner')}>
                                        <div className={cx('item')}>
                                            {' '}
                                            <PCIcon className={cx('icon')} />{' '}
                                            <span>Tải Tiktok cho máy tính để bàn</span>
                                        </div>
                                        <div className={cx('splitter')}></div>
                                        <div className={cx('item')}>
                                            {' '}
                                            <SmartPhoneIcon className={cx('icon')} /> <span>Tải ứng dụng Tiktok</span>
                                        </div>
                                    </div>
                                    <div className={cx('close-btn')} onClick={() => setShowGetApp(false)}>
                                        {' '}
                                        <XMarkIcon height={'2rem'} width={'2rem'} />{' '}
                                    </div>
                                </div>
                            </Wrapper>
                        </div>
                    )}
                >
                    <button className={cx('getapp-btn')} onClick={() => setShowGetApp(true)}>
                        Tải ứng dụng
                    </button>
                </Tippy>
            </div>
            <button className={cx('goto-top')} onClick={handleScrollTop}>
                <ForwardStepIcon />
            </button>
        </div>
    );
}

export default GetApp;
