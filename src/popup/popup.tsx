import { h, render } from 'preact'

import { Pending } from '../components/pending'
import { Register } from '../components/register'

import './popup.html'

render(
  <Pending
    component={Promise.reject(null)}
    loading={<div class="loading" />}
    fallback={<Register onStore={console.log} />}
  />,
  document.body,
)
