import Vue from 'vue'
import Router from 'vue-router'
import App from './App'

import Index from './demos/Index'
import Tpl from './demos/_Tpl'
import ActionSheet from './demos/ActionSheet'
import Datetime from './demos/Datetime'
import Dialog from './demos/Dialog'
import Flexbox from './demos/Flexbox'
import Layout from './demos/Layout'
import MButton from './demos/MButton'
import MInput from './demos/MInput'
import MTextarea from './demos/MTextarea'
import Picker from './demos/Picker'
import Popup from './demos/Popup'
import Radio from './demos/Radio'
import Tag from './demos/Tag'

const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.use(Router)

const router = new Router({
  history: false, // use history=false when testing
  saveScrollPosition: true
})

router.map({
  '/': {
    component: Index
  },
  '/components/_tpl': {
    component: Tpl
  },
  '/components/action-sheet': {
    component: ActionSheet
  },
  '/components/datetime': {
    component: Datetime
  },
  '/components/dialog': {
    component: Dialog
  },
  '/components/flexbox': {
    component: Flexbox
  },
  '/components/layout': {
    component: Layout
  },
  '/components/m-button': {
    component: MButton
  },
  '/components/m-input': {
    component: MInput
  },
  '/components/m-textarea': {
    component: MTextarea
  },
  '/components/picker': {
    component: Picker
  },
  '/components/popup': {
    component: Popup
  },
  '/components/radio': {
    component: Radio
  },
  '/components/tag': {
    component: Tag
  }
})

router.start(App, '#app')
