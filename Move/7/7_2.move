module example::test {
   struct A {b:B}

   struct B {
       c:u64
   }

   fun f(a:&A): &u64{
      &a.b.c
   }
}