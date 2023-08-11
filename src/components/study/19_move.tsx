import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Copy from "../util/copy";
const study_1 = () => {
  const code1 = `  module example::test {
    use <address>::<module name>;
    use <address>::<module name> as <module alias name>;
}
`;
  const code2 = `  module example::test {
    use std::vector;
    use std::vector as V;
}
`;
  const code3 = `  module examples::test {
    use std::vector;
    use std::vector as V;

    fun new_vecs(): (vector<u8>, vector<u8>, vector<u8>) {
       let v1 = std::vector::empty();
       let v2 = vector::empty();
       let v3 = V::empty();
       (v1, v2, v3)
    }
    
}
`;
  const code4 = `  module example::test {
    use <address>::<module name>::<module member>;
    use <address>::<module name>::<module member> as <member alias>;
}
`;
  const code5 = `  module example::test {
    use std::vector::empty;
    use std::vector::empty as empty_vec;
}
`;
  const code6 = `  module example::test {
    use std::vector::empty;
    use std::vector::empty as empty_vec;

    fun new_vecs(): (vector<u8>, vector<u8>, vector<u8>) {
        let v1 = std::vector::empty();
        let v2 = empty();
        let v3 = empty_vec();
        (v1, v2, v3)
    }
}
`;
  const code7 = `  module example::test {
    use <address>::<module name>::{<module member>, <module member> as <member alias> ... };
}
`;
  const code8 = `  module example::test {
    use std::vector::{push_back, length as len, pop_back};

    fun swap_last_two<T>(v: &mut vector<T>) {
        assert!(len(v) >= 2, 42);
        let last = pop_back(v);
        let second_to_last = pop_back(v);
        push_back(v, last);
        push_back(v, second_to_last)
    }
}
`;
  const code9 = `  module example::test {
    use std::vector::{Self, empty};
}
`;
  const code10 = `  module example::test {
    use std::vector;
    use std::vector as vector;
    use std::vector::Self;
    use std::vector::Self as vector;
    use std::vector::{Self};
    use std::vector::{Self as vector};
}
`;
  const code11 = `  module example::test {
    use std::vector::{
    Self,
    Self as V,
    length,
    length as len,
};

    fun pop_twice<T>(v: &mut vector<T>): (T, T) {
        // 위의 use 선언에 따른 모든 옵션 사용 가능
        assert!(vector::length(v) > 1, 42);
        assert!(V::length(v) > 1, 42);
        assert!(length(v) > 1, 42);
        assert!(len(v) > 1, 42);

        (vector::pop_back(v), vector::pop_back(v))
    }
}
`;
  const code12 = `  address 0x42 {
    module example {
        use std::vector;
    
        fun example(): vector<u8> {
            let v = empty();
            vector::push_back(&mut v, 0);
            vector::push_back(&mut v, 10);
            v
        }
    
        use std::vector::empty;
    }
    }
`;
  const code13 = `  module example::test {
    fun example(): vector<u8> {
        use std::vector::{empty, push_back};

        let v = empty();
        push_back(&mut v, 0);
        push_back(&mut v, 10);
        v
    }
}
`;
  const code14 = `  module example::test {
    fun example(): vector<u8> {
        let result = {
            use std::vector::{empty, push_back};
            let v = empty();
            push_back(&mut v, 0);
            push_back(&mut v, 10);
            v
        };
        result
    }
}
`;
  const code15 = `  module example::test {
    fun example(): vector<u8> {
    let result = {
        use std::vector::{empty, push_back};
        let v = empty();
        push_back(&mut v, 0);
        push_back(&mut v, 10);
        v
    };
    let v2 = empty(); //오류
//           ^^^^^ 바운드되지 않은 함수 'empty'
    result
}
}
`;
  const code16 = `  module example::test {
    {
    let x = 0;
    use std::vector; // 오류!
    let v = vector::empty();
}
}
`;
  const code17 = `  address 0x42 {
    module data {
        struct S {}
        const FLAG: bool = false;
        fun foo() {}
    }
    module example {
        use 0x42::data::{
            S as s, // 오류!
            FLAG as fLAG, // 오류!
            foo as FOO,  // 유효
            foo as bar, // 유효
        };
    }
    }
`;
  const code18 = `  module example::test {
    use std::vector::{empty as foo, length as foo}; // ERROR!
//                                             ^^^ 중복된 'foo'


   use std::vector::empty as bar;

   use std::vector::length as bar; // 오류!
   //                         ^^^ 중복된 'bar'

}
`;
  const code19 = `  module example::test {
    use std::vector::{empty as foo, length as foo}; // ERROR!
//                                             ^^^ 중복된 'foo'


   use std::vector::empty as bar;

   use std::vector::length as bar; // 오류!
   //                         ^^^ 중복된 'bar'

}
`;
  const code20 = `  address 0x42 {
    module example {
    
        struct WrappedVector { vec: vector<u64> }
    
        fun empty(): WrappedVector {
            WrappedVector { vec: std::vector::empty() }
        }
    
        fun example1(): (WrappedVector, WrappedVector) {
            let vec = {
                use std::vector::{empty, push_back};
                // 'empty'는 이제 std::vector::empty을 가리킵니다.
    
                let v = empty();
                push_back(&mut v, 0);
                push_back(&mut v, 1);
                push_back(&mut v, 10);
                v
            };
            // 'empty'는 이제 Self::empty을 가리킵니다.
            (empty(), WrappedVector { vec })
        }
    
        fun example2(): (WrappedVector, WrappedVector) {
            use std::vector::{empty, push_back};
            let w: WrappedVector = {
                use 0x42::example::empty;
                empty()
            };
            push_back(&mut w.vec, 0);
            push_back(&mut w.vec, 1);
            push_back(&mut w.vec, 10);
    
            let vec = empty();
            push_back(&mut vec, 0);
            push_back(&mut vec, 1);
            push_back(&mut vec, 10);
    
            (w, WrappedVector { vec })
        }
    }
    }
`;
  const code21 = `  module example::test {
    use std::vector::{empty, push_back}; // ERROR!
    //                       ^^^^^^^^^ 사용되지 않은 별칭 'push_back'

    fun example(): vector<u8> {
        empty()
    }
}
`;

  return (
    <Grid container>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            용도 및 별칭(Uses and Aliases )
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            use 문법을 사용하여 다른 모듈의 멤버에 대한 별칭을 생성할 수
            있습니다. use는 모듈 전체 또는 특정 표현식 블록 범위에 대해 지속되는
            별칭을 생성하는 데 사용할 수 있습니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            통사론(Syntax)
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            use 문법에는 여러 가지 다른 구문이 있습니다. 가장 간단한 것부터
            시작하여 다른 모듈에 대한 별칭을 생성하는 다음과 같은 구문이
            있습니다.
          </Typography>
        </Box>
        <Copy code={code1} />
        <Copy code={code2} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            use std::vector;는 std::vector에 대한 별칭으로서 vector를
            도입합니다. 이는 스코프 내에서 사용할 때 std::vector 대신에 vector를
            사용할 수 있다는 의미입니다. use std::vector;는 use std::vector as
            vector;와 동일합니다. 마찬가지로 use std::vector as V;는 std::vector
            대신 V를 사용할 수 있게 합니다.
          </Typography>
        </Box>
        <Copy code={code3} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            만약 특정한 모듈 멤버(함수, 구조체, 상수 등)를 가져오고 싶다면
            다음과 같은 구문을 사용할 수 있습니다.
          </Typography>
        </Box>
        <Copy code={code4} />
        <Copy code={code5} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            이렇게 하면 std::vector::empty 함수를 완전한 한정 없이 사용할 수
            있습니다. 대신 각각 empty와 empty_vec을 사용할 수 있습니다. 다시
            말하면, use std::vector::empty;는 use std::vector::empty as empty;와
            동일합니다.
          </Typography>
        </Box>
        <Copy code={code6} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            한 번에 여러 모듈 멤버에 대한 별칭을 추가하려면 다음과 같은 구문을
            사용할 수 있습니다.
          </Typography>
        </Box>
        <Copy code={code7} />
        <Copy code={code8} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            모듈 멤버에 별칭을 추가하는 것 외에도 모듈 자체에 별칭을 추가해야 할
            경우, Self를 사용하여 단일 use문에서 수행할 수 있습니다
          </Typography>
        </Box>
        <Copy code={code9} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            명확하게 하기 위해, 다음은 모두 동등한 표현입니다:
          </Typography>
        </Box>
        <Copy code={code10} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            필요한 경우, 어떤 항목에 대해 원하는 만큼의 별칭을 가질 수 있습니다.
          </Typography>
        </Box>
        <Copy code={code11} />
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            모듈의 내부
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            모듈 내부에서는 사용 선언의 순서에 관계없이 모든 use 선언을 사용할
            수 있습니다.
          </Typography>
        </Box>
        <Copy code={code12} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            모듈 내에서 use로 선언된 별칭은 해당 모듈 내에서 사용할 수 있습니다.
            또한, 도입된 별칭은 다른 모듈 멤버와 충돌하지 않아야 합니다. 자세한
            내용은 "고유성(Uniqueness)"을 참조하십시오.
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            표현식 내부
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            use 선언을 어떤 표현식 블록의 시작 부분에 추가할 수 있습니다.
          </Typography>
        </Box>
        <Copy code={code13} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            let과 마찬가지로, 표현식 블록에서 use로 도입된 별칭은 해당 블록의
            끝에서 제거됩니다.
          </Typography>
        </Box>
        <Copy code={code14} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            블록이 끝난 후에 별칭을 사용하려고 시도하면 오류가 발생합니다.
          </Typography>
        </Box>
        <Copy code={code15} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            use 문은 블록 내에서 첫 번째 항목이어야 합니다. use 문이 표현식이나
            let 문 뒤에 나오면 구문 분석 오류가 발생합니다.
          </Typography>
        </Box>
        <Copy code={code16} />
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            이름 지정 규칙
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            별칭은 다른 모듈 멤버와 동일한 규칙을 따라야 합니다. 즉, 구조체나
            상수에 대한 별칭은 A부터 Z로 시작해야 합니다.
          </Typography>
        </Box>
        <Copy code={code17} />
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            고유성{" "}
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            주어진 스코프 내에서 use 선언에 의해 도입된 모든 별칭은 고유해야
            합니다. 모듈의 경우, use에 의해 도입된 별칭은 서로 겹치지 않아야
            합니다.
          </Typography>
        </Box>
        <Copy code={code18} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            또한, 모듈의 다른 멤버와도 겹치지 않아야 합니다.
          </Typography>
        </Box>
        <Copy code={code19} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            표현식 블록 내에서는 별칭끼리 겹치면 안 되지만, 외부 스코프에서의
            다른 별칭이나 이름을 가려서 사용할 수 있습니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            Shadowing
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            표현식 블록 내에서 사용된 use 별칭은 외부 스코프의 이름(모듈 멤버
            또는 별칭)을 가려서 사용할 수 있습니다. 로컬 변수의 가려짐과
            마찬가지로, 가려짐은 표현식 블록의 끝에서 끝납니다.
          </Typography>
        </Box>
        <Copy code={code20} />
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            사용되지 않은 use 문 또는 별칭
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            사용되지 않는 use 문은 오류를 발생시킵니다.
          </Typography>
        </Box>
        <Copy code={code21} />
      </Grid>
    </Grid>
  );
};

export default study_1;
