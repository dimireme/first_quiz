const quizQuestions = [


   {
        question: "Вы уже наш клиент?",
        type: "RadioAuth",
        answers: [
            {
                type: "Microsoft",
                content: "Да, у меня есть аккаунт"
            },
            {
                type: "Nintendo",
                content: "Нет, я еще не являюсь вашим клиентом"
            },

        ]
    },


  {
      question: "В какой стране вы продаете обувь",
      type: "Checkbox",
      answers: [
          {
              type: "Microsoft",
              content: "Россия"
          },
          {
              type: "Nintendo",
              content: "Беларусь"
          },
          {
              type: "Sony",
              content: "Казахстан"
          },
          {
              type: "TestSony",
              content: "Другая страна СНГ"
          }
      ]
  },
  {
      type: "Radio",
      question: "Укажите ваш город?",
      answers: [
          {
              type: "Microsoft",
              content: "Москва"
          },
          {
              type: "Nintendo",
              content: "Санкт-Петербург"
          },
          {
              type: "Sony",
              content: "Новосибирск"
          }
      ]
  },
  {
      question: "Кого вы представляете?",
      type: "Radio",
      answers: [
          {
              type: "Microsoft",
              content: "Совместная покупка"
          },
          {
              type: "Microsoft111",
              content: "Розничная покупка"
          },
          {
              type: "Nintendo",
              content: "Сеть магазинов"
          },

          {
              type: "Nintendo22",
              content: "Оптовый склад"
          },

      ]
  },
  {
      question: "Какие у вас объемы?",
      type: "Radio",
      answers: [
          {
              type: "Microsoft",
              content: "до 100 000 руб."
          },
          {
              type: "Nintendo",
              content: "100 000 - 200 000 руб."
          },
          {
              type: "Sony",
              content: "Свыше 200 000 руб."
          }
      ]
  },
  {
      question: "Вам нужно брендирование?",
      type: "Radio",
      answers: [
          {
              type: "Microsoft",
              content: "Да, обязательно"
          },
          {
              type: "Nintendo",
              content: "Нет, не принципиально"
          },

      ]
  },
    {
        question: "Какой товар вы закупаете?",
        type: "Radio",
        answers: [
            {
                type: "Microsoft",
                content: "Импортный"
            },
            {
                type: "Nintendo",
                content: "Отечественный"
            },

        ]
    }

];

export default quizQuestions;
