import Grid from "@mui/material/Unstable_Grid2";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Copy from "../util/copy";
const study_1 = () => {
  const code1 = `  address 0x2 {
    module m {
        struct Foo {x:u64,y:bool}
        struct Bar {}
        struct Baz {foo:Foo,}
        //                 ^ 참고: 끝에 쉼표(Trailing comma)가 있는 것도 괜찮습니다.
    }
}
`;
  const code2 = `  module example::test {
    struct Foo {x:Foo}
   //              ^ 오류! Foo는 Foo를 포함할 수 없습니다.
}
`;
  const code3 = `  address 0x2 {
    module m {
        struct Foo has copy,drop {
            x:u64,
            y:bool
        }
    }
}
`;
  const code4 = `  address 0x42 {
    module m {
        public fun foo():u64 {0}
        fun calls_foo():u64 {foo()}//유효
    
    }

    module other {
        fun calls_m_foo():u64 {
            0x42::m::foo()//유효
        }
    }
}
script {
    fun calls_m_foo():u64 {
        0x42::m::foo() //유효
    }
}
`;
  const code5 = `  address 0x42 {
    module m {
        friend 0x42::n;  // friend 선언
        public(friend) fun foo(): u64 { 0 }
        fun calls_foo(): u64 { foo() } // 유효
    }
    
    module n {
        fun calls_m_foo(): u64 {
            0x42::m::foo() // 유효
        }
    }
    
    module other {
        fun calls_m_foo(): u64 {
            0x42::m::foo() // 오류!
    //       ^^^^^^^^^^^^ 'foo'는 모듈 '0x42::m'의 'friend'에서만 호출할 수 있습니다.
    
    
    
    
        }
    }
    }
    
    script {
        fun calls_m_foo(): u64 {
            0x42::m::foo() // 오류!
    //       ^^^^^^^^^^^^ 'foo'는 모듈 '0x42::m'의 'friend'에서만 호출할 수 있습니다.
        }
    }
`;
  const code6 = `  address 0x42 {
    module m {
        public entry fun foo():u64 {0}
        fun calls_foo():u64 {foo()}//유효
    }
    
    module n {
        fun calls_m_foo():u64 {
            0x42::m::foo()//유효
        }
    }


    module other {
        public entry fun calls_m_foo():u64 {
            0x42::m::foo()//유효
        }
    }

}

script {
    fun calls_m_foo():u64 {
        0x42::m::foo()//유효
    }
}
`;
  const code7 = `  address 0x42 {
    module m {
        entry fun foo():u64 {0}//// 유효! entry 함수는 public이 필요하지 않습니다.
    }

    module n {
        fun calls_m_foo():u64 {
            0x42::m::foo()//오류 
            // ^^^^^^^^^^^^ 'foo'는 '0x42::m' 내부에서만 사용 가능합니다.
        }
    }
    
    module other {
        public entry fun calls_m_foo():u64 {
            0x42::m::foo()//오류 
            // ^^^^^^^^^^^^ 'foo'는 '0x42::m' 내부에서만 사용 가능합니다.
        }
    }
}
script {
    fun calls_m_foo():u64 {
        0x42::m::foo()//오류 
     // ^^^^^^^^^^^^ 'foo'는 '0x42::m' 내부에서만 사용 가능합니다.
    }
}
`;
  const code8 = `  module example::test {
    fun FOO(){}
    fun bar_42(){}
    fun _bAZ19(){}
}
`;
  const code9 = `  module example::test {
    fun id<T>(x:T):T {x}
    fun example<T1:copy,T2>(x:T1,y:T2):(T1,T1,T2){(copy,x,x,y)}
}
`;
  const code10 = `  module example::test {
    fun add(x:u64,y:u64):u64 {x+y}
}
`;

  const code11 = `  module example::test {
    fun useless(){}
}
`;
  const code12 = `  address 0x42 {
    module example{
        struct Counter {
            count:u64
        }
        fun new_counter():Counter {
            Counter {count:0}
        }
    }
}
`;
  const code13 = `  address 0x42 {
    module example {
        struct Balance has key {
            value :u64
        }
        public fun add_balance(s:&signer, value :u64){
            move_to(s,Balance{value})
        }

        public fun extract_balance(addr:address ) :u64 acquires Balance {
            let Balance {value}= move_from(addr);//acquires 필요
            value
        }
    }
}
`;

  const code14 = `  address 0x42 {
    module example {
        struct Balance has key {
            value:u64
        }
       public fun add_balance(s:&signer) {
        move_to(s,Balance{value})
       }


       public fun extract_balance(addr:address):u64 acquires Balance {
            let Balance { value}= move_from(addr);//acquires 필요
            value
        }  
        public fun extract_and_add(sender:address,receiver:&signer)acquires Balance {
            let value = extract_balance(sender);//여기에서는 acquires가 필요합니다.
            add_balance(receiver, value)

        }
    }
}
address 0x42 {
    module other {
        fun extract_balance(addr:address):u64 {
            0x42::example::extract_balance(addr)//acquires이 필요하지 않습니다.
        }
    }
}
`;

  const code15 = `  address 0x42 {
    module example {
        use std::vector;

        struct Balance has key { 
            value:u64
        }

        struct Box<T> has key {
            items:vector<T>
        }

        public fun store_two<Item1:store,Item2:store>(
            addr:address,
            item1:Item1,
            item2:Item2,
        )acquires Balance ,Box {
            let balance = borrow_global_mut<Balance>(addr);//acquires 필요
            balance.value= balance.value - 2;
            let box1=borrow_global_mut<Box<Item1>>(addr);//acquires 필요
            vector::push_back(&mut box1.items,item1);
            let box2= borrow_global_mut<Box<Item2>>(addr);//acquires 필요
            vector::push_back(&mut box2,items,item2);
        }

    }
}
`;
  const code16 = `  module example::test {
    fun zero():u64 {0}
}
`;
  const code17 = `  module example::test {
    fun one_two_three(): (u64, u64, u64) {
         (0, 1, 2) 
    }
}
`;
  const code18 = `  module example::test {
    fun just_unit(): () { () }
    fun just_unit() { () }
    fun just_unit() { }
}
`;
  const code19 = `  script {
    fun do_nothing(){
    }
}
`;
  const code20 = `  module examples::test {
    fun example(): u64 {
    let x = 0;
    x = x + 1;
    x // returns 'x'
    }
}
`;
  const code21 = `  module std::vector {
    native public fun empty<Element>(): vector <Element>;
    ...
}
`;
  const code22 = `  address 0x42 {
    module example {
        public fun zero():u64 {0}
    }
}

script {
    use 0x42::example::{Self,zero};
    fun call_zero(){
        0x42::example::zero();
        example::zero();
        zero();
    }
}
`;
  const code23 = `  address 0x42 {
    module example {
        public fun takes_none():u64{0}
        public fun takes_one(x:u64):u64 {x}
        public fun takes_two(x:u64,y:u64):u64{x+y}
        public fun takes_three(x:u64,y:u64,z:u64):u64 {x+y+z}
    }
}

script {
    use 0x42::example;
    fun call_all(){
        example::takes_none();
        example::takes_one(0);
        example::takes_two(0,1);
        example::takes_three(0,1,2);
    }
}
`;
  const code24 = `  address 0x42 {
    module example {
       public fun id<T>(x:T):T{x}
    }
   }
   script {
       use 0x42::example;
       fun call_all() {
           example::id(0);
           example::id<u64>(0);
       }
   }
`;
  const code25 = `  module example::test {
    fun add(x:u64,y:u64):u64 {
        x+y
    }
}
`;
  const code26 = `  module example::test {
    fun double_and_add(x:u64,yPu64):u64 {
        let double_x = x*2;
        let double_y = y*2;
        double_x + double_y
    }
}
`;
  const code27 = `  module example::test {
    fun f1():u64 {return 0}
    fun f2():u64 {0}
}
`;
  const code28 = `  module example::test {
    fun safe_sub(x:u64,y:u64):u64 {
        if(x>y)return 0;
        x-y
    }
}
`;
  const code29 = `  module example::test {
    use std::vector;
    use std::option::{Self,Option};
    fun index_of<T>(v: &vector<T>, target: &T): Option<u64> {
        let i = 0;
        let n = vector::legnth(v);
        while (i < n) {
            if (vector::borrow(v,i) == target)return option::some(i);
            i = i +1
        };

        option::none(i)
    }
}
`;
  const code30 = `  module example::test {
    fun foo() { return }
    fun foo() { return () }
}
`;
  const code31 = `  module example::test {
    inline fun percent(x: u64, y: u64):u64 { x * 100 / y }
}
`;
  const code32 = `  module example::test {
    //주어진 코드는 주어진 컬렉션의 요소에 함수를 "접어"나가는 개념을 나타냅니다. 예를 들어, fold(vector[1,2,3], 0, f)는 f(f(f(0, 1), 2), 3)와 같이 실행됩니다.
    public inline fun fold<Accumulator, Element>(
        v:vector<Element>,
        init:Accumulator,
        f:|Accumulator,Element|Accumulator
    ):Accumulator{
        let accu = init;
        foreach(v, |elem| accu = g(accu, elem));
        accu
    }
}
`;

  return (
    <Grid container>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            구조체 와 자원
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            구조체(struct)는 타입화된 필드를 포함하는 사용자 정의 데이터
            구조입니다. 구조체는 다른 구조체를 포함하여 모든
            비참조(non-reference) 타입을 저장할 수 있습니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            구조체 값이 복사될 수 없고 삭제될 수 없는 경우, 우리는 종종 해당
            구조체 값을 자원(resource)으로 참조합니다. 이 경우 자원 값은 함수의
            종료시에 소유권이 전달되어야 합니다. 이 특성은 자원을 전역 저장
            스키마를 정의하거나 중요한 값을 표현하는 데 매우 유용하게
            사용됩니다(예: 토큰).
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            기본적으로 구조체는 선형(linear)이고 일시적(ephemeral)입니다. 이는
            구조체가 복사될 수 없고 삭제될 수 없으며, 전역 저장소에 저장될 수
            없다는 것을 의미합니다. 이는 모든 값이 소유권이 전달되어야 한다는
            것을 의미하며, 프로그램의 실행이 끝날 때까지 값들을 처리해야 한다는
            것을 의미합니다. 우리는 구조체에 값을 복사하거나 삭제하고 전역
            저장소에 저장하거나 전역 저장 스키마를 정의하는 능력을 부여함으로써
            이 동작을 완화시킬 수 있습니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            구조체(Structs) 정의하기
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            구조체는 모듈 내부에서 정의되어야 합니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code1} />
      </Grid>{" "}
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            구조체는 재귀적으로 정의될 수 없으므로, 다음과 같은 정의는 올바르지
            않습니다.
          </Typography>
          <Copy code={code2} />
          <Typography variant="body1" gutterBottom>
            앞서 언급한 대로, 기본적으로 구조체 선언은 선형적이고 일시적입니다.
            따라서 값을 복사하거나 삭제하거나 전역 저장소에 저장하거나 저장
            스키마로 사용하는 등의 작업에 값을 사용할 수 있도록 하려면, 구조체에
            has{" <ability>"} 주석을 추가하여 구조체에 능력을 부여할 수
            있습니다.
          </Typography>
          <Copy code={code3} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default study_1;
