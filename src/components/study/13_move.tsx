import Grid from "@mui/material/Unstable_Grid2";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Copy from "../util/copy";
const study_1 = () => {
  const code1 = `  module example::test {
    fun sum(n: u64): u64 {
        let sum = 0;
        let i = 1;
        while (i <= n) {
            sum = sum + i;
            i = i + 1
        };
    
        sum
    }

}
`;
  const code2 = `  module example::test {
    fun foo() {
        while (true) { }
    }
}
`;
  const code3 = `  module example::test {
    fun smallest_factor(n:u64):u64 {
        //입력이 0 또는 1이 아닌 것으로 가정합니다.
        let i = 2;
        while (i <=n) {
            if (n % i ==0 )break;
            i = i + +1
        }
        i
    }
}
`;
  const code4 = `  module example::test {
    fun sum_intermediate(n: u64): u64 {
        let sum = 0;
        let i = 0;
        while (i < n) {
            i = i + 1;
            if (i % 10 == 0) continue;
            sum = sum + i;
        };
    
        sum
    }
}
`;
  const code5 = `  module example::test {
    fun pop_smallest_while_not_equal(
        v1: vector<u64>,
        v2: vector<u64>,
    ): vector<u64> {
        let result = vector::empty();
        while (!vector::is_empty(&v1) && !vector::is_empty(&v2)) {
            let u1 = *vector::borrow(&v1, vector::length(&v1) - 1);
            let u2 = *vector::borrow(&v2, vector::length(&v2) - 1);
            let popped =
                if (u1 < u2) vector::pop_back(&mut v1)
                else if (u2 < u1) vector::pop_back(&mut v2)
                else break;//여기서 break는 u64 타입입니다.
            vector::push_back(&mut result, popped);
        };
    
        result
    }
    
    
}
`;
  const code6 = `  module example::test {
    fun pick(
        indexes: vector<u64>,
        v1: &vector<address>,
        v2: &vector<address>
    ): vector<address> {
        let len1 = vector::length(v1);
        let len2 = vector::length(v2);
        let result = vector::empty();
        while (!vector::is_empty(&indexes)) {
            let index = vector::pop_back(&mut indexes);
            let chosen_vector =
                if (index < len1) v1
                else if (index < len2) v2
                else continue; //continue는 &vector<address> 타입입니다
            vector::push_back(&mut result, *vector::borrow(chosen_vector, index))
        };
    
        result
    }
}
`;
  const code7 = `  module example::test {
    fun foo() {
        let i = 0;
        loop { i = i + 1 }
    }
}
`;
  const code8 = `  module example::test {
    fun sum(n: u64): u64 {
        let sum = 0;
        let i = 0;
        loop {
            i = i + 1;
            if (i > n) break;
            sum = sum + i
        };
    
        sum
    }
}
`;
  const code9 = `  module example::test {
    fun sum_intermediate(n: u64): u64 {
        let sum = 0;
        let i = 0;
        loop {
            i = i + 1;
            if (i % 10 == 0) continue;
            if (i > n) break;
            sum = sum + i
        };
    
        sum
    }
}
`;
  const code10 = `  module example::test {
    fun main(){
        let () = while (i < 10) { i = i + 1 };
    }
}
`;

  const code11 = `  module example::test {
    fun main(){
        (loop { if (i < 10) i = i + 1 else break }: ());
        let () = loop { if (i < 10) i = i + 1 else break };
    }
}
`;
  const code12 = `  module example::test {
    fun main(){
        (loop (): u64);
        (loop (): address);
        (loop (): &vector<vector<u8>>);
    }
}
`;

  return (
    <Grid container>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            While과 Loop
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            Move는 두 가지 루핑 구조를 제공합니다: while과 loop입니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            While반복문
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            while 구조는 조건(타입이 bool인 표현식)이 거짓으로 평가될 때까지
            본문(타입이 unit인 표현식)을 반복합니다. 다음은 1부터 n까지의 숫자의
            합을 계산하는 간단한 while 루프의 예입니다:
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code1} />
      </Grid>{" "}
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            무한 루프는 허용됩니다:
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code2} />
      </Grid>{" "}
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            Break
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            break 표현식은 조건이 거짓으로 평가되기 전에 루프를 종료하는 데
            사용될 수 있습니다. 예를 들어, 다음 루프는 1보다 큰 n의 가장 작은
            인수를 찾기 위해 break를 사용합니다:
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code3} />
      </Grid>{" "}
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            break 표현식은 루프 외부에서 사용할 수 없습니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            continue
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            continue 표현식은 루프의 나머지 부분을 건너뛰고 다음 반복으로
            진행합니다. 다음 예시의 루프는 숫자가 10으로 나누어떨어지지 않는
            경우를 제외하고 1부터 n까지의 합을 계산하기 위해 continue를
            사용합니다:
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code4} />
      </Grid>{" "}
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            continue 표현식은 루프 외부에서 사용할 수 없습니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            break와 continue의 유형
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            break과 continue는 실제로 임의의 타입을 가질 수 있습니다. 다음
            예제는 이러한 유연한 타입 지정이 도움이 되는 경우를 보여줍니다:
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code5} />
      </Grid>{" "}
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code6} />
      </Grid>{" "}
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            Loop 표현식
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            루프 표현식은 루프 본문(타입이 ()인 표현식)을 반복해서 실행하며,
            break를 만날 때까지 계속됩니다. break 없이 루프가 계속되면, 루프는
            영원히 계속됩니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code7} />
      </Grid>{" "}
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            다음은 루프를 사용하여 합계 함수를 작성하는 예시입니다:
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code8} />
      </Grid>{" "}
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            예상하신 대로, continue는 루프 내부에서도 사용할 수 있습니다. 이전에
            사용한 while 대신 루프를 사용하여 위의 sum_intermediate 함수를 다시
            작성해보겠습니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code9} />
      </Grid>{" "}
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            while과 loop의 타입
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            루프는 타입이 있는 표현식입니다. while 표현식은 항상 () 타입을
            가집니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code10} />
      </Grid>{" "}
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            만약 루프에 break문이 포함되어 있다면, 해당 표현식은 unit () 타입을
            갖습니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code11} />
      </Grid>{" "}
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            만약 루프에 break문이 없다면, return, abort, break, continue와
            마찬가지로 루프는 어떤 타입이든 가질 수 있습니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code12} />
      </Grid>{" "}
    </Grid>
  );
};

export default study_1;
