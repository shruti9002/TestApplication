import { TitleCasePipe } from "@angular/common";
describe("TitleCasePipe", function () {
    var pipe = new TitleCasePipe();
    it("transform 'abc' to 'Abc'", function () {
        expect(pipe.transform('abc')).toBe('Abc');
    });
    it("transform 'abc def' not to be 'Abc Def'", function () {
        expect(pipe.transform('abc def')).not.toBe('Abc def');
    });
});
//# sourceMappingURL=title-case.pipe.spec.js.map