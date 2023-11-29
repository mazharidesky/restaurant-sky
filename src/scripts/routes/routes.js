import ListResaturant from '../views/pages/list-restaurant';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': ListResaturant,
  '/list-restaurant': ListResaturant,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
