export default async location => {
    try {
        const result = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=1de199f6478a7d1a74a5686320080029&units=metric`,
        );

        if (result.status === 200) {
            return { success: true, data: await result.json() };
        }

        return { success: false, error: result.statusText };
    } catch (ex) {
        return { success: false, error: ex.message };
    }
};
