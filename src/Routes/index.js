import config from '~/config';
//Layout
import HeaderOnly from '~/Layouts/HeaderOnly';
// import StretchLayout from '~/Layouts/StretchLayout';

import Home from '~/components/Page/Home';
import Following from '~/components/Page/Following';
import Profile from '~/components/Page/Profile';
import Upload from '~/components/Page/Upload';
import Live from '~/components/Page/Live';
import Search from '~/components/Page/Search';
import StretchLayout from '~/Layouts/StretchLayout';
export const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile, layout: StretchLayout },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.live, component: Live },
    { path: config.routes.search, component: Search },
];

export const privateRoutes = {};
