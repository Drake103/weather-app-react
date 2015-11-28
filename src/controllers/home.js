import Controller from '../base/controller';
import HomeIndexView from '../views/home_index';

export default class HomeController extends Controller {
  index(ctx, done) {
    this.renderView(HomeIndexView, done);
  }
}
