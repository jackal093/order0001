const data = [
    ['Привет и пошёл (Алг.1)', //[[ standartQV ] [QVtravel] или еще че то ],
        [
            'О, как хорошо что вы пришли, ', 'О, мне нужен как раз кто-то вроде вас, ', 'Мне как раз нужен кто-то вроде вас, ', 'Приветствую мой юный друг, ', 'Вас только и не хватало... ', 'Наконец-то соблагоизволили прийти, ', 'Сколько вас можно ждать, '
        ], 
        [
            'у меня', 'у нас', 'у меня тут', 'у нас тут', 'у моего ручного пони', 'у гуманоидной расы с Альфа Центавры', 'у моих соседей', 'у шахтёров в соседнем посёлке', 'у старой карги возле болота', 'у Щербакова Тимофея', 'у Шипилина Анатолия', 'у Устинова Константина'
        ],
        [
            'проблема', 'проблемка', 'есть проблема', 'есть проблемка', 'есть некоторая проблема', 'довольно интересная проблема', 'горькая беда', 'беда бедовая,', 'полная ахтунга', 'непростая дилемма'
        ],
        [
            'как раз по вашей части.', 'которую вы можете решить.', 'скорее памахите аааааа!', 'думаю вы сможете помочь.', 'с мочеиспусканием.', 'с тягой к каннибализму...', '...интимного плана.', 'с американцами.', ', нашего торреодора забодали! Подмените его.', 'с алкоголем.', '- отсутствует чувство юмора.', 'украли гусей.', 'мышь чем-то гремит на кухне.', 'бурлакам срочно нужна помощь с баржей.'
        ],
        [
            'С меня бутылка.', 'За мной не заржавеет.', 'Выгоду - пополам.', 'С меня незабываемая ночь.', 'Плачу два золотых.', 'В оплату прощу вам тот долг за разбитый рояль.', 'За это вы сегодня не пойдёте чистить свинарник.', 'С меня сытный ужин.', 'Помогите, не бросьте в трудную минуту!'
        ],
        [
            '"его взгляд серьёзен."', '"озорно подмигивает"', '"произносит задумчиво"', '"рассеянно водит взглядом"', '"потирает руки в предвкушении"', '"произносит застенчиво"', '"говорит с придыханием"', '"неопределённо водит бровями"', '"сказал по-деловому"', '"произносит запинаясь"', '"произносит пьяным голосом"', '"заинтересованно смотрит на вас"', '"выжидающе смотрит"'
        ],
		[ // ОПАНЬКИ а вот тут норм
            'и лыбиться как дебил', 'и изображает из себя умного', 'и пытаеться сдержать лыбу', 'и пытаеться сдержать лыбу но у него не получается'
        ]
    ],
    ['Имена', 
        [
            'Петя + ', 'Вася + ', 'Мустафа + ', 'Костя + ', 'Иннокентий Обломов + '
        ], 
        [ 
            'Гермиона', 'Милана', 'Гюльчитай', 'не Костя'
        ], 
        [   
            ' = любовь', ' = интрига', " = развод", " = к деньгам", " = рукожопие", " = два весёлых лемминга"
        ]
    ],
    ['Массив копытных', 
    	[
    		'Соседи', 'Коровы', '33 коня','33 поня', 'Гуси', 'Ёжики'
    	], 
    	[
    		'ржут', 'прикалываются', 'насмехаются', 'потешаются', 'угарают'
    	], 
    	[
    		'над тобой.', 'над этим сумасшедшим миром.', 'над Путиным.'
    	]
    ],
    ['Заметки в ежедневнике (Алг.3)', 
    	[
    		'', 'Сегодня', 'Вчера', 'Позавчера', 'В прошлое воскресенье', 'В прошлый понедельник', 'В прошлый вторник', 'В прошлую среду', 'В прошлый четверг', 'В прошлую пятницу', 'В прошлую субботу', 'На той неделе', 'На днях'
    	], 
    	[
    		'я', 'сосед', 'не знакомый мне человек', 'мой лучший друг', 'прохожий', 'Щербаков Тимофей',  'Шипилин Анатолий', 'Устинов Константин',
    	], 
    	[
    		'видел как', 'слышал как', 'стал свидетелем того как', 'почувствовал как', 'рассказал как'
    	], 
    	[
    		'я', 'сосед', 'не знакомый мне человек', 'мой лучший друг', 'прохожий', 'Щербаков Тимофей',  'Шипилин Анатолий', 'Устинов Константин',
    	], 
    	[
    		'замышляет заговор против нашего короля', 'шепчется за моей спиной', 'имеет коня'
    	], 
    	[
    		'во дворе', 'в парке', 'на улице', 'на обочине'
    	],
		[  // ОПАНЬКИ а нихрена
            'короче все как всегда', 'впрочем ничего нового', 'как это уже ндоело если честно'
        ]
    ],
    ['Крохин Евгений', 
    	[
    		'Женя Крохин мега-программист, какие тут могуть быть варианты?'
    	] 
    ],
	['безобразие', 
    	[
            'это форменное безобразие я и так чувствую себя ущербным а теперь еще и это!', 'да когда же это кончиться!'
    	] 
    ],
    ['мне некогда', 
        [
            'я не могу сейчас говорить', 'я очень занятой человек', 'мне некогда', 'мне некогда с тобой разговаривать', 'мне некогда всякой ерундой заниматься'
        ],
        [
            'мне нужно', 'мне надо', 'мне срочно нужно', 'мне нужно срочно', 'мне нужно немедленно', 'мне немедленно нужно'
        ],
        [
            'чтобы'
        ],
        [
            'вы', 'кто то', 'вы или кто то', 'кто то похожий на вас', 'вы или кто то похожий на вас', 'кто то похожий на вас но не вы', 'вы или кто угодно', 'вы или кто угодно другой' 
        ],
        [
            'выгуляли', 'помыли', 'почистили', 'погладили', 'погладил', 'помыл', 'выгулял', 'подоил', 'привел сюда', 'удовлетворил', 'обслужил с ног до головы'
        ],
        [
            'моего коня', 'моего поня', 'моего пони', 'мою пони', 'мою лошадь', 'мою кобылу', 'мою козу', 'мою собаку', 'мою корову', 'моего верблюда', 'моего слона', 'моего кота', 'мою овцу', 'кота', 'коня', 'корову', 'слона', 'овцу'
        ],
        [
            'в удобное для вас время', 'срочно', 'если вам нечего делать', 'если вам все равно больше нечего делать', 'если вам нечего делать в отличии от меня'
        ]
    ]
]
/*        
        [   
            'Перун', 'Сварог', "Стрибог", "Сварожич", "Симаргл", "Велес"
        ]
 */