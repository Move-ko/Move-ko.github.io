/*
ID Pointer (ID 포인터)

ID Pointer는 주요 데이터(객체)와 해당 데이터에 대한 접근자/기능을 분리하는 기술로, 후자를 원본과 연결합니다. 이 패턴은 몇 가지 다른 방식으로 사용될 수 있습니다:

공유 객체에 대한 이동 가능한 기능(예: '소유자' 필드를 변경하는 TransferCap)
동적 데이터와 정적 데이터를 분리하는 것(예: NFT와 해당 컬렉션 정보)
제네릭 애플리케이션에서 불필요한 타입 링크(와itness 요구 사항)를 피하는 것(예: LiquidityPool의 LP 토큰)
*/

module examples::lock_and_key {
    use sui::object::{Self, ID, UID};
    use sui::transfer;
    use sui::tx_context::{Self, TxContext};
    use std::option::{Self, Option};

    // Lock가 비어있을 때 오류
    const ELockIsEmpty: u64 = 0;

    // Key가 Lock와 일치하지 않을 때 오류
    const EKeyMismatch: u64 = 1;

    // Lock가 이미 내용물을 가지고 있을 때 오류
    const ELockIsFull: u64 = 2;

    // 어떤 내용물이든 저장할 수 있는 Lock
    struct Lock<T: store + key> has key {
        id: UID,
        locked: Option<T>
    }

    // Lock와 연결된 Key로 생성되며, 이동 가능하며 Lock를 열기 위해 필요한 모든 정보를 가지고 있는 Key
    struct Key<phantom T: store + key> has key, store {
        id: UID,
        for: ID,
    }

    // 주어진 Key에 대한 Lock의 ID를 반환합니다.
    public fun key_for<T: store + key>(key: &Key<T>): ID {
        key.for
    }

    // 공유 객체에 내용물을 잠그고, 해당 Lock에 대한 Key를 생성하여 트랜잭션 송신자에게 전송합니다.
    public entry fun create<T: store + key>(obj: T, ctx: &mut TxContext) {
        let id = object::new(ctx);
        let for = object::uid_to_inner(&id);

        transfer::share_object(Lock<T> {
            id,
            locked: option::some(obj),
        });

        transfer::transfer(Key<T> {
            for,
            id: object::new(ctx)
        }, tx_context::sender(ctx));
    }

    // 주어진 Key를 사용하여 Lock에 내용물을 잠근다. Lock가 비어있지 않거나 Key가 Lock와 일치하지 않으면 실패합니다.
    public entry fun lock<T: store + key>(
        obj: T,
        lock: &mut Lock<T>,
        key: &Key<T>,
    ) {
        assert!(option::is_none(&lock.locked), ELockIsFull);
        assert!(&key.for == object::borrow_id(lock), EKeyMismatch);

        option::fill(&mut lock.locked, obj);
    }

    // 주어진 Key로 Lock을 열고 내용물에 접근합니다. 다음 두 가지 조건을 만족해야만 호출할 수 있습니다:
    // - Key가 Lock와 일치해야 함
    // - Lock이 비어있지 않아야 함
    public fun unlock<T: store + key>(
        lock: &mut Lock<T>,
        key: &Key<T>,
    ) -> T {
        assert!(option::is_some(&lock.locked), ELockIsEmpty);
        assert!(&key.for == object::borrow_id(lock), EKeyMismatch);

        option::extract(&mut lock.locked)
    }

    // Lock을 열고 그 내용물을 트랜잭션 송신자에게 전송합니다.
    public fun take<T: store + key>(
        lock: &mut Lock<T>,
        key: &Key<T>,
        ctx: &mut TxContext,
    ) {
        transfer::public_transfer(unlock(lock, key), tx_context::sender(ctx))
    }
}
