export namespace DateTimeUtils {
    export const isAprilFoolsDay = () => {
        const now = new Date();
        return now.getMonth() === 3 && now.getDate() === 1;
    };
}
