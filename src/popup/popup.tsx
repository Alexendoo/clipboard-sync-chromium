import { h, render, Component } from 'preact'
import { Router, Route } from 'preact-router'
import { Store } from 'redux'

import { State, loadStore } from '../state'
import { Register } from '../components/register'
import { Pending } from '../components/pending'

require('./popup.html')

render(
  <Pending
    component={Promise.reject(null)}
    loading={<div class="loading" />}
    fallback={<Register />}
  />,
  document.body,
)
