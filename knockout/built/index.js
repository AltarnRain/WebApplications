define(["require", "exports", "knockout"], function (require, exports, ko) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MainViewModel = /** @class */ (function () {
        function MainViewModel(language, framework) {
            this.language = ko.observable(language);
            this.framework = ko.observable(framework);
        }
        return MainViewModel;
    }());
    ko.applyBindings(new MainViewModel("TypeScript", "Knockout"));
});
//# sourceMappingURL=index.js.map