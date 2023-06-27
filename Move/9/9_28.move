    let (x, y): (u64, u64) = (0, 1);
//       ^                           local-variable
//       ^                           pattern
//          ^                        local-variable
//          ^                        pattern
//          ^                        pattern-list
//       ^^^^                        pattern-list
//      ^^^^^^                       pattern-or-list
//            ^^^^^^^^^^^^           type-annotation
//                         ^^^^^^^^  initializer
//  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ let-binding

    let Foo { f, g: x } = Foo { f: 0, g: 1 };
//      ^^^                                    struct-type
//            ^                                field
//            ^                                field-binding
//               ^                             field
//                  ^                          local-variable
//                  ^                          pattern
//               ^^^^                          field-binding
//            ^^^^^^^                          field-binding-list
//      ^^^^^^^^^^^^^^^                        pattern
//      ^^^^^^^^^^^^^^^                        pattern-or-list
//                      ^^^^^^^^^^^^^^^^^^^^   initializer
//  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ let-binding