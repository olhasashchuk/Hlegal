(() => {
   const headerBurgerBtn = document.querySelector('.header__box-burger')
   const headerNavigation = document.querySelector('.header__nav')
   const headerCloseBtn = document.querySelector('.header__nav-close')

   headerBurgerBtn.addEventListener ('click', () => {
      headerNavigation.classList.add('active')
   })

   headerCloseBtn.addEventListener ('click', () => {
      headerNavigation.classList.remove('active')
   })
}
)();

(() => {
   const tabsItems = document.querySelectorAll('.tabs__lists-item')
   const contentsItems = document.querySelectorAll('.tabs__contents-item')

   tabsItems.forEach ((tab, index) => {
      tab.addEventListener('click', e => {
         contentsItems.forEach(content => {
            content.classList.remove('active')
         })
         tabsItems.forEach (tab => {
            tab.classList.remove('active')
         })
         tabsItems[index].classList.add('active')
         contentsItems[index].classList.add('active')
      })
   })
})();

// slider team
const isTeamSlider = document.querySelector('.team__swiper');
if(isTeamSlider) {
   const teamSwiper = new Swiper('.team__swiper', {
      spaceBetween: 30,
      autoHeight: true,
      loop: true,
      autoplay: true,
      pagination: {
      el: '.team__swiper-pagination',
      }
   })
};

// slider achievment
const isAchievmentSlider = document.querySelector('.achievment__swiper');
if(isAchievmentSlider) {
   const achievmentSwiper = new Swiper('.achievment__swiper', {
      slidesPerView: 1,
      autoHeight: true,
      loop: true,
      autoplay: true,
      pagination: {
      el: '.achievment__swiper-pagination',
      },
      breakpoints: {
         768: {
           slidesPerView: 4,
           spaceBetween: 40
         }
      }
   })
};

// pop up form
(() => {
   const popUpForm = document.querySelector('.form');
   const openFormBtn = document.querySelector('.ecommerce__body-btn');
   const closeFormBtn = document.querySelector('.form__close');
   const isForm = document.querySelector('.form__content');
   const submitFormBtn = document.querySelector('.form__btn');

   openFormBtn.addEventListener('click', openForm);
   closeFormBtn.addEventListener('click', closeForm);
   isForm.addEventListener('submit', onSubmitForm);

   function closeForm(){
      popUpForm.classList.remove('active');
   };
   function openForm(){
      popUpForm.classList.add('active');
   };

   function onSubmitForm(e){
      e.preventDefault();

      setTimeout(()=>{
            popUpForm();
         submitFormBtn.classList.add('active');
      }, 800)
   }
})();


