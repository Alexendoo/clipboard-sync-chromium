import { h, render } from 'preact'

import { Register } from '../components/register'
import { Pending } from '../components/pending'

import './popup.html'

render(
  <Pending
    component={Promise.reject(null)}
    loading={<div class="loading" />}
    fallback={<Register />}
  />,
  document.body,
)
