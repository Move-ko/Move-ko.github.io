import Grid from "@mui/material/Unstable_Grid2";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const study_1 = () => {
  return (
    <Grid container>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            Local Variables and Scope
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            Move의 지역 변수는 어휘(정적으로) 범위가 지정됩니다. 새 변수는 let
            키워드로 도입되며 동일한 이름을 가진 이전 로컬을 숨깁니다. 로컬은
            변경 가능하며 직접 업데이트하거나 변경 가능한 참조를 통해 업데이트할
            수 있습니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            Declaring Local Variables{" "}
          </Typography>
        </Box>
      </Grid>

      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            let bindings
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            이동 프로그램은 let을 사용하여 변수 이름을 값에 바인딩합니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6} sx={{ marginTop: "0px" }}>
        9_1
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            let은 로컬에 값을 바인딩하지 않고 사용할 수도 있습니다.{" "}
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6} sx={{ marginTop: "0px" }}>
        9_2
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            그런 다음 로컬에 나중에 값을 할당할 수 있습니다.{" "}
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6} sx={{ marginTop: "0px" }}>
        9_3
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            이는 기본값을 제공할 수 없을 때 루프에서 값을 추출하려고 할 때 매우
            유용할 수 있습니다.{" "}
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6} sx={{ marginTop: "0px" }}>
        9_4
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            Variables must be assigned before use{" "}
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            Move의 유형 시스템은 지역 변수가 할당되기 전에 사용되는 것을
            방지합니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6} sx={{ marginTop: "0px" }}>
        사진
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6} sx={{ marginTop: "0px" }}>
        사진
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6} sx={{ marginTop: "0px" }}>
        사진
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            Valid variable names{" "}
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            변수 이름에는 밑줄 _, 문자 a~z, 문자 A~Z, 숫자 0~9가 포함될 수
            있습니다. 변수 이름은 밑줄 _ 또는 문자 a~z로 시작해야 합니다.
            대문자로 시작할 수 없습니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6} sx={{ marginTop: "0px" }}>
        사진
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            Type annotations
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            지역 변수의 유형은 거의 항상 Move의 유형 시스템에서 유추할 수
            있습니다. 그러나 Move는 가독성, 명확성 또는 디버깅 가능성에 유용할
            수 있는 명시적 형식 주석을 허용합니다. 유형 주석을 추가하는 구문은
            다음과 같습니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6} sx={{ marginTop: "0px" }}>
        사진
      </Grid>
      <Grid xs={0} md={3}></Grid>

      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            명시적 유형 주석의 몇 가지 예:
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6} sx={{ marginTop: "0px" }}>
        사진
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            유형 주석은 항상 패턴의 오른쪽에 있어야 합니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6} sx={{ marginTop: "0px" }}>
        사진
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            When annotations are necessary
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            In some cases, a local type annotation is required if the type
            system cannot infer the type. This commonly occurs when the type
            argument for a generic type cannot be inferred. For example:{" "}
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6} sx={{ marginTop: "0px" }}>
        사진
      </Grid>

      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            In a rarer case, the type system might not be able to infer a type
            for divergent code (where all the following code is unreachable).
            Both return and abort are expressions and can have any type. A loop
            has type () if it has a break, but if there is no break out of the
            loop, it could have any type. If these types cannot be inferred, a
            type annotation is required. For example, this code:
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6} sx={{ marginTop: "0px" }}>
        사진
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            Adding type annotations to this code will expose other errors about
            dead code or unused local variables, but the example is still
            helpful for understanding this problem.
          </Typography>
        </Box>
      </Grid>

      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            Multiple declarations with tuples{" "}
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            let can introduce more than one local at a time using tuples. The
            locals declared inside the parenthesis are initialized to the
            corresponding values from the tuple.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6} sx={{ marginTop: "0px" }}>
        사진
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            The type of the expression must match the arity of the tuple pattern
            exactly.
          </Typography>
        </Box>
      </Grid>

      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6} sx={{ marginTop: "0px" }}>
        사진
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            You cannot declare more than one local with the same name in a
            single let.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6} sx={{ marginTop: "0px" }}>
        사진
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            Multiple declarations with structs{" "}
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            let can also introduce more than one local at a time when
            destructuring (or matching against) a struct. In this form, the let
            creates a set of local variables that are initialized to the values
            of the fields from a struct. The syntax looks like this:
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6} sx={{ marginTop: "0px" }}>
        사진
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6} sx={{ marginTop: "0px" }}>
        사진
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            Here is a more complicated example:
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6} sx={{ marginTop: "0px" }}>
        사진
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            Fields of structs can serve double duty, identifying the field to
            bind and the name of the variable. This is sometimes referred to as
            punning.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6} sx={{ marginTop: "0px" }}>
        사진
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            is equivalent to:
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6} sx={{ marginTop: "0px" }}>
        사진
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            As shown with tuples, you cannot declare more than one local with
            the same name in a single let.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6} sx={{ marginTop: "0px" }}>
        사진
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            Destructuring against references
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            In the examples above for structs, the bound value in the let was
            moved, destroying the struct value and binding its fields.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6} sx={{ marginTop: "0px" }}>
        사진
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6} sx={{ marginTop: "0px" }}>
        사진
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            {
              "          In this scenario the struct value T { f1: 1, f2: 2 } no longer exists after the let.If you wish instead to not move and destroy the struct value, you can borrow each of its fields. For example:"
            }
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6} sx={{ marginTop: "0px" }}>
        사진
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            And similarly with mutable references:
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6} sx={{ marginTop: "0px" }}>
        사진
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            This behavior can also work with nested structs.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6} sx={{ marginTop: "0px" }}>
        사진
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            Ignoring Values
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            In let bindings, it is often helpful to ignore some values. Local
            variables that start with _ will be ignored and not introduce a new
            variable{" "}
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6} sx={{ marginTop: "0px" }}>
        사진
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6} sx={{ marginTop: "0px" }}>
        사진
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            This can be necessary at times as the compiler will error on unused
            local variables
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6} sx={{ marginTop: "0px" }}>
        사진
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            General let grammar
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            {
              "All of the different structures in let can be combined! With that we arrive at this general grammar for let statements:let-binding → let pattern-or-list type-annotationopt initializeropt > pattern-or-list → pattern | ( pattern-list ) > pattern-list → pattern ,opt | pattern , pattern-list > type-annotation → : type initializer → = expressionThe general term for the item that introduces the bindings is a pattern. The pattern serves to both destructure data (possibly recursively) and introduce the bindings. The pattern grammar is as follows:pattern → local-variable | struct-type { field-binding-list } > field-binding-list → field-binding ,opt | field-binding , field-binding-list > field-binding → field | field : patternA few concrete examples with this grammar applied:"
            }
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6} sx={{ marginTop: "0px" }}>
        사진
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            Mutations
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            Assignments
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            After the local is introduced (either by let or as a function
            parameter), the local can be modified via an assignment:
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6} sx={{ marginTop: "0px" }}>
        사진
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            Unlike let bindings, assignments are expressions. In some languages,
            assignments return the value that was assigned, but in Move, the
            type of any assignment is always ().
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6} sx={{ marginTop: "0px" }}>
        사진
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            {
              "  Practically, assignments being expressions means that they can be used without adding a new expression block with braces ({...})."
            }
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6} sx={{ marginTop: "0px" }}>
        사진
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            The assignment uses the same pattern syntax scheme as let bindings:
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6} sx={{ marginTop: "0px" }}>
        사진
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            Note that a local variable can only have one type, so the type of
            the local cannot change between assignments.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6} sx={{ marginTop: "0px" }}>
        사진
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            Mutating through a reference
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            In addition to directly modifying a local with assignment, a local
            can be modified via a mutable reference &mut.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6} sx={{ marginTop: "0px" }}>
        사진
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            This is particularly useful if either: (1) You want to modify
            different variables depending on some condition.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6} sx={{ marginTop: "0px" }}>
        사진
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            (2) You want another function to modify your local value.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6} sx={{ marginTop: "0px" }}>
        사진
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            This sort of modification is how you modify structs and vectors!
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6} sx={{ marginTop: "0px" }}>
        사진
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            For more details, see Move references.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            Scopes
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            {
              "          Any local declared with let is available for any subsequent expression, within that scope. Scopes are declared with expression blocks, {...}.Locals cannot be used outside of the declared scope.    "
            }{" "}
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6} sx={{ marginTop: "0px" }}>
        사진
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            But, locals from an outer scope can be used in a nested scope.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6} sx={{ marginTop: "0px" }}>
        사진
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            Locals can be mutated in any scope where they are accessible. That
            mutation survives with the local, regardless of the scope that
            performed the mutation.{" "}
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6} sx={{ marginTop: "0px" }}>
        사진
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            Expression Blocks
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            An expression block is a series of statements separated by
            semicolons (;). The resulting value of an expression block is the
            value of the last expression in the block.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6} sx={{ marginTop: "0px" }}>
        사진
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            In this example, the result of the block is x + y. A statement can
            be either a let declaration or an expression. Remember that
            assignments (x = e) are expressions of type ().
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6} sx={{ marginTop: "0px" }}>
        사진
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            Function calls are another common expression of type (). Function
            calls that modify data are commonly used as statements.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6} sx={{ marginTop: "0px" }}>
        사진
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            This is not just limited to () types---any expression can be used as
            a statement in a sequence!
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6} sx={{ marginTop: "0px" }}>
        사진
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            {
              "       But! If the expression contains a resource (a value without the dropability), you will get an error. This is because Move's type systemguarantees that any value that is dropped has the drop ability.(Ownership must be transferred or the value must be explicitlydestroyed within its declaring module.)"
            }
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6} sx={{ marginTop: "0px" }}>
        사진
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            If a final expression is not present in a block---that is, if there
            is a trailing semicolon ;, there is an implicit unit () value.
            Similarly, if the expression block is empty, there is an implicit
            unit () value.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6} sx={{ marginTop: "0px" }}>
        사진
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6} sx={{ marginTop: "0px" }}>
        사진
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            An expression block is itself an expression and can be used anyplace
            an expression is used. (Note: The body of a function is also an
            expression block, but the function body cannot be replaced by
            another expression.)
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6} sx={{ marginTop: "0px" }}>
        사진
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            (The type annotation is not needed in this example and only added
            for clarity.)
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            Shadowing
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            If a let introduces a local variable with a name already in scope,
            that previous variable can no longer be accessed for the rest of
            this scope. This is called shadowing.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6} sx={{ marginTop: "0px" }}>
        사진
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            When a local is shadowed, it does not need to retain the same type
            as before.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6} sx={{ marginTop: "0px" }}>
        사진
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            After a local is shadowed, the value stored in the local still
            exists, but will no longer be accessible. This is important to keep
            in mind with values of types without the drop ability, as ownership
            of the value must be transferred by the end of the function.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6} sx={{ marginTop: "0px" }}>
        사진
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            When a local is shadowed inside a scope, the shadowing only remains
            for that scope. The shadowing is gone once that scope ends.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6} sx={{ marginTop: "0px" }}>
        사진
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            Remember, locals can change type when they are shadowed.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6} sx={{ marginTop: "0px" }}>
        사진
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            Move and Copy
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            All local variables in Move can be used in two ways, either by move
            or copy. If one or the other is not specified, the Move compiler is
            able to infer whether a copy or a move should be used. This means
            that in all of the examples above, a move or a copy would be
            inserted by the compiler. A local variable cannot be used without
            the use of move or copy. copy will likely feel the most familiar
            coming from other programming languages, as it creates a new copy of
            the value inside of the variable to use in that expression. With
            copy, the local variable can be used more than once.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6} sx={{ marginTop: "0px" }}>
        사진
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            Any value with the copy ability can be copied in this way. move
            takes the value out of the local variable without copying the data.
            After a move occurs, the local variable is unavailable.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6} sx={{ marginTop: "0px" }}>
        사진
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            Safety{" "}
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            Move's type system will prevent a value from being used after it is
            moved. This is the same safety check described in let declaration
            that prevents local variables from being used before it is assigned
            a value.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            Inference
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            As mentioned above, the Move compiler will infer a copy or move if
            one is not indicated. The algorithm for doing so is quite simple:
            Any scalar value with the copy ability is given a copy. Any
            reference (both mutable &mut and immutable &) is given a copy.
            Except under special circumstances where it is made a move for
            predictable borrow checker errors. Any other value is given a move.
            This means that even though other values might be have the copy
            ability, it must be done explicitly by the programmer. This is to
            prevent accidental copies of large data structures.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6} sx={{ marginTop: "0px" }}>
        사진
      </Grid>
      <Grid xs={0} md={3}></Grid>
    </Grid>
  );
};

export default study_1;
