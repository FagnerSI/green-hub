export default function setSubstring(str, size) {
    if (str) {
        if (str.length > size) return `${str.substring(0, size)}...`
        return str;
    }
    return null;
}