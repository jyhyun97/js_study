var hometown = [
    {name : 'ㄴㅈ', place: 'ㅇㅅ', city: 'ㄱㅇ'},
    {name : 'ㅈ', place: 'ㄱㅊ'},
    {name : 'ㅎㅅ', place: 'ㄱㅈ', city: 'ㅈㄹㄷ'},
    {name : 'ㅈㅁ', place: 'ㅂㅅ', city: 'ㄱㅅㄷ'}
];

for (var i = 0; i < hometown.length; i++)
{
    var h =hometown[i];
    if (!h || !h.city) continue;
    
    console.log('run count : ' + i);

    if (h.name === 'ㅎㅅ'){
        console.log(h.name + '\'s hometown is' + h.city + ' ' + h.place + '.');
        break;
    }
}