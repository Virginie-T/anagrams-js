function anagrams(word, list) {

    var lowerCase_word = word.toLowerCase();
    var lowerCase_list = list.toLowerCase();

    var split_list = list.split(' ');
    var super_split_word = lowerCase_word.split('');
    console.log(super_split_word);
    var sort_word = super_split_word.sort();
    console.log(sort_word);


    var matching_list = [];

    for (var i = 0; i < split_list.length ; i++) {
        var super_split_list = split_list[i].split('');
        var sort_word_list = super_split_list.sort();
        console.log(sort_word_list);


        if (sort_word === super_split_list) {
            var x = split_list[i].join('');

            matching_list.push(x);
        }
    }

    var final = matching_list.join(' ');
    console.log(final);
    return final;

}
