export default function setSubstring(str, size) {
    if (str) {
        if (str.length > size) return `${str.substring(0, 80)}...`
        return str;
    }
    return null;
}