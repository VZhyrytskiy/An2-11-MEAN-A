##Branch t14_developing_advanced_auth
1. Внести изменения в серверную часть:
    - auth.js
    - server.js
2. Внести изменения во фронтэнд
    - доработать auth.service.ts
    - создать интрерсептор
    - добавить навигацию.

##Branch t13_posting_to_user_feed
1. Внести изменения в серверную часть:
    Вынести отдельно функциональность по регисрации и логину пользователя
    Организовать роут auth.js
    Добавить модель Post, и API для нее
2. Внести изменения в сервис AuthService. Исправить урл.
3. Добавить компонент PostComponent, добавить роут.
4. Внести изменения в сервис API
5. Внести изменения в MessagesComponent

##Branch t12_user_profile
1. Для шифрования пароля установить bcrypt-nodejs для бекенда и изменить модель.
2. Внести изменения в server.js. 
    Добавить роут profile/:id, 
    внести изменения в модель
    внести изменения в роут login
3. Добавить ProfileComponent
4. Добавить модуль MatListModule
5. Внести изменения в ApiService
6. Добавить дополнительные поля для RegisterComponent

##Branch t11_showing_user_list
1. Внести изменения в server.js
2. Внести изменения в ApiService
3. Создать UsersComponent
4. Добавить роут users profile/:id

##Branch t10_loggin_in
1. Установить для backend пакет jwt-simple
2. Внести изменения в server.js
3. Создать AuthService, перераспределить функционал между ApiService и AuthService
4. Внести изменения в RegisterComponent, использовать AuthService
5. Создать LoginComponent
6. Добавить роут для LoginComponent

##Branch t09_create_register_view
1. Подключить модули MatToolbarModule, MatInputModule 
2. Подключить FormsModule
3. Создать RegisterComponent
4. Создать AppRoutingModule и подключить его в AppModule
5. Внести изменения в разметку AppComponent
6. Внести изменения в Apiservice

##Branch t08_create_user_w_mongo
1. Создать акаунт на mlab.com
2. Создать базу данных an5
3. Создать пользователя базы данных test с паролем test
4. Установить mongoose http://mongoosejs.com
5. Создать модель пользователя - models/user.js
6. Сделать изменения в server.js

## Branch t07_register_endpoint
1. Установить глобально пакет nodemon
2. Установить для backend пакет body-parser
3. Установить postman extension для Хром
4. Внести изменения в server.js

## Branch t06_disply_messages
1. Добавить MatCardModule в MaterialModule
2. Добавить в ApiService публичное свойтво messages
3. Создать MessagesComponent в папке components для отображения сообщений
4. Добавить MessagesComponent в разметку AppComponent
5. Очистить класс AppComponent

## Branch t05_angular_material
1. Выполнить все шаги согласно инструкции https://material.angular.io/guide/getting-started
2. Создать shared модуль MaterialModule и включить в него модуль MatButtonModule. Подключить к приложению
3. Добавить кнопку в разметку AppComponent

## Branch t04_getting_data
1. Создать модуль CoreModule и подключить в AppModule
2. Создать сервис ApiService для получения данных
3. Установить пакет cors для backend
4. В AppComponent использовать сервис и вывести данные в консоль

## Branch t03_sending_data_w_node
1. Внести изменения в server.js: отправлять данные по урлу localhost:3000/posts

## Branch t02_setup_frontend
1. Сгенерить приложение Angular, используя Angular CLI в папке frontend

## Branch t01_setup_backend
1. Создать папку backend
2. Создать package.json
3. Создать файл .gitignore 
4. Устаносить express
5. Создать простой сервер, используя express

## Branch Master
Заготовка проекта.
