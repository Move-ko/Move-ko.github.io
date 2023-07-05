import Grid from "@mui/material/Unstable_Grid2";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Copy from "../util/copy";
const study_1 = () => {
  const code1 = `  module example::test {
    fun main(){
        abort 42
    }
}
`;
  const code2 = `  module example::test {
    use std::vector;
    fun pop_twice<T>(v:&mut vector<T>):(T,T){
        if (vector::length(v)<2)abort 42;

        (vector::pop_back(v),vector::pop_back(v))
    }
}
`;
  const code3 = `  module example::test {
    use std::vector;
    fun check_vec(v:&vector<u64>,bound:u64){
        let i = 0;
        let n = vector::length(v);
        while (i < n){
            let cur = *vector::borrow(v,i);
            if (cur>bound)abort 42;
            i = i+1;
        }
    }
}
`;
  const code4 = `  module exmaple::test {
    fun main(){
      assert!(condition: bool, code: u64)
    }
}
`;
  const code5 = `  module example::test {
    fun main(){
        if (continue) () else abort code
    }
}
`;
  const code6 = `  module example::test {
    use std::vector;
    fun pop_twice<T>(v:&mut vector<T>):(T,T){
        assert!(vector::length(v) >= 2,42);//이제 'assert'를 사용합니다.

        (vector::pop_back(v),vector::pop_back(v))                
    }
}
`;
  const code7 = `  module example::test {
    use std::vector;
    fun check_vec(v:&vector<u64>,bound:u64){
        let i = 0;
        let n = vector::length(v);
        while (i < n){
            let cur = *vector::borrow(v,i);
            assert!(cur <= bound ,42);//
            i = i + 1;
        }
    }
}
`;

  const code8 = `   assert!(true,1/0)`;
  const code9 = `if (true) () else (1/0)`;
  const code10 = `   address 0x42 {
    module example {
        public fun aborts(){
            abort 42
        }
    }
}

script {
    fun always_abort() {
        0x2::example::aborts()
    }
}
`;
  const code11 = `   address 0x42 {
    module example {
        use std::vector;

        const EMPTY_VECTOR : u64 = 0;
        const INDEX_OUT_OF_BOUNDES:u64  = 1;

        // move i to j, move j to k, move k to i
        public fun rotate_three<T>(v:&mut vector<T>,i:u64,j:u64,k:u64){
            let n = vector::length(v);
            assert!(n>0,EMPTY_VECTOR);
            assert!(i<n,INDEX_OUT_OF_BOUNDES);
            assert!(j<n,INDEX_OUT_OF_BOUNDES);
            assert!(k<n,INDEX_OUT_OF_BOUNDES);

            vector::swap(v, i, k);
            vector::swap(v, j, k);
        }

        public fun remove_twice<T>(v:&mut vector<T>,i:u64,j:u74):(T,T){
           let n = vector::length(v); 
           assert!(n>0,EMPTY_VECTOR);
           assert!(i<n,INDEX_OUT_OF_BOUNDES);
           assert!(j<n,INDEX_OUT_OF_BOUNDES);
           assert!(i>j,INDEX_OUT_OF_BOUNDES);
           
           (vector::remove<T>(v,i),vector::remove<T>(v,j))
        }
    } 
}
`;
  const code12 = `   module example::test {
    fun main(){
        let y:address = abort 0;
    }
}
`;
  const code13 = `   module example::test {
    fun main(){
        let b = 
             if(x==0)false
             else if (x==1)true
             else abort 42;
               // ^^^^^^^^ abort 42의 타입은 bool입니다.
    }
}
`;
  return (
    <Grid container>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            Abort와 Assert
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            return과 abort는 실행을 종료하는 두 개의 제어 흐름 구조입니다.
            return은 현재 함수의 실행을 종료하고, abort는 전체 트랜잭션을
            종료합니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            Abort
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            abort는 하나의 인수를 받는 표현식으로, u64 타입의 중단 코드를
            의미합니다. 예를 들어:
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code1} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            abort 표현식은 현재 함수의 실행을 중단하고, 현재 트랜잭션에 의해
            전역 상태에 가해진 모든 변경 사항을 되돌립니다. abort를
            "catch"하거나 다른 방식으로 처리하는 메커니즘은 존재하지 않습니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            다행히도 Move에서는 트랜잭션은 "모두 또는 아무것도"의 원칙을 따르며,
            트랜잭션이 성공한 경우에만 전역 스토리지에 대한 모든 변경 사항이 한
            번에 이루어집니다. 이러한 트랜잭션의 변경 사항 커밋 기능으로 인해,
            중단된 후에는 변경 사항을 되돌리는 작업에 대해 걱정할 필요가
            없습니다. 이 접근 방식은 유연성이 부족하지만 매우 간단하고 예측
            가능합니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            abort는 return과 유사하게, 어떤 조건을 충족시킬 수 없을 때 제어
            흐름을 종료하는 데 유용합니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            이 예제에서는 함수가 벡터에서 두 개의 항목을 꺼내오지만, 벡터에 두
            개의 항목이 없는 경우에는 중간에 실행을 중단할 것입니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code2} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            이는 제어 흐름 구조 내부에서 더욱 유용합니다. 예를 들어, 이 함수는
            벡터 내의 모든 숫자가 지정된 한계 값보다 작은지 확인하고, 그렇지
            않은 경우 중단합니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code3} />
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            Assert
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            assert는 Move 컴파일러에서 제공하는 내장 매크로와 유사한 연산입니다.
            assert는 두 개의 인자를 받습니다. 첫 번째는 bool 타입의
            조건(condition)이고, 두 번째는 u64 타입의 코드(code)입니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code4} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            assert는 매크로로 구현되어 있기 때문에 호출 시에는 느낌표(!)를
            사용해야 합니다. 이는 assert의 인자가 표현식으로 호출되는 것을
            나타내기 위한 것입니다. 다시 말해, assert는 일반적인 함수가 아니며
            바이트코드 수준에서 존재하지 않습니다. 컴파일러 내부에서 번역되어
            처리됩니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code5} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            assert는 abort 단독으로 사용되는 것보다 더 일반적으로 사용됩니다.
            위의 abort 예제들은 assert를 사용하여 다시 작성할 수 있습니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code6} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            and
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code7} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            주의할 점은 해당 작업이 이렇게 if-else로 대체되기 때문에 코드의
            인자가 항상 평가되지는 않는다는 것입니다. 예를 들어:
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code8} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            산술 오류가 발생하지 않으며, 다음과 동등합니다:
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code9} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            따라서 산술식은 평가되지 않습니다!
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            Move VM에서의 중단 코드
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            abort를 사용할 때는 u64 코드가 VM에서 어떻게 사용되는지 이해하는
            것이 중요합니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            일반적으로 성공적인 실행 후에 Move VM은 전역 스토리지에 대한 변경
            사항(리소스 추가/제거, 기존 리소스 업데이트 등)에 대한 변경 세트를
            생성합니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            중단(abort)이 발생하는 경우 VM은 오류를 나타내며, 해당 오류에는 두
            가지 정보가 포함됩니다:
          </Typography>
        </Box>
      </Grid>

      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            &emsp; &emsp; ⇥&emsp;발생한 중단(abort)을 생성한 모듈(주소와 이름)
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            &emsp; &emsp; ⇥&emsp;중단 코드
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code10} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            만약 위에서 언급한 스크립트인 always_aborts와 같은 트랜잭션이
            0x2::example::aborts를 호출하면, VM은 모듈 0x2::example과 코드 42를
            나타내는 오류를 생성합니다. 이는 모듈 내에서 여러 중단(abort)을
            그룹화하는 데 유용할 수 있습니다. 이 예시에서는 모듈에 두 개의 별도
            오류 코드가 있으며, 여러 함수에서 사용됩니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code11} />
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            중단(abort)의 종류
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            abort 식은 어떤 타입이든 가질 수 있습니다! 이는 두 개의 구조 모두
            일반적인 제어 흐름을 탈출하기 때문에 해당 타입의 값을 평가할 필요가
            없기 때문입니다. 다음은 유용하지는 않지만 타입 체크를 통과할
            것입니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code12} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            이 동작은 가지 분기 지시문에서 일부 분기에서 값이 생성되지만 다른
            분기에서는 생성되지 않는 상황에서 유용할 수 있습니다. 예를 들어:
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code13} />
      </Grid>
    </Grid>
  );
};

export default study_1;
