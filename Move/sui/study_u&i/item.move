/*게임에서 동적 NFT가 중요한 이유
- 기존 NFT는 일단 생성되면 변경불가능
- 동적NFT는 외부 입력에 따라 값을 변경하도록 프로그래밍 댐
- 게임에서 동적 NFT를 사용하면 프로그램이 진행하면서 사용자의 기여도에 따라 사용자 항목의 속성을 더욱 강하게 만들수 있음
- SUI의 빠른 속도는 빠르게 진행되는 게임에서 NFT의 실시간 변경을 허용
- 또한 완전한 온체인 NFT에 대한 SUI의 포괄적인 지원은 게임 어플리케이션에서 큰 이점을 제공
*/



module examples::item {
    use sui::url::{Self,Url};
    use std::string;
    use sui::object::{Self, ID, UID};
    use sui::event;
    use sui::transfer;
    use sui::tx_context::{Self, TxContext};
    use std::option::{Self, Option};
    use sui::dynamic_object_field;
    use sui::ecvrf;
    use std::vector;


    //NFT
    struct Item has key,store {
        id:UID,
        name:string::String,
        description: string::String,
        url: Url,
        //사용자 정의 속성
        itemType:u8,
        level:u8
    }
    
    struct OwnerShip has key {
        id:UID
    }
   //위탁 대상
    struct ConsignedObj has key,store {
        id:UID,
        sender,address,
        item_axe:Option<ID>,
        item_scroll:Option<ID>,
    } 
     fun init(ctx:&mut TxContext) {
        let ownership =OwnerShip {
            id:object::new(ctx)
        }
      //소유권 배포자한테  
    transfer::transfer(ownership,tx_context::sender(ctx))
     }
     //====에러코드=============
     const ENotVerified:u64= 0;
     const EItemType:u64 = 1;
     const EItemLevel:u64 = 2;
    

    struct ItemMinted has copy,drop {
        object_id:ID,
        creator:address,
        name:string::String,
    }




    struct ItemUpgrade has copy,drop {
       object_id:ID,
       creator:address,
       name:string::String,
       level:u8
    }

    struct VerifiedEvent has copy,drop {
        is_verified:bool,
    }


    public fun name(item:&Item):&string::String {
        &item.name
    }

    public fun description(item: &Item): &string::String {
        &item.description
    }
    
    public fun url(item: &Item): &Url {
        &item.url
    }

    public fun item_typel(item: &Item): &u8 {
        &item.itemType
    }

    public fun level(item: &Item): &u8 {
        &item.level
    }

    fun mint_internal(
        name: vector<u8>,
        description: vector<u8>,
        url: vector<u8>,
        itemType: u8,
        level: u8,
        ctx: &mut TxContext,

    ){
        let item = Item {
            id: object::new(ctx),
            name:  string::utf8(name),
            description:  string::utf8(description),
            url: url::new_unsafe_from_bytes(url),
            itemType: itemType,
            level: level,
        };

        event::emit(ItemMinted {
            object_id: object::id(&item),
            creator: tx_context::sender(ctx),
            name: item.name,
        });

        transfer::public_transfer(item, tx_context::sender(ctx));
    }




        public entry fun buy(
        itemType: u8,
        ctx: &mut TxContext
    ) {
        if (itemType == 0) {
            let name = b"axe";
            let desc = b"axe";
            let url = b"https://";
            mint_internal(name, desc, url, itemType, 0, ctx);
        };
        if (itemType == 1) {
            let name = b"scroll 1";
            let desc = b"scroll 1";
            let url = b"https://";
            mint_internal(name, desc, url, itemType, 3, ctx);
        };
        if (itemType == 2) {
            let name = b"scroll 2";
            let desc = b"scroll 2";
            let url = b"https://";
            mint_internal(name, desc, url, itemType, 6, ctx);
        };
        if (itemType == 3) {
            let name = b"scroll 3";
            let desc = b"scroll 3";
            let url = b"https://";
            mint_internal(name, desc, url, itemType, 9, ctx);
        };
    }
        public entry fun mint(
        _: &Ownership,
        name: vector<u8>,
        description: vector<u8>,
        url: vector<u8>,
        itemType: u8,
        recipient: address,
        ctx: &mut TxContext
    ) {
        let sender = tx_context::sender(ctx);
        let item = Item {
            id: object::new(ctx),
            name: string::utf8(name),
            description: string::utf8(description),
            url: url::new_unsafe_from_bytes(url),
            itemType: itemType,
            level: 0
        };

        event::emit(ItemMinted {
            object_id: object::id(&item),
            creator: sender,
            name: item.name,
        });

        transfer::public_transfer(item, recipient);
    }

        public entry fun transfer(
        item: Item, recipient: address, _: &mut TxContext
    ) {
        transfer::public_transfer(item, recipient)
    }


       public entry fun create(
        third_party: address,
        item_axe: Item,
        item_scroll: Item,
        ctx: &mut TxContext
    ) {
        assert!(item_axe.itemType == 0 && item_scroll.itemType != 0, EItemType);
        assert!(item_axe.level < 255 && item_scroll.level > 0, EItemLevel);

        let sender = tx_context::sender(ctx);
        let consigned = ConsignedObj { id: object::new(ctx), item_axe: option::none(), item_scroll: option::none(), sender: sender };
            
        option::fill(&mut consigned.item_axe, object::id(&item_axe));
        dynamic_object_field::add(&mut consigned.id, 0, item_axe);

        option::fill(&mut consigned.item_scroll, object::id(&item_scroll));
        dynamic_object_field::add(&mut consigned.id, 1, item_scroll);

        // consign the object with the trusted third party
        transfer::public_transfer(consigned, third_party);
    }
    public entry fun upgrade_level(_: &Ownership, obj: ConsignedObj, output: vector<u8>, input: vector<u8>, public_key: vector<u8>, proof: vector<u8>, ctx: &mut TxContext) {
        let verified = ecvrf::ecvrf_verify(&output, &input, &public_key, &proof);
        event::emit(VerifiedEvent {is_verified: verified});

        assert!(!verified, ENotVerified);

        let third_party = tx_context::sender(ctx);
        let ConsignedObj {
            id: id,
            sender: sender,
            item_axe: temp_a,
            item_scroll: temp_b,
        } = obj;

        let item_axe: Item = dynamic_object_field::remove(&mut id, 0);
        let item_axe_id = option::extract(&mut temp_a);
        assert!(object::id(&item_axe) == item_axe_id, 0);

        let item_scroll: Item = dynamic_object_field::remove(&mut id, 1);
        let item_scroll_id = option::extract(&mut temp_b);
        assert!(object::id(&item_scroll) == item_scroll_id, 0);

        assert!(item_axe.itemType == 0 && item_scroll.itemType != 0, EItemType);
        assert!(item_axe.level < 255 && item_scroll.level > 0, EItemLevel);

        let popedOutput = vector::pop_back(&mut output);
        let bonus: u8 = if (popedOutput > 128) { 1 } else { 0 };

        item_axe.level = item_axe.level + item_scroll.level + bonus;
        
        event::emit(ItemUpgrade {
            object_id: item_axe_id,
            creator: third_party,
            name: item_axe.name,
            level: item_axe.level,
        });

        object::delete(id);
        transfer::public_transfer(item_axe, sender);
        burn(item_scroll, ctx);
    }

    /// Permanently delete `Item`
    public entry fun burn(item: Item, _: &mut TxContext) {
        let Item { id, name: _, description: _, url: _, itemType: _, level : _, } = item;
        object::delete(id)
    }
}