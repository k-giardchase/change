describe('changemaker', function() {
    it("returns 0 when there is no change", function() {
        expect(changemaker(100, 100)).to.eql([0,0,0,0]);
    });
    it("returns 25cents when the change is equal to 25 cents", function() {
        expect(changemaker(100, 75)).to.eql([1,0,0,0]);
    });
    it("returns 10cents when the change is equal to 10 cents", function() {
        expect(changemaker(100, 90)).to.eql([0, 1,0,0]);
    });
    it("returns 5cents when the change is equal to 5 cents", function() {
        expect(changemaker(100, 95)).to.eql([0, 0, 1,0]);
    });
    it("returns 1 cents when the change is equal to 1 cents", function() {
        expect(changemaker(100, 99)).to.eql([0, 0, 0,1]);
    });
});
