function anagrams(word, list) {

    var lowerCase_word = word.toLowerCase();
    var lowerCase_list = list.toLowerCase();

    var split_list = list.split(' ');
    var super_split_word = lowerCase_word.split('');
    super_split_word.sort();
    var sort_word = super_split_word.join('');


    var matching_list = [];

    for (var i = 0; i < split_list.length ; i++) {
        var super_split_list = split_list[i].split('');
        super_split_list.sort();
        var sort_word_list = super_split_list.join('');

        if (sort_word === sort_word_list) {
            matching_list.push(split_list[i]);
        }
    }

    var final = matching_list.join(' ');
    return final;

}
