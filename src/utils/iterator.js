import { on } from 'events'

import merge from 'fast-merge-async-iterators'

export function combine(...iterables) {
  // @ts-ignore weird
  return merge('iters-close-wait', ...iterables)
}

export async function* named_on(events, event, options) {
  for await (const payload of on(events, event, options))
    yield { event, payload }
}
