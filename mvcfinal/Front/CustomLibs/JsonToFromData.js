export default function JsonToFromData(json) {
    let from = new FormData()
    Object.keys(json).forEach(key => from.append(key, json[key]))
    return from
}