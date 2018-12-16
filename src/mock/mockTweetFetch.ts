import { Tweet } from "src/common/types";

const minutesBefore = (date: Date, delta: number): Date => {
  date.setMinutes(date.getMinutes() - delta);
  return date;
};

const hoursBefore = (date: Date, delta: number): Date => {
  date.setMinutes(date.getHours() - delta);
  return date;
};

export const getTweets = (): Tweet[] => [
  {
    user: {
      name: "Brad Chacos",
      displayId: "BradChacos",
      imageUrl: "https://pbs.twimg.com/profile_images/30252282/peeps_bigger.png"
    },
    content: `Treat people with love and respect. Treat them as you would be treated. It's a hard world out there, don't make it harder
  #love #respect`,
    time: minutesBefore(new Date(), 2)
  },
  {
    user: {
      name: "Bryan Harris",
      displayId: "BryanHarris",
      imageUrl:
        "https://pbs.twimg.com/profile_images/730612231021322240/Rl0_QYhL_bigger.jpg"
    },
    content: `Text REDCROSS to 90999 to make a $10 donation to help #Haiyan victims. Give more here: http://rdcrss.org/16SdgLr .`,
    time: hoursBefore(new Date(), 1)
  },
  {
    user: {
      name: "Brad Chacos",
      displayId: "BradChacos",
      imageUrl: "https://pbs.twimg.com/profile_images/30252282/peeps_bigger.png"
    },
    content: `Treat people with love and respect. Treat them as you would be treated. It's a hard world out there, don't make it harder
  #love #respect`,
    time: minutesBefore(new Date(), 2)
  },
  {
    user: {
      name: "Bryan Harris",
      displayId: "BryanHarris",
      imageUrl:
        "https://pbs.twimg.com/profile_images/730612231021322240/Rl0_QYhL_bigger.jpg"
    },
    content: `Text REDCROSS to 90999 to make a $10 donation to help #Haiyan victims. Give more here: http://rdcrss.org/16SdgLr .`,
    time: hoursBefore(new Date(), 1)
  },
  {
    user: {
      name: "Brad Chacos",
      displayId: "BradChacos",
      imageUrl: "https://pbs.twimg.com/profile_images/30252282/peeps_bigger.png"
    },
    content: `Treat people with love and respect. Treat them as you would be treated. It's a hard world out there, don't make it harder
  #love #respect`,
    time: minutesBefore(new Date(), 2)
  },
  {
    user: {
      name: "Bryan Harris",
      displayId: "BryanHarris",
      imageUrl:
        "https://pbs.twimg.com/profile_images/730612231021322240/Rl0_QYhL_bigger.jpg"
    },
    content: `Text REDCROSS to 90999 to make a $10 donation to help #Haiyan victims. Give more here: http://rdcrss.org/16SdgLr .`,
    time: hoursBefore(new Date(), 1)
  }
];
