import classNames from 'classnames/bind';
import styles from './LoginModal.module.scss';
import Button from '../../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faClose, faQrcode } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useMemo, useState } from 'react';
import images from '~/assets/images';
import { faUser } from '@fortawesome/free-regular-svg-icons';
const cx = classNames.bind(styles);

function LoginModal({ handleClose }) {
    const [formState, setFormState] = useState('login');
    const [filteredForm, setFilteredForm] = useState([]);

    const loginRegisterForm = useMemo(
        () => [
            {
                type: 'login',
                title: 'Đăng nhập vào TikTok',
                contents: [
                    {
                        icon: <FontAwesomeIcon icon={faQrcode} />,
                        title: 'Sử dụng mã QR',
                    },
                    {
                        icon: <FontAwesomeIcon icon={faUser} />,
                        title: 'Số điện thoại / Email / TikTok ID',
                    },
                    {
                        icon: <img src={images.facebook} alt="facebook" />,
                        title: 'Tiếp tục với Facebook',
                    },
                    {
                        icon: <img src={images.google} alt="google" />,
                        title: 'Tiếp tục với Google',
                    },
                    {
                        icon: <img src={images.twitter} alt="twitter" />,
                        title: 'Tiếp tục với Twitter',
                    },
                    {
                        icon: <img src={images.line} alt="line" />,
                        title: 'Tiếp tục với LINE',
                    },
                    {
                        icon: <img src={images.kakaotalk} alt="kakaotalk" />,
                        title: 'Tiếp tục với KakaoTalk',
                    },
                    {
                        icon: <img src={images.apple} alt="apple" />,
                        title: 'Tiếp tục với Apple',
                    },
                    {
                        icon: <img src={images.instagram} alt="instagram" />,
                        title: 'Tiếp tục với Instagram',
                    },
                ],
            },
            {
                type: 'register',
                title: 'Đăng ký TikTok',
                showMore: true,
                contents: [
                    {
                        icon: <FontAwesomeIcon icon={faUser} />,
                        title: 'Số điện thoại / Email / TikTok ID',
                    },
                    {
                        icon: <img src={images.facebook} alt="facebook" />,
                        title: 'Tiếp tục với Facebook',
                    },
                    {
                        icon: <img src={images.google} alt="google" />,
                        title: 'Tiếp tục với Google',
                    },
                ],
            },
            {
                type: 'register-expanded',
                title: 'Đăng ký TikTok',
                contents: [
                    {
                        icon: <FontAwesomeIcon icon={faUser} />,
                        title: 'Số điện thoại / Email / TikTok ID',
                    },
                    {
                        icon: <img src={images.facebook} alt="facebook" />,
                        title: 'Tiếp tục với Facebook',
                    },
                    {
                        icon: <img src={images.google} alt="google" />,
                        title: 'Tiếp tục với Google',
                    },
                    {
                        icon: <img src={images.twitter} alt="twitter" />,
                        title: 'Tiếp tục với Twitter',
                    },
                    {
                        icon: <img src={images.line} alt="line" />,
                        title: 'Tiếp tục với LINE',
                    },
                    {
                        icon: <img src={images.kakaotalk} alt="kakaotalk" />,
                        title: 'Tiếp tục với KakaoTalk',
                    },
                ],
            },
        ],
        [],
    );

    useEffect(() => {
        const newForm = loginRegisterForm.find((form) => form.type === formState);
        setFilteredForm(newForm);
    }, [loginRegisterForm, formState]);

    return (
        <div className={cx('modal')}>
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <div className={cx('inner')}>
                        <p className={cx('title')}>{filteredForm.title}</p>
                        <div className={cx('modal-list')}>
                            {filteredForm.contents?.map((content, index) => {
                                return (
                                    <Button text key={index} className={cx('item')}>
                                        <span className={cx('icon')}>{content.icon}</span>
                                        <span className={cx('name')}>{content.title}</span>
                                    </Button>
                                );
                            })}

                            {filteredForm.showMore && (
                                <div className={cx('more-btn')} onClick={() => setFormState('register-expanded')}>
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </div>
                            )}
                        </div>
                    </div>
                    {formState.startsWith('register') && (
                        <div className={cx('agreement')}>
                            <p>
                                Bằng cách tiếp tục, bạn đồng ý với Điều khoản sử dụng của Tiktok và xác nhận rằng bạn đã
                                đọc hiểu Chính sách quyền riêng tư của Tiktok
                            </p>
                        </div>
                    )}
                    <footer className={cx('footer')}>
                        {formState === 'login' ? (
                            <>
                                <span>Bạn không có tài khoản?</span>
                                <p className={cx('register')} onClick={() => setFormState('register')}>
                                    Đăng kí
                                </p>
                            </>
                        ) : (
                            <>
                                <span>Bạn đã có tài khoản?</span>
                                <p className={cx('login')} onClick={() => setFormState('login')}>
                                    Đăng nhập
                                </p>
                            </>
                        )}
                    </footer>
                </div>
                <div className={cx('close-btn')} onClick={handleClose}>
                    <FontAwesomeIcon icon={faClose} />
                </div>
            </div>
        </div>
    );
}

export default LoginModal;
