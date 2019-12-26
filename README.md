## сборка Gulp v.4 + Less (шаблон структуры проекта)

| .gitignore    (список что будет игнорироваться git и npm при коммитах/паблишах)
| .editorconfig (настройки редактора кода)
| robots.txt (индексный файл — обычный текстовый документ в кодировке UTF-8, действует для протоколов http, https, а также FTP. Файл даёт поисковым роботам рекомендации: какие страницы/файлы стоит сканировать.)

*Плагины в этой сборке*
gulp
gulp-autoprefixer   // вендорные префиксы
browser-sync        // 
gulp-clean-css      // минификация css 
gulp-concat         // объединение файлов!
del                 // удаляет указанную папку
gulp-less           // less-css
gulp-image-optimize // оптимизация jpg/png/svg
gulp-uglify         // минификация js 


*интересные плагины*
bower             // для установки библиотек/фреймворков в одну команду
gulp-rename       // переименовать файл 
gulp.spritesmith  // собрать растровый спрайт
gulp-svg-sprite   // собрать векторный спрайт
gulp-svgmin       // сжать вектор
gulp-ttf2woff     // ttf => woff

плагины для сжатия png/jpg/svg  == одинаковые файлы сжались..
  "gulp-imagemin": "^6.2.0",      //  сжал 3,6%
  "gulp-imagemin-fix": "^5.0.4",  //  сжал 3,6%
  "gulp-image-optimize": "0.0.3", //  сжал 9,5%
  "weflow-imagemin": "0.0.3"      //  сжал 9,5%

  gulp-tinify             // сжимает лучше, но... подписка (png/jpg)
  gulp-tinypng-compress   // сжимает лучше, но... подписка (png/jpg)
  (тут нужно региться и получить на почту api_key, 500 фото/мес., далее подписка) 
