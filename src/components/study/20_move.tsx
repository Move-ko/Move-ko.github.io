import Grid from "@mui/material/Unstable_Grid2";
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

  return (
    <Grid container>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            Friends{" "}
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            friend 문법은 현재 모듈에서 신뢰할 수 있는 모듈을 선언하는 데
            사용됩니다. 신뢰할 수 있는 모듈은 현재 모듈에서 public(friend)
            가시성을 가진 모든 함수를 호출할 수 있습니다. 함수의 가시성에 대한
            자세한 내용은 Functions 섹션의 가시성을 참조하십시오.
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            친구 선언 (Friend declaration)
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            모듈은 friend 선언문을 통해 다른 모듈을 친구로 선언할 수 있습니다.
            이는 다음과 같은 형식으로 사용됩니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            - friend address::name - 아래 예시와 같이 완전한 모듈 이름을 사용한
            친구 선언, 또는
          </Typography>
        </Box>
        <Copy code={code1} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            - friend {"<module-name-alias>"} - use 문을 통해 도입된 모듈 이름
            별칭을 사용한 친구 선언입니다.
          </Typography>
        </Box>
        <Copy code={code2} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            한 모듈은 여러 개의 친구 선언을 가질 수 있으며, 모든 친구 모듈의
            합집합은 친구 목록을 형성합니다. 아래 예시에서는 0x42::B와 0x42::C가
            0x42::A의 친구로 간주됩니다.
          </Typography>
        </Box>
        <Copy code={code3} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            use 문과는 달리, friend는 표현식 블록 범위가 아닌 모듈 범위에서만
            선언할 수 있습니다. friend 선언은 use, function, struct 등의 최상위
            구조가 허용되는 위치에 배치할 수 있습니다. 그러나 가독성을 위해
            friend 선언을 모듈 정의의 시작 부근에 배치하는 것이 권장됩니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            친구 개념은 Move 스크립트에 적용되지 않습니다: Move 스크립트는
            스크립트에서 정의된 함수를 호출하는 메커니즘이 없으므로 스크립트는
            친구 모듈을 선언할 수 없습니다. Move 모듈도 스크립트를 친구로 선언할
            수 없습니다. 스크립트는 일회성의 코드 조각이며 전역 저장소에
            게시되지 않기 때문입니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            친구 선언 규칙
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            친구 선언은 다음 규칙에 따릅니다: 모듈은 자신을 친구로 선언할 수
            없습니다.
          </Typography>
        </Box>
        <Copy code={code4} />

        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            친구 모듈은 컴파일러에서 알고 있어야 합니다.
          </Typography>
        </Box>
        <Copy code={code5} />

        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            친구 모듈은 동일한 계정 주소 내에 있어야 합니다. (참고: 이는
            기술적인 요구사항이 아닌 정책 결정으로, 나중에 완화될 수 있습니다.)
          </Typography>
        </Box>
        <Copy code={code6} />

        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            친구 관계에서는 순환 모듈 종속성을 생성할 수 없습니다. 친구
            관계에서는 순환 사이클을 허용하지 않습니다. 예를 들어, 0x2::a가
            0x2::b를 친구로 선언하고, 0x2::b가 0x2::c를 친구로 선언하고,
            0x2::c가 다시 0x2::a를 친구로 선언하는 관계는 허용되지 않습니다.
            일반적으로, 친구 모듈을 선언하면 친구 모듈은 현재 모듈에 대한
            종속성이 추가됩니다 (친구가 현재 모듈의 함수를 호출하는 것이
            목적이기 때문입니다). 만약 해당 친구 모듈이 이미 직접적으로나
            간접적으로 사용되고 있다면, 종속성의 순환 사이클이 생성됩니다.
          </Typography>
        </Box>
        <Copy code={code7} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            한 모듈의 친구 목록에는 중복된 항목이 포함될 수 없습니다.
          </Typography>
        </Box>
        <Copy code={code8} />
      </Grid>
    </Grid>
  );
};

export default study_1;
