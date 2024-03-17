const redux = require("redux");
console.log(redux);
/*Создание Action*/
function addColor(value) {
  return {
    type: "ADD",
    color: value,
  };
}
function removeColor(value) {
  return {
    type: "REMOVE",
    color: value,
  };
}
/*Создание Reducer*/
//   function favoriteColors(state, action) {
//     if (state === undefined) {
//       state = [];
//     }
//     if (action.type === "ADD") {
//       return state.concat(action.color);
//     } else if (action.type === "REMOVE") {
//       return state.filter(function (item) {
//         return item !== action.color;
//       });
//     } else {
//       return state;
//     }
//   }

function favoriteColors(state, action) {
  if (state === undefined) {
    state = [];
  }
  switch (action.type) {
    case "ADD":
      return state.concat(action.color);

    case "REMOVE":
      return state.filter(function (item) {
        return item !== action.color;
      });
    default:
      return state;
  }
}

/*Создание хранилища store*/
var store = redux.createStore(favoriteColors);
/*Подписка  на изменения state*/
var count = 0;
store.subscribe(render);
function render() {
  console.log(`${count++} изменение ${store.getState()}`);
}
/*Добавление значений в хранилище*/
store.dispatch(addColor("blue"));
store.dispatch(addColor("green"));
store.dispatch(addColor("red"));
store.dispatch(removeColor("blue"));

console.log(store.getState());
cls;
