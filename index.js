function findMinAndRemoveSorted(a) {
    return a.shift()
}

function merge(a1, a2) {
    let sorted = []
    while(a1.length !== 0 && a2.length !== 0) {
        if(a1[0] < a2[0]) {
            sorted.push(findMinAndRemoveSorted(a1))
        } else {
            sorted.push(findMinAndRemoveSorted(a2))
        }
        
    }
    return sorted.concat(a1).concat(a2)
}

function mergeSort(a) {
    let mid = a.length / 2
    let first = a.slice(0, mid)
    let last = a.slice(mid, a.length)
    let sorted;

    if (a.length < 2) {
        return a
    } else {
        sorted = merge(mergeSort(first), mergeSort(last))
    }
    return sorted
}
