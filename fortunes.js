const fortunes = [
    "Ваша настойчивость скоро принесет плоды.",
    "Ожидайте неожиданную встречу.",
    "Завтра — идеальный день для нового начинания.",
    "Вы получите долгожданные новости.",
    "Следующий шаг принесет вам успех.",
    "Великая перемена на горизонте.",
    "Ожидайте приятного сюрприза от старого друга.",
    "Верьте в себя — удача уже рядом.",
    "Ваши усилия скоро будут вознаграждены.",
    "Составьте план и следуйте ему.",
    "Счастье находится на вашем пути.",
    "Вы на верном пути к своей цели.",
    "Не бойтесь принимать решения.",
    "Новый опыт приведет к неожиданным результатам.",
    "В ближайшем будущем ждут яркие события.",
    "Новая возможность появится прямо перед вами.",
    "Не упустите шанс, который скоро появится.",
    "Великая перемена вас ждет.",
    "Ожидайте хороших новостей от родных.",
    "Пора быть смелее и двигаться вперед.",
    "Счастливый случай будет на вашей стороне.",
    "Пора отдохнуть и зарядиться энергией.",
    "Ваша уверенность приведет к успеху.",
    "Скоро вы получите признание за свои достижения.",
    "Не бойтесь доверять интуиции.",
    "Ожидайте поздравлений за ваши усилия.",
    "Силы и вдохновение придут, когда вы их меньше всего ждете.",
    "Выстроите отношения, которые принесут вам радость.",
    "Сегодня удачный день для нового начинания.",
    "Ожидайте, что ваши мечты начнут сбываться.",
    "Не бойтесь брать на себя новые обязательства.",
    "Это время для творческих решений.",
    "Кто-то из прошлого неожиданно вернется в вашу жизнь.",
    "Великие изменения требуют смелых шагов.",
    "Следите за знаками — они приведут к успеху.",
    "Верьте в себя и в свою силу.",
    "Не упустите шанс, который скоро появится.",
    "Новое знакомство откроет перед вами двери.",
    "Ждите важных решений и изменений в своей жизни.",
    "Следите за возможностями — они будут в вашем поле зрения.",
    "Вы получите нужный совет от неожиданного источника.",
    "Верьте в свое будущее, оно яркое.",
    "Не бойтесь быть собой, даже если это сложно.",
    "Важно быть решительным в момент выбора.",
    "Будьте открыты для новых впечатлений.",
    "Секрет успеха — в вашей целеустремленности.",
    "Ожидайте небольших, но приятных сюрпризов.",
    "Пора отпустить прошлое и двигаться вперед.",
    "Ваша доброта вернется к вам сторицей.",
    "Верьте в свои силы, все возможно.",
    "Скоро вам предложат выгодную сделку.",
    "Вам предстоит сделать важный выбор.",
    "Впереди вас ждет радость и удача.",
    "Время для самовыражения настало.",
    "Будьте осторожны, не упустите шанс.",
    "Успех зависит от вашего настроя.",
    "Ожидайте важных изменений в личной жизни.",
    "Не стесняйтесь просить помощи — вам помогут.",
    "Все, что вы ищете, скоро окажется рядом.",
    "Ожидайте незабываемое путешествие.",
    "Ваши стремления скоро дадут результаты.",
    "Ждите знаков, они вам подскажут правильный путь.",
    "Пора начать новые дела и проекты.",
    "Вы окажетесь в нужное время в нужном месте.",
    "Ваши мечты могут стать реальностью.",
    "Примите участие в важном событии.",
    "Непредсказуемое счастье ждет вас впереди.",
    "Вы готовы к новым победам.",
    "Верьте в чудеса, они случаются.",
    "Настало время, чтобы двигаться дальше.",
    "Все будет так, как вы решите.",
    "Будьте открыты для неожиданных событий.",
    "Ожидайте большие перемены в своей жизни.",
    "Ваши усилия не останутся незамеченными.",
    "Ваши намерения скоро получат подтверждение.",
    "Верьте в свою интуицию — она не подведет.",
    "Вы на правильном пути — двигайтесь вперед.",
    "Придется сделать выбор, и он будет удачным.",
    "Смотрите на мир с оптимизмом — удача с вами.",
    "Ваша доброта откроет перед вами новые двери.",
    "Ожидайте важных событий, которые изменят вашу жизнь.",
    "Быстрое принятие решений принесет вам успех.",
    "В ближайшем будущем вам повезет.",
    "Новые возможности откроются перед вами.",
    "Ваша энергия поможет преодолеть любые преграды.",
    "Доверяйте своему внутреннему голосу.",
    "Пришло время для новых начинаний.",
    "Любовь и поддержка близких помогут вам.",
    "Верьте в лучшее — оно обязательно произойдет.",
    "Ваши мечты начинают сбываться прямо сейчас.",
    "Сосредоточьтесь на цели — успех не заставит себя ждать.",
    "Скоро вы получите помощь от неожиданного источника.",
    "Верьте в свое вдохновение, оно приведет к успеху.",
    "Смело принимайте новые вызовы.",
    "Не забывайте, что ваши мечты достижимы.",
    "В ближайшие дни вас ждет приятная неожиданность.",
    "Все, о чем вы мечтаете, будет вам предоставлено.",
    "Пора обрести уверенность в своих силах.",
    "В вашей жизни скоро будет яркая перемена.",
    "Помните, что счастье в ваших руках."
];

export default fortunes;
