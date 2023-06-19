import * as request from '~/utils/request';

export const video = async (q) => {
    try {
        const response = await request.get(`users/@${q}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
