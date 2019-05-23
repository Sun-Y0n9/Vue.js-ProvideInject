export const color = () => {
	var base = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    var baseStr = "#";
    for (var i = 0; i < 6; i++) {
        var r = Math.floor(Math.random() * 16);
        baseStr += base[r];
    };
    return baseStr;
}