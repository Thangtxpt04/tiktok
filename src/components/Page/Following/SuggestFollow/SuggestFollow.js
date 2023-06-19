import classNames from 'classnames/bind';
import styles from './SuggestFollow.module.scss';
import video1 from '~/assets/video/C0204.MP4';
// import * as suggestedAccountService from '~/Services/suggestedAccountService';
// import { Link } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import VideoPreview from '~/components/VideoPreview';
const cx = classNames.bind(styles);
function SuggestFollow() {
    // const [dataSuggests, setDataSuggests] = useState([]);

    // useEffect(() => {
    //     const fetchAPI = async () => {
    //         const dataResponse = await suggestedAccountService.suggest(1, 15);
    //         setDataSuggests(dataResponse);
    //     };
    //     fetchAPI();
    // }, []);

    // const renderSuggestList = () => {
    //     dataSuggests.map((data, index) => (
    //         <div className="suggest-item">
    //             {console.log(data)};
    //             <Link to={`/@/${data?.nickname}`} state={data}>
    //                 <VideoPreview data={data} />
    //             </Link>
    //         </div>
    //     ));
    // };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('suggest-list')}>
                <div className="suggest-item">
                    <div className={cx('wrapper')}>
                        <div className={cx('inner')}>
                            <div>
                                <div className={cx('video-container')}>
                                    <div className={cx('video-inner')}>
                                        <div className={cx('img-thumb')}>
                                            <img src="https://tiktok.nghiane.cf/#/@gumball" alt="" />
                                        </div>
                                        <div className={cx('video')}>
                                            <video muted src={video1}></video>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SuggestFollow;
