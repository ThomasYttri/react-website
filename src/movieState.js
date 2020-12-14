//Import Images
import athlete from "./img/athlete-small.png";
import goodtimes from "./img/goodtimes-small.png";
import theracer from "./img/theracer-small.png";
import athlete2 from "./img/athlete2.png";
import goodtimes2 from "./img/good-times2.jpg";
import theracer2 from "./img/the-racer2.jpg";

export const MovieState = () => {
    return [
        {
            title: "The Athlete",
            mainImg: athlete,
            mainImgAlt: "A man resting on the boxingring ropes, wearing boxinggloves" ,
            secondaryImg: athlete2,
            secondaryImgAlt: "Two men resting in a boxingring, wearing boxing equipment" ,
            url: "/work/the-athlete",
            awards: [
            {
                title: "Truly a masterpiecer",
                description: "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
            },
            {
                title: "Fresh look on a brutal sport.",
                description:
                    "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
            },
            {
                title: "It’s okay lmao.",
                description:
                    "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
            },
            ],
        },    
        {
            title: "Good Times",
            mainImg: goodtimes,
            mainImgAlt: "A man and woman hugging under a tree." ,
            url: "/work/good-times",
            secondaryImg: goodtimes2,
            secondaryImgAlt: "A man and a woman hiding from the rain under the mans jacket." ,
            awards: [
            {
                title: "Truly A masterpiece",
                description:
                    "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
            },
            {
                title: "Fresh look on a brutal sport.",
                description:
                    "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
            },
            {
                title: "It’s okay lmao.",
                description:
                    "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
            },
            ],
          },
          {
            title: "The Racer",
            mainImg: theracer,
            mainImgAlt: "A woman leaning on a old, yellow race car." ,
            url: "/work/the-racer",
            secondaryImg: theracer2,
            secondaryImgAlt: "A man riding an Aprilla motorcycle on the track, wearing full track gear" ,
            awards: [
            {
                title: "Truly A masterpiece",
                description:
                    "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
            },
            {
                title: "Fresh look on a brutal sport.",
                description:
                    "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
            },
            {
                title: "It’s okay lmao.",
                description:
                    "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
            },
            ],
        },
    ];
};