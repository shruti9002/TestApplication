import { TitleCasePipe } from "@angular/common";


describe("TitleCasePipe",() =>{
    let pipe = new TitleCasePipe()

    it("transform 'abc' to 'Abc'",() => {
        expect(pipe.transform('abc')).toBe('Abc')
    })

    it("transform 'abc def' not to be 'Abc Def'" ,() => {
        expect(pipe.transform('abc def')).not.toBe('Abc def')
    })
})