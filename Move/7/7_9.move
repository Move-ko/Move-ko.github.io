error:

    ┌── example.move:12:9 ───
    │
 12 │         y = &2; // 유효하지 않은!
    │         ^ Invalid assignment to local 'y'
    ·
 12 │         y = &2; // 유효하지 않음!
    │             -- The type: '&{integer}'
    ·
  9 │         let y: &mut u64 = &mut 1;
    │                -------- Is not a subtype of: '&mut u64'
    │

error:

    ┌── example.move:15:9 ───
    │
 15 │         read_and_assign(x, y); // 유효하지 않음!
    │         ^^^^^^^^^^^^^^^^^^^^^ Invalid call of '0x42::example::read_and_assign'. Invalid argument for parameter 'store'
    ·
  8 │         let x: &u64 = &0;
    │                ---- The type: '&u64'
    ·
  3 │     fun read_and_assign(store: &mut u64, new_value: &u64) {
    │                                -------- Is not a subtype of: '&mut u64'
    │