const shuffle = a => {
    let cI = a.length,
        rI;
    while (cI != 0) {
        rI = Math.floor(Math.random() * cI);
        cI--;
        [a[cI], a[rI]] = [a[rI], a[cI]];
    }
    return a;
}

export default shuffle;