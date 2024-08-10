
function find(words) {
    const anag = {};

    words.forEach(word => {
        //Sab se pehle hamne Saree Cheeze ko Sort Kardia phir isko Match Karwaya
        const sorted = word.split('').sort().join('');
        // console.log(sorted);

        if (anag[sorted]) {
            anag[sorted].push(word);
        } else {
            anag[sorted] = [word];
        }
    });
   

    return Object.values(anag);
}


const input = ["bat", "tap", "cat", "tab", "pat"];
const output = find(input);

console.log(output);
