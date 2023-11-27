import UserAvatarImg from "common/assets/images/meetups/user-avatar.png";

const meetups = [
  {
    id: 1,
    img: "https://cdn.dribbble.com/assets/meetups/meetup-photo-1-cdb30d3bca9517ad18bd8cc3d018a7761fc821078d06ec8279c5285a6a6d5c52.jpg",
    title: "Диаграммы связей",
    date: "12.03.2022",
    text: "Сложно сказать, почему диаграммы связей, вне зависимости от их уровня, должны быть в равной степени предоставлены сами себе. ",
    isOnlineEvent: true,
    attendees: 126,
    users: [
      { name: "Эдгар Линде", descr: "Описание спикера", avatar: UserAvatarImg },
      {
        name: "Андрей Петров",
        descr: "Описание спикера",
        avatar: UserAvatarImg,
      },
    ],
  },
  {
    id: 2,
    img: "https://blog.twitch.tv/assets/uploads/6b21259746784994d3777fc96c6c47eb.jpeg",
    title: "Какой то ивент связей",
    date: "12.03.2022",
    text: "Сложно сказать, почему диаграммы связей, вне зависимости от их уровня, должны быть в равной степени предоставлены сами себе. ",
    isOnlineEvent: false,
    attendees: 126,
    users: [
      { name: "Эдгар Линде", descr: "Описание спикера", avatar: UserAvatarImg },
    ],
  },
  {
    id: 3,
    img: "https://play-lh.googleusercontent.com/dYEDGV8ri4Tv3ueym6OaM_nVKVYnLGvLBZ8cBkEyzQEOdgcmG7xFtnJfRatJh8c3NJ0",
    title: "Тестовый ивент для разрабов",
    date: "12.03.2022",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ",
    isOnlineEvent: true,
    users: [
      { name: "Эдгар Линде", descr: "Описание спикера", avatar: UserAvatarImg },
      {
        name: "Иван Петросян",
        descr: "Описание спикера",
        avatar: UserAvatarImg,
      },
    ],
  },
  {
    id: 4,
    img: "https://play-lh.googleusercontent.com/dYEDGV8ri4Tv3ueym6OaM_nVKVYnLGvLBZ8cBkEyzQEOdgcmG7xFtnJfRatJh8c3NJ0",
    title: "Диаграммы связей",
    date: "12.03.2022",
    text: "Сложно сказать, почему диаграммы связей, вне зависимости от их уровня, должны быть в равной степени предоставлены сами себе. ",
    isOnlineEvent: true,
    attendees: 126,
    users: [
      { name: "Эдгар Линде", descr: "Описание спикера", avatar: UserAvatarImg },
      {
        name: "Иван Петросян",
        descr: "Описание спикера",
        avatar: UserAvatarImg,
      },
      {
        name: "Андрей Петров",
        descr: "Описание спикера",
        avatar: UserAvatarImg,
      },
    ],
  },
  {
    id: 5,
    img: "https://blog.twitch.tv/assets/uploads/6b21259746784994d3777fc96c6c47eb.jpeg",
    title: "Диаграммы связей",
    date: "12.03.2022",
    text: "Сложно сказать, почему диаграммы связей, вне зависимости от их уровня, должны быть в равной степени предоставлены сами себе. ",
    isOnlineEvent: false,
    attendees: 126,
    users: [
      { name: "Эдгар Линде", descr: "Описание спикера", avatar: UserAvatarImg },

      {
        name: "Андрей Петров",
        descr: "Описание спикера",
        avatar: UserAvatarImg,
      },
    ],
  },
  {
    id: 6,
    img: "https://cdn.dribbble.com/assets/meetups/meetup-photo-1-cdb30d3bca9517ad18bd8cc3d018a7761fc821078d06ec8279c5285a6a6d5c52.jpg",
    title: "Диаграммы связей",
    date: "12.03.2022",
    text: "Сложно сказать, почему диаграммы связей, вне зависимости от их уровня, должны быть в равной степени предоставлены сами себе. ",
    isOnlineEvent: true,
    users: [
      { name: "Эдгар Линде", descr: "Описание спикера", avatar: UserAvatarImg },
    ],
  },
];
export default meetups;
