export const login = async (
    email: string,
    password: string
): Promise<boolean> => {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                if (email === 'test' && password === 'test') {
                    resolve(true);
                } else {
                    resolve(false);
                }
            });
        } catch (error) {
            reject(error);
        }
    });
};
