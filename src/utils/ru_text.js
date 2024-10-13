const texts = {
  authorizationPage: {
    bannerText: "Помогать животным проще вместе с FreeVet!+++",
  },
  authOptions: {
    register: "Зарегистрироваться+++",
    or: "или+++",
    login: "Войти+++",
  },
  registrationPage: {
      header: "Создать новый аккаунт+++",
      addPhoto: "Добавить фото+++",
      nameLabel: "Имя+++",
      placeholderName: "Ваше имя+++",
      nameErrorRequired: "Имя обязательно+++",
      nameErrorMinLength: "Минимум 2 символа+++",
      phoneLabel: "Телефон+++",
      phoneErrorRequired: "Телефон обязателен+++",
      phoneErrorPattern: "Введите корректный номер телефона+++",
      submitButton: "Отправить код+++",
      privacyPolicyText: "Нажимая на кнопку Отправить код, Вы соглашаетесь<br></br>с Политикой конфиденциальности+++",
  },
  burgerMenu: {
    editProfile: "Редактировать профиль+++",
    settings: "Настройки+++",
  },
  codeInputBox: {
    codeLabel: "Код+++",
    requiredError: "Вы ввели неправильный код! Попробуйте еще раз+++",
    resendText: "Не пришел код?+++",
    resendButton: "Отправить код повторно+++",
    resendWait: "Запросить код повторно можно через {{seconds}} секунд+++",
  },
  customButton: {
      submitText: "Отправить+++", 
      disabledText: "Недоступно+++", 
  },
  customButtonSubmit: {
      submitText: "Отправить+++", 
      disabledText: "Недоступно+++", 
  },
  customCheckbox: {
      checkedTooltip: "Чекбокс отмечен+++",  
      uncheckedTooltip: "Чекбокс не отмечен+++", 
  },
  customInput: {
      defaultErrorMessage: "Пожалуйста, заполните это поле+++", 
  },
  customMessage: {
      questionTitle: "Вопрос №+++", 
      awaitingResponse: "Ожидает ответа+++", 
      homelessAnimal: "Бездомное животное+++", 
  },
  customPetCard: {
      statusMessage: 'Статус:+++', 
  },
  customStickTitle: {
      userText: "Пользователь+++",  
  },
  fileUploader: {
      uploadLimitError: "Вы можете загрузить до {{maxFiles}} файлов.+++",
      unsupportedFileType: "Файл {{fileName}} имеет неподдерживаемый тип.+++",
  },
  footer: {
      main: "Главная+++",
      profile: "Профиль+++",
      donate: "Поддержать+++",
      service: "О сервисе+++",
  },
  userRolePage: {
      header: "Статус участника+++",
      role: "Выберите Вашу роль в сервисе+++",
      helpWithFreeVet: "Кому Вы планиуете помогать с FreeVet?+++",
      helpHomelessAnimals: "Бездомным животным+++",
      helpPets: "Домашним животным+++",
      tellAboutYourself: "Расскажите о себе+++",
      volunteer: "Я - волонтер+++",
      shelterWorker: "Я - сотудник приюта+++",
      havePet: "У меня есть домашнее животное+++",
      userStick: "Пользователь+++",
      or: "или+++",
      wantToJoin: "Вы хотите стать участником команды Freevet?+++",
      vetDoctor: "Я - ветеринар+++",
      cynologist: "Я - кинолог+++",
      zooPsychologist: "Я - зоопсихолог+++",
      vetStick: "Специалист+++",
      saveBtn: "Сохранить+++",
  },
  l_createVetBookPage:{
    header: "Ветеринарная книжка+++",
    noBook: "Похоже, что у Вашего любимца<br></br>еще нет цифровой ветеринарной книжки :(",
    petName: "Имя Любимца",
    namePlaceholder:"Введите имя животного+++",
    addPhoto: "Добавьте фото+++",
    petArt: "Вид животного+++",
    petWeight: "Примерный вес животного+++",
    petGender: "Пол животного+++",
    vetBook_description: "Ветеринарная книжка -<br></br>это цифровая версия паспорта животного<br></br>с полезными функциями,<br></br>упрощающими процесс заботы+++",
    noCreateBtn: "Не создавать +++",
    createBtn: "Создать+++",
  },
  form: {
    createAccount: "Создать аккаунт+++",
    name: "Имя+++",
    phone: "Телефон+++",
    namePlaceholder: "Введите ваше имя+++",
    phonePlaceholder: "++++",
    addPhoto: "Добавить фото+++",
    selectRole: "Выберите вашу роль+++",
    helpWithFreeVet: "Помогите с бесплатным ветеринаром+++",
    helpHomelessAnimals: "Помогите бездомным животным+++",
    helpPets: "Помогите домашним животным+++",
    tellAboutYourself: "Расскажите о себе+++",
    volunteer: "Волонтер+++",
    shelterWorker: "Работник приюта+++",
    havePet: "У меня есть питомец+++",
    or: "или+++",
    wantToJoin: "Хотите присоединиться к нам?+++",
    vetDoctor: "Ветеринар+++",
    cynologist: "Кинолог+++",
    zooPsychologist: "Зоопсихолог+++",
    phoneLogin: "Вход по телефону еще не реализован+++",
},
  formHeader: {
      backButtonAlt: "Назад+++", 
       title: "Создать новый аккаунт", 
  },
  questionPage: {
      title: "Задать вопрос+++", 
      animalSelection: "Выберите животное,<br />по которому хотите задать вопрос+++",
      newAnimal: "Животные<br />без цифровых ветеринарных книжек+++",
      addAnimal: "Новое животное+++",
      continueButton: "Продолжить+++", 
  },
  closeQuestionPage: {
      header: "Закрыть вопрос+++", 
      confirmation: "Вы уверены, что хотите закрыть вопрос?+++",
      ratingPrompt: "Пожалуйста, оцените ответы ветеринарного врача <br /> по шкале от 1 до 10, <br /> где 1 - совсем не понравилось, <br /> 10 - все супер! &#42+++",
      feedbackPrompt: "Вы можете оставить свой отзыв+++",
      submitButton: "Закрыть вопрос+++", 
  },
  descriptionAnimalPage: {
      title: "Задать вопрос+++",
      addMedia: "Добавьте фото и (или) видео+++",
      petArt: "Вид животного+++",
      petWeight: "Примерный вес животного+++",
      petGender: "Пол животного+++",
      homelessCheckbox: "Животное является бездомным+++",
      continueButton: "Продолжить+++",
      requiredSymbol: "*+++",
      validationMessages: {
          petArt: {
              required: "Вид животного обязательно+++",
              minLength: "Минимум 2 символа+++",
          },
          petWeight: {
              required: "Вес животного обязательно+++",
              minLength: "Минимум 2 символа+++",
          },
          petGender: {
              required: "Пол животного обязательно+++",
              minLength: "Минимум 2 символа+++",
          },
      },
  },
  sendQuestionPage: {
      header: "Задать вопрос+++",
      addedMedia: "Добавленные фото и (или) видео+++",
      noPhotos: "Фото отсутствует+++",
      petArt: "Вид животного+++",
      petWeight: "Примерный вес животного+++",
      petGender: "Пол животного+++",
      homeless: "Животное бездомное: +++",
      questionPlaceholder: "Введите текст+++", 
      submitButton: "Отправить вопрос+++", 
      requiredField: "Поле обязательно для заполнения+++",
  },
  mainHeader: {
      title: "Добро пожаловать в FreeVet+++",
      description: "Сервис экосистемы TailBook, предоставляющий возможность бесплатно задавать вопросы квалифицированным опытным ветеринарным врачам и получать ответы на них.+++"
  },
  verificationPage: {
    header: "Проверка телефона+++", 
    enterCode: "Пожалуйста введите полученный Вами<br></br>на указанный телефон код+++", 
    confirm: "Подтвердить+++", 
  },
  vetVerificationPage: {
    header: "Верификация+++",
    notAuthorized: "Похоже, что у Вы еще не авторизованы<br></br>в сервисе в качестве специалиста :(+++",
    additionalData: "Пожалуйста, укажите дополнительные данные,<br></br>для авторизации Вас в качестве специалиста+++",
    nameLabel: "Имя и Фамилия полностью+++",
    nameRequired: "Имя обязательно+++",
    nameMinLength: "Минимум два символа+++",
    documentsLabel: "Подалуйста, добавьте документы,<br></br>подтверждающие Вашу квалификацию+++",
    additionalInfoLabel: "Также Вы можете указать дополнительную информацию+++",
    emailLabel: "Email+++",
    emailRequired: "Email обязательно+++",
    emailPattern: "+++",
    telegramLabel: "Telegram+++",
    telegramRequired: "Telegraml обязательно+++",
    telegramMinLength: "+++",
    specializationLabel: "Укажите Вашу спецификацию+++",
    specializationRequired: "Спецификация обязательна+++",
    specializationMinLength: "Минимум пять символов+++",
    petArtLabel: "Укажите животных (кошки, собаки и т.д.),<br></br>на помощи которым Вы специализируетесь+++",
    petArtRequired: "Поле обязательно+++",
    petArtMinLength: "Минимум пять символов+++",
    dataReliability: "Достоверность представленных сведений подтверждаю+++",
    submitBtn: "Отправить+++",
    cancelBtn: "Отмена+++",

  },
  opportunity: {
      title: "Возможности+++",
      askQuestion: "Задать вопрос+++",
      clinicNavigator: "Навигатор ветклиник+++",
      pharmacyNavigator: "Навигатор ветаптек+++",
      veterinaryBooks: "Ветеринарные книжки+++",
      onlineReception: "Онлайн-прием+++",
      more: "И многое другое+++",
      inDevelopment: "в разработке+++",
  },
  questionPetList: {
      title: "Животные<br></br>с цифровыми ветеринарными книжками+++",
  },
  statistics: {
      title: "Статистика помощи+++",
      helpedAnimals: "животным оказана помощь+++",
      helpedThisMonth: "животным помогли в этом месяце+++",
      donatedAmount: "евро пожертвовано на развитие проекта+++",
      thankYou: "Спасибо за Вашу поддержку!+++",
  },
  accordion: {
      additionalDescription: {
        title: "Дополнительное описание+++",
        breed: { label: "Порода+++", placeholder: "Беспородный длинношерстный+++" },
        color: { label: "Окрас+++", placeholder: "Рыжий+++" },
        age: { label: "Возраст+++", placeholder: "Введите возраст+++" },
        weight: { label: "Вес+++", placeholder: "Введите вес+++" },
        status: { label: "Статус+++", placeholder: "Введите статус+++" },
        identification: "Идентификация+++",
        rabiesVaccination: "Вакцинация против бешенства+++",
        otherVaccinations: "Другие вакцинации+++",
        deworming: "Дегельминтизация+++",
        ectoparasiteTreatment: "Обработка от эктопаразитов+++",
        clinicalExamination: "Клинический осмотр+++",
        registration: "Регистрация+++",
        files: "Файлы+++",
      },
      photo: {
        title: "Добавить фото+++",
        fileLabel: "Прикрепите файл+++", 
        limitMessage: "Загрузите до {{maxFiles}} файлов.+++", 
        unsupportedMessage: "Файл {{fileName}} имеет неподдерживаемый тип.+++",
      },
  },
  inputPlaceholders: {
    breed_placeholder: "Беспородный длинношерстный+++", 
    color_placeholder: "Рыжий+++", 
    age_placeholder: "Введите возраст+++", 
    weight_placeholder: "Введите вес+++", 
    status_placeholder: "Введите статус+++", 
  },
  userPage:{
    userName: "Андрей Еремин+++",
    userRoleVolunteer: "Я - волонтер+++",
    userRolePetOwner: "У меня есть домашнее животное+++",
    myQuestions: "Мои вопросы+++",
    allQuestions: "все+++",
    animalInfo: "Уличный кот итд...+++",
    vetBooks: "Ветеринарные книжки+++",
    allVetBooks: "все+++",
    myAnimalsTitle: "Мои животные+++",
    strayAnimalsTitle: "Бездомные животные+++",
  }
};

export default texts;
