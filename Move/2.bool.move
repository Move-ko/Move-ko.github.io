

module aptos::aptos{
fun need_gas(destination_distance: u64, has_round_trip: bool): bool {
    if (has_round_trip) {
      return destination_distance * 2 >= 40
    } else {
      return destination_distance >= 40
    };
}
fun test(){

let a = true
let b = false
let c = true && false
let d = false || true
let e = true || false && true
let f = !true
let g = !false
let h = !true || true
let i = false || true && false
}

}