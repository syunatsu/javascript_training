const members = [
  {
    position: '社長', 
    name: '佐藤',
    age: 45
  },
  {
    position: '部長', 
    name: '鈴木',
    age: 38
  },
  {
    position: '課長', 
    name: '高橋',
    age: 35
  },
  {
    position: '係長', 
    name: '田中',
    age: 30
  },
  {
    position: '一般社員', 
    name: '渡辺',
    age: 23
  },
  {
    position: '一般社員', 
    name: '伊藤',
    age: 22
  },
];

const memberList = document.getElementById("memberList"),
      afterProcessingList = document.getElementById("afterProcessingList");

members.forEach((member) => {
  const li = document.createElement("li");
  li.textContent = `${member.position}: ${member.name}, ${member.age}歳`;
  memberList.appendChild(li);
});

// splice
// 削除
// members.splice(3)
// members.splice(3, 2)

// 挿入
// members.splice(1, 0, 
//   {
//     position: '一般社員',
//     name: '山本',
//     age: 28
//   },
//   {
//     position: '一般社員',
//     name: '中村',
//     age: 44
//   }
// )

//差し替え
members.splice(1, 2, 
  {
    position: '一般社員',
    name: '山本',
    age: 28
  },
  {
        position: '一般社員',
        name: '中村',
        age: 44
  }
)

members.forEach((member) => {
  const li = document.createElement("li");
  li.textContent = `${member.position}: ${member.name}, ${member.age}歳`;
  afterProcessingList.appendChild(li);
});