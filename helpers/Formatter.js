"use strict";
exports.__esModule = true;
var DAYS = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
var MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
];
var Formatter = /** @class */ (function () {
    function Formatter() {
    }
    Formatter.formatDate = function (date) {
        var newDate = new Date(date);
        var day = DAYS[newDate.getDay()];
        var month = MONTHS[newDate.getMonth()];
        var year = newDate.getFullYear();
        return "".concat(day, ", ").concat(month, " ").concat(year);
    };
    Formatter.formatNote = function (note) {
        return {
            id: note["id"],
            createdAt: note["createdAt"],
            deleted: note["deleted"],
            text: note["text"],
            pinned: note["pinned"]
        };
    };
    return Formatter;
}());
exports["default"] = Formatter;
