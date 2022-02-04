/* eslint-disable */

import Vue from 'vue';

const app = {
  state: {
    isPortrait: null,
    isMobile: null,
    showMobileNav: null,
    windowWidth: null,
    scrollY: null,
    popup: {
      opened: null,
      openedPopupContent: null,
      currentPopup: null,
      className: null,
      disabled: null,
      message: {
        head: null,
        body: null,
        btn: null,
      },
      data: null,
    },
    signupSocId: null,
    privateMode: 0,
    audio_id: null,
    sender_name: null,
    sender_email: null,
    recipient_name: null,
    video_url: null,
    pincode: null,
    congratulation_id: null
  },
  mutations: {
    CHANGE_PRIVATE(state, privateMode) {
      state.privateMode = privateMode;
    },
    CHANGE_AUDIO_ID(state, audio_id) {
      state.audio_id = audio_id;
    },
    CHANGE_SENDER_NAME(state, sender_name) {
      state.sender_name = sender_name;
    },
    CHANGE_RECIPIENT_NAME(state, recipient_name) {
      state.recipient_name = recipient_name;
    },
    CHANGE_VIDEO_URL(state, video_url) {
      state.video_url = video_url;
    },
    CHANGE_PINCODE(state, pincode) {
      state.pincode = pincode;
    },
    CHANGE_CONGRATULATION_ID(state, congratulation_id) {
      state.congratulation_id = congratulation_id;
    },
    
  	SIGNUP_SOC_ID: (state, data) => {
  		state.signupSocId = data;
  	},

    SHOW_POPUP_CONTENT: (state, open) => {
      state.popup.openedPopupContent = open;
      state.popup.opened = open;

      if (open) {
      	document.body.classList.add("modal-open");
      } else {
      	document.body.classList.remove("modal-open");
      }
    },

    SHOW_POPUP: (state, obj) => {
      state.popup.opened = obj.opened;
      state.popup.currentPopup = obj.currentPopup;
      state.popup.message = obj.message;
      state.popup.data = obj.data;
      state.popup.className = obj.className;
      state.popup.disabled = obj.disabled;

      state.popup.openedPopupContent = obj.opened;

      if (obj.opened)
	      document.body.classList.add("modal-open");
	  else
  	  	document.body.classList.remove("modal-open");
    },

    CHANGE_POPUP_CLASSNAME: (state, name) => {
      state.popup.className = name;
    },

    UPDATE_IS_MOBILE: (state, isMobile) => {
      state.isMobile = isMobile;
    },

    SHOW_MOBILE_NAV: (state, show) => {
      state.showMobileNav = show;
    },

    UPDATE_IS_PORTRAIT: (state, isPortrait) => {
      state.isPortrait = isPortrait;
    },

    UPDATE_WINDOW_WIDTH(state, width) {
      state.windowWidth = width;
    },

    UPDATE_WINDOW_SCROLL_Y(state, val) {
      state.scrollY = val;
    },
  },
  actions: {
  }
};

export default app;
