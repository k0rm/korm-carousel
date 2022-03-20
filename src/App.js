import { Carousel } from "./components";


function App() {
  return (
    <div className="App">
      <Carousel
        images={[
          "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6606.png&w=350&h=254",
          "https://dotorg.brightspotcdn.com/dims4/default/05583ce/2147483647/strip/true/crop/800x800+0+0/resize/1200x1200!/quality/90/?url=http%3A%2F%2Fsoi-brightspot.s3.amazonaws.com%2Fdotorg%2F8b%2Fea%2F46d1425f493aa39511659f5cc12d%2F800x800-damian-lillard.jpg",
          "https://cloudfront-us-east-1.images.arcpublishing.com/opb/GM36AKBAXFA5ZOQ4LOLTXOGIAU.jpg"
        ]}
        size={"medium"}
      />
    </div>
  );
}

export default App;
