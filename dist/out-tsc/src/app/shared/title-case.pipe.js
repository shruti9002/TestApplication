import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var TitleCasePipe = /** @class */ (function () {
    function TitleCasePipe() {
    }
    TitleCasePipe.prototype.transform = function (input) {
        return input.length === 0 ? '' : input.replace(/\w\S*/g, (function (txt) { return txt[0].toUpperCase() + txt.substr(1).toLowerCase(); }));
    };
    TitleCasePipe = tslib_1.__decorate([
        Pipe({ name: 'titlecase', pure: true })
    ], TitleCasePipe);
    return TitleCasePipe;
}());
export { TitleCasePipe };
//# sourceMappingURL=title-case.pipe.js.map