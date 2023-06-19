import classNames from 'classnames/bind';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
    HashtagIcon,
    MusicIcon,
} from '~/components/Icon';
import SuggestedAccounts from '~/Layouts/components/SuggestedAccounts';
import Button from '~/components/Button';
import { useContext } from 'react';
import { ModalContextKey } from '~/Contexts/ModalContext';
const cx = classNames.bind(styles);

function Sidebar({ shink }) {
    const currentUser = false;
    const { loginModalShow } = useContext(ModalContextKey);

    return (
        <aside className={cx('wrapper', { shink: shink })}>
            <Menu>
                <MenuItem
                    title="Dành cho bạn"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                />
                <MenuItem
                    title="Đang Follow"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>

            {!currentUser && (
                <div className={cx('login')}>
                    <p className={cx('tip')}>Đăng nhập để follow các tác giả, thích video và xem bình luận.</p>
                    <Button outline large className={cx('login-sidebar')} onClick={loginModalShow}>
                        Đăng nhập
                    </Button>
                </div>
            )}
            <SuggestedAccounts label="Tài khoản được đề xuất" />
            <SuggestedAccounts label="Tài khoản đang follow" />

            <div className={cx('discover')}>
                <h3 className={cx('title')}>Discover</h3>
                <div className={cx('discover-list')}>
                    <div className={cx('hastag')}>
                        <HashtagIcon className={cx('discover-icon')} />
                        <p className={cx('hastag-name')}>suthatla</p>
                    </div>
                    <div className={cx('hastag')}>
                        <HashtagIcon className={cx('discover-icon')} />
                        <p className={cx('hastag-name')}>mackedoi</p>
                    </div>
                    <div className={cx('hastag')}>
                        <HashtagIcon className={cx('discover-icon')} />
                        <p className={cx('hastag-name')}>sansangthaydoi</p>
                    </div>
                    <div className={cx('hastag')}>
                        <MusicIcon className={cx('discover-icon')} />
                        <p className={cx('hastag-name')}>Yêu Đơn Phương Là Gì (MEE Remix) - Mee Remix sdaak</p>
                    </div>
                    <div className={cx('hastag')}>
                        <MusicIcon className={cx('discover-icon')} />
                        <p className={cx('hastag-name')}>
                            Về Nghe Mẹ Ru - NSND Bach Tuyet &amp; Hứa Kim Tuyền &amp; 14 Casper &amp; Hoàng Dũng
                        </p>
                    </div>
                    <div className={cx('hastag')}>
                        <MusicIcon className={cx('discover-icon')} />
                        <p className={cx('hastag-name')}>Thiên Thần Tình Yêu - RICKY STAR</p>
                    </div>
                    <div className={cx('hastag')}>
                        <HashtagIcon className={cx('discover-icon')} />
                        <p className={cx('hastag-name')}>7749hieuung</p>
                    </div>
                    <div className={cx('hastag')}>
                        <HashtagIcon className={cx('discover-icon')} />
                        <p className={cx('hastag-name')}>genzlife</p>
                    </div>
                    <div className={cx('hastag')}>
                        <MusicIcon className={cx('discover-icon')} />
                        <p className={cx('hastag-name')}>Tình Đã Đầy Một Tim - Huyền Tâm Môn</p>
                    </div>
                    <div className={cx('hastag')}>
                        <MusicIcon className={cx('discover-icon')} />
                        <p className={cx('hastag-name')}>
                            Thằng Hầu (Thái Hoàng Remix) [Short Version] - Dunghoangpham{' '}
                        </p>
                    </div>
                </div>
            </div>

            <footer className={cx('footer')}>
                <div className={cx('footer-link')}>
                    <a href="https://www.tiktok.com/about?lang=en"> Giới thiệu</a>
                    <a href="https://newsroom.tiktok.com/en-us/"> Bảng tin</a>
                    <a href="https://www.tiktok.com/about/contact?lang=vi-VN">Liên hệ</a>
                    <a href="https://careers.tiktok.com/">Sự nghiệp</a>
                    <a href="https://www.bytedance.com/">ByteDance</a>
                </div>

                <div className={cx('footer-link')}>
                    <a href="https://www.tiktok.com/forgood"> Tiktok for Good</a>
                    <a href="https://www.tiktok.com/business/vi?attr_medium=tt_official_site_guidance&attr_source=tt_official_site&refer=tiktok_web&tt4b_lang_redirect=1">
                        Quảng cáo
                    </a>
                    <a href="https://developers.tiktok.com/?refer=tiktok_web">Deverlopers</a>
                    <a href="https://www.tiktok.com/transparency?lang=vi-VN">Minh bạch</a>
                    <a href="https://www.tiktok.com/tiktok-rewards/eligibility">Tiktok Rewwards</a>
                    <a href="https://www.tiktok.com/browse">Tiktok Browse</a>
                    <a href="https://www.tiktok.com/embed">Tiktok Embeds</a>
                </div>

                <div className={cx('footer-link')}>
                    <a href="https://support.tiktok.com/vi"> Trợ giúp</a>
                    <a href="https://www.tiktok.com/safety/vi-vn"> An toàn</a>
                    <a href="https://www.tiktok.com/legal/page/row/terms-of-service/vi-VN">Điều khoản</a>
                    <a href="https://www.tiktok.com/legal/page/row/privacy-policy/vi-VN">Quyền riêng tư</a>
                    <a href="https://www.tiktok.com/creators/creator-portal/en-us/">Cổng thông tin Tác giả</a>
                    <a href="https://www.tiktok.com/community-guidelines?lang=vi-VN">Hướng dẫn cộng đồng</a>
                </div>

                <span className={cx('copy-right')}>© 2023 TikTok - Made by Thắng Trịnh</span>
            </footer>
        </aside>
    );
}

export default Sidebar;
