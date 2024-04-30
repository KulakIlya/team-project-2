const themePicker = document.querySelectorAll('.theme-picker-form');
const root = document.querySelector(':root');
const themes = {
  red: {
    '--accent': '#ed3b44',
    '--mobile-hero-bg-1x': 'url(../images/hero_mobile_bg_red_1x.png)',
    '--mobile-hero-bg-2x': 'url(../images/hero_mobile_bg_red_2x.png)',
    '--mobile-hero-bg-webP-1x': 'url(../images/hero_mobile_bg_red_1x.webp)',
    '--mobile-hero-bg-webP-2x': 'url(../images/hero_mobile_bg_red_2x.webp)',

    '--tablet-hero-bg-1x': 'url(../images/hero_tablet_bg_red_1x.png)',
    '--tablet-hero-bg-2x': 'url(../images/hero_tablet_bg_red_2x.png)',
    '--tablet-hero-bg-webP-1x': 'url(../images/hero_tablet_bg_red_1x.webp)',
    '--tablet-hero-bg-webP-2x': 'url(../images/hero_tablet_bg_red_2x.webp)',

    '--desktop-hero-bg-1x': 'url(../images/hero_desktop_bg_red_1x.png)',
    '--desktop-hero-bg-2x': 'url(../images/hero_desktop_bg_red_2x.png)',
    '--desktop-hero-bg-webP-1x': 'url(../images/hero_desktop_bg_red_1x.webp)',
    '--desktop-hero-bg-webP-2x': 'url(../images/hero_desktop_bg_red_2x.webp)',

    '--mobile-cover-bg-1x': 'url(../images/covers_mobile_bg_red_1x.png)',
    '--mobile-cover-bg-2x': 'url(../images/covers_mobile_bg_red_2x.png)',
    '--mobile-cover-bg-webP-1x': 'url(../images/covers_mobile_bg_red_1x.webp)',
    '--mobile-cover-bg-webP-2x': 'url(../images/covers_mobile_bg_red_2x.webp)',

    '--tablet-cover-bg-1x': 'url(../images/covers_tablet_bg_red_1x.png)',
    '--tablet-cover-bg-2x': 'url(../images/covers_tablet_bg_red_2x.png)',

    '--tablet-cover-bg-webP-1x': 'url(../images/covers_tablet_bg_red_1x.webp)',
    '--tablet-cover-bg-webP-2x': 'url(../images/covers_tablet_bg_red_2x.webp)',

    '--desktop-cover-bg-1x': 'url(../images/covers_desktop_bg_red_1x.png)',
    '--desktop-cover-bg-2x': 'url(../images/covers_desktop_bg_red_2x.png)',
    '--desktop-cover-bg-webP-1x':
      'url(../images/covers_desktop_bg_red_1x.webp)',
    '--desktop-cover-bg-webP-2x':
      'url(../images/covers_desktop_bg_red_2x.webp)',
  },
  green: {
    '--accent': '#c6e327',
    '--mobile-hero-bg-1x': 'url(../images/hero_mobile_bg_green_1x.png)',
    '--mobile-hero-bg-2x': 'url(../images/hero_mobile_bg_green_2x.png)',
    '--mobile-hero-bg-webP-1x': 'url(../images/hero_mobile_bg_green_1x.webp)',
    '--mobile-hero-bg-webP-2x': 'url(../images/hero_mobile_bg_green_2x.webp)',

    '--tablet-hero-bg-1x': 'url(../images/hero_tablet_bg_green_1x.png)',
    '--tablet-hero-bg-2x': 'url(../images/hero_tablet_bg_green_2x.png)',
    '--tablet-hero-bg-webP-1x': 'url(../images/hero_tablet_bg_green_1x.webp)',
    '--tablet-hero-bg-webP-2x': 'url(../images/hero_tablet_bg_green_2x.webp)',

    '--desktop-hero-bg-1x': 'url(../images/hero_desktop_bg_green_1x.png)',
    '--desktop-hero-bg-2x': 'url(../images/hero_desktop_bg_green_2x.png)',
    '--desktop-hero-bg-webP-1x': 'url(../images/hero_desktop_bg_green_1x.webp)',
    '--desktop-hero-bg-webP-2x': 'url(../images/hero_desktop_bg_green_2x.webp)',

    '--mobile-cover-bg-1x': 'url(../images/covers_mobile_bg_green_1x.png)',
    '--mobile-cover-bg-2x': 'url(../images/covers_mobile_bg_green_2x.png)',
    '--mobile-cover-bg-webP-1x':
      'url(../images/covers_mobile_bg_green_1x.webp)',
    '--mobile-cover-bg-webP-2x':
      'url(../images/covers_mobile_bg_green_2x.webp)',

    '--tablet-cover-bg-1x': 'url(../images/covers_tablet_bg_green_1x.png)',
    '--tablet-cover-bg-2x': 'url(../images/covers_tablet_bg_green_2x.png)',

    '--tablet-cover-bg-webP-1x':
      'url(../images/covers_tablet_bg_green_1x.webp)',
    '--tablet-cover-bg-webP-2x':
      'url(../images/covers_tablet_bg_green_2x.webp)',

    '--desktop-cover-bg-1x': 'url(../images/covers_desktop_bg_green_1x.png)',
    '--desktop-cover-bg-2x': 'url(../images/covers_desktop_bg_green_2x.png)',
    '--desktop-cover-bg-webP-1x':
      'url(../images/covers_desktop_bg_green_1x.webp)',
    '--desktop-cover-bg-webP-2x':
      'url(../images/covers_desktop_bg_green_2x.webp)',
  },
  blue: {
    '--accent': '#0041e8',
    '--mobile-hero-bg-1x': 'url(../images/hero_mobile_bg_blue_1x.png)',
    '--mobile-hero-bg-2x': 'url(../images/hero_mobile_bg_blue_2x.png)',
    '--mobile-hero-bg-webP-1x': 'url(../images/hero_mobile_bg_blue_1x.webp)',
    '--mobile-hero-bg-webP-2x': 'url(../images/hero_mobile_bg_blue_2x.webp)',

    '--tablet-hero-bg-1x': 'url(../images/hero_tablet_bg_blue_1x.png)',
    '--tablet-hero-bg-2x': 'url(../images/hero_tablet_bg_blue_2x.png)',
    '--tablet-hero-bg-webP-1x': 'url(../images/hero_tablet_bg_blue_1x.webp)',
    '--tablet-hero-bg-webP-2x': 'url(../images/hero_tablet_bg_blue_2x.webp)',

    '--desktop-hero-bg-1x': 'url(../images/hero_desktop_bg_blue_1x.png)',
    '--desktop-hero-bg-2x': 'url(../images/hero_desktop_bg_blue_2x.png)',
    '--desktop-hero-bg-webP-1x': 'url(../images/hero_desktop_bg_blue_1x.webp)',
    '--desktop-hero-bg-webP-2x': 'url(../images/hero_desktop_bg_blue_2x.webp)',

    '--mobile-cover-bg-1x': 'url(../images/covers_mobile_bg_blue_1x.png)',
    '--mobile-cover-bg-2x': 'url(../images/covers_mobile_bg_blue_2x.png)',
    '--mobile-cover-bg-webP-1x': 'url(../images/covers_mobile_bg_blue_1x.webp)',
    '--mobile-cover-bg-webP-2x': 'url(../images/covers_mobile_bg_blue_2x.webp)',

    '--tablet-cover-bg-1x': 'url(../images/covers_tablet_bg_blue_1x.png)',
    '--tablet-cover-bg-2x': 'url(../images/covers_tablet_bg_blue_2x.png)',

    '--tablet-cover-bg-webP-1x': 'url(../images/covers_tablet_bg_blue_1x.webp)',
    '--tablet-cover-bg-webP-2x': 'url(../images/covers_tablet_bg_blue_2x.webp)',

    '--desktop-cover-bg-1x': 'url(../images/covers_desktop_bg_blue_1x.png)',
    '--desktop-cover-bg-2x': 'url(../images/covers_desktop_bg_blue_2x.png)',
    '--desktop-cover-bg-webP-1x':
      'url(../images/covers_desktop_bg_blue_1x.webp)',
    '--desktop-cover-bg-webP-2x':
      'url(../images/covers_desktop_bg_blue_2x.webp)',
  },
  'dark-orange': {
    '--accent': '#e6533c',
    '--mobile-hero-bg-1x': 'url(../images/hero_mobile_bg_dark-orange_1x.png)',
    '--mobile-hero-bg-2x': 'url(../images/hero_mobile_bg_dark-orange_2x.png)',
    '--mobile-hero-bg-webP-1x':
      'url(../images/hero_mobile_bg_dark-orange_1x.webp)',
    '--mobile-hero-bg-webP-2x':
      'url(../images/hero_mobile_bg_dark-orange_2x.webp)',

    '--tablet-hero-bg-1x': 'url(../images/hero_tablet_bg_dark-orange_1x.png)',
    '--tablet-hero-bg-2x': 'url(../images/hero_tablet_bg_dark-orange_2x.png)',
    '--tablet-hero-bg-webP-1x':
      'url(../images/hero_tablet_bg_dark-orange_1x.webp)',
    '--tablet-hero-bg-webP-2x':
      'url(../images/hero_tablet_bg_dark-orange_2x.webp)',

    '--desktop-hero-bg-1x': 'url(../images/hero_desktop_bg_dark-orange_1x.png)',
    '--desktop-hero-bg-2x': 'url(../images/hero_desktop_bg_dark-orange_2x.png)',
    '--desktop-hero-bg-webP-1x':
      'url(../images/hero_desktop_bg_dark-orange_1x.webp)',
    '--desktop-hero-bg-webP-2x':
      'url(../images/hero_desktop_bg_dark-orange_2x.webp)',

    '--mobile-cover-bg-1x':
      'url(../images/covers_mobile_bg_dark-orange_1x.png)',
    '--mobile-cover-bg-2x':
      'url(../images/covers_mobile_bg_dark-orange_2x.png)',
    '--mobile-cover-bg-webP-1x':
      'url(../images/covers_mobile_bg_dark-orange_1x.webp)',
    '--mobile-cover-bg-webP-2x':
      'url(../images/covers_mobile_bg_dark-orange_2x.webp)',

    '--tablet-cover-bg-1x':
      'url(../images/covers_tablet_bg_dark-orange_1x.png)',
    '--tablet-cover-bg-2x':
      'url(../images/covers_tablet_bg_dark-orange_2x.png)',

    '--tablet-cover-bg-webP-1x':
      'url(../images/covers_tablet_bg_dark-orange_1x.webp)',
    '--tablet-cover-bg-webP-2x':
      'url(../images/covers_tablet_bg_dark-orange_2x.webp)',

    '--desktop-cover-bg-1x':
      'url(../images/covers_desktop_bg_dark-orange_1x.png)',
    '--desktop-cover-bg-2x':
      'url(../images/covers_desktop_bg_dark-orange_2x.png)',
    '--desktop-cover-bg-webP-1x':
      'url(../images/covers_desktop_bg_dark-orange_1x.webp)',
    '--desktop-cover-bg-webP-2x':
      'url(../images/covers_desktop_bg_dark-orange_2x.webp)',
  },
  'dark-green': {
    '--accent': '#2b4441',
    '--mobile-hero-bg-1x': 'url(../images/hero_mobile_bg_dark-green_1x.png)',
    '--mobile-hero-bg-2x': 'url(../images/hero_mobile_bg_dark-green_2x.png)',
    '--mobile-hero-bg-webP-1x':
      'url(../images/hero_mobile_bg_dark-green_1x.webp)',
    '--mobile-hero-bg-webP-2x':
      'url(../images/hero_mobile_bg_dark-green_2x.webp)',

    '--tablet-hero-bg-1x': 'url(../images/hero_tablet_bg_dark-green_1x.png)',
    '--tablet-hero-bg-2x': 'url(../images/hero_tablet_bg_dark-green_2x.png)',
    '--tablet-hero-bg-webP-1x':
      'url(../images/hero_tablet_bg_dark-green_1x.webp)',
    '--tablet-hero-bg-webP-2x':
      'url(../images/hero_tablet_bg_dark-green_2x.webp)',

    '--desktop-hero-bg-1x': 'url(../images/hero_desktop_bg_dark-green_1x.png)',
    '--desktop-hero-bg-2x': 'url(../images/hero_desktop_bg_dark-green_2x.png)',
    '--desktop-hero-bg-webP-1x':
      'url(../images/hero_desktop_bg_dark-green_1x.webp)',
    '--desktop-hero-bg-webP-2x':
      'url(../images/hero_desktop_bg_dark-green_2x.webp)',

    '--mobile-cover-bg-1x': 'url(../images/covers_mobile_bg_dark-green_1x.png)',
    '--mobile-cover-bg-2x': 'url(../images/covers_mobile_bg_dark-green_2x.png)',
    '--mobile-cover-bg-webP-1x':
      'url(../images/covers_mobile_bg_dark-green_1x.webp)',
    '--mobile-cover-bg-webP-2x':
      'url(../images/covers_mobile_bg_dark-green_2x.webp)',

    '--tablet-cover-bg-1x': 'url(../images/covers_tablet_bg_dark-green_1x.png)',
    '--tablet-cover-bg-2x': 'url(../images/covers_tablet_bg_dark-green_2x.png)',

    '--tablet-cover-bg-webP-1x':
      'url(../images/covers_tablet_bg_dark-green_1x.webp)',
    '--tablet-cover-bg-webP-2x':
      'url(../images/covers_tablet_bg_dark-green_2x.webp)',

    '--desktop-cover-bg-1x':
      'url(../images/covers_desktop_bg_dark-green_1x.png)',
    '--desktop-cover-bg-2x':
      'url(../images/covers_desktop_bg_dark-green_2x.png)',
    '--desktop-cover-bg-webP-1x':
      'url(../images/covers_desktop_bg_dark-green_1x.webp)',
    '--desktop-cover-bg-webP-2x':
      'url(../images/covers_desktop_bg_dark-green_2x.webp)',
  },
  orange: {
    '--accent': '#ff7f08',
    '--mobile-hero-bg-1x': 'url(../images/hero_mobile_bg_orange_1x.png)',
    '--mobile-hero-bg-2x': 'url(../images/hero_mobile_bg_orange_2x.png)',
    '--mobile-hero-bg-webP-1x': 'url(../images/hero_mobile_bg_orange_1x.png)',
    '--mobile-hero-bg-webP-2x': 'url(../images/hero_mobile_bg_orange_2x.png)',

    '--tablet-hero-bg-1x': 'url(../images/hero_tablet_bg_orange_1x.png)',
    '--tablet-hero-bg-2x': 'url(../images/hero_tablet_bg_orange_2x.png)',
    '--tablet-hero-bg-webP-1x': 'url(../images/hero_tablet_bg_orange_1x.webp)',
    '--tablet-hero-bg-webP-2x': 'url(../images/hero_tablet_bg_orange_2x.webp)',

    '--desktop-hero-bg-1x': 'url(../images/hero_desktop_bg_orange_1x.png)',
    '--desktop-hero-bg-2x': 'url(../images/hero_desktop_bg_orange_2x.png)',
    '--desktop-hero-bg-webP-1x':
      'url(../images/hero_desktop_bg_orange_1x.webp)',
    '--desktop-hero-bg-webP-2x':
      'url(../images/hero_desktop_bg_orange_2x.webp)',

    '--mobile-cover-bg-1x': 'url(../images/covers_mobile_bg_orange_1x.png)',
    '--mobile-cover-bg-2x': 'url(../images/covers_mobile_bg_orange_2x.png)',
    '--mobile-cover-bg-webP-1x':
      'url(../images/covers_mobile_bg_orange_1x.webp)',
    '--mobile-cover-bg-webP-2x':
      'url(../images/covers_mobile_bg_orange_2x.webp)',

    '--tablet-cover-bg-1x': 'url(../images/covers_tablet_bg_orange_1x.png)',
    '--tablet-cover-bg-2x': 'url(../images/covers_tablet_bg_orange_2x.png)',

    '--tablet-cover-bg-webP-1x':
      'url(../images/covers_tablet_bg_orange_1x.webp)',
    '--tablet-cover-bg-webP-2x':
      'url(../images/covers_tablet_bg_orange_2x.webp)',

    '--desktop-cover-bg-1x': 'url(../images/covers_desktop_bg_orange_1x.png)',
    '--desktop-cover-bg-2x': 'url(../images/covers_desktop_bg_orange_2x.png)',
    '--desktop-cover-bg-webP-1x':
      'url(../images/covers_desktop_bg_orange_1x.webp)',
    '--desktop-cover-bg-webP-2x':
      'url(../images/covers_desktop_bg_orange_2x.webp)',
  },
};

const setVariables = vars =>
  Object.entries(vars).forEach(v => root.style.setProperty(v[0], v[1]));

themePicker.forEach(item => {
  const formInputs = item?.elements;
  const storedTheme = localStorage.getItem('picked-theme') ?? 'red';

  formInputs['theme-picker'].forEach(
    item => (item.checked = storedTheme === item.value)
  );
  setVariables(themes[storedTheme]);

  item?.addEventListener('change', e => {
    localStorage.setItem('picked-theme', e.target.value);
    setVariables(themes[e.target.value]);
  });
});
