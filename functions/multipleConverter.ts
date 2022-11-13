export function multipleConverter(n:number):number {

    if(n >= 1 && n < 1000) return n;
    if(n >=0.001  && n < 1) return n*1_000;
    if(n >=0.000001  && n < 0.001) return n*1_000_000;

    else return n;
}