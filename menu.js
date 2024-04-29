// Создание класса с функцией-конструктором

class ObjStorageClass {
    constructor (){
        this.memory_= {}; //приватная переменная для хранения данных
    }

// Реализация методов

    addValue (key, value){
        this.memory_[key] = value;
    }

    getValue(key){
        return this.memory_[key];
    }

    deleteValue(key){
        if(!(key in this.memory_)) {
            return false
        } else {
            return delete this.memory_[key];
        }
    }

    getKeys(){
        return Object.keys(this.memory_);
    }
}

// Объект drinkStorage класса ObjStorageFunc для хранения рецептов напитков

const drinkStorage=new ObjStorageClass();

// Получение данных от пользователя при помощи кнопок (main.html), взаимодействие с хранилищем и обработка действий пользователя


// Функция addDrink для добавления информации о напитке

    function addDrink() {
        var name = prompt('Введите название напитка:');
        var alcoholic = confirm('Напиток алкогольный? (Если да, нажмите ОК, если нет, нажмите ОТМЕНА)');
        var alcoholIs=(alcoholic===true) ? "да" : "нет";
        var recipe = prompt('Введите рецепт:');
        drinkStorage.addValue(name, {alcoholIs, recipe});
    }

// Функция getDrink для получения информации о напитке

    function getDrink() {
        var name = prompt('Введите название напитка:');
        var drink = drinkStorage.getValue(name);
            if (drink) {
                alert('напиток: ' +name + '\nалкогольный: ' +drink.alcoholIs + '\nрецепт приготовления:' + '\n' +drink.recipe)
            } else {
                alert('Напиток не найден');
            }
    }

// Функция deleteDrink для удаления информации о напитке

    function deleteDrink() {
        var name = prompt('Введите название напитка:');
        var deleted = drinkStorage.deleteValue(name);
            if (deleted) {
                alert('Напиток успешно удален');
            } else {
                alert('Напиток не найден');
            }
    }

// Функция getAllDrinks для получения списка всех напитков

    function getAllDrinks() {
        var drinks = drinkStorage.getKeys();
            alert('Перечень всех напитков:\n' + drinks.join('\n'));
    }