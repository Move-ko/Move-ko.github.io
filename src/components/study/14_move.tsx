import Grid from "@mui/material/Unstable_Grid2";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Copy from "../util/copy";
const study_1 = () => {
  const code1 = `  fun <identifier><[type_parameters: constraint],*>([identifier: type],*): <return_type> <acquires [identifier],*> <function_body>
`;
  const code2 = `  fun foo<T1, T2>(x: u64, y: T1, z: T2): (T2, T1, u64) { (z, y, x) }
`;
  const code3 = `  address 0x42 {
    module m {
        fun foo(): u64 { 0 }
        fun calls_foo(): u64 { foo() } // 유효
    }
    
    module other {
        fun calls_m_foo(): u64 {
            0x42::m::foo() // 오류!
    //      ^^^^^^^^^^^^ 'foo'는 '0x42::m' 내부에서만 사용 가능합니다.
        }
    }
    }
    
    script {
        fun calls_m_foo(): u64 {
            0x42::m::foo() // 오류!
    //      ^^^^^^^^^^^^ 'foo'는 '0x42::m' 내부에서만 사용 가능합니다.
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
            함수
          </Typography>
        </Box>{" "}
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            Move에서의 함수 구문은 모듈 함수와 스크립트 함수 간에 공유됩니다.
            모듈 내부의 함수는 재사용 가능한 함수로 사용되며, 스크립트 함수는
            트랜잭션을 호출하는 데 한 번만 사용됩니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            선언
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            함수는 fun 키워드를 사용하여 선언됩니다. 함수 선언은 함수 이름, 타입
            매개변수, 매개변수, 반환 타입, 어카이어(획득) 어노테이션들, 그리고
            마지막으로 함수 본문으로 구성됩니다.
          </Typography>
        </Box>
        <Copy code={code1} />
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            예를들어
          </Typography>
        </Box>
        <Copy code={code2} />
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            가시성
          </Typography>
        </Box>{" "}
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            모듈 함수는 기본적으로 동일한 모듈 내에서만 호출할 수 있습니다.
            이러한 내부 함수(가끔은 private 함수라고도 함)는 다른 모듈이나
            스크립트에서 호출할 수 없습니다.
          </Typography>
        </Box>{" "}
        <Copy code={code3} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            다른 모듈이나 스크립트에서 접근할 수 있도록 하려면 함수를 public
            또는 public(friend)로 선언해야 합니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            public: 가시성 public 함수는 어떤 모듈이나 스크립트에서든지 호출할
            수 있습니다. 다음 예시에서와 같이, public 함수는 다음과 같은 경우에
            호출될 수 있습니다:
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            동일한 모듈에서 정의된 다른 함수에서,
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            다른 모듈에서 정의된 함수에서,
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            스크립트에서 정의된 함수에서.
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            또한 public 함수는 인수의 타입과 반환 타입에 대한 제한이 없습니다.
          </Typography>
        </Box>{" "}
        <Copy code={code4} />
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            public(friend) 가시성 public(friend) 가시성 한정자는 함수를 사용할
            수 있는 위치를 더 정밀하게 제어하기 위한 public 한정자의 제한된
            형태입니다. public(friend) 함수는 다음과 같은 경우에 호출될 수
            있습니다:
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            동일한 모듈에서 정의된 다른 함수에서,
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            친구 목록에 명시적으로 지정된 모듈에서 정의된 함수에서 (친구 목록의
            지정 방법은 Friends 문서를 참조하십시오).
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            모듈을 친구로 지정하는 것은 스크립트를 친구로 지정할 수 없으므로,
            스크립트에서 정의된 함수는 public(friend) 함수를 호출할 수 없습니다.
          </Typography>
        </Box>{" "}
        <Copy code={code5} />
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            entry 한정자
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            entry 한정자는 모듈 함수를 스크립트와 마찬가지로 안전하고 직접적으로
            호출할 수 있도록 설계되었습니다. 이를 통해 모듈 작성자는 어떤 함수가
            실행을 시작할 수 있는지를 지정할 수 있습니다. 모듈 작성자는 비-entry
            함수가 이미 실행 중인 Move 프로그램에서 호출될 것임을 알 수
            있습니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            기본적으로, entry 함수는 모듈의 "main" 함수로 생각할 수 있으며, Move
            프로그램이 실행을 시작하는 지점을 지정합니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            하지만, entry 함수는 여전히 다른 Move 함수에 의해 호출될 수
            있습니다. 따라서 Move 프로그램의 시작점으로 사용될 수는 있지만, 이에
            제한되지는 않습니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            예를 들어:
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code6} />
      </Grid>{" "}
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            심지어 내부 함수도 entry로 표시할 수 있습니다! 이를 통해 해당 함수가
            실행의 시작 부분에서만 호출되는 것을 보장할 수 있습니다 (모듈 내
            다른 곳에서 호출하지 않는다고 가정할 경우). 예를 들어:
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code7} />
      </Grid>{" "}
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            entry 함수는 원시 타입, String, vector와 같은 인수를 받을 수 있지만,
            Struct (예: Option)는 받을 수 없습니다. 또한, entry 함수는 반환값을
            가져서는 안 됩니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            Name
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            함수 이름은 첫 번째 문자로 a부터 z까지의 소문자 또는 A부터 Z까지의
            대문자를 사용할 수 있습니다. 첫 번째 문자 이후에는 밑줄 _, a부터
            z까지의 소문자, A부터 Z까지의 대문자 또는 숫자 0부터 9까지의 문자를
            포함할 수 있습니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code8} />
      </Grid>{" "}
      <Grid xs={12}>
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            타입 매개변수 (Type Parameters)
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            이름 이후에 함수에는 타입 매개변수(Type Parameters)가 올 수
            있습니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code9} />
      </Grid>{" "}
      <Grid xs={12}>
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            매개변수 (Parameters)
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            함수 파라미터는 로컬 변수 이름 다음에 타입 어노테이션을 사용하여
            선언됩니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code10} />
      </Grid>{" "}
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            이것을 "x는 u64 타입을 갖는다"로 읽습니다. 함수는 전혀 파라미터를
            가지지 않을 수도 있습니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code11} />
      </Grid>{" "}
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            이것은 새로운 데이터 구조를 생성하거나 비어있는 데이터 구조를 만드는
            함수에서 매우 흔히 사용됩니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code12} />
      </Grid>{" "}
      <Grid xs={12}>
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            획득자
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            함수가 move_from, borrow_global 또는 borrow_global_mut을 사용하여
            리소스에 접근할 때, 함수는 해당 리소스를 획득(acquires)한다고
            표시해야 합니다. 이는 Move의 타입 시스템에서 전역 저장소로의 참조가
            안전하다는 것을 보장하기 위해 사용됩니다. 특히, 전역 저장소로의
            끊어진 참조가 없는지 확인합니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code13} />
      </Grid>{" "}
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            모듈 내에서 전이적인 호출(transitive calls)에 대해서도 acquires
            어노테이션을 추가해야 합니다. 다른 모듈에서 이러한 함수를 호출할
            때는 이러한 acquires 어노테이션을 추가할 필요가 없습니다. 왜냐하면
            한 모듈은 다른 모듈에서 선언된 리소스에 접근할 수 없기 때문에 참조
            안전성을 보장하기 위해 어노테이션이 필요하지 않습니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code14} />
      </Grid>{" "}
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            함수는 필요한 만큼 많은 리소스를 획득할 수 있습니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code15} />
      </Grid>{" "}
      <Grid xs={12}>
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            반환 유형
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            파라미터 이후에 함수는 반환 타입을 지정합니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code16} />
      </Grid>{" "}
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            여기서 : u64는 함수의 반환 타입이 u64임을 나타냅니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            팁 함수는 입력 참조에서 유도된 경우 불변한 & 또는 가변한 &mut 참조를
            반환할 수 있습니다. 주의해야 할 점은 이것은 함수가 인라인 함수인
            경우가 아니라면 전역 저장소에 대한 참조를 반환할 수 없다는 것입니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            튜플을 사용하여 함수는 여러 개의 값을 반환할 수 있습니다:
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code17} />
      </Grid>{" "}
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            만약 반환 타입이 명시되지 않은 경우, 함수의 암묵적인 반환 타입은
            unit ()입니다. 다음 함수들은 동등합니다:
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code18} />
      </Grid>{" "}
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            스크립트 함수는 반드시 unit () 타입의 반환 타입을 가져야 합니다:
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code19} />
      </Grid>{" "}
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            앞서 튜플 섹션에서 언급한 대로, 이러한 튜플 "값"은 가상적이며 실제
            실행 시 존재하지 않습니다. 따라서 unit ()을 반환하는 함수는 실행
            중에 어떤 값도 반환하지 않습니다. unit ()은 반환되지 않는다는 것을
            나타내는 특별한 타입입니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            함수본문
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            함수의 본문은 표현식 블록(expression block)입니다. 함수의 반환 값은
            시퀀스에서 마지막 값입니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code20} />
      </Grid>{" "}
      <Grid xs={12}>
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            네이티브 함수
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            일부 함수는 본문이 명시되지 않고, 대신 가상 머신(VM)에서 본문을
            제공하는 경우가 있습니다. 이러한 함수는 native로 표시됩니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            VM 소스 코드를 수정하지 않는 이상, 프로그래머는 새로운 네이티브
            함수를 추가할 수 없습니다. 또한, 네이티브 함수는 표준 라이브러리
            코드 또는 해당 Move 환경에서 필요한 기능에 사용되는 것이 의도되어
            있습니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            아마도 가장 많이 볼 수 있는 네이티브 함수는 vector와 같은 표준
            라이브러리 코드에 있을 것입니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code21} />
      </Grid>{" "}
      <Grid xs={12}>
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            함수 호출 (Calling)
          </Typography>
        </Box>
      </Grid>{" "}
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            함수를 호출할 때, 이름은 별칭(alias)이나 완전한 정규 이름(fully
            qualified name)을 통해 지정할 수 있습니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code22} />
      </Grid>{" "}
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            함수를 호출할 때는 매개변수마다 인수를 제공해야 합니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code23} />
      </Grid>{" "}
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            타입 인수는 명시적으로 지정하거나 추론될 수 있습니다. 두 가지 호출은
            동일합니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code24} />
      </Grid>{" "}
      <Grid xs={12}>
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            반환 값 (Returning Values)
          </Typography>
        </Box>
      </Grid>{" "}
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            함수의 결과, 즉 "반환 값"은 함수 본문의 마지막 값입니다. 예를 들어,
            다음과 같습니다:
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code25} />
      </Grid>{" "}
      <Grid>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            앞서 언급한 대로, 함수의 본문은 표현식 블록(expression block)입니다.
            표현식 블록은 여러 문장을 순차적으로 나열할 수 있으며, 블록의 마지막
            표현식은 해당 블록의 값이 됩니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code26} />
      </Grid>{" "}
      <Grid>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            여기서 반환 값은 double_x + double_y입니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            return 표현식 (Return Expression)
          </Typography>
        </Box>
      </Grid>{" "}
      <Grid>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            함수는 본문이 평가한 값을 암묵적으로 반환합니다. 그러나 함수는
            명시적인 return 표현식을 사용할 수도 있습니다:
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code27} />
      </Grid>{" "}
      <Grid>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            이 두 함수는 동등합니다. 약간 더 복잡한 예제에서는 함수가 두 개의
            u64 값 차감하고, 두 번째 값이 너무 크면 일찍 0을 반환합니다:
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code28} />
      </Grid>{" "}
      <Grid>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            참고로, 이 함수의 본문은 {"if (y > x) 0 else x - y"}와 같이 작성할
            수도 있습니다. 그러나 return이 정말 빛을 발하는 것은 다른 제어 흐름
            구조 내부에서 깊숙이 종료할 때입니다. 다음 예제에서는 함수가 벡터를
            반복하여 주어진 값의 인덱스를 찾습니다:
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code29} />
      </Grid>{" "}
      <Grid>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            return 키워드를 인자 없이 사용하는 것은 return ()의 약식 표현입니다.
            즉, 다음 두 함수는 동일합니다:
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code30} />
      </Grid>{" "}
      <Grid xs={12}>
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            인라인 함수(Inline functions)
          </Typography>
        </Box>
      </Grid>{" "}
      <Grid>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            인라인 함수(Inline functions)는 Move 바이트코드로 컴파일되는 대신
            호출하는 쪽에서 확장되는 함수입니다. 이는 가스를 절약하고 실행
            속도를 높일 수 있게 해줍니다. 예를 들어, 다음과 같이 인라인 함수를
            정의할 수 있습니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code31} />
      </Grid>{" "}
      <Grid>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            이제 percent(2, 200)을 호출할 때, 컴파일러는 사용자가 2 * 100 /
            200으로 작성한 것처럼 함수 정의를 인라인으로 처리합니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            함수 파라메타(Function Parameters)
          </Typography>
        </Box>
      </Grid>{" "}
      <Grid>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            인라인 함수는 함수 매개변수를 지원합니다. 이를 통해 Move에서
            일반적인 프로그래밍 패턴을 이해할 수 있는 고계 함수(higher-order
            functions)를 정의할 수 있습니다. 인라인 함수는 컴파일 시간에
            확장되므로, 함수 매개변수의 이러한 기능을 Move 바이트코드에서 직접
            지원하지 않더라도 지원할 수 있습니다. 다음은 vector 모듈에서 가져온
            다음 함수를 고려해 봅시다. 번역
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code32} />
      </Grid>{" "}
      <Grid>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            여기서 foreach는 인라인 함수입니다. 일반적으로, 함수 매개변수로는
            람다 표현식만 전달할 수 있습니다. 인라인 함수와 마찬가지로, 이러한
            람다 표현식은 호출자 측에서 확장됩니다. 예시에서와 같이 람다는
            컨텍스트 내의 변수에 접근할 수 있다는 점에 유의하세요. 예제에서는
            변수 accu에 접근하고 있습니다.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default study_1;
