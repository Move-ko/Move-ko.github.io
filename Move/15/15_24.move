address 0x2 {
    module circle {
        use 0x2::point::{Self,Point};

        struct Circle has copy,drop,store {
            center:Point,
            redius:u64
        }
        public fun new(center:Point,redius:u64):Circle {
            Circle{center,redius}
        }

        public fun overlaps(c1:&Circle,c2:&Circle):bool{
          let d = point::dist_squared(&c1.center, &c2.center);
          let r1 = c1.radius;
          let r2 = c2.radius;
          d*d <= r1*r1 + 2*r1*r2 + r2*r2
        }
    }
}