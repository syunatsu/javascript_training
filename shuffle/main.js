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

const memberList = document.getElementById("memberList");

members.forEach((member) => {
  const li = document.createElement("li");
  li.textContent = `${member.position}: ${member.name}, ${member.age}歳`;
  memberList.appendChild(li);
});

const numbers = [1, 2, 3, 4, 5];
function shuffle(arrays) {
  const array = arrays.slice();
  for (let i = array.length - 1; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]]
  }
  return array
}
console.log(members)
console.log(shuffle(members));