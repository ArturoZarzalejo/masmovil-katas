export function kata2 (obj, def, path) {
    if(path) {
        return path.split(".").reduce((prev, curr) =>
            prev && prev[curr] || def
        , obj);
    }
    return (_path) => {
        return _path.split(".").reduce((prev, curr) =>
            prev && prev[curr] || def
        , obj);
        
    }
}