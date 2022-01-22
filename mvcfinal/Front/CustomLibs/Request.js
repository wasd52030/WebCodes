export default function Request() {
    const req = axios.create({
        baseURL: 'http://localhost/mvcfinal/Back/public',
        headers: { 'Authorization': window.localStorage.getItem("jwtToken") }
    })
    return req;
}
