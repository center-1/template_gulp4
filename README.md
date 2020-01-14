# Gulp v.4 + Less (шаблон структуры проекта)

## Установка и работа с текущей сборкой
+ установить [node.js](https://nodejs.org/en/)
+ клонировать/скачать текущий шаблон
+ запустить в папке проекта консоль/терминал (в Windows, можно зажать Shift + правый клик => открыть окно команд)
+ пишем команду `npm i`
+ после установки всех пакетов npm, запускаем задачи через консоль  
  `gulp` — задача по умолчанию, позволяет вести разработку в текстовом редакторе и сразу видеть результат в окне браузера  
  `gulp build` — сборка проекта (минификация .css/.js файлов, объединение, сжатие векторной/растровой графики)

## Плагины в этой сборке
+ [gulp](https://gulpjs.com/)
+ [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) — вендорные префиксы
+ [browser-sync](https://www.browsersync.io/) — онлайн обновление браузера при разработке проекта
+ [gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css) — минификация css 
+ [gulp-concat](https://www.npmjs.com/package/gulp-concat/) — объединение файлов!
+ [del](https://www.npmjs.com/package/del) — удаляет указанную папку
+ [gulp-less](https://www.npmjs.com/package/gulp-less) — препроцессор less
+ [gulp-image-optimize](https://www.npmjs.com/package/gulp-image-optimize) — оптимизация jpg/png/svg
+ [gulp-uglify](https://www.npmjs.com/package/gulp-uglify) — минификация js 

## Структура папок проекта (вариации)

    | dist/  или public (иногда делают две папки, public это демо, а dist минифицированный чистовик)

    | lib/
      |-- gulp/
          |-- helpers/
          |-- tasks/
          |-- config.js

    | node_modules/

    | public/    (готовый продукт, оптимизированный, сжатый. Это папка продакшена)
      |-- css/
      |-- files/
      |-- fonts/
      |-- img/
      |-- js/
      |-- json/
      |-- favicon.ico
      |-- index.html

    | src/  или  app/   (все исходные материалы проекта – оригинальные CSS, Less, js файлы библиотек, оригинальные изображения)
      |-- css/
      |-- files/
      |-- fonts/
      |-- html/
      |-- img/
      |-- js/
      |-- json/
      |-- sprite/
      |-- favicon.ico

    | .gitignore    (список что будет игнорироваться git и npm при коммитах/паблишах)
    | gulpfile.js   (тут описываются все задачи)
    | package.json  (хранит список пакетов необходимых для работы проекта)
    
    | .editorconfig (файл с настройками для текстового редактора)
    | robots.txt    (индексный файл — обычный текстовый документ в кодировке UTF-8, действует для протоколов http, https, а также FTP. Файл даёт поисковым роботам рекомендации: какие страницы/файлы стоит сканировать) 

## Интересные плагины
+ [bower](https://www.npmjs.com/package/gulp-bower) — для установки библиотек/фреймворков одной командой
+ [gulp-rename](https://www.npmjs.com/package/gulp-rename) — переименовать файл 
+ [gulp.spritesmith](https://www.npmjs.com/package/gulp.spritesmith/) — собрать растровый спрайт
+ [gulp-svg-sprite](https://www.npmjs.com/package/gulp-svg-sprite) — собрать векторный спрайт
+ [gulp-svgmin](https://www.npmjs.com/package/gulp-svgmin/) — сжать вектор
+ [gulp-ttf2woff](https://www.npmjs.com/package/gulp-ttf2woff/) — ttf => woff

плагины для сжатия jpg/png/svg = одинаковые файлы сжались...
+ [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin): "^6.2.0" — 13%
+ [gulp-imagemin-fix](https://www.npmjs.com/package/gulp-imagemin-fix/): "^5.0.4" — 4,5%
+ [gulp-image-optimize](https://www.npmjs.com/package/gulp-image-optimize): "0.0.3" — 8,4%
+ [weflow-imagemin](https://www.npmjs.com/package/weflow-imagemin/): "0.0.3" — 8,4%
+ [gulp-tinify](https://www.npmjs.com/package/gulp-tinify/): "^1.0.2" — 93,5% сжимает лучше png/jpg (тут нужно региться и получить на почту api_key, 500 фото/мес., далее подписка) 


## Сравнение сборщиков Gulp vs Grunt
**Grunt:**
  - использует временные каталоги 
  
**Gulp:**
 - виртуальная файловая система Vinyl FS (потоковая обработка файла, без записи на диск, что позволяет один раз считать с диска, модифицировать N-раз и записать на диск) 
 - скорость выполнение задач быстрее (меньше обращений к диску)
 - более компактный конфиг 
 - streams parallelism  
