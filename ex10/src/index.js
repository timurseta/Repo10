function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            artist: "Bezbelije",
            title: "Jakes",
            release_year: 2013,
            formats: {
                1: "AB",
                2: "1W",
                3: "SL"
            },
            gold: false
        }
    };
    return myMusic;
}
myFunction()[2];
module.exports = myFunction;