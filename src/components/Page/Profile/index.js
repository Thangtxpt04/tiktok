import Button from '~/components/Button';
import { BanIcon, EllipsisHorizontalIcon, FlagIcon, ShareIcon, LinkIcon, LockedIcon } from '~/components/Icon';
import Image from '~/components/Image';
import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import ShareAction from '~/components/ShareActions';
import Tippy from '@tippyjs/react/headless';
import { Wrapper } from '~/components/Popper';
import VideoPreview from '~/components/VideoPreview';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as videoProfileService from '~/Services/videoProfileService';
import NotFoundNptify from '~/components/NotFoundNotify';

const cx = classNames.bind(styles);
function Profile() {
    const location = useLocation();
    const data = location.state;
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await videoProfileService.video(data.nickname);
            setVideos(result.videos);
        };
        fetchApi();
    }, [data.nickname]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('infor')}>
                <div className={cx('container')}>
                    <div className={cx('basic')}>
                        <Image src={data?.avatar} alt={data?.full_name} className={cx('avatar')} />
                        <div className={cx('body')}>
                            <h3 className={cx('user-name')}>{data.nickname}</h3>
                            <h4 className={cx('full-name')}>
                                {data?.full_name || `${data?.first_name} ${data?.last_name}`}
                            </h4>
                            <Button primary className={cx('follow-btn')}>
                                Follow
                            </Button>
                        </div>
                    </div>
                    <div className={cx('counts')}>
                        <div className={cx('count-item')}>
                            <strong>{data.followings_count}</strong>
                            <span>Đang Follower</span>
                        </div>

                        <div className={cx('count-item')}>
                            <strong>{data.followers_count}</strong>
                            <span>Follower</span>
                        </div>

                        <div className={cx('count-item')}>
                            <strong>{data.likes_count}</strong>
                            <span>Thích</span>
                        </div>
                    </div>
                    <div className={cx('bio')}>{data?.bio || 'Chưa có tiểu sử'}</div>

                    <div className={cx('website')}>
                        <a href={data?.website_url} target="blank" style={{ display: 'inline-block' }}>
                            {data?.website_url && (
                                <div className={cx('website-link')}>
                                    <LinkIcon className={cx('link-icon')} />
                                    {data?.website_url}
                                </div>
                            )}
                        </a>
                    </div>
                </div>
                <div className={cx('actions-btn')}>
                    <ShareAction>
                        <span className={cx('share-btn')}>
                            <ShareIcon />
                        </span>
                    </ShareAction>
                    <Tippy
                        interactive
                        hideOnClick="false"
                        placement="bottom-end"
                        offset={[0, 10]}
                        delay={[0, 700]}
                        zIndex="99"
                        render={(attrs) => (
                            <div tabIndex="-1" {...attrs}>
                                <Wrapper className={cx('more-tab')}>
                                    <div className={cx('action-more')}>
                                        <span>
                                            <FlagIcon height="16" /> Report
                                        </span>
                                    </div>

                                    <div className={cx('action-more')}>
                                        <span>
                                            <BanIcon /> Block
                                        </span>
                                    </div>
                                </Wrapper>
                            </div>
                        )}
                    >
                        <div>
                            <EllipsisHorizontalIcon />
                        </div>
                    </Tippy>
                </div>
            </div>
            <div className={cx('videos')}>
                <div className={cx('tabs-video')}>
                    <div className={cx('tab-item', { selected: true })}>Video</div>
                    <div className={cx('tab-item')}>
                        <LockedIcon />
                        Đã thích
                    </div>
                    <div className={cx('underline')}></div>
                </div>
                {videos.length > 0 ? (
                    <div className={cx('video-list')}>
                        {videos.map((video, index) => (
                            <VideoPreview key={index} data={video} />
                        ))}
                    </div>
                ) : (
                    <NotFoundNptify />
                )}
            </div>
        </div>
    );
}

export default Profile;
