import * as request from '~/utils/request';

export const search = async (q, type = 'less', page = null) => {
    try {
        const res = await request.get('users/search', {
            params: {
                q,
                type,
                page,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
