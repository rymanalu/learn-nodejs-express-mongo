const Category = require('../models/category');

class CategoryController {

  static index(Request, Response) {
    Category.find({}, {}, {}, (err, categories) => {
      if (err) {
        Response.status(400);

        Response.json({
          status: false,
          message: err.message,
          data: null
        });

        return;
      }

      Response.json({
        status: true,
        message: 'OK',
        data: categories
      });
    });
  }

  static store(Request, Response) {
    Category.create(Request.body, (err, category) => {
      if (err) {
        Response.status(400);

        Response.json({
          status: false,
          message: err.message,
          data: null
        });

        return;
      }

      Response.status(201);

      Response.json({
        status: true,
        message: 'Created',
        data: category
      });
    });
  }

  static show(Request, Response) {
    Category.findOne({_id: Request.params.id}, {}, {}, (err, category) => {
      if (err) {
        Response.status(400);

        Response.json({
          status: false,
          message: err.message,
          data: null
        });

        return;
      }

      Response.json({
        status: true,
        message: 'OK',
        data: category
      });
    });
  }

  static update(Request, Response) {
    Category.findOneAndUpdate({_id: Request.params.id}, Request.body, {new: true}, (err, category) => {
      if (err) {
        Response.status(400);

        Response.json({
          status: false,
          message: err.message,
          data: null
        });

        return;
      }

      Response.status(201);

      Response.json({
        status: true,
        message: 'Updated',
        data: category
      });
    });
  }

  static destroy(Request, Response) {
    Category.findOneAndRemove({_id: Request.params.id}, {}, (err) => {
      if (err) {
        Response.status(400);

        Response.json({
          status: false,
          message: err.message,
          data: null
        });

        return;
      }

      Response.status(201);

      Response.json({
        status: true,
        message: 'Deleted',
        data: null
      });
    });
  }

}

module.exports = CategoryController;
