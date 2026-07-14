"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatCurrency = formatCurrency;
exports.slugify = slugify;
exports.parseDateRange = parseDateRange;
exports.debounce = debounce;
function formatCurrency(amount) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
    }).format(amount);
}
function slugify(text) {
    return text
        .normalize("NFKD")
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
}
function parseDateRange(input) {
    const [startText, endText] = input.split("..", 2);
    if (!startText || !endText) {
        throw new Error("Date range must use the format <start>..<end>");
    }
    const start = new Date(startText);
    const end = new Date(endText);
    if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
        throw new Error("Date range contains an invalid date");
    }
    if (start > end) {
        throw new Error("Date range start must not be after its end");
    }
    return { start, end };
}
function debounce(fn, ms) {
    let timeout;
    return function debounced(...args) {
        if (timeout !== undefined) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => fn.apply(this, args), ms);
    };
}
