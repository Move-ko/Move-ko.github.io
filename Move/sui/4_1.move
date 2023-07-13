module examples::devnet_nft {
    use sui::url::{Self,Url};
    use std::string;
    use sui::object::{Self,ID,UID};
    use sui::event;
    use sui::transfer;
    use sui::tx_context::{Self,TxCotext};
    /// 누구나 발행할 수 있는 예제 NFT
    struct DevNetNFT has key,store {
        id:UID,
        /// 토큰의 이름
        name:string::String,
         /// 토큰의 설명
        description:string::String,
         /// 토큰의 URL
        url:Url,
        // TODO: 사용자 정의 속성 허용

    }
     // ===== 이벤트 =====
    struct NFTMinted has copy,drop {
        // NFT의 개체 ID
        object_id:ID,
        // NFT의 생성자
        creator:address,
        // NFT의 이름
        name:string::String,
    }
    // ===== 공개 뷰 함수 =====

    /// NFT의 `name` 가져오기
    public fun name(nft:&DevNetNFT):&string::String {
        &nft.name
    }
    
    /// NFT의 `description` 가져오기
    public fun description(nft:&DevNetNFT):&string::String {
        &nft.description
    }
    /// NFT의 `url` 가져오기
    public fun url(nft:&DevNetNFT):&Url {
        &nft.url
    }
    // ===== 엔트리포인트 =====

    /// 새로운 DevNetNFT 생성

    public entry fun mint_to_sender(
        name:vector<u8>,
        description:vector<u8>,
        url:vector<u8>,
        ctx:&mut TxCotext
    ){
        let sender= tx_context::sender(ctx);
        let nft= DevNetNFT {
            id:object::new(ctx),
            name:string::utf8(name),
            description:string::utf8(description),
            url:url::new_unsafe_from_bytes(url)
        };

        event::emit(NFTMinted {
            object_id:object::id(&nft),
            creator:sender,
            name:nft.name,
        });
        transfer::public_transfer(nft,sender);
    }
     /// `nft`를 `recipient`에게 전송
    public entry fun transfer(
        nft:DevNetNFT,recipient:address,_:&mut TxCotext
    ){
        transfer::public_transfer(nft,recipient)
    }
    /// `nft`의 `description`을 `new_description`으로 업데이트
    public entry fun update_description(
        nft:&,ut DevNetNFT,
        new_description:vector<u8>,
        _:&mut TxCotext
    ){
        nft.description= string::utf8(new_description)
    }

    /// `nft`를 영구적으로 삭제
    public entry fun burn(nft:DevNetNFT,_:&mut TxCotext){
        let DevNetNFT{id,name:_,decreases:_,url:_}= nft;
        object::delete(id)
    }
}