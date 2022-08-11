# Сайт-портфолио с галереей (тестовое задание).

Сделать верстку макета с помощью React для десктопа и мобильных устройств.

![Иллюстрация к проекту](https://github.com/teplospbru/test-task-11/blob/main/agency-portfolio-3.png)


## ТРЕБОВАНИЯ К ВЁРСТКЕ

+ Не использовать плагины галереи или подобные, которые сделают за вас основную задачу.
+ Использовать Flexbox модель (и Grid по желанию) для вёрстки.
+ При изменении размера ширины экрана десктопный вариант должен заменяться мобильным и наоборот.
+ Мобильная верстка должна отображаться при ширине менее 1040 px.
+ Десктопный вариант тянется по ширине максимум для отображения 4 колонок, после этого контент не тянется, увеличиваются только отступы по краям.


## ОПИСАНИЕ API

+ Требований к тому откуда будет загружен объект с картинками и именами нет, это может быть прописано локально в коде, может загружаться удалённо из БД, это по желанию.


## ОПИСАНИЕ ПРИЛОЖЕНИЯ

+ При выборе категории отображаются только картинки этой категории, при выборе "Show all" отобразить все картинки.
+ Нажатие кнопки "Load more" подгружает еще 9 картинок (можно тех же самых, но с другими названиями, например просто добавить двойку).
+ Для десктопа сделать возможность выбрать картинку нажав на нее, такая картинка должна иметь подсветку зелёным цветом, как в макете. Повторное нажатие убирает подсветку.
+ На десктопе, если есть выбранная картинка, при нажатии кнопки "Del" картинка должна удаляться. После чего она не должна больше отображаться в том числе при переключении категорий.
+ Нажатие на метку категории внутри картинки - так же должно переключать отображения категории.


## ТЕСТИРОВАНИЕ ПРИЛОЖЕНИЯ

Приложение оттестировано при помощи [React Testing Library](https://testing-library.com/)


### Запуск приложения 

Приложение запускается скриптом`npm run start` из консоли. Приложение откроется в браузере по адресу [http://localhost:3000](http://localhost:3000) 


### Запуск тестов 

Тесты запускаются скриптом`npm run test` из консоли.


### Развёрнутое приложение

Увидеть работу приложения можно [здесь](https://teplospbru.github.io/agency-portfolio/).