module donation::test {
    use std::string::String;
    //type정의

    //error정의

    
    //프로젝트 리스트
    struct ProjectList {
        projects: vector<Project>

    }
    //프로젝트  
    struct Project {
      project_id:u64,
      project_name:String,
    }
    //itnit
    //일단 영수증
    struct Receipt {
       receipt_id: u64,
       address:address,
       content: String,
       completed: bool,
    }
    //영수증 저장
    struct ReceiptList has key{
     receipts: Table<u64, Receipt>,
     receipt_counter: u64
    }
    //회사 영수
    struct CompanyReceipt{
       company_receipt_id: u64,
       address:address,
       content: String,
       completed: bool,
    }
    //회사 영수증 목록
    struct CompanyReceiptList {
         receipts: Table<u64, CompanyReceipt>,
         receipt_counter: u64
    }

   //nft
    struct NFT {
        id:u64,
        img:String,
    }
    fun init_module(account:&signer)acquires Counter{
    let counter:u8=0;

    move_to(account, ProjectList {
      tasks: table::new(),
      set_task_event: account::new_event_handle<Task>(account),
      task_counter: 0
    });


    move_to(account, todo_list);


}
     //프로젝트 만들기
    public entry fun creat_project(account: &signer){
    let todo_list = TodoList {
      tasks: table::new(),
      set_task_event: account::new_event_handle<Task>(account),
      task_counter: 0
    };
    // TodoList 리소스를 서명자 계정 아래로 이동합니다.
    move_to(account, todo_list);
    }

    //기부하기
    public entry fun donation(buyer: &signer,organizer:address,price:u64){
        coin::transfer<CoinType>(donator, organizer, price);
       
    }


     


}