import React from "react";
import Posts from "./Posts";
import Stories from "./Stories";

const Feed = () => {
  return (
    <main>
      <section>
        {/* Stories*/}
        <Stories />
        {/* Posts*/}
        <Posts />
      </section>
      <section>
        {/* Mini profile*/}
        {/* Suggestions*/}
      </section>
    </main>
  );
};

export default Feed;
