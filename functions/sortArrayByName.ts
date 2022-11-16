export function sortArrayByName(arr: Array<any>) {
    return arr.sort((a, b) => {
        let fa = a.name.toLowerCase();
        let fb = b.name.toLowerCase();
        return (fa < fb) ? -1 : (fa > fb) ? 1 : 0;
    })
}