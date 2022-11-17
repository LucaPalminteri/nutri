export function multipleConverter(n: number,unit:string): string {

    let out:string = '';

    if (n >= 1 && n < 1000)  return `${n.toString()} ${unit}`;
    if (n >= 0.001 && n < 1)  return `${(n * 1_000).toString()} m${unit}`;
    if (n >= 0.000001 && n < 0.001)  return `${(n * 1_000_000).toString()} µ${unit}`;

    return `${n.toString()} ${unit}`;
}