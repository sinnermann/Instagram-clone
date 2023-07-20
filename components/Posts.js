import Post from "./Post";

export default function Posts() {
  const posts = [
    {
      id: "1",
      username: "Ironman",
      userImg:
        "https://pbs.twimg.com/profile_images/1439953850471911426/s4pE9SYa_400x400.jpg",
      img: "https://a-static.besthdwallpaper.com/fast-furious-luke-hobbs-wallpaper-1920x1200-33715_6.jpg",
      caption: "Looking Cool!",
    },
    {
      id: "2",
      username: "Black Widow",
      userImg:
        "https://cdn.marvel.com/content/1x/042_bluebayou_digital_keyart_teaser_r16_lg.jpg",
      img: "https://images.thedirect.com/media/article_full/black-widow-characters.jpg",
      caption: "Watched it yet?",
    },
    {
      id: "3",
      username: "Captain America",
      userImg:
        "https://cdn.s7.shopdisney.eu/is/image/DisneyStoreES/461063731735?fmt=jpeg&qlt=90&wid=652&hei=652",
      img: "https://images.thedirect.com/media/article_full/capagent_1.jpg",
      caption: "How's This? ;)",
    },
    {
      id: "4",
      username: "Kiley",
      userImg:
        "https://www.hopperhq.com/wf/assets/60c2316f312ff6b0fa9c945f/62b0749344c13b0f2295c501_kyliejenner.webp",
      img: "https://imgix.bustle.com/uploads/image/2018/7/31/1f186f0a-224e-430c-90b3-87ca11f21f73-kyles.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg",
      caption: "Check my new posts, Guys ...",
    },
    {
      id: "5",
      username: "Ironman",
      userImg:
        "https://pbs.twimg.com/profile_images/1439953850471911426/s4pE9SYa_400x400.jpg",
      img: "https://e1.pxfuel.com/desktop-wallpaper/416/222/desktop-wallpaper-iron-man-top-ironman-backgrounds-9-iron-man-for-laptop.jpg",
      caption: "Check mines too ...",
    },
  ];
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}
