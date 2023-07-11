/*
오브젝트 디스플레이
퍼블리셔 객체를 소유한 크리에이터나 빌더는 sui::display 모듈을 사용하여 객체의 디스플레이 속성을 정의할 수 있습니다. Publisher 객체를 얻으려면 Publisher 페이지를 확인하십시오.

Display<T>는 타입 T에 대한 일련의 이름있는 템플릿을 지정하는 객체입니다 (예: 0x2::capy::Capy 타입의 경우 Display<0x2::capy::Capy>가 됩니다). 해당 타입의 모든 객체는 Sui Full Node RPC를 통해 처리되며, 일치하는 Display 정의에 따라 객체가 쿼리될 때 처리된 결과가 첨부됩니다.

*/
/*
설명
Sui Object Display는 타입의 온체인 디스플레이 구성을 오프체인으로 처리할 수 있는 템플릿 엔진입니다. 객체의 데이터를 템플릿 문자열에 대체하는 기능을 제공합니다.

설정할 수 있는 필드에는 제한이 없으며, 모든 객체 속성은 {property} 구문을 통해 액세스하여 템플릿 문자열의 일부로 삽입할 수 있습니다 (예시 참조).
*/
/*
예시
다음 Hero 모듈의 경우 "name", "id", "image_url" 속성에 따라 디스플레이가 다르게 설정됩니다. init 함수에서 정의한 템플릿은 다음과 같이 표현될 수 있습니다:
*/
{
    "name": "{name}",
    "link": "https://sui-heroes.io/hero/{id}",
    "image_url": "ipfs://{img_url}",
    "description": "A true Hero of the Sui ecosystem!",
    "project_url": "https://sui-heroes.io",
    "creator": "Unknown Sui Fan"
}

/*
 무제한의 "Sui Hero" 컬렉션 예시 - 누구든지 자유롭게 Hero를 만들 수 있습니다.
 Publisher를 초기화하는 방법과 Display<Hero> 객체를 얻는 방법을 보여줍니다.
 이는 생태계에서 타입을 설명하는 방법입니다.

*/
module example::my_hero {
    use sui::tx_context::{sender,TxContext};
    use std::string::{utf8,String};
    use sui::transfer;
    use sui::object::{Self,UID};
    // 크리에이터 번들: 이 두 개의 패키지는 종종 함께 사용됩니다.
    use sui::package;
    use sui::display;
    // 히어로 - 탁월한 디지털 아트 컬렉션입니다.
    struct Hero has key,store {
        id:UID,
        name:String,
        img_url:String.
    }
    /// 모듈에 대한 일회성 증인입니다.
    struct MY_HERO hsa drop {}
    // 모듈 이니셜라이저에서 Publisher 객체를 선언하여 Display를 생성합니다. Display는 일련의 필드로 초기화됩니다(이후 수정 가능) 그리고 update_version 호출을 통해 게시됩니다.
   // 키와 값은 이니셜라이저에서 설정되지만, Publisher 객체가 생성된 경우 게시 후에도 설정할 수 있습니다.
   
   

   fun  init(otw:MY_HERO,ctx:&mut TxContext) {
        let keys = vector[
            utf8(b"name"),
            utf8(b"link"),
            utf8(b"image_url"),
            utf8(b"description"),
            utf8(b"project_url"),
            utf8(b"creator"),
        ];
        let values = vector[
        // name에는 Hero.name 속성을 사용할 수 있습니다.
            utf8(b"{name}"),
        // link에는 id 속성을 사용하여 URL을 구성할 수 있습니다.
            utf8(b"https://sui-heroes.io/hero/{id}"),
        //image_url에는 IPFS 템플릿과 img_url 속성을 사용합니다.
            utf8(b"ipfs://{img_url}"),
        // 설명은 모든 Hero 객체에 대해 정적입니다.
            utf8(b"A true Hero of the Sui ecosystem!"),
        // 프로젝트 URL은 일반적으로 정적입니다.
            utf8(b"https://sui-heroes.io"),
        // Creator 필드는 어떤 값이든 될 수 있습니다.
            utf8(b"Unknown Sui Fan")
        ];
        // 패키지를 위해 Publisher를 선언하세요!
        let publisher = package::claim(otw,ctx);

        // Hero 타입에 대한 새로운 Display 객체를 가져옵니다.
        let display = display::new_with_fields<Hero>(
            &publisher,keys,values,ctx
        )
        // 변경 사항을 적용하기 위해 Display의 첫 번째 버전을 커밋합니다.
        display::update_version(&mut display);

        transfer::public_transfer(publisher, sender(ctx));
        transfer::public_transfer(display, sender(ctx));
      














   }
    // 누구든지 자신의 Hero를 발행할 수 있습니다!
   public fun mint(name: String, img_url: String, ctx: &mut TxContext): Hero {
        let id = object::new(ctx);
        Hero { id, name, img_url }
    }


}

/*
Display 객체는 display::new<T> 호출을 통해 생성됩니다. 이는 사용자 정의 함수(또는 모듈 이니셜라이저)에서 수행되거나 프로그래밍 가능한 트랜잭션의 일부로 수행될 수 있습니다.
*/

module sui::display {
/// T에 대한 새로운 Display 객체를 가져옵니다.
/// Publisher는 T의 발행자여야 하며, from_package 확인이 수행됩니다.
    public fun new<T>(pub: &Publisher): Display<T> { /* ... */ }
}


module sui::display {
    /// 한 번에 여러 필드를 설정합니다.
    public fun add_multiple(
        self:&mut Display,
        keys:vector<String>,
        value:vector<String>
    ){
        /*             */
    }
    // 단일 필드를 편집합니다.
     public fun edit(self:&mut Display,key:String,value:String) {/**/}

   // Display에서 키를 제거합니다.
   public fun remove(self:&mut Display,key:String){/* */}

  // Display의 버전을 업데이트하고 이벤트를 발생시킵니다.
}
/*
  변경 사항을 적용하고 T에 대한 Display를 설정하기 위해 마지막으로 update_version 호출이 필요합니다. update_version은 버전을 게시하기 위해 이벤트를 발생시키며, 풀 노드는 이를 수신하여 해당 타입의 템플릿을 가져옵니다.
  */
module sui::display {
// Display의 버전을 업데이트하고 이벤트를 발생시킵니다.
public fun update_version(self:&mut Display){/*   */}
}

