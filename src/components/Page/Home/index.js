import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Video from '~/components/Video';
import styles from './Home.module.scss';
import * as videoService from '~/Services/videoService';

const cx = classNames.bind(styles);

function Home() {
    const [videos, setVideos] = useState([]);
    const [page, setPage] = useState(1);
    const [volume, setVolume] = useState(0.4);
    const [prevVolume, setPrevVolume] = useState(volume);
    const [mute, setMute] = useState(false);

    const handleAdjustVolume = (e) => {
        setVolume(e.target.value / 100);
    };
    const handleToggleMuted = () => {
        if (mute) {
            setMute(false);
            setVolume(prevVolume);
        } else {
            setPrevVolume(volume);
            setMute(true);
            setVolume(0);
        }
    };

    function handleScroll() {
        if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
            setPage((page) => page + 1);
        }
    }

    useEffect(() => {
        const fetchAPI = async () => {
            const result = await videoService.loadVideo('for-you', page);
            setVideos((prev) => [...prev, ...result]);
        };
        fetchAPI();
    }, [page]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={cx('wrapper')}>
            {videos.map((video, index) => (
                <Video
                    key={index}
                    data={video}
                    mute={mute}
                    volume={volume}
                    onHandleToggleMuted={handleToggleMuted}
                    onAdjustVolume={handleAdjustVolume}
                    onHandleScroll={handleScroll}
                ></Video>
            ))}
        </div>
    );
}

export default Home;
