export function parseRoutePath(path) {
    const roureParametersRegex = /:([a-zA-Z]+)/g

    const params = path.replaceAll(roureParametersRegex, "(?<$1>[a-z0-9-_]+)")

    const pathRegex = new RegExp(`${params}(?<query>\\?(.*))?$`)

    return pathRegex
}