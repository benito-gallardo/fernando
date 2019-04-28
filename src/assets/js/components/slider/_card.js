export default {
  name: "Card",
  props: {
    headline: String,
    imgName: String,
    text: String
  },
  template: `
   <div class="card">
    <img
      :src="imgName"
      class="card-icon"
      alt="card icon"
    />
    <div class='card-content'>
      <h3 class='headline'>{{headline}}</h3>
      <p>{{text}}</p>
    </div>
  </div>
  `
};

