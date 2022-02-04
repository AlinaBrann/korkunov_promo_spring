const getters = {
  isPortrait: (state) => state.app.isPortrait,
  isMobile: (state) => state.app.isMobile,
  showMobileNav: (state) => state.app.showMobileNav,
  windowWidth: (state) => state.app.windowWidth,
  scrollY: (state) => state.app.scrollY,
  token: (state) => state.account.token,
  user: (state) => state.account.user,
  login: (state) => state.account.login,
  winners: (state) => state.app.winners,
  popup: (state) => state.app.popup,
  signupSocId: (state) => state.app.signupSocId,
  privateMode: (state) => state.app.privateMode,
  audio_id: (state) => state.app.audio_id,
  sender_name: (state) => state.app.sender_name,
  recipient_name: (state) => state.app.recipient_name,
  video_url: (state) => state.app.video_url,
  pincode: (state) => state.app.pincode,
  congratulation_id: (state) => state.app.congratulation_id,
  
};

export default getters;
