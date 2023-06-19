import { useEffect, useRef, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import { Link } from 'react-router-dom';
import Button from '../Button';
import Image from '../Image';

import { Wrapper as PopperWrapper } from '~/components/Popper';

import {
    CommentIcon,
    FlagIcon,
    HeartIcon,
    MusicIcon,
    MutedIcon,
    PauseIcon,
    PlaySolidIcon,
    ShareIcon,
    VolumeIcon,
} from '../Icon';
import TiktokLoading from '../TiktokLoading';

const cx = classNames.bind(styles);

function Video({ data, mute, volume, onHandleToggleMuted, onAdjustVolume }) {
    const [loading, setLoading] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef();
    const progressLoadbar = useRef();
    const currentTime = useRef();
    const currentDuration = useRef();

    useEffect(() => {
        if (mute) {
            videoRef.current.volume = 0;
        } else {
            videoRef.current.volume = volume;
        }
    });

    const playVideo = () => {
        setIsPlaying(true);
        videoRef.current.play();
    };

    const pauseVideo = () => {
        setIsPlaying(false);
        videoRef.current.pause();
    };

    const handleToggleVideo = () => {
        if (isPlaying) {
            pauseVideo();
        } else {
            playVideo();
        }
    };

    const handleOnTimeUpdate = (e) => {
        const progressLoadBarWidth = (videoRef.current.currentTime / videoRef.current.duration) * 100;
        progressLoadbar.current.style.width = progressLoadBarWidth + '%';

        let currentMin = Math.floor(videoRef.current.currentTime / 60);
        let currentSecond = Math.floor(videoRef.current.currentTime % 60);

        if (currentSecond < 10) {
            currentSecond = '0' + currentSecond;
        }
        currentTime.current.innerText = currentMin + ':' + currentSecond;
    };

    const handlePlayVideoViewPort = () => {
        const bounding = videoRef.current.getBoundingClientRect();

        if (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        ) {
            playVideo();
        } else {
            pauseVideo();
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handlePlayVideoViewPort);

        return () => window.removeEventListener('scroll', handlePlayVideoViewPort);
    }, []);

    useEffect(() => {
        videoRef.current.addEventListener('loadedmetadata', function () {
            if (!isNaN(videoRef.current.duration)) {
                // Lấy giá trị duration nếu không phải NaN
                const duration = videoRef.current.duration;

                let durationMin = Math.floor(duration / 60);
                let durationSecond = Math.floor(duration % 60);
                if (durationSecond < 10) {
                    durationSecond = '0' + durationSecond;
                }
                currentDuration.current.innerText = durationMin + ':' + durationSecond;
            }
        });
    }, []);

    const prevView = (props) => {
        return (
            <div className={cx('preview')} tabIndex="-1" {...props}>
                <PopperWrapper>
                    <div className={cx('wrapper-preview')}>
                        <header>
                            <Image src={data?.user.avatar} alt="" className={cx('avatar-preview')} />
                            <Button outline>Follow</Button>
                        </header>
                        <div className={cx('body')}>
                            <p className={cx('nickname')}>
                                <strong>{data?.user.nickname}</strong>
                                {/* <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} /> */}
                            </p>
                            <p className={cx('name-preview')}>{`${data?.user.first_name} ${data?.user.last_name}`}</p>
                            <p className={cx('analytics')}>
                                <strong className={cx('value')}>{data?.user.followers_count}</strong>
                                <span className={cx('label')}>Follower</span>
                                <strong className={cx('value')}>{data?.user.likes_count}</strong>
                                <span className={cx('label')}>Thích</span>
                            </p>
                        </div>

                        <div className={cx('user-bio')}>{data?.user.bio}</div>
                    </div>
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div className={cx('wrapper')}>
            <Link to={`/@/${data?.user.nickname}`} state={data?.user}>
                <Image src={data?.user.avatar} alt={data?.user.avatar} className={cx('avatar')}></Image>
            </Link>
            <div className={cx('content')}>
                <div className={cx('infor')}>
                    <div className={cx('infor-container')}>
                        <Link to={`/@/${data?.user.nickname}`} state={data?.user}>
                            <Tippy
                                interactive
                                delay={[800, 0]}
                                offset={[-80, 30]}
                                placement="bottom-start"
                                render={prevView}
                            >
                                <div className={cx('author')}>
                                    <div>
                                        <p className={cx('user-name')}>{data?.user.nickname}</p>
                                        <span
                                            className={cx('full-name')}
                                        >{`${data?.user.first_name} ${data?.user.last_name}`}</span>
                                    </div>
                                </div>
                            </Tippy>
                        </Link>
                        <p className={cx('caption')}>{data?.description}</p>
                        <div className={cx('music')}>
                            <MusicIcon />
                            {data?.music}
                        </div>
                    </div>
                    <Button outline className={cx('icon-follow')}>
                        Follow
                    </Button>
                </div>
                <div className={cx('video-wrapper')}>
                    <div className={cx('video-card')}>
                        {loading && isPlaying && <TiktokLoading medium />}
                        <video
                            // nếu độ phân giải video theo chiều ngang < chiều dọc thì width= 273px
                            // ngược lại thì width bằng 463px
                            style={
                                data?.meta.video.resolution_x < data?.meta.video.resolution_y
                                    ? { width: '273px' }
                                    : { width: '463px' }
                            }
                            src={data?.file_url}
                            className={cx('video-container')}
                            ref={videoRef}
                            loop
                            onTimeUpdate={handleOnTimeUpdate}
                            onWaiting={() => setLoading(true)}
                            onPlaying={() => setLoading(false)}
                        ></video>

                        <div className={cx('control-play')} onClick={handleToggleVideo}>
                            {isPlaying ? <PauseIcon /> : <PlaySolidIcon />}
                        </div>
                        <div className={cx('control-volume')}>
                            <div className={cx('container-volume')}>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    step="1"
                                    orient="vertical"
                                    onChange={onAdjustVolume}
                                    value={volume * 100}
                                />
                            </div>
                            <div className={cx('volume-icon')} onClick={onHandleToggleMuted}>
                                {mute || volume === 0 ? <MutedIcon /> : <VolumeIcon />}
                            </div>
                        </div>
                        <div className={cx('report')}>
                            <FlagIcon />
                            <span> Báo cáo</span>
                        </div>

                        <div className={cx('progress')}>
                            <div className={cx('progress-container')}>
                                <div className={cx('progress-bar')}></div>
                                <div className={cx('progress-loadbar')} ref={progressLoadbar}></div>
                            </div>
                            <div className={cx('time')}>
                                <span className={cx('current-time')} ref={currentTime}>
                                    00:00
                                </span>
                                /<span className={cx('current-duration')} ref={currentDuration}></span>
                            </div>
                        </div>
                    </div>

                    <div className={cx('action')}>
                        <div className={cx('action-btn')}>
                            <Button rounded className={cx('custom-icon')}>
                                <HeartIcon />{' '}
                            </Button>
                            <p className={cx('numbers')}>{data?.likes_count}</p>
                        </div>

                        <div className={cx('action-btn')}>
                            <Button rounded className={cx('custom-icon')}>
                                <CommentIcon />{' '}
                            </Button>
                            <p className={cx('numbers')}>{data?.comments_count}</p>
                        </div>

                        <div className={cx('action-btn')}>
                            <Button rounded>
                                <ShareIcon />{' '}
                            </Button>
                            <p className={cx('numbers')}>{data?.shares_count}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Video;
