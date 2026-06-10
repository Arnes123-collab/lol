import type { ExerciseCmsItem, ExerciseCategory, ExerciseSubcategory } from '@/types/exercise';

export const EXERCISE_CATEGORIES: ExerciseCategory[] = [
  {
    "id": "grudnye-myshcy",
    "name": "Грудные мышцы",
    "sortOrder": 1
  },
  {
    "id": "spina",
    "name": "Спина",
    "sortOrder": 2
  },
  {
    "id": "nogi",
    "name": "Ноги",
    "sortOrder": 3
  },
  {
    "id": "plechevoi-poyas",
    "name": "Плечевой пояс",
    "sortOrder": 4
  },
  {
    "id": "triceps",
    "name": "Трицепс",
    "sortOrder": 5
  },
  {
    "id": "biceps",
    "name": "Бицепс",
    "sortOrder": 6
  },
  {
    "id": "pauerlifting",
    "name": "Пауэрлифтинг",
    "sortOrder": 7
  },
  {
    "id": "ofp-i-reabilitaciya",
    "name": "ОФП и Реабилитация",
    "sortOrder": 8
  },
  {
    "id": "kardio",
    "name": "Кардио",
    "sortOrder": 9
  }
];

export const EXERCISE_SUBCATEGORIES: ExerciseSubcategory[] = [
  {
    "id": "grudnye-myshcy-bazovye-uprazhneniya",
    "categoryId": "grudnye-myshcy",
    "name": "Базовые упражнения"
  },
  {
    "id": "grudnye-myshcy-podsobnye-uprazhneniya",
    "categoryId": "grudnye-myshcy",
    "name": "Подсобные упражнения"
  },
  {
    "id": "spina-shirochaishie-myshcy-bazovye",
    "categoryId": "spina",
    "name": "Широчайшие мышцы - базовые"
  },
  {
    "id": "spina-shirochaishie-myshcy-podsobnye",
    "categoryId": "spina",
    "name": "Широчайшие мышцы - подсобные"
  },
  {
    "id": "spina-rombovidnye-myshcy",
    "categoryId": "spina",
    "name": "Ромбовидные мышцы"
  },
  {
    "id": "spina-razgibateli-spiny",
    "categoryId": "spina",
    "name": "Разгибатели спины"
  },
  {
    "id": "nogi-kvadricepsy-bazovye",
    "categoryId": "nogi",
    "name": "Квадрицепсы - базовые"
  },
  {
    "id": "nogi-kvadricepsy-podsobnye",
    "categoryId": "nogi",
    "name": "Квадрицепсы - подсобные"
  },
  {
    "id": "nogi-biceps-bedra",
    "categoryId": "nogi",
    "name": "Бицепс бедра"
  },
  {
    "id": "nogi-yagodichnye-myshcy",
    "categoryId": "nogi",
    "name": "Ягодичные мышцы"
  },
  {
    "id": "nogi-ikronozhnye-myshcy",
    "categoryId": "nogi",
    "name": "Икроножные мышцы"
  },
  {
    "id": "plechevoi-poyas-perednyaya-delta",
    "categoryId": "plechevoi-poyas",
    "name": "Передняя дельта"
  },
  {
    "id": "plechevoi-poyas-srednyaya-delta",
    "categoryId": "plechevoi-poyas",
    "name": "Средняя дельта"
  },
  {
    "id": "plechevoi-poyas-zadnyaya-delta",
    "categoryId": "plechevoi-poyas",
    "name": "Задняя дельта"
  },
  {
    "id": "triceps-triceps",
    "categoryId": "triceps",
    "name": "Трицепс"
  },
  {
    "id": "biceps-biceps",
    "categoryId": "biceps",
    "name": "Бицепс"
  },
  {
    "id": "pauerlifting-zhim-lezha",
    "categoryId": "pauerlifting",
    "name": "Жим лёжа"
  },
  {
    "id": "pauerlifting-prisedaniya",
    "categoryId": "pauerlifting",
    "name": "Приседания"
  },
  {
    "id": "pauerlifting-stanovaya-tyaga",
    "categoryId": "pauerlifting",
    "name": "Становая тяга"
  },
  {
    "id": "ofp-i-reabilitaciya-kor",
    "categoryId": "ofp-i-reabilitaciya",
    "name": "Кор"
  },
  {
    "id": "ofp-i-reabilitaciya-poyasnica",
    "categoryId": "ofp-i-reabilitaciya",
    "name": "Поясница"
  },
  {
    "id": "ofp-i-reabilitaciya-plechevoi-poyas",
    "categoryId": "ofp-i-reabilitaciya",
    "name": "Плечевой пояс"
  },
  {
    "id": "ofp-i-reabilitaciya-koleni",
    "categoryId": "ofp-i-reabilitaciya",
    "name": "Колени"
  },
  {
    "id": "kardio-nizkaya-intensivnost",
    "categoryId": "kardio",
    "name": "Низкая интенсивность"
  },
  {
    "id": "kardio-srednyaya-intensivnost",
    "categoryId": "kardio",
    "name": "Средняя интенсивность"
  },
  {
    "id": "kardio-vysokaya-intensivnost",
    "categoryId": "kardio",
    "name": "Высокая интенсивность"
  },
  {
    "id": "pauerlifting-dopolnitelnye-varianty",
    "categoryId": "pauerlifting",
    "name": "Дополнительные варианты"
  },
  {
    "id": "spina-dopolnitelnye-varianty",
    "categoryId": "spina",
    "name": "Дополнительные варианты"
  },
  {
    "id": "nogi-dopolnitelnye-varianty",
    "categoryId": "nogi",
    "name": "Дополнительные варианты"
  },
  {
    "id": "triceps-dopolnitelnye-varianty",
    "categoryId": "triceps",
    "name": "Дополнительные варианты"
  },
  {
    "id": "ofp-i-reabilitaciya-dopolnitelnye-varianty",
    "categoryId": "ofp-i-reabilitaciya",
    "name": "Дополнительные варианты"
  },
  {
    "id": "plechevoi-poyas-dopolnitelnye-varianty",
    "categoryId": "plechevoi-poyas",
    "name": "Дополнительные варианты"
  },
  {
    "id": "grudnye-myshcy-dopolnitelnye-varianty",
    "categoryId": "grudnye-myshcy",
    "name": "Дополнительные варианты"
  }
];

export const EXERCISE_LIBRARY: ExerciseCmsItem[] = [
  {
    "id": "grudnye-myshcy-bazovye-uprazhneniya-zhim-lezha-klassicheskii",
    "name": "Жим лёжа классический",
    "category": "Грудные мышцы",
    "subcategory": "Базовые упражнения",
    "exerciseType": "Базовое",
    "primaryMuscle": "Грудные мышцы",
    "secondaryMuscles": [
      "Трицепс",
      "Передняя дельта"
    ],
    "equipment": [
      "Штанга",
      "Скамья"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Жим лёжа",
      "Пауэрлифтинг",
      "Набор массы"
    ],
    "imageUrl": "/exercises/bench-press.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Жим лёжа классический: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [
      "grudnye-myshcy-bazovye-uprazhneniya-zhim-lezha-srednim-hvato",
      "grudnye-myshcy-bazovye-uprazhneniya-zhim-lezha-uzkim-hvatom",
      "grudnye-myshcy-bazovye-uprazhneniya-zhim-erika-spoto",
      "grudnye-myshcy-bazovye-uprazhneniya-zhim-gantelei-lezha"
    ],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "grudnye-myshcy-bazovye-uprazhneniya-zhim-lezha-srednim-hvato",
    "name": "Жим лёжа средним хватом",
    "category": "Грудные мышцы",
    "subcategory": "Базовые упражнения",
    "exerciseType": "Базовое",
    "primaryMuscle": "Грудные мышцы",
    "secondaryMuscles": [
      "Трицепс",
      "Передняя дельта"
    ],
    "equipment": [
      "Штанга",
      "Скамья"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Жим лёжа",
      "Пауэрлифтинг",
      "Набор массы"
    ],
    "imageUrl": "/exercises/bench-press.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Жим лёжа средним хватом: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "grudnye-myshcy-bazovye-uprazhneniya-zhim-lezha-uzkim-hvatom",
    "name": "Жим лёжа узким хватом",
    "category": "Грудные мышцы",
    "subcategory": "Базовые упражнения",
    "exerciseType": "Базовое",
    "primaryMuscle": "Грудные мышцы",
    "secondaryMuscles": [
      "Трицепс",
      "Передняя дельта"
    ],
    "equipment": [
      "Штанга",
      "Скамья"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Жим лёжа",
      "Пауэрлифтинг",
      "Набор массы"
    ],
    "imageUrl": "/exercises/bench-press.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Жим лёжа узким хватом: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "grudnye-myshcy-bazovye-uprazhneniya-zhim-lezha-shirokim-hvat",
    "name": "Жим лёжа широким хватом",
    "category": "Грудные мышцы",
    "subcategory": "Базовые упражнения",
    "exerciseType": "Базовое",
    "primaryMuscle": "Грудные мышцы",
    "secondaryMuscles": [
      "Трицепс",
      "Передняя дельта"
    ],
    "equipment": [
      "Штанга",
      "Скамья"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Жим лёжа",
      "Пауэрлифтинг",
      "Набор массы"
    ],
    "imageUrl": "/exercises/bench-press.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Жим лёжа широким хватом: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "grudnye-myshcy-bazovye-uprazhneniya-zhim-lezha-s-pauzoi-2-se",
    "name": "Жим лёжа с паузой 2 сек",
    "category": "Грудные мышцы",
    "subcategory": "Базовые упражнения",
    "exerciseType": "Базовое",
    "primaryMuscle": "Грудные мышцы",
    "secondaryMuscles": [
      "Трицепс",
      "Передняя дельта"
    ],
    "equipment": [
      "Штанга",
      "Скамья"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Жим лёжа",
      "Пауэрлифтинг",
      "Набор массы"
    ],
    "imageUrl": "/exercises/bench-press.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Жим лёжа с паузой 2 сек: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [
      "grudnye-myshcy-bazovye-uprazhneniya-zhim-lezha-srednim-hvato",
      "grudnye-myshcy-bazovye-uprazhneniya-zhim-lezha-uzkim-hvatom",
      "grudnye-myshcy-bazovye-uprazhneniya-zhim-erika-spoto",
      "grudnye-myshcy-bazovye-uprazhneniya-zhim-gantelei-lezha"
    ],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "grudnye-myshcy-bazovye-uprazhneniya-zhim-lezha-s-pauzoi-6-se",
    "name": "Жим лёжа с паузой 6 сек",
    "category": "Грудные мышцы",
    "subcategory": "Базовые упражнения",
    "exerciseType": "Базовое",
    "primaryMuscle": "Грудные мышцы",
    "secondaryMuscles": [
      "Трицепс",
      "Передняя дельта"
    ],
    "equipment": [
      "Штанга",
      "Скамья"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Жим лёжа",
      "Пауэрлифтинг",
      "Набор массы"
    ],
    "imageUrl": "/exercises/bench-press.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Жим лёжа с паузой 6 сек: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "grudnye-myshcy-bazovye-uprazhneniya-zhim-lezha-s-cepyami",
    "name": "Жим лёжа с цепями",
    "category": "Грудные мышцы",
    "subcategory": "Базовые упражнения",
    "exerciseType": "Базовое",
    "primaryMuscle": "Грудные мышцы",
    "secondaryMuscles": [
      "Трицепс",
      "Передняя дельта"
    ],
    "equipment": [
      "Штанга",
      "Скамья"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Жим лёжа",
      "Пауэрлифтинг",
      "Набор массы"
    ],
    "imageUrl": "/exercises/bench-press.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Жим лёжа с цепями: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [
      "grudnye-myshcy-bazovye-uprazhneniya-zhim-lezha-s-rezinoi",
      "grudnye-myshcy-bazovye-uprazhneniya-zhim-lezha-klassicheskii",
      "pauerlifting-zhim-lezha-zhim-srednim-hvatom"
    ],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "grudnye-myshcy-bazovye-uprazhneniya-zhim-lezha-s-rezinoi",
    "name": "Жим лёжа с резиной",
    "category": "Грудные мышцы",
    "subcategory": "Базовые упражнения",
    "exerciseType": "Базовое",
    "primaryMuscle": "Грудные мышцы",
    "secondaryMuscles": [
      "Трицепс",
      "Передняя дельта"
    ],
    "equipment": [
      "Штанга",
      "Скамья"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Жим лёжа",
      "Пауэрлифтинг",
      "Набор массы"
    ],
    "imageUrl": "/exercises/bench-press.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Жим лёжа с резиной: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "grudnye-myshcy-bazovye-uprazhneniya-zhim-lezha-s-dosok-5-sm",
    "name": "Жим лёжа с досок 5 см",
    "category": "Грудные мышцы",
    "subcategory": "Базовые упражнения",
    "exerciseType": "Базовое",
    "primaryMuscle": "Грудные мышцы",
    "secondaryMuscles": [
      "Трицепс",
      "Передняя дельта"
    ],
    "equipment": [
      "Штанга",
      "Скамья"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Жим лёжа",
      "Пауэрлифтинг",
      "Набор массы"
    ],
    "imageUrl": "/exercises/bench-press.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Жим лёжа с досок 5 см: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "grudnye-myshcy-bazovye-uprazhneniya-zhim-lezha-s-dosok-10-sm",
    "name": "Жим лёжа с досок 10 см",
    "category": "Грудные мышцы",
    "subcategory": "Базовые упражнения",
    "exerciseType": "Базовое",
    "primaryMuscle": "Грудные мышцы",
    "secondaryMuscles": [
      "Трицепс",
      "Передняя дельта"
    ],
    "equipment": [
      "Штанга",
      "Скамья"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Жим лёжа",
      "Пауэрлифтинг",
      "Набор массы"
    ],
    "imageUrl": "/exercises/bench-press.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Жим лёжа с досок 10 см: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "grudnye-myshcy-bazovye-uprazhneniya-zhim-lezha-s-dosok-15-sm",
    "name": "Жим лёжа с досок 15 см",
    "category": "Грудные мышцы",
    "subcategory": "Базовые упражнения",
    "exerciseType": "Базовое",
    "primaryMuscle": "Грудные мышцы",
    "secondaryMuscles": [
      "Трицепс",
      "Передняя дельта"
    ],
    "equipment": [
      "Штанга",
      "Скамья"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Жим лёжа",
      "Пауэрлифтинг",
      "Набор массы"
    ],
    "imageUrl": "/exercises/bench-press.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Жим лёжа с досок 15 см: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "grudnye-myshcy-bazovye-uprazhneniya-zhim-erika-spoto",
    "name": "Жим Эрика Спото",
    "category": "Грудные мышцы",
    "subcategory": "Базовые упражнения",
    "exerciseType": "Базовое",
    "primaryMuscle": "Грудные мышцы",
    "secondaryMuscles": [
      "Трицепс",
      "Передняя дельта"
    ],
    "equipment": [
      "Штанга",
      "Скамья"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Жим лёжа",
      "Пауэрлифтинг",
      "Набор массы"
    ],
    "imageUrl": "/exercises/bench-press.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Жим Эрика Спото: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "grudnye-myshcy-bazovye-uprazhneniya-negativnyi-zhim",
    "name": "Негативный жим",
    "category": "Грудные мышцы",
    "subcategory": "Базовые упражнения",
    "exerciseType": "Базовое",
    "primaryMuscle": "Грудные мышцы",
    "secondaryMuscles": [
      "Трицепс",
      "Передняя дельта"
    ],
    "equipment": [
      "Штанга",
      "Скамья"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Жим лёжа",
      "Пауэрлифтинг",
      "Набор массы"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Негативный жим: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "grudnye-myshcy-bazovye-uprazhneniya-izometricheskii-zhim",
    "name": "Изометрический жим",
    "category": "Грудные мышцы",
    "subcategory": "Базовые упражнения",
    "exerciseType": "Базовое",
    "primaryMuscle": "Грудные мышцы",
    "secondaryMuscles": [
      "Трицепс",
      "Передняя дельта"
    ],
    "equipment": [
      "Штанга",
      "Скамья"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Жим лёжа",
      "Пауэрлифтинг",
      "Набор массы"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Изометрический жим: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "grudnye-myshcy-bazovye-uprazhneniya-zhim-gantelei-lezha",
    "name": "Жим гантелей лёжа",
    "category": "Грудные мышцы",
    "subcategory": "Базовые упражнения",
    "exerciseType": "Базовое",
    "primaryMuscle": "Грудные мышцы",
    "secondaryMuscles": [
      "Трицепс",
      "Передняя дельта"
    ],
    "equipment": [
      "Гантели"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Жим лёжа",
      "Пауэрлифтинг",
      "Набор массы"
    ],
    "imageUrl": "/exercises/bench-press.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Жим гантелей лёжа: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "grudnye-myshcy-bazovye-uprazhneniya-zhim-gantelei-pod-uglom-",
    "name": "Жим гантелей под углом 30°",
    "category": "Грудные мышцы",
    "subcategory": "Базовые упражнения",
    "exerciseType": "Базовое",
    "primaryMuscle": "Грудные мышцы",
    "secondaryMuscles": [
      "Трицепс",
      "Передняя дельта"
    ],
    "equipment": [
      "Гантели"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Жим лёжа",
      "Пауэрлифтинг",
      "Набор массы"
    ],
    "imageUrl": "/exercises/bench-press.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Жим гантелей под углом 30°: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "grudnye-myshcy-bazovye-uprazhneniya-zhim-gantelei-pod-uglom--2",
    "name": "Жим гантелей под углом 45°",
    "category": "Грудные мышцы",
    "subcategory": "Базовые упражнения",
    "exerciseType": "Базовое",
    "primaryMuscle": "Грудные мышцы",
    "secondaryMuscles": [
      "Трицепс",
      "Передняя дельта"
    ],
    "equipment": [
      "Гантели"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Жим лёжа",
      "Пауэрлифтинг",
      "Набор массы"
    ],
    "imageUrl": "/exercises/bench-press.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Жим гантелей под углом 45°: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "grudnye-myshcy-bazovye-uprazhneniya-zhim-v-trenazhere-smita",
    "name": "Жим в тренажёре Смита",
    "category": "Грудные мышцы",
    "subcategory": "Базовые упражнения",
    "exerciseType": "Базовое",
    "primaryMuscle": "Грудные мышцы",
    "secondaryMuscles": [
      "Трицепс",
      "Передняя дельта"
    ],
    "equipment": [
      "Штанга",
      "Скамья"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Жим лёжа",
      "Пауэрлифтинг",
      "Набор массы"
    ],
    "imageUrl": "/exercises/bench-press.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Жим в тренажёре Смита: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "grudnye-myshcy-bazovye-uprazhneniya-otzhimaniya-na-brusyah",
    "name": "Отжимания на брусьях",
    "category": "Грудные мышцы",
    "subcategory": "Базовые упражнения",
    "exerciseType": "Базовое",
    "primaryMuscle": "Грудные мышцы",
    "secondaryMuscles": [
      "Трицепс",
      "Передняя дельта"
    ],
    "equipment": [
      "Собственный вес"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Жим лёжа",
      "Пауэрлифтинг",
      "Набор массы"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Отжимания на брусьях: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "grudnye-myshcy-bazovye-uprazhneniya-otzhimaniya-s-vesom",
    "name": "Отжимания с весом",
    "category": "Грудные мышцы",
    "subcategory": "Базовые упражнения",
    "exerciseType": "Базовое",
    "primaryMuscle": "Грудные мышцы",
    "secondaryMuscles": [
      "Трицепс",
      "Передняя дельта"
    ],
    "equipment": [
      "Собственный вес"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Жим лёжа",
      "Пауэрлифтинг",
      "Набор массы"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Отжимания с весом: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "grudnye-myshcy-podsobnye-uprazhneniya-razvodka-gantelei-lezh",
    "name": "Разводка гантелей лёжа",
    "category": "Грудные мышцы",
    "subcategory": "Подсобные упражнения",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Грудные мышцы",
    "secondaryMuscles": [
      "Передняя дельта"
    ],
    "equipment": [
      "Гантели"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "Фитнес",
      "Набор массы"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Разводка гантелей лёжа: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "grudnye-myshcy-podsobnye-uprazhneniya-razvodka-gantelei-pod-",
    "name": "Разводка гантелей под углом",
    "category": "Грудные мышцы",
    "subcategory": "Подсобные упражнения",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Грудные мышцы",
    "secondaryMuscles": [
      "Передняя дельта"
    ],
    "equipment": [
      "Гантели"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "Фитнес",
      "Набор массы"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Разводка гантелей под углом: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "grudnye-myshcy-podsobnye-uprazhneniya-svedenie-ruk-v-krossov",
    "name": "Сведение рук в кроссовере сверху",
    "category": "Грудные мышцы",
    "subcategory": "Подсобные упражнения",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Грудные мышцы",
    "secondaryMuscles": [
      "Передняя дельта"
    ],
    "equipment": [
      "Кроссовер"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "Фитнес",
      "Набор массы"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Сведение рук в кроссовере сверху: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "grudnye-myshcy-podsobnye-uprazhneniya-svedenie-ruk-v-krossov-2",
    "name": "Сведение рук в кроссовере снизу",
    "category": "Грудные мышцы",
    "subcategory": "Подсобные упражнения",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Грудные мышцы",
    "secondaryMuscles": [
      "Передняя дельта"
    ],
    "equipment": [
      "Кроссовер"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "Фитнес",
      "Набор массы"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Сведение рук в кроссовере снизу: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "grudnye-myshcy-podsobnye-uprazhneniya-pec-deck",
    "name": "Pec Deck",
    "category": "Грудные мышцы",
    "subcategory": "Подсобные упражнения",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Грудные мышцы",
    "secondaryMuscles": [
      "Передняя дельта"
    ],
    "equipment": [
      "Тренажёр"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "Фитнес",
      "Набор массы"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Pec Deck: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "grudnye-myshcy-podsobnye-uprazhneniya-otzhimaniya-ot-pola",
    "name": "Отжимания от пола",
    "category": "Грудные мышцы",
    "subcategory": "Подсобные упражнения",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Грудные мышцы",
    "secondaryMuscles": [
      "Передняя дельта"
    ],
    "equipment": [
      "Собственный вес"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "Фитнес",
      "Набор массы"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Отжимания от пола: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "grudnye-myshcy-podsobnye-uprazhneniya-otzhimaniya-ot-pola-s-",
    "name": "Отжимания от пола с паузой",
    "category": "Грудные мышцы",
    "subcategory": "Подсобные упражнения",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Грудные мышцы",
    "secondaryMuscles": [
      "Передняя дельта"
    ],
    "equipment": [
      "Собственный вес"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "Фитнес",
      "Набор массы"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Отжимания от пола с паузой: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "spina-shirochaishie-myshcy-bazovye-podtyagivaniya-shirokim-h",
    "name": "Подтягивания широким хватом",
    "category": "Спина",
    "subcategory": "Широчайшие мышцы - базовые",
    "exerciseType": "Базовое",
    "primaryMuscle": "Широчайшие мышцы",
    "secondaryMuscles": [
      "Бицепс",
      "Ромбовидные"
    ],
    "equipment": [
      "Собственный вес"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/row.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Подтягивания широким хватом: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "spina-shirochaishie-myshcy-bazovye-podtyagivaniya-obratnym-h",
    "name": "Подтягивания обратным хватом",
    "category": "Спина",
    "subcategory": "Широчайшие мышцы - базовые",
    "exerciseType": "Базовое",
    "primaryMuscle": "Широчайшие мышцы",
    "secondaryMuscles": [
      "Бицепс",
      "Ромбовидные"
    ],
    "equipment": [
      "Собственный вес"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/row.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Подтягивания обратным хватом: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "spina-shirochaishie-myshcy-bazovye-podtyagivaniya-s-vesom",
    "name": "Подтягивания с весом",
    "category": "Спина",
    "subcategory": "Широчайшие мышцы - базовые",
    "exerciseType": "Базовое",
    "primaryMuscle": "Широчайшие мышцы",
    "secondaryMuscles": [
      "Бицепс",
      "Ромбовидные"
    ],
    "equipment": [
      "Собственный вес"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/row.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Подтягивания с весом: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "spina-shirochaishie-myshcy-bazovye-tyaga-shtangi-v-naklone",
    "name": "Тяга штанги в наклоне",
    "category": "Спина",
    "subcategory": "Широчайшие мышцы - базовые",
    "exerciseType": "Базовое",
    "primaryMuscle": "Широчайшие мышцы",
    "secondaryMuscles": [
      "Бицепс",
      "Ромбовидные"
    ],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/row.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Тяга штанги в наклоне: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "spina-shirochaishie-myshcy-bazovye-tyaga-pendleya",
    "name": "Тяга Пендлея",
    "category": "Спина",
    "subcategory": "Широчайшие мышцы - базовые",
    "exerciseType": "Базовое",
    "primaryMuscle": "Широчайшие мышцы",
    "secondaryMuscles": [
      "Бицепс",
      "Ромбовидные"
    ],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/row.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Тяга Пендлея: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "spina-shirochaishie-myshcy-bazovye-tyaga-t-grifa",
    "name": "Тяга Т-грифа",
    "category": "Спина",
    "subcategory": "Широчайшие мышцы - базовые",
    "exerciseType": "Базовое",
    "primaryMuscle": "Широчайшие мышцы",
    "secondaryMuscles": [
      "Бицепс",
      "Ромбовидные"
    ],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/row.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Тяга Т-грифа: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "spina-shirochaishie-myshcy-podsobnye-verhnii-blok-k-grudi",
    "name": "Верхний блок к груди",
    "category": "Спина",
    "subcategory": "Широчайшие мышцы - подсобные",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Широчайшие мышцы",
    "secondaryMuscles": [
      "Бицепс"
    ],
    "equipment": [
      "Тренажёр"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "Фитнес"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Верхний блок к груди: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "spina-shirochaishie-myshcy-podsobnye-verhnii-blok-za-golovu",
    "name": "Верхний блок за голову",
    "category": "Спина",
    "subcategory": "Широчайшие мышцы - подсобные",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Широчайшие мышцы",
    "secondaryMuscles": [
      "Бицепс"
    ],
    "equipment": [
      "Тренажёр"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "Фитнес"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Верхний блок за голову: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "spina-shirochaishie-myshcy-podsobnye-tyaga-gorizontalnogo-bl",
    "name": "Тяга горизонтального блока",
    "category": "Спина",
    "subcategory": "Широчайшие мышцы - подсобные",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Широчайшие мышцы",
    "secondaryMuscles": [
      "Бицепс"
    ],
    "equipment": [
      "Тренажёр"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "Фитнес"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Тяга горизонтального блока: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "spina-shirochaishie-myshcy-podsobnye-tyaga-odnoi-rukoi-v-tre",
    "name": "Тяга одной рукой в тренажёре",
    "category": "Спина",
    "subcategory": "Широчайшие мышцы - подсобные",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Широчайшие мышцы",
    "secondaryMuscles": [
      "Бицепс"
    ],
    "equipment": [
      "Тренажёр"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "Фитнес"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Тяга одной рукой в тренажёре: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "spina-shirochaishie-myshcy-podsobnye-pulover-na-verhnem-blok",
    "name": "Пуловер на верхнем блоке",
    "category": "Спина",
    "subcategory": "Широчайшие мышцы - подсобные",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Широчайшие мышцы",
    "secondaryMuscles": [
      "Бицепс"
    ],
    "equipment": [
      "Тренажёр"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "Фитнес"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Пуловер на верхнем блоке: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "spina-shirochaishie-myshcy-podsobnye-pulover-s-gantelyu",
    "name": "Пуловер с гантелью",
    "category": "Спина",
    "subcategory": "Широчайшие мышцы - подсобные",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Широчайшие мышцы",
    "secondaryMuscles": [
      "Бицепс"
    ],
    "equipment": [
      "Гантели"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "Фитнес"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Пуловер с гантелью: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "spina-rombovidnye-myshcy-tyaga-shtangi-k-poyasu",
    "name": "Тяга штанги к поясу",
    "category": "Спина",
    "subcategory": "Ромбовидные мышцы",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Ромбовидные мышцы",
    "secondaryMuscles": [
      "Задняя дельта",
      "Широчайшие"
    ],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Реабилитация плеча"
    ],
    "imageUrl": "/exercises/row.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Тяга штанги к поясу: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "spina-rombovidnye-myshcy-tyaga-t-grifa",
    "name": "Тяга Т-грифа",
    "category": "Спина",
    "subcategory": "Ромбовидные мышцы",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Ромбовидные мышцы",
    "secondaryMuscles": [
      "Задняя дельта",
      "Широчайшие"
    ],
    "equipment": [
      "Тренажёр",
      "Кроссовер"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Реабилитация плеча"
    ],
    "imageUrl": "/exercises/row.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Тяга Т-грифа: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "spina-rombovidnye-myshcy-face-pull",
    "name": "Face Pull",
    "category": "Спина",
    "subcategory": "Ромбовидные мышцы",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Ромбовидные мышцы",
    "secondaryMuscles": [
      "Задняя дельта",
      "Широчайшие"
    ],
    "equipment": [
      "Тренажёр",
      "Кроссовер"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Реабилитация плеча"
    ],
    "imageUrl": "/exercises/face-pull.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Face Pull: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [
      "spina-rombovidnye-myshcy-tyaga-kanata-k-licu",
      "plechevoi-poyas-zadnyaya-delta-obratnaya-babochka",
      "ofp-i-reabilitaciya-plechevoi-poyas-band-pull-apart"
    ],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "spina-rombovidnye-myshcy-tyaga-kanata-k-licu",
    "name": "Тяга каната к лицу",
    "category": "Спина",
    "subcategory": "Ромбовидные мышцы",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Ромбовидные мышцы",
    "secondaryMuscles": [
      "Задняя дельта",
      "Широчайшие"
    ],
    "equipment": [
      "Тренажёр",
      "Кроссовер"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Реабилитация плеча"
    ],
    "imageUrl": "/exercises/row.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Тяга каната к лицу: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "spina-rombovidnye-myshcy-razvedeniya-v-trenazhere-na-zadnyuy",
    "name": "Разведения в тренажёре на заднюю дельту",
    "category": "Спина",
    "subcategory": "Ромбовидные мышцы",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Ромбовидные мышцы",
    "secondaryMuscles": [
      "Задняя дельта",
      "Широчайшие"
    ],
    "equipment": [
      "Тренажёр",
      "Кроссовер"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Реабилитация плеча"
    ],
    "imageUrl": "/exercises/row.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Разведения в тренажёре на заднюю дельту: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "spina-razgibateli-spiny-stanovaya-tyaga-klassika",
    "name": "Становая тяга классика",
    "category": "Спина",
    "subcategory": "Разгибатели спины",
    "exerciseType": "Базовое",
    "primaryMuscle": "Разгибатели спины",
    "secondaryMuscles": [
      "Ягодичные",
      "Бицепс бедра"
    ],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Пауэрлифтинг",
      "Реабилитация поясницы"
    ],
    "imageUrl": "/exercises/deadlift.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Становая тяга классика: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "spina-razgibateli-spiny-stanovaya-tyaga-sumo",
    "name": "Становая тяга сумо",
    "category": "Спина",
    "subcategory": "Разгибатели спины",
    "exerciseType": "Базовое",
    "primaryMuscle": "Разгибатели спины",
    "secondaryMuscles": [
      "Ягодичные",
      "Бицепс бедра"
    ],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Пауэрлифтинг",
      "Реабилитация поясницы"
    ],
    "imageUrl": "/exercises/deadlift.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Становая тяга сумо: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "spina-razgibateli-spiny-rumynskaya-tyaga",
    "name": "Румынская тяга",
    "category": "Спина",
    "subcategory": "Разгибатели спины",
    "exerciseType": "Базовое",
    "primaryMuscle": "Разгибатели спины",
    "secondaryMuscles": [
      "Ягодичные",
      "Бицепс бедра"
    ],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Пауэрлифтинг",
      "Реабилитация поясницы"
    ],
    "imageUrl": "/exercises/deadlift.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Румынская тяга: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "spina-razgibateli-spiny-good-morning",
    "name": "Good Morning",
    "category": "Спина",
    "subcategory": "Разгибатели спины",
    "exerciseType": "Базовое",
    "primaryMuscle": "Разгибатели спины",
    "secondaryMuscles": [
      "Ягодичные",
      "Бицепс бедра"
    ],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Пауэрлифтинг",
      "Реабилитация поясницы"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Good Morning: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "spina-razgibateli-spiny-giperekstenziya",
    "name": "Гиперэкстензия",
    "category": "Спина",
    "subcategory": "Разгибатели спины",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Разгибатели спины",
    "secondaryMuscles": [
      "Ягодичные",
      "Бицепс бедра"
    ],
    "equipment": [
      "Тренажёр"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Пауэрлифтинг",
      "Реабилитация поясницы"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Гиперэкстензия: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "spina-razgibateli-spiny-obratnaya-giperekstenziya",
    "name": "Обратная гиперэкстензия",
    "category": "Спина",
    "subcategory": "Разгибатели спины",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Разгибатели спины",
    "secondaryMuscles": [
      "Ягодичные",
      "Бицепс бедра"
    ],
    "equipment": [
      "Тренажёр"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Пауэрлифтинг",
      "Реабилитация поясницы"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Обратная гиперэкстензия: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "spina-razgibateli-spiny-giperekstenziya-s-vesom",
    "name": "Гиперэкстензия с весом",
    "category": "Спина",
    "subcategory": "Разгибатели спины",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Разгибатели спины",
    "secondaryMuscles": [
      "Ягодичные",
      "Бицепс бедра"
    ],
    "equipment": [
      "Тренажёр"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Пауэрлифтинг",
      "Реабилитация поясницы"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Гиперэкстензия с весом: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "nogi-kvadricepsy-bazovye-prisedaniya-klassicheskie",
    "name": "Приседания классические",
    "category": "Ноги",
    "subcategory": "Квадрицепсы - базовые",
    "exerciseType": "Базовое",
    "primaryMuscle": "Квадрицепс",
    "secondaryMuscles": [
      "Ягодичные",
      "Кор"
    ],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Пауэрлифтинг",
      "ОФП"
    ],
    "imageUrl": "/exercises/squat.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Приседания классические: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [
      "nogi-kvadricepsy-bazovye-frontalnyi-prised",
      "nogi-kvadricepsy-bazovye-prisedaniya-s-pauzoi",
      "nogi-kvadricepsy-bazovye-prisedaniya-na-tumbu"
    ],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "nogi-kvadricepsy-bazovye-prisedaniya-s-pauzoi",
    "name": "Приседания с паузой",
    "category": "Ноги",
    "subcategory": "Квадрицепсы - базовые",
    "exerciseType": "Базовое",
    "primaryMuscle": "Квадрицепс",
    "secondaryMuscles": [
      "Ягодичные",
      "Кор"
    ],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Пауэрлифтинг",
      "ОФП"
    ],
    "imageUrl": "/exercises/squat.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Приседания с паузой: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "nogi-kvadricepsy-bazovye-prisedaniya-na-tumbu",
    "name": "Приседания на тумбу",
    "category": "Ноги",
    "subcategory": "Квадрицепсы - базовые",
    "exerciseType": "Базовое",
    "primaryMuscle": "Квадрицепс",
    "secondaryMuscles": [
      "Ягодичные",
      "Кор"
    ],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Пауэрлифтинг",
      "ОФП"
    ],
    "imageUrl": "/exercises/squat.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Приседания на тумбу: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "nogi-kvadricepsy-bazovye-frontalnyi-prised",
    "name": "Фронтальный присед",
    "category": "Ноги",
    "subcategory": "Квадрицепсы - базовые",
    "exerciseType": "Базовое",
    "primaryMuscle": "Квадрицепс",
    "secondaryMuscles": [
      "Ягодичные",
      "Кор"
    ],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Пауэрлифтинг",
      "ОФП"
    ],
    "imageUrl": "/exercises/squat.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Фронтальный присед: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "nogi-kvadricepsy-bazovye-prisedaniya-v-smite",
    "name": "Приседания в Смите",
    "category": "Ноги",
    "subcategory": "Квадрицепсы - базовые",
    "exerciseType": "Базовое",
    "primaryMuscle": "Квадрицепс",
    "secondaryMuscles": [
      "Ягодичные",
      "Кор"
    ],
    "equipment": [
      "Тренажёр"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Пауэрлифтинг",
      "ОФП"
    ],
    "imageUrl": "/exercises/squat.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Приседания в Смите: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "nogi-kvadricepsy-bazovye-zhim-nogami",
    "name": "Жим ногами",
    "category": "Ноги",
    "subcategory": "Квадрицепсы - базовые",
    "exerciseType": "Базовое",
    "primaryMuscle": "Квадрицепс",
    "secondaryMuscles": [
      "Ягодичные",
      "Кор"
    ],
    "equipment": [
      "Тренажёр"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Пауэрлифтинг",
      "ОФП"
    ],
    "imageUrl": "/exercises/squat.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Жим ногами: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "nogi-kvadricepsy-podsobnye-vypady",
    "name": "Выпады",
    "category": "Ноги",
    "subcategory": "Квадрицепсы - подсобные",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Квадрицепс",
    "secondaryMuscles": [
      "Ягодичные"
    ],
    "equipment": [
      "Гантели"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "Фитнес",
      "Реабилитация колена"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Выпады: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "nogi-kvadricepsy-podsobnye-bolgarskie-vypady",
    "name": "Болгарские выпады",
    "category": "Ноги",
    "subcategory": "Квадрицепсы - подсобные",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Квадрицепс",
    "secondaryMuscles": [
      "Ягодичные"
    ],
    "equipment": [
      "Гантели"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "Фитнес",
      "Реабилитация колена"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Болгарские выпады: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "nogi-kvadricepsy-podsobnye-razgibaniya-nog-v-trenazhere",
    "name": "Разгибания ног в тренажёре",
    "category": "Ноги",
    "subcategory": "Квадрицепсы - подсобные",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Квадрицепс",
    "secondaryMuscles": [
      "Ягодичные"
    ],
    "equipment": [
      "Тренажёр"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "Фитнес",
      "Реабилитация колена"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Разгибания ног в тренажёре: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "nogi-kvadricepsy-podsobnye-shagi-na-platformu",
    "name": "Шаги на платформу",
    "category": "Ноги",
    "subcategory": "Квадрицепсы - подсобные",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Квадрицепс",
    "secondaryMuscles": [
      "Ягодичные"
    ],
    "equipment": [
      "Собственный вес"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "Фитнес",
      "Реабилитация колена"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Шаги на платформу: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "nogi-kvadricepsy-podsobnye-step-apy",
    "name": "Степ-апы",
    "category": "Ноги",
    "subcategory": "Квадрицепсы - подсобные",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Квадрицепс",
    "secondaryMuscles": [
      "Ягодичные"
    ],
    "equipment": [
      "Собственный вес"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "Фитнес",
      "Реабилитация колена"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Степ-апы: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "nogi-biceps-bedra-rumynskaya-tyaga",
    "name": "Румынская тяга",
    "category": "Ноги",
    "subcategory": "Бицепс бедра",
    "exerciseType": "Базовое",
    "primaryMuscle": "Бицепс бедра",
    "secondaryMuscles": [
      "Ягодичные"
    ],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Румынская тяга: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "nogi-biceps-bedra-stanovaya-na-pryamyh-nogah",
    "name": "Становая на прямых ногах",
    "category": "Ноги",
    "subcategory": "Бицепс бедра",
    "exerciseType": "Базовое",
    "primaryMuscle": "Бицепс бедра",
    "secondaryMuscles": [
      "Ягодичные"
    ],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Становая на прямых ногах: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "nogi-biceps-bedra-sgibaniya-nog-lezha",
    "name": "Сгибания ног лёжа",
    "category": "Ноги",
    "subcategory": "Бицепс бедра",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Бицепс бедра",
    "secondaryMuscles": [
      "Ягодичные"
    ],
    "equipment": [
      "Тренажёр"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Сгибания ног лёжа: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "nogi-biceps-bedra-sgibaniya-nog-sidya",
    "name": "Сгибания ног сидя",
    "category": "Ноги",
    "subcategory": "Бицепс бедра",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Бицепс бедра",
    "secondaryMuscles": [
      "Ягодичные"
    ],
    "equipment": [
      "Тренажёр"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Сгибания ног сидя: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "nogi-biceps-bedra-nordic-curl",
    "name": "Nordic Curl",
    "category": "Ноги",
    "subcategory": "Бицепс бедра",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Бицепс бедра",
    "secondaryMuscles": [
      "Ягодичные"
    ],
    "equipment": [
      "Собственный вес"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Nordic Curl: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "nogi-yagodichnye-myshcy-yagodichnyi-most",
    "name": "Ягодичный мост",
    "category": "Ноги",
    "subcategory": "Ягодичные мышцы",
    "exerciseType": "Базовое",
    "primaryMuscle": "Ягодичные мышцы",
    "secondaryMuscles": [
      "Бицепс бедра"
    ],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "Фитнес"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Ягодичный мост: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "nogi-yagodichnye-myshcy-hip-thrust",
    "name": "Hip Thrust",
    "category": "Ноги",
    "subcategory": "Ягодичные мышцы",
    "exerciseType": "Базовое",
    "primaryMuscle": "Ягодичные мышцы",
    "secondaryMuscles": [
      "Бицепс бедра"
    ],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "Фитнес"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Hip Thrust: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "nogi-yagodichnye-myshcy-prisedaniya-sumo",
    "name": "Приседания сумо",
    "category": "Ноги",
    "subcategory": "Ягодичные мышцы",
    "exerciseType": "Базовое",
    "primaryMuscle": "Ягодичные мышцы",
    "secondaryMuscles": [
      "Бицепс бедра"
    ],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "Фитнес"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Приседания сумо: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "nogi-yagodichnye-myshcy-otvedenie-nogi-nazad-v-krossovere",
    "name": "Отведение ноги назад в кроссовере",
    "category": "Ноги",
    "subcategory": "Ягодичные мышцы",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Ягодичные мышцы",
    "secondaryMuscles": [
      "Бицепс бедра"
    ],
    "equipment": [
      "Кроссовер"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "Фитнес"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Отведение ноги назад в кроссовере: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "nogi-yagodichnye-myshcy-otvedenie-bedra-v-trenazhere",
    "name": "Отведение бедра в тренажёре",
    "category": "Ноги",
    "subcategory": "Ягодичные мышцы",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Ягодичные мышцы",
    "secondaryMuscles": [
      "Бицепс бедра"
    ],
    "equipment": [
      "Тренажёр"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "Фитнес"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Отведение бедра в тренажёре: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "nogi-ikronozhnye-myshcy-podem-na-noski-stoya",
    "name": "Подъём на носки стоя",
    "category": "Ноги",
    "subcategory": "Икроножные мышцы",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Икроножные мышцы",
    "secondaryMuscles": [],
    "equipment": [
      "Тренажёр"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "Фитнес"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Подъём на носки стоя: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "nogi-ikronozhnye-myshcy-podem-na-noski-sidya",
    "name": "Подъём на носки сидя",
    "category": "Ноги",
    "subcategory": "Икроножные мышцы",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Икроножные мышцы",
    "secondaryMuscles": [],
    "equipment": [
      "Тренажёр"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "Фитнес"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Подъём на носки сидя: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "nogi-ikronozhnye-myshcy-podem-na-noski-v-trenazhere",
    "name": "Подъём на носки в тренажёре",
    "category": "Ноги",
    "subcategory": "Икроножные мышцы",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Икроножные мышцы",
    "secondaryMuscles": [],
    "equipment": [
      "Тренажёр"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "Фитнес"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Подъём на носки в тренажёре: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "plechevoi-poyas-perednyaya-delta-armeiskii-zhim",
    "name": "Армейский жим",
    "category": "Плечевой пояс",
    "subcategory": "Передняя дельта",
    "exerciseType": "Базовое",
    "primaryMuscle": "Передняя дельта",
    "secondaryMuscles": [
      "Трицепс"
    ],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Реабилитация плеча"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Армейский жим: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "plechevoi-poyas-perednyaya-delta-zhim-stoya",
    "name": "Жим стоя",
    "category": "Плечевой пояс",
    "subcategory": "Передняя дельта",
    "exerciseType": "Базовое",
    "primaryMuscle": "Передняя дельта",
    "secondaryMuscles": [
      "Трицепс"
    ],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Реабилитация плеча"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Жим стоя: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "plechevoi-poyas-perednyaya-delta-zhim-sidya",
    "name": "Жим сидя",
    "category": "Плечевой пояс",
    "subcategory": "Передняя дельта",
    "exerciseType": "Базовое",
    "primaryMuscle": "Передняя дельта",
    "secondaryMuscles": [
      "Трицепс"
    ],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Реабилитация плеча"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Жим сидя: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "plechevoi-poyas-perednyaya-delta-podem-gantelei-pered-soboi",
    "name": "Подъём гантелей перед собой",
    "category": "Плечевой пояс",
    "subcategory": "Передняя дельта",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Передняя дельта",
    "secondaryMuscles": [
      "Ромбовидные"
    ],
    "equipment": [
      "Гантели"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Реабилитация плеча"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Подъём гантелей перед собой: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "plechevoi-poyas-srednyaya-delta-mahi-gantelyami-v-storony",
    "name": "Махи гантелями в стороны",
    "category": "Плечевой пояс",
    "subcategory": "Средняя дельта",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Средняя дельта",
    "secondaryMuscles": [
      "Ромбовидные"
    ],
    "equipment": [
      "Гантели"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Реабилитация плеча"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Махи гантелями в стороны: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "plechevoi-poyas-srednyaya-delta-mahi-v-krossovere",
    "name": "Махи в кроссовере",
    "category": "Плечевой пояс",
    "subcategory": "Средняя дельта",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Средняя дельта",
    "secondaryMuscles": [
      "Ромбовидные"
    ],
    "equipment": [
      "Кроссовер"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Реабилитация плеча"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Махи в кроссовере: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "plechevoi-poyas-srednyaya-delta-otvedeniya-v-trenazhere",
    "name": "Отведения в тренажёре",
    "category": "Плечевой пояс",
    "subcategory": "Средняя дельта",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Средняя дельта",
    "secondaryMuscles": [
      "Ромбовидные"
    ],
    "equipment": [
      "Тренажёр"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Реабилитация плеча"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Отведения в тренажёре: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "plechevoi-poyas-zadnyaya-delta-face-pull",
    "name": "Face Pull",
    "category": "Плечевой пояс",
    "subcategory": "Задняя дельта",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Задняя дельта",
    "secondaryMuscles": [
      "Ромбовидные"
    ],
    "equipment": [
      "Кроссовер"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Реабилитация плеча"
    ],
    "imageUrl": "/exercises/face-pull.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Face Pull: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [
      "spina-rombovidnye-myshcy-tyaga-kanata-k-licu",
      "plechevoi-poyas-zadnyaya-delta-obratnaya-babochka",
      "ofp-i-reabilitaciya-plechevoi-poyas-band-pull-apart"
    ],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "plechevoi-poyas-zadnyaya-delta-obratnaya-babochka",
    "name": "Обратная бабочка",
    "category": "Плечевой пояс",
    "subcategory": "Задняя дельта",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Задняя дельта",
    "secondaryMuscles": [
      "Ромбовидные"
    ],
    "equipment": [
      "Тренажёр"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Реабилитация плеча"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Обратная бабочка: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "plechevoi-poyas-zadnyaya-delta-razvedeniya-v-naklone",
    "name": "Разведения в наклоне",
    "category": "Плечевой пояс",
    "subcategory": "Задняя дельта",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Задняя дельта",
    "secondaryMuscles": [
      "Ромбовидные"
    ],
    "equipment": [
      "Гантели"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Реабилитация плеча"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Разведения в наклоне: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "triceps-triceps-zhim-uzkim-hvatom",
    "name": "Жим узким хватом",
    "category": "Трицепс",
    "subcategory": "Трицепс",
    "exerciseType": "Базовое",
    "primaryMuscle": "Трицепс",
    "secondaryMuscles": [
      "Грудные мышцы",
      "Передняя дельта"
    ],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Жим лёжа",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/bench-press.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Жим узким хватом: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "triceps-triceps-otzhimaniya-na-brusyah",
    "name": "Отжимания на брусьях",
    "category": "Трицепс",
    "subcategory": "Трицепс",
    "exerciseType": "Базовое",
    "primaryMuscle": "Трицепс",
    "secondaryMuscles": [
      "Грудные мышцы",
      "Передняя дельта"
    ],
    "equipment": [
      "Кроссовер"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Жим лёжа",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Отжимания на брусьях: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "triceps-triceps-zhim-uzkim-hvatom-s-pauzoi",
    "name": "Жим узким хватом с паузой",
    "category": "Трицепс",
    "subcategory": "Трицепс",
    "exerciseType": "Базовое",
    "primaryMuscle": "Трицепс",
    "secondaryMuscles": [
      "Грудные мышцы",
      "Передняя дельта"
    ],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Жим лёжа",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/bench-press.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Жим узким хватом с паузой: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "triceps-triceps-francuzskii-zhim-lezha",
    "name": "Французский жим лёжа",
    "category": "Трицепс",
    "subcategory": "Трицепс",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Трицепс",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Жим лёжа",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Французский жим лёжа: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "triceps-triceps-francuzskii-zhim-sidya",
    "name": "Французский жим сидя",
    "category": "Трицепс",
    "subcategory": "Трицепс",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Трицепс",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Жим лёжа",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Французский жим сидя: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "triceps-triceps-razgibanie-ruk-na-verhnem-bloke",
    "name": "Разгибание рук на верхнем блоке",
    "category": "Трицепс",
    "subcategory": "Трицепс",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Трицепс",
    "secondaryMuscles": [],
    "equipment": [
      "Кроссовер"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Жим лёжа",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Разгибание рук на верхнем блоке: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "triceps-triceps-razgibanie-kanatom",
    "name": "Разгибание канатом",
    "category": "Трицепс",
    "subcategory": "Трицепс",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Трицепс",
    "secondaryMuscles": [],
    "equipment": [
      "Кроссовер"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Жим лёжа",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Разгибание канатом: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "triceps-triceps-razgibanie-odnoi-rukoi",
    "name": "Разгибание одной рукой",
    "category": "Трицепс",
    "subcategory": "Трицепс",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Трицепс",
    "secondaryMuscles": [],
    "equipment": [
      "Кроссовер"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Жим лёжа",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Разгибание одной рукой: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "biceps-biceps-podtyagivaniya-obratnym-hvatom",
    "name": "Подтягивания обратным хватом",
    "category": "Бицепс",
    "subcategory": "Бицепс",
    "exerciseType": "Базовое",
    "primaryMuscle": "Бицепс",
    "secondaryMuscles": [
      "Широчайшие"
    ],
    "equipment": [
      "Собственный вес"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "Фитнес"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Подтягивания обратным хватом: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "biceps-biceps-podem-shtangi-na-biceps",
    "name": "Подъём штанги на бицепс",
    "category": "Бицепс",
    "subcategory": "Бицепс",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Бицепс",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "Фитнес"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Подъём штанги на бицепс: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "biceps-biceps-podem-ez-grifa",
    "name": "Подъём EZ-грифа",
    "category": "Бицепс",
    "subcategory": "Бицепс",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Бицепс",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "Фитнес"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Подъём EZ-грифа: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "biceps-biceps-podem-gantelei-stoya",
    "name": "Подъём гантелей стоя",
    "category": "Бицепс",
    "subcategory": "Бицепс",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Бицепс",
    "secondaryMuscles": [],
    "equipment": [
      "Гантели"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "Фитнес"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Подъём гантелей стоя: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "biceps-biceps-molotki",
    "name": "Молотки",
    "category": "Бицепс",
    "subcategory": "Бицепс",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Бицепс",
    "secondaryMuscles": [],
    "equipment": [
      "Гантели"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "Фитнес"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Молотки: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "biceps-biceps-koncentrirovannyi-podem",
    "name": "Концентрированный подъём",
    "category": "Бицепс",
    "subcategory": "Бицепс",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Бицепс",
    "secondaryMuscles": [],
    "equipment": [
      "Гантели"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "Фитнес"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Концентрированный подъём: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "pauerlifting-zhim-lezha-klassicheskii-zhim",
    "name": "Классический жим",
    "category": "Пауэрлифтинг",
    "subcategory": "Жим лёжа",
    "exerciseType": "Базовое",
    "primaryMuscle": "Грудные мышцы",
    "secondaryMuscles": [
      "Трицепс",
      "Передняя дельта"
    ],
    "equipment": [
      "Штанга",
      "Скамья"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Жим лёжа",
      "Пауэрлифтинг",
      "Народный жим"
    ],
    "imageUrl": "/exercises/bench-press.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Классический жим: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [
      "grudnye-myshcy-bazovye-uprazhneniya-zhim-lezha-srednim-hvato",
      "grudnye-myshcy-bazovye-uprazhneniya-zhim-lezha-uzkim-hvatom",
      "grudnye-myshcy-bazovye-uprazhneniya-zhim-erika-spoto",
      "grudnye-myshcy-bazovye-uprazhneniya-zhim-gantelei-lezha"
    ],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "pauerlifting-zhim-lezha-pauza-2-sek",
    "name": "Пауза 2 сек",
    "category": "Пауэрлифтинг",
    "subcategory": "Жим лёжа",
    "exerciseType": "Базовое",
    "primaryMuscle": "Грудные мышцы",
    "secondaryMuscles": [
      "Трицепс",
      "Передняя дельта"
    ],
    "equipment": [
      "Штанга",
      "Скамья"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Жим лёжа",
      "Пауэрлифтинг",
      "Народный жим"
    ],
    "imageUrl": "/exercises/bench-press.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Пауза 2 сек: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "pauerlifting-zhim-lezha-pauza-6-sek",
    "name": "Пауза 6 сек",
    "category": "Пауэрлифтинг",
    "subcategory": "Жим лёжа",
    "exerciseType": "Базовое",
    "primaryMuscle": "Грудные мышцы",
    "secondaryMuscles": [
      "Трицепс",
      "Передняя дельта"
    ],
    "equipment": [
      "Штанга",
      "Скамья"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Жим лёжа",
      "Пауэрлифтинг",
      "Народный жим"
    ],
    "imageUrl": "/exercises/bench-press.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Пауза 6 сек: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "pauerlifting-zhim-lezha-spoto-press",
    "name": "Спото-пресс",
    "category": "Пауэрлифтинг",
    "subcategory": "Жим лёжа",
    "exerciseType": "Базовое",
    "primaryMuscle": "Грудные мышцы",
    "secondaryMuscles": [
      "Трицепс",
      "Передняя дельта"
    ],
    "equipment": [
      "Штанга",
      "Скамья"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Жим лёжа",
      "Пауэрлифтинг",
      "Народный жим"
    ],
    "imageUrl": "/exercises/bench-press.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Спото-пресс: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "pauerlifting-zhim-lezha-zhim-s-dosok-5-sm",
    "name": "Жим с досок 5 см",
    "category": "Пауэрлифтинг",
    "subcategory": "Жим лёжа",
    "exerciseType": "Базовое",
    "primaryMuscle": "Грудные мышцы",
    "secondaryMuscles": [
      "Трицепс",
      "Передняя дельта"
    ],
    "equipment": [
      "Штанга",
      "Скамья"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Жим лёжа",
      "Пауэрлифтинг",
      "Народный жим"
    ],
    "imageUrl": "/exercises/bench-press.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Жим с досок 5 см: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "pauerlifting-zhim-lezha-zhim-s-dosok-10-sm",
    "name": "Жим с досок 10 см",
    "category": "Пауэрлифтинг",
    "subcategory": "Жим лёжа",
    "exerciseType": "Базовое",
    "primaryMuscle": "Грудные мышцы",
    "secondaryMuscles": [
      "Трицепс",
      "Передняя дельта"
    ],
    "equipment": [
      "Штанга",
      "Скамья"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Жим лёжа",
      "Пауэрлифтинг",
      "Народный жим"
    ],
    "imageUrl": "/exercises/bench-press.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Жим с досок 10 см: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "pauerlifting-zhim-lezha-zhim-s-dosok-15-sm",
    "name": "Жим с досок 15 см",
    "category": "Пауэрлифтинг",
    "subcategory": "Жим лёжа",
    "exerciseType": "Базовое",
    "primaryMuscle": "Грудные мышцы",
    "secondaryMuscles": [
      "Трицепс",
      "Передняя дельта"
    ],
    "equipment": [
      "Штанга",
      "Скамья"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Жим лёжа",
      "Пауэрлифтинг",
      "Народный жим"
    ],
    "imageUrl": "/exercises/bench-press.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Жим с досок 15 см: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "pauerlifting-zhim-lezha-negativnyi-zhim",
    "name": "Негативный жим",
    "category": "Пауэрлифтинг",
    "subcategory": "Жим лёжа",
    "exerciseType": "Базовое",
    "primaryMuscle": "Грудные мышцы",
    "secondaryMuscles": [
      "Трицепс",
      "Передняя дельта"
    ],
    "equipment": [
      "Штанга",
      "Скамья"
    ],
    "difficultyLevel": "Продвинутый",
    "sportTags": [
      "Жим лёжа",
      "Пауэрлифтинг",
      "Народный жим"
    ],
    "imageUrl": "/exercises/bench-press.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Негативный жим: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "pauerlifting-zhim-lezha-izometricheskii-zhim",
    "name": "Изометрический жим",
    "category": "Пауэрлифтинг",
    "subcategory": "Жим лёжа",
    "exerciseType": "Базовое",
    "primaryMuscle": "Грудные мышцы",
    "secondaryMuscles": [
      "Трицепс",
      "Передняя дельта"
    ],
    "equipment": [
      "Штанга",
      "Скамья"
    ],
    "difficultyLevel": "Продвинутый",
    "sportTags": [
      "Жим лёжа",
      "Пауэрлифтинг",
      "Народный жим"
    ],
    "imageUrl": "/exercises/bench-press.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Изометрический жим: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "pauerlifting-zhim-lezha-zhim-s-cepyami",
    "name": "Жим с цепями",
    "category": "Пауэрлифтинг",
    "subcategory": "Жим лёжа",
    "exerciseType": "Базовое",
    "primaryMuscle": "Грудные мышцы",
    "secondaryMuscles": [
      "Трицепс",
      "Передняя дельта"
    ],
    "equipment": [
      "Штанга",
      "Скамья"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Жим лёжа",
      "Пауэрлифтинг",
      "Народный жим"
    ],
    "imageUrl": "/exercises/bench-press.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Жим с цепями: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "pauerlifting-zhim-lezha-zhim-s-rezinoi",
    "name": "Жим с резиной",
    "category": "Пауэрлифтинг",
    "subcategory": "Жим лёжа",
    "exerciseType": "Базовое",
    "primaryMuscle": "Грудные мышцы",
    "secondaryMuscles": [
      "Трицепс",
      "Передняя дельта"
    ],
    "equipment": [
      "Штанга",
      "Скамья"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Жим лёжа",
      "Пауэрлифтинг",
      "Народный жим"
    ],
    "imageUrl": "/exercises/bench-press.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Жим с резиной: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "pauerlifting-zhim-lezha-zhim-srednim-hvatom",
    "name": "Жим средним хватом",
    "category": "Пауэрлифтинг",
    "subcategory": "Жим лёжа",
    "exerciseType": "Базовое",
    "primaryMuscle": "Грудные мышцы",
    "secondaryMuscles": [
      "Трицепс",
      "Передняя дельта"
    ],
    "equipment": [
      "Штанга",
      "Скамья"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Жим лёжа",
      "Пауэрлифтинг",
      "Народный жим"
    ],
    "imageUrl": "/exercises/bench-press.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Жим средним хватом: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "pauerlifting-zhim-lezha-zhim-uzkim-hvatom",
    "name": "Жим узким хватом",
    "category": "Пауэрлифтинг",
    "subcategory": "Жим лёжа",
    "exerciseType": "Базовое",
    "primaryMuscle": "Грудные мышцы",
    "secondaryMuscles": [
      "Трицепс",
      "Передняя дельта"
    ],
    "equipment": [
      "Штанга",
      "Скамья"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Жим лёжа",
      "Пауэрлифтинг",
      "Народный жим"
    ],
    "imageUrl": "/exercises/bench-press.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Жим узким хватом: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "pauerlifting-zhim-lezha-skorostnoi-zhim",
    "name": "Скоростной жим",
    "category": "Пауэрлифтинг",
    "subcategory": "Жим лёжа",
    "exerciseType": "Базовое",
    "primaryMuscle": "Грудные мышцы",
    "secondaryMuscles": [
      "Трицепс",
      "Передняя дельта"
    ],
    "equipment": [
      "Штанга",
      "Скамья"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Жим лёжа",
      "Пауэрлифтинг",
      "Народный жим"
    ],
    "imageUrl": "/exercises/bench-press.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Скоростной жим: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "pauerlifting-zhim-lezha-klasternyi-zhim",
    "name": "Кластерный жим",
    "category": "Пауэрлифтинг",
    "subcategory": "Жим лёжа",
    "exerciseType": "Базовое",
    "primaryMuscle": "Грудные мышцы",
    "secondaryMuscles": [
      "Трицепс",
      "Передняя дельта"
    ],
    "equipment": [
      "Штанга",
      "Скамья"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Жим лёжа",
      "Пауэрлифтинг",
      "Народный жим"
    ],
    "imageUrl": "/exercises/bench-press.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Кластерный жим: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "pauerlifting-zhim-lezha-singly",
    "name": "Синглы",
    "category": "Пауэрлифтинг",
    "subcategory": "Жим лёжа",
    "exerciseType": "Базовое",
    "primaryMuscle": "Грудные мышцы",
    "secondaryMuscles": [
      "Трицепс",
      "Передняя дельта"
    ],
    "equipment": [
      "Штанга",
      "Скамья"
    ],
    "difficultyLevel": "Продвинутый",
    "sportTags": [
      "Жим лёжа",
      "Пауэрлифтинг",
      "Народный жим"
    ],
    "imageUrl": "/exercises/bench-press.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Синглы: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "pauerlifting-zhim-lezha-dably",
    "name": "Даблы",
    "category": "Пауэрлифтинг",
    "subcategory": "Жим лёжа",
    "exerciseType": "Базовое",
    "primaryMuscle": "Грудные мышцы",
    "secondaryMuscles": [
      "Трицепс",
      "Передняя дельта"
    ],
    "equipment": [
      "Штанга",
      "Скамья"
    ],
    "difficultyLevel": "Продвинутый",
    "sportTags": [
      "Жим лёжа",
      "Пауэрлифтинг",
      "Народный жим"
    ],
    "imageUrl": "/exercises/bench-press.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Даблы: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "pauerlifting-prisedaniya-klassicheskie",
    "name": "Классические",
    "category": "Пауэрлифтинг",
    "subcategory": "Приседания",
    "exerciseType": "Базовое",
    "primaryMuscle": "Квадрицепс",
    "secondaryMuscles": [
      "Ягодичные",
      "Кор"
    ],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/squat.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Классические: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "pauerlifting-prisedaniya-s-pauzoi",
    "name": "С паузой",
    "category": "Пауэрлифтинг",
    "subcategory": "Приседания",
    "exerciseType": "Базовое",
    "primaryMuscle": "Квадрицепс",
    "secondaryMuscles": [
      "Ягодичные",
      "Кор"
    ],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/squat.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "С паузой: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "pauerlifting-prisedaniya-na-tumbu",
    "name": "На тумбу",
    "category": "Пауэрлифтинг",
    "subcategory": "Приседания",
    "exerciseType": "Базовое",
    "primaryMuscle": "Квадрицепс",
    "secondaryMuscles": [
      "Ягодичные",
      "Кор"
    ],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/squat.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "На тумбу: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "pauerlifting-prisedaniya-frontalnye",
    "name": "Фронтальные",
    "category": "Пауэрлифтинг",
    "subcategory": "Приседания",
    "exerciseType": "Базовое",
    "primaryMuscle": "Квадрицепс",
    "secondaryMuscles": [
      "Ягодичные",
      "Кор"
    ],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/squat.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Фронтальные: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "pauerlifting-prisedaniya-s-cepyami",
    "name": "С цепями",
    "category": "Пауэрлифтинг",
    "subcategory": "Приседания",
    "exerciseType": "Базовое",
    "primaryMuscle": "Квадрицепс",
    "secondaryMuscles": [
      "Ягодичные",
      "Кор"
    ],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/squat.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "С цепями: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "pauerlifting-prisedaniya-s-rezinoi",
    "name": "С резиной",
    "category": "Пауэрлифтинг",
    "subcategory": "Приседания",
    "exerciseType": "Базовое",
    "primaryMuscle": "Квадрицепс",
    "secondaryMuscles": [
      "Ягодичные",
      "Кор"
    ],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/squat.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "С резиной: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "pauerlifting-prisedaniya-tempovye-prisedaniya",
    "name": "Темповые приседания",
    "category": "Пауэрлифтинг",
    "subcategory": "Приседания",
    "exerciseType": "Базовое",
    "primaryMuscle": "Квадрицепс",
    "secondaryMuscles": [
      "Ягодичные",
      "Кор"
    ],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/squat.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Темповые приседания: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "pauerlifting-stanovaya-tyaga-klassika",
    "name": "Классика",
    "category": "Пауэрлифтинг",
    "subcategory": "Становая тяга",
    "exerciseType": "Базовое",
    "primaryMuscle": "Разгибатели спины",
    "secondaryMuscles": [
      "Ягодичные",
      "Бицепс бедра"
    ],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/deadlift.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Классика: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "pauerlifting-stanovaya-tyaga-sumo",
    "name": "Сумо",
    "category": "Пауэрлифтинг",
    "subcategory": "Становая тяга",
    "exerciseType": "Базовое",
    "primaryMuscle": "Разгибатели спины",
    "secondaryMuscles": [
      "Ягодичные",
      "Бицепс бедра"
    ],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/deadlift.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Сумо: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "pauerlifting-stanovaya-tyaga-s-pauzoi-nizhe-kolen",
    "name": "С паузой ниже колен",
    "category": "Пауэрлифтинг",
    "subcategory": "Становая тяга",
    "exerciseType": "Базовое",
    "primaryMuscle": "Разгибатели спины",
    "secondaryMuscles": [
      "Ягодичные",
      "Бицепс бедра"
    ],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/deadlift.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "С паузой ниже колен: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "pauerlifting-stanovaya-tyaga-s-pauzoi-na-kolenyah",
    "name": "С паузой на коленях",
    "category": "Пауэрлифтинг",
    "subcategory": "Становая тяга",
    "exerciseType": "Базовое",
    "primaryMuscle": "Разгибатели спины",
    "secondaryMuscles": [
      "Ягодичные",
      "Бицепс бедра"
    ],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/deadlift.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "С паузой на коленях: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "pauerlifting-stanovaya-tyaga-s-pauzoi-vyshe-kolen",
    "name": "С паузой выше колен",
    "category": "Пауэрлифтинг",
    "subcategory": "Становая тяга",
    "exerciseType": "Базовое",
    "primaryMuscle": "Разгибатели спины",
    "secondaryMuscles": [
      "Ягодичные",
      "Бицепс бедра"
    ],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/deadlift.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "С паузой выше колен: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "pauerlifting-stanovaya-tyaga-s-deficita",
    "name": "С дефицита",
    "category": "Пауэрлифтинг",
    "subcategory": "Становая тяга",
    "exerciseType": "Базовое",
    "primaryMuscle": "Разгибатели спины",
    "secondaryMuscles": [
      "Ягодичные",
      "Бицепс бедра"
    ],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/deadlift.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "С дефицита: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "pauerlifting-stanovaya-tyaga-s-plintov",
    "name": "С плинтов",
    "category": "Пауэрлифтинг",
    "subcategory": "Становая тяга",
    "exerciseType": "Базовое",
    "primaryMuscle": "Разгибатели спины",
    "secondaryMuscles": [
      "Ягодичные",
      "Бицепс бедра"
    ],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/deadlift.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "С плинтов: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "pauerlifting-stanovaya-tyaga-rumynskaya",
    "name": "Румынская",
    "category": "Пауэрлифтинг",
    "subcategory": "Становая тяга",
    "exerciseType": "Базовое",
    "primaryMuscle": "Разгибатели спины",
    "secondaryMuscles": [
      "Ягодичные",
      "Бицепс бедра"
    ],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/deadlift.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Румынская: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "pauerlifting-stanovaya-tyaga-tempovaya-tyaga",
    "name": "Темповая тяга",
    "category": "Пауэрлифтинг",
    "subcategory": "Становая тяга",
    "exerciseType": "Базовое",
    "primaryMuscle": "Разгибатели спины",
    "secondaryMuscles": [
      "Ягодичные",
      "Бицепс бедра"
    ],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/deadlift.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Темповая тяга: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "ofp-i-reabilitaciya-kor-planka",
    "name": "Планка",
    "category": "ОФП и Реабилитация",
    "subcategory": "Кор",
    "exerciseType": "Реабилитация",
    "primaryMuscle": "Кор",
    "secondaryMuscles": [],
    "equipment": [
      "Собственный вес"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "ОФП",
      "Возраст 40+",
      "Возраст 50+",
      "Возраст 60+"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Планка: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "ofp-i-reabilitaciya-kor-bokovaya-planka",
    "name": "Боковая планка",
    "category": "ОФП и Реабилитация",
    "subcategory": "Кор",
    "exerciseType": "Реабилитация",
    "primaryMuscle": "Кор",
    "secondaryMuscles": [],
    "equipment": [
      "Собственный вес"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "ОФП",
      "Возраст 40+",
      "Возраст 50+",
      "Возраст 60+"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Боковая планка: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "ofp-i-reabilitaciya-kor-planka-s-podemom-ruki",
    "name": "Планка с подъёмом руки",
    "category": "ОФП и Реабилитация",
    "subcategory": "Кор",
    "exerciseType": "Реабилитация",
    "primaryMuscle": "Кор",
    "secondaryMuscles": [],
    "equipment": [
      "Тренажёр"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "ОФП",
      "Возраст 40+",
      "Возраст 50+",
      "Возраст 60+"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Планка с подъёмом руки: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "ofp-i-reabilitaciya-kor-planka-s-podemom-nogi",
    "name": "Планка с подъёмом ноги",
    "category": "ОФП и Реабилитация",
    "subcategory": "Кор",
    "exerciseType": "Реабилитация",
    "primaryMuscle": "Кор",
    "secondaryMuscles": [],
    "equipment": [
      "Тренажёр"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "ОФП",
      "Возраст 40+",
      "Возраст 50+",
      "Возраст 60+"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Планка с подъёмом ноги: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "ofp-i-reabilitaciya-kor-dead-bug",
    "name": "Dead Bug",
    "category": "ОФП и Реабилитация",
    "subcategory": "Кор",
    "exerciseType": "Реабилитация",
    "primaryMuscle": "Кор",
    "secondaryMuscles": [],
    "equipment": [
      "Собственный вес"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "ОФП",
      "Возраст 40+",
      "Возраст 50+",
      "Возраст 60+"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Dead Bug: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "ofp-i-reabilitaciya-kor-bird-dog",
    "name": "Bird Dog",
    "category": "ОФП и Реабилитация",
    "subcategory": "Кор",
    "exerciseType": "Реабилитация",
    "primaryMuscle": "Кор",
    "secondaryMuscles": [],
    "equipment": [
      "Собственный вес"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "ОФП",
      "Возраст 40+",
      "Возраст 50+",
      "Возраст 60+"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Bird Dog: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "ofp-i-reabilitaciya-kor-hollow-hold",
    "name": "Hollow Hold",
    "category": "ОФП и Реабилитация",
    "subcategory": "Кор",
    "exerciseType": "Реабилитация",
    "primaryMuscle": "Кор",
    "secondaryMuscles": [],
    "equipment": [
      "Собственный вес"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "ОФП",
      "Возраст 40+",
      "Возраст 50+",
      "Возраст 60+"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Hollow Hold: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "ofp-i-reabilitaciya-poyasnica-giperekstenziya",
    "name": "Гиперэкстензия",
    "category": "ОФП и Реабилитация",
    "subcategory": "Поясница",
    "exerciseType": "Реабилитация",
    "primaryMuscle": "Разгибатели спины",
    "secondaryMuscles": [],
    "equipment": [
      "Тренажёр"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "Реабилитация поясницы",
      "Возраст 40+",
      "Возраст 50+",
      "Возраст 60+"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Гиперэкстензия: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "ofp-i-reabilitaciya-poyasnica-obratnaya-giperekstenziya",
    "name": "Обратная гиперэкстензия",
    "category": "ОФП и Реабилитация",
    "subcategory": "Поясница",
    "exerciseType": "Реабилитация",
    "primaryMuscle": "Разгибатели спины",
    "secondaryMuscles": [],
    "equipment": [
      "Тренажёр"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "Реабилитация поясницы",
      "Возраст 40+",
      "Возраст 50+",
      "Возраст 60+"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Обратная гиперэкстензия: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "ofp-i-reabilitaciya-poyasnica-good-morning",
    "name": "Good Morning",
    "category": "ОФП и Реабилитация",
    "subcategory": "Поясница",
    "exerciseType": "Реабилитация",
    "primaryMuscle": "Разгибатели спины",
    "secondaryMuscles": [],
    "equipment": [
      "Тренажёр"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "Реабилитация поясницы",
      "Возраст 40+",
      "Возраст 50+",
      "Возраст 60+"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Good Morning: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "ofp-i-reabilitaciya-poyasnica-bird-dog",
    "name": "Bird Dog",
    "category": "ОФП и Реабилитация",
    "subcategory": "Поясница",
    "exerciseType": "Реабилитация",
    "primaryMuscle": "Разгибатели спины",
    "secondaryMuscles": [],
    "equipment": [
      "Собственный вес"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "Реабилитация поясницы",
      "Возраст 40+",
      "Возраст 50+",
      "Возраст 60+"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Bird Dog: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "ofp-i-reabilitaciya-plechevoi-poyas-face-pull",
    "name": "Face Pull",
    "category": "ОФП и Реабилитация",
    "subcategory": "Плечевой пояс",
    "exerciseType": "Реабилитация",
    "primaryMuscle": "Плечевой пояс",
    "secondaryMuscles": [],
    "equipment": [
      "Тренажёр"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "Реабилитация плеча",
      "Возраст 40+",
      "Возраст 50+",
      "Возраст 60+"
    ],
    "imageUrl": "/exercises/face-pull.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Face Pull: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [
      "spina-rombovidnye-myshcy-tyaga-kanata-k-licu",
      "plechevoi-poyas-zadnyaya-delta-obratnaya-babochka",
      "ofp-i-reabilitaciya-plechevoi-poyas-band-pull-apart"
    ],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "ofp-i-reabilitaciya-plechevoi-poyas-vneshnyaya-rotaciya-plec",
    "name": "Внешняя ротация плеча",
    "category": "ОФП и Реабилитация",
    "subcategory": "Плечевой пояс",
    "exerciseType": "Реабилитация",
    "primaryMuscle": "Плечевой пояс",
    "secondaryMuscles": [],
    "equipment": [
      "Резина"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "Реабилитация плеча",
      "Возраст 40+",
      "Возраст 50+",
      "Возраст 60+"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Внешняя ротация плеча: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "ofp-i-reabilitaciya-plechevoi-poyas-vnutrennyaya-rotaciya-pl",
    "name": "Внутренняя ротация плеча",
    "category": "ОФП и Реабилитация",
    "subcategory": "Плечевой пояс",
    "exerciseType": "Реабилитация",
    "primaryMuscle": "Плечевой пояс",
    "secondaryMuscles": [],
    "equipment": [
      "Резина"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "Реабилитация плеча",
      "Возраст 40+",
      "Возраст 50+",
      "Возраст 60+"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Внутренняя ротация плеча: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "ofp-i-reabilitaciya-plechevoi-poyas-y-raise",
    "name": "Y Raise",
    "category": "ОФП и Реабилитация",
    "subcategory": "Плечевой пояс",
    "exerciseType": "Реабилитация",
    "primaryMuscle": "Плечевой пояс",
    "secondaryMuscles": [],
    "equipment": [
      "Тренажёр"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "Реабилитация плеча",
      "Возраст 40+",
      "Возраст 50+",
      "Возраст 60+"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Y Raise: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "ofp-i-reabilitaciya-plechevoi-poyas-t-raise",
    "name": "T Raise",
    "category": "ОФП и Реабилитация",
    "subcategory": "Плечевой пояс",
    "exerciseType": "Реабилитация",
    "primaryMuscle": "Плечевой пояс",
    "secondaryMuscles": [],
    "equipment": [
      "Тренажёр"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "Реабилитация плеча",
      "Возраст 40+",
      "Возраст 50+",
      "Возраст 60+"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "T Raise: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "ofp-i-reabilitaciya-plechevoi-poyas-band-pull-apart",
    "name": "Band Pull Apart",
    "category": "ОФП и Реабилитация",
    "subcategory": "Плечевой пояс",
    "exerciseType": "Реабилитация",
    "primaryMuscle": "Плечевой пояс",
    "secondaryMuscles": [],
    "equipment": [
      "Резина"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "Реабилитация плеча",
      "Возраст 40+",
      "Возраст 50+",
      "Возраст 60+"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Band Pull Apart: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "ofp-i-reabilitaciya-koleni-step-up",
    "name": "Step Up",
    "category": "ОФП и Реабилитация",
    "subcategory": "Колени",
    "exerciseType": "Реабилитация",
    "primaryMuscle": "Колени",
    "secondaryMuscles": [],
    "equipment": [
      "Тренажёр"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "Реабилитация колена",
      "Возраст 40+",
      "Возраст 50+",
      "Возраст 60+"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Step Up: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "ofp-i-reabilitaciya-koleni-ispanskie-prisedaniya",
    "name": "Испанские приседания",
    "category": "ОФП и Реабилитация",
    "subcategory": "Колени",
    "exerciseType": "Реабилитация",
    "primaryMuscle": "Колени",
    "secondaryMuscles": [],
    "equipment": [
      "Тренажёр"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "Реабилитация колена",
      "Возраст 40+",
      "Возраст 50+",
      "Возраст 60+"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Испанские приседания: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "ofp-i-reabilitaciya-koleni-razgibanie-kolena-rezinoi",
    "name": "Разгибание колена резиной",
    "category": "ОФП и Реабилитация",
    "subcategory": "Колени",
    "exerciseType": "Реабилитация",
    "primaryMuscle": "Колени",
    "secondaryMuscles": [],
    "equipment": [
      "Резина"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "Реабилитация колена",
      "Возраст 40+",
      "Возраст 50+",
      "Возраст 60+"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Разгибание колена резиной: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "ofp-i-reabilitaciya-koleni-hodba-bokom-s-rezinoi",
    "name": "Ходьба боком с резиной",
    "category": "ОФП и Реабилитация",
    "subcategory": "Колени",
    "exerciseType": "Реабилитация",
    "primaryMuscle": "Колени",
    "secondaryMuscles": [],
    "equipment": [
      "Резина"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "Реабилитация колена",
      "Возраст 40+",
      "Возраст 50+",
      "Возраст 60+"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Ходьба боком с резиной: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "kardio-nizkaya-intensivnost-hodba-na-dorozhke",
    "name": "Ходьба на дорожке",
    "category": "Кардио",
    "subcategory": "Низкая интенсивность",
    "exerciseType": "Кардио",
    "primaryMuscle": "Сердечно-сосудистая система",
    "secondaryMuscles": [],
    "equipment": [
      "Тренажёр"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "Похудение",
      "ОФП"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Ходьба на дорожке: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "kardio-nizkaya-intensivnost-hodba-pod-uklonom",
    "name": "Ходьба под уклоном",
    "category": "Кардио",
    "subcategory": "Низкая интенсивность",
    "exerciseType": "Кардио",
    "primaryMuscle": "Сердечно-сосудистая система",
    "secondaryMuscles": [],
    "equipment": [
      "Тренажёр"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "Похудение",
      "ОФП"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Ходьба под уклоном: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "kardio-nizkaya-intensivnost-velotrenazher",
    "name": "Велотренажёр",
    "category": "Кардио",
    "subcategory": "Низкая интенсивность",
    "exerciseType": "Кардио",
    "primaryMuscle": "Сердечно-сосудистая система",
    "secondaryMuscles": [],
    "equipment": [
      "Тренажёр"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "Похудение",
      "ОФП"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Велотренажёр: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "kardio-nizkaya-intensivnost-ellips",
    "name": "Эллипс",
    "category": "Кардио",
    "subcategory": "Низкая интенсивность",
    "exerciseType": "Кардио",
    "primaryMuscle": "Сердечно-сосудистая система",
    "secondaryMuscles": [],
    "equipment": [
      "Тренажёр"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "Похудение",
      "ОФП"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Эллипс: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "kardio-nizkaya-intensivnost-grebnoi-trenazher",
    "name": "Гребной тренажёр",
    "category": "Кардио",
    "subcategory": "Низкая интенсивность",
    "exerciseType": "Кардио",
    "primaryMuscle": "Сердечно-сосудистая система",
    "secondaryMuscles": [],
    "equipment": [
      "Тренажёр"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "Похудение",
      "ОФП"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Гребной тренажёр: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "kardio-nizkaya-intensivnost-lestnica",
    "name": "Лестница",
    "category": "Кардио",
    "subcategory": "Низкая интенсивность",
    "exerciseType": "Кардио",
    "primaryMuscle": "Сердечно-сосудистая система",
    "secondaryMuscles": [],
    "equipment": [
      "Тренажёр"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "Похудение",
      "ОФП"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Лестница: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "kardio-srednyaya-intensivnost-intervalnaya-hodba",
    "name": "Интервальная ходьба",
    "category": "Кардио",
    "subcategory": "Средняя интенсивность",
    "exerciseType": "Кардио",
    "primaryMuscle": "Сердечно-сосудистая система",
    "secondaryMuscles": [],
    "equipment": [
      "Тренажёр"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "Похудение",
      "ОФП"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Интервальная ходьба: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "kardio-srednyaya-intensivnost-intervalnyi-velosiped",
    "name": "Интервальный велосипед",
    "category": "Кардио",
    "subcategory": "Средняя интенсивность",
    "exerciseType": "Кардио",
    "primaryMuscle": "Сердечно-сосудистая система",
    "secondaryMuscles": [],
    "equipment": [
      "Тренажёр"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "Похудение",
      "ОФП"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Интервальный велосипед: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "kardio-srednyaya-intensivnost-intervalnyi-ellips",
    "name": "Интервальный эллипс",
    "category": "Кардио",
    "subcategory": "Средняя интенсивность",
    "exerciseType": "Кардио",
    "primaryMuscle": "Сердечно-сосудистая система",
    "secondaryMuscles": [],
    "equipment": [
      "Тренажёр"
    ],
    "difficultyLevel": "Новичок",
    "sportTags": [
      "Похудение",
      "ОФП"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Интервальный эллипс: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "kardio-vysokaya-intensivnost-sprinty",
    "name": "Спринты",
    "category": "Кардио",
    "subcategory": "Высокая интенсивность",
    "exerciseType": "Кардио",
    "primaryMuscle": "Сердечно-сосудистая система",
    "secondaryMuscles": [],
    "equipment": [
      "Собственный вес"
    ],
    "difficultyLevel": "Продвинутый",
    "sportTags": [
      "Похудение",
      "ОФП"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Спринты: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "kardio-vysokaya-intensivnost-intervaly-assault-bike",
    "name": "Интервалы Assault Bike",
    "category": "Кардио",
    "subcategory": "Высокая интенсивность",
    "exerciseType": "Кардио",
    "primaryMuscle": "Сердечно-сосудистая система",
    "secondaryMuscles": [],
    "equipment": [
      "Тренажёр"
    ],
    "difficultyLevel": "Продвинутый",
    "sportTags": [
      "Похудение",
      "ОФП"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Интервалы Assault Bike: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "kardio-vysokaya-intensivnost-intervaly-grebli",
    "name": "Интервалы гребли",
    "category": "Кардио",
    "subcategory": "Высокая интенсивность",
    "exerciseType": "Кардио",
    "primaryMuscle": "Сердечно-сосудистая система",
    "secondaryMuscles": [],
    "equipment": [
      "Тренажёр"
    ],
    "difficultyLevel": "Продвинутый",
    "sportTags": [
      "Похудение",
      "ОФП"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Интервалы гребли: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "pauerlifting-dopolnitelnye-varianty-zhim-lezha-temp-3-0-1",
    "name": "Жим лёжа - темп 3-0-1",
    "category": "Пауэрлифтинг",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Пауэрлифтинг",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Жим лёжа - темп 3-0-1: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "pauerlifting-dopolnitelnye-varianty-zhim-lezha-s-pauzoi-1-se",
    "name": "Жим лёжа - с паузой 1 сек",
    "category": "Пауэрлифтинг",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Пауэрлифтинг",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Жим лёжа - с паузой 1 сек: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "pauerlifting-dopolnitelnye-varianty-zhim-lezha-s-pauzoi-3-se",
    "name": "Жим лёжа - с паузой 3 сек",
    "category": "Пауэрлифтинг",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Пауэрлифтинг",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Жим лёжа - с паузой 3 сек: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "pauerlifting-dopolnitelnye-varianty-zhim-lezha-legkii-vossta",
    "name": "Жим лёжа - лёгкий восстановительный",
    "category": "Пауэрлифтинг",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Пауэрлифтинг",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Жим лёжа - лёгкий восстановительный: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "pauerlifting-dopolnitelnye-varianty-zhim-lezha-s-rezinoi",
    "name": "Жим лёжа - с резиной",
    "category": "Пауэрлифтинг",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Пауэрлифтинг",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Жим лёжа - с резиной: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "pauerlifting-dopolnitelnye-varianty-zhim-lezha-s-kontrolem-e",
    "name": "Жим лёжа - с контролем эксцентрики",
    "category": "Пауэрлифтинг",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Пауэрлифтинг",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Жим лёжа - с контролем эксцентрики: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "pauerlifting-dopolnitelnye-varianty-prisedaniya-temp-3-0-1",
    "name": "Приседания - темп 3-0-1",
    "category": "Пауэрлифтинг",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Пауэрлифтинг",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Приседания - темп 3-0-1: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "pauerlifting-dopolnitelnye-varianty-prisedaniya-s-pauzoi-1-s",
    "name": "Приседания - с паузой 1 сек",
    "category": "Пауэрлифтинг",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Пауэрлифтинг",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Приседания - с паузой 1 сек: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "pauerlifting-dopolnitelnye-varianty-prisedaniya-s-pauzoi-3-s",
    "name": "Приседания - с паузой 3 сек",
    "category": "Пауэрлифтинг",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Пауэрлифтинг",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Приседания - с паузой 3 сек: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "pauerlifting-dopolnitelnye-varianty-prisedaniya-legkii-vosst",
    "name": "Приседания - лёгкий восстановительный",
    "category": "Пауэрлифтинг",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Пауэрлифтинг",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Приседания - лёгкий восстановительный: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "pauerlifting-dopolnitelnye-varianty-prisedaniya-s-rezinoi",
    "name": "Приседания - с резиной",
    "category": "Пауэрлифтинг",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Пауэрлифтинг",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Приседания - с резиной: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "pauerlifting-dopolnitelnye-varianty-prisedaniya-s-kontrolem-",
    "name": "Приседания - с контролем эксцентрики",
    "category": "Пауэрлифтинг",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Пауэрлифтинг",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Приседания - с контролем эксцентрики: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "spina-dopolnitelnye-varianty-tyaga-shtangi-v-naklone-temp-3-",
    "name": "Тяга штанги в наклоне - темп 3-0-1",
    "category": "Спина",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Спина",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Тяга штанги в наклоне - темп 3-0-1: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "spina-dopolnitelnye-varianty-tyaga-shtangi-v-naklone-s-pauzo",
    "name": "Тяга штанги в наклоне - с паузой 1 сек",
    "category": "Спина",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Спина",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Тяга штанги в наклоне - с паузой 1 сек: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "spina-dopolnitelnye-varianty-tyaga-shtangi-v-naklone-s-pauzo-2",
    "name": "Тяга штанги в наклоне - с паузой 3 сек",
    "category": "Спина",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Спина",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Тяга штанги в наклоне - с паузой 3 сек: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "spina-dopolnitelnye-varianty-tyaga-shtangi-v-naklone-legkii-",
    "name": "Тяга штанги в наклоне - лёгкий восстановительный",
    "category": "Спина",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Спина",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Тяга штанги в наклоне - лёгкий восстановительный: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "spina-dopolnitelnye-varianty-tyaga-shtangi-v-naklone-s-rezin",
    "name": "Тяга штанги в наклоне - с резиной",
    "category": "Спина",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Спина",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Тяга штанги в наклоне - с резиной: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "spina-dopolnitelnye-varianty-tyaga-shtangi-v-naklone-s-kontr",
    "name": "Тяга штанги в наклоне - с контролем эксцентрики",
    "category": "Спина",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Спина",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Тяга штанги в наклоне - с контролем эксцентрики: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "nogi-dopolnitelnye-varianty-frontalnyi-prised-temp-3-0-1",
    "name": "Фронтальный присед - темп 3-0-1",
    "category": "Ноги",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Ноги",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Фронтальный присед - темп 3-0-1: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "nogi-dopolnitelnye-varianty-frontalnyi-prised-s-pauzoi-1-sek",
    "name": "Фронтальный присед - с паузой 1 сек",
    "category": "Ноги",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Ноги",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Фронтальный присед - с паузой 1 сек: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "nogi-dopolnitelnye-varianty-frontalnyi-prised-s-pauzoi-3-sek",
    "name": "Фронтальный присед - с паузой 3 сек",
    "category": "Ноги",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Ноги",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Фронтальный присед - с паузой 3 сек: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "nogi-dopolnitelnye-varianty-frontalnyi-prised-legkii-vosstan",
    "name": "Фронтальный присед - лёгкий восстановительный",
    "category": "Ноги",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Ноги",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Фронтальный присед - лёгкий восстановительный: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "nogi-dopolnitelnye-varianty-frontalnyi-prised-s-rezinoi",
    "name": "Фронтальный присед - с резиной",
    "category": "Ноги",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Ноги",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Фронтальный присед - с резиной: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "nogi-dopolnitelnye-varianty-frontalnyi-prised-s-kontrolem-ek",
    "name": "Фронтальный присед - с контролем эксцентрики",
    "category": "Ноги",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Ноги",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Фронтальный присед - с контролем эксцентрики: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "triceps-dopolnitelnye-varianty-razgibanie-na-triceps-temp-3-",
    "name": "Разгибание на трицепс - темп 3-0-1",
    "category": "Трицепс",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Трицепс",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Разгибание на трицепс - темп 3-0-1: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "triceps-dopolnitelnye-varianty-razgibanie-na-triceps-s-pauzo",
    "name": "Разгибание на трицепс - с паузой 1 сек",
    "category": "Трицепс",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Трицепс",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Разгибание на трицепс - с паузой 1 сек: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "triceps-dopolnitelnye-varianty-razgibanie-na-triceps-s-pauzo-2",
    "name": "Разгибание на трицепс - с паузой 3 сек",
    "category": "Трицепс",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Трицепс",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Разгибание на трицепс - с паузой 3 сек: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "triceps-dopolnitelnye-varianty-razgibanie-na-triceps-legkii-",
    "name": "Разгибание на трицепс - лёгкий восстановительный",
    "category": "Трицепс",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Трицепс",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Разгибание на трицепс - лёгкий восстановительный: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "triceps-dopolnitelnye-varianty-razgibanie-na-triceps-s-rezin",
    "name": "Разгибание на трицепс - с резиной",
    "category": "Трицепс",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Трицепс",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Разгибание на трицепс - с резиной: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "triceps-dopolnitelnye-varianty-razgibanie-na-triceps-s-kontr",
    "name": "Разгибание на трицепс - с контролем эксцентрики",
    "category": "Трицепс",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Трицепс",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Разгибание на трицепс - с контролем эксцентрики: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "ofp-i-reabilitaciya-dopolnitelnye-varianty-face-pull-temp-3-",
    "name": "Face Pull - темп 3-0-1",
    "category": "ОФП и Реабилитация",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "ОФП и Реабилитация",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Face Pull - темп 3-0-1: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "ofp-i-reabilitaciya-dopolnitelnye-varianty-face-pull-s-pauzo",
    "name": "Face Pull - с паузой 1 сек",
    "category": "ОФП и Реабилитация",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "ОФП и Реабилитация",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Face Pull - с паузой 1 сек: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "ofp-i-reabilitaciya-dopolnitelnye-varianty-face-pull-s-pauzo-2",
    "name": "Face Pull - с паузой 3 сек",
    "category": "ОФП и Реабилитация",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "ОФП и Реабилитация",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Face Pull - с паузой 3 сек: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "ofp-i-reabilitaciya-dopolnitelnye-varianty-face-pull-legkii-",
    "name": "Face Pull - лёгкий восстановительный",
    "category": "ОФП и Реабилитация",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "ОФП и Реабилитация",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Face Pull - лёгкий восстановительный: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "ofp-i-reabilitaciya-dopolnitelnye-varianty-face-pull-s-rezin",
    "name": "Face Pull - с резиной",
    "category": "ОФП и Реабилитация",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "ОФП и Реабилитация",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Face Pull - с резиной: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "ofp-i-reabilitaciya-dopolnitelnye-varianty-face-pull-s-kontr",
    "name": "Face Pull - с контролем эксцентрики",
    "category": "ОФП и Реабилитация",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "ОФП и Реабилитация",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Face Pull - с контролем эксцентрики: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "ofp-i-reabilitaciya-dopolnitelnye-varianty-giperekstenziya-t",
    "name": "Гиперэкстензия - темп 3-0-1",
    "category": "ОФП и Реабилитация",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "ОФП и Реабилитация",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Гиперэкстензия - темп 3-0-1: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "ofp-i-reabilitaciya-dopolnitelnye-varianty-giperekstenziya-s",
    "name": "Гиперэкстензия - с паузой 1 сек",
    "category": "ОФП и Реабилитация",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "ОФП и Реабилитация",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Гиперэкстензия - с паузой 1 сек: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "ofp-i-reabilitaciya-dopolnitelnye-varianty-giperekstenziya-s-2",
    "name": "Гиперэкстензия - с паузой 3 сек",
    "category": "ОФП и Реабилитация",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "ОФП и Реабилитация",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Гиперэкстензия - с паузой 3 сек: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "ofp-i-reabilitaciya-dopolnitelnye-varianty-giperekstenziya-l",
    "name": "Гиперэкстензия - лёгкий восстановительный",
    "category": "ОФП и Реабилитация",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "ОФП и Реабилитация",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Гиперэкстензия - лёгкий восстановительный: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "ofp-i-reabilitaciya-dopolnitelnye-varianty-giperekstenziya-s-3",
    "name": "Гиперэкстензия - с резиной",
    "category": "ОФП и Реабилитация",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "ОФП и Реабилитация",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Гиперэкстензия - с резиной: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "ofp-i-reabilitaciya-dopolnitelnye-varianty-giperekstenziya-s-4",
    "name": "Гиперэкстензия - с контролем эксцентрики",
    "category": "ОФП и Реабилитация",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "ОФП и Реабилитация",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Гиперэкстензия - с контролем эксцентрики: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "plechevoi-poyas-dopolnitelnye-varianty-mahi-gantelyami-v-sto",
    "name": "Махи гантелями в стороны - темп 3-0-1",
    "category": "Плечевой пояс",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Плечевой пояс",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Махи гантелями в стороны - темп 3-0-1: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "plechevoi-poyas-dopolnitelnye-varianty-mahi-gantelyami-v-sto-2",
    "name": "Махи гантелями в стороны - с паузой 1 сек",
    "category": "Плечевой пояс",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Плечевой пояс",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Махи гантелями в стороны - с паузой 1 сек: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "plechevoi-poyas-dopolnitelnye-varianty-mahi-gantelyami-v-sto-3",
    "name": "Махи гантелями в стороны - с паузой 3 сек",
    "category": "Плечевой пояс",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Плечевой пояс",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Махи гантелями в стороны - с паузой 3 сек: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "plechevoi-poyas-dopolnitelnye-varianty-mahi-gantelyami-v-sto-4",
    "name": "Махи гантелями в стороны - лёгкий восстановительный",
    "category": "Плечевой пояс",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Плечевой пояс",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Махи гантелями в стороны - лёгкий восстановительный: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "plechevoi-poyas-dopolnitelnye-varianty-mahi-gantelyami-v-sto-5",
    "name": "Махи гантелями в стороны - с резиной",
    "category": "Плечевой пояс",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Плечевой пояс",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Махи гантелями в стороны - с резиной: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "plechevoi-poyas-dopolnitelnye-varianty-mahi-gantelyami-v-sto-6",
    "name": "Махи гантелями в стороны - с контролем эксцентрики",
    "category": "Плечевой пояс",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Плечевой пояс",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Махи гантелями в стороны - с контролем эксцентрики: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "grudnye-myshcy-dopolnitelnye-varianty-zhim-gantelei-lezha-te",
    "name": "Жим гантелей лёжа - темп 3-0-1",
    "category": "Грудные мышцы",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Грудные мышцы",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Жим гантелей лёжа - темп 3-0-1: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "grudnye-myshcy-dopolnitelnye-varianty-zhim-gantelei-lezha-s-",
    "name": "Жим гантелей лёжа - с паузой 1 сек",
    "category": "Грудные мышцы",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Грудные мышцы",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Жим гантелей лёжа - с паузой 1 сек: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "grudnye-myshcy-dopolnitelnye-varianty-zhim-gantelei-lezha-s--2",
    "name": "Жим гантелей лёжа - с паузой 3 сек",
    "category": "Грудные мышцы",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Грудные мышцы",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Жим гантелей лёжа - с паузой 3 сек: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "grudnye-myshcy-dopolnitelnye-varianty-zhim-gantelei-lezha-le",
    "name": "Жим гантелей лёжа - лёгкий восстановительный",
    "category": "Грудные мышцы",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Грудные мышцы",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Жим гантелей лёжа - лёгкий восстановительный: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "grudnye-myshcy-dopolnitelnye-varianty-zhim-gantelei-lezha-s--3",
    "name": "Жим гантелей лёжа - с резиной",
    "category": "Грудные мышцы",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Грудные мышцы",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Жим гантелей лёжа - с резиной: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "grudnye-myshcy-dopolnitelnye-varianty-zhim-gantelei-lezha-s--4",
    "name": "Жим гантелей лёжа - с контролем эксцентрики",
    "category": "Грудные мышцы",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Грудные мышцы",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Жим гантелей лёжа - с контролем эксцентрики: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "nogi-dopolnitelnye-varianty-rumynskaya-tyaga-temp-3-0-1",
    "name": "Румынская тяга - темп 3-0-1",
    "category": "Ноги",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Ноги",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Румынская тяга - темп 3-0-1: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "nogi-dopolnitelnye-varianty-rumynskaya-tyaga-s-pauzoi-1-sek",
    "name": "Румынская тяга - с паузой 1 сек",
    "category": "Ноги",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Ноги",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Румынская тяга - с паузой 1 сек: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "nogi-dopolnitelnye-varianty-rumynskaya-tyaga-s-pauzoi-3-sek",
    "name": "Румынская тяга - с паузой 3 сек",
    "category": "Ноги",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Ноги",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Румынская тяга - с паузой 3 сек: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "nogi-dopolnitelnye-varianty-rumynskaya-tyaga-legkii-vosstano",
    "name": "Румынская тяга - лёгкий восстановительный",
    "category": "Ноги",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Ноги",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Румынская тяга - лёгкий восстановительный: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "nogi-dopolnitelnye-varianty-rumynskaya-tyaga-s-rezinoi",
    "name": "Румынская тяга - с резиной",
    "category": "Ноги",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Ноги",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Румынская тяга - с резиной: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  },
  {
    "id": "nogi-dopolnitelnye-varianty-rumynskaya-tyaga-s-kontrolem-eks",
    "name": "Румынская тяга - с контролем эксцентрики",
    "category": "Ноги",
    "subcategory": "Дополнительные варианты",
    "exerciseType": "Подсобное",
    "primaryMuscle": "Ноги",
    "secondaryMuscles": [],
    "equipment": [
      "Штанга"
    ],
    "difficultyLevel": "Средний",
    "sportTags": [
      "ОФП",
      "Пауэрлифтинг"
    ],
    "imageUrl": "/exercises/default.jpg",
    "gifUrl": "",
    "videoUrl": "",
    "description": "Румынская тяга - с контролем эксцентрики: контроль техники, рабочий диапазон движения, без боли и без потери позиции корпуса.",
    "commonMistakes": "Слишком большой вес, потеря контроля, рывок, отсутствие стабильности корпуса.",
    "coachTip": "Работать технично. Если появляется боль выше 5/10 - снизить нагрузку и заменить упражнение.",
    "replacementExerciseIds": [],
    "isActive": true,
    "defaultSets": "3",
    "defaultReps": "8",
    "defaultRest": "90 сек"
  }
];

export const EXERCISE_STORAGE_KEY = 'agashka_stage11_exercise_library';

export const DIFFICULTY_LEVELS = ['Новичок', 'Средний', 'Продвинутый', 'Элитный'] as const;
export const EXERCISE_TYPES = ['Базовое', 'Подсобное', 'Реабилитация', 'Кардио'] as const;
export const EQUIPMENT_OPTIONS = ['Штанга', 'Гантели', 'Резина', 'Цепи', 'Кроссовер', 'Тренажёр', 'Собственный вес', 'TRX', 'Гиря', 'Скамья'] as const;
export const SPORT_TAG_OPTIONS = ['Жим лёжа', 'Пауэрлифтинг', 'Народный жим', 'ОФП', 'Фитнес', 'Похудение', 'Набор массы', 'Реабилитация плеча', 'Реабилитация колена', 'Реабилитация поясницы', 'Возраст 40+', 'Возраст 50+', 'Возраст 60+'] as const;

export const TRAINING_DAY_OPTIONS = {
  3: ['Понедельник', 'Среда', 'Пятница'],
  4: ['Понедельник', 'Вторник', 'Четверг', 'Суббота'],
  5: ['Понедельник', 'Вторник', 'Среда', 'Пятница', 'Суббота'],
} as const;

export function getInitialExerciseLibrary(): ExerciseCmsItem[] {
  return EXERCISE_LIBRARY;
}

export function normalizeExerciseForPlan(exercise: ExerciseCmsItem) {
  return {
    id: exercise.id,
    name: exercise.name,
    category: exercise.category,
    imageUrl: exercise.imageUrl || '/exercises/default.jpg',
    defaultSets: exercise.defaultSets || '3',
    defaultReps: exercise.defaultReps || '8',
    defaultRest: exercise.defaultRest || '90 сек',
    coachTip: exercise.coachTip || exercise.description || '',
  };
}
