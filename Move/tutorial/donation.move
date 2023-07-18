module donation::test {

    //프로젝트 리스트
    struct ProjectList {
       
    }
    //프로젝트
    struct Project {

    }
    //itnit
    fun init_module(account:&signer)acquires Counter{
    let counter:u8=0;

    move_to(account, TodoList {
      tasks: table::new(),
      set_task_event: account::new_event_handle<Task>(account),
      task_counter: 0
    });

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


  //transfer


}