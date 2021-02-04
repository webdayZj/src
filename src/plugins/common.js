export function getBaseUrl () {
    const {
        location: { origin, hostname },
    } = window;
    if (hostname === "localhost") {
        // return "";
        return 'http://192.168.31.174:8080'
    } else {
        return origin + '/grgcms';
    }
}
