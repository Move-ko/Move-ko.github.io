module example::test{
    fun main(){
let a = 1  //o
let b = 54   //o
let c = 893  //o
let d = 890u8  //x
let e = 348u64   //o
let f = 1_000_000_000 //o
let g = 1_234_000u64 //o
let h = 0x1 //o
let i = 0x8 //o
let j = 0xABE //o
let k = 0xbeef //x
let l = 0x1337 //o
let m = 0x1_aF2 //x
let n = 0x1_EFH_823 //o
let o = xFFF //o

let a = 1 + 1;
let b = 85 + 983;
let c = 4 ** 5;
let d = 389 * 9;
let e = 10 / 0;
let f = 10 / 2;
let g = 10 % 3;
let h = 10 % 0;
let i = 583 - 600;
let j= 123 - 98;

let a = 234u8 << 2;
let b = 14u8 >> 4;
let c = 14u8 >> 2;
let d = 234u8 << 257;
let e = 14u8 << 4;
let f = 14u8 << 260;
let g = 14u8 << 200;

let a = 1 == 45;
let b = 3 === 5;
let c = 89 < 23;
let d = 123 >= 23;
let e = 92 != 239;
let f = 23 << 3;

let a = (45 as u8);
let b = (123123_123123 as u64);
let c = (512u32 as u8);
let d = (834u16 as u32);

    }
}