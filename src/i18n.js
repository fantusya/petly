import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: false,
    fallbackLng: 'en',
    // interpolation: {
    //   escapeValue: false, // not needed for react as it escapes by default
    // },
    resources: {
      en: {
        translation: {
          News: 'News',
          Find_pet: 'Find pet',
          Our_friends: 'Our friends',
          Login: 'Login',
          Log_in: 'Login',
          Registration: 'Registration',
          Register: 'Register',
          Password: 'Password',
          Login_with_Google: 'Login with Google',
          Signup_with_Google: 'Signup with Google',
          No_account: `Don't have an account?`,
          Is_account: 'Already have an account?',
          Add_pet: 'Add pet',
          You_can_add_pet:
            'You can add a pet for others to buy or take it into good hands.',
          Length_tittle: 'Length of title should be 2-16 letters',
          Length_name: 'Length of name should be 2-16 letters',
          Time: 'Time',
          Address: 'Address',
          Email: 'Email',
          Phone: 'Phone',
          Title: 'Take good care of your small pets',
          City_region: 'City, region',
          Mobile_phone: 'Mobile phone',
          Chose_image: 'Choose an image to change your avatar!',
          Photo_selected: 'Photo selected. Click on the 📸 "Edit photo"',
          Find_your_pet: 'Find your favorite pet',
          The_sex: 'The sex',
          Male: 'Male',
          Female: 'Female',
          Location: 'Location',
          Price: 'Price',
          Type_Location: 'Type Location (City, Region)',
          Type_price: 'Type price',
          Load_img: `Load the pet’s image:`,
          Comments: 'Comments',
          Done: 'Done',
          Back: 'Back',
          lost_found: 'lost/found',
          in_good_hands: 'in good hands',
          sell: 'sell',
          Tittle_of_ad: 'Tittle of ad ',
          Name_pet: 'Name pet',
          Type_name_pet: 'Type name pet',
          Date_of_birth: 'Date of birth',
          BirthDate_format: 'birthDate should be in format dd.mm.yyyy',
          Type_date_of_birth: 'Type date of birth',
          Type_breed: 'Type breed',
          Add_photo_comments: 'Add photo and some comments',
          Type_comments: 'Type comments',
          Breed: 'Breed',
          Next: 'Next',
          Cancel: 'Cancel',
          Please_login: 'Please log in to add your notice!',
          Choose_category: 'Choose category',
          Title_is_required: 'Title is required',
          Min_char: 'Min 2 characters',
          Must_contain_char: 'Must contain only cahracters and spaces',
          Char_max: '48 characters max',
          Name_required: 'Name is required',
          Sixteen_char_max: '16 characters max',
          Choose_date_birth: 'Choose date of birth',
          Date_past: 'Date must be in the past',
          Breed_required: 'Breed is required',
          Only_letters: 'only letters',
          Tw_char_max: '24 characters max',
          Type_location: 'Type the location',
          Choose_sex: 'Choose sex',
          Set_price: 'Set price',
          Numbers_only: 'Numbers only',
          Eight_char_min: 'Min 8 characters',
          Oh_char_max: '120 characters max',
          Please_login_or_register: 'Please login or register',
          Data_loading: 'Data is loading',
          Error: 'Error...',
          No_contact_information: 'No contact information',
          Remove_from: 'Remove from',
          Add_to: 'Add to',
          Two_or_three_weeks_ago: 'Two or three weeks ago',
          Enter_phone: 'Please enter your phone',
          New_User: 'New User',
          Place: 'Place',
          Age: 'Age',
          Learn_more: 'Learn more',
          favorite_ads: 'favorite ads',
          my_ads: 'my ads',
          My_pets: 'My pets',
          Name: 'Name',
          Log_out: 'Log out',
          Edit_photo: 'Edit photo',
          City: 'City',
          My_information: 'My information',
          Account: 'Account',
          Type_name: 'Type name',
          Search: 'Search',
          Confirm_Password: 'Confirm password',
          Birthday: 'Birthday',
          email_match: 'Email must be in format mail@mail.com',
          at_least_five: 'At least 5 symbols',
          required_field: 'Required field',
          no_space: 'Space is not allowed',
          at_least_seven: 'At least 7 symbols',
          max_tt: 'Maximum 32 symbols',
          Passwords_match: 'Passwords must match',
          Only_cyrillic_latin: 'Only cyrillic and latin letters are allowed',
          Should_City:
            'Should be "City, Region" separated by comma, only letters can be accepted',
          at_least_twelve: 'At least 12 symbols',
          Max_fifty: 'Maximum 50 symbols',
          Invalid_email: 'Invalid email',
          Email_required: 'Email is a required field',
          Password_contain:
            'Password can contain any letters and symbols without spaces',
          Password_required: 'Password is a required field',
          Use_letters: 'Use only letters',
          Birthdate_required: 'Required birth date',
          Delete: 'Delete',
          Contact: 'Contact',
          Read_more: 'Read more',
          only_numbers: 'Use only numbers!',
          greater_zero: 'Type a number greater than 0!',
          Try_again: 'Please, try again!',
          Type_pet_location: 'Type pet location',
          Load_pet_image: `Load the pet's image`,
          Step_one_comment:
            'You can add a pet for others to buy or take it into good hands.',
          Type_notice_title: 'Type notice title',
          Select_the_date: 'Select the date',
        },
      },
      uk: {
        translation: {
          News: 'Новини',
          Find_pet: 'Оголошення',
          Our_friends: 'Наші друзі',
          Login: 'Логін',
          Log_in: 'Увійдіть',
          Registration: 'Реєстрація',
          Register: 'Зареєструйтесь',
          Password: 'Пароль',
          Login_with_Google: 'Увійдіть з Google',
          Signup_with_Google: 'Зареєструйтесь з Google',
          No_account: 'Ще немає аккаунта?',
          Is_account: 'Вже є аккаунт?',
          Add_pet: 'Додати улюбленця',
          You_can_add_pet:
            'Ви можете додати тваринку, аби інші могли її купити, або взяти в добрі руки.',
          Length_title: 'Довжина заголовку має бути 2-16 літер',
          Length_name: 'Довжина імені має бути 2-16 літер',
          Time: 'Час',
          Address: 'Адреса',
          Email: 'Пошта',
          Phone: 'Телефон',
          Title: 'Дбайте про своїх домашніх улюбленців',
          City_region: 'Місто, область',
          Mobile_phone: 'Мобільний телефон',
          Chose_image: 'Виберіть фото, щоб змінити аватар!',
          Photo_selected:
            'Фото вибране. Клікніть на 📸 щоб встановити зображення',
          Find_your_pet: 'Знайдіть свого улюбленця',
          The_sex: 'Стать',
          Male: 'Хлопчик',
          Female: 'Дівчинка',
          Location: 'Місце знаходження',
          Price: 'Ціна',
          Type_Location: 'Введіть місцезнаходження (Місто, Область)',
          Type_price: 'Введіть ціну',
          Load_img: `Додати фото тваринки:`,
          Comments: 'Коментарі',
          Done: 'Готово',
          Back: 'Назад',
          lost_found: 'зник/знайшовся',
          in_good_hands: 'в добрі руки',
          sell: 'продаж',
          Title_of_ad: 'Назва оголошення ',
          Name_pet: `Ім'я вихованця`,
          Type_name_pet: `Введіть ім'я вихованця`,
          Date_of_birth: 'Дата народження',
          BirthDate_format: 'Дата народження має бути у форматі дд.мм.рррр',
          Type_date_of_birth: 'Введіть дату народження',
          Type_breed: 'Введіть породу',
          Add_photo_comments: 'Додайте фото та коментар',
          Type_comments: 'Введіть коментар',
          Breed: 'Порода',
          Next: 'Далі',
          Cancel: 'Відміна',
          Please_login: 'Будь ласка, увійдіть, щоб додати оголошення!',
          Choose_category: 'Оберіть категорію',
          Title_is_required: `Заголовок обов'язковий`,
          Min_char: 'мінімум 2 символи',
          Must_contain_char: 'Може містити тільки літери і пробіли',
          Char_max: 'Максимум 48 символів',
          Name_required: `ім'я обов'язкове`,
          Sixteen_char_max: 'Максимум 16 символів',
          Choose_date_birth: 'Оберіть дату народження',
          Date_past: 'Дата може бути тільки в минулому',
          Breed_required: `Порода обов'язкова`,
          Only_letters: 'тільки літери',
          Tw_char_max: 'Максимум 24 символи',
          Type_location: 'Введіть місцезнаходження',
          Choose_sex: 'Оберіть стать',
          Set_price: 'Вкажіть ціну',
          Numbers_only: 'Тільки цифри',
          Eight_char_min: 'Мінімум 8 символів',
          Oh_char_max: 'Максимум 120 символів',
          Please_login_or_register: 'Будь ласка, увійдіть, або зареєструйтесь',
          Data_loading: 'Дані завантажуються',
          Error: 'Помилка...',
          No_contact_information: 'Немає контактної інформації',
          Remove_from: 'Видалити з',
          Add_to: 'Додати до',
          Two_or_three_weeks_ago: 'Два-три тижні тому',
          Enter_phone: 'Будь ласка, введіть телефон',
          New_User: 'Новий користувач',
          Place: 'Локація',
          Age: 'Вік',
          Learn_more: 'Дізнатись більше',
          favorite_ads: 'улюблені оголошення',
          my_ads: 'мої оголошення',
          My_pets: 'Мої улюбленці',
          Name: `Ім'я`,
          Log_out: 'Вийти',
          Edit_photo: 'Додати фото',
          City: 'Місто',
          My_information: 'Інформація',
          Account: 'Акаунт',
          Type_name: `Введіть назву оголошення`,
          Search: 'Пошук',
          Confirm_Password: 'Підтвердіть пароль',
          Birthday: 'Дата народження',
          email_match: 'Пошта повинна бути в форматі mail@mail.com',
          at_least_five: 'Щонайменше 5 символів',
          required_field: `Поле обов'язкове`,
          no_space: 'Пробіли не дозволяються',
          at_least_seven: 'Щонайменше 7 символів',
          max_tt: 'Максимум 32 символи',
          Passwords_match: 'Паролі повінні співпадати',
          Only_cyrillic_latin: 'Дозволені лише латинські літери та кирилиця',
          Should_City:
            '"Місто, область" повинні бути розділені комою, дозволені тільки літери',
          at_least_twelve: 'Щонайменше 12 символів',
          Max_fifty: 'Максимум 50 символів',
          Invalid_email: 'Невалідна пошта',
          Email_required: `Пошта обов'язкове поле`,
          Password_contain:
            'Пароль може містити будь-які букви і символи без пробілів',
          Password_required: `Пароль обов'язкове поле`,
          Use_letters: 'Використайте тільки букви',
          Birthdate_required: `Дата народження обов'язкова`,
          Delete: 'Видалити',
          Contact: `Зв'язатись`,
          Read_more: 'Більше...',
          only_numbers: 'Використайте тільки цифри!',
          greater_zero: 'Введіть число більше за 0!',
          Try_again: 'Будь ласка, спробуйте ще раз!',
          Type_pet_location: 'Вкажіть місцезнаходження улюбленця',
          Load_pet_image: `Завантажте фото улюбленця`,
          Step_one_comment:
            'Ви можете додати тванику, щоб інші люди могли її придбати, або взяти в добрі руки',
          Type_notice_title: 'Вкажіть заголовок оголошення',
          Select_the_date: 'Оберіть дату',
        },
      },
    },
  });

export default i18n;
