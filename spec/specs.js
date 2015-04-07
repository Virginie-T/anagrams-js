describe('anagrams', function() {
    it('return if the input letter is an angram with the the other input letter', function() {
        expect(anagrams('a', 'a')).to.equal('a');
    });

    it('return no if the input letter is an angram with the the other input letter', function() {
        expect(anagrams('a', 'b')).to.equal('');
    });

    it('explaining things is hard', function() {
        expect(anagrams('a', 'a b')).to.equal('a');
    });

    it('returns an empty string if there is no anagram present in the list', function() {
        expect(anagrams('a', 'x y')).to.equal('');
    });

    it('returns the word if the word is present in the list', function() {
        expect(anagrams('on', 'no')).to.equal('no');
    });
});
