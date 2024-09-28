from flask.views import MethodView
from flask_smorest import abort

from shorter import blp



@blp.route("create/")
class Link(MethodView):
    def post(self):
        ...