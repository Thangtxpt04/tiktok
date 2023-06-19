import classNames from 'classnames/bind';
import styles from './VideoPreview.module.scss';
import video1 from '~/assets/video/C0204.MP4';
import { PlayIcon } from '../Icon';
import { useRef } from 'react';

const cx = classNames.bind(styles);
function VideoPreview({ data }) {
    const videoRef = useRef();

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div style={{ paddingTop: '132.653%' }}>
                    <div className={cx('video-container')} onMouseEnter={() => videoRef.current.play()}>
                        <div className={cx('video-inner')}>
                            <div className={cx('img-thumb')}>
                                <img src={data.thumb_url} alt="" />
                            </div>
                            <div className={cx('video')}>
                                <video muted ref={videoRef} src={data.file_url}></video>
                            </div>
                            <div className={cx('views')}>
                                <PlayIcon />
                                <strong className={cx('views-counts')}>{data.views_count}</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('des')}>{data.description}</div>
        </div>
    );
}

export default VideoPreview;
