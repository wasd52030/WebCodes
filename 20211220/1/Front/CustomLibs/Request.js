export default function Request() {
    const req = axios.create({
        baseURL: 'http://localhost/20211220/1/Back/public',
        headers: { 'Authorization': window.localStorage.getItem("jwtToken") }
    })
    return req;
}
