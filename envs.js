let base = "last 2 versions and > 1% and not OperaMini all";

module.exports = {
    modern: `${base} and not IE 11`,
    legacy: `${base}, IE 11`,
};
