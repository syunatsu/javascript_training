const members = [
  {
    position: '一般社員', 
    name: '渡辺',
    age: 23
  },
  {
    position: '社長', 
    name: '佐藤',
    age: 45
  },
  {
    position: '課長', 
    name: '高橋',
    age: 35
  },
  {
    position: '部長', 
    name: '鈴木',
    age: 48
  },
  {
    position: '係長', 
    name: '田中',
    age: 36
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

const positionOrder = ['社長', '部長', '課長', '係長', '一般社員'],
      sortData = members.sort((x, y) => {
        return positionOrder.indexOf(x.position) - positionOrder.indexOf(y.position);
      })

//sort

sortData.forEach((member) => {
  const list = document.createElement("li");
  list.textContent = `${member.position}: ${member.name}, ${member.age}歳`;
  afterProcessingList.appendChild(list);
})

// 文字コード順に並べるなら引数はいらない
// const text = ['お', 'え', 'う', 'い', 'あ'];
// console.log(text.sort());