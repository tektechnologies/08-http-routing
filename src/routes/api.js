'use strict';

const router = require('../lib/router');

router.get('/api/notes', (req, res) => {
  json(res, [
    { id: 1 },
  ]);
});