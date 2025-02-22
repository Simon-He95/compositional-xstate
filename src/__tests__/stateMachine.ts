import { CreateMachine } from '../index';
/*
const promiseMachine = createMachine({
  id: 'promise',
  initial: 'pending',
  states: {
    pending: {
      on: {
        RESOLVE: { target: 'resolved' },
        REJECT: { target: 'rejected' }
      }
    },
    resolved: {
      type: 'final'
    },
    rejected: {
      type: 'final'
    }
  }
});
*/



function promiseMachine(c: CreateMachine) {
  const g = c({
    id: 'promise',
  })
  const pending = g.state('pending')
  const resolved = g.state('resolved').final()
  const rejected = g.state('rejected').final()

  g.transition('RESOLVE')
    .from(pending).to(resolved)

  g.transition('REJECT')
    .from(pending).to(rejected)
  return pending
}
