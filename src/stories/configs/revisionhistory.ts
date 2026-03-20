const revisions = [
  {
    'revisionId': '1',
    'createdAt': '2023-11-25T03:30:46.171Z',
    'content': '<h2>Rev 1</h2>'
  },
  {
    'revisionId': '2',
    'createdAt': '2023-11-25T12:06:09.675Z',
    'content': '<h2>Rev 2</h2>'
  },
  {
    'revisionId': '3',
    'createdAt': '2023-11-27T03:23:32.351Z',
    'content': '<h2>Rev 3</h2>'
  },
  {
    'revisionId': '4',
    'createdAt': '2023-11-29T12:35:16.203Z',
    'content': '<h2>Rev 4</h2>'
  },
  {
    'revisionId': '5',
    'createdAt': '2023-11-28T08:01:56.100Z',
    'content': '<h2>Rev 5</h2>'
  }
];

export default {
  toolbar: 'revisionhistory',
  name: 'revisionhistory',
  config: {
    revisionhistory_fetch: () => Promise.resolve(revisions),
  }
};
