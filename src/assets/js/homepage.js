import './components/_nav';
import './components/_form';
const sliderList = $('.chat-slider-list');
$('#chat-slider').on('slide.bs.carousel', (e) => {
  const active = e.to;
  sliderList.find('a.active').removeClass('active');
  sliderList.find(`[data-slide-to="${active}"]`).addClass('active');
})
