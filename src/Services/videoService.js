import * as request from '~/utils/request';

export const loadVideo = async (type, page = '1') => {
    try {
        const response = await request.get('videos', {
            params: {
                type,
                page,
            },
        });

        return response.data;
    } catch (error) {
        console.log(error);
    }
};
